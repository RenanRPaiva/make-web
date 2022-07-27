import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {CustomText} from '../CustomText';

type Props = TouchableOpacityProps & {
  size?: 'md' | 'lg';
  block?: boolean;
  loading?: boolean;
};

export function CustomButton({
  children,
  size = 'md',
  block = false,
  loading = false,
  disabled = false,
  ...otherProps
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        block ? styles.block : {},
        styles.danger,
        styles[size],
        disabled ? styles.disableddanger : {},
      ]}
      {...otherProps}>
      {loading && <ActivityIndicator color="#FFF" style={styles.loading} />}
      <CustomText style={[styles.textBase, styles[`text${size}`]]}>
        {children}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textBase: {
    color: '#FFF',
  },
  danger: {
    backgroundColor: '#BD8085',
  },
  disableddanger: {
    backgroundColor: '#FFBEC2',
  },
  md: {
    paddingHorizontal: 50,
    paddingVertical: 9,
  },
  textmd: {
    fontSize: 16,
    lineHeight: 20,
  },
  lg: {
    paddingHorizontal: 90,
    paddingVertical: 13,
  },
  textlg: {
    fontSize: 18,
    lineHeight: 22,
  },
  block: {
    width: '100%',
  },
  loading: {
    marginRight: 10,
  },
});
