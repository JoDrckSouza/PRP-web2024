"use client"; 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import styles from "./page.module.css";
import {useRouter} from 'next/router';


export default function NFCPage() {
  const [data, setData] = useState({
    numeroSecretariaSaude: '',
    telefoneProprietarioPet: '',
    enderecoSecretariaSaude: ''
  });

  useEffect(() => {
    // Simulação de dados fictícios obtidos de um "banco de dados"
    const fetchData = async () => {
      const mockData = {
        numeroSecretariaSaude: '12345-6789',
        telefoneProprietarioPet: '(11) 98765-4321',
        enderecoSecretariaSaude: 'Rua Saúde, 100 - São Paulo'
      };
      setData(mockData);
    };

    fetchData();
  }, []);
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
      <main className={styles.nfcContainer1}>
      <div className={styles.fechar}>
            <button onClick={handleClick}>
              <img src="/img/x.png"/>
            </button>
          </div>
      <div className={styles.nfcContainer}>
        <h1 className={styles.nfcTitle}>NFC</h1>
        <h2 className={styles.nfcTitle2}>Luna</h2>
        <div className={styles.nfcQrcode}>
        <img
          src="./img/qrcode.png"
          alt="QR Code representativo"/>
      </div>
      <form className={styles.nfcForm}>
        <div className={styles.nfcField}>
          <label htmlFor="numeroSecretariaSaude" className={styles.fieldLabel}>Número da Secretaria de Saúde :</label>
          <input
            type="text"
            id="numeroSecretariaSaude"
            name="numeroSecretariaSaude"
            value={data.numeroSecretariaSaude}
            placeholder="Número da Secretaria de Saúde"
            readOnly
          />
        </div>

        <div className={styles.nfcField}>
          <label htmlFor="telefoneProprietarioPet" className={styles.fieldLabel}>Número do Proprietário do Pet :</label>
          <input
            type="text"
            id="telefoneProprietarioPet"
            name="telefoneProprietarioPet"
            value={data.telefoneProprietarioPet}
            placeholder="Número do Proprietário do Pet"
            readOnly
          />
        </div>

        <div className={styles.nfcField}>
          <label htmlFor="enderecoSecretariaSaude" className={styles.fieldLabel}>Endereço da Secretaria de Saúde :</label>
          <input
            type="text"
            id="enderecoSecretariaSaude"
            name="enderecoSecretariaSaude"
            value={data.enderecoSecretariaSaude}
            placeholder="Endereço da Secretaria de Saúde"
            readOnly
          />
        </div>
      </form>
      </div>
      </main>
    </div>
  );
}
