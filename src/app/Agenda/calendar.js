"use client"
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './calendar.module.css';  // Estilos personalizados do calendário


function CustomCalendar() {
  const [date, setDate] = useState(new Date());  // Estado para armazenar a data selecionada no calendário
  const [events, setEvents] = useState([]);// Estado para armazenar a lista de eventos

  // Função para buscar eventos da API
  useEffect(() => {
    async function fetchEvents() { // Faz uma requisição para a API para buscar os eventos
      const res = await fetch('./api/events');// URL da API que retorna eventos
      const data = await res.json(); // Converte a resposta em JSON
      setEvents(data);// Atualiza o estado com os eventos recebidos
    }
    fetchEvents(); // Chama a função para buscar eventos
  }, []); // O array vazio [] indica que esse efeito só deve ser executado uma vez, ao montar o componente
   

  const tileContent = ({ date, view }) => {  // Função para renderizar conteúdo específico em cada dia do calendário
    // Verifica se a visualização atual é o mês
    if (view === 'month') {  // Procura um evento que corresponda à data atual
      const eventForDay = events.find(event => new Date(event.date).toDateString() === date.toDateString());

      if (eventForDay) { // Se encontrar um evento, renderiza um marcador estilizado
        return <div className={`${styles.marcador} ${styles[marcador.color]}`}></div>;
      } 
    }
    return null;
  };  // Retorna null se não houver conteúdo a ser renderizado

  return ( // Renderização do componente
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
      />
    </div>
  );
}

export default CustomCalendar;
