import React from "react"
import styled from "styled-components"

type Props ={
    children?: React.ReactNode
}

export default function PageTitle ({ children }: Props) {
    return <TitleStyled className="text-center mt-4 p-3">{children}</TitleStyled>
}

const TitleStyled = styled.h1`
    color: #BD8085;
    font-size: 1.75rem;
    font-weight: 400;
`