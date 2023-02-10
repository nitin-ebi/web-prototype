import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {genotypes_table_test_data} from "./test_data/GenotypesTableData"
import GenotypesTable from "../components/GenotypesTable"

test('check genotype table view component is loading everything correctly', () => {

    render(<GenotypesTable
        studies={genotypes_table_test_data.studies}
        variants={genotypes_table_test_data.variants}
        isLoaded={genotypes_table_test_data.isLoaded}
        currentPage={genotypes_table_test_data.currentPage}
        numPages={genotypes_table_test_data.numPages}
    />)

    // assert no of rows
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(51)
    // assert no of columns
    const cells = rows[0].cells;
    expect(cells).toHaveLength(17)

    // assert table header row
    expect(rows[0].cells[0].textContent).toBe('Chr')
    expect(rows[0].cells[1].textContent).toBe('Pos')
    expect(rows[0].cells[2].textContent).toBe('Ref')
    expect(rows[0].cells[3].textContent).toBe('Alt')
    for (let index = 4; index < cells.length; index++) {
        expect(rows[0].cells[index].textContent).toBe(genotypes_table_test_data.studies[index - 4])
    }

    //assert variants data
    for (let row_id = 1; row_id < rows.length; row_id++) {
        let json_variant = genotypes_table_test_data.variants[row_id - 1]
        expect(rows[row_id].cells[0].textContent).toBe(json_variant.chromosome)
        expect(rows[row_id].cells[1].textContent).toBe("" + json_variant.start)
        expect(rows[row_id].cells[2].textContent).toBe(json_variant.reference)
        expect(rows[row_id].cells[3].textContent).toBe(json_variant.alternate)

        expect(rows[row_id].cells[3].id).toBe(json_variant.chromosome + "_" + json_variant.start + "_" + json_variant.reference + "_" + json_variant.alternate)
        expect(rows[row_id].cells[3].title).toBe(json_variant.consequenceName)
        expect(rgbToHex(rows[row_id].cells[3].style.backgroundColor)).toBe(genotypes_table_test_data.variants[row_id-1].color)

        for (let cell_id = 4; cell_id < cells.length; cell_id++) {
            let study_id = rows[0].cells[cell_id].textContent
            let json_value = json_variant.alleleFreqs[study_id]
            expect(rows[row_id].cells[cell_id].textContent).toBe(json_value == undefined ? "" : "" + json_value)
        }
    }

})


function rgbToHex(rgb) {
    let rgb_val = rgb.substring(rgb.indexOf('(')+1,rgb.lastIndexOf(')')).split(",")
    let r = rgb_val[0]
    let g = rgb_val[1]
    let b = rgb_val[2]
    /*
        see stackoverflow(https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139)
        Author : Tim Down (https://stackoverflow.com/users/96100/tim-down)
     */
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)
}