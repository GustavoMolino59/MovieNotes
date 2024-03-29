import {Container, Form, Background} from './styles.js'
import {Input} from '../../components/Input'
import {FiUser, FiLock} from 'react-icons/fi'
import {Button} from '../../components/Button'
import { ButtonText} from '../../components/ButtonText'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth.jsx'

export function SignIn(){
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const {signIn} = useAuth()
    
    
    function handleSignIn(){
        signIn({email, password})
    }

    return(

        <Container>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Faça seu login</h2>
                <Input icon={FiUser} placeholder="Nome" onChange={e =>setEmail(e.target.value)}/>
                <Input icon={FiLock} placeholder="Senha" onChange={e =>setPassword(e.target.value)}/>
                <Button title = "Entrar" onClick={handleSignIn}/>

                <ButtonText title = "Criar conta" target="/cadastrar"/>
            </Form>
            <Background/>
        </Container>
    )
}