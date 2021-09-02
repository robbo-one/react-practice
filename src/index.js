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
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/61HtUDSnCoL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
)

const Title = () => {
  return <h1>Dee's Big Nuts</h1>
}

const Author = () => {
  return <h4>Mark Thunder</h4>
}

ReactDom.render(<BookList />, document.getElementById('root'))
