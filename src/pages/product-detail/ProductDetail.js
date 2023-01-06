import { useEffect, useState } from "react";
import { API_URL, ECOM } from "../../api/api";
import Card from "../../components/card/Card";
import { AppUtils } from "../../utils/AppUtils"
import "./style.css"

export default function ProductDetail() {
  const id = AppUtils.getUrlParam("id");
  const [singleProductData, setSingleProductData] = useState({});
  const [images, setImages] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [sameCategoryProducts, setSameCategoryProducts] = useState([]);

  async function getSingleProductInfo(productId) {
    let response = await ECOM.get(API_URL.products + "/" + productId);
    if (response.status <= 299) {
      setSingleProductData(response.data)
      setImages(response.data.images)
      getSameCategoryProducts(response.data.category.id)
    }
  }

  async function getSameCategoryProducts(categoryId) {
    let response = await ECOM.get(API_URL.categories + "/" + categoryId + "/" +"products");
    if (response.status <= 299) {
      setSameCategoryProducts(response.data)
    }
    else{
      alert("somthing went wrong")
    }
  }

  useEffect(() => {
    getSingleProductInfo(id);
  }, [id])

  return (
    <>
      {images.map((item, index) => (
        <div>
          <img width="300px" src={item} alt="product" />
        </div>
      ))}
      <h2>{singleProductData.title}</h2>
      <h1>Rs {singleProductData.price}</h1>
      <p>{singleProductData.description}</p>
      <ul>
        <li>Creation At :{singleProductData.creationAt}</li>
        <li>Updated At :{singleProductData.updatedAt}</li>
        <li>Category : {singleProductData.category?.name}</li>
      </ul>
      <hr />
      <h3>Products you may like:</h3>
      {sameCategoryProducts.map((item, index) => (
        <div key={index}>
          <Card products={item} />
        </div>
      ))}
    </>
  )
}