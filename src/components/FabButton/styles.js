/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background-color: #3075dd;

  width: 60px;
  height: 60px;

  border-radius: 100px;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 10%;
  right: 6%;
`;

export const CenterView = styled(LinearGradient).attrs({
  colors: ['#041B4D', '#3075DD'],
})`
  width: 100%;
  height: 100%;

  border-radius: 100px;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme?.spacings?.small};

  font-weight: bold;


`;
