'use client';
import React from "react";
import Image from "next/image";
import Link from 'next/link';  // Importa o componente Link do Next.js
import { useState } from 'react';
import styles from "./page.module.css";
import {useRouter} from 'next/router';

export default function page() {
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
      <main className={styles.main}>
        <div className={styles.fechar}>
          <button onClick={handleClick}>
            <img src="/img/x.png"/>
          </button>
        </div>
        <div className={styles.pet}>
          <h1>Prontuario pet</h1>
          <h2> <b className={styles.b}>Foto do Pet</b>(Opicional)</h2>
        </div>
        <div className={styles.fotoperfil}>
          <label className={styles.foto}>
            <img src={image} alt="Foto do Pet" />
            <input  type='file' name='foto' id='FP' hidden />
          </label>
        </div>
        <form className={styles.form}>
          <fieldset className={styles.primeira}>
            <div className={styles.Nome}>
              <label htmlFor={styles.NomePet}>Nome do Pet:</label>
              <input type="text" id="NomePet" neme="nome" placeholder="Nome do Pet" autoComplete="off" readOnly></input>
            </div>
            <br />
            <div className={styles.proprietario}>
              <label htmlFor={styles.NomeProp}>Nome do Propreitario:</label>
              <input type='text' id='NomeProp' name='nome do proprietario' placeholder='Seu nome completo' autoComplete='off' readOnly></input>
            </div>
            <br />
            <div className={styles.dataNas}>
              <label htmlFor={styles.DataNascimento}>Data de Nascimento:</label>
              <input type="date" name="Data de Nascimento" id="DataNascimento" placeholder=" " autoComplete="off" readOnly />
            </div>
            <br />
            <div className={styles.cor}>
              <label htmlFor={styles.CorPet}>Cor:</label>
              <input type="text" name="cor do pet" id="CorPet" placeholder="Cor do pet" autoComplete="off" readOnly />
            </div>
            <br />
            <div className={styles.raca}>
              <label htmlFor="RACA">Raça:</label>
              <input type="text" id="RAca" name="Raça do pet" placeholder="Raça do pet" autoComplete="off" readOnly />
            </div>
            <br />
            <div className={styles.sexo}>
              <label htmlFor={styles.sex}>Sexo:</label>
              <input type="text" name="Sexo" id="Sex" placeholder="Sexo do Pet" autoComplete="off" readOnly />
            </div>
            <br />
            <div className={styles.vacina}>
              <label htmlFor={styles.vac}>Vacina:</label>
              <input type="text" name="Vacina" id="Vac" placeholder="Vacina aplicada" autoComplete="off" readOnly />
              <div className={styles.datVac}>
              <label htmlFor={styles.datVAc}>Data:</label>
              <input type="date" name="Data de Vacina" id="dataVcn" placeholder="" autoComplete="off" readOnly />
            </div>
            </div>
          </fieldset>
          <fieldset className={styles.segunda}>
            <div className={styles.Peso}>
              <label htmlFor={styles.peso}>Peso:</label>
              <input type="text" name="peso pet" id="PESO" placeholder="Peso do Pet" autoComplete="off" readOnly />
              <div className={styles.dataVerm}>
              <label htmlFor={styles.DatVRM}>Data:</label>
              <input type="date" name="DtaVermifugação" id="DatVRM" placeholder="" autoComplete="Vermi" readOnly />
            </div>
            </div>
            <br/>
            <div className={styles.uf}>
              <label htmlFor={styles.uf}> UF:</label>
              <input type="text" name="UF" id="uf" placeholder="Estado" autoComplete="off" readOnly />
            </div>
            <br />
            <div className={styles.scrSD}>
              <label htmlFor={styles.scSD}>Secretaria de Saúde:</label>
              <input type="text" name="secretaria saude" id="scrSD" placeholder="Nome da Secretaria" autoComplete="off" readOnly />
            </div>
            <br />
            <div className={styles.cidade}>
              <label htmlFor={styles.CID}>Cidade:</label>
              <input type="text" name="Cidade" id="CID" placeholder="Cidade" autoComplete="off" readOnly />
            </div>
            <br />
            <div className={styles.verm}>
              <label htmlFor={styles.verm}>Vermifugação:</label>
              <input type="text" name="Vermifugação" id="VRM" placeholder="Vermifugação" autoComplete="Vermi" readOnly />
              <div className={styles.dataVerm}>
              <label htmlFor={styles.DatVRM}>Data:</label>
              <input type="date" name="DtaVermifugação" id="DatVRM" placeholder="" autoComplete="Vermi" readOnly />
            </div>
            </div>
            
            <br />
            <div className={styles.obs}>
              <label htmlFor={styles.Obs}>Observação:</label>
              <input className={styles.inputOBS} type="text" name="observacao" id="OBS" placeholder="Observação do Pet" autoComplete="Obs" readOnly />
             <div className={styles.dataObs}>
              <label htmlFor={styles.Datobs}>Data:</label>
              <input type="date" name="DtaObservação" id="DatOBS" placeholder="" autoComplete="off" readOnly />
            </div>
            </div>
            
          </fieldset>
        </form>
      </main>
    </div>

  )
}
