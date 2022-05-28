import styled from "styled-components"

export default function EstimateDatails() {
    return (        
            <WithoutEstimateStyled className="d-none d-md-flex h-100">
                <p className="m-0">Preencha os dados ao lado para ver o preço</p>
            </WithoutEstimateStyled>
    )
}

const WithoutEstimateStyled = styled.div`
    background-color    : #EFEFEF;
    border: 1px dashed #000;
    justify-content: center;
    align-items: center;
    padding: 0 100px;
    text-align: center;
`