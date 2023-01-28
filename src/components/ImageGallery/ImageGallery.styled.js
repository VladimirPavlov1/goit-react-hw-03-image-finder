import styled from '@emotion/styled'
import { AiOutlineCloseCircle} from "react-icons/ai";


export const List = styled.ul`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
    display: block;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CloseModal = styled(AiOutlineCloseCircle)`
position: absolute;
top:16px;
right: 16px;
fill: white;
width:30px;
height: 30px;
`;

export const Error = styled.div`
color:red;
font-size: 24px;
`;