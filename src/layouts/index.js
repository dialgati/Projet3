
import React, { useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowDimensions from "../hooks/useWindowsDimention";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const NavbarPaner = styled.div`
  flex: 1;
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  height: 50px;
  transition: padding 0.3s;
  z-index: 2;
  padding: ${({ openedMenu, minViewPort }) =>
  openedMenu ?
    "0px 0px 0 50px" :
    minViewPort ?
      "0px 0px 0 60px" :
      "0px 0px 0 250px"};
`;
const BodyContainer = styled.div`
  display: flex;
`;
const SidebarPaner = styled.div`
  width: ${({ openedMenu }) => (!openedMenu ? "250px" : "60px")};
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0%;
  background-color: #fff;
  color: "#a9b7d0", 
  transition: width 0.3s;
  z-index: 4;
`;
const MenuController = styled.div`
  position: absolute;
  top: 5px;
  right: -10px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
`;
const ContaintOutlet = styled.div`
  width: 100%;
  height: 100vh;
  // background-color: red;
  background-color: rgba(241, 241, 241, 0.624);
  transition: padding 0.3s;
  overflow-x: hidden;
  z-index: 1;
  padding: ${({ openedMenu, minViewPort }) =>
  openedMenu ?
    "70px 10px 0 70px" :
    minViewPort ?
      "70px 10px 0 70px" :
      "70px 10px 0 280px"};
`;
const SpliTemplateScreen = ({ children }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [minViewPort, setMinViewPort] = useState(false);

  const [navbar, sidebar, outlet] = children;

  const sidebarRef = useRef(null);

  const { width } = useWindowDimensions();
  const handleResize = () => {
    setOpenedMenu((v) => !v);
  };

  useMemo(() => {
    if (width <= 900) {
      setMinViewPort(true);
      setOpenedMenu(true);
    } else {
      setMinViewPort(false);
      setOpenedMenu(false);
    }
  }, [width]);

  return (
    <Container>
      <NavbarPaner openedMenu={openedMenu} minViewPort={minViewPort}>
        {navbar}
      </NavbarPaner>
      <BodyContainer>
        <SidebarPaner openedMenu={openedMenu} ref={sidebarRef}>
          <MenuController onClick={handleResize}>
            {openedMenu ? (
              <GiHamburgerMenu className="menu-controller-icon" />
            ) : (
              <GiHamburgerMenu className="menu-controller-icon" />
            )}
          </MenuController>
          {sidebar}
        </SidebarPaner>
        <ContaintOutlet openedMenu={openedMenu} minViewPort={minViewPort}>
          {outlet}
        </ContaintOutlet>
      </BodyContainer>
    </Container>
  );
};

export default SpliTemplateScreen;