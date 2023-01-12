import React, { Component } from "react";

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
                <div>
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
                <Pagination currentPage={this.props.currentPage} numPages={this.props.numPages} onPageChange={this.props.onPageChange} />
                </div>
            );
        }
    }
}


class Pagination extends Component {

    render() {
        const currentPage = this.props.currentPage;
        const pageNumbers = [...Array(this.props.numPages + 1).keys()].slice(1);
        return (
            <nav className="vf-pagination">
                <ul className="vf-pagination__list">
                    <li className="vf-pagination__item vf-pagination__item--previous-page">
                        <a onClick={() => this.props.onPageChange(currentPage-1)} href="#" className="vf-pagination__link">Previous</a>
                    </li>
                    {pageNumbers.map(num => {
                        let cn = num == currentPage ? "vf-pagination__item vf-pagination__item--is-active" : "vf-pagination__item";
                        return (<li className={cn}><a onClick={() => this.props.onPageChange(num)} href="#" className="vf-pagination__link">{num}</a></li>);
                    })}
                    <li className="vf-pagination__item vf-pagination__item--next-page">
                        <a onClick={() => this.props.onPageChange(currentPage+1)} href="#" className="vf-pagination__link">Next</a>
                    </li>
                </ul>
            </nav>
        );
    }

}

export default GenotypesTable;