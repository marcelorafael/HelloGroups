/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  padding-right: 10px;
  padding-left: 10px;
`;

export const MessageBox = styled.View`
  border-radius: 5px;
  padding: 10px;
  background-color: ${({ isMyMessage }) => isMyMessage ? 'rgba(82,177,88,0.5)' : 'rgba(255,217,153,0.5)'};
  margin-left: ${({ isMyMessage }) => isMyMessage ? '50px' : 0};
  margin-right: ${({ isMyMessage }) => isMyMessage ? 0 : '50px'};
`;

export const TitleName = styled.Text`
  color: rgba(0, 9, 75, 1);
  font-weight: bold;
  margin-bottom: 5px;
`;

export const TextMessage = styled.Text`
  color: #333;
`;
