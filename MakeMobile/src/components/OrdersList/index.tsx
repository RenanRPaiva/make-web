import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {LoadingStatus} from '../../entities/LoadingStatus';
import {Order} from '../../entities/Order';
import {selectloadOrderInfo} from '../../store/slices/ordersSlice';
import {Container} from '../Container';
import {CustomText} from '../CustomText';
import {Loading} from '../Loading';

type Props = {
  orders: Order[];
  noOrdersMessage: string;
};

export function OrdersList({orders, noOrdersMessage}: Props) {
  const {status} = useSelector(selectloadOrderInfo);
  if (status === LoadingStatus.loading) {
    return <Loading />;
  }
  return (
    <Container>
      {orders.length > 0 ? (
        <>
          {orders.map(order => (
            <CustomText key={order.id}>{order.friendlyId}</CustomText>
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