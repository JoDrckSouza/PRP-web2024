"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { format, isBefore, isToday, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { FaSyringe, FaStethoscope, FaHandHoldingHeart } from "react-icons/fa"; // Importando ícones
import "react-calendar/dist/Calendar.css";
import styles from "./calendar.module.css";

function CustomCalendar() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulação de dados vindos da API
    const mockData = [
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
        return <FaSyringe />;
      case "verificacao":
        return <FaStethoscope />;
      case "visita":
        return <FaHandHoldingHeart />;
      default:
        return null;
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const eventStyle = getEventStyle(date);
      return eventStyle ? `${styles.calendarTile} ${eventStyle}` : null;
    }
    return null;
  };

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        locale={ptBR}
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        formatMonthYear={(locale, date) => format(date, "MMMM yyyy", { locale: ptBR })}
      />
      <div className={styles.eventListContainer}>
        <h2 className={styles.eventHeader}>Eventos:</h2>
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
  );
}

export default CustomCalendar;
