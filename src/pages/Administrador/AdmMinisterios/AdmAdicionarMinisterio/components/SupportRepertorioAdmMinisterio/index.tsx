import { Switch } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import {
    SupportAdmMinisterioContainer,
    SupportAdmMinisterioLabel,
    SupportAdmMinisterioSubtitle,
} from "../style";

interface SupportRepertorioAdmMinisterioProps {
    enabled: boolean;
    setEnabled: Dispatch<SetStateAction<boolean>>;
}

const SupportRepertorioAdmMinisterio = ({
    enabled,
    setEnabled,
}: SupportRepertorioAdmMinisterioProps) => {
    return (
        <SupportAdmMinisterioContainer>
            <SupportAdmMinisterioLabel>
                Permitir repertório?
            </SupportAdmMinisterioLabel>
            <SupportAdmMinisterioSubtitle>
                O coordenador poderá adicionar repertórios ao ministério e
                associar determinado repertório a uma escala, você deseja que
                o ministério tenha repertórios?
            </SupportAdmMinisterioSubtitle>
            <Switch
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
            />
        </SupportAdmMinisterioContainer>
    );
};

export default SupportRepertorioAdmMinisterio;
