import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "../Button";
import LogoWhite from "../../assets/img/logo-make-white.svg"
import Logo from "../../assets/img/logo-make.svg"
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, selectIsUserLoggedIn } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../services/logoutUser";
import { toast } from "react-toastify";

type Props = {
    startTransparent?: boolean
}

export default function Header({ startTransparent = false }: Props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    const [isTransparent, setIsTransparent] = useState(startTransparent)
    useEffect(() => {
        const handleScrollChange = () => {
            if (window.scrollY < 60) {
                setIsTransparent(true)
            } else {
                setIsTransparent(false)
            }
        }
        if (startTransparent) {
            window.addEventListener('scroll', handleScrollChange)
            const clearEvent = () => {
                window.removeEventListener('scroll', handleScrollChange)
            }
            return clearEvent
        }
    }, [startTransparent])
    const handleLogout = async () => {
        try {
            await logoutUser()
            dispatch(deleteUser())
            navigate('/login')
        } catch {
            toast.error('Falha ao sair. Tente novamente.')
        }
    }
    return (
        <NavbarStyled fixed='top' expand='lg' bg={isTransparent ? '' : 'white'}>
            <Container>
                <NavBrandStyled className="text-white d-flex align-items-center" to='/' as={Link}>
                    <LogoStyled src={isTransparent ? LogoWhite : Logo} alt="Make+" className="m-2" width={53} height={53} />
                    <PStyled className={isTransparent ? "text-white" : ''}>Make+</PStyled>
                </NavBrandStyled>
                <Navbar.Toggle aria-controls="menu-header" className="border-0">
                    <FontAwesomeIconStyled icon={faBars} size='lg' className={isTransparent ? "text-white" : ''} />
                </Navbar.Toggle>
                <NavbarCollapseStyled id='menu-header'>
                    <Nav className="text-center align-items-center ms-auto">
                        <NavLinkStyled forwardedAs={Link} to="/" $isTransparent={isTransparent}>Início</NavLinkStyled>
                        {isUserLoggedIn ? (
                            <>
                                <Button to="/novo-pedido" variant="danger" className="mt-2 mt-lg-0 ms-lg-4">Novo Pedido</Button>                              
                                <Button onClick={handleLogout} variant="danger" className="mt-2 mt-lg-0 ms-lg-4">Sair</Button>
                            </>
                        ) : (
                            <>
                                <Button to="/cadastro" variant="danger" className="mt-2 mt-lg-0 ms-lg-4">Criar conta</Button>
                                <Button to="/login" variant="danger" className="mt-2 mt-lg-0 ms-lg-4">Fazer login</Button>
                            </>
                        )}
                    </Nav>
                </NavbarCollapseStyled>
            </Container>
        </NavbarStyled>
    )
}

const NavbarStyled = styled(Navbar)`
    padding: 0;
    ${props => props.bg === 'white' && `
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      color: #BD8085; 
    `}
`
const NavBrandStyled = styled(Navbar.Brand)`
     font-family: 'Nova Oval', cursive; 
     padding: 10px 0;
`
const PStyled = styled.p`
   color:  #BD8085;
   margin-top: 15px;
   @media (min-width: 922px){
       font-size: 40px;
   }  
`
const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
 color:  #BD8085;
`
const NavbarCollapseStyled = styled(Navbar.Collapse)`
@media (max-width: 991px){
 background: #FFF;
 margin: 0 -0.75rem;
 padding: 0 0 1rem ;
}
`
const LogoStyled = styled.img`
@media (min-width: 992px){
    width: 118px;
    height: 115px;
}
`
const NavLinkStyled = styled(Nav.Link)`
 color: #BD8085 !important;
 @media (min-width: 992px){
     color: ${props => props.$isTransparent ? '#FFF' : '#BD8085'} !important;
 }
`