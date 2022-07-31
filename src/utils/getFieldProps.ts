export const getFieldProps = <T>(formik: any, fieldName: keyof T, label: string, placeholder: string) => ({
    ...formik.getFieldProps(fieldName),
    controlId: `input-${fieldName}`,
    label,
    placeholder,
    isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
    error: formik.errors[fieldName]
})