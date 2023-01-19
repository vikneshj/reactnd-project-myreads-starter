import React, {useState} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

const SearchPage = ({books,changeShelf,onNavigate}) => {
  const [query, setQuery] = useState('');
  const [matchedBooks, setMatchedBooks] = useState([]);
  
  const updateQuery = (query) => {
  let trimmedQuery = query.trim()
  setQuery(trimmedQuery)
  fetchMatchedBooks(query)
  }
  
  const fetchMatchedBooks = (query) => {
  if (query.length !==0){
  	BooksAPI.search(query)
  		.then((matchedBooks)=>{
        if(matchedBooks.error) {
          setMatchedBooks([])
        }else{
  		    setMatchedBooks(matchedBooks)}
  		})
  	}else{
      setMatchedBooks([])
  }}
  
 return (
          <div className="search-books">
            <div className="search-books-bar">
              <a href='#main' onClick={()=> onNavigate()} className="close-search" >Close</a>
              <div className="search-books-input-wrapper">
                {
                  
                  /*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" 
				value={query}
				onChange={(event)=>updateQuery(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				        { 
                  matchedBooks.map(matchedBook => {
                    let shelf = "none"
                    books.forEach(book => {
                    if (book.id !== matchedBook.id) {
                        matchedBook.shelf = "none"
                    } else {
                        matchedBook.shelf = book.shelf
                    }
                    
                  })
                            
                  return(
                    <li key={matchedBook.id}>
                      <Book 
                        book={matchedBook}
                        changeShelf={changeShelf}
                        currentShelf={shelf}
                      />
                    </li>
                  )
                  }
                  )
                  }
			        </ol>
            </div>
          </div>
        )
 }

export default SearchPage