import { Address } from "./Address"

export type Estimate = {
    id: string
    minutes: number
    date?:string
    hours?:string
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