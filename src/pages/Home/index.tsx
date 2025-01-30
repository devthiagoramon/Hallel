import { Skeleton } from "@mui/material";
import { useListEventsPublic } from "hooks/useListEventsPublic";
import { CaretRight } from "phosphor-react";
import ValidateToken from "utils/validateToken";
import Banner_HomePage from '../../assets/Banner Homepage Site.svg';
import CardEvent from "./components/CardEvent";
import { EventCardContainer, HomeContainer, SeeMoreEventsContainer, WelcomeCardBannerContainer, WelcomeCardContainer, WelcomeCardDescription, WelcomeCardTextContainer, WelcomeCardTitle } from "./style";


const Home = () => {

    const eventsRequest = useListEventsPublic();
    const isLoading = eventsRequest.isLoading;
    const events = eventsRequest.data;
    const dummySkeletons = [1, 2, 3, 4, 5]

    return (
        <>
            <ValidateToken />
            <HomeContainer>
                <WelcomeCardContainer>
                    <WelcomeCardTextContainer>
                        <WelcomeCardTitle> COMUNIDADE CATÓLICA HALLEL</WelcomeCardTitle>
                        <WelcomeCardDescription>Seja bem vindo a Comunidade Católica Hallel, recebemos você de braços aberto</WelcomeCardDescription>
                    </WelcomeCardTextContainer>
                    <WelcomeCardBannerContainer>
                        <img src={Banner_HomePage} alt="Banner Homepage" />
                    </WelcomeCardBannerContainer>
                </WelcomeCardContainer>
                <EventCardContainer>
                    {isLoading ?
                        <>
                            {dummySkeletons.map((_, index) => {
                                return <Skeleton variant="rounded" sx={{ width: "100%", height: "100%" }} key={index} />
                            })}
                        </>
                        :
                        <>
                            {events?.slice(0, 4)?.map((item, index) => {
                                return <CardEvent event={item} key={index} />
                            })}
                            <SeeMoreEventsContainer>
                                <button className="icon_button">
                                    <CaretRight size={48} color="#252525" />
                                </button>
                                <span className="text">
                                    Ver mais
                                </span>
                            </SeeMoreEventsContainer>
                        </>}
                </EventCardContainer>

            </HomeContainer >
        </>
    );
};

export default Home;
