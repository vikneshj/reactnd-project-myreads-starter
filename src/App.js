import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'

class BooksApp extends React.Component {
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
      this.setState({books:books});
    }
 )
}

changeShelf = (book, shelf) => {
  BooksAPI.update(book, shelf)

  BooksAPI.getAll().then((books) => {
    this.setState({ books: books })
  }
  )
}

  searchBook = () => {
  
  BooksAPI.search()}

  render() {
    return (
      <div className="app">
        
        <MainPage books={this.state.books}
        changeShelf={this.changeShelf}/>
		
      </div>
    )
  }
}

export default BooksApp
