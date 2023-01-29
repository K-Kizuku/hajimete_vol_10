import axios from "axios"
import { signIn } from "next-auth/react"
import { useState } from "react"
 
const Home = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const sendData = async() => {
        const signUpPost = async() => {
            
        }
    }
}


// export default () => <button onClick={() => signIn()}>Sign in</button>