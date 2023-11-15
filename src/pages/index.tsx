import React from "react";
import Header from "./component/header";
import Card from "./component/cards"
import CardL from "./component/cardsL"
import CardR from "./component/cardsR"
import CardE from "./component/cardsE"
import CardB from "./component/cardsB"
import CardP from "./component/cardP"
import Carrossel from "./component/carrossel";
import Whats from "./component/whats"
import Footer from "./component/footer"
import Divider from "./component/divider"

export default function Index() {
  return (
    <>
    <Header></Header>
    <Carrossel></Carrossel>
    <Divider></Divider>
   <Card></Card>
   <CardL></CardL>
   <CardR></CardR>
   <Whats></Whats>
   <CardE></CardE>
   <CardP></CardP>
   <CardB></CardB>
   <Footer></Footer>
    </>
  );
};

