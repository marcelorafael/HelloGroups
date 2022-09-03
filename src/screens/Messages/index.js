/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useMemo } from 'react';
import * as S from './styles';

import { KeyboardAvoidingView, Platform } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Feather from 'react-native-vector-icons/Feather';

// COMPONENTS
import ChatMessage from '../../components/ChatMessage';

export default function Messages({ route }) {
  const { thread } = route.params;
  const user = auth().currentUser.toJSON();
  const [messages, setMesages] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [colorSendMessage, setColorSendMessage] = useState('');

  useEffect(() => {
    const unsubscriberListener = firestore().collection('MESSAGE_THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messagesSnapshot = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();
          setMesages(firebaseData);
          const data = {
            _id: doc.id,
            text: '',
            createdAt: firestore.FieldValue.serverTimestamp(),
            ...firebaseData,
          };

          if (firebaseData.system) {
            data.user = {
              ...firebaseData?.user,
              name: firebaseData?.user?.displayName,
            };
          }

          return data;
        });





        setMesages(messagesSnapshot);

      });

    return () => {
      unsubscriberListener();
    };
  }, []);

  const isMyMessage = useMemo(() => {
    return messages[0]?._id === user.uid;
  }, [messages]);

  useEffect(() => {
    if (isMyMessage) {
      setColorSendMessage('rgba(82,177,88,0.5)');
    } else {
      setColorSendMessage('rgba(255,217,153,0.5)');
    }
  }, [isMyMessage]);


  return (
    <S.Wrapper>
      <S.ListMessages
        data={messages}
        keyExtractor={item => item._id}
        renderItem={({ item }) =>
          <ChatMessage
            data={item}
            colorBoxMessage={colorSendMessage}
            isMyMessage={isMyMessage}
          />
        }
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ width: '100%' }}
        keyboardVerticalOffset={100}
      >
        <S.ContainerInputChangeMessage>
          <S.MainInputChangeMessage>
            <S.InputMessage
              value={inputMessage}
              onChangeText={(text) => setInputMessage(text)}
              placeholder="Sua Mensagem"
              placeholderTextColor="#333"
            />

          </S.MainInputChangeMessage>

          <S.SendButton>
            <S.ButtonContainer>
              <Feather name="send" color="#fff" />
            </S.ButtonContainer>
          </S.SendButton>
        </S.ContainerInputChangeMessage>
      </KeyboardAvoidingView>
    </S.Wrapper>
  );
}
