import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { API_URL, ECOM } from "../../api/api";
import Button from "../../components/button/Button";
import { loginAction } from "../../redux/actions/LoginAction";

export default function Login() {
  const dispatch = useDispatch()
  const {handleSubmit, register} = useForm();


  async function onSubmit(data){
    // dispatch(loginAction(data))
    // console.log(data)
    try {
      let response = await ECOM.post(API_URL.login, data);
      if (response.status <= 299) {
        alert("Login Successful!")
        
        // dispatch({ type: LOGIN_SUCCESS, payload: data })
      }
    }
    catch {
      alert("somthing went wrong")
    }
   
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <input type="email" {...register("email", {required: true})} />
        <input type="password" {...register("password",{ required: true})}/>
        <Button name="submit"/>
      </form>
      <p>dont have an account</p><a href="/signup">signup</a>
    </>
  )
}