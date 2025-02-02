"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import "react-calendar/dist/Calendar.css";
import styles from "./calendar.module.css";

function CustomCalendar() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch("/api/events");
      const data = await res.json();
      setEvents(data);
    }
    fetchEvents();
  }, []);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const eventForDay = events.find(
        (event) => new Date(event.date).toDateString() === date.toDateString()
      );
      if (eventForDay) {
        return date > new Date()
          ? styles.agendado
          : eventForDay.tomou
          ? styles.concluido
          : styles.atraso;
      }
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
    </div>
  );
}

export default CustomCalendar;
