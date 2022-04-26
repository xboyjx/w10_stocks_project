import MyStockContainer from './containers/MyStocksContainer';
import ExternalStocksContainer from './containers/ExternalStocksContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import './App.css';

function App() {

  // const addStock

  const [stockToAdd, setStockToAdd] = useState(null)

  const addStock = function(addedStock) {
    setStockToAdd(addedStock)

  }

  return (
    <div className="grid">
      <Header />
      <MyStockContainer stockToAdd={stockToAdd} />
      <ExternalStocksContainer addStock = {addStock} />
      <Footer />
    </div>
  );
}

export default App;
