import React, { Component } from "react";

class GenotypesFilter extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        switch (name) {
            case "species":
                this.props.onSpeciesChange(value);
                break;
            case "assembly":
                this.props.onAssemblyChange(value)
                break;
            case "location":
                this.props.onLocationChange(value);
                break;
            case "resultsPerPage":
                this.props.onResultsPerPageChange(value);
                break;
            // anything else is assumed to be a study id
            default:
                this.props.onStudiesChange(value);
        }
    }

    render() {
        return (
            <div>
            <form onSubmit={this.props.onSubmit} className="vf-stack vf-stack--400">
                <div className="vf-form__item vf-stack vf-stack--200">
                    <label className="vf-form__label">Organism / Assembly:</label>
                    <select name="species" value={this.props.selectedSpecies} onChange={this.handleInputChange} className="vf-form__select">
                        {this.props.speciesList.map(item => (
                            <option key={item.taxonomyCode} value={item.taxonomyCode} title={item.taxonomyCommonName}>{item.taxonomyScientificName}</option>
                        ))}
                    </select>
                    <select name="assembly" value={this.props.selectedAssembly} onChange={this.handleInputChange} className="vf-form__select">
                        {this.props.assemblyList.map(item => (
                            <option key={item.assemblyCode} value={this.props.selectedSpecies + "_" + item.assemblyCode}>{item.assemblyName}</option>
                        ))}
                    </select>
                </div>
                <div className="vf-form__item vf-stack vf-stack--200">
                    <label className="vf-form__label">Chromosomal Location:</label>
                    <input type="text" name="location" className="vf-form__input"
                     value={this.props.location} onChange={this.handleInputChange}></input>
                </div>

                <fieldset className="vf-form__fieldset vf-stack vf-stack--200">
                    <legend className="vf-form__legend">Studies</legend>
                    {this.props.studies.map(studyId => (
                        <div key={studyId} className="vf-form__item vf-form__item--checkbox">
                          <input type="checkbox" name={studyId} value={studyId} id={studyId}
                            onChange={this.handleInputChange}
                            checked={this.props.selectedStudies.includes(studyId)} className="vf-form__checkbox"></input>
                          <label htmlFor={studyId} className="vf-form__label">{studyId}</label>
                        </div>
                    ))}
                </fieldset>

                <div className="vf-form__item vf-stack vf-stack--200">
                    <label className="vf-form__label">Results per page</label>
                    <select name="resultsPerPage" className="vf-form__select"
                     value={this.props.resultsPerPage} onChange={this.handleInputChange}>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>

                <div className="vf-form__item vf-stack vf-stack--200">
                    <input type="submit" value="Search" className="vf-form__input"></input>
                </div>
            </form>
            </div>
        );
    }

}

export default GenotypesFilter;
