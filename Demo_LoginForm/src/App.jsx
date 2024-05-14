import './App.css';

// import ProductListItem from './components/ProductListItem'; 
import ProductList from './components/ProductList';
import LoginForm from './components/LoginForm';


function App() {

  return (
    <>
      <div className="App">
        <h2 className="Header">I'm your React Demo App</h2>
        <LoginForm />
        {/* <ProductListItem /> */}
        <ProductList />
      </div>
    </>
  )
}

export default App
