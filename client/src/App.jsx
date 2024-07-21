import React from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='text-3xl text-red-500 font-poppins'>
      APP
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  )
}

export default App