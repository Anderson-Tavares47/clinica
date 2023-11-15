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
        <div className={styles.conteudo}>
          <p className={styles.texto}>Método Pump</p>
          <p>Além de dar mais volume ao glúteo, ele trata os seus sinais de envelhecimento, deixando-o com aparência mais jovem, maior sustentação e força muscular.</p>
          <p>O procedimento associa bioestimuladores, ácido hialurônico, enzimas e aminoácidos.</p>
        </div>
        
        <div className={styles.imagem}>
          <Image src="/bumbum.jpg" alt="Descrição da imagem" width={300} height={350} style={{ borderRadius: "25px" }} />
        </div>
      </div>
    </animated.div>
  );
};

export default DivComImagemETexto;
