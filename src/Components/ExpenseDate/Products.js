import React, { useState } from "react";
import ListOFProd from "./ListOFProd";
import Total from "./Total";
const dummyproducts=[
  {
    id:123,
    sellprice:2000,
    productName:'rice'
  },
  {
    id:123,
    sellprice:2000,
    productName:'rice'
  }
]

const Products = (props) => {

  
     const [newProducts,setNewProduct]=useState(dummyproducts)
  const [enteredId, setId] = useState("");
  const [enteredprice, setprice] = useState("");
  const [enterename, setname] = useState("");
  
  const idChangeHandler = (e) => {
    setId(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setname(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setprice(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    const Newdata={
      id:enteredId,
    sellprice:enteredprice,
    productName:enterename,
    
  }
  
    setprice("");
    setname("");
    setId("");
    
    addNewProduct(Newdata)
    console.log(newProducts)

    
  };
  
  const  addNewProduct=(product)=>{
    setNewProduct((prev)=>{
      return([product,...prev])
    })
    }


  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Product Id</label>
        <input value={enteredId} onChange={idChangeHandler} type="number" />
        <label>Selling price</label>
        <input
          value={enteredprice}
          onChange={priceChangeHandler}
          type="number"
        />
        <label>Product Name</label>
        <input value={enterename} onChange={nameChangeHandler} type="text" />
        <button  >Add Product</button>
        {newProducts.map(products=><ListOFProd 
        key={Math.random()}
         id ={products.id}
        price={products.sellprice}
        name={products.productName}></ListOFProd>)}
        <Total new={newProducts}/>
      </form>
      <div>
      </div>
    </div>
  );
};

export default Products;
