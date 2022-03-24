import { faFacebookSquare, faInstagram, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Nav } from "react-bootstrap"
import styled from "styled-components"
import LogoWhite from "../../assets/img/logo-make-white.svg"
import LogoWhiteNis from "../../assets/img/logo-white-full.svg"

export default function Footer() {
    return (
        <FooterStyled className="text-center">
            <Container>
                <div className="d-flex align-items-center">
                    <img src={LogoWhite} alt='Make+' width={53} height={49} />
                    <LogoStyled className="text-white p-2">Make+</LogoStyled>
                </div>
                <p className="text-white">Oferecidor por:</p>
                <img src={LogoWhiteNis} alt='Nislaine Duarte - Beauty professional' width={177} height={88} />
                <Nav>
                    <Nav.Link href="/">Início</Nav.Link>
                    <Nav.Link href="/cadastro">Cadastro</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/termos-de-uso.pdf" target='_blank'>Termos de Uso</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://www.facebook.com/nislainend" target='_blank' rel='noreferrer noopener'>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </Nav.Link>
                    <Nav.Link href="https://www.instagram.com/nislaineduartemakeup/" target='_blank' rel='noreferrer noopener'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Nav.Link>
                    <Nav.Link href="https://web.whatsapp.com/send/?phone=5521996443691&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!" target='_blank' rel='noreferrer noopener'>
                        <FontAwesomeIcon icon={faWhatsappSquare} />
                    </Nav.Link>
                </Nav>
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