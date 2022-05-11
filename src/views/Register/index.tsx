import { useFormik } from "formik"
import { Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Button from "../../components/Button"
import FormField from "../../components/FormField"
import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import * as yup from 'yup'
import { NewUserInput, createUser } from "../../services/createUser"
import { FirebaseError } from "firebase/app"
import { AuthErrorCodes } from "firebase/auth"
import { toast } from "react-toastify"

type FormValues = NewUserInput & {
    agree: boolean
}

export default function RegisterView() {
    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            agree: false
        },
        validationSchema: yup.object().shape({
            name: yup.string()
                .required('Preencha o nome.')
                .min(5, 'Informe pelo menos 5 caractéres'),
            email: yup.string()
                .required('Preencha o e-mail.')
                .email('Preencha um e-mail válido.'),
            phone: yup.string()
                .required('Preencha o telefone.'),
            password: yup.string()
                .required('Preencha a senha.')
                .min(8, 'Informe pelo menos 8 caractéres.')
                .max(50, 'Informe no máximo 50 caractéres.'),
            agree: yup.boolean()
                .equals([true], 'É preciso aceitar os termos.')
        }),
        onSubmit: async (values) => {
            try {
                await createUser(values)
            } catch (error) {
                if (error instanceof FirebaseError && error.code === AuthErrorCodes.EMAIL_EXISTS) {
                    formik.setFieldError('email', 'Este e-mail já está em uso.')
                    return
                }
                toast.error('Ocorreu um erro ao se cadastrar. Tente novamente.')
            }
        }
    })
    const getFieldProps = (fieldName: keyof FormValues, label: string, placeholder: string) => ({
        ...formik.getFieldProps(fieldName),
        controlId: `input-${fieldName}`,
        label,
        placeholder,
        isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
        error: formik.errors[fieldName]
    })
    return (
        <Layout>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <PageTitle>Nova conta</PageTitle>
                        <Form onSubmit={formik.handleSubmit}>
                            <FormField
                                {...getFieldProps('name', 'Nome', 'Informe seu nome')}
                            />
                            <FormField
                                {...getFieldProps('email', 'E-mail', 'Ele será o seu usuário')}
                            />
                            <FormField
                                {...getFieldProps('phone', 'Telefone', '(00) 00000-0000')}
                                mask={[
                                    { mask: '(00) 0000-0000' },
                                    { mask: '(00) 00000-0000' }
                                ]}
                                onAccept={(value) => formik.setFieldValue('phone', value)}
                            />
                            <FormField
                                {...getFieldProps('password', 'Senha', 'Informe sua senha de acesso')}
                                type="password"
                            />
                            <Form.Group className="mb-3" controlId="input-agree">
                                <Form.Check
                                    {...formik.getFieldProps('agree')}
                                    type="checkbox"
                                    label={<span>Eu li e aceito os <a href='/termos-de-uso.pdf' target='_blank'>Termos de Uso</a>.</span>}
                                />
                                <Form.Control.Feedback type='invalid' className={formik.touched.agree && formik.errors.agree ? 'd-block' : undefined}>
                                    {formik.errors.agree}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="d-grid mb-4">
                                <Button loading={formik.isValidating || formik.isSubmitting} disabled={formik.isValidating || formik.isSubmitting} type="submit" variant="danger">Criar conta</Button>
                            </div>
                        </Form>
                        <p className="text-center">Já possui conta?<br /><Link to='/login'>Entrar</Link></p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}