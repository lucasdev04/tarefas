import { useState } from "react"
import './home.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConection"
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Home() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

   async function handleLogin(e){
    e.preventDefault();
    if(email !== '' && senha !==''){
       
    await signInWithEmailAndPassword(auth, email, senha)
    .then(()=> {
        navigate('/admin', {replace: true})
    })
    .catch(()=>{
    alert('Erro ao fazer login');
    })
    }
    else{
        alert('Preencha todos os campos')
    }

    }

return(
    <div className="home-container">
        <h1>Lista de Tarefas</h1>
        <span>Gerencie sua agenda de forma facil.</span>

        <form className="form" onSubmit={handleLogin}>
            <input type="text" placeholder="Digite seu Email..."
            value={email} onChange={(e) => setEmail(e.target.value)}/>

        <input autoComplete={false} type="password" placeholder="Digite sua Senha..."
            value={senha} onChange={(e) => setSenha(e.target.value)}/>

            <button type="submit">Entrar</button>
        </form>

        <Link className="button-link" to="/register">
        Não possui uma conta? Cadastre-se
        </Link>
    </div>
)
}