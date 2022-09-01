/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { Modal } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

import FabButton from '../../components/FabButton';
import ModalRoom from '../../components/ModalRoom';

import auth from '@react-native-firebase/auth';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function ChatRoom() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

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

  useEffect(() => {
    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null;

    if (!hasUser) {
      navigation.navigate('SignIn');
    }

  }, [isFocused]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Button onPress={handleSignOut}>
            <>
              <MaterialIcons name="arrow-back" size={28} color="#fff" />
            </>
          </S.Button>
          <S.Text>Grupos</S.Text>
        </S.Header>

        <S.Button>
          <>
            <MaterialIcons name="search" size={28} color="#fff" />
          </>
        </S.Button>
      </S.Container>

      <S.Modal visible={modalVisible} animationType="fade" transparent={true} >
        <ModalRoom setVible={() => setModalVisible(false)} />
      </S.Modal>


      <FabButton setVisible={() => setModalVisible(true)} />
    </S.Wrapper>
  );
}
