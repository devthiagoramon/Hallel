import { AddCircle } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import "./doacao_objeto.css";

const DoacaoObjetoADM = () => {
  return (
    <div>
      <div className="containerDoacaoObj">
        <div className="containerCardsDoacaoObj">
          <div className="headerCardsDoacaoObj">
            <label>Doações de objeto</label>
            <div className="addDoacaoHeaderCardsDoacao">
              <IconButton color="secundary" aria-label="Add doação">
                <AddCircle style={{ width: "55px", height: "55px" }} />
              </IconButton>
              <span>Adicionar doação</span>
            </div>
            <button style={{ display: "none" }}></button>
          </div>
          <div className="bodyCardsDoacaoObj">
            <Card
              sx={{ minWidth: 250, maxWidth: 300, backgroundColor: "#fafafa" }}
            >
              <CardActionArea>
                <CardContent style={{ backgroundColor: "#74E753" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    Recebido
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="auto"
                  image="data:image/jpeg;base64,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"
                  alt="Imagem card"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cesta básica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{ minWidth: 250, maxWidth: 300, backgroundColor: "#fafafa" }}
            >
              <CardActionArea>
                <CardContent style={{ backgroundColor: "#F72727" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    Não Recebido
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="auto"
                  image="data:image/jpeg;base64,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"
                  alt="Imagem card"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cesta básica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoacaoObjetoADM;
