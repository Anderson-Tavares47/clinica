import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div style={{ backgroundColor: "rgb(159, 141, 40)", display: "flex", justifyContent: "flex-end", paddingRight:"20px" }}>
      <a href="https://www.instagram.com/seu_usuario_do_instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="white" style={{ marginRight: '10px' }} />
      </a>
      <a href="https://www.facebook.com/seu_usuario_do_facebook" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} color="white" />
      </a>
    </div>
      <div className={styles.container}>
        <div className={styles.leftOptions}>
          <p>Tratamento</p>
          <p>Nossos Serviços</p>
        </div>

        <div className={styles.logo}>
          <Image src="/image.png" alt="imagem" width={200} height={200} />
        </div>

        <div className={styles.rightOptions}>
          <p>Conheça a Clínica</p>
          <p>Sobre Nós</p>
          <p>Contato</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
