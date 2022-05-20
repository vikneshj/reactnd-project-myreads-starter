import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: '',
    matchedBooks: []
  }
  
  updateQuery = (query) => {
  let trimmedQuery = query.trim()
  this.setState({query: trimmedQuery})
  this.fetchMatchedBooks(query)
  }
  
  fetchMatchedBooks = (query) => {
  if (query.length !==0){
  	BooksAPI.search(query)
  		.then((matchedBooks)=>{
        if(matchedBooks.error) {
          this.setState({matchedBooks: []})
        }else{
  		this.setState({matchedBooks:matchedBooks})}
  		})
  	}else{
      this.setState({matchedBooks: []})
  }}
  
render () {
 return (
          <div className="search-books">
            <div className="search-books-bar">
              <a href='#main' onClick={()=> this.props.onNavigate} className="close-search" >Close</a>
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
				value={this.state.query}
				onChange={(event)=>this.updateQuery(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				{   
                        this.state.matchedBooks.map(matchedBook => {
                            let shelf = "none"
                            this.props.books.forEach(book => {
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
                                    changeShelf={this.props.changeShelf}
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
}

export default SearchPage