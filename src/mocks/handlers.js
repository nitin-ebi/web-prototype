import {rest} from 'msw'
import { genotypes_view_test_consequences_data,  genotypes_view_test_species_data,  genotypes_view_test_studies_data,
  genotypes_view_test_variants_data } from "../test/test_data/GenotypesTableData"

export const handlers = [
    rest.get('https://rest.ensembl.org/info/variation/consequence_types', (req, res, ctx) => {
        return res(
            ctx.json(genotypes_view_test_consequences_data),
        )
    }),

    rest.get('https://www.ebi.ac.uk/eva/webservices/rest/v1/meta/species/list', (req, res, ctx) => {
        return res(
            ctx.json(genotypes_view_test_species_data),
        )
    }),

    rest.get('https://www.ebi.ac.uk/eva/webservices/rest/v1/meta/studies/list', (req, res, ctx) => {
        return res(
            ctx.json(genotypes_view_test_studies_data),
        )
    }),

    rest.get('https://www.ebi.ac.uk/eva/webservices/rest/v1/segments/1:3000000-3100000/variants', (req, res, ctx) => {
        return res(
            ctx.json(genotypes_view_test_variants_data),
        )
    })
]
