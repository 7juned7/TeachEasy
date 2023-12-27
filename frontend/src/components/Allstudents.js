import { Box, Button, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'

import StudentsBadge from './StudentsBadge'
import StudentDataContext from '../Context/StudentDataContext';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,


} from '@chakra-ui/react'


const Allstudents = () => {
    const { sort, setSort } = useContext(StudentDataContext);
    
    const { data } = useContext(StudentDataContext);

    const sortby = (e) => {

        if (e.target.innerHTML === "A-Z") {
            setSort("A-Z");
        }
        else {
            setSort("by rollno");
        }


    }

    return (
        <div>
            <Box width={"sm"}
                height={"lg"}
                border={"solid"}
                p={2}
                borderRadius={"lg"}
                textAlign={"center"}
                overflowY={"scroll"}
            ><Box display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}>

                    <Text width={"100%"}>All Students</Text>
                    <Menu>
                        <MenuButton as={Button}>
                            {!sort ? ("") : (sort)}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={sortby} >A-Z</MenuItem>
                            <MenuItem onClick={sortby}>by rollno</MenuItem>

                        </MenuList>
                    </Menu>
                </Box>
                <Box width={"100%"}>
                    {
                        data ? (
                            data.map((data) => {
                                return (
                                    <div key={data._id} >
                                        <StudentsBadge
                                            name={data.studentName}
                                            rollno={data.studentRollno}

                                            English={data.studentMarks.English}
                                            Science={data.studentMarks.Science}
                                            Maths={data.studentMarks.Maths}
                                        />
                                    </div>
                                )
                            })
                        ) : ("ab")
                    }


                </Box>

            </Box>


        </div>
    )
}

export default Allstudents;