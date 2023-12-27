import React from 'react'
import { useState } from 'react'
import { Button, Container, FormControl, FormHelperText, FormLabel, Input, VStack } from '@chakra-ui/react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    let Navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isemailempty = email === '';

    const ispasswordempty = password === '';

    const handleSignup = async () => {

        try {
            const config = {

                headers: {
                    'Content-type': "application/json",

                },

            };
            const { data } = await axios.post("/api/user/login", { email, password }, config)
            let userId = data._id;
            console.log(data)
            localStorage.setItem("userId", userId);
            Navigate("/teacheasy");
        } catch (error) {
            console.log("error")
        }

    }
    return (
        <Container>
            <VStack>

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
                <Button onClick={handleSignup}>Sign Up</Button>
            </VStack>
        </Container>
    )
}

export default Signup;