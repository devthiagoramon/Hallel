import Img1 from "../../images/capacurso.png";
import "./styleEventos.css";
import Card from "react-bootstrap/Card";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";

//  images controls
const SlideEventos = (props) => {



  function alterarEventoEspc(item) {
    setEventoEspc("");
    setshowInfos(true);
    setEventoEspc(item);
  }

  const carrosel = useRef();
  const [eventos, setEventos] = useState([]);
  const [showInfos, setshowInfos] = useState(false);
  const [eventoEspc, setEventoEspc] = useState();
  const [width, setWidht] = useState(0);

  useEffect(() => {
    setWidht(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  useMemo(() => {
    let url = "http://localhost:8080/api/eventos";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((evento) => {
        console.log(evento);
        setEventos(evento);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="body-eventos">
      <h1 id="title">Eventos</h1>
      <div className="containerCarroseulEventos">
        {eventos.length === 0 ? <div className="loaderEventoCarroseul"><Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /></div> :
          <motion.div
            ref={carrosel}
            className="carrousel"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              className="inner"
              drag="x"
              dragConstraints={{ right: 10, left: -width, maxWidth: "100vw" }}
            >
              {eventos.map((evento) => {
                return (

                  <motion.div
                    className="imagem2"
                    key={evento.titulo}
                    whileHover={{ scale: "1.02" }}
                  >
                    <div className="card" style={{ width: "18rem",
                                               maxHeight: "100em" }}>
                  <img src={evento.imagem} className="card-img-top" alt="..." style={{maxHeight:"200px",
                                                                                      minHeight:"200px"}}/>
                  <div className="card-body">
                    <h5 className="card-title">{evento.titulo}</h5>
                    <p className="card-text">{evento.descricao}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => alterarEventoEspc(evento)}
                    >
                      Saber mais
                    </button>
                  </div>
                </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>}
      </div>
    </div>
  );
};

export default SlideEventos;
