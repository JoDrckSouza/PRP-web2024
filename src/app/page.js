import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <header className={styles.header}>
     <div className={styles.div1}>
          <div className={styles.logo}>
            <img src="/img/Vector.png"/>
            <h1>PRP</h1>
          </div>
          <div className={styles.text}>
            <h2 className= {styles.h2}>Plataforma de <br/>Registro de Pets
            </h2>
        </div>
        <div className={styles.div2}>
            <button className={styles.button}>
              <p className={styles.text}>Por que cadastrar meu pet?
              </p>
            </button>
            <button className={styles.button}>
              <p className={styles.text}>Quem Somos?
              </p>
            </button>
            <button className={styles.button}>
              <p className={styles.text}>Como Funciona?
              </p>
            </button>
        </div>
        <div className={styles.div3}>
           <div className={styles.input}>
            <input className={styles.textImput}placeholder='O que você procura?' type='text'/>
            <img src="/img/pesquisa.png"/>
              
        </div>
            <button className={styles.loing}>
            <img src="/img/perfil.png" alt="foto do perfil"/>
            </button>
            </div> 
          </div> 
      </header>
  );
}
