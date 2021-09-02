import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

// Always return JSX, you always need to return something! even if it's just an empty <div>

// JSX Rules
// return single Element
// div / section / article or Fragment ex. <>, <React.Fragment>
// use camelCase for html attribute
// className instead of class
// close every Element
// formatting

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}
const author = "Mark Thunder"
const Book = () => {
  const title = "Dee's Big Nuts"
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/61HtUDSnCoL._AC_UL200_SR200,200_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 6}</p> */} 
      {/* we cannot have a statement here, however if we have an expression everything will work as shown below */}
      <p>{6 + 6}</p>
    </article>
  )
}

//const Author = () => {
//return (
//  <h4   example of inline styling ( it will override the css coming from the imported CSS file.
// style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
// ></h4>
//)
//}

ReactDom.render(<BookList />, document.getElementById('root'))
