/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

import FabButton from '../../components/FabButton';

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function ChatRoom() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('SignIn');
      })
      .catch(error => {
        console.log('Não possui usuário');
      });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Button onPress={handleSignOut}>
            <>
              <MaterialIcons name="arrow-back" size={28} color="#000" />
            </>
          </S.Button>
          <S.Text>Grupos</S.Text>
        </S.Header>

        <S.Button>
          <>
            <MaterialIcons name="search" size={28} color="#000" />
          </>
        </S.Button>
      </S.Container>

      <FabButton setVisible={() => setModalVisible(true)} />
    </S.Wrapper>
  );
}
