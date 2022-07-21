import { useFormik } from "formik"
import { Col, Form, Row } from "react-bootstrap"
import styled from "styled-components"
import FormField from "../../components/FormField"
import { getFieldProps } from "../../utils/getFieldProps"

type FormValues = {
    maquiagem: number
    penteado: number
    pacoteMc: number
    pacoteMp: number
    pacoteNoiva: number
    atendimento: number
}

export default function ServicesForm() {
    const formik = useFormik<FormValues>({
        initialValues: {
            maquiagem: 0,
            penteado: 0,
            pacoteMc: 0,
            pacoteMp: 0,
            pacoteNoiva: 0,
            atendimento: 0
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <>
            <H5Styled>Quais Serviços?</H5Styled>
            <Row>
                <Form onSubmit={formik.handleSubmit}>
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
                </Form>
            </Row>
        </>
    )

}

const H5Styled = styled.h5`
  color: #BD8085;
`