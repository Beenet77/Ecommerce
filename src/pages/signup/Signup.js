import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { API_URL, ECOM } from "../../api/api";
import Button from "../../components/button/Button";

export default function Signup() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    let response = await ECOM.post(API_URL.signup, data);
    if (response.status <= 299) {
      alert("Signup successful. Please Login");
      navigate("/login");
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="pb-2">Signup</h2>
            <div className="pb-2">
              <label for="name" className="">
                Name
              </label>
              <input type="text" {...register("name", { required: true })} />
            </div>
            <div className="pb-2">
              <label for="email" className="">
                Email
              </label>
              <input type="email" {...register("email", { required: true })} />
            </div>
            <div className="pb-2">
              <label for="password" className="">
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="pb-2">
              <label for="imageurl" className="">
                ImangeURL
              </label>
              <input
                defaultValue="type image url"
                type="text"
                {...register("avatar")}
              />
            </div>
            <div className="pb-2">
              <Button name="submit" />{" "}
            </div>
          </form>
          <p>have an account</p>
          <a href="/login">login</a>
        </div>
      </div>
    </>
  );
}
