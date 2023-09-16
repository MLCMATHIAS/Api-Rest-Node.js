import { hash, compare } from "bcryptjs";


//BCRYPT SE USA PARA QUE NUESTRA CONTRACEÑA ESTE ENCRIPTADA.
const encrypt = async (pass:string) => {
    const passwordHash = await hash(pass, 8);
    return passwordHash;
};
const verified = async (pass:string, passwordHash:string) =>{
    const isCorrect = await compare(pass, passwordHash);
    return isCorrect;
};

export {encrypt, verified}