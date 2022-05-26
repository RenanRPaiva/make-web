import { signInWithEmailAndPassword } from "firebase/auth"
import { User } from "../entities/User"
import { auth } from "./firebase"
import { getUser } from "./getUser"

export type CredentialsInput = {
    email: string
    password: string
}

export const loginUser = async ({ email, password }: CredentialsInput): Promise<User> => {
    const {user} = await signInWithEmailAndPassword(auth, email, password)
    return getUser(user.uid)
}