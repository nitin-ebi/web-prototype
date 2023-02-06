import React from 'react'

import {render, screen} from '@testing-library/react'

import GenotypesFilter from "../components/GenotypesFilter"

test('check genotype filter view component is loading everything correctly', () => {
    const test_props = {
        "speciesList": [
            {
                "taxonomyCode": "ecaballus",
                "taxonomyCommonName": "Horse",
                "taxonomyScientificName": "Equus caballus"
            },
        ],
        "speciesAssemblyMap": {
            "ecaballus": [
                {
                    "assemblyAccession": "GCA_000002305.1",
                    "assemblyChain": "GCA_000002305",
                    "assemblyVersion": "1",
                    "assemblyName": "EquCab2.0",
                    "assemblyCode": "20",
                    "taxonomyId": 9796,
                    "taxonomyCommonName": "Horse",
                    "taxonomyScientificName": "Equus caballus",
                    "taxonomyCode": "ecaballus",
                    "taxonomyEvaName": "horse",
                    "speciesAssemblyCode": "ecaballus_20"
                },
                {
                    "assemblyAccession": "GCA_002863925.1",
                    "assemblyChain": "GCA_002863925",
                    "assemblyVersion": "1",
                    "assemblyName": "EquCab3.0",
                    "assemblyCode": "30",
                    "taxonomyId": 9796,
                    "taxonomyCommonName": "Horse",
                    "taxonomyScientificName": "Equus caballus",
                    "taxonomyCode": "ecaballus",
                    "taxonomyEvaName": "horse",
                    "speciesAssemblyCode": "ecaballus_30"
                }
            ]
        },
        "assemblyList": [
            {
                "assemblyAccession": "GCA_000002305.1",
                "assemblyChain": "GCA_000002305",
                "assemblyVersion": "1",
                "assemblyName": "EquCab2.0",
                "assemblyCode": "20",
                "taxonomyId": 9796,
                "taxonomyCommonName": "Horse",
                "taxonomyScientificName": "Equus caballus",
                "taxonomyCode": "ecaballus",
                "taxonomyEvaName": "horse",
                "speciesAssemblyCode": "ecaballus_20"
            },
            {
                "assemblyAccession": "GCA_002863925.1",
                "assemblyChain": "GCA_002863925",
                "assemblyVersion": "1",
                "assemblyName": "EquCab3.0",
                "assemblyCode": "30",
                "taxonomyId": 9796,
                "taxonomyCommonName": "Horse",
                "taxonomyScientificName": "Equus caballus",
                "taxonomyCode": "ecaballus",
                "taxonomyEvaName": "horse",
                "speciesAssemblyCode": "ecaballus_30"
            }
        ],
        "selectedSpecies": "ecaballus",
        "selectedAssembly": "ecaballus_20",
        "location": "1:3000000-3100000",
        "studies": [
            "BROAD_EQUCAB2.0:2008.08.08",
            "PRJEB22866",
            "PRJEB23301",
            "PRJEB23441",
            "PRJEB24624",
            "PRJEB24630",
            "PRJEB25439",
            "PRJEB26741",
            "PRJEB27771",
            "PRJEB30116",
            "PRJEB32686",
            "PRJEB38010",
            "PRJEB9799"
        ],
        "selectedStudies": [
            "BROAD_EQUCAB2.0:2008.08.08",
            "PRJEB22866",
            "PRJEB23301",
            "PRJEB23441",
            "PRJEB24624",
            "PRJEB24630",
            "PRJEB25439",
            "PRJEB26741",
            "PRJEB27771",
            "PRJEB30116",
            "PRJEB32686",
            "PRJEB38010",
            "PRJEB9799"
        ],
        "resultsPerPage": 50
    };

    render(<GenotypesFilter
        speciesList={test_props.speciesList}
        speciesAssemblyMap={test_props.speciesAssemblyMap}
        assemblyList={test_props.assemblyList}
        selectedSpecies={test_props.selectedSpecies}
        selectedAssembly={test_props.selectedAssembly}
        location={test_props.location}
        studies={test_props.studies}
        selectedStudies = {test_props.selectedStudies}
        resultsPerPage={test_props.resultsPerPage}
        />)

    expect(screen.getByRole('option', { name: 'Equus caballus' }).selected).toBe(true)
    expect(screen.getByRole('option', { name: 'EquCab2.0' }).selected).toBe(true)
    expect(screen.getByRole('option', { name: 'EquCab3.0' }).selected).toBe(false)
    expect(screen.getByRole('option', { name: '10' }).selected).toBe(false)
    expect(screen.getByRole('option', { name: '50' }).selected).toBe(true)
    expect(screen.getByRole('option', { name: '100' }).selected).toBe(false)

})