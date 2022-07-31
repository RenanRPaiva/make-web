import { useSelector } from "react-redux"
import styled from "styled-components"
import { selectCurrentEstimate } from "../../store/slices/estimateSlice"

export default function EstimateNumbers(){
    const currentEstimate = useSelector(selectCurrentEstimate)
    if(!currentEstimate){
        return null
    }
   return(
    
        <WrapStyled>
        <NumberItem>
            <span>Valor: </span>{currentEstimate.value.toLocaleString('pt-br', { currency : 'BRL', style:'currency'  })}
        </NumberItem>

        </WrapStyled>
   )
}

const WrapStyled = styled.div`
    background: #EAEAEA ;
    display: flex ;
    justify-content: space-around ;
    padding: 10px 0 ;
`

const NumberItem = styled.p`
margin:0;
text-align:center ;


span{
    
    display:block ;
    font-size:0.875rem ;
    font-weight:700 ;
}
`