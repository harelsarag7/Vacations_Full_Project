import axios from "axios";
import { userModel } from "../Models/userModel";

const BASE_URL = process.env.REACT_APP_BASE_URL
class AuthFunctions {

    async login(email: string, password: string): Promise<string>{
        try{ 
            const { data } = await axios.post(`${BASE_URL}/api/auth/login`, {
                 email, password 
                });
                
            return data;
        } catch(e) {
            return ``;
        } 
    }

    async register( {firstName, lastName, email, password} : userModel): Promise<string>{
        console.log({firstName, lastName, email, password});
        
        try{ 
            const { data } = await axios.post(`${BASE_URL}/api/auth/register`, {
                firstName, lastName, email , password
                });
                
            return data;
        } catch(e) {
            return ``;
        } 
    }
  
}
export const authFunctions = new AuthFunctions();
