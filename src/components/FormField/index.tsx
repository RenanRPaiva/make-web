import React from "react";
import { Form, FormControlProps } from "react-bootstrap";
import { IMaskInput } from "react-imask";

export type FormFieldProps = {
    label?: string
    controlId?: string
    error?: string
    mask?: { mask: string }[]
    onAccept?: (value: unknown) => void
} & FormControlProps

export default function FormField ({ label, controlId, error, mask, onAccept, ...otherProps }:FormFieldProps) {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            {label && <Form.Label className="mb-1">{label}</Form.Label>}
            {mask ? (
                <Form.Control 
                {...otherProps} 
                as={IMaskInput} 
                mask={mask}
                onChange={undefined}
                onAccept={onAccept}
                />
            ) : (
                <Form.Control {...otherProps}/>
            )}
            <Form.Control.Feedback type='invalid'>
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    )
}