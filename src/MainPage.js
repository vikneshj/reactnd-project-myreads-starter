import React, {Component} from 'react'
import Book from './Book'
import SearchPage from './SearchPage'

class MainPage extends Component {
state={
  isSearchPageOn: 'no'
}

 render () {
  return (
    <div>
          {this.state.isSearchPageOn === 'no' && (
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
                      {this.props.books.filter(book=> book.shelf ==='currentlyReading').map(book=> (
                        <li key={book.id}>
    						<Book book={book}
                             changeShelf={this.props.changeShelf}
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
                      {
                      this.props.books.filter(book => book.shelf === 'wantToRead')
                      .map(book => (
                        <li key={book.id} >
                          <Book 
                            book={book}
                            changeShelf={this.props.changeShelf}
                            
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
                      {
                      this.props.books.filter(book => book.shelf === 'read')
                      .map(book => (
                        <li key={book.id} >
                          <Book 
                            book={book}
                            changeShelf={this.props.changeShelf}
                        
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
              <a href='#search' onClick={() => {this.setState({isSearchPageOn: 'yes'})}}>Add a book</a>
            </div>
          </div>)}
          {this.state.isSearchPageOn === 'yes' && (<SearchPage 
            books={this.props.books}
            changeShelf={this.props.changeShelf}
            onNavigate={() => this.setState({isSearchPageOn:'no'})}/>)}
      </div>
        )
 }
}


export default MainPage;