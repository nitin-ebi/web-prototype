import React, { Component } from "react";
import Pagination from "./Pagination";

class GenotypesTable extends Component {

    render() {
        const error = this.props.error;
        const isLoaded = this.props.isLoaded;
        const studies = this.props.studies;
        const variants = this.props.variants;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div style={{"overflow": "scroll"}}>
                    <table className="vf-table--compact">
                        <thead className="vf-table__header">
                            <tr className="vf-table__row">
                                <th className="vf-table__heading" scope="col">Chr</th>
                                <th className="vf-table__heading" scope="col">Pos</th>
                                <th className="vf-table__heading" scope="col">Ref</th>
                                <th className="vf-table__heading" scope="col">Alt</th>
                                {studies.map(study => (
                                    <th key={study} className="vf-table__heading" scope="col">{study}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="vf-table__body">
                            {variants.map((item, idx, arr) => (
                                <tr key={idx} className="vf-table__row">
                                    <td className="vf-table__cell | vf-table__heading" scope="row">{item.chromosome}</td>
                                    <td className="vf-table__cell | vf-table__heading" scope="row">{item.start}</td>
                                    <td className="vf-table__cell | vf-table__heading" scope="row">{item.reference}</td>
                                    <td className="vf-table__cell | vf-table__heading" scope="row"
                                        style={{"backgroundColor": item.mostSevereConsequences.color}}>{item.alternate}</td>

                                    {studies.map(study => (
                                        <td key={study} className="vf-table__cell">{item.alleleFreqs[study]}</td>
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                    </table>
                    <Pagination
                        currentPage={this.props.currentPage}
                        numPages={this.props.numPages}
                        onPageChange={this.props.onPageChange} />
                </div>
            );
        }
    }
}

export default GenotypesTable;
