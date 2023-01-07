import "./style.css"
export default function Card({ products, ...props }) {

  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

  return (
    <div className="cardContainer">
      <a href={`/product-detail?id=${products.id}`}>
        <div className="imageWrapper">
          <img width="300px" src={products.images[0]} alt={products?.title} />
        </div>
        <h5 className="price">Rs.{products?.price}</h5>
        <h5 className="title">{products?.title}</h5>
        <p className="discription">{truncate(products?.description, 42)}</p>
      </a>
      <hr />
    </div>
  )
}