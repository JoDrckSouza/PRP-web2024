'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FaDog, FaCalendarCheck, FaWifi } from "react-icons/fa"; 
import styles from "./page.module.css";
import Link from 'next/link';  // Importa o componente Link do Next.js
import { useRouter } from 'next/router';  // Importa o hook do Next.js para render

export default function page() {
  const [profileImage, setProfileImage] = useState("/img/perfil.png");
  
  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const userName = "Joana darck";  // Substitua pelo nome real do usuário
  const handleClick = () => {Router.back()};

  return (
    <div className={styles.topo}>
      <header className={styles.header}>
        <div className={styles.logo1}>
          <div className={styles.logo}>
            <img src="/img/Vector.png" alt="logo" />
            <h1>PRP -</h1>
          </div>
          <div className={styles.text}>
            <h2 className={styles.h2}>
              Plataforma de Registro de Pets
            </h2>
          </div>
        </div>
        <div className={styles.divP}>
          <div className={styles.notif}>
          <Link href="/pagina-de-dados-usuario">
            <img src="/img/notificacao.png" alt="notificação" /> 
            </Link>
          </div>
          <div className={styles.perfil}>
          <Link href="/pagina-de-dados-usuario">
              <img src="/img/perfil.png" alt="Foto do proprietário" />
            </Link>
          <Link href="/pagina-de-dados-usuario" className={styles.userNameLink}>
            {userName}
            </Link>
          </div>
        </div>
      </header>
    <main className="card"> 
    <div className={styles.container}>
      <div className={styles.Npet}>
      </div>
      <h1 className="H1Pet">Bilu</h1>

      <div className={styles.imageContainer}>
  <label htmlFor="fileInput">
    <img 
      src="/img/perfil.png"
      alt="Foto de Perfil" 
      className={styles.profileImage} 
    />
  </label>
  <input 
    id="fileInput"
    type="file"
    accept="image/*"
    onChange={(event) => handleImageChange(event, setProfileImage)}
    className={styles.fileInput}
  />
</div>
      {/* Ícones convertidos para botões */}
      <div className={styles.iconContainer}>
        <button className={styles.iconButton} onClick={() => handleButtonClick("FaDog")}>
          <img src="/img/Pets.png"></img>
        </button>

        <button 
          className={styles.iconButton} 
          onClick={() => handleButtonClick("FaCalendarCheck")}
        >
          <img src="/img/agenda.png"></img>
        </button>

        <button 
          className={styles.iconButton} 
          onClick={() => handleButtonClick("FaWifi")}
        >
          <img src="/img/nfc.png"></img>
        </button>
      </div>
    </div>
    </main>
    </div>

)
}