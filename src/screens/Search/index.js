/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Keyboard } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useIsFocused } from '@react-navigation/native';
export default function Search() {
  const isFocused = useIsFocused();
  const [input, setInput] = useState('');
  const [user, setUser] = useState('');
  const [chats, setChats] = useState([]);

  useEffect(() => {

    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null;

    setUser(user);

  }, [isFocused]);

  const handleSearch = async () => {
    if (input === '') { return; }

    const responseSearch = await firestore()
      .collection('MESSAGE_THREADS')
      .where('name', '>=', input)
      .where('name', '<=', input + '\uf8ff')
      .get()
      .then(querySnapshot => {
        const threads = querySnapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id,
            name: '',
            lastMessage: { text: '' },
            ...documentSnapshot.data(),
          };
        });

        setChats(threads);
        console.log(threads);
        setInput('');
        Keyboard.dismiss();
      });


  };

  return (
    <S.Wrapper>
      <S.ContainerInput>
        <S.InputSearch
          placeholder="Digite o nome da sala"
          placeholderTextColor="#ccc"
          onChangeText={text => setInput(text)}
          autoCapitalize="none"
        />
        <S.ButtonSearch onPress={() => handleSearch()}>
          <MaterialIcons name="search" size={30} color="#FFF" />
        </S.ButtonSearch>
      </S.ContainerInput>
    </S.Wrapper>
  );
}
