import { useEffect, useState } from "react";
import { API_URL, ECOM } from "../../api/api";
import Card from "../../components/card/Card";
import "./style.css"

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let response = await ECOM.get(API_URL.products + "?offset=10&limit=15");
    let jsondata = response.data;
    if (response.status <= 299) {
      setProducts(jsondata)
    }
    else {
      alert("somthing went wrong")
    }
  }

  function handleSelectChange(e){
    console.log(e.target.value)
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <div className="filterBar">
        <input type="number" defaultValue="min price" />
        <input type="number" defaultValue="max price" />
        <select id="cars" onChange={handleSelectChange}>
          <option value="volvo">Volvo XC90</option>
          <option value="saab">Saab 95</option>
          <option value="mercedes">Mercedes SLK</option>
          <option value="audi">Audi TT</option>
        </select>
      </div>
      {products.map((item, index) => (
        <div key={index}>
          <Card products={item} />
        </div>
      ))}
    </>
  )
}