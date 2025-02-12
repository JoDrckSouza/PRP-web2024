"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { format, isBefore, isToday, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { FaSyringe, FaStethoscope, FaHandHoldingHeart } from "react-icons/fa"; 
import "react-calendar/dist/Calendar.css";
import styles from "./calendar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CustomCalendar() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulação de dados vindos da API
    const mockData = [
      { date: "2025-02-10", type: "verificacao", text: "Vermifugação - Segunda dose" },
      { date: "2025-02-19", type: "vacina", text: "Vacina - Primeira dose" },
      { date: "2025-02-01", type: "visita", text: "Visita - Observação" },
      { date: "2025-02-28", type: "visita", text: "Visita - Observação" },
      { date: "2025-02-10", type: "verificacao", text: "Vermifugação - Segunda dose" },
      { date: "2025-02-19", type: "vacina", text: "Vacina - Primeira dose" },
      { date: "2025-02-01", type: "visita", text: "Visita - Observação" },
      { date: "2025-02-28", type: "visita", text: "Visita - Observação" }
    ];
    setEvents(mockData);
  }, []);

  const getEventStyle = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    const event = events.find((event) => event.date === formattedDate);

    if (event) {
      if (isBefore(date, new Date()) && !isToday(date)) {
        return styles.eventAtrasado;
      }

      switch (event.type) {
        case "vacina":
          return styles.eventLilas;
        case "verificacao":
          return styles.eventVerde;
        case "visita":
          return styles.eventAzul;
        default:
          return "";
      }
    }
    return null;
  };

  const renderEventIcon = (eventType) => {
    switch (eventType) {
      case "vacina":
        return <img src="./img/pawVacina.png"/>;
      case "verificacao":
        return <img src="./img/pawVermi.png" />;
      case "visita":
        return <img src="./img/pawVisita.png"/>;
      default:
        return null ;
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const eventStyle = getEventStyle(date);
      return eventStyle ? `${styles.calendarTile} ${eventStyle}` : null;
    }
    return null;
  };
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
        <div className={styles.calendarContainer}>
        <div className={styles.fechar}>
        <Link href="./ListPet">
              <button onClick={handleClick}>
                <img src="/img/x.png" alt="Fechar" />
              </button>
              </Link>
            </div>
          <Calendar
          className={styles.reactcalendar}
            locale="pt-BR"
            onChange={setDate}
            value={date}
            tileClassName={tileClassName}
            formatMonthYear={(locale, date) => format(date, "MMMM yyyy", { locale: ptBR })}
          />
          <div className={styles.eventListContainer}>
          <hr className={styles.hr}/>
            {events.map((event, index) => {
              const isLeft = index % 2 === 0; // Alinha eventos alternadamente
              return (
                <div
                  className={isLeft ? styles.eventItemLeft : styles.eventItemRight}
                  key={index}
                >
                  {/* Adicionando o ícone ao lado do texto do evento */}
                  <div className={styles.eventIcon}>
                    {renderEventIcon(event.type)}
                  </div>
                  <p>{`${event.date}: ${event.text}`}</p>
                </div>
              );
            })}
          </div>
        </div>
        </main>
    </div>
  );
}

export default CustomCalendar;
