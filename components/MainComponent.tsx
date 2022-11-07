import RightMenu from "./RightMenu";
import { useState } from "react";
import LeftMenu from "./Leftmenu";
import { Drawer, Button } from "antd";

const MainComponent = () => {
  const [current, setCurrent] = useState("mail");
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };
  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="">logo</a>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          open={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};
export default MainComponent;
