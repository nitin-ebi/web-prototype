import React, { Component } from "react";
import { hot } from "react-hot-loader";
import GenotypesFilter from "./components/GenotypesFilter";
import GenotypesTable from "./components/GenotypesTable";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            species: "ecaballus_20",
            location: "1:3000000-3100000",
            resultsPerPage: 50,
            currentPage: 1
        };
        this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleResultsPerPageChange = this.handleResultsPerPageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        this._fetchData();
    }

    handleSpeciesChange(species) {
        this.setState({species});
    }

    handleLocationChange(location) {
        this.setState({location});
    }

    handleResultsPerPageChange(resultsPerPage) {
        this.setState({resultsPerPage});
    }

    handleSubmit(event) {
        event.preventDefault();
        this._fetchData();
    }

    handlePageChange(currentPage) {
        if (currentPage > 0 && currentPage <= this.state.numPages) {
            this.setState({currentPage});
            this._fetchData();
        }
    }

    _fetchData() {
        this.setState({isLoaded: false})

        // TODO map to the correct species here...
        fetch("https://www.ebi.ac.uk/eva/webservices/rest/v1/meta/studies/all?species=Horse")
        .then(response => response.json())
        .then(studiesResult => {

            // TODO filter by studies?
            const studies = studiesResult.response[0].result.map(item => item.id);
            const studiesStr = studies.join("%2C");
            const skipNum = this.state.resultsPerPage * (this.state.currentPage-1);
            fetch(`https://www.ebi.ac.uk/eva/webservices/rest/v1/segments/${this.state.location}/variants?species=${this.state.species}&studies=${studiesStr}&skip=${skipNum}&limit=${this.state.resultsPerPage}`)
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
                    variants: variants,
                    numPages: Math.ceil(variantsResult.response[0].numTotalResults / this.state.resultsPerPage)
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

    render() {
        return (
            <div className="vf-sidebar vf-sidebar--start">
                <div className="vf-sidebar__inner">
                        <GenotypesFilter
                            species={this.state.species} onSpeciesChange={this.handleSpeciesChange}
                            location={this.state.location} onLocationChange={this.handleLocationChange}
                            resultsPerPage={this.state.resultsPerPage} onResultsPerPageChange={this.handleResultsPerPageChange}
                            onSubmit={this.handleSubmit} />
                        <GenotypesTable 
                            studies={this.state.studies} variants={this.state.variants}
                            error={this.state.error} isLoaded={this.state.isLoaded} 
                            currentPage={this.state.currentPage} numPages={this.state.numPages} onPageChange={this.handlePageChange} />
                </div>
            </div>
        );
    }

}

export default hot(module)(App);
