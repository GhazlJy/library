import React from 'react';
import { useGlobalContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import coverImg from '../images/cover_not_found.jpg';
import '../css/List.css';

const List = () => {
  const { books, title } = useGlobalContext();

  return (
    <section className="list">
      <h2>{title}</h2>
      <div className="list-gg">
        {books.map((book) => {
          const id = book.id.replace('/works/', '');
          const cover = book.cover_id
            ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
            : coverImg;

          return (
            <Link to={`/book/${id}`} key={id} className="book-card-link">
              <div className="card">
                <img src={cover} alt={book.title} className="book-cover" />
                <h3>{book.title}</h3>
                <p className="pp">{book.author}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default List;