"use client";
import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import style from "./page.module.css";
import Link from "next/link";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Senha redefinida para: ${password}`);
    // Aqui você pode adicionar lógica para enviar a nova senha para o servidor
  };
  const handleClick = () => router.back();
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
          <h2 className={style.title}>Crie uma nova senha</h2>

          {/* Botão de fechar */}
          <button className={style.closeButton}>×</button>

          {/* Texto explicativo */}
          <p className={style.description}>
            Crie uma nova senha que seja diferente da senha anterior.
          </p>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.inputContainer}>
              <Lock className={style.icon} size={20} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite uma nova senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={style.input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={style.toggleButton}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                
              </button>
            </div>
            <Link href="./Login">
            <button type="submit" className={style.submitButton}>
              Concluir
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
