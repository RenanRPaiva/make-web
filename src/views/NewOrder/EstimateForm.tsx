import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import FormField from "../../components/FormField";
import { Address } from "../../entities/Address";
import { getFieldProps } from "../../utils/getFieldProps";

type FormValues = {
    customerAddres: Address | null
    comments: string
    agree: boolean
    date: string
    hours: string
}

export default function EstimateForm() {
    const formik = useFormik<FormValues>({
        initialValues: {
            customerAddres: null,
            agree: false,
            comments: '',
            date: '',
            hours: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormField
                {...getFieldProps(formik, 'customerAddress', 'Aonde será feito o serviço?', 'Informe o endereço completo.')
                }
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
        </Form>
    )
}