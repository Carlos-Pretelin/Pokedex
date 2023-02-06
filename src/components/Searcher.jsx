import React from 'react'
import { Input } from "antd";
//scss
import "../styles/Searcher.scss"

const Searcher = () => {
  return (
    <div className='Searcher'>
      <Input.Search placeholder='Search ...' />
    </div>
    
  )
}

export default Searcher
