import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/Details.css';

const URL = "https://openlibrary.org/works/";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  // هنا استخدمت useEffect عشان أشغل الدالة مرة وحدة أول ما يفتح 
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`${URL}${id}.json`);
        const data = await res.json();

        console.log("تفاصيل الكتاب:", data);

        const description = data.description
          ? typeof data.description === 'string'
            ? data.description
            : data.description.value
          : "ما فيه وصف";

        const cover_img = data.covers && data.covers.length > 0
          ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
          : "https://via.placeholder.com/200x300?text=No+Cover";

        const authors = data.authors && data.authors.length > 0
          ? data.authors.map((a) => a.author?.key || "مجهول").join(", ")
          : "مجهولين";

        //لايوحد
        const pages = data.number_of_pages || "غير متوفر";

        setBook({
          title: data.title,
          description,
          cover_img,
          authors,
          pages,
        });
      } catch (error) {
        // console.log("خطأ في تحميل تفاصيل الكتاب", error);
        setBook(null);
      }
    };

    fetchDetails();
  }, [id]);

  if (!book) return <p>...جاري التحميل </p>;

  return (
    <section>
      <button onClick={() => navigate(-1)}>العودة</button>
      <div>
        <img src={book.cover_img} alt={book.title} />
        <h2>{book.title}</h2>
        <p><strong>المؤلفون:</strong> {book.authors}</p>
        <p>{book.description}</p>
        <p><strong>عدد الصفحات:</strong> {book.pages}</p>
      </div>
    </section>
  );
};

export default Details;