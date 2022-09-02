/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity``;

export const Row = styled.View`
  padding: 10px 10px 10px 10px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme?.colors?.backgroundAll};

  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Container = styled.View`
  flex-shrink: 1;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text.attrs({
  numberOgLines: 1,
})`
  color: ${({ theme }) => theme?.colors?.black};
  font-weight: bold;
`;

export const TextLastMsgn = styled.Text.attrs({
  numberOgLines: 1,
})`
  /* color: ${({ theme }) => theme?.colors?.default}; */
  color: #c1c1c1;
`;
