import { useContext } from "react"
import { AuthContext } from "./PrivateRoute/AuthContext"

const UseAuth=()=>{
    return useContext(AuthContext);
}
export default UseAuth;