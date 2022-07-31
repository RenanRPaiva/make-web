import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import EstimateDatails from "./EstimateDetails";
import EstimateForm from "./EstimateForm";



export default function NewOrderView() {
    return (
        <Layout>
            <Container>
                <PageTitle>Novo Pedido</PageTitle>
                <Row>
                    <Col xs={12} md={7} lg={7}>
                        <EstimateForm />
                    </Col>
                    <Col xs={12} md={5} lg={5} className='p-0 px-sm-3'>
                        <EstimateDatails />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}