// Always return JSX, you always need to return something! even if it's just an empty <div>

// JSX Rules
// return single Element
// div / section / article or Fragment ex. <>, <React.Fragment>
// use camelCase for html attribute
// className instead of class
// close every Element
// formattingimport React from 'react'
import React from 'react'
import ReactDom from 'react-dom'
import { books } from './books'
import Book from './Book'

//CSS
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}>
            {' '}
          </Book>
        )
      })}
    </section>
  )
}

//  <p>{let x = 6}</p>

//  we cannot have a statement here, however if we have an expression everything will work as shown below

//   <p>{6 + 6}</p>

//const Author = () => {
//return (
//  <h4   example of inline styling ( it will override the css coming from the imported CSS file.
// style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
// ></h4>
//)
//}

ReactDom.render(<BookList />, document.getElementById('root'))
