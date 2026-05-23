import { useEffect, useState } from "react";
import AuthorLayout from "../../layouts/AuthorLayout"; // Wrap layout check kiya
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
    <AuthorLayout>
      <Navbar />
      <div className="max-w-7xl mx-auto py-4">
        {/* Cinematic Page Title */}
        <div className="relative mb-10">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-full blur-[2px]" />
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            My Books
          </h1>
          <p className="text-xs text-slate-400 mt-1 tracking-wider uppercase font-medium">
            Your published literary collection
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="group relative overflow-hidden backdrop-blur-md bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 transform hover:-translate-y-1 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] w-full bg-gradient-to-r from-indigo-500/40 to-purple-500/40 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col justify-between h-full relative z-10">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors duration-200">
                    {book.title}
                  </h2>
                  <div className="mt-4 space-y-1.5 text-xs font-medium tracking-wide">
                    <p className="text-slate-400 flex justify-between border-b border-slate-800/60 pb-1.5">
                      <span>ISBN</span>
                      <span className="font-mono text-slate-200">{book.isbn}</span>
                    </p>
                    <p className="text-slate-400 flex justify-between pt-1">
                      <span>Genre</span>
                      <span className="text-indigo-400 font-semibold">{book.genre}</span>
                    </p>
                  </div>
                </div>

                {/* Micro Royalty Box */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Accumulated Royalty</span>
                  <span className="text-xl font-black text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                    ₹{book.totalRoyaltyEarned}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AuthorLayout>
  );
};

export default MyBooks;