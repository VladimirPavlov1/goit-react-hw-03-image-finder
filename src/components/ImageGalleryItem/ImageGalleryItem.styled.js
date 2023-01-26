import styled from '@emotion/styled'



export const Img = styled.img`
  width: 100%;
  height:260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover{  
    transform: scale(1.03);
    cursor: zoom-in;}
`;
export const BtnModal = styled.button`
padding: 0;
border: none;
width: 100%;
height: 100%;
`;



