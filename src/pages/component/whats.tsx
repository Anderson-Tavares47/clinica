import React from 'react';
import styles from '../../styles/Whats.module.css'

const WhatsAppButton = () => {
  const phoneNumber = '519963136779'; // Substitua pelo seu número de telefone

  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <p>Descubra a excelência em cuidados estéticos na nossa clínica! Estamos aqui para transformar sua jornada de beleza. Entre em contato conosco e inicie sua jornada rumo a uma aparência e bem-estar excepcionais. Estamos ansiosos para ouvir você!</p>
        <button onClick={openWhatsApp}>Enviar mensagem</button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
