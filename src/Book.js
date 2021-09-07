import React from 'react'

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('hello world')
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='book' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
    </article>
  )
}

export default Book


//type rafce to get boiler