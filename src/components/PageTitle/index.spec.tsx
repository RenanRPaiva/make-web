import React from "react";
import { render, screen } from "@testing-library/react"
import PageTitle from "."

describe('<PageTitle />', () => {
    it('Deve renderizar title', () => {
        render(<PageTitle>My Title</PageTitle>)
        expect(screen.getByRole('heading')).toHaveTextContent('My Title')
    })
})