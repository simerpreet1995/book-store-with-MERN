const express = require("express");
const  booksController  = require("../controllers/books-controller");
const router = express.Router();
const Book = require("../model/Book")

router.get('/', booksController.getAllBooks)

router.post("/", booksController.addBooks)

router.get('/:id', booksController.getById)

router.put("/:id", booksController.updateBook)

router.delete("/:id", booksController.deleteBook)
module.exports = router