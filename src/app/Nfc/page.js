"use client"; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { QRCode } from 'qrcode.react'; // para importação nomeada
import styles from "./page.module.css";


export default function PetQRCodePage() {
  const [petData, setPetData] = useState({
    name: 'Bilu',
    healthDeptNumber: '000-000-000',
    ownerPhone: '(00) 00000-0000',
    healthDeptAddress: 'Rua Exemplo, 123',
    qrCodeValue: 'https://plataformaregistrodepets.com/pet/Bilu',
  });

  // Simulação para futura integração com uma API
  useEffect(() => {
    async function fetchPetData() {
      try {
        // Substituir por requisição real
        const response = await fetch('/api/pet-data'); // URL de exemplo
        if (response.ok) {
          const data = await response.json();
          setPetData({
            name: data.name,
            healthDeptNumber: data.healthDeptNumber,
            ownerPhone: data.ownerPhone,
            healthDeptAddress: data.healthDeptAddress,
            qrCodeValue: data.qrCodeLink,
          });
        }
      } catch (error) {
        console.error('Erro ao buscar dados do pet:', error);
      }
    }

    fetchPetData();
  }, []);

  return (
    <div className="profile-container">
      <h1 className="profile-title">NFC</h1>
      <h2 className="pet-name">{petData.name}</h2>

      <div className="qrcode-container">
        <QRCode value={petData.qrCodeValue} size={200} includeMargin={true} />
      </div>

      <div className="pet-details">
        <p>* Número da secretaria de saúde: {petData.healthDeptNumber}</p>
        <p>* Número do proprietário do pet: {petData.ownerPhone}</p>
        <p>* Endereço da secretaria de saúde: {petData.healthDeptAddress}</p>
      </div>
    </div>
  );
}
