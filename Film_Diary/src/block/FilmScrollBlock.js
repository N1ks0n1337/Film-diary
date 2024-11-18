import { Group, Header, Panel, PanelHeader } from "@vkontakte/vkui";
import react from "react";
import { Carousel } from "../components/Carousel/Carousel";

export const FilmScrollBlock = ({title}) => {
  return (
    <Group header={<Header mode="primary">{title}</Header>}>
      <Carousel />
    </Group>
  );
};
