import { useLoadScript } from "@react-google-maps/api";
import { Spinner } from "react-bootstrap";

type Props = {
    children: React.ReactElement
}

const libraries: 'places'[]= ['places']

export default function LoadGoogleScript({ children }: Props) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyALlCd2X12quqEOjlH2Dqj98vIMvuWVxAQ',
        libraries
    })
    if (!isLoaded) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Carregando...</span>
        </Spinner>
    }
    return children
}