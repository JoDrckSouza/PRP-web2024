"use client"; 
import React, { useState, useEffect } from "react"; 
import { FaPaw, FaBell, FaCheckCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";
import styles from "./page.module.css";
import Link from "next/link";

import Image from 'next/image';

export default function UserProfile() {
  // Estados para armazenar os dados do usuário
  const [userData, setUserData] = useState({
    name: '',
    cpf: '',
    phone: '',
    address: '',
    healthDepartment: '',
    email: '',
  });

{// Simulação de uma requisição futura para popular os dados do usuário}
  useEffect(() => {
    // Exemplo de simulação de dados obtidos de uma API
    const fetchUserData = async () => {
      const data = {
        name: 'Joana Darck',
        cpf: '000.000.000-00',
        phone: '(00) 00000-0000',
        address: 'Rua Exemplo, 123',
        healthDepartment: 'Secretaria Municipal de Saúde',
        email: 'joana.darck@example.com',
      };
      setUserData(data);
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-blue-200 p-8 rounded-lg max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-gray-700">Meu Perfil</h1>
      <div className="flex justify-center mt-4">
        <Image
          src="/placeholder-profile.png" // Imagem genérica
          alt="Imagem do usuário"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <p className="mt-2 font-semibold text-gray-700">{userData.name}</p>

      <div className="grid grid-cols-2 gap-4 mt-6 text-left">
        <div>
          <label className="block font-semibold text-gray-600">Nome:</label>
          <p className="bg-white p-2 rounded-md">{userData.name}</p>
        </div>
        <div>
          <label className="block font-semibold text-gray-600">Endereço:</label>
          <p className="bg-white p-2 rounded-md">{userData.address}</p>
        </div>
        <div>
          <label className="block font-semibold text-gray-600">CPF:</label>
          <p className="bg-white p-2 rounded-md">{userData.cpf}</p>
        </div>
        <div>
          <label className="block font-semibold text-gray-600">Secretaria de Saúde:</label>
          <p className="bg-white p-2 rounded-md">{userData.healthDepartment}</p>
        </div>
        <div>
          <label className="block font-semibold text-gray-600">Telefone:</label>
          <p className="bg-white p-2 rounded-md">{userData.phone}</p>
        </div>
        <div>
          <label className="block font-semibold text-gray-600">Email:</label>
          <p className="bg-white p-2 rounded-md">{userData.email}</p>
        </div>
      </div>
    </div>
  );
}
}