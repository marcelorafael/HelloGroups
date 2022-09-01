/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as S from './styles';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ModalRoom = ({ setVible }) => {
  const [roomName, setRoomName] = useState('');
  const [loading, setLoading] = useState(false);

  const user = auth().currentUser.toJSON();

  const handleButtonCreate = () => {
    if (roomName === '') { return; }

    setLoading(true);

    handleCreateRoom();
  };

  const handleCreateRoom = () => {
    firestore()
      .collection('MESSAGE_THREADS')
      .add({
        name: roomName,
        owner: user.uid,
        lastMessage: {
          text: `Grupo ${roomName} criado!`,
          createAt: firestore.FieldValue.serverTimestamp(),
        },
      })
      .then(docRef => {
        docRef.collection('MESSAGES').add({
          text: `Grupo ${roomName} criado!`,
          createAt: firestore.FieldValue.serverTimestamp(),
          system: true,
        }).then(() => {
          setLoading(false);
          setVible();
        });

      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <S.Wrapper>
      <S.ButtonCloseModal onPress={setVible}>
        <S.CenterButtonCloseModal />
      </S.ButtonCloseModal>

      <S.ModalContent>
        <S.Title>Criar um novo Grupo?</S.Title>
        <S.InputNameGroup
          value={roomName}
          onChangeText={(text) => setRoomName(text)}
          placeholder="Nome da sala"
        // underlineColorAndroid="#DDD"
        />

        <S.ButtonCreateGroup onPress={handleButtonCreate}>
          {loading
            ? <ActivityIndicator size="small" color="#3075DD" />
            : <S.TextButton>Criar sala</S.TextButton>
          }
        </S.ButtonCreateGroup>
      </S.ModalContent>
    </S.Wrapper>
  );
};

export default ModalRoom;