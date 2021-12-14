import React, { useState, useEffect } from 'react';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, List } from '../organisms/book';
import { getBookList } from '../../api/book';
import { Pagination } from '../organisms';

const Book = () => {
  let navigate = useNavigate();
  let { search } = useLocation();
  const [bookList, setBookList] = useState([]);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const { query } = qs.parse(search.slice(1)); //"?aaa=bbb"
    if (query) {
      setQuery(query);
      searchBookList({ query });
    }
  }, [search]);

  useEffect(() => {
    searchBookList({ query });
  }, [page]);

  const searchBookList = async ({ query }) => {
    if (!query) return;

    // 쿼리스트링에 검색결과 저장
    const search = qs.stringify({ query });
    navigate({ search });
    const start = (page - 1) * 10 + 1;
    const result = await getBookList({ query, start });
    setBookList(result.items);
    setTotal(result.total);
  };

  const handleSubmit = () => {
    setPage(1);
    searchBookList({ query });
  };

  return (
    <>
      <h2>책</h2>
      <Search onSubmit={handleSubmit} query={query} setQuery={setQuery} />
      <List bookList={bookList} />
      <Pagination total={total} nowPage={page} onChange={setPage} />
    </>
  );
};

export default Book;
