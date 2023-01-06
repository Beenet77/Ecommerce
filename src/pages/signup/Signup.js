import { useForm } from "react-hook-form";

export default function Signup() {
  const {handleSubmit, register} = useForm();

  function onSubmit(e){
    console.log(e)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Signup</h2>
        <input type="email" {...register("email", {required: true})} />
        <input type="password" {...register("password",{ required: true})}/>
        {/* <input type="password" {...register("password",{ validate: true})}/> */}
        <input type="number" {...register("phone", {required: true})} />
        <button type="submit" >Submit</button>
      </form>
      <p>have an account</p><a href="/login">login</a>
    </>
  )
}