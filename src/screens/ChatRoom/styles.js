/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled(LinearGradient).attrs({
  colors: ['#041B4D', '#3075DD'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 130px;

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  padding: 15px;
  padding-top: 50px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 20px;

  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity``;

export const Modal = styled.Modal``;

export const List = styled.FlatList``;
