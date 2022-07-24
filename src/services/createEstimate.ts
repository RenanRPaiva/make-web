import { addDoc, collection } from "firebase/firestore"
import { Address } from "../entities/Address"
import { Estimate } from "../entities/Estimate"
import { calculateDistance } from "./calculateDistance"
import { db } from "./firebase"

export type NewEstimateInput = {
    customerAddress: Address
    coments: string   
    date: string
    hours: string
    maquiagem: number
    penteado: number
    pacoteMc: number
    pacoteMp: number
    pacoteNoiva: number
    atendimento: number
}




export const createEstimate = async ({ customerAddress, coments, date, hours, maquiagem, penteado, pacoteMc, pacoteMp, pacoteNoiva, atendimento }: NewEstimateInput): Promise<Estimate> => {
    const { distance: meters, duration } = await calculateDistance({

        origin: customerAddress,
        destination: customerAddress
    })
    const minutes = Math.ceil(duration / 60)
    const value = getValue(meters, minutes, maquiagem, penteado, pacoteMc, pacoteMp, pacoteNoiva, atendimento)
    const estimateData = {
        minutes,
        meters,
        value,
        customerAddress,
        coments,
        maquiagem,
        penteado,
        pacoteMc,
        pacoteMp,
        pacoteNoiva,
        atendimento
    }
    const res = await addDoc(collection(db, "estimates"), estimateData)
    return {
        id: res.id,
        ...estimateData
    }
}


const getValue = (meters: number, minutes: number, maquiagem: number, penteado: number, pacoteMc: number, pacoteMp: number, pacoteNoiva: number, atendimento: number) => {
    let value = 1.5
    value += minutes * 0.25
    value += meters * 0.001
    value += maquiagem * 100
    value += penteado * 100
    value += pacoteMc * 150
    value += pacoteMp * 180
    value += pacoteNoiva * 400
    value += atendimento * 200
    const min = 4.5
    if (value < min) {
        return min
    }
    return value
}

