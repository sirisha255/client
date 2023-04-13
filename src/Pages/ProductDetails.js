import axios from 'axios';
import React, { Fragment, useState } from 'react'

function ProductDetails() {
    const [productName, setProductName] = useState("");
    const [manufacturer,setManufacturer] = useState("");
    const [barcode,setBarcode] = useState("");
    const [description,setDescription] = useState("");
    const [co2,setCO2] = useState("");
    const [mark1,setMark1] = useState("");
    const [origin,setOrigin] = useState("");    
    const[product,setProducts] = useState("");
    
    const url = "http://localhost:31500/swagger/index.html";
    
    const handleSubmit =(e) =>{
       // alert(productName + " " + manufacturer +" " + barcode + " " + description + " " + co2 + " " + mark1 + " " + origin)
       const data = {
        Product_Name : productName,
        Manufacturer  : manufacturer,
        Barcode:  barcode, 
        Type : "Add" 
       }
       axios.post('${url}/')
    }
    
    return (
    <Fragment>
    <div style={{margin:"0 auto", margin:"50px"}}>
        <input type ="text" value={productName} placeholder='Product Name' onChange={(e)=>setProductName(e.target.value)}/>
        <br></br>
        <input type ="text" value={manufacturer} placeholder='manufacturer' onChange={(e)=>setManufacturer(e.target.value)}/>
        <br></br>
        <input type ="text" value={barcode} placeholder='barcode' onChange={(e)=>setBarcode(e.target.value)}/>
        <br></br>
        <input type ="text" value={description} placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
        <br></br>
        <input type ="text" value={co2} placeholder='co2' onChange={(e)=>setCO2(e.target.value)}/>
        <br></br>
        <input type ="text" value={mark1} placeholder='mark1' onChange={(e)=>setMark1(e.target.value)}/>
        <br></br>
        <input type ="text" value={origin} placeholder='origin' onChange={(e)=>setOrigin(e.target.value)}/>
        <br></br>
        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </div>
    </Fragment>
  )
}

export default ProductDetails