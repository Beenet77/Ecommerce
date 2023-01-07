import { useEffect, useState } from "react";
import { API_URL, ECOM } from "../../api/api";
import { Col, Container, Row } from "react-bootstrap";

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
      <Container fluid>
        <Row>
          {categories.map((item, index) => (
            <Col key={index}>
              <a href={`/products-by-category?id=${item.id}`}>
                <img width="200px" src={item.image} alt={item.name} />
                <h6>{item.name}</h6>
              </a>
              <hr />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}