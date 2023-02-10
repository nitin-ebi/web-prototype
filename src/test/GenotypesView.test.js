import React from 'react'

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GenotypeView from "../GenotypeView"

test('check genotype view component is loading everything correctly', () => {
    render(<GenotypeView>{}</GenotypeView>)

    const combo_boxes = screen.getAllByRole('combobox')
    expect(combo_boxes[0].name).toBe("species")
    expect(combo_boxes[1].name).toBe("assembly")
    expect(combo_boxes[2].name).toBe("resultsPerPage")

    expect(screen.getByRole('textbox').value).toBe('1:3000000-3100000')

    expect(screen.getByRole('option', {name: '50'}).selected).toBe(true)
    expect(screen.getByRole('option', {name: '10'}).selected).toBe(false)
    expect(screen.getByRole('option', {name: '100'}).selected).toBe(false)

})