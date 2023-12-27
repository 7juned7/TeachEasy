import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const Navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        Navigate("/")

    }
    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
        >

            <Box>
                <Text>TeachEasy</Text>
            </Box>
            <Button onClick={logout}>
                Logout
            </Button>
        </Box>
    )
}

export default Navbar