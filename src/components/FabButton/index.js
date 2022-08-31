/* eslint-disable prettier/prettier */
import React from 'react';

import * as S from './styles';

export default function FabButton({ setVisible }) {
  const handleNavigationButton = () => {
    setVisible();
  };
  return (
    <S.Wrapper onPress={handleNavigationButton}>
      <S.CenterView>
        <S.Text>+</S.Text>
      </S.CenterView>
    </S.Wrapper>
  );
}
