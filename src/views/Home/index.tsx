import { Container } from "react-bootstrap"
import styled from "styled-components"
import bgMobile from "../../assets/img/bg-make+-mobile.jpg"
import bgDescktop from "../../assets/img/bg-make+.jpg"
import Button from "../../components/Button"
import Layout from "../../components/Layout"


export default function HomeView() {
    return (
        <Layout startTransparent>
            <Banner className="vh-100">
                <Container className="h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                    <Title className="text-white text-center text-lg-start mt-auto">Maquiagem e Penteado em um Click!</Title>
                    <Button  to="/cadastro" variant="danger" className="mb-2 mt-auto">Criar conta</Button>
                    <Button  to="/login" variant="danger" className="mb-4">Fazer login</Button>

                </Container>
            </Banner>
        </Layout>
    )
}
const Banner = styled.div`
background: url(${bgMobile}) no-repeat center center;
background-size: cover;
@media (min-width: 576px){
    background-image: url(${bgDescktop});
}
@media (min-width: 768px) {
    background-image: url(${bgMobile});
}
@media (min-width: 992px){
    background-image: url(${bgDescktop});
}
    
`
const Title = styled.h1`
  font-family: 'Molle', cursive;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 36px;
  margin-top: 100px;
  padding-top: 150px;
  @media (min-width: 992px){
      font-size: 48px;
      max-width: 500px;
  }
`
