import React from "react";
import "./gerar_pdf.css";
import {
  Button,
  IconButton,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextareaAutosize,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  CalendarMonth,
  Close,
  NavigateBefore,
  NavigateNext,
} from "@mui/icons-material";
import MenuCalendarioSelecionar from "../associados/MenuCalendarioSelecionar";
import { useState } from "react";
import dayjs from "dayjs";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import {
  entradasGetAllPaginas,
  entradasListEntradasByPageAndDate,
} from "../../../../api/uris/FinanceiroURLS";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
import PDFEntrada from "./PDFEntrada";

const GerarPDFEntrada = () => {
  const [anchorMenuCalendario, setAnchorMenuCalendario] = useState(null);
  const [mesSelecionado, setMesSelecionado] = useState(dayjs());
  const [paginaSelecionado, setPaginaSelecionado] = useState(1);
  const [totalPagina, settotalPagina] = useState(0);
  const [entradas, setentradas] = useState([]);
  const [mostrarPDF, setMostrarPDF] = useState(false);

  useEffect(() => {
    let dataString = mesSelecionado.format("MM/YYYY").toString();
    let mesString = dataString.substring(0, 2);
    let anoString = dataString.substring(3);

    let url = entradasGetAllPaginas(mesString, anoString);

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        settotalPagina(res.data);
      })
      .catch((error) => {
        console.log("Error puxando o total de paginas: " + error);
      });
  }, [mesSelecionado]);

  function handleClickAbrirMenuCalendario(e) {
    setAnchorMenuCalendario(e.currentTarget);
  }
  const handleNextPagina = () => {
    let pagina = paginaSelecionado;
    if (pagina < totalPagina) {
      setPaginaSelecionado(pagina + 1);
    }
  };

  const handlePreviousPagina = () => {
    let pagina = paginaSelecionado;
    if (pagina > 1) {
      setPaginaSelecionado(pagina - 1);
    }
  };

  
  useEffect(() => {
    let dataString = mesSelecionado.format("MM/YYYY").toString();
    let mesString = dataString.substring(0, 2);
    let anoString = dataString.substring(3);
    let url = entradasListEntradasByPageAndDate(
      paginaSelecionado - 1,
      mesString,
      anoString
    );

    axios
      .get(url, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setentradas(res.data);
      })
      .catch((error) => {
        console.log(
          "Error pegando a lista de entradas por pagina e data: " + error
        );
      });
  }, [paginaSelecionado, mesSelecionado]);

  return (
    <div >
      <div className="header_gerar_pdf">
        <div className="cont_header_gerar_pdf">
          <h2 className="titulo">Gerar PDF (Entrada)</h2>
        </div>
      </div>
      <div className="body_gerar_pdf">
        <div className="esquerda_body_gerar_pdf">
          <div className="informacoes_gerar_pdf">
            <Typography variant="h6" style={{fontWeight:'bold', marginTop:'10px',fontSize:'25px',marginBottom:'-15px',marginLeft:"-110px"}}>
              Informações de como funciona para gerar o PDF:
            </Typography>
            <ul className="text-infos">
              <li>Você pode verificar todos os dados.</li>
              <li>
                Você pode adicionar uma descrição a cada linha da tabela.
              </li>
              <li>
                Selecione um mês para visualizar informações referente ao mesmo.
              </li>
              
            </ul>
          </div>
          <div className="tabela_gerar_pdf">
            <div className="header_tabela_gerar_pdf">
              <div className="buttons_header_tabela_gerar_pdf">
                <Tooltip title="Pagina anterior">
                  <IconButton
                    onClick={() => {
                      handlePreviousPagina();
                    }}
                  >
                    <NavigateBefore />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Pagina seguinte">
                  <IconButton
                    onClick={() => {
                      handleNextPagina();
                    }}
                  >
                    <NavigateNext />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="text_header_tabela_gerar_pdf">
                <Typography variant="body1">
                  Pagina: {paginaSelecionado}{" "}
                </Typography>
                <Typography variant="caption" sx={{ textAlign: "right" }}>
                  De: {totalPagina}
                </Typography>
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 300, maxWidth: 500 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Código</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell>Valor</TableCell>
                    <TableCell>Pago com</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {entradas.map((entrada) => (
                    <TableRow
                      key={entrada.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {entrada.codigo !== null && (
                          <label>
                            {" "}
                            {entrada.codigo.numeroCodigo} |{" "}
                            {entrada.codigo.nomeCodigo}{" "}
                          </label>
                        )}
                      </TableCell>
                      <TableCell>
                        <TextareaAutosize className="input_tabela_gerar_pdf" />
                      </TableCell>
                      <TableCell>
                        {dayjs(entrada.data).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>
                        {entrada.valor.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </TableCell>
                      <TableCell>
                        {entrada.metodoPagamento === "CARTAO_CREDITO"
                          ? "Cartão de Crédito"
                          : ""}
                        {entrada.metodoPagamento === "CARTAO_DEBITO"
                          ? "Cartão de Débito"
                          : ""}
                        {entrada.metodoPagamento === "CARTAO_MAQUINA"
                          ? "Cartão de Crédito"
                          : ""}
                        {entrada.metodoPagamento === "PIX" ? "PIX" : ""}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="direita_body_gerar_pdf">
          <div className="header_preview_gerar_pdf">
            <Typography variant="h5" sx={{ color: "#F4F4F4",marginLeft:"-40px" }}>
              PDF
            </Typography>
            <label style={{marginTop:"3px",color: "white", marginRight:"-130px"}}>{mesSelecionado.format("MM/YYYY")}</label> 
          <div className="cont_header_gerar_pdf-selecionar_mes_gerar_pdf"> 
          
          <Tooltip title="Selecionar o mês">
            <IconButton
              id="btn_abrir_calendario"
              onClick={(e) => {
                handleClickAbrirMenuCalendario(e);
              }}
            >
              <CalendarMonth
                sx={{ color: "white", height: "35px", width: "35px",marginTop:"-40px", marginRight:"-65px" }}
              />
            </IconButton>
          </Tooltip>
          <MenuCalendarioSelecionar
            anchorMenuCalendario={anchorMenuCalendario}
            setAnchorMenuCalendario={setAnchorMenuCalendario}
            mesSelecionado={mesSelecionado}
            setMesSelecionado={setMesSelecionado}
          />
          
        </div>
            {mostrarPDF && (
              <IconButton
                onClick={() => {
                  setMostrarPDF(false);
                }}
              >
                <Close sx={{ color: "#F4F4F4",marginRight:"-40px" }} />
              </IconButton>
            )}
          </div>
          <div className="body_preview_gerar_pdf">
            {mostrarPDF && (
              <PDFViewer style={{ width: "100%", height: "100%" }}>
                <PDFEntrada
                  mesSelecionado={mesSelecionado}
                  entradas={entradas}
                />
              </PDFViewer>
            )}
            {!mostrarPDF && (
              <Button className="btn-view" style={{backgroundColor: '#4caf50'}}
                variant="contained"
                onClick={() => {
                  setMostrarPDF(true);
                }}
              >
              
                Pré-Visualizar
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GerarPDFEntrada;