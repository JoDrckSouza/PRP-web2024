"use client";
import { useState } from 'react';
import { Mail } from 'lucide-react';
import style from './page.module.css';
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`E-mail enviado para: ${email}`);
  };

  return (
    <div className={style.container}>
      {/* Imagem de fundo */}
      <img
        src="/img/CapaLogin2.png"
        alt="Capa de fundo"
        className={style.backgroundImage}
      />

      {/* Modal */}
      <div className={style.modalContainer}>
        <div className={style.modal}>
          {/* Título */}
          <h2 className={style.title}>Esqueci minha senha</h2>

          {/* Botão de fechar */}
          <button className={style.closeButton}>×</button>

          {/* Texto explicativo */}
          <p className={style.description}>
            Esqueceu sua senha? Iremos enviar informações sobre como recuperar ou criar uma nova senha.
          </p>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.inputContainer}>
              <Mail className={style.icon} size={20} />
              <input
                type="email"
                placeholder="Digite seu e-mail de cadastro"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={style.input}
              />
            </div>
            <Link href="./NovaSenha">
            <button type="submit" className={style.submitButton}>
              Enviar
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
