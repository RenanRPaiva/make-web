import {Address} from './Address';
import {OrderStatus} from './OrderStatus';

export type Order = {
  id: string;
  minutes: number;
  date?: string;
  hours?: string;
  meters: number;
  value: number;
  customerAddress: Address;
  coments: string;
  maquiagem: number;
  penteado: number;
  pacoteMc: number;
  pacoteMp: number;
  pacoteNoiva: number;
  atendimento: number;
  user: string;
  friendlyId: string;
  makeValue: number;
  status: OrderStatus;
  createdAt: Date;
};
