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
          <Image src="/soro.jpeg" alt="Descrição da imagem" width={300} height={350} style={{ borderRadius: "25px" }} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.texto}>Soroterapia - o que é ?</p>
          <p>Técnica que possui o objetivo de suplementar somente vitaminas, minerais, antioxidantes e aminoácidos, por meio de
            terapia parental, sem o fracionamento e/ou substância de elevado risco e de uso restrito hospitalar (como carboidrato e/ou lipídeos).
          </p>
          <p>Utiliza sob forma de promoção da homeostase do organismo, sem a finalidade de cura e/ou remediar</p>
        </div>
      </div>
    </animated.div>
  );
};

export default DivComImagemETexto;
