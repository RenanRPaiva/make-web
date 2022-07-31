import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import styled from "styled-components";
import { OrderResponseBody } from "@paypal/paypal-js"

type Props = {
    value: number
    customId: string
    onSucces: (details: OrderResponseBody) => Promise<void>
    onError: (err: Record<string, unknown>) => void
}

export default function PayPalButton({ value, customId, onSucces, onError }: Props) {
    return (
        <PayPalButtonsStyled
            createOrder={(data, actions) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        amount: {
                            currency_code: 'BRL',
                            value: value.toString()
                        },
                        custom_id: customId
                    }],
                    application_context: {
                        brand_name: 'Make +',
                        shipping_preference: 'NO_SHIPPING'
                    }
                })
            }} 
            onApprove={async (data, actions) => {
                if (actions.order){
               const dateils = await actions.order?.capture()
              await onSucces(dateils)
            }
            }}
            onError={onError}
            style={{
                layout: 'horizontal',
                color: "gold",
                shape: 'pill',
                tagline: false,
                height: 38
            }}

        />
    )
}

const PayPalButtonsStyled = styled(PayPalButtons)`
    .paypal-buttons {
        display: block !important;
     }
`