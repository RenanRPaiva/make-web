import { Container } from "react-bootstrap"
import styled from "styled-components"
import LogoWhite from "../../assets/img/logo-make-white.svg"

export default function Footer() {
    return (
        <FooterStyled>
            <Container>
                <div className="d-flex align-items-center">
                    <img src={LogoWhite} alt='Make+' width={53} height={49} />
                    <LogoStyled className="text-white p-2">Make+</LogoStyled>
                </div>

            </Container>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    background-color: #414141;
`
const LogoStyled = styled.p`
    font-family: 'Nova Oval', cursive; 
    margin-top: 15px;
`