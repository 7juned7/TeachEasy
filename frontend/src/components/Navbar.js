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
            alignItems={"center"}
            padding={"1rem 2rem"}


        >


            <Box>
                <Text fontSize={"1rem"} fontWeight={"600"} color={"white"}>TeachEasy</Text>
            </Box>
            <Button bg={"red"} color={"white"} onClick={logout}
                _hover={{ background: "red", opacity: "80%" }}>
                Logout
            </Button>
        </Box>
    )
}

export default Navbar;
