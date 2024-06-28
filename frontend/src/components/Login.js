import React, {  useState } from 'react'
import { Button, Container, FormControl,  FormHelperText, FormLabel, Input, VStack } from '@chakra-ui/react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let Navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isemailempty = email === '';
    const isnameempty = name === '';
    const ispasswordempty = password === '';

    const handleLogin = async () => {
        console.log("hello")

        try {
            const config = {

                headers: {
                    'Content-type': "application/json",

                },

            };
            const { data } = await axios.post("/api/user", { name, email, password }, config)
            console.log(data);
            let userId = data._id;

            localStorage.setItem("userId", userId)
            
            Navigate("/teacheasy")

        } catch (error) {
            console.log("error")
        }

    }
    return (
        <Container>
            <VStack>
                <FormControl >
                    <FormLabel>Name</FormLabel>
                    <Input type='name'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    {
                        !isnameempty ? ("") : (<FormHelperText>
                            Please Enter Your Email
                        </FormHelperText>)
                    }

                </FormControl>
                <FormControl >
                    <FormLabel>Email</FormLabel>
                    <Input type='email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    {
                        !isemailempty ? ("") : (<FormHelperText>
                            Please Enter Your Email
                        </FormHelperText>)
                    }

                </FormControl>
                <FormControl >
                    <FormLabel>Password</FormLabel>
                    <Input type='password'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    {
                        !ispasswordempty ? ("") : (<FormHelperText>
                            Please enter your password*
                        </FormHelperText>)
                    }

                </FormControl>
                <Button onClick={handleLogin}>Login</Button>
            </VStack>
        </Container>
    )
}

export default Login;
