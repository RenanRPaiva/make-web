import { Col, Form, Row } from "react-bootstrap"
import styled from "styled-components"

export default function ServicesForm() {
    return (
        <>
            <H5Styled>Quais Serviços?</H5Styled>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Nome serviço Serviços
                    </Form.Label>
                    <Col sm={1}>
                        <Form.Control  />
                    </Col>
                </Form.Group>
            </Form>
        </>
    )

}

const H5Styled = styled.h5`
  color: #BD8085;
`