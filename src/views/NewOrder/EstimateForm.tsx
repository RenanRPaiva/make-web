import { useFormik } from "formik";
import { Col, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import AutocompleteField from "../../components/AutocompleteField";
import Button from "../../components/Button";
import FormField from "../../components/FormField";
import { Address } from "../../entities/Address";
import { getFieldProps } from "../../utils/getFieldProps";

type FormValues = {
    customerAddress: Address | null
    coments: string
    agree: boolean
    date: string
    hours: string
    maquiagem: number | undefined
    penteado: number | undefined
    pacoteMc: number | undefined
    pacoteMp: number | undefined
    pacoteNoiva: number | undefined
    atendimento: number | undefined
}

export default function EstimateForm() {
    const formik = useFormik<FormValues>({
        initialValues: {
            customerAddress: null,
            agree: false,
            coments: '',
            date: '',
            hours: '',
            maquiagem: undefined,
            penteado:undefined,
            pacoteMc: undefined,
            pacoteMp: undefined,
            pacoteNoiva: undefined,
            atendimento: undefined
        },
        onSubmit: async (values) => {
            console.log(values)
        }
    })
    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
            <H5Styled>Quais Serviços?</H5Styled>
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <Row>
                            <Col xs={12} md={6} lg={12} className="p-3">
                                <FormField
                                    min={0}
                                    type="number"
                                    column xs={6}
                                    className="w-25 p-2"
                                    {...getFieldProps(formik, 'maquiagem', 'Maquiagem: R$ 100,00', '0')
                                    }
                                />
                            </Col>
                            <Col xs={12} md={6} lg={12} className="p-3">
                                <FormField
                                    min={0}
                                    type="number"
                                    column xs={6}
                                    className="w-25 p-2"
                                    {...getFieldProps(formik, 'penteado', 'Penteado: R$ 100,00', '0')
                                    }
                                />
                            </Col>
                            <Col xs={12} md={6} lg={12} className="p-3">
                                <FormField
                                    min={0}
                                    type="number"
                                    column xs={6}
                                    className="w-25 p-2"
                                    {...getFieldProps(formik, 'pacoteMc', 'Pacote: Maquiagem + Cachos: R$ 150,00', '0')
                                    }
                                />
                            </Col>
                            <Col xs={12} md={6} lg={12} className="p-3">
                                <FormField
                                    min={0}
                                    type="number"
                                    column xs={6}
                                    className="w-25 p-2"
                                    {...getFieldProps(formik, 'pacoteMp', 'Pacote: Maquiagem + Penteado: R$ 180,00', '0')
                                    }
                                />
                            </Col>
                            <Col xs={12} md={6} lg={12} className="p-3">
                                <FormField
                                    min={0}
                                    type="number"
                                    column xs={6}
                                    className="w-25 p-2"
                                    {...getFieldProps(formik, 'pacoteNoiva', 'Pacote: Noiva/Debutante Maquiagem + Penteado: R$ 400,00', '0')
                                    }
                                />
                            </Col>
                            <Col xs={12} md={6} lg={12} className="p-3">
                                <FormField
                                    min={0}
                                    type="number"
                                    column xs={6}
                                    className="w-25 p-2"
                                    {...getFieldProps(formik, 'atendimento', 'Atendimento em festa: R$ 200,00', '0')
                                    }
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <AutocompleteField
                            {...getFieldProps(formik, 'customerAddress', 'Aonde será feito o serviço?', 'Informe o endereço completo.')
                            }
                            onChange={address => formik.setFieldValue('customerAddress', address) }
                        />
                        <Form.Group className="mb-3" controlId="input-agree">
                            <Form.Check
                                {...formik.getFieldProps('agree')}
                                type="checkbox"
                                label={<span>Ir até a Maquiadora</span>}
                            />
                            <Form.Control.Feedback type='invalid' className={formik.touched.agree && formik.errors.agree ? 'd-block' : undefined}>
                                {formik.errors.agree}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <FormField
                            {...getFieldProps(formik, 'coments', 'Ponto de Referencia', 'Detalhes para chegar')
                            }
                            as='textarea'
                        />
                        <span>Data do Evento e hora que precisa estar pronta</span>
                        <div className=" d-flex flex-colum gap-3">
                            <FormField type="date"
                                {...getFieldProps(formik, 'date', 'Data:', 'Informe a data.')
                                }
                            />
                            <FormField type="time"
                                {...getFieldProps(formik, 'hours', 'Hora: ', 'Informe a hora.')
                                }
                            />
                        </div>
                        <div className="d-grid">
                            <Button
                                type='submit'
                                loading={formik.isValidating || formik.isSubmitting}
                                disabled={formik.isValidating || formik.isSubmitting}
                            >
                                Calcular Preço (+ Taxa de Atendimento)
                            </Button>
                        </div>
                    </Col>

                </Row>

            </Form>
        </>
    )
}

const H5Styled = styled.h5`
  color: #BD8085;
`