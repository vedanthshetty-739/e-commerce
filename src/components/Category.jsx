import React, { useState } from 'react'
import style from '../assests/css/style.css'

function Category({category, handledSelectedCategory}) {
  
  return (
        <button type="button" value={category} onClick={e => {handledSelectedCategory(e)}}>{category}</button>
  )
}

export default Category