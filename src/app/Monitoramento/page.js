'use client';
import React from "react";
import Image from "next/image";
import Link from 'next/link';  // Importa o componente Link do Next.js
import { useState } from 'react';
import styles from "./page.module.css";
import {useRouter} from 'next/router';

export default function Page() {
  const [pets, setPets] = useState([
    {
      id: 1,
      nomePet: "Rex",
      nomeProprietario: "Joana Darck",
      dataNascimento: "2020-01-15",
      cor: "Marrom",
      raca: "Labrador",
      sexo: "Macho",
      vacina: "Anti-rábica",
      dataVacina: "2023-03-10",
      peso: "25kg",
      dataVermifugacao: "2023-04-01",
      uf: "SP",
      secretariaSaude: "Secretaria Municipal de Saúde de São Paulo",
      cidade: "São Paulo",
      vermifugacao: "Sim",
      observacao: "Nenhuma",
      dataObservacao: "2023-05-10",
      fotoPet: "/img/perfil.png"
    },
  ]);

 
  const handleClick = () => router.back();

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
              Joana Darck
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {pets.map((pet) => (
          <div key={pet.id} className={styles.petContainer}>
            <div className={styles.fechar}>
              <button onClick={handleClick}>
                <img src="/img/x.png" alt="Fechar" />
              </button>
            </div>
            <div className={styles.pet}>
              <h1>Prontuário do Pet</h1>
              <h2> <b className={styles.b}>Foto do Pet</b> (Opcional)</h2>
            </div>
            <div className={styles.fotoperfil}>
              <label className={styles.foto}>
                <img src={pet.fotoPet} alt="Foto do Pet" />
                <input type='file' name='foto' id='FP' hidden />
              </label>
            </div>
            <form className={styles.form}>
              <fieldset className={styles.primeira}>
                <div className={styles.Nome}>
                  <label htmlFor="NomePet">Nome do Pet:</label>
                  <input type="text" id="NomePet" value={pet.nomePet} readOnly />
                </div>
                <br />
                <div className={styles.proprietario}>
                  <label htmlFor="NomeProp">Nome do Proprietário:</label>
                  <input type='text' id='NomeProp' value={pet.nomeProprietario} readOnly />
                </div>
                <br />
                <div className={styles.dataNas}>
                  <label htmlFor="DataNascimento">Data de Nascimento:</label>
                  <input type="date" value={pet.dataNascimento} readOnly />
                </div>
                <br />
                <div className={styles.cor}>
                  <label htmlFor="CorPet">Cor:</label>
                  <input type="text" value={pet.cor} readOnly />
                </div>
                <br />
                <div className={styles.raca}>
                  <label htmlFor="RACA">Raça:</label>
                  <input type="text" value={pet.raca} readOnly />
                </div>
                <br />
                <div className={styles.sexo}>
                  <label htmlFor="Sex">Sexo:</label>
                  <input type="text" value={pet.sexo} readOnly />
                </div>
                <br />
                <div className={styles.vacina}>
                  <label htmlFor="Vac">Vacina:</label>
                  <input type="text" value={pet.vacina} readOnly />
                  <div className={styles.datVac}>
                    <label htmlFor="dataVcn">Data:</label>
                    <input type="date" value={pet.dataVacina} readOnly />
                  </div>
                </div>
              </fieldset>
              <fieldset className={styles.segunda}>
                <div className={styles.Peso}>
                  <label htmlFor="PESO">Peso:</label>
                  <input type="text" value={pet.peso} readOnly />
                  <div className={styles.dataVerm}>
                    <label htmlFor="DatVRM">Data:</label>
                    <input type="date" value={pet.dataVermifugacao} readOnly />
                  </div>
                </div>
                <br />
                <div className={styles.uf}>
                  <label htmlFor="uf">UF:</label>
                  <input type="text" value={pet.uf} readOnly />
                </div>
                <br />
                <div className={styles.scrSD}>
                  <label htmlFor="scrSD">Secretaria de Saúde:</label>
                  <input type="text" value={pet.secretariaSaude} readOnly />
                </div>
                <br />
                <div className={styles.cidade}>
                  <label htmlFor="CID">Cidade:</label>
                  <input type="text" value={pet.cidade} readOnly />
                </div>
                <br />
                <div className={styles.verm}>
                  <label htmlFor="VRM">Vermifugação:</label>
                  <input type="text" value={pet.vermifugacao} readOnly />
                  <div className={styles.dataVerm}>
                    <label htmlFor="DatVRM">Data:</label>
                    <input type="date" value={pet.dataVermifugacao} readOnly />
                  </div>
                </div>
                <br />
                <div className={styles.obs}>
                  <label htmlFor="OBS">Observação:</label>
                  <input className={styles.inputOBS} type="text" value={pet.observacao} readOnly />
                  <div className={styles.dataObs}>
                    <label htmlFor="DatOBS">Data:</label>
                    <input type="date" value={pet.dataObservacao} readOnly />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        ))}
      </main>
    </div>
  );
}
