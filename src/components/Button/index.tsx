import { Button as ButtonBootstrap, ButtonProps } from "react-bootstrap"
import styled from "styled-components"

export default function Button (props: ButtonProps) {
    return <ButtonStyled {...props} />
}

const ButtonStyled = styled(ButtonBootstrap)`
    background-color: #BD8085  !important; 
    border-color:  #BD8085  !important;
    border-radius: 100px;
    padding-left: 50px;
    padding-right: 50px;
`