/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';

export default function ChatList({ data, deleteRoom }) {
  return (
    <S.Wrapper onPress={() => { }} onLongPress={() => deleteRoom && deleteRoom()}>
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
