import React from 'react'

import {render} from '@testing-library/react'

import GenotypeView from "../GenotypeView"

test('check genotype view component is loading everything correctly', () => {
    render(<GenotypeView>{}</GenotypeView>)
})