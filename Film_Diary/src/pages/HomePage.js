import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  View,
  Avatar,
  CellButton,
} from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import PropTypes from "prop-types";
import { FilmScrollBlock } from "../block/FilmScrollBlock";
import React, { useState } from "react";
import { FilmCard } from "../components/FilmCard/FilmCard";
import Cat from "../img/Cat.jpg";
import { RateAndAdd } from "../components/RateAndAdd/RateAndAdd";
export const HomePage = ({ id, fetchedUser }) => {
  const { photo_200, city, first_name, last_name } = { ...fetchedUser };
  const routeNavigator = useRouteNavigator();
  const [activePanel, setActivePanel] = useState("panel1");

  return (
    <View activePanel={activePanel}>
      <Panel id={id}>

        <PanelHeader>Главная</PanelHeader>
        <FilmCard
          image={Cat}
          title="Зловещие мертвецы"
          year="1981 год"
          time="1ч 25м"
          age="18+"
          descripiton="Пятеро друзей отправляются в хижину в лесу, где они неосознанно выпускают одержимых плотью демонов."

        />
        <RateAndAdd />
        <FilmScrollBlock title="Фильмы для семьи" />
        <FilmScrollBlock title="Драмматические" />
        <FilmScrollBlock title="Экшн" />

      </Panel>
    </View>
  );
};

HomePage.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};
