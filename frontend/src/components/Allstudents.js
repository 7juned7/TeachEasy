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
            <Box
                bg={"#402E7A"}
                p={"1rem"}
                width={"sm"}
                height={"md"}
                border={"solid"}
                color={"white"}
                borderRadius={"lg"}
                textAlign={"center"}
                overflowY={"scroll"}

            ><Box display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}

                position={"sticky"}
                top={"0"}
                zIndex={"999"}
                p={2}


            >

                    <Text>All Students</Text>
                    <Menu>
                        <MenuButton as={Button} bg={"white"} color={"#402E7A"}>
                            {!sort ? ("") : (sort)}
                        </MenuButton>
                        <MenuList bg={"white"} color={"#402E7A"}>
                            <MenuItem bg={"white"} onClick={sortby} >A-Z</MenuItem>
                            <MenuItem bg={"white"} onClick={sortby}>by rollno</MenuItem>
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
                        ) : ("")
                    }


                </Box>

            </Box>


        </div >
    )
}

export default Allstudents;
