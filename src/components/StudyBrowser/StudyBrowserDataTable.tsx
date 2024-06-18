/*
import React from "react";
import {useFilters, useSortBy, useTable} from 'react-table';

function StudyBrowserDataTable({data}) {
    const columns = React.useMemo(() => [
        {Header: 'ID', accessor: 'id'},
        {Header: 'Name', accessor: 'name'},
        {Header: 'Species Scientific Name', accessor: 'speciesScientificName'},
        {Header: 'Type', accessor: 'type'}
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({columns, data}, useFilters, useSortBy);

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render('Header')}
                            <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => (
                            <td {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </td>
                        ))}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};


export default StudyBrowserDataTable;*/
