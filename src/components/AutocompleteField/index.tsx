import { Autocomplete } from "@react-google-maps/api";
import { Address } from "../../entities/Address";
import FormField, { FormFieldProps } from "../FormField";
import LoadGoogleScript from "../LoadGoogleScript";

type Props = {
    value: null | Address
    onChange:(address?: Address) => void
} & Omit<FormFieldProps, 'value' | 'onChange'>

export default function AutocompleteField ({ value, onChange, ...fieldProps }: Props) {
    return (
        <LoadGoogleScript>
            <Autocomplete>
                <FormField {...fieldProps}/>
            </Autocomplete>
        </LoadGoogleScript>
    )
}