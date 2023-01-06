import "./style.css"
export default function Button(props) {
  return (
    <>
     <button type="submit">{props.name}</button>
    </>
  )
}