import React, { useState, useContext, useEffect } from 'react';

const URL = "https://openlibrary.org/subjects/love.json?limit=10";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]); // خزنت الكتب هنا 
  const [title, setTitle] = useState("كتب دراما ");
  const [loading, setLoading] = useState(true); // حالة التحميل

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true); //  التحميل
      try {
        const response = await fetch(URL);
        const data = await response.json();

        if (data.works) {
          const formattedBooks = data.works.map((book) => ({
            id: book.key,
            title: book.title,
            author: book.authors?.[0]?.name || "مؤلف غير معروف",
            cover_id: book.cover_id,
          }));

          setBooks(formattedBooks);
          setTitle("كتب دراما ");
        } else {
          setBooks([]);
          setTitle("ما فيه كتب ");
        }
      } catch (error) {
        console.error("حدث خطأ أثناء احضار البيانات:", error);
        setTitle("حدث خطأ أثناء التحميل");
      }
      setLoading(false); // download finished 
    };

    loadBooks();
  }, []);

  return (
    <AppContext.Provider value={{ books, title, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
