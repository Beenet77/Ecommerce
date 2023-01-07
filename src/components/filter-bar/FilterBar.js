import "./style.css"

export default function FilterBar(props) {
  return (
    <>
      <div className="filterBar">
        <input type="number" placeholder="min-price" onChange={(e) => props.handleMinInputChange(e)} defaultValue="max price" />
        <input type="number" placeholder="max-price" onChange={(e) => props.handleMaxInputChange(e)} defaultValue="min price" />
        <select id="cars" onChange={props.handleSelectChange}>
          <option value="volvo">Volvo XC90</option>
          <option value="saab">Saab 95</option>
          <option value="mercedes">Mercedes SLK</option>
          <option value="audi">Audi TT</option>
        </select>
      </div>
    </>
  )
}