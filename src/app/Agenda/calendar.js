"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./calendar.module.css";

function CalendarEvents() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  // Fetch events from API
  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events"); // URL correta para a rota de API
        if (!res.ok) throw new Error("Erro ao buscar eventos");
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Erro ao buscar eventos: ", error);
      }
    }

    fetchEvents();
  }, []);

  // Define estilos condicionais para as datas do calendário
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const eventForDay = events.find(
        (event) => new Date(event.date).toDateString() === date.toDateString()
      );

      if (eventForDay) {
        if (date > new Date()) {
          return styles.agendado;
        }
        return eventForDay.tomou ? styles.concluido : styles.atraso;
      }
    }
    return null;
  };

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        locale="pt-br"
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={tileClassName}
      />
    </div>
  );
}

export default CalendarEvents;
