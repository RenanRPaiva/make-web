import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoadingUser, selectIsUserLoggedIn } from "../../store/slices/userSlice"
import Loading from "../Loading"

type Props = {
    children: React.ReactElement
}

export default function PrivateRoute ({ children }: Props) {
    const isLoadingUser = useSelector(selectIsLoadingUser)
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    if(isLoadingUser) {
        return <Loading />
    }
    if(!isUserLoggedIn) {
        return <Navigate to='/login' />
    }
    return children
}