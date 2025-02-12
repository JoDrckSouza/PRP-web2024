'use client';
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const CardListPet = ({ data, handleImageChange, index }) => {
  const [profileImage, setProfileImage] = useState(data.foto || "/img/CapaLogin2.png");
  const handleClick = () => router.back();

  return (
    <div className={styles.container}>
      <div className={styles.Npet}>
        <h1 className={styles.H1Pet}>{data.nome}</h1>
      </div>


      {/* Imagem do Pet */}
      <div className={styles.imageContainer}>
        <label htmlFor={`fileInput-${index}`}>
          <img
            src={profileImage}
            alt={`Foto de ${data.nome}`}
            className={styles.profileImage}
          />
        </label>
        <input
          className={styles.fileInput}
          id={`fileInput-${index}`}
          type="file"
          accept="image/*"
          onChange={(event) => handleImageChange(event, index, setProfileImage)}
        />
      </div>

      {/* Ícones com Botões */}
      <div className={styles.iconContainer}>
        <Link href="./Monitoramento">
        <button type="submit" className={styles.iconButton}>
          <img src="/img/Pets.png" alt="Icon Dog"  />
        </button>
        </Link>
        <Link href="./Agenda">
        <button className={styles.iconButton}>
          <img src="/img/agenda.png" alt="Icon Calendar"  />
        </button>
        </Link>
        <Link href="./Nfc">
        <button className={styles.iconButton}>
          <img src="/img/nfc.png" alt="Icon NFC" />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CardListPet;