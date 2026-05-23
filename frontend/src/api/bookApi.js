import API from "./axios";

export const getMyBooks = async () => {
  return await API.get("/books/my-books");
};