import { Avatar, Box, Text } from '@chakra-ui/react'
import React, { useContext} from 'react'
import StudentDataContext from '../Context/StudentDataContext'

const StudentsDetails = () => {
    const { particulardata} = useContext(StudentDataContext);
    console.log(particulardata)


    return (<Box
        width={"100%"}
    >
        {!particulardata ? (
            <div>Hi</div>
        ) : (<div>
            <Box border={"2px solid red"}
                borderRadius={"lg"}
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                p={"2"}>
                <Box
                >
                    <Text>{particulardata.name}</Text>
                    <Text>{particulardata.rollno}</Text>
                </Box>
                <Box>
                    <Avatar
                        mr={2}
                        size="md"
                        cursor={"pointer"}
                        name={particulardata.name}
                    />
                </Box>
            </Box>
            <Box>

                <Box display={"flex"}
                    justifyContent={"space-around"}>
                    <Text>Maths</Text>
                    <Text>{particulardata.Maths}</Text>

                </Box>
                <Box display={"flex"}
                    justifyContent={"space-around"}>
                    <Text>English</Text>
                    <Text>{particulardata.English}</Text>
                    {/*  */}
                </Box>
                <Box display={"flex"}
                    justifyContent={"space-around"}>
                    <Text>Science</Text>
                    <Text>{particulardata.Science}</Text>

                </Box>


            </Box>
        </div>)}


    </Box>

    )
}

export default StudentsDetails;