import { Col, Container, Form, Row } from "react-bootstrap"
import FormField from "../../components/FormField"
import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"

export default function RegisterView() {
    return (
        <Layout>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <PageTitle>Nova conta</PageTitle>
                        <FormField
                            label='Nome'
                            placeholder="Digite seu nome"
                            controlId="input-name"
                            isInvalid
                            error="Preencha o nome"
                        />
                        <FormField
                            label='E-mail'
                            placeholder="Ele será o seu usuário "
                            controlId="input-email"
                            isInvalid
                            error="Preencha seu e-mail"
                        />
                        <FormField
                            label='Telefone'
                            placeholder="(00) 00000-0000"
                            controlId="input-phone"
                            isInvalid
                            error="Preencha seu telefone"
                            type="fone"
                            mask={[
                                { mask: '(00) 0000-0000' },
                                { mask: '(00) 00000-0000' }
                            ]}
                        />
                        <FormField
                            label='Senha'
                            placeholder="Informe sua senha de acesso"
                            controlId="input-password"
                            isInvalid
                            error="Preencha sua senha"
                            type="password"
                        />
                        <Form.Group className="mb-3" controlId="input-agree">
                            <Form.Check
                                type="checkbox"
                                label={<span>Eu li e aceito os <a href='/termos-de-uso.pdf' target='_blank'>Termos de Uso</a>.</span>}
                            />
                        </Form.Group>

                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}