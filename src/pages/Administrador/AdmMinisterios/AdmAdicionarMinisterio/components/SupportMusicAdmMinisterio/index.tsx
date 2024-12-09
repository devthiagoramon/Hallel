import { Switch } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { SupportAdmMinisterioContainer, SupportAdmMinisterioLabel, SupportAdmMinisterioSubtitle } from '../style';

interface SupportMusicAdmMinisterioProps {
    enabled: boolean;
    setEnabled: Dispatch<SetStateAction<boolean>>
}

const SupportMusicAdmMinisterio = ({ enabled, setEnabled }: SupportMusicAdmMinisterioProps) => {
    return (
        <SupportAdmMinisterioContainer>
            <SupportAdmMinisterioLabel>
                Permitir músicas?
            </SupportAdmMinisterioLabel>
            <SupportAdmMinisterioSubtitle>
                O coordenador poderá adicionar músicas ao ministerio e
                associar uma música a um repertório, você deseja que
                o ministério tenha músicas?
            </SupportAdmMinisterioSubtitle>
            <Switch
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
            />
        </SupportAdmMinisterioContainer>
    )
}

export default SupportMusicAdmMinisterio