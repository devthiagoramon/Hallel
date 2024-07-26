import MainCarousel from "./Carousels/MainCarousel"
import { ContainerCards, ContainerItens, ContainerSchedules, ContainerWelcome, HomeContainer, TittleWelcome } from "./style"


const Home = () => {
    return (
        <HomeContainer>
            <ContainerItens>
                <ContainerWelcome>
                    <TittleWelcome>Bem-vindo à Comunidade Católica Hallel</TittleWelcome>
                    <MainCarousel />
                </ContainerWelcome>
                <ContainerSchedules>

                </ContainerSchedules>
            </ContainerItens>
            <ContainerCards>
                
            </ContainerCards>
        </HomeContainer>
    )
}

export default Home