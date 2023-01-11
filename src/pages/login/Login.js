import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { API_URL, ECOM } from "../../api/api";
import Button from "../../components/button/Button";
import "./style.css"

export default function Login() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  async function onSubmit(data) {
    try {
      let response = await ECOM.post(API_URL.login, data);
      if (response.status <= 299) {
        alert("Login Successful!")
        let data = response.data;
        localStorage.setItem("ACCESS_TOKEN", data.access_token)
        localStorage.setItem("REFRESH_TOKEN", data.refresh_token)
        navigate("/")
      }
    }
    catch(err) {
      alert(err.message)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <input type="email" {...register("email", { required: true })} />
        <input type="password" {...register("password", { required: true })} />
        <Button name="submit" />
      </form>
      <p>dont have an account</p><a href="/signup">signup</a>
    </>
  )
}