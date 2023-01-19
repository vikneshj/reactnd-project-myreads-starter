import React from 'react'

const Book = ({book, changeShelf, currentShelf}) => {
 {
    let thumbnailUrl
    if (book.imageLinks){
thumbnailUrl = book.imageLinks.thumbnail
    }else{
thumbnailUrl = ''
    }
return(
  <div className='book'>
    <div className='book-top'>
  <div style={{width: 120, height: 180,backgroundImage: `url("${thumbnailUrl}")`}} > </div>
  <div className="book-shelf-changer">
                            <select
                                onChange={(e) => changeShelf(book, 
                                    e.target.value)}
                                value={currentShelf}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        </div>
  <div className="book-title">{book.title}</div>
  <div className="book-Author">{book.authors}</div>
  </div>)
}
 
}

export default Book