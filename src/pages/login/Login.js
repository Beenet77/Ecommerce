import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/LoginAction";

export default function Login() {
  const dispatch = useDispatch()
  const {handleSubmit, register} = useForm();
  const loginInfo = useSelector(state => state.LoginReducer)
  console.log(loginInfo)

  function onSubmit(data){
    dispatch(loginAction(data))
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <input type="email" {...register("email", {required: true})} />
        <input type="password" {...register("password",{ required: true})}/>
        <button type="submit" >Submit</button>
      </form>
      <p>dont have an account</p><a href="/signup">signup</a>
    </>
  )
}