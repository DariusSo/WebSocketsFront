import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Helmet } from 'react-helmet'
import Heyhey from './heyhey'
import Jokes from './Jokes'

function App() {
  
  return (
    <>
    <Helmet>
      <script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script> 
      <script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
    </Helmet>
      <Jokes/>
    </>
  )
}

export default App
