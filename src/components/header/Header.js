import { HEADERS } from "../../constants";
import "./style.css"

export default function Header() {
  return (
    <div className="headerContainer">
      <div>logo</div>
      <div className="navItems">
        <ul>
          {
            HEADERS.map((item, index) => (
              <a key={index} href={item.path}><li>{item.name}</li></a>
            ))
          }
        </ul>
      </div>
    </div>
  )
}