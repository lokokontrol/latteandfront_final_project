import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 1fr));
  img {
    height: 225px;
    width: 150px;
    position: relative;
    left: 20%;
  }
  background-color: #F5FFFA;
  width: 250px;
  border: 4px solid #FFDEAD;
  padding: 10px;
  margin: 5px;
  text-align: center;
  border-radius: 15px;
  font-family: sans-serif;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  p {
    margin: 0px
  }
`;





