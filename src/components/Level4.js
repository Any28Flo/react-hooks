import React, {useContext} from "react"
import AdminContext from "../Context/AdminContext";
const Level4 = () =>{
    const [admin, setAdmin] = useContext(AdminContext);

    const add = () => {
        setAdmin(Object.assign( {} , admin, {suffix : admin.suffix + 1}))
    }

    return(
        <div>
            <h2>Level 4</h2>
            <h3>{admin.firstName} and his suffix is {admin.suffix}</h3>
            <button onClick = { add}>Click me</button>
        </div>
    )
}
export default  Level4;