import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Content from './component/Content';
import Homepage from './component/Homepage';

const Myroute = () => {
  return (

<Router>
  <Routes>
      <Route path='/characters' element={<Content/>}/>
      <Route path='/' element={<Homepage/>}>
      {/* <Route index element={<Content/>}/> */}
    </Route>
  </Routes>
</Router>









  );
}

export default Myroute;
