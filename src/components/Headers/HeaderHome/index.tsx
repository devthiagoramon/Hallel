import { Divider, Menu, MenuItem, Modal } from "@mui/material";
import { useClick } from "@szhsin/react-menu";
import ProfileMenu from "components/ProfileMenu";
import {
    ArrowLineUpRight,
    CaretDown,
    CaretUp,
    List,
} from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isTokenExist } from "utils/mainUtils";
import Logo from "../../../assets/logoHallelHD.png";
import MenuProfileMobile from "./components/MenuProfileMobile";
import {
    ButtonTittle,
    ContainerHeader,
    ContainerItens,
    ContainerModalMobileMenu,
    HamburgerMobileHeader,
    Image,
    MobileMenu,
    Title,
} from "./styles";

interface Props {
    titles: string[];
}

const HeaderHome = ({ titles }: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(
        null,
    );
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const buttonModalProfileRef = useRef<HTMLButtonElement>(null);
    const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
    const anchorProps = useClick(
        isOpenProfileMenu,
        setIsOpenProfileMenu,
    );

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement>,
        index: number,
    ) => {
        if (index !== 4 && index !== 5) {
            switch (index) {
                case 0:
                    handleNavigation("/");
                    break;
                case 1:
                    handleNavigation("/eventos");
                    break;
                case 2:
                    handleNavigation("/ministerios");
                    break;
                case 3:
                    handleNavigation("/doacoes");
                    break;
                case 6:
                    handleNavigation("/loja");
                    break;
                default:
                    return;
            }
        }
        if (openMenuIndex === index) {
            setAnchorEl(null);
            setOpenMenuIndex(null);
        } else {
            setAnchorEl(event.currentTarget);
            setOpenMenuIndex(index);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenuIndex(null);
    };

    useEffect(() => {
        const handleResize = () => {
            if (showMobileMenu && window.innerWidth > 768)
                setShowMobileMenu(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [window]);

    return (
        <ContainerHeader>
            <Image src={Logo} />
            <HamburgerMobileHeader
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                <List className="icon" />
            </HamburgerMobileHeader>

            <Modal
                open={showMobileMenu}
                onClose={() => setShowMobileMenu(false)}
            >
                <ContainerModalMobileMenu>
                    <MobileMenu>
                        {titles.map((title, index) => (
                            <button className="button">{title}</button>
                        ))}
                        <div style={{ marginTop: 8 }}></div>
                        {isTokenExist() ? (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    columnGap: 16,
                                    alignItems: "center",
                                }}
                            >
                                <button
                                    ref={buttonModalProfileRef}
                                    {...anchorProps}
                                    className="button"
                                >
                                    Perfil
                                </button>
                                <MenuProfileMobile
                                    isOpen={isOpenProfileMenu}
                                    setIsOpen={setIsOpenProfileMenu}
                                    ref={buttonModalProfileRef}
                                />
                            </div>
                        ) : (
                            <>
                                <Divider
                                    variant="middle"
                                    flexItem
                                    orientation="horizontal"
                                />
                                <button className="button-cadastro">Cadastrar</button>
                                <button className="button">Login</button>
                            </>
                        )}
                    </MobileMenu>
                </ContainerModalMobileMenu>
            </Modal>

            <ContainerItens>
                {titles.map((title, index) => (
                    <div key={index}>
                        <ButtonTittle
                            onClick={(event: any) => handleClick(event, index)}
                        >
                            <Title>{title}</Title>
                            {[3].includes(index) &&
                                (openMenuIndex === index ? (
                                    <CaretUp color="#252525" size={23} />
                                ) : (
                                    <CaretDown color="#252525" size={23} />
                                ))}
                        </ButtonTittle>
                        {[3].includes(index) && openMenuIndex === index && (
                            <Menu
                                id={`basic-menu-${index}`}
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{
                                    "aria-labelledby": `basic-button-${index}`,
                                }}
                                sx={{
                                    "& .MuiPaper-root": {
                                        backgroundColor: "#06612E",
                                        color: "white",
                                        width: 170,
                                    },
                                }}
                            >
                                {index === 3 ? (
                                    <>
                                        <MenuItem
                                            onClick={() => {
                                                handleNavigation("fundadora");
                                                handleClose();
                                            }}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            Fundadora <ArrowLineUpRight size={20} />
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => {
                                                handleNavigation("quem-somos");
                                                handleClose();
                                            }}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            Quem somos <ArrowLineUpRight size={20} />
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => {
                                                handleNavigation("sorteio");
                                                handleClose();
                                            }}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            Sorteio <ArrowLineUpRight size={20} />
                                        </MenuItem>
                                    </>
                                ) : index === 5 ? (
                                    <>
                                        <MenuItem
                                            onClick={handleClose}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            Cursos <ArrowLineUpRight size={20} />
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleClose}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            Meus cursos <ArrowLineUpRight size={20} />
                                        </MenuItem>
                                    </>
                                ) : null}
                            </Menu>
                        )}
                    </div>
                ))}
                {isTokenExist() ? (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            columnGap: 16,
                        }}
                    >
                        <Divider
                            variant="middle"
                            flexItem
                            orientation="vertical"
                        />
                        <ProfileMenu />
                    </div>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            columnGap: 16,
                        }}
                    >
                        <Divider
                            variant="middle"
                            flexItem
                            orientation="vertical"
                        />
                        <ButtonTittle
                            onClick={() => navigate("/signIn")}
                            style={{ backgroundColor: "#033117" }}
                        >
                            <Title style={{ color: "#FAFAFA" }}>Cadastrar</Title>
                        </ButtonTittle>
                        <ButtonTittle onClick={() => navigate("/signUp")}>
                            <Title>Login</Title>
                        </ButtonTittle>
                    </div>
                )}
            </ContainerItens>
        </ContainerHeader>
    );
};

export default HeaderHome;
