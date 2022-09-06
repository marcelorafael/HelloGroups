/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme?.colors?.lightWhite};
`;

export const ContainerInput = styled.SafeAreaView`
  width: 100%;
  flex-direction: row;
  justify-content: center;

  margin-top: 15px;
  margin-bottom: 15px;
`;

export const InputSearch = styled.TextInput`
  color: #000;
  background-color: #EBEBEB;
  margin-left: 10px;
  height: 50px;
  width: 80%;
  border-radius: ${({ theme }) => theme?.border?.radius};
  padding: 5px;
`;

export const ButtonSearch = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background-color: ${({ theme }) => theme?.colors?.primary};
  border-radius: ${({ theme }) => theme?.border?.radius};
  align-items: center;
  justify-content: center;
  width: 15%
  margin-left: 5px;
  margin-right: 10px;
`;
