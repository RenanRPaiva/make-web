import { Address } from "../entities/Address"

type CalculateDistance = {
    origin: Address,
    destination: Address
}

export const calculateDistance = async ({ origin, destination }: CalculateDistance) => {
    const directionsServices = new google.maps.DirectionsService()
    
    const { routes } = await directionsServices.route({       
        origin: new google.maps.LatLng(-22.899784474804864, -43.68014179554862),
        destination: new google.maps.LatLng(destination.lat, destination.lng),
        travelMode:  google.maps.TravelMode.DRIVING
    })
    if (!routes[0]?.legs[0]?.distance || !routes[0]?.legs[0]?.duration) {
        throw new Error('Falha ao calcular distância. Tente novamente.')
    }
    return { 
        distance: routes[0].legs[0].distance.value,
        duration: routes[0].legs[0].duration.value
    }
}
