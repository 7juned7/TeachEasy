import { Box } from '@chakra-ui/react';
import React from 'react'
import Allstudents from '../components/Allstudents';
import Navbar from '../components/Navbar';
import SideDrawer from '../components/SideDrawer';
import StudentsDetails from '../components/StudentsDetails';



const TeachEasy = () => {


    return (<Box
        paddingTop={2}
        paddingRight={10}
        paddingLeft={10}

    >

        <div><Navbar /></div>
        <div>
            <Box >
                <SideDrawer />
            </Box>
            <Box display={"flex"}
                justifyContent={"space-between"}>
                <Allstudents />

                <StudentsDetails />
            </Box>
        </div>
    </Box>

    )
}

export default TeachEasy;