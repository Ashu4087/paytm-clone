import { useState } from "react"
import Heading from "../components/Heading"
import SubmitBtn from "../components/SubmitBtn"
import Label from "../components/Label"
import TextInput from "../components/TextInput"
export const Signup = () =>{
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleFName = (fnameVal) =>{
        setFName(fnameVal);
    }
    return(
        <>
            <div>
                <Heading Signup = {"Signup"}/>
                <Label text={"FirstName"} htmlFor={"firstName"}/>
                <TextInput type={"text"} id={"firstName"} value={fname} handleChange={handleFName}/>
            </div>
            <h1>Signin</h1>
        </>
    )
}

