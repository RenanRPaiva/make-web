import { faFacebookSquare, faInstagram, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Nav } from "react-bootstrap"
import styled from "styled-components"
import LogoWhiteNis from "../../assets/img/logo-white-full.svg"

export default function Footer() {
    const TypeWhatsapp = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 'api' : 'web'
    return (
        <FooterStyled className="text-center pt-4 pb-5 py-lg-3">
            <Container className="d-lg-flex align-items-center">
                <p className="text-white">Oferecidor por:</p>
                <img src={LogoWhiteNis} alt='Nislaine Duarte - Beauty professional' width={177} height={88} />
                <Nav className="justify-content-center my-4 my-lg-0 ms-auto">
                    <Nav.Link href="/" className="text-white">Início</Nav.Link>
                    <Nav.Link href="/cadastro" className="text-white">Cadastro</Nav.Link>
                    <Nav.Link href="/login" className="text-white">Login</Nav.Link>
                    <Nav.Link href="/termos-de-uso.pdf" target='_blank' className="text-white">Termos de Uso</Nav.Link>
                </Nav>
                <Nav className="justify-content-center">
                    <Nav.Link href="https://www.facebook.com/nislainend" target='_blank' rel='noreferrer noopener' className="py-0 px-2">
                        <IconStyled icon={faFacebookSquare} className="text-white" />
                    </Nav.Link>
                    <Nav.Link href="https://www.instagram.com/nislaineduartemakeup/" target='_blank' rel='noreferrer noopener' className="py-0 px-2">
                        <IconStyled icon={faInstagram} className="text-white" />
                    </Nav.Link>
                    <Nav.Link href={`https://${TypeWhatsapp}.whatsapp.com/send/?phone=5521996443691&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!`} target='_blank' rel='noreferrer noopener' className="py-0 px-2">
                        <IconStyled icon={faWhatsappSquare} className="text-white" />
                    </Nav.Link>
                </Nav>
            </Container>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    background-color: #414141;
`
const IconStyled = styled(FontAwesomeIcon)`
    font-size: 2.5rem;
`
