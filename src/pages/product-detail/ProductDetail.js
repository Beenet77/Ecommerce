import { useEffect, useState } from "react";
import { API_URL, ECOM } from "../../api/api";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import { AppUtils } from "../../utils/AppUtils"
import { Col, Container, Row } from "react-bootstrap";
import "./style.css"

export default function ProductDetail() {
  const id = AppUtils.getUrlParam("id");
  const [singleProductData, setSingleProductData] = useState({});
  const [images, setImages] = useState([]);
  const [sameCategoryProducts, setSameCategoryProducts] = useState([]);
  const [imageShown, setImageShown] = useState(0);

  async function getSingleProductInfo(productId) {
    let response = await ECOM.get(API_URL.products + "/" + productId);
    if (response.status <= 299) {
      setSingleProductData(response.data)
      setImages(response.data.images)
      getSameCategoryProducts(response.data.category.id)
    }
  }

  async function getSameCategoryProducts(categoryId) {
    let response = await ECOM.get(API_URL.categories + "/" + categoryId + "/" + "products");
    if (response.status <= 299) {
      setSameCategoryProducts(response.data)
    }
    else {
      alert("somthing went wrong")
    }
  }

  function handleImageClick(index) {
    setImageShown(index)
    // console.log(index)
  }

  useEffect(() => {
    getSingleProductInfo(id);
  }, [id])

  return (
    <div className="productContainer">
      <Container fluid>
        <Row>
          <Col>
            <div>
              <img width="100%" src={images[imageShown]} alt="product" />
            </div>
            <div className="productImageList">
              {images.map((item, index) => (
                <div key={index}>
                  <img width="80px" src={item} alt="product" onClick={() => handleImageClick(index)} />
                </div>
              ))}
            </div>
          </Col>
          <Col>
            <h2>{singleProductData.title}</h2>
            <h1>Rs {singleProductData.price}</h1>
            <p>{singleProductData.description}</p>
            <ul>
              <li>Creation At :{singleProductData.creationAt}</li>
              <li>Updated At :{singleProductData.updatedAt}</li>
              <li>Category : {singleProductData.category?.name}</li>
            </ul>
            <Button name="Add To Cart" />
          </Col>
        </Row>
      </Container>
      <hr />
      <h3>Products you may like:</h3>
      <Container fluid>
        <Row>
          {sameCategoryProducts.map((item, index) => (
            <Col key={index}>
              <Card products={item} />
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  )
}