import { Menu } from "antd";
import Icon from "antd/lib/icon";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const RightMenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">
        <a href="">Signin</a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="">Signup</a>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
