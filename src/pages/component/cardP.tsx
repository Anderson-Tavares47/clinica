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
          <p className={styles.texto}>Fios de PDO</p>
          <p>Os fios de PDO são utilizados em procedimentos estéticos não cirúrgicos para promover o rejuvenescimento facial. Esses fios são inseridos na pele para criar um efeito lifting, estimulando a produção de colágeno.</p>
          <p>O resultado é uma melhora na firmeza da pele e na redução de rugas. Esse procedimento é uma opção menos invasiva em comparação com cirurgias tradicionais de lifting facial.</p>
        </div>
        
        <div className={styles.imagem}>
          <Image src="/pdo.jpeg" alt="Descrição da imagem" width={300} height={350} style={{ borderRadius: "25px" }} />
        </div>
      </div>
    </animated.div>
  );
};

export default DivComImagemETexto;
