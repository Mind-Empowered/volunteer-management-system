import { useState } from 'react'
import Nav from './nav.jsx';
import Body from './body.jsx';

function Members() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout'>
      <Nav/>
      <Body/>
    </div>
  )
}

export default Members
