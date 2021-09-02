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

//setup vars
const author = 'Mark Thunder'
const title = "Dee's Big Nuts"
const img =
  'https://images-na.ssl-images-amazon.com/images/I/61HtUDSnCoL._AC_UL200_SR200,200_.jpg'

function BookList() {
  return (
    <section className='booklist'>
      <Book job='developer' />
      <Book title='random title' number={22}/>
    </section>
  )
}
const Book = (props) => {
  return (
    <article className='book'>
      <img src={img} alt='book' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
    <p>{props.number}</p>
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
