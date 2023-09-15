import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EntryUser() {
    const [label, setLabel] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch("/api/v1/user/createAccount", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ label, email, password }),
        });
        console.log(res);
        if (res.status === 201) {
            navigate("/"); // rediriger vers le formulaire de connexion
        }
    }

    return (
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
            <button type="submit">S'enregistrer</button>
        </form>
    );
}

export default EntryUser;
