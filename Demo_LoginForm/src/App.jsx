import './App.css';

// import ProductListItem from './components/ProductListItem'; 
import ProductList from './components/ProductList';


function App() {

  return (
    <>
      <div className="App">
        <h2 className="Header">I'm your React Demo App</h2>
        {/* <ProductListItem /> */}
        <ProductList />
      </div>
    </>
  )
}

export default App
