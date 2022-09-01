/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: rgba(34, 34, 34, 0.4);
`;

export const ModalContent = styled.View`
  flex: 1;
  background: ${({ theme }) => theme?.colors?.lightWhite ?? '#FFF'};
  padding: 15px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme?.colors?.black ?? '#000'};
  text-align: center;
  font-size: ${({ theme }) => theme?.spacings?.xsmall};

  margin-top: 14px;
`;

export const InputNameGroup = styled.TextInput.attrs({
  placeholderTextColor: '#888',
})`
  border-radius: ${({ theme }) => theme?.border?.radius};
  height: 45px;
  background-color:${({ theme }) => theme?.colors?.default ?? '#D5D5D5'};
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme?.spacings?.xsmall};
`;

export const ButtonCreateGroup = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  border-radius: ${({ theme }) => theme?.border?.littleRadius};
  background-color: ${({ theme }) => theme?.colors?.primary};
  height: 45px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme?.colors?.lightWhite};
  font-weight: bold;
`;

export const ButtonCloseModal = styled.TouchableWithoutFeedback``;

export const CenterButtonCloseModal = styled.View`
  flex: 1;
`;
