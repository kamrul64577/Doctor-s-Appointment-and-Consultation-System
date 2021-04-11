import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Mynavbar from './components/Mynavbar'
import Myrouter from './components/Myrouter'
import Footer from './components/Footer'
import MessengerCustomerChat from 'react-messenger-customer-chat'


function App() {
  return (
    <>
      <BrowserRouter>
          <Mynavbar/>
          <Myrouter/>
          <Footer/>
      </BrowserRouter>

      <MessengerCustomerChat
        pageId="101074675404035"
        appId="198998458564655"
      
      />



    </>
  );
}

export default App;
