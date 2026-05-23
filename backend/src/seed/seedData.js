require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = require("../config/db");

const User = require("../models/User.model");

const Book = require("../models/Book.model");

const sampleData = require("./sampleData.json");

const importData = async () => {
  try {

    await connectDB();

    await User.deleteMany();

    await Book.deleteMany();

    console.log("Old Data Deleted");

    for (const authorData of sampleData.authors) {

      const user = await User.create({
        name: authorData.name,
        email: authorData.email,
        password: "123456",
        role: "author",
      });

      console.log(`Author Created: ${user.name}`);

      for (const bookData of authorData.books) {

        await Book.create({
          title: bookData.title,

          isbn: bookData.isbn,

          genre: bookData.genre,

          publicationDate: bookData.publication_date,

          status: bookData.status,

          mrp: bookData.mrp,

          totalCopiesSold: bookData.total_copies_sold,

          totalRoyaltyEarned:
            bookData.total_royalty_earned,

          royaltyPaid: bookData.royalty_paid,

          royaltyPending:
            bookData.royalty_pending,

          author: user._id,
        });

        console.log(`Book Added: ${bookData.title}`);
      }
    }

    await User.create({
      name: "Admin",
      email: "admin@bookleaf.com",
      password: "123456",
      role: "admin",
    });

    console.log("Admin Created");

    console.log("Data Imported Successfully");

    process.exit();

  } catch (error) {

    console.log(error.message);

    process.exit(1);

  }
};

importData();