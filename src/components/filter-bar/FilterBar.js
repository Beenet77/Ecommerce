import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/CategoriesAction";
import "./style.css"

export default function FilterBar(props) {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.CategoriesReducers)

  useEffect(() => {
    !categories && dispatch(getCategories());
  }, [categories])

  return (
    <>
      <div className="filterBar">
        <input type="number" placeholder="min-price" onChange={(e) => props.handleMinInputChange(e)} defaultValue="max price" />
        <input type="number" placeholder="max-price" onChange={(e) => props.handleMaxInputChange(e)} defaultValue="min price" />
        <select name="options" onChange={props.handleSelectChange}>
          {
            categories?.map((item, index) => (
              <option key={index} value={item?.id}>{item?.name}</option>
            ))
          }
        </select>
      </div>
    </>
  )
}