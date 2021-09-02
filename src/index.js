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

const Book = () => {
  return (
    <article className='book'>
       <img
    src='https://images-na.ssl-images-amazon.com/images/I/61HtUDSnCoL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
  <h1>Dee's Big Nuts</h1>
  <h4>Mark Thunder</h4>
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
