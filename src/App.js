import React, {Component} from "react";
import {hot} from "react-hot-loader";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          studies: [],
          variants: []
        };
      }

    componentDidMount() {
        fetch("https://www.ebi.ac.uk/eva/webservices/rest/v1/meta/studies/all?species=Horse")
        .then(response => response.json())
        .then(studiesResult => {
            const studies = studiesResult.response[0].result.map(item => item.id);
            const studiesStr = studies.join("%2C");
            const n = 100;
            fetch(`https://www.ebi.ac.uk/eva/webservices/rest/v1/segments/1:3000000-3100000/variants?merge=true&_dc=1673361840059&species=ecaballus_20&studies=${studiesStr}&page=1&skip=0&limit=${n}`)
            .then(response => response.json())
            .then(variantsResult => {
                let variants = variantsResult.response[0].result;
                for (let i = 0; i < variants.length; i++) {
                    variants[i].alleleFreqs = {};
                    for (const key in variants[i].sourceEntries) {
                        if (variants[i].sourceEntries[key].hasOwnProperty("cohortStats")
                            && variants[i].sourceEntries[key].cohortStats.hasOwnProperty("ALL")) {
                                variants[i].alleleFreqs[key.split("_")[0]] = variants[i].sourceEntries[key].cohortStats.ALL.maf;
                            }
                    }
                }

                this.setState({
                    isLoaded: true,
                    studies: studies,
                    variants: variants
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error: error
                })
            });
        },
        error => {
            this.setState({
                isLoaded: true,
                error: error
            })
        });
        
    }


  render(){
    const { error, isLoaded, studies, variants } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table className="vf-table--compact">
            <thead className="vf-table__header">
                <tr className="vf-table__row">
                    <th className="vf-table__heading" scope="col">Chr</th>
                    <th className="vf-table__heading" scope="col">Pos</th>
                    <th className="vf-table__heading" scope="col">Ref</th>
                    <th className="vf-table__heading" scope="col">Alt</th>
                    {studies.map(study => (
                        <th className="vf-table__heading" scope="col">{study}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="vf-table__body">
                {variants.map(item => (
                    <tr className="vf-table__row">
                        <td className="vf-table__cell | vf-table__heading" scope="row">{item.chromosome}</td>
                        <td className="vf-table__cell | vf-table__heading" scope="row">{item.start}</td>
                        <td className="vf-table__cell | vf-table__heading" scope="row">{item.reference}</td>
                        <td className="vf-table__cell | vf-table__heading" scope="row">{item.alternate}</td>
                        {studies.map(study => (
                            <td className="vf-table__cell">{item.alleleFreqs[study]}</td>
                        ))}
                    </tr>
                ))}
          </tbody>
        </table>
      );
    }
  }
}

export default hot(module)(App);