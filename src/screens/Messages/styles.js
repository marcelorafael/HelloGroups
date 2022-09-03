/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ListMessages = styled.FlatList`
  width: 100%;
`;

export const ContainerInputChangeMessage = styled.View`
  flex-direction: row;
  margin: 10px;
  align-items: flex-end;
`;

export const MainInputChangeMessage = styled.View`
/* flex: 1 */
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme?.colors?.lightWhite};

  border-radius: ${({ theme }) => theme?.border?.radius};
  margin-right: 5px;

  flex: 1;
`;

export const InputMessage = styled.TextInput.attrs({
  multiline: true,
  autoCorrect: false,
})`
  width: 100%;
  color:#333;

  max-height: 130px;
  min-height: 48px;
`;

export const SendButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
`;

export const ButtonContainer = styled.View`
  background-color: ${({ theme }) => theme?.colors.primary};

  height: 48px;
  width: 48px;

  border-radius: 25px;

  align-items: center;
  justify-content: center;
`;
