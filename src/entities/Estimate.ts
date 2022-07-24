import { Address } from "./Address"

export type Estimate = {
    id: string
    minutes: number
    meters: number
    value: number
    customerAddress: Address
    coments: string
    maquiagem: number
    penteado: number
    pacoteMc: number
    pacoteMp: number
    pacoteNoiva: number
    atendimento: number
}