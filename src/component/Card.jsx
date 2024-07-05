import React from 'react'
import '../Style/card.css'

const Card = (props) => {
    const value = props.value
  return (
    <>
        <div className="single-container">
            <div className="img-container">
            <img src={value.imageUrl} alt="" height={200} width={200}/>
            </div>
            <h2>{value.title}</h2>
            <p><span><i class="bi bi-person-fill"></i></span>{value.fullName}</p>
        </div>
    </>
  )
}

export default Card