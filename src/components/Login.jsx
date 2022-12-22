import { useDispatch } from "react-redux"
import { login,logout } from "../features/user"

const Login = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Login</h1>
      <button onClick={()=>{dispatch(login({name: 'Maged',
      age: 35,
      email: 'maged@email.com',}))}}>Login</button>
      <button onClick={()=>dispatch(logout())}>logout</button>
    </div>
  )
}

export default Login
