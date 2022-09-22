import React from 'react'

export default function Recipe(props) {
  const { label, image, url } = props.recipe.recipe

  return (
    <>
      <div>
        <h3>
          <a href={url}>{label}</a>
        </h3>
        <img src={image} alt="food" />
      </div>
    </>
  )
}
