import styled, { css } from "styled-components";

const Pagination = ({ total, nowPage, onChange }) => {
  // display : 한 페이지에 몇개씩 나오냐(10)
  // start : 현재 페이지의 첫번째 아이템 순번
  // total : 마지막페이지 결정

  const display = 10;
  const lastPage = Math.ceil(total / display);
  const startPage = Math.floor((nowPage - 1) / 10) * 10 + 1;
  const endPage = startPage + 9 < lastPage ? startPage + 9 : lastPage;

  const pageList = [];
  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  return (
    <List>
      {nowPage > 1 && (
        <BtnPage onClick={() => onChange(nowPage - 1)}>이전</BtnPage>
      )}
      {pageList.map((page) => (
        <BtnPage
          key={page}
          active={nowPage === page}
          onClick={() => onChange(page)}
        >
          {page}
        </BtnPage>
      ))}
      {lastPage > nowPage && (
        <BtnPage onClick={() => onChange(nowPage + 1)}>다음</BtnPage>
      )}
    </List>
  );
};

const List = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
`;
const BtnPage = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: #000;
      color: #fff;
    `}
`;

export default Pagination;
