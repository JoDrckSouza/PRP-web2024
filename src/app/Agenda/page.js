// src/components/Agendamento.jsx
'use client';
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaSyringe, FaBone } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import styles from "./calendar.module.css";

export default function Agendamento() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => setSelectedDate(date);

  const events = [
    { date: "2025-01-10", text: "Vacina (Gripe canina) - 1ª dose", icon: <FaSyringe color="red" /> },
    { date: "2025-01-16", text: "Vermifugacao (3 kg - 1,0 mL)", icon: <FaBone color="yellow" /> },
    { date: "2025-01-17", text: "Vermifugacao (4 kg - 1,5 mL)", icon: <FaBone color="green" /> },
    { date: "2025-01-19", text: "Vermifugacao (4 kg - 2,0 mL)", icon: <FaBone color="green" /> },
    { date: "2025-01-31", text: "Vacina (Giárdia) - 1ª dose", icon: <FaSyringe color="yellow" /> },
    { date: "2025-01-31", text: "Visita", icon: <AiOutlineCalendar color="blue" /> },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Agendamento</h1>
      <div className={styles.calendarContainer}>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className={styles.calendar}
        />
      </div>

      <div className={styles.eventList}>
        {events.map((event, index) => (
          <div className={styles.eventItem} key={index}>
            {event.icon}
            <p className={styles.eventText}>{event.date}: {event.text}</p>
          </div>
        ))}
      </div>

      <button className={styles.saveButton}>Salvar</button>
    </div>
  );
}
