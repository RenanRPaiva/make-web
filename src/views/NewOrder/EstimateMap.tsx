import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LoadGoogleScript from "../../components/LoadGoogleScript";
import { selectCurrentEstimate } from "../../store/slices/estimateSlice";

export default function EstimateMap() {
    const currentEstimate = useSelector(selectCurrentEstimate)
    const handleLoadMap = (map: google.maps.Map) => {
        if (!currentEstimate) {
            return
        }


        const bounds = new google.maps.LatLngBounds()
        bounds.extend({
            lat: currentEstimate?.customerAddress.lat,
            lng: currentEstimate?.customerAddress.lng
        })
        map.setCenter(bounds.getCenter())


    }

    if (!currentEstimate) {
        return null
    }

    return (
        <LoadGoogleScript>
            <WrapStyled>
                <GoogleMap
                    mapContainerStyle={{
                        minHeight: 150,
                        flex: 1

                    }}
                    center={{ lat: 0, lng: 0 }}
                    zoom={16}
                    onLoad={handleLoadMap}
                    options={{
                        disableDefaultUI: true,
                        disableDoubleClickZoom: true,
                        gestureHandling: 'none',
                        clickableIcons: false
                    }}
                >

                    <Marker position={{
                        lat: currentEstimate.customerAddress.lat,
                        lng: currentEstimate.customerAddress.lng
                    }} />
                </GoogleMap>

            </WrapStyled>
        </LoadGoogleScript>
    )

}

const WrapStyled = styled.div`
display: flex ;
height:100% ;
flex-direction: column ;
a[href^="http://maps.google.com/maps"]{display:none !important}
a[href^="https://maps.google.com/maps"]{display:none !important}
.gmnoprint a, .gmnoprint span, .gm-style-cc{
    display: none ;
}
.gmnoprint div{
    background: none !important ;
}


`