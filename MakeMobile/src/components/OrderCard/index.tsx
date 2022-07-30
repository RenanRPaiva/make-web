import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Order} from '../../entities/Order';
import styled from 'styled-components/native';
import {OrderDetails} from '../OrderDetails';

type Props = {
  order: Order;
};

export function OrderCard({order}: Props) {
  return (
    <WrapStyled onPress={() => alert('Oi')}>
      <InfoWrapStyled>
        <OrderDetails order={order} showService />
      </InfoWrapStyled>
      <FontAwesomeIcon icon={faChevronRight} size={14} />
    </WrapStyled>
  );
}

const WrapStyled = styled.TouchableOpacity`
  border: 1px solid #ced4da;
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;
const InfoWrapStyled = styled.View`
  flex: 1;
  padding-right: 20px;
`;
