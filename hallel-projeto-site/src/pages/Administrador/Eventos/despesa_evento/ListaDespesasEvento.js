import React, { useEffect } from 'react'
import { Table } from "react-bootstrap";
import { BsPencilFill } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"
import { useState } from 'react'
import axios from 'axios';
import { IconButton } from '@mui/material';

const ListaDespesasEvento = (props) => {

  const [despesas, setDespesas] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8080/api/administrador/eventos/" + props.evento.id + "/despesa/listAll", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      if (res.data !== null) {
        setDespesas(res.data);
      }
    }).catch((error) => {
      console.log("Error requerindo da url de despesas: " + error);
    })

  }, [props.changedTabela])


  function abrirModalEdit(despesa) {
    props.setDespesaSelected(despesa);
    props.setOpenModal(true);
  }

  function abrirModalDelete(despesa){
    props.setopenModalDelete(true);
    props.setDespesaSelected(despesa);
  }

  return (

    <section className="sessao_tabela">

      <Table
        hover
        style={{
          width: "100%",
          maxWidth: "100%",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          marginRight: "8rem",
        }}
      >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Tipo de despesa</th>
            <th>Valor/Quantidade</th>
            <th style={{ textAlign: "center" }}>Opções</th>
          </tr>
        </thead>
        <tbody>


          {/* estava dando como indefinida, então coloqueia a interrogação para realizar um teste */}
          <>
            {despesas.length !== 0 &&
              <>
                {
                  despesas.map((item) => {
                    return (
                      <tr>
                        <td>{item.nome}</td>
                        <td style={{wordBreak: "break-word"}}>{item.descricao}</td>
                        <td>{item.tipoDespesa}</td>
                        <td>{item.tipoDespesa !== "DINHEIRO" ? item.quantidade + " unidades" : "R$" + item.valor}</td>
                        <td>
                          <span style={{ display: "flex", justifyContent: "center" }}>
                            <IconButton onClick={() => {abrirModalDelete(item)}}>
                              <AiFillDelete style={{ height: "20px" }} />
                            </IconButton>
                            <IconButton onClick={() => { abrirModalEdit(item) }}>
                              <BsPencilFill style={{ height: "20px" }} />
                            </IconButton>
                          </span>
                        </td>
                      </tr>
                    );
                  })
                }
              </>
            }
          </>
        </tbody>
      </Table>

    </section>
  )
}

export default ListaDespesasEvento