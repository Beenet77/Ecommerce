import "./style.css"


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HEADERS } from "../../constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoAction } from "../../redux/actions/GetUserInfoAction";

function Header() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.GetUserInfoReducers)

  useEffect(()=>{
    localStorage.getItem("ACCESS_TOKEN") && dispatch(getUserInfoAction())
  },[localStorage.getItem("ACCESS_TOKEN")])

  return (
    <Navbar className="headerContainer"  expand="lg">
      <Container fluid>
        <Navbar.Brand className="logo" href="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <div className="d-flex">
            {
              HEADERS.map((item, index) => (
                <Nav.Link className="m-2" key={index} href={item.path}>{item.name}</Nav.Link>
              ))
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;