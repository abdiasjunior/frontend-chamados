import { Navigate } from "react-router-dom";

function Private({children}){
    const token = localStorage.getItem('token')

    if(token){
        return children
    } else {
        return <Navigate to="/"/>
    }
}

export default Private