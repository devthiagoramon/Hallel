import React, {useMemo, useState, useEffect} from "react";
import InfoEventos from "../MaisInformacoes";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Skeleton, TextField} from "@mui/material";
import "./eventoUser.css";
import dayjs from "dayjs";
import {listarTodosEventosUsuarioService} from "../../../service/EventoService";

function EventoUser() {
    const [showInfos, setshowInfos] = useState(false);
    const [eventoEspc, setEventoEspc] = useState();
    const [eventos, setEventos] = useState();
    useMemo(() => {
         listarTodosEventosUsuarioService().then((response) => {
            setEventos(response)
        });
    }, [])

    function alterarEventoEspc(item) {
        setEventoEspc("");
        setshowInfos(true);
        setEventoEspc(item);
    }


    const filterEventos = (event) => {
        const query = event.target.value;
        var updateList = [...eventos];
        updateList = updateList.filter((item) => {
            return (
                item.titulo.toLowerCase().toString().indexOf(query.toLowerCase()) !==
                -1
            );
        });
        setEventos(updateList);
    };

    return (
        <div className="painelEventosUser">
            {showInfos ? (
                <InfoEventos
                    evento={eventoEspc}
                    setEvento={setEventoEspc}
                    hide={() => setshowInfos(false)}
                />
            ) : (
                <div>
                    <h1 className="TituloEventoUser">Eventos</h1>

                    <div className="contPesquisaEventoUser">
                        <TextField
                            id="pesquisaEvents"
                            type="text"
                            variant="outlined"
                            size="small"
                            label="Pesquisa..."
                            onChange={filterEventos}
                        />
                    </div>

                    <div className="CorpoEventoUser">
                        {eventos.length === 0 ? (
                            <div className="loaderEventoCarroseulEventos">
                                <Skeleton width={250} height={500}/>{" "}
                                <Skeleton width={250} height={500}/>{" "}
                                <Skeleton width={250} height={500}/>{" "}
                                <Skeleton width={250} height={500}/>{" "}
                                <Skeleton width={250} height={500}/>
                                <Skeleton width={250} height={500}/>
                                <Skeleton width={250} height={500}/>
                                <Skeleton width={250} height={500}/>
                            </div>
                        ) : (
                            eventos.map((evento) => {
                                return (
                                    <div className="grupo-evento">
                                        <div
                                            className="card"
                                            style={{width: "18rem", maxHeight: "480px"}}
                                        >
                                            <img
                                                src={evento.imagem}
                                                className="card-img-top"
                                                alt="..."
                                                style={{maxHeight: "200px", minHeight: "200px"}}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{evento.titulo}</h5>
                                                <p className="card-text">{evento.descricao}</p>
                                                <br/>
                                                <p className="card-text">
                                                    Data: {dayjs(evento.date).format("DD/MM/YYYY")}
                                                </p>
                                                <br/>
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => alterarEventoEspc(evento)}
                                                >
                                                    Saber mais
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default EventoUser;
