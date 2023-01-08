// import { HEADERS } from "../../constants";
import "./style.css"

// export default function Header() {
//   return (
//     <div className="headerContainer">
//       <div>logo</div>
//       <div className="navItems">
//         <ul>
//           {
//             HEADERS.map((item, index) => (
//               <a key={index} href={item.path}><li>{item.name}</li></a>
//             ))
//           }
//         </ul>
//       </div>
//     </div>
//   )
// }


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HEADERS } from "../../constants";

function Header() {
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