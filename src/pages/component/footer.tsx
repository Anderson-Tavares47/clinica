import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css'

const SeuComponente = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
      <div>
          <Image src="/image.png" alt="imagem" width={300} height={300} />
        </div>
        <div className={styles.rights}>
          {/* Conteúdo dos direitos reservados aqui */}
          <p>2023®Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default SeuComponente;
