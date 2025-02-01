'use client';
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const CardListPet = ({ data, handleImageChange, index }) => {
  const [profileImage, setProfileImage] = useState(data.foto || "/img/perfil.png");

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
        <button className={styles.iconButton}>
          <img src="/img/Pets.png" alt="Icon Dog"  />
        </button>

        <button className={styles.iconButton}>
          <img src="/img/agenda.png" alt="Icon Calendar"  />
        </button>

        <button className={styles.iconButton}>
          <img src="/img/nfc.png" alt="Icon NFC" />
        </button>
      </div>
    </div>
  );
};

export default CardListPet;