import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBack = styled.button`
  color: #000000;
  font-weight: 700;
  background-color: #ebf2fa;
  border: 2px solid;
  border-color: #000000;
  border-radius: 2px;
  cursor: hand;
  margin-bottom: 20px;
`;

export const MovieInfoWrap = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

export const MovieInfo = styled.div`
  margin-bottom: 16px;
`;

export const AddInfo = styled.div`
  font-weight: 700;
  border-bottom: 1px solid black;
`;

export const List = styled.ul`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  color: #000000;
  font-weight: 700;
  cursor: hand;
  &.active {
    color: red;
  }
`;
