/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled.SafeAreaView`
  flex: 1;

`;

export const BackgroundImg = styled.ImageBackground`
  flex: 1;

  display: flex;
  align-items: center;

  padding-right: 20px;
  padding-left: 20px;

`;


export const Text = styled.Text`
  color: ${({ theme }) => theme?.colors?.white ?? '#fff'};
  font-size: ${({ theme }) => theme?.spacings?.xsmall ?? '16px'};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme?.spacings?.medium};
  font-weight: bold;

  margin-top: 90px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  color: ${({ theme }) => theme?.colors?.white ?? '#FAFAFA'};
  background-color: ${({ theme }) => theme?.colors?.primary ?? '#041B4D'};

  border-radius: ${({ theme }) => theme?.border?.radius ?? '8px'};

  width: 100%;

  margin-bottom: 10px;
  height: 50px;

  padding-left: 8px;
  padding-right: 8px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;

  /* background-color: ${({ theme }) => theme?.colors?.black}; */

  height: 50px;

  

  margin-bottom: 10px;
`;

export const CenterViewButton = styled(LinearGradient).attrs({
  colors: ['#000', '#3075DD'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  width: 100%;
  height: 100%;

  border-radius: ${({ theme }) => theme?.border?.radius ?? '8px'};

  display: flex;
  align-items: center;
  justify-content: center;
`;


export const TextButton = styled.Text`
  font-size: ${({ theme }) => theme?.spacings?.xsmall};
  font-weight: bold;
`;
