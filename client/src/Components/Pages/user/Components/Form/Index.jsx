import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./form.module.css";
import { signin } from "../../../../../store/slices/user";



function Form({ type }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [label, setLabel]       = useState("");
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");

    const [msg, setMsg] = useState(null);


    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("/api/v1/user/sign" + type, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ label, email, password }),
        });
        const json = await res.json();
        setMsg(json.msg);

        if(type === "in" && res.status === 200){
            localStorage.setItem("auth", json.TOKEN);
            dispatch(signin({label}));
            navigate("/");
        }
        
        if (type === "up" && res.status === 201) {
            navigate("/utilisateur/connexion");
        }
    }

    return (
        <>
            {msg && <p className={styles.msg}>{msg}</p>}
            
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Votre alias"
                    type="text"
                    name="label"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                />
                <input
                    placeholder="votre email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Votre mot de passe"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">
                    {type === "in" ? "Se connecter" : "S'enregistrer"}
                </button>
            </form>
            {type === "in" && (
                <p>
                    Pas encore de compte ?{" "}
                    <Link to="/utilisateur/creer-un-compte">En créer un</Link>
                </p>
            )}
        </>
    );
}

export default Form;
