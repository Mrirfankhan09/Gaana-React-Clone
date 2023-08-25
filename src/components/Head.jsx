import React from 'react'

export default function Head({category}) {
    // console.log(category)

  return (
    <>
        <div className="head">
        <div className="_col">
          <h2 className="_h2">{category}</h2>
        </div>
        <a href="">See All</a>
      </div>
    </>
  )
}
