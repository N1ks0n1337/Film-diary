import { Div, Image, Text, Title, Group } from "@vkontakte/vkui";
import { Icon24BookmarkOutline, Icon24Bookmark } from "@vkontakte/icons";
import "./style.css";
import { useState } from "react";

export const FilmCard = ({ image, title, descripiton, year, time, age }) => {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <Group className="film-card">
      {/* <Div className="film-card-image-block"> */}
      <Image className="film-card-image" src={image} alt={title} size="96" />
      {/* </Div> */}
      <Div className="film-card-text-block">
        <Title className="film-card-title" level="2">
          {title}
        </Title>
        <Div className="film-card-info">
          <Text className="film-class-info-unit" weight="2">
            {year}
          </Text>
          <Text className="film-class-info-unit" weight="2">
            {time}
          </Text>
          <Text className="film-class-info-unit" weight="2">
            {age}
          </Text>
        </Div>
        <Text className="film-class-descr" weight="3">
          {descripiton}
        </Text>
      </Div>

      {isSaved ? (
        <Icon24Bookmark style={{paddingTop: "12px"}} onClick={() => setIsSaved(!isSaved)} />
      ) : (
        <Icon24BookmarkOutline style={{paddingTop: "12px"}} onClick={() => setIsSaved(!isSaved)} />
      )}
    </Group>
  );
};
