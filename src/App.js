import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'

function BooksApp () {

  const [books,setBooks] = useState ([])


  useEffect( () => {
    BooksAPI.getAll()
      .then((books) => {
      setBooks(books);
    }
 )
});

const changeShelf = (book, shelf) => {
  BooksAPI.update(book, shelf)

  BooksAPI.getAll().then((books) => {
    setBooks(books)
  }
  )
}

    return (
      <div className="app">
        
        <MainPage books={books}
        changeShelf={changeShelf}/>
		
      </div>
    )
  }

export default BooksApp
