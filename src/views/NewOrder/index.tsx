import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import EstimateForm from "./EstimateForm";
import ServicesForm from "./servicesForm";


export default function NewOrderView() {
    return (
        <Layout>
            <Container>
                <PageTitle>Novo Pedido</PageTitle>
                <Row>
                    <Col xs={12}>
                        <ServicesForm />                        
                    </Col>
                    <Col xs={12}>
                        <EstimateForm />
                    </Col>
                    <Col xs={12}>
                        Detalhes
                    </Col>
                </Row>
                <Button type='submit' >Calcular Preço (+ Taxa de Atendimento)</Button>
            </Container>
        </Layout>
    )
}