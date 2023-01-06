import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { API_URL, ECOM } from "../../api/api";

export default function Signup() {
  const {handleSubmit, register} = useForm();
  const navigate = useNavigate();

  async function onSubmit(data){
    let response = await ECOM.post(API_URL.signup, data)
    if(response.status <= 299){
      alert("Signup successful. Please Login")
      navigate("/login")
    }    
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Signup</h2>
        <input type="text" {...register("name", {required: true})} />
        <input type="email" {...register("email", {required: true})} />
        <input type="password" {...register("password",{ required: true})}/>
        <input defaultValue="type image url" type="text"  {...register("avatar")}/>
        <button type="submit" >Submit</button>
      </form>
      <p>have an account</p><a href="/login">login</a>
    </>
  )
}