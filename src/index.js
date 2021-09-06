// Always return JSX, you always need to return something! even if it's just an empty <div>

// JSX Rules
// return single Element
// div / section / article or Fragment ex. <>, <React.Fragment>
// use camelCase for html attribute
// className instead of class
// close every Element
// formattingimport React from 'react'

import ReactDom from 'react-dom'

//CSS
import './index.css'

//setup vars =
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/61HtUDSnCoL._AC_UL200_SR200,200_.jpg',
    title: "Dee's Big Nuts",
    author: 'Mark Thunder',
  },

  {
    id: 2,

    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 3,

    img: 'https://images-na.ssl-images-amazon.com/images/I/91ig3dTSFgL._AC_UL200_SR200,200_.jpg',
    title: 'Go the F**k to Sleep',
    author: 'Adam Mansbach and Ricardo Cortés',
  },
]
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
const Book = (props) => {
  // Above is destructuring props inside the function parameters.

  // Below example is destructuring props inside the function, they both do the same thing.

  const { img, title, author } = props

  return (
    <article className='book'>
      <img src={img} alt='book' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
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
