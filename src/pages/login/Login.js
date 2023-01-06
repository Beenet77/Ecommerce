import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import { loginAction } from "../../redux/actions/LoginAction";

export default function Login() {
  const dispatch = useDispatch()
  const {handleSubmit, register} = useForm();


  function onSubmit(data){
    dispatch(loginAction(data))
    // console.log(data)
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