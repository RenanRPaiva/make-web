import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { User } from '../entities/User'
import { auth, db } from './firebase'

export type NewUserInput = {
    name: string
    email: string
    phone: string
    password: string 
}

export const createUser = async ({email, password, name, phone}: NewUserInput): Promise<User> => {
   const { user } = await createUserWithEmailAndPassword(auth, email, password)
   await setDoc(doc(db, 'users', user.uid), {
       name,
       email,
       phone
   })
   return {
       id: user.uid,
       name,
       email,
       phone
   }
   
}