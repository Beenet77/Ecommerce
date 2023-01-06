export default function Card({ products, ...props }) {
  return (
    <div>
      <img width="200px" src={products.images[0]} alt={products?.title} />
      <h3>Rs {products?.price}</h3>
      <a href={`/product-detail?id=${products.id}`}>
        <h3>{products?.title}</h3>
        <p>{products?.description}</p>
      </a>
      <hr />
    </div>
  )
}