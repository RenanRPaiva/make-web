import { useEffect } from "react";
import Routes from "./routes";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./services/firebase";

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log('currentUser', currentUser)
    })
  }, [])
  return (
   <Routes />
  );
}


export default App;
