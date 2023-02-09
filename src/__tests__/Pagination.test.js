import {render, screen} from "@testing-library/react";
import Pagination from "../components/Pagination";
import React from "react";
test('check genotypes table component is loading everything correctly', () => {
    render(<Pagination
        currentPage={1}
        numPages={10}
    />)

    // assert link generated for paging
    expect(screen.getByRole("link", {name: 'Previous'}).textContent).toBe("Previous")
    expect(screen.getByRole("link", {name: '2'}).textContent).toBe("2")
    expect(screen.getByRole("link", {name: '3'}).textContent).toBe("3")
    expect(screen.getByRole("link", {name: '8'}).textContent).toBe("8")
    expect(screen.getByRole("link", {name: '9'}).textContent).toBe("9")
    expect(screen.getByRole("link", {name: '10'}).textContent).toBe("10")
    expect(screen.getByRole("link", {name: 'Next'}).textContent).toBe("Next")
    expect(screen.getByText('1').textContent).toBe(""+1)
})