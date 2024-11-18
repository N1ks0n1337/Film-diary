import React, { useState } from "react";
import { View, Panel, PanelHeader, Group, CellButton, Tabbar } from "@vkontakte/vkui";
import { TabBarMenu } from '../layouts/TabBar/TabBarMenu';
import { HomePage } from "../pages/HomePage";
export const Home = ({ id, fetchedUser }) => {
  const [activePanel, setActivePanel] = useState("panel1");
  return (
    <>
      <View activePanel={activePanel}>
        <Panel id="panel1">
          <HomePage id="panel1" />
        </Panel>
        <Panel id="panel2">
          <PanelHeader>Panel 2</PanelHeader>
          <Group>
            <div style={{ height: 200 }} />
            <CellButton onClick={() => setActivePanel("panel3")}>
              Go to panel 3
            </CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
        <Panel id="panel3">
          <PanelHeader>Panel 3</PanelHeader>
          <Group>
            <div style={{ height: 200 }} />
            <CellButton onClick={() => setActivePanel("panel1")}>
              Back to panel 1
            </CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>

      </View>
      <TabBarMenu activePanel={activePanel} setActivePanel={setActivePanel} />
    </>
  );
};
