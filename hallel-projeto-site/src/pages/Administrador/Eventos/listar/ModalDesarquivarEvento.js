import { Box, Button, Modal } from "@mui/material";
import axios from "axios";
import React from "react";
import { eventoDesarquivar } from "../../../../api/uris/EventosURLS";
import {desarquivarArquivoService} from "../../../../service/EventoService";

const ModalDesarquivarEvento = (props) => {
  const {
    idEvento,
    OpenModalDesarquivar,
    setOpenModalDesarquivar,
    setAtualizarTabela,
    atualizarTabela,
  } = props;

  const styleInnerModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "#F2F2F8",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
  };

  const desarquivarEvento = () => {
    desarquivarArquivoService(idEvento).then((response) => {
      if(response){
        // Deu certo
      }else{
        // Deu errado
      }
    });
    setAtualizarTabela(!atualizarTabela);
    setOpenModalDesarquivar(false);
  };

  const handleCloseModal = () => {
    setOpenModalDesarquivar(false);
  };

  return (
    <Modal open={OpenModalDesarquivar} onClose={handleCloseModal}>
      <Box sx={styleInnerModal}>
        <div className="head_edit_despesas_evento">
          <label>Certeza de desarquivar?</label>
        </div>
        <div className="body_delete_despesas_evento">
          <Button variant="contained" color="error" onClick={desarquivarEvento}>
            Sim
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ABB2B9" }}
            onClick={handleCloseModal}
          >
            Não
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalDesarquivarEvento;
