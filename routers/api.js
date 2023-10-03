const express = require("express");
const { Book } = require("../models");
const api = express.Router();

// Section Books
api.get('/v1/books', async (req, res) => {
 const books = await Book.findAll();
    try {
        res.status(200).json({
            status: "success",
            data: books
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: err.message,
            stack: err
        })
    }
});

api.post('/v1/books', async (req, res) => {
    const { title, author, publish_year, description } = req.body;
    try {
        const book = await Book.create({
            title, author, publish_year, description
        });

        res.status(201).json({
            status: "success",
            data: book,
            message: "Data buku berhasil ditambahkan!"
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            data: req.body,
            message: err.message,
            stack: err
        })
    }
});

module.exports = api;