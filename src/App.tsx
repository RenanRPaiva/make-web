import { useEffect } from "react";
import Routes from "./routes";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./services/firebase";
import { getUser } from "./services/getUser";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "./store/slices/userSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const user = await getUser(currentUser.uid)
        dispatch(updateUser(user))
      } else {
        dispatch(deleteUser())
      }
    })
  }, [dispatch])
  return (
   <Routes />
  );
}


export default App;
