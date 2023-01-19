import React, {useState} from 'react'
import Book from './Book'
import SearchPage from './SearchPage'

const MainPage = ({books,changeShelf}) => {
const [isSearchPageOn, setIsSearchPageOn] = useState ('no');

  return (
    <div>
          {isSearchPageOn === 'no' && (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter(book=> book.shelf ==='currentlyReading').map(book=> (
                        <li key={book.id}>
    						<Book book={book}
                             changeShelf={changeShelf}
  							 />
                        </li>))
    				  }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter(book => book.shelf === 'wantToRead')
                      .map(book => (
                        <li key={book.id} >
                          <Book 
                            book={book}
                            changeShelf={changeShelf}
                            
                          />
                        </li>
                      ))
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter(book => book.shelf === 'read')
                      .map(book => (
                        <li key={book.id} >
                          <Book 
                            book={book}
                            changeShelf={changeShelf}
                        
                          />
                        </li>
                      ))
                    }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a href='#search' onClick={() => {setIsSearchPageOn('yes')}}>Add a book</a>
            </div>
          </div>)}
          {isSearchPageOn === 'yes' && (<SearchPage 
            books={books}
            changeShelf={changeShelf}
            onNavigate={() => setIsSearchPageOn('no')}/>)}
      </div>
        )
 }



export default MainPage;