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
          <Image src="/bio.jpeg" alt="Descrição da imagem" width={300} height={350} style={{ borderRadius: "25px" }} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.texto}>Bioestimuladores de Colágeno - o que são ?</p>
          <p>Os Bioestimuladores de Colágeno são substâncias aplicadas na face para estimular a produção de novas fibras de colágeno.
            Desta forma, auxiliam na melhora do aspecto da face, minimizando os sinais do tempo, atenuando a flacidez e proporcionando uma pele mais uniforme.
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default DivComImagemETexto;
