import './App.css'
import {Link, Routes, Route, useParams} from 'react-router-dom'
import Counter from './components/Counter';
import NameList from './components/NameList';

const products = [
  {id:1, productName:'Mobile', price:25},
  {id:5, productName:'Laptop', price:50}
]

// function Home(){
//   return (
//     <div></div>
//   );
// }

function ProductDetails(){
  const {id} = useParams();

  const selectedProduct = products.find((p) => p.id === Number(id));

  if(!selectedProduct){
    return '<p>Product Not Found!</p>'
  }

  return `Selected Product Name is ${selectedProduct.productName}`;
}

function App() {

  return (
    <div>
      <nav>
        <Link to="">NameList</Link>
        <Link to="products/1">Mobile</Link>
        <Link to="products/5">Laptop</Link>
      </nav>

      <Routes>
        <Route path="" element={<NameList/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<p>Page Not found</p>}/>
      </Routes>
    </div>
  )
}

export default App
