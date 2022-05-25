import { signOut } from "firebase/auth"
import { auth } from "./firebase"

export const logoutUser = async (): Promise<void> => {
   await signOut(auth)
}