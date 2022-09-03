/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { Alert } from 'react-native';

import { ActivityIndicator } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

import FabButton from '../../components/FabButton';
import ModalRoom from '../../components/ModalRoom';

import auth from '@react-native-firebase/auth';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import ChatList from '../../components/ChatList';

export default function ChatRoom() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [modalVisible, setModalVisible] = useState(false);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateScreen, setUpdateScreen] = useState(false);

  const user = auth().currentUser.toJSON();

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

  const deleteRoom = (ownerId, idRoom) => {
    if (ownerId !== user?.uid) { return; }

    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja deletar a sala?',
      [
        {
          text: 'Cancel',
          onPress: () => { },
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => { handleDeleteRoom(idRoom); },
        },
      ]
    );
  };

  const handleDeleteRoom = async (idRoom) => {
    await firestore().collection('MESSAGE_THREADS')
      .doc(idRoom)
      .delete();

    setUpdateScreen(!updateScreen);
  };

  useEffect(() => {
    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null;

    if (!hasUser) {
      navigation.navigate('SignIn');
    }

  }, [isFocused]);

  useEffect(() => {
    let isActive = true;
    setLoading(true);

    function getChats() {
      firestore()
        .collection('MESSAGE_THREADS')
        .orderBy('lastMessage.createAt', 'desc')
        .limit(10)
        .get()
        .then(snapshot => {
          const threads: any = snapshot.docs.map(documentSnapshot => {
            return {
              _id: documentSnapshot.id,
              name: '',
              lastMessage: { text: '' },
              ...documentSnapshot.data(),
            };
          });

          if (isActive) {
            setThreads(threads);
            setLoading(false);

            console.log(threads);
          }
        })
        .catch();
    }

    getChats();

    return () => {
      console.log('UnMounting');

      isActive = false;
    };
  }, [isFocused, updateScreen]);

  if (loading) {
    return (<S.ContainerLoading>
      <ActivityIndicator size="large" color="#041B4D" />
    </S.ContainerLoading>);
  }

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
        <ModalRoom
          setUpdateScreen={() => setUpdateScreen(!updateScreen)}
          setVible={() => setModalVisible(false)}
        />
      </S.Modal>

      <S.List
        data={threads}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ChatList data={item} deleteRoom={() => deleteRoom(item.owner, item._id)} />
        )}
      />


      <FabButton setVisible={() => setModalVisible(true)} />
    </S.Wrapper>
  );
}
