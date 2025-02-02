"use client"; 
import React, { useState, useEffect } from "react"; 
import Calendar from "react-calendar"; // Importa o componente de calendário
import { format, isBefore, isToday } from "date-fns"; // Biblioteca para manipulação e formatação de datas
import ptBR from "date-fns/locale/pt-BR"; // Localização em português brasileiro para datas
import "react-calendar/dist/Calendar.css"; // Importa os estilos padrão do componente de calendário
import { FaSyringe, FaBone } from "react-icons/fa"; // Ícones para os eventos no calendário
import { AiOutlineCalendar } from "react-icons/ai"; // Ícone adicional para eventos
import styles from "./calendar.module.css"; // Importação dos estilos personalizados

export default function Agendamento() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulação de dados (substituir pelo endpoint real)
    const eventList = [
      { date: "2025-01-10", text: "Vacina (Gripe canina) - 1ª dose", icon: <FaSyringe color="red" /> },
      { date: "2025-01-16", text: "Vermifugação (3 kg - 1,0 mL)", icon: <FaBone color="yellow" /> },
      { date: "2025-01-17", text: "Vermifugação (4 kg - 1,5 mL)", icon: <FaBone color="green" /> },
      { date: "2025-01-31", text: "Visita", icon: <AiOutlineCalendar color="blue" /> }
    ];
    setEvents(eventList);
  }, []);

  const handleDateChange = (date) => setSelectedDate(date);

  // Função para atribuir classes aos tiles do calendário
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = format(date, "yyyy-MM-dd");
      const event = events.find((event) => event.date === formattedDate);

      if (event) {
        // Verifica se a data do evento é anterior à data atual (atraso)
        if (isBefore(date, new Date()) && !isToday(date)) {
          return styles.atrasadoTile;
        } else {
          return styles.eventTile;
        }
      }
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Agendamento</h1>
      <Calendar
        locale="pt-BR"
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
        formatMonthYear={(locale, date) => format(date, "MMMM yyyy", { locale: ptBR })}
      />

      <div className={styles.eventList}>
        {events.map((event, index) => (
          <div className={styles.eventItem} key={index}>
            {event.icon}
            <p className={styles.eventText}>
              {format(new Date(event.date), "dd/MM")}: {event.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
