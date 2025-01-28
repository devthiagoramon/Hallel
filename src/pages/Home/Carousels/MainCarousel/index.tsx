
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Imagem2 from "../../../../assets/imagemCarrosel2.jpg";
import Imagem3 from "../../../../assets/imagemCarrosel3.jpg";
import Imagem1 from "../../../../assets/imagemCarrossel1.jpg";
import { ContainerCarousel, ImageItem } from "./styles";

interface MainCarouselProps {
    background_image: string;
}

function MainCarousel({ background_image }: MainCarouselProps) {

    const data = [
        { id: "3", image: Imagem3 },
        { id: "1", image: Imagem1 },
        { id: "2", image: Imagem2 },
    ]

    return (
        <ContainerCarousel $background_image={background_image

        }>
            <Swiper
                style={{ width: "100%", height: "100%" }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                modules={[Navigation, Pagination, A11y]}

            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ImageItem src={item.image} alt="slider" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContainerCarousel>
    );
}

export default MainCarousel;
