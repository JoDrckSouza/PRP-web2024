'use client';
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CardListPet from "./CardListPet";
import styles from "./page.module.css";

const ListagemPet = () => {
  const router = useRouter();

  const [listaPet, setListaPet] = useState([
    { nome: "Kdid", foto: "" },
  ]);

  const handleImageChange = (event, index, setProfileImage) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setProfileImage(newImage);
      setListaPet((prevList) => {
        const updatedList = [...prevList];
        updatedList[index].foto = newImage;
        return updatedList;
      });
    }

  };
  const [profileImage, setProfileImage] = useState("/img/perfil.png");
 
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
      <main className={styles.card}>
      <h1 className={styles.cardName}>Pets cadastrados</h1>
        {listaPet.map((pet, index) => (
          <CardListPet
            key={index}
            data={pet}
            index={index}
            handleImageChange={handleImageChange}
          />
        ))}
      </main>
    </div>
  );
};

export default ListagemPet;
