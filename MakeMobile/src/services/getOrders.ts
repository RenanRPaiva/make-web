import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {Order} from '../entities/Order';

export const getOrders = async (userId: string) => {
  const [openOrders, MakeOrders] = await Promise.all([
    findOpenOrders(),
    findMakeOrders(userId),
  ]);
  return [...openOrders, ...MakeOrders];
};

const findOpenOrders = async () => {
  const ordersDocs = await firestore()
    .collection('orders')
    .where('status', '==', 'CREATED')
    .get();
  return docsToOrders(ordersDocs);
};

const findMakeOrders = async (userId: string) => {
  const ordersDocs = await firestore()
    .collection('orders')
    .where('make', '==', userId)
    .get();
  return docsToOrders(ordersDocs);
};

const docsToOrders = (
  ordersDocs: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
): Order[] => {
  const orders: Order[] = [];
  ordersDocs.forEach(doc => {
    const {
      friendlyId,
      minutes,
      meters,
      value,
      makeValue,
      date,
      hours,
      customerAddress,
      coments,
      maquiagem,
      penteado,
      pacoteMc,
      pacoteMp,
      pacoteNoiva,
      atendimento,
      user,
      status,
      createdAt,
    } = doc.data();
    orders.push({
      id: doc.id,
      friendlyId,
      minutes,
      meters,
      value,
      makeValue,
      date,
      hours,
      customerAddress,
      coments,
      maquiagem,
      penteado,
      pacoteMc,
      pacoteMp,
      pacoteNoiva,
      atendimento,
      user,
      status,
      createdAt: createdAt.toDate().toISOString(),
    });
  });
  return orders;
};
