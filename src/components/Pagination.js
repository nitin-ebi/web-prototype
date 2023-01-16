import React, { Component } from "react";

class Pagination extends Component {

    render() {
        const currentPage = this.props.currentPage;
        const numPages = this.props.numPages;
        // subset of page numbers to display
        let pageNumbers = [...new Set([
            1, Math.min(2, numPages), Math.min(3, numPages),
            Math.max(currentPage-1, 1), currentPage, Math.min(currentPage+1, numPages),
            numPages-2, numPages-1, numPages
        ])].sort((a, b) => a - b);
        pageNumbers = pageNumbers.flatMap((num, idx, arr) => {
            // include "..." if the gap is larger than 1
            if (idx > 0 && arr[idx-1] < num-1) {
                return ["...", num];
            }
            return [num]
        });
        return (
            <nav className="vf-pagination">
                <ul className="vf-pagination__list">
                    <li className="vf-pagination__item vf-pagination__item--previous-page">
                        <a onClick={() => this.props.onPageChange(currentPage-1)} href="#" className="vf-pagination__link">Previous</a>
                    </li>
                    {pageNumbers.map((num, idx, arr) => {
                        if (num == currentPage) {
                            return (
                                <li key={num} className="vf-pagination__item vf-pagination__item--is-active">
                                    <span className="vf-pagination__label">{num}</span>
                                </li>
                            );
                        } else if (num == "...") {
                            return <li key={`${num}_${idx}`} className="vf-pagination__item">...</li>
                        } else {
                            return (
                                <li key={num} className="vf-pagination__item">
                                    <a onClick={() => this.props.onPageChange(num)} href="#" className="vf-pagination__link">{num}</a>
                                </li>
                            );
                        }
                    })}
                    <li className="vf-pagination__item vf-pagination__item--next-page">
                        <a onClick={() => this.props.onPageChange(currentPage+1)} href="#" className="vf-pagination__link">Next</a>
                    </li>
                </ul>
            </nav>
        );
    }

}

export default Pagination;
