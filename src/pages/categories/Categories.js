import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import EmptyPage from "../../components/empty-page/EmptyPage";
import { getCategories } from "../../redux/actions/CategoriesAction";

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.CategoriesReducers)

  useEffect(() => {
    !categories && dispatch(getCategories());
  }, [categories])

  return (
    <>
      <Container fluid>
        <Row>
          {!categories?.length <= 0 ?
            (
              categories?.map((item, index) => (
                <Col key={index}>
                  <a href={`/products-by-category?id=${item.id}`}>
                    <img width="200px" src={item.image} alt={item.name} />
                    <h6>{item.name}</h6>
                  </a>
                  <hr />
                </Col>
              ))
            )
            :
            (
              <EmptyPage />
            )
          }
        </Row>
      </Container>
    </>
  )
}