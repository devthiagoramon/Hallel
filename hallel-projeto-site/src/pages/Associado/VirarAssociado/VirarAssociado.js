import React from "react";
import "./virar_associado.css";
import VirarAssociadoP1 from "./VirarAssociadoP1";
import { useState } from "react";
import VirarAssociadoP2 from "./VirarAssociadoP2";
import VirarAssociadoP3 from "./VirarAssociadoP3";
import dayjs from "dayjs";
import { useEffect } from "react";
import { membroLoadPerfilById } from "../../../api/uris/MembroURLS";
import axios from "axios";

const VirarAssociado = () => {
  const [indexParte, setIndexParte] = useState(0);
  const associadoModel = {
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    dataAniversario: dayjs(),
    num_cartao: "",
    data_validade_cartao: dayjs(),
    cvc_cartao: 0,
    nome_titular_cartao: "",
    endereco_cartao: "",
  };
  const [novoAssociado, setNovoAssociado] = useState(associadoModel);
  const loaded = true;
  useEffect(() => {
    if (localStorage.getItem("R0les") === "ROLE_USER") {
      let url = membroLoadPerfilById(localStorage.getItem("HallelId"));
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          let membroObj = res.data;
          setNovoAssociado((prev) => {
            return {
              ...prev,
              nome: membroObj.nome,
              email: membroObj.email,
              dataAniversario: membroObj.dataAniversario,
            };
          });
        })
        .catch((error) => {
          console.log("Error no fetching de membro: " + error);
        });
    }
  }, [loaded]);

  return (
    <div className="container_principal_VA">
      {indexParte === 0 && (
        <VirarAssociadoP1
          setIndexParte={setIndexParte}
          novoAssociado={novoAssociado}
          setNovoAssociado={setNovoAssociado}
        />
      )}
      {indexParte === 1 && (
        <VirarAssociadoP2
          setIndexParte={setIndexParte}
          novoAssociado={novoAssociado}
          setNovoAssociado={setNovoAssociado}
        />
      )}
      {indexParte === 2 && (
        <VirarAssociadoP3
          setIndexParte={setIndexParte}
          novoAssociado={novoAssociado}
          setNovoAssociado={setNovoAssociado}
        />
      )}
    </div>
  );
};

export default VirarAssociado;
