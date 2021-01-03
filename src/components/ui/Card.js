import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 1fr));
  img {
    height: 250px;
    width: 150px;
  }
`;





