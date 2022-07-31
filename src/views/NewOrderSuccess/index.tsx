import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import { faFacebookSquare, faInstagram, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";

const TypeWhatsapp = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 'api' : 'web'

export default function NewOrderSuccessView() {
    return (
        <Layout>
            <Container className="text-center my-5">
                <Row className="justify-content-center">
                    <Col lg={6} xl={5}>
                        <PageTitle>Pedido Recebido com Sucesso! </PageTitle>
                        <p>Entrarei em contato pelo seu WhatsApp para mais detalhes!</p>
                        <Nav className="justify-content-center">
                            <Nav.Link href="https://www.facebook.com/nislainend" target='_blank' rel='noreferrer noopener' className="py-0 px-2" >
                                <IconStyled icon={faFacebookSquare}  />
                            </Nav.Link>
                            <Nav.Link href="https://www.instagram.com/nislaineduartemakeup/" target='_blank' rel='noreferrer noopener' className="py-0 px-2">
                                <IconStyled icon={faInstagram} />
                            </Nav.Link>
                            <Nav.Link href={`https://${TypeWhatsapp}.whatsapp.com/send/?phone=5521996443691&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!`} target='_blank' rel='noreferrer noopener' className="py-0 px-2">
                                <IconStyled icon={faWhatsappSquare} />
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}

const IconStyled = styled(FontAwesomeIcon)`
    color: #BD8085;
    font-size: 2.5rem;
    `

