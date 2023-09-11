import Box from "./Box";
import Contact from "./Contact";
const Home = ()=>{

    let user = [
        {
            name : "Amar",
            age : 25,
            city : "indore",
            contact : 7845788,
            color : "#704601"
        },
        {
            name : "Rohit",
            age : 20,
            city : "mumbai",
            contact : 447778,
            color : "#CDCD10"
        },
        {
            name : "Nilesh",
            age : 27,
            city : "pune",
            contact : 804050,
            color : "#90CCCD"
        },
        {
            name : "nidhi",
            age : 24,
            city : "indore",
            contact : 7774441,
            color : "#FCD704"
        }
    ]


    return(
        <>
            <Contact num="12345678" color="red" />
            <Box info={user[0]}/>
            <Box info={user[1]}/>
            <Box info={user[2]}/>
            <Box info={user[3]}/>
        </>
    )
}

export default Home;