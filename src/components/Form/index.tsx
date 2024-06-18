import { FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import User from "../User";
import "./styles.css";

export interface FormData {
    user: string;
    password: string;
}

export const Formulario = () => {

    const [ userLog, setuserLog ] = useState("");

    const { user, password, handleChange } = useForm<FormData>({ 
        user: '',
        password: '',
    });    

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setuserLog(user)
    }

    return (
        userLog.length > 0
        ? <User userLog= { user } />
        : (
            <>
            <h3 className="form-title">LOGIN</h3>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div>
                    <label>Username:</label>
                    <input type="user"
                           name="user"
                           value={ user }
                           onChange={ (e) => handleChange(e) }
                    />
                </div>
    
                <div>
                    <label>Password:</label>
                    <input type="text"
                           name="password"
                           value={ password }
                           onChange={ handleChange }
                    />
                </div>
    
                <button type="submit">Login</button>
    
            </form>
            </>
        )  
    );
}

function setUser(user: string) {
    throw new Error("Function not implemented.");
}
