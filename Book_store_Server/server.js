const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');


const util =require('./util')

const app = express();
app.use(cors())

const PORT = process.env.PORT || 3000;


// Connect to MongoDB Atlas
mongoose.connect(util.CONNECTION_URL).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('Error connecting to MongoDB Atlas', err);
});

// Define a Mongoose Schema
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    name:String,
    description:String,
    genre:String,
    author:String,
    imageUrl:String,
    availableCount:Number,
    publishingDate:Date,
    publisher:String,
    rating:Number,

});
const BookSchemaModel = mongoose.model('Book', bookSchema);

// Middleware
app.use(express.json());

// Routes
app.post('/book', async (req, res) => {
  const { name, description,genre,author,imageUrl,availableCount,publishingDate,publisher,rating } = req.body;
  console.log(req.body)
  try {
    const book = new BookSchemaModel({  name, description,genre,author,imageUrl,availableCount,publishingDate,publisher,rating});
    console.log(book)
    await book.save();
    console.log(book)
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/books', async (req, res) => {
  try {
    const books = await BookSchemaModel.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/book/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description,genre,author,imageUrl,availableCount,publishingDate,publisher,rating } = req.body;
  try {
    const book = await BookSchemaModel.findByIdAndUpdate(id, { name, description,genre,author,imageUrl,availableCount,publishingDate,publisher,rating}, { new: true });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/book/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await BookSchemaModel.findByIdAndDelete(id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
