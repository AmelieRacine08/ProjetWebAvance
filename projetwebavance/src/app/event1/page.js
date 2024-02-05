import React from 'react'
import TemplatePage from '../templatePage/TemplatePage'

const tab=[{
  title:'asdasdasd',
  description:'asasdasd',
  image:'asdasd'
}]

const description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab incidunt voluptates, quod voluptate, sed temporibus dolorem doloremque tenetur optio quasi non amet corporis. Molestias soluta temporibus atque veniam enim."

const Event1 = () => {
  return (    
    <>    
    <TemplatePage 
    title="Page d'evenement 1"
    description={description}
    src="/"
    />
    </>
  )
}

export default Event1