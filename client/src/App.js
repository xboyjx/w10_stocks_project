import MyStockContainer from './containers/MyStocksContainer';
import ExternalStocksContainer from './containers/ExternalStocksContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="grid">
      <Header />
      <MyStockContainer />
      <ExternalStocksContainer />
      <Footer />
    </div>
  );
}

export default App;
