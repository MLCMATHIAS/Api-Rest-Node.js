import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../service/auth.service";

const registerCtrl = async ({body}: Request, res: Response) => {
    const responseUser = await registerNewUser(body)
};

const loginCtrl = async ({body}: Request, res: Response) => {
    const {email, password} = body;
    const responseUser = await loginUser({email, password});
    if(responseUser === "PASSWORD_INCORRECT"){
        res.status(403);
        res.send(responseUser);
    }else{
        res.send(responseUser);
    }
    
};

export {loginCtrl, registerCtrl}    