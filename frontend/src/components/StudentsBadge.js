import { Avatar, Box, Button, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import StudentDataContext from '../Context/StudentDataContext'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,

    useDisclosure,
    Input,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'

const StudentsBadge = (user) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = useState("");
    const [englishNo, setEnglishNo] = useState("");
    const [mathNo, setMathNo] = useState("");
    const [scienceNo, setScienceNo] = useState("");


    const { count, setCount } = useContext(StudentDataContext);
    const { particulardata, setParticulardata } = useContext(StudentDataContext)


    const handleClick = () => {

        setParticulardata(user);
        console.log(particulardata);

    }
    const userId = localStorage.getItem("userId");
    const studentRollno = user.rollno;
    const handleDelete = async () => {
        try {
            const config = {

                headers: {
                    'Content-type': "application/json",

                },

            };
            await axios.post("/api/studentdata/delete", { userId, studentRollno }, config)
            setCount(count - 1)

        } catch (error) {
            console.log("error in deleting")
        }
    }
    const handleEdit = () => {

        setEnglishNo(user.English);
        setMathNo(user.Maths);
        setScienceNo(user.Science);
        setName(user.name)


    }

    const handlefunction = async () => {

        try {
            const config = {

                headers: {
                    'Content-type': "application/json",

                },

            };
            const { data } = await axios.post("/api/studentdata/update", { userId, studentName: name, studentRollno: user.rollno, studentMarks: { English: englishNo, Maths: mathNo, Science: scienceNo } }, config)
            console.log(data);
            setCount(count + 1);


        } catch (error) {
            console.log("error in saving student");
        }

    }




    return (
        <Button onClick={handleClick}

            display={"flex"}

            alignItems={"center"}
            background={"#f1f1f1"}
            width={"100%"}
            justifyContent={"space-between"}
            pl={"1rem"}
            pt={2}
            pb={2}
            borderRadius={"lg"}
            margin={1}
        >
            <Box display={"flex"}
                justifyContent={"center"}
                alignItems={"center"} >

                <Avatar
                    mr={2}
                    size="sm"
                    cursor={"pointer"}
                    name={user.name}

                />
                <Box display={"flex"}
                    gap={2} >
                    <Text>{user.name}</Text>
                    <Text>{user.rollno}</Text>
                </Box>
            </Box>
            <Box display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
                gap={2}>

                <Button colorScheme='teal' onClick={handleDelete}>
                    Delete
                </Button>
                <Box onClick={handleEdit}>
                    <Button colorScheme='teal' onClick={onOpen}>
                        edit
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}

                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Edit Student</DrawerHeader>

                            <DrawerBody>
                                <FormControl >
                                    <FormLabel>Student Name</FormLabel>
                                    <Input type='name'
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                    <FormLabel>Student Rollno</FormLabel>
                                    <Input type='number'
                                        value={user.rollno}

                                    />

                                </FormControl>
                                <FormControl >
                                    <FormLabel>Student Marks</FormLabel>
                                    <FormControl >
                                        <FormLabel>English</FormLabel>
                                        <Input type='number'
                                            value={englishNo}
                                            onChange={(e) => { setEnglishNo(e.target.value) }}
                                        />
                                        <FormLabel>Math</FormLabel>
                                        <Input type='name'
                                            value={mathNo}
                                            onChange={(e) => { setMathNo(e.target.value) }}
                                        />
                                        <FormLabel>Science</FormLabel>
                                        <Input type='name'
                                            value={scienceNo}
                                            onChange={(e) => { setScienceNo(e.target.value) }}
                                        />

                                    </FormControl>


                                </FormControl>
                            </DrawerBody>

                            <DrawerFooter>
                                <Button variant='outline' mr={3} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button onClick={handlefunction} colorScheme='blue'>Save</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Box>



        </Button>
    )
}

export default StudentsBadge