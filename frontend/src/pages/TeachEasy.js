import { Box } from '@chakra-ui/react';
import React from 'react'
import Allstudents from '../components/Allstudents';
import Navbar from '../components/Navbar';

import SideDrawer from '../components/SideDrawer';
import StudentsDetails from '../components/StudentsDetails';




const TeachEasy = () => {


    return (<Box
        paddingTop={2}

        bg={"#402E7A"}
        height={"100vh"}
    >

        <div><Navbar /></div>
        <Box padding={" 0 2rem"}>
            <Box >
                <SideDrawer />
            </Box>
            <Box display={"flex"}
                justifyContent={"space-between"}>
                <Allstudents />

                <StudentsDetails />
            </Box>
        </Box>

    </Box>

    )
}

export default TeachEasy;
