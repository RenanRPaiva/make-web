import { Container } from "react-bootstrap"
import styled from "styled-components"
import bgMobile from "../../assets/img/bg-make+-mobile.jpg"
import bgDescktop from "../../assets/img/bg-make+.jpg"


export default function HomeView () {
    return (
    <Banner className="vh-100">
        <Container className="h-100 d-flex flex-column justify-content-center">
            <Title className="text-white text-center text-lg-start">Maquiagem e Penteado em um Click!</Title>
        </Container>
    </Banner>
    )
}
const Banner = styled.div `
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
  @media (min-width: 992px){
      font-size: 48px;
      max-width: 500px;
  }
`
