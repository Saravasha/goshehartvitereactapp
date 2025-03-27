import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import ArtGallery from "../features/ArtGallery";

export default function SidebarComponent() {
  return (
    <>
      <Sidebar>
        <Menu>
          <SubMenu label="Features">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
            <MenuItem>
              Art Gallery
              <ArtGallery />
            </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem></MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
