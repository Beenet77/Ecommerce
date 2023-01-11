import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { API_URL, ECOM } from "../../api/api";
import Card from "../../components/card/Card";
import EmptyPage from "../../components/empty-page/EmptyPage";
import FilterBar from "../../components/filter-bar/FilterBar";
import DashboardCarousel from "./helpers/Carousel";
import "./style.css"

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState();
  const [minPrice, setMinPrice] = useState();
  const [categoryId, setCategoryId] = useState(null);
  const [filtered, setFiltered] = useState(false);

  async function getProducts() {
    let url = API_URL.products + "?offset=10&limit=16"
    if (maxPrice) {
      setFiltered(true)
      url += "&price_max=" + maxPrice
    }
    if (minPrice) {
      setFiltered(true)
      url += "&price_min=" + minPrice
    }
    if(categoryId){
      setFiltered(true)
      url += "&categoryId=" + categoryId
    }
    !maxPrice && !minPrice && !categoryId && setFiltered(false)
    let response = await ECOM.get(url);
    let jsondata = response.data;
    if (response.status <= 299) {
      setProducts(jsondata)
    }
    else {
      alert("somthing went wrong")
    }
  }

  function handleSelectChange(e) {
    setCategoryId(e.target.value)
  }

  function handleMaxInputChange(e) {
    setMaxPrice(e.target.value)
  }

  function handleMinInputChange(e) {
    setMinPrice(e.target.value)
  }

  useEffect(() => {
    getProducts();
  }, [categoryId, minPrice, maxPrice])

  return (
    <>
      <FilterBar handleMinInputChange={handleMinInputChange} handleMaxInputChange={handleMaxInputChange} handleSelectChange={handleSelectChange} />
      <Container fluid>
        {!filtered &&
          <DashboardCarousel />}
        <Row>
          {products.length <= 0 ?
            (
              <EmptyPage />
            )
            :
            (
              products.map((item, index) => (
                <Col key={index}>
                  <Card products={item} />
                </Col>
              ))
            )
          }
        </Row>
      </Container>
    </>
  )
}