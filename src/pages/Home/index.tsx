import ValidateToken from "utils/validateToken";
import {
    HomeContainer,
    HomeWelcomeContainer,
    WelcomeTextContainer
} from "./style";

import wave_homepage from "../../assets/wave-haikei.svg";
import MainCarousel from "./Carousels/MainCarousel";

const Home = () => {
    return (
        <>
            <ValidateToken />
            <HomeContainer>
                <HomeWelcomeContainer>
                    <WelcomeTextContainer>
                        <label className="strong">Seja bem vindo</label>
                        <span className="description">
                            Somos a Comunidade Católica Hallel e recebemos você de
                            braços aberto
                        </span>
                        <MainCarousel background_image={wave_homepage} />
                    </WelcomeTextContainer>
                </HomeWelcomeContainer>
            </HomeContainer>
        </>
    );
};

export default Home;
