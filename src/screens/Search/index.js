/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Keyboard, ActivityIndicator } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


import ChatList from '../../components/ChatList';

import { useIsFocused } from '@react-navigation/native';
export default function Search() {
  const isFocused = useIsFocused();
  const [input, setInput] = useState('');
  const [user, setUser] = useState('');
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null;

    setUser(user);

  }, [isFocused]);

  const handleSearch = async () => {
    if (input === '') { return; }

    setLoading(true);

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
        setLoading(false);
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
          {loading ? <ActivityIndicator color="#efa030" size="large" /> : <MaterialIcons name="search" size={30} color="#FFF" />}
        </S.ButtonSearch>
      </S.ContainerInput>

      {chats.length > 0 ? (<S.ListChats
        showsVerticalScrollIndicator={false}
        data={chats}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ChatList data={item} />
        )}
      />) : (
        <S.ContainerWrong>
          <S.AlternativeText>Grupo inesistente ou nome digitado errado.</S.AlternativeText>
          <Ionicons name="chatbubbles" size={50} color="#3075DD" />
        </S.ContainerWrong>
      )}
    </S.Wrapper>
  );
}
