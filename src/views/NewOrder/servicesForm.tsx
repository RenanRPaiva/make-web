import { Col, Form, Row } from "react-bootstrap"
import styled from "styled-components"

export default function ServicesForm() {
    return (
        <>
            <H5Styled>Quais Serviços?</H5Styled>
            <Row>
                <Col xs={12} md={6} lg={12} className="p-3">
                    <Form as={Row}>
                        <Form.Label Column xs={6} className="w-75 p-2">Maquiagem: R$ 100,00</Form.Label>
                        <Form.Control  className="w-25 p-2" type="number" min={0} placeholder='0'></Form.Control>
                    </Form>
                </Col>
                <Col xs={12} md={6} lg={12} className="p-3">
                    <Form as={Row}>
                        <Form.Label Column xs={6} className="w-75 p-2">Penteado: R$ 100,00</Form.Label>
                        <Form.Control  className="w-25 p-2" type="number" min={0} placeholder='0'></Form.Control>
                    </Form>
                </Col>
                <Col xs={12} md={6} lg={12} className="p-3">
                    <Form as={Row}>
                        <Form.Label Column xs={6} className="w-75 p-2">Pacote: Maquiagem + Cachos: R$ 150,00</Form.Label>
                        <Form.Control  className="w-25 p-2" type="number" min={0} placeholder='0'></Form.Control>
                    </Form>
                </Col>
                <Col xs={12} md={6} lg={12} className="p-3">
                    <Form as={Row}>
                        <Form.Label Column xs={6} className="w-75 p-2">Pacote: Maquiagem + Penteado: R$ 180,00</Form.Label>
                        <Form.Control  className="w-25 p-2" type="number" min={0} placeholder='0'></Form.Control>
                    </Form>
                </Col>
                <Col xs={12} md={6} lg={12} className="p-3">
                    <Form as={Row}>
                        <Form.Label Column xs={6} className="w-75 p-2">Pacote: Noiva/Debutante Maquiagem + Penteado: R$ 400,00</Form.Label>
                        <Form.Control  className="w-25 p-2" type="number" min={0} placeholder='0'></Form.Control>
                    </Form>
                </Col>
                <Col xs={12} md={6} lg={12} className="p-3">
                    <Form as={Row}>
                        <Form.Label Column xs={6} className="w-75 p-2">Atendimento em festa: R$ 200,00</Form.Label>
                        <Form.Control  className="w-25 p-2" type="number" min={0} placeholder='0'></Form.Control>
                    </Form>
                </Col>                            
            </Row>

        </>
    )

}

const H5Styled = styled.h5`
  color: #BD8085;
`