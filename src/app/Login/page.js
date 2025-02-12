"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrigida a importação do roteador
import { Mail, Lock } from 'lucide-react';
import Image from 'next/image';
import style from './page.module.css';
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      router.push('/dashboard'); // Navegação com push correta
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleForgotPassword = () => {
    router.push('/reset-password'); // Navegação correta
  };
    const handleClick = () => router.back();

  return (
    <div className={style.container}>
      {/* Imagem e informações */}
      <div className={style.imageSection}>
        <img src="/img/CapaLogin.png" alt="Capa Login" layout="fill" objectFit="cover" />
        <div className={style.textSection}>
          <h1 className={style.title}>PRP</h1>
          <p className={style.subtitle}>Acesse sua conta na plataforma de registro de pets</p>
          <ul className={style.featureList}>
            <li className={style.featureItem}>
              <img src="/img/paw.png" alt="Icone" width={25} height={25} />
              <span className={style.featureText}>Monitoramento do Pet</span>
            </li>
            <li className={style.featureItem}>
              <img src="/img/paw.png" alt="Icone" width={25} height={25} />
              <span className={style.featureText}>Alerta para Vacinas</span>
            </li>
            <li className={style.featureItem}>
              <img src="/img/paw.png" alt="Icone" width={25} height={25} />
              <span className={style.featureText}>Agendamento de Vacinas</span>
            </li>
            <li className={style.featureItem}>
              <img src="/img/paw.png" alt="Icone" width={25} height={25} />
              <span className={style.featureText}>Micro-Chip NFC</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Formulário de login */}
      <div className={style.formSection}>
        <div className={style.formContainer}>
          <h2 className={style.formTitle}>Entrar</h2>
          <form onSubmit={handleLogin} className={style.form}>
            {/* Campo de e-mail */}
            <div className={style.inputGroup}>
              <Mail className={style.inputIcon} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className={style.inputField}
              />
            </div>
            {/* Campo de senha */}
            <div className={style.inputGroup}>
              <Lock className={style.inputIcon} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className={style.inputField}
              />
            </div>
            {/* Link de recuperação de senha */}
            <div className={style.forgotPasswordSection}>
              <Link href="./EsqueceuSenha">
              <button type="submit" onClick={handleForgotPassword} className={style.forgotPasswordLink}>
                Esqueci minha senha
              </button>
              </Link>
            </div>
            {/* Botão de login */}
            
            <Link href="./ListPet">
            <button type="submit" className={style.loginButton}>
              Entrar
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
