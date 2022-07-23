import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { Address } from "../../entities/Address";
import FormField, { FormFieldProps } from "../FormField";
import LoadGoogleScript from "../LoadGoogleScript";

type Props = {
    value: null | Address
    onChange:(address?: Address) => void
} & Omit<FormFieldProps, 'value' | 'onChange'>

export default function AutocompleteField ({ value, onChange, ...fieldProps }: Props) {
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
    const handleChange = () => {
        const place = autocompleteRef.current?.getPlace()
        if (place && place.formatted_address && place.geometry?.location) {
            const address: Address = {
                address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }
            onChange(address)
        }
    }
    return (
        <LoadGoogleScript>
            <Autocomplete
            onLoad={autocomplete => autocompleteRef.current = autocomplete}
            onPlaceChanged={handleChange}
            restrictions={{
                country: 'br'                         
            }}
            bounds={typeof google !== 'undefined' ? new google.maps.LatLngBounds(
                new google.maps.LatLng(-23.06971745565688, -43.867407141829254),
                new google.maps.LatLng(-22.631585230211787, -43.12519091670126)        
            ) : undefined}
            >
                <FormField {...fieldProps}/>
            </Autocomplete>
        </LoadGoogleScript>
    )
}