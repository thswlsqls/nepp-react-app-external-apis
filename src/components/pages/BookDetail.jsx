import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../../api/book";

const BookDetail = () => {
  const [book, setBook] = useState({});
  const { title, image } = book;
  const { isbn } = useParams();

  useEffect(() => {
    // 즉시실행함수 IIFE
    (async () => {
      const result = await getBookDetail({ isbn });
      setBook(result.items[0]);
    })();
  }, [isbn]);

  if (Object.keys(book).length === 0) return <>로딩중</>;

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt="thumbnail" />
    </div>
  );
};

export default BookDetail;
