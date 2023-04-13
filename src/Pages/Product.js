import React,{useState , useEffect} from 'react';
import Axios from 'axios';

function Product() {
    const [productName, setProductName] = useState("");
    const [manufacturer,setManufacturer] = useState("");
    const [barcode,setBarcode] = useState("");
    const [description,setDescription] = useState("");
    const [co2,setCO2] = useState("");
    const [mark1,setMark1] = useState("");
    const [origin,setOrigin] = useState("");
    const[productList,setProductList] = useState([]);
    useEffect(()=>
    {
        Axios.get("http://localhost:3001/api/get").then((response) =>{
        setProductList(response.data);

        });

    },[])
    const submitReview = () => {
      Axios.post("http://localhost:3001/api/insert",
      {product_name:productName,
        manufacturer : manufacturer,
        barcode: barcode,
        description:description,
        co2:co2,
        mark1:mark1,        
        origin:origin}).then(()=>{
            alert("successful insert");
        })
    };

  return (
    <div className='App'>
        <h1>Product Details</h1>
   <div className='table'></div>
    <label>Product_Name:</label>
    <input type='text' name='product_name' onChange={(e) =>{
     setProductName(e.target.value)
    }}/>
    <br></br>
     <label>manufacturer:</label>
    <input type='text' name='manufacturer' onChange={(e) =>{
     setManufacturer(e.target.value)
    }}/>
    <br></br>
     <label>barcode:</label>
    <input type='text' name='barcode' onChange={(e) =>{
     setBarcode(e.target.value)
    }}/>
    <br></br>
     <label>Description:</label>
    <input type='text' name='description' onChange={(e) =>{
     setDescription(e.target.value)
    }}/>
    <br></br>
     <label>CO2:</label>
    <input type='text' name='co2' onChange={(e) =>{
     setCO2(e.target.value)
    }}/>
    <br></br>
     <label>Mark1:</label>
    <input type='text' name='mark1' onChange={(e) =>{
     setMark1(e.target.value)
    }}/>
    <br></br>
     <label>Origin:</label>
    <input type='text' name='origin' onChange={(e) =>{
     setOrigin(e.target.value)
    }}/>
    <br></br>
    <button onClick={submitReview}>Submit</button>
    {productList.map((value) => {
    return (
      
    <table className="table table-sortable">
   <thead>
        <tr>
        
          <th data-col="product_Name">Product name</th>
          <th data-col="manufacturer">Manufacturer</th>
          <th data-col="barcode">barcode</th>
          <th data-col="description">Description</th>
          <th data-col="co2">CO2</th>
          <th data-col="mark1">Mark1</th>
          <th data-col="origin">Origin</th>
        </tr>
    </thead>
    <tbody>
          <tr>
            <td>product_Name = {value.product_Name}</td>
            <td>manufacturer = {value.manufacturer}</td>
            <td>barcode = {value.barcode}</td>
            <td>description = {value.description}</td>
            <td>co2 = {value.co2}</td>
            <td>mark1 = {value.mark1}</td>
            <td>origin = {value.origin}</td>
          </tr>
        ))}
      </tbody>
</table>
    )
  
    })}
    </div>
  )
}

export default Product