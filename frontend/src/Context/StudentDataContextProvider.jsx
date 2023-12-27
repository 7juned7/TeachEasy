import React, { useEffect, useState } from 'react';
import axios from "axios";
import StudentDataContext from './StudentDataContext'

const StudentDataContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [particulardata, setParticulardata] = useState([]);
    const userId = localStorage.getItem("userId");
    const [sort, setSort] = useState("A-Z");



    const fetchStudents = async () => {

        try {



            const config = {

                headers: {
                    'Content-type': "application/json",

                },

            };
            const { data } = await axios.post("/api/studentdata/data", { userId, sort }, config)


            setData(data)

        } catch (error) {
            console.log("error hai")
        }
    }

    useEffect(() => {

        fetchStudents()
        
    }, [count, sort])


    return (
        <StudentDataContext.Provider value={{ data, setData, particulardata, setParticulardata, count, setCount, sort, setSort }} >
            {children}
        </StudentDataContext.Provider>
    )
}
export default StudentDataContextProvider;