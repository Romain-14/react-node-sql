import Query from "../model/Query.js";
import { hash } from "bcrypt";
const SALT = 10;

const createAccount = async (req, res) => {
    
    try {
        let msg = "";
        const queryUser = "SELECT label, password FROM user WHERE label = ?";
        const [user] = await Query.findByValue(queryUser, req.body.label);
        if (user.length) {
            msg = "un utilisateur avec cette identifiant existe déjà";
            res.status(409).json({ msg });
        } else
        if(!user.length){
            const datas = {
                label: req.body.label,
                email: req.body.email,
                password: await hash(req.body.password, SALT),
            };
            const query = "INSERT INTO user (label, email, password, role, created_at) VALUES(?, ?, ?, 'user', NOW())";
            await Query.write(query, datas);
            msg = "utilisateur créé";
            res.status(201).json({msg});
        }
    } catch (error) {
        throw Error(error);
    }
};

export { createAccount };
