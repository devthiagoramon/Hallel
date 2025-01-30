import { ArrowUpRight } from "phosphor-react";
import { ListEventsDTO } from "types/dtoTypes";
import { CardEventContainer } from "./style";

interface CardEventProps {
    event: ListEventsDTO;
}

const CardEvent = ({ event }: CardEventProps) => {
    return (
        <CardEventContainer>
            <img src={event.imagem} alt={`image-event-${event.id}`} />
            <label className="title">{event.titulo}</label>
            <button className="floating_redirect_button">
                <ArrowUpRight color="#252525" size={28} />
            </button>
            <div className="informative_chip">
                <span className="text">Evento</span>
            </div>
        </CardEventContainer>
    )
}

export default CardEvent