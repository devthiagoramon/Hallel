import { Switch } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { SupportAdmMinisterioContainer, SupportAdmMinisterioLabel, SupportAdmMinisterioSubtitle } from '../style';

interface SupportDancaAdmMinisterioProps {
    enabled: boolean;
    setEnabled: Dispatch<SetStateAction<boolean>>
}

const SupportDancaAdmMinisterio = ({ enabled, setEnabled }: SupportDancaAdmMinisterioProps) => {
    return (
        <SupportAdmMinisterioContainer>
            <SupportAdmMinisterioLabel>
                Permitir danças?
            </SupportAdmMinisterioLabel>
            <SupportAdmMinisterioSubtitle>
                O coordenador poderá adicionar danças ao ministério e
                associar uma dança a um repertório, você deseja que
                o ministério tenha danças?
            </SupportAdmMinisterioSubtitle>
            <Switch
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
            />
        </SupportAdmMinisterioContainer>
    )
}

export default SupportDancaAdmMinisterio