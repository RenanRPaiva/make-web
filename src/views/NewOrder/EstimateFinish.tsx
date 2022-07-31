import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentEstimate, selectCurrentEstimate } from "../../store/slices/estimateSlice";
import PayPalButton from "../../components/PayPalButton";
import { OrderResponseBody } from "@paypal/paypal-js"
import { toast } from "react-toastify";
import { createOrder } from "../../services/createOrder";
import { selectUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";


export default function EstimateFinish () {
    const currentEstimate = useSelector(selectCurrentEstimate)
    const user = useSelector(selectUser)    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handlePaymentSuccess = async (details: OrderResponseBody) => {
        try {
            if (!currentEstimate || !user){
                throw new Error()
            }
            await createOrder({
                estimate: currentEstimate,
                gatewayId: details.id,
                userId: user?.id,
                name: user?.name,
                phone: user?.phone
            })
            dispatch(clearCurrentEstimate())
            navigate('/novo-pedido/sucesso')

        }catch {
            toast.error('Falha ao processar o pagamento. Por favor, entre em contato conosco.')
        }
    }
    const handlePaymentError = () => {
        toast.error('Ocorreu um erro ao realizar o pagamento. Tente novamente.')
    }
    if (!currentEstimate) {
        return null
    }
    return (
        <div className="mt-3 px-3 px-md-0">
            <PayPalButton 
             value={currentEstimate.value}
             customId={currentEstimate.id}
             onSucces={handlePaymentSuccess}
             onError={handlePaymentError} 
            />
        </div>
    )
}