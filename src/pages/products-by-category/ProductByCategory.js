import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { API_URL, ECOM } from "../../api/api";
import Card from "../../components/card/Card";
import { AppUtils } from "../../utils/AppUtils"

export default function ProductByCategory() {
  const id = AppUtils.getUrlParam("id")
  const [products, setProducts] = useState([]);


  async function getProductsByCategoryId(categoryId) {
    let response = await ECOM.get(API_URL.categories + "/" + categoryId + "/" + "products");
    if (response.status <= 299) {
      setProducts(response.data)
    }
    else {
      alert("somthing went wrong")
    }
  }

  useEffect(() => {
    getProductsByCategoryId(id);
  }, [id])

  return (
    <>
      <Container fluid>
        <Row>
          {products.map((item, index) => (
            <Col key={index}>
              <Card products={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}