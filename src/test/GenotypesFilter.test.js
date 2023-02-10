import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GenotypesFilter from "../components/GenotypesFilter"
import {genotypes_filter_test_data} from "./test_data/GenotypesFilterData"


test('check genotype filter view component is loading everything correctly', () => {

    render(<GenotypesFilter
        speciesList={genotypes_filter_test_data.speciesList}
        speciesAssemblyMap={genotypes_filter_test_data.speciesAssemblyMap}
        assemblyList={genotypes_filter_test_data.assemblyList}
        selectedSpecies={genotypes_filter_test_data.selectedSpecies}
        selectedAssembly={genotypes_filter_test_data.selectedAssembly}
        location={genotypes_filter_test_data.location}
        studies={genotypes_filter_test_data.studies}
        selectedStudies = {genotypes_filter_test_data.selectedStudies}
        resultsPerPage={genotypes_filter_test_data.resultsPerPage}
        />)

    // assert species drop down (Equus caballus) is the one selected
    expect(screen.getByRole('option', { name: 'Equus caballus' }).selected).toBe(true)
    // assert species drop down (Gallus gallus) is there in the options but not selected
    expect(screen.getByRole('option', { name: 'Gallus gallus' }).selected).toBe(false)

    // assert assembly drop down (EquCab2.0) is the one selected
    expect(screen.getByRole('option', { name: 'EquCab2.0' }).selected).toBe(true)
    // assert assembly drop down (EquCab3.0) is there in the options but not selected
    expect(screen.getByRole('option', { name: 'EquCab3.0' }).selected).toBe(false)

    // assert location textbox
    expect(screen.getByRole('textbox').value).toBe('1:3000000-3100000')

    // assert results per page drop down - 50 is selected
    expect(screen.getByRole('option', { name: '50' }).selected).toBe(true)
    // assert results per page drop down - 10 and 100 are present in options but not selected
    expect(screen.getByRole('option', { name: '10' }).selected).toBe(false)
    expect(screen.getByRole('option', { name: '100' }).selected).toBe(false)

    // assert studies checkboxes are present and checked
    expect(screen.getByRole('checkbox', {name: 'BROAD_EQUCAB2.0:2008.08.08'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB22866'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB23301'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB23441'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB24624'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB24630'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB25439'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB26741'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB27771'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB30116'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB32686'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB38010'})).toBeChecked()
    expect(screen.getByRole('checkbox', {name: 'PRJEB9799'})).toBeChecked()
})