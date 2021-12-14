import React, { useState, useEffect } from "react";
import { List, Search } from "../organisms/movie";
import { getMovieList } from "../../api/movie";
import { Pagination } from "../organisms";

const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [total, setTotal] = useState(0);
  const [params, setParams] = useState({ query: "", country: "all" });
  const [page, setPage] = useState(1);

  useEffect(() => {
    search();
  }, [params, page]);

  const handleChange = ({ name, value }) => {
    setPage(1);
    setParams({ ...params, [name]: value });
  };
  const handleChangePage = (page) => setPage(page);

  const search = async () => {
    const { query, country } = params;
    if (!query) return;

    const start = (page - 1) * 10 + 1;
    const form = { query, start };
    // 국가 전체선택이면 country 파라미터 넣지 않음.
    if (country !== "all") form.country = country;

    const result = await getMovieList(form);
    setMovieList(result.items);
    setTotal(result.total);
  };

  return (
    <>
      <h2>영화</h2>
      <Search onChange={handleChange} />
      <List movieList={movieList} />
      <Pagination total={total} nowPage={page} onChange={handleChangePage} />
    </>
  );
};

export default Movie;
