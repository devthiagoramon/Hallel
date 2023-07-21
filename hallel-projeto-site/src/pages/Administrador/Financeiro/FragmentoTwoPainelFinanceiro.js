import { LinearProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import Chart from "react-google-charts";

const FragmentoTwoPainelFinanceiro = () => {
  const [ultimasSaidas, setUltimasSaidas] = useState([]);
  const [faltam, setFaltam] = useState(0.0);
  const [meta, setMeta] = useState(0.0);
  const [entradasValue, SetreceitaValue] = useState();

  const optionsGraficoPizza = {
    slices: {
      0: { color: "#58D68D" },
      1: { color: "#E74C3C" },
    },
  };

  useEffect(() => {
    let url = "http://localhost:8080/api/financeiro/ultimasSaida";

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUltimasSaidas(res.data);
      });
  }, [ultimasSaidas]);

  useMemo(() => {
    let data = new Date();
    let mesString =
      data.getMonth() + 1 >= 10
        ? String(data.getMonth() + 1)
        : "0" + String(data.getMonth() + 1);
    let anoString = String(new Date().getFullYear());
    let urlListagem =
      "http://localhost:8080/api/financeiro/meta/listar" +
      "?mes=" +
      mesString +
      "&ano=" +
      anoString;
    axios
      .get(urlListagem, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setMeta(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setMeta]);

  useMemo(() => {
    let data = new Date();
    let mesString =
      data.getMonth() + 1 >= 10
        ? String(data.getMonth() + 1)
        : "0" + String(data.getMonth() + 1);
    let anoString = String(new Date().getFullYear());
    let url =
      "http://localhost:8080/api/financeiro/entradasMes/valor" +
      "?mes=" +
      mesString +
      "&ano=" +
      anoString;
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        SetreceitaValue(res.data)
        setFaltam(meta - res.data);
      })
      .catch((error) => {
        console.log("Error requerindo o valor de entrada do mes: " + error);
      });
  }, [setFaltam, meta]);

  return (
    <div className="cont_frag_two_painel_financeiro">
      <div className="cont_esquerda_frag_two_painel_financeiro">
        <div className="cont_tabelas_ultimas_painel_financeiro">
          <label>Ultimas Saidas</label>
          <Table
            hover
            style={{
              width: "100%",
              maxWidth: "100%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <thead>
              <tr>
                <th>Descrição da saida</th>
                <th>Valor da saida</th>
              </tr>
            </thead>
            <tbody>
              {ultimasSaidas.length !== 0 ? (
                <>
                  {ultimasSaidas.map((saida) => {
                    return (
                      <tr>
                        <td>{saida.descricaoSaida}</td>
                        <td>
                          {saida.valorSaida.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <LinearProgress sx={{ backgroundColor: "#1A0631" }} />
              )}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="cont_direita_frag_two_painel_financeiro">
        <div className="cont_info_frag_two_painel">
          <span>Falta</span>
          <label>
            {faltam.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </label>
        </div>
        <div className="cont_grafico_pizza_frag_two_painel_financeiro">
          <Chart
            chartType="PieChart"
            options={optionsGraficoPizza}
            data={[
              ["Tipo", "Valor"],
              ["Entradas", entradasValue],
              ["Meta", meta],
            ]}
            width={"400px"}
            height={"350px"}
          />
        </div>
      </div>
    </div>
  );
};

export default FragmentoTwoPainelFinanceiro;
