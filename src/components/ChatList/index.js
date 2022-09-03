/* eslint-disable prettier/prettier */
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export default function ChatList({ data, deleteRoom }) {
  const navigation = useNavigation();

  const openChat = () => {
    console.log(data);
    navigation.navigate('Messages', { thread: data });
  };
  return (
    <S.Wrapper onPress={() => openChat()} onLongPress={() => deleteRoom && deleteRoom()}>
      <S.Row>
        <S.Container>
          <S.Header>
            <S.Title>{data.name}</S.Title>
          </S.Header>

          <S.TextLastMsgn>
            {data.lastMessage.text}
          </S.TextLastMsgn>
        </S.Container>
      </S.Row>
    </S.Wrapper>
  );
}
