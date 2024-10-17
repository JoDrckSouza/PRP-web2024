'use client';
import CustomCalendar from './calendar.js'; 
import React from "react";
import Link from 'next/link';  // Importa o componente Link do Next.js
import styles from "./page.module.css";
import { useState } from 'react';



export default function page() {
    const [image, setImage] = useState("/img/perfil.png");
    const userName = "Joana darck";  // Substitua pelo nome real do usuário*/
    return(
      
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
        <main>
          <div>
         <CustomCalendar />
          </div>
        </main>
      </div> 
        
    );
};