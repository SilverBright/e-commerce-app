import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size:1.4rem;
  background: transparent;
  border: 0.08rem solid silver;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
&:hover {
  background: lightgrey;
  color: rgb(89, 71, 125);
}
`