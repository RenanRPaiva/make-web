import { useSelector } from "react-redux"
import styled from "styled-components"
import { selectHasCurrentEstimate } from "../../store/slices/estimateSlice"
import EstimateMap from "./EstimateMap"
import EstimateNumbers from "./EstimateNumbers"


export default function EstimateDatails() {
    const hasCurrentEstimate = useSelector(selectHasCurrentEstimate)
    if (!hasCurrentEstimate) {


        return (
            <WithoutEstimateStyled className="d-none d-md-flex h-100">
                <p className="m-0">Preencha os dados ao lado para ver o preço</p>
            </WithoutEstimateStyled>
        )
    }
    return(
        <WithEstimateStyled >
            <EstimateMap/>
            <EstimateNumbers/>
        </WithEstimateStyled>
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
const WithEstimateStyled = styled.div`
   height:100% ;
   display: flex ;
   flex-direction:column ;
`