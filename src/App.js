import React, { Components } from 'react';
import InputBill from './Components/InputBill';
import NavigationBar from './Components/NavigationBar';
function App() {
  return (
    <>
      <header className='billHead' id='billHead'>
        <NavigationBar />
      </header>

      <section>
        <InputBill />
      </section>


    </>

  );

}

export default App;
