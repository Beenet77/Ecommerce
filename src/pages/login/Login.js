import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { API_URL, ECOM } from "../../api/api";
import Button from "../../components/button/Button";
import "./style.css";

export default function Login() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  async function onSubmit(data) {
    try {
      let response = await ECOM.post(API_URL.login, data);
      if (response.status <= 299) {
        alert("Login Successful!");
        let data = response.data;
        localStorage.setItem("ACCESS_TOKEN", data.access_token);
        localStorage.setItem("REFRESH_TOKEN", data.refresh_token);
        navigate("/");
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center  ">
        <div className=" p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <h1 className="pb-2">LOGIN</h1>
              <div className="pb-2">
                <label for="email" className="">
                  Email
                </label>
                <br></br>
                <input
                  type="email"
                  className=""
                  {...register("email", { required: true })}
                />
              </div>
              <div className="pb-2">
                <label for="password" className="">
                  Password
                </label>
                <br></br>
                <input
                  type="password"
                  className=""
                  {...register("password", { required: true })}
                />
              </div>
              <div className="">
                <Button name="submit" />
              </div>
            </div>
          </form>

          <div className=" ">
            <p>
              <h6>Don't have an account</h6>
            </p>
            <a href="/signup">signup</a>
          </div>
        </div>
      </div>
    </>
  );
}
