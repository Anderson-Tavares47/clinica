import React from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import styles from '../../styles/Card.module.css';

const DivComImagemETexto = () => {
  const props = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -1000 },
    config: { duration: 1000 },
  });

  return (
    <animated.div className={styles.container} style={props}>
      <div className={styles.container}>
        <div className={styles.imagem}>
          <Image src="/harmony.jpeg" alt="Descrição da imagem" width={300} height={350} style={{ borderRadius: "25px" }} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.texto}>Harmony-endo</p>
          <p>Tem múltiplas finalidades: remodelação das camadas profundas e superficiais da pele, tonificação, 
            retração de septos conectivos, estimulação da produção de colágeno e quando necessário, redução do excesso de gordura.
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default DivComImagemETexto;
