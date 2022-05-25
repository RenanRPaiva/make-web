import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoadingUser, selectIsUserLoggedIn } from "../../store/slices/userSlice";
import Loading from "../Loading";

// type Props = {
//     children: React.ReactElement;
// }

export default function PublicOnlyRoute( {children} : any) {
    const isUserLogedIn = useSelector(selectIsUserLoggedIn)
    const isLoadingUser = useSelector(selectIsLoadingUser)
    if (isLoadingUser) {
        return <Loading />
    }
    if (isUserLogedIn) {
        return <Navigate to='/novo-pedido' />
    }
    return children
}