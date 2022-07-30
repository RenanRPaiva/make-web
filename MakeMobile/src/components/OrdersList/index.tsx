import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {LoadingStatus} from '../../entities/LoadingStatus';
import {Order} from '../../entities/Order';
import {selectloadOrderInfo} from '../../store/slices/ordersSlice';
import {Container} from '../Container';
import {CustomAlert} from '../CustomAlert';
import {CustomText} from '../CustomText';
import {Loading} from '../Loading';
import {OrderCard} from '../OrderCard';

type Props = {
  orders: Order[];
  noOrdersMessage: string;
};

export function OrdersList({orders, noOrdersMessage}: Props) {
  const {status} = useSelector(selectloadOrderInfo);
  if (status === LoadingStatus.loading) {
    return <Loading />;
  }
  if (status === LoadingStatus.failed) {
    return (
      <Container padding>
        <CustomAlert>Falha ao buscar pedidos.</CustomAlert>
      </Container>
    );
  }
  return (
    <Container padding>
      {orders.length > 0 ? (
        <>
          {orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </>
      ) : (
        <CustomText style={styles.noOrder}>{noOrdersMessage}</CustomText>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  noOrder: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 16,
  },
});
