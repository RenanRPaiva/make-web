import { useFormik } from "formik";
import { Col, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import AutocompleteField from "../../components/AutocompleteField";
import Button from "../../components/Button";
import FormField from "../../components/FormField";
import { Address } from "../../entities/Address";
import { getFieldProps } from "../../utils/getFieldProps";
import * as yup from 'yup'
import { createEstimate, NewEstimateInput } from "../../services/createEstimate";
// import { toast } from "react-toastify";

type FormValues = {
    customerAddress: Address | null
    coments: string   
    date: string
    hours: string
    maquiagem: number 
    penteado: number 
    pacoteMc: number 
    pacoteMp: number 
    pacoteNoiva: number 
    atendimento: number 
}

export default function EstimateForm() {
    const formik = useFormik<FormValues>({
        initialValues: {
            customerAddress: null,            
            coments: '',
            date: '',
            hours: '',
            maquiagem:0,
            penteado: 0,
            pacoteMc: 0,
            pacoteMp: 0,
            pacoteNoiva: 0,
            atendimento: 0
        },
        validationSchema: yup.object().shape({
            customerAddress: yup.object()
                .typeError('Selecione um endereço na lista.')
                .required('Selecione um endereço na lista.'),
            coments: yup.string()               
                .required('Escreva ponto de referencia.'),
            date: yup.date()               
                .required('Informe a data.'),
            hours: yup.string()        
                .required('Informe a hora.'),
            

                
        }),        
        onSubmit: async (values) => {
           const estimate = await createEstimate(values as NewEstimateInput) 
           console.log('estimate', estimate)  

        //    if (formik.values.maquiagem === 0|| formik.values.atendimento === 0|| formik.values.pacoteMc === 0 || formik.values.pacoteMp === 0 || formik.values.pacoteNoiva === 0|| formik.values.penteado === 0) 
        //    {
        //     // toast.error('Tem que haver pelo menos 1 serviço selecionado. Tente novamente.')
        //     throw new Error('Tem que haver pelo menos 1 serviço selecionado. Tente novamente.')           
        //    }
                    
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
                            onChange={address => formik.setFieldValue('customerAddress', address)}
                        />                       
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