import { useState } from "react"
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConection"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();


   async function handleRegister(e){
    e.preventDefault();
    if(email !== '' && senha !==''){
       await createUserWithEmailAndPassword(auth, email, senha)
    .then(()=>{
    navigate('/admin', {replace: true})
    })
    .catch(()=>{
        alert('Erro ao fazer o cadastro')
    })


    }else{
        alert('Preencha todos os campos')
    }

    }

return(
    <div className="home-container">
        <h1>Cadastre-se</h1>
        <span>Vamos Criar Sua Conta!</span>

        <form className="form" onSubmit={handleRegister}>
            <input type="text" placeholder="Digite seu Email..."
            value={email} onChange={(e) => setEmail(e.target.value)}/>

        <input autoComplete={false} type="password" placeholder="Digite sua Senha..."
            value={senha} onChange={(e) => setSenha(e.target.value)}/>

            <button type="submit">Cadastrar</button>
        </form>

        <Link className="button-link" to="/">
        Já Possui Uma Conta? Faça Login!
        </Link>
    </div>
)
}