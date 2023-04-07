// import Ggvp from "./components/products/products";
// import Modal from "./components/moda/modal";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Card_component from "./components/card_components/card";
// import Header from './components/Header';
import { Home } from './pages/home';


// export const SearchContext = React.createContext();

function App() {
  // const [searchValue, setSearchValue] = React.useState('');


  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      {/* <Card_component/> */}
            </Routes>
    </div>
  );
}

export default App;
