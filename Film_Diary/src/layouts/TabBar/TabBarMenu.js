import { Div, Group, Tabbar, TabbarItem } from "@vkontakte/vkui";
import {
  Icon28AddOutline,
  Icon28UserCircleOutline,
  Icon28HomeOutline,
} from "@vkontakte/icons";
import { useState } from "react";

export const TabBarMenu = ({ activePanel, setActivePanel }) => {
  const [text, setText] = useState("one");

  return (
    <Div>
      <Tabbar style={{ position: "bottom", margin: "0 0", height: "60px" }}>
        <TabbarItem
          selected={activePanel === 'panel1'} 
          onClick={() => setActivePanel('panel1')} 
          text="Главная"
        >
          <Icon28HomeOutline />
        </TabbarItem>
        <TabbarItem
         selected={activePanel === 'panel2'} 
         onClick={() => setActivePanel('panel2')} 
          text="Добавить"
        >
          <Icon28AddOutline />
        </TabbarItem>
        <TabbarItem
          selected={activePanel === 'panel3'} 
          onClick={() => setActivePanel('panel3')} 
          text="Профиль"
        >
          <Icon28UserCircleOutline />
        </TabbarItem>
      </Tabbar>
    </Div>
  );
};
