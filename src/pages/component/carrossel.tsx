import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/Carrossel.module.css';

const Carrossel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slidesContent = [
    {
      title: 'O que ela faz?',
      content: 'A Dra.Fernanda é Biomedica Esteta, Estesticista com Pós em Harmonização Facial e tem como principais especialidades',
      items: [
        'Técnica Harmony´s Lifting Endolaser',
        'Gluteoplastia Não Cirúgica',
        'Abdomên Trincado HD',
        'Harmonização Facial',
        '(preenchimento labial, rinomodelação, preenchimento full face, bioestimuladores de colágeno, "botox", fios de PDO e muito mais!)',
        'Emagrecimento',
        'Soroterapia',
        'Celulite Off',
        'Hipertrofia',
      ],
      image: '/fernanda.jpeg',
    },
    {
      title: 'O que ela faz?',
      content: 'A Dra.Júlia é Biomedica Esteta, e tem como principais especialidades',
      items: [
        'Técnica Harmony´s Lifting Endolaser',
        'Harmonização Facial',
        '(preenchimento labial, rinomodelação, preenchimento full face, bioestimuladores de colágeno, "botox", fios de PDO e muito mais!)',
        'Pele Acneica',
        'Soroterapia',
      ],
      image: '/julia.jpeg',
    },
  ];

  return (
    <Slider {...settings}>
      {slidesContent.map((slide, index) => (
        <div className={styles.slide} key={index}>
          <div className={styles.conteudo}>
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
            {slide.items && (
              <div>
                {slide.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            )}
          </div>
          <img src={slide.image} alt={`Imagem ${index + 1}`} style={{ height: '1000px' }} />
        </div>
      ))}
    </Slider>
  );
};

export default Carrossel;
