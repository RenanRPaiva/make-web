import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import EstimateDatails from "./EstimateDetails";
import EstimateForm from "./EstimateForm";
import ServicesForm from "./servicesForm";


export default function NewOrderView() {
    return (
        <Layout>
            <Container>
                <PageTitle>Novo Pedido</PageTitle>
                <Row>
                    <Col xs={12} md={12} lg={3}>
                        <ServicesForm />                        
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <EstimateForm />
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                       <EstimateDatails />
                    </Col>
                </Row>                
            </Container>
        </Layout>
    )
}