import { yupResolver } from "@hookform/resolvers/yup";
import Textarea from "@mui/joy/Textarea";
import { Button, TextField } from "@mui/material";
import { editarMinisterioV2AdmService, listMinisterioByIdV2AdmService } from "api/admin/ministerios/admMinisterioAPI";
import AdmListSelectUserH from "components/AdmListSelectUserH";
import { LabelInputH } from "components/LabelInputH/style";
import SelectImageContainerH from "components/SelectImageContainerH";
import { useSnackbar } from "notistack";
import AdmBodyH from "pages/Administrador/components/AdmBodyH";
import AdmContainerH from "pages/Administrador/components/AdmContainerH";
import AdmHeaderH from "pages/Administrador/components/AdmHeaderH";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { MembroResponseListDTO, MinisterioAdmDTOV2 } from "types/admDTOTypes";
import * as yup from "yup";
import ObjetivosAdmMinisterio from "../AdmAdicionarMinisterio/components/ObjetivosAdmMinisterio";
import SupportDancaAdmMinisterio from "../AdmAdicionarMinisterio/components/SupportDancaAdmMinisterio";
import SupportMusicAdmMinisterio from "../AdmAdicionarMinisterio/components/SupportMusicAdmMinisterio";
import SupportRepertorioAdmMinisterio from "../AdmAdicionarMinisterio/components/SupportRepertorioAdmMinisterio";
import { AdmMinisterioForms } from "../AdmAdicionarMinisterio/style";

const schema = yup
    .object({
        nome: yup.string().required("Digite o nome do ministério!"),
        descricao: yup
            .string()
            .required("Digite a descrição do ministério!"),
        objetivos: yup
            .array()
            .min(1, "Adicione um objetivo do ministério!"),
    })
    .required();

const AdmEditarMinisterio = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({ resolver: yupResolver(schema) });

    const { idMinisterio } = useParams();

    const [imageMinisterio, setImageMinisterio] = useState<
        string | ArrayBuffer | undefined
    >("");
    const [objetivos, setObjetivos] = useState<string[]>([]);
    const [coordenador, setCoordenador] =
        useState<MembroResponseListDTO>();
    const [viceCoordenador, setViceCoordenador] =
        useState<MembroResponseListDTO>();

    const { enqueueSnackbar } = useSnackbar();
    const navigation = useNavigate();

    const [enabledRepertorio, setEnabledRepertorio] =
        useState<boolean>(false);
    const [enabledMusic, setEnabledMusic] = useState<boolean>(false);
    const [enabledDance, setEnabledDance] = useState<boolean>(false);

    // Errors states
    const [errorImagem, setErrorImagem] = useState<boolean>(false);
    const [errorCoordenador, setErrorCoordenador] =
        useState<boolean>(false);
    const [errorViceCoordenador, setErrorViceCoordenador] =
        useState<boolean>(false);

    const onSubmit = async (data: any) => {
        if (!idMinisterio) {
            return;
        }
        if (!validateForms()) {
            return;
        }

        try {
            const dto: MinisterioAdmDTOV2 = {
                coordenadorId: coordenador?.id || "",
                descricao: data.descricao,
                imagem: imageMinisterio?.toString() || "",
                nome: data.nome,
                objetivos,
                viceCoordenadorId: viceCoordenador?.id || "",
                hasRepertorio: enabledRepertorio,
                hasDance: enabledDance && enabledRepertorio,
                hasMusic: enabledMusic && enabledRepertorio,
            };

            const response = await editarMinisterioV2AdmService(idMinisterio, dto);
            if (response) {
                enqueueSnackbar("Ministério editado com sucesso", { variant: "success" });
                navigation(-1);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const validateForms = () => {
        let value = true;
        if (!imageMinisterio || imageMinisterio == "") {
            setErrorImagem(true);
            value = false;
        } else {
            setErrorImagem(false);
        }
        if (!coordenador) {
            setErrorCoordenador(true);
            value = false;
        } else {
            setErrorCoordenador(false);
        }
        if (!viceCoordenador) {
            setErrorViceCoordenador(true);
            value = false;
        } else {
            setErrorViceCoordenador(false);
        }
        return value;
    };

    useEffect(() => {
        async function listMinisterioById() {
            if (!idMinisterio) {
                return;
            }
            try {
                const response = await listMinisterioByIdV2AdmService(idMinisterio);
                setObjetivos(response.objetivos)
                setImageMinisterio(response.imagem)
                setValue("descricao", response.descricao)
                setValue("nome", response.nome)
                setValue("objetivos", response.objetivos)
                setEnabledDance(response.hasDance);
                setEnabledMusic(response.hasMusic);
                setEnabledRepertorio(response.hasRepertorio);
            } catch (error) {
                console.error(error)
            }
        }
        listMinisterioById();
    }, [])


    return (
        <AdmContainerH>
            <AdmHeaderH title="Editar ministério" goBack></AdmHeaderH>
            <AdmBodyH>
                <LabelInputH>Banner do ministério</LabelInputH>
                <SelectImageContainerH
                    value={imageMinisterio}
                    setValue={setImageMinisterio}
                    minWidth="600"
                    minHeigth="400"
                    style={{ width: 600, height: 400 }}
                />
                <AdmMinisterioForms onSubmit={handleSubmit(onSubmit)}>
                    <LabelInputH>Nome do ministério</LabelInputH>
                    <TextField
                        error={!!errors["nome"]}
                        helperText={!!errors["nome"]?.message}
                        inputProps={{ ...register("nome") }}
                    />
                    <LabelInputH>Descrição do ministério</LabelInputH>
                    <Textarea
                        error={!!errors["descricao"]}
                        defaultValue={errors["descricao"]?.message}
                        slotProps={{ textarea: { ...register("descricao") } }}
                        minRows={3}
                    />
                    <ObjetivosAdmMinisterio
                        error={!!errors["objetivos"]}
                        objetivos={objetivos}
                        setObjetivos={setObjetivos}
                    />
                    <SupportRepertorioAdmMinisterio
                        enabled={enabledRepertorio}
                        setEnabled={setEnabledRepertorio}
                    />
                    {enabledRepertorio ? (
                        <>
                            <SupportMusicAdmMinisterio
                                enabled={enabledMusic}
                                setEnabled={setEnabledMusic}
                            />
                            <SupportDancaAdmMinisterio
                                enabled={enabledDance}
                                setEnabled={setEnabledDance}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                    <LabelInputH>Coordenador do ministério</LabelInputH>
                    <AdmListSelectUserH
                        containerStyle={{
                            borderColor: errorCoordenador
                                ? "#F44336"
                                : "rgba(0, 0, 0, 0.1)",
                        }}
                        selectedMember={coordenador}
                        onSelect={(user) => setCoordenador(user)}
                    />
                    <LabelInputH>Vice-coordenador do ministério</LabelInputH>
                    <AdmListSelectUserH
                        containerStyle={{
                            borderColor: errorViceCoordenador
                                ? "#F44336"
                                : "rgba(0, 0, 0, 0.1)",
                        }}
                        selectedMember={viceCoordenador}
                        onSelect={(user) => setViceCoordenador(user)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: 200, mt: 4, mb: 4 }}
                        type="submit"
                    >
                        Editar
                    </Button>
                </AdmMinisterioForms>
            </AdmBodyH>
        </AdmContainerH>
    );
}

export default AdmEditarMinisterio