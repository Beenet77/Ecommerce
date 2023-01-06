import { useEffect, useState } from "react";
import { API_URL, ECOM } from "../../api/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    let response = await ECOM.get(API_URL.categories);
    let jsondata = response.data;
    if (response.status <= 299) {
      setCategories(jsondata)
    }
    else {
      alert("somthing went wrong")
    }
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <>
      {categories.map((item, index) => (
        <div key={index}>
          <a href={`/products-by-category?id=${item.id}`}>
            <img width="200px" src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </a>
          <hr />
        </div>
      ))}
    </>
  )
}