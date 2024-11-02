import { Checkbox, ModalProps, Skeleton } from "@mui/material";
import ModalH from "components/ModalH";
import useListMinisteriosAdm from "hooks/admin/useListMinisteriosAdm";
import { Dispatch, SetStateAction } from "react";
import { ListMinisterioDTO } from "types/admDTOTypes";
import {
    ModalSelecionarMinisterioContainer,
    ModalSelecionarMinisterioItem,
    ModalSelecionarMinisterioListContainer,
    ModalSelecionarMinisterioLoadingContainer,
    ModalSelecionarMinisterioLoadingItem,
} from "./style";

interface ModalSelecionarMinisterioProps extends ModalProps {
    ministeriosSelected: ListMinisterioDTO[];
    ministeriosIdsSelected?: string[];
    setMinisterios: Dispatch<SetStateAction<ListMinisterioDTO[]>>;
}

const SkeletonMinisterioItem = () => {
    return (
        <ModalSelecionarMinisterioLoadingItem>
            <div className="left">
                <Skeleton width={50} variant="circular" height={50} />
                <Skeleton width={100} height={40} variant="text" />
            </div>
            <Skeleton width={40} height={40} variant="rounded" />
        </ModalSelecionarMinisterioLoadingItem>
    );
};

const ModalSelecionarMinisterio = ({
    ministeriosSelected,
    ministeriosIdsSelected,
    setMinisterios,
    ...props
}: ModalSelecionarMinisterioProps) => {
    const query = useListMinisteriosAdm();
    const ministerioList: ListMinisterioDTO[] = query.data || [];
    const loading = query.isLoading;

    const handleSelectMinisterio = (ministerio: ListMinisterioDTO) => {
        if (ministeriosSelected.includes(ministerio)) {
            let ministeriosProv = ministeriosSelected.filter(
                (item) => item !== ministerio,
            );
            setMinisterios(ministeriosProv);
        } else {
            setMinisterios((prev) => [...prev, ministerio]);
        }
    };

    const verifyIfIsSelected = (ministerio: ListMinisterioDTO) => {
        console.log(ministeriosSelected.some((ministerioSelected) => ministerioSelected.id === ministerio.id))
        return ministeriosSelected.some((ministerioSelected) => ministerioSelected.id === ministerio.id);
    }

    return (
        <ModalH
            {...props}
            showHeader
            headerTitle="Ministerios da comunidade"
            closeModal
        >
            <ModalSelecionarMinisterioContainer>
                {loading ? (
                    <ModalSelecionarMinisterioLoadingContainer>
                        <SkeletonMinisterioItem />
                        <SkeletonMinisterioItem />
                    </ModalSelecionarMinisterioLoadingContainer>
                ) : (
                    <ModalSelecionarMinisterioListContainer>
                        {ministerioList.map((item, index) => {
                            return (
                                <ModalSelecionarMinisterioItem key={index}>
                                    <div className="left">
                                        <img
                                            className="image"
                                            src={item.imagem}
                                            alt={item.nome}
                                        />
                                        <label className="title">{item.nome}</label>
                                    </div>
                                    <Checkbox
                                        onClick={() => handleSelectMinisterio(item)}

                                        checked={verifyIfIsSelected(item)}
                                    />
                                </ModalSelecionarMinisterioItem>
                            );
                        })}
                    </ModalSelecionarMinisterioListContainer>
                )}
            </ModalSelecionarMinisterioContainer>
        </ModalH>
    );
};

export default ModalSelecionarMinisterio;
