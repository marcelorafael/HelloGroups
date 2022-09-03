/* eslint-disable prettier/prettier */
import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';

import auth from '@react-native-firebase/auth';

export default function ChatMessage({ data, idSendMessage, colorBoxMessage, isMyMessage }) {
  const user = auth().currentUser.toJSON();

  return (
    <S.Wrapper>
      <S.MessageBox
        colorBoxMessage={colorBoxMessage}
        isMyMessage={isMyMessage}
      >
        {!isMyMessage && <S.TitleName >{data?.user?.displayName}</S.TitleName>}
        <S.TextMessage>{data.text}</S.TextMessage>
      </S.MessageBox>
    </S.Wrapper>
  );
}

ChatMessage.PropTypes = {
  colorBoxMessage: PropTypes.string,
  isMyMessage: PropTypes.bool,
};
