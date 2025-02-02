"use client"; 
import React, { useState, useEffect } from "react"; 
import { FaPaw, FaBell, FaCheckCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";
import styles from "./page.module.css";
import Link from "next/link";

export default function page() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    // Função para buscar as notificações
    const fetchNotifications = () => {
      // Dados simulados de notificações
      const mockData = [
        { id: 1, text: "O pet possui uma vermifugação de 10/01 atrasada. Procure seu agente de saúde.", type: "alert", icon: <img src="./img/pataVER.png" alt="alert icon" className={styles.icon} /> },
        { id: 2, text: "Aplicação da vermifugação concluída. Seu pet está protegido e em boas mãos! 17/01", type: "success", icon:<img src="./img/pataVERDE.png" alt="alert icon" className={styles.icon} /> },
        { id: 3, text: "Alerta! Seu pet possui uma vermifugação próxima à data de vencimento.", type: "warning", icon: <img src="./img/pataAMARELA.png" alt="alert icon" className={styles.icon} /> },
        { id: 4, text: "Alerta! Seu pet possui uma visita agendada para este mês!", type: "info", icon: <img src="./img/pataAMARELA.png" alt="alert icon" className={styles.icon}/> },
        { id: 1, text: "O pet possui uma vermifugação de 10/01 atrasada. Procure seu agente de saúde.", type: "alert", icon: <img src="./img/pataVER.png" alt="alert icon" className={styles.icon} /> },
        { id: 2, text: "Aplicação da vermifugação concluída. Seu pet está protegido e em boas mãos! 17/01", type: "success", icon:<img src="./img/pataVERDE.png" alt="alert icon" className={styles.icon} /> },
        { id: 3, text: "Alerta! Seu pet possui uma vermifugação próxima à data de vencimento.", type: "warning", icon: <img src="./img/pataAMARELA.png" alt="alert icon" className={styles.icon} /> },
        { id: 4, text: "Alerta! Seu pet possui uma visita agendada para este mês!", type: "info", icon: <img src="./img/pataAMARELA.png" alt="alert icon" className={styles.icon}/> }
      ];
      // Atualizando o estado com as notificações simuladas
      setNotifications(mockData);
    };

    // Chama a função de buscar as notificações
    fetchNotifications();
  }, []); // Esse efeito roda apenas uma vez quando o componente é montado
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

      <main className={styles.container}>
        <div className={styles.container2}>
        <div className={styles.fechar}>
            <button onClick={handleClick}>
              <img src="/img/x.png"/>
            </button>
          </div>
          <div className={styles.Notif}>
            <img src="./img/Vector.png" alt="Pata" className={styles.icone} /> 
            <h2>Seja bem-vindo(a) à Plataforma de Registro de Pets</h2>
            </div>
          <div className={styles.notificationList}>
            {/* Mensagem fixa de boas-vindas */}
            <div className={styles.mensage}>
            <div className={`${styles.notificationItem} ${styles.info}`}> 
              <FaBell color="blue" />  Fique atento(a) às notificações do seu pet.
            </div>
            </div>

            {/* Exibição das notificações */}
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`${styles.notificationItem} ${styles[notification.type]}`}
              >
                {/* Icone da notificação */}
                
                {/* Texto da notificação */}
                <div className={styles.text}>
                <p className={styles.notifText}>{notification.text}{notification.icon}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}