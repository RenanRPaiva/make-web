import React from 'react';
import {Button} from 'react-native';
import {logoutUser} from '../../services/logoutUser';

export function LogoutButton() {
  const handleLogout = async () => {
    await logoutUser();
  };
  return <Button title="sair" onPress={handleLogout} />;
}
