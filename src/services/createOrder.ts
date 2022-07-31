import { addDoc, collection } from "firebase/firestore"
import { Estimate } from "../entities/Estimate"
import { db } from "./firebase"

type NewOrderInput = {
    estimate: Estimate
    gatewayId: string
    userId: string
    name: string
    phone: string
}

export const createOrder = async ({ estimate, gatewayId, userId, name, phone }: NewOrderInput): Promise<void> => {
    const friendlyId = new Date().getTime().toString(36).toUpperCase()
    const makeValue = parseFloat((estimate.value).toFixed(2))
    const { id: estimateId, ...estimateData } = estimate
    await addDoc(collection(db, 'orders'), {
        ...estimateData,
        estimateId,
        gatewayId,
        user: userId,
        name: name,
        phone: phone,
        friendlyId,
        makeValue,
        status: 'CREATED',
        createdAt: new Date()
    })
}