import React, { useContext, useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';

function MenuExampleInvertedSecondary() {
  const {user, logout} = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, changeActive] = useState(path);

  function handleItemClick(event, { name }) {
    changeActive(name);
  }

  const menuBar = user ? (
    <Segment inverted>
      <Menu size="massive" inverted pointing secondary>
        <Menu.Item
          name={user.username}
          active
          as={Link}
          to="/"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            onClick={logout}
          />
        </Menu.Menu>
      </Menu>
    </Segment>
  ) : (
    <Segment inverted>
      <Menu size="massive" inverted pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={handleItemClick}
            as={Link}
            to="/login"
          />
          <Menu.Item
            name="register"
            active={activeItem === "register"}
            onClick={handleItemClick}
            as={Link}
            to="register"
          />
        </Menu.Menu>
      </Menu>
    </Segment>
  )
  return menuBar;
}

export default MenuExampleInvertedSecondary;
