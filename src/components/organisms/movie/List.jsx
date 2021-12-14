import React from "react";
import styled from "styled-components";

const List = ({ movieList }) => {
  return (
    <ListWrapper>
      {movieList.map(({ link, image, title, userRating, pubDate }) => (
        <a key={title} href={link} target="_blank" rel="noreferrer">
          <Item>
            <Img src={image} />
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <span>
              {pubDate} / {userRating}
            </span>
          </Item>
        </a>
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
