import { useEffect, useState } from "react";
import { API_URL, ECOM } from "../../api/api";
import Card from "../../components/card/Card";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  async function getProducts(){
   let response = await ECOM.get(API_URL.products+ "?offset=10&limit=15");
   let jsondata = response.data;
   if(response.status <= 299){
      setProducts(jsondata)
   }
   else{
     alert("somthing went wrong")
   }
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <>
   { products.map((item, index)=>(
     <div key={index}>
      <Card products={item}/>
     </div>
    ))}
    </>
  )
}