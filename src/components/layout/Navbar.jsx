// Navbar.js
import useIsMobile from "../hooks/useIsMobile";
import MobileNavbar from "./Navbar/MobileNavbar";
import DesktopNavbar from "./Navbar/DesktopNavbar";

export default function Navbar({ isModalVisible }) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileNavbar isModalVisible={isModalVisible} />
  ) : (
    <DesktopNavbar isModalVisible={isModalVisible} />
  );
}
