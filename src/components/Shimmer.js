import React from 'react'

function Shimmer() {
  return (
    <div className="restaurant-list">
    {
    Array(10).fill('').map((e,index)=> {
      return <div className="shimmer card" key={index}></div>
    })
    }
    </div>
  )
}

export default Shimmer