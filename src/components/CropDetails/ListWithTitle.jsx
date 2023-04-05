import React from "react";
import styled from "styled-components";
import { tickCircle } from "../../../assets/images";

const ListWithTitle = ({ title, list }) => {
  return (
    <ListContainer>
      <p>{title}</p>
      <ListItems>
        {list?.map((each, index) => (
          <li key={index}>
            <img src={tickCircle} alt="" /> {each}
          </li>
        ))}
      </ListItems>
    </ListContainer>
  );
};

export default ListWithTitle;

export const ListContainer = styled.div`
  color: #313131;
  p {
    font-size: clamp(17px, 1.7vw, 20px);
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 8px;
  }
`;

export const ListItems = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 8px;

  li {
    display: flex;
    gap: 8px;
    color: #565656;
    font-weight: 400;
    font-size: 14px;
  }
`;
