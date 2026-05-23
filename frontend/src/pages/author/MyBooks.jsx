import { useEffect, useState } from "react";

import Navbar from "../../components/common/Navbar";

import { getMyBooks } from "../../api/bookApi";

const MyBooks = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {

    fetchBooks();

  }, []);

  const fetchBooks = async () => {

    try {

      const res = await getMyBooks();

      setBooks(res.data.books);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div>

      <Navbar />

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          My Books
        </h1>

        <div className="grid grid-cols-3 gap-5">

          {
            books.map((book) => (
              <div
                key={book._id}
                className="bg-white p-5 rounded-xl shadow"
              >

                <h2 className="text-xl font-bold">
                  {book.title}
                </h2>

                <p className="mt-2">
                  ISBN: {book.isbn}
                </p>

                <p>
                  Genre: {book.genre}
                </p>

                <p>
                  Royalty:
                  ₹{book.totalRoyaltyEarned}
                </p>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  );
};

export default MyBooks;