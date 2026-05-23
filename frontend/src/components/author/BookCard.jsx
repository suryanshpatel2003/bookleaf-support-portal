const BookCard = ({ book }) => {

  return (
    <div className="bg-white p-5 rounded-xl shadow">

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
  );
};

export default BookCard;