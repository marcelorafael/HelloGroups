/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as S from './styles';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ModalRoom = ({ setVible, setUpdateScreen }) => {
  const [roomName, setRoomName] = useState('');
  const [loading, setLoading] = useState(false);

  const user = auth().currentUser.toJSON();

  const handleButtonCreate = () => {
    if (roomName === '') { return; }

    setLoading(true);

    firestore().collection('MESSAGE_THREADS')
      .get()
      .then(snapshot => {
        let myThreads = 0;

        snapshot.docs.map(docItem => {
          if (docItem.data().owner === user.uid) {
            myThreads += 1;
          }
        });

        if (myThreads >= 4) {
          alert('Você já atingiu o limite de grupos criados.');
          setLoading(false);
        } else {
          handleCreateRoom();
          setLoading(false);
        }
      });




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
          setUpdateScreen();
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
