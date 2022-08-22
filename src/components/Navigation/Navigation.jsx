import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &.active {
    color: #2196f3;
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/">Головна</StyledLink>
      <StyledLink to="/authors">Автори</StyledLink>
      <StyledLink to="/books">Книги</StyledLink>
    </nav>
  );
};
