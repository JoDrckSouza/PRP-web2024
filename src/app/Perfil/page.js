"use client"; 
import React, { useState, useEffect } from "react"; 
import { FaPaw, FaBell, FaCheckCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";
import styles from "./page.module.css";
import Link from "next/link";
import Image from 'next/image';


export default function page() {
  // Estados para armazenar os dados do usuário
  const [userData, setUserData] = useState({
    name: '',
    cpf: '',
    phone: '',
    address: '',
    healthDepartment: '',
    email: '',
  });

  // Simulação de uma requisição futura para popular os dados do usuário
  useEffect(() => {
    // Exemplo de simulação de dados obtidos de uma API
    const fetchUserData = async () => {
      const data = {
        name: 'Joana Darck',
        cpf: '000.000.000-00',
        phone: '(00) 00000-0000',
        address: 'Rua Exemplo, 123',
        healthDepartment: 'Secretaria Municipal de Saúde',
        email: 'joana.darck@example.com',
      };
      setUserData(data);
    };

    fetchUserData();
  }, []);
  const [image, setImage] = useState("/img/perfil.png");
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
      <main className={styles.profileContainer1}>
      <div className={styles.fechar}>
            <button onClick={handleClick}>
              <img src="/img/x.png"/>
            </button>
          </div>
      <div className={styles.profileContainer}>
        <h1 className={styles.profileTitle}>Meu Perfil</h1>
        <div className={styles.profileImageContainer}>
          <img
            src="./img/perfil.png" 
            alt="Imagem do usuário"
            className="profile-image"
          />
        </div>
        <p className={styles.profileName}>{userData.name}</p>

        <div className={styles.profileCard}>
          <div className={styles.profileGrid}>
            <div className={styles.profileField}>
              <label>Nome:</label>
              <input type="text" id="Nproprietario" name="nome" placeholder="Nome do Proprietário" autoComplete="off" readOnly value={userData.name} />
            </div>
            <div className={styles.profileField2}>
              <label>Endereço:</label>
              <input type="text" id="endereco" name="endereco" placeholder="Endereço" autoComplete="off" readOnly value={userData.address} />
            </div>
            <div className={styles.profileField}>
              <label>CPF:</label>
              <input type="text" id="cpf" name="cpf" placeholder="CPF" autoComplete="off" readOnly value={userData.cpf} />
            </div>
            <div className={styles.profileField3}>
              <label>Secretaria de Saúde:</label>
              <input type="text" id="healthDepartment" name="healthDepartment" placeholder="Secretaria de Saúde" autoComplete="off" readOnly value={userData.healthDepartment} />
            </div>
            <div className={styles.profileField}>
              <label>Telefone:</label>
              <input type="text" id="telefone" name="telefone" placeholder="Telefone" autoComplete="off" readOnly value={userData.phone} />
            </div>
            <div className={styles.profileField2}>
              <label>Email:</label>
              <input type="text" id="email" name="email" placeholder="Email" autoComplete="off" readOnly value={userData.email} />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  );
}
