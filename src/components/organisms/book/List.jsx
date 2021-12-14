import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const List = ({ bookList }) => {
  return (
    <ListWrapper>
      {bookList.map(({ image, title, isbn }) => (
        <Link to={`/book/${isbn}`} key={isbn}>
          <Item>
            <Img src={image} />
            <Title dangerouslySetInnerHTML={{ __html: title }} />
          </Item>
        </Link>
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Item = styled.div`
  padding: 5px;
  cursor: pointer;
`;
const Title = styled.p``;
const Img = styled.img`
  width: 100%;
`;

export default List;
