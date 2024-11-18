import { Card, CardScroll, Div } from "@vkontakte/vkui";
import react from "react";


export const Carousel = () =>{
    return (
        <Div>
            <CardScroll size="m">
                <Card>
                    <div style={{ height:"250px", width:"200px" }}>А</div>
                </Card>
                <Card>
                    <div style={{ height:"250px" }}>Б</div>
                </Card>
                <Card>
                    <div style={{ height:"250px" }}>В</div>
                </Card>
                <Card>
                    <div style={{ height:"250px" }}>Г</div>
                </Card>
                <Card>
                    <div style={{ height:"250px" }}>Д</div>
                </Card>
                <Card>
                    <div style={{ height:"250px" }}>Е</div>
                </Card>
                <Card>
                    <div style={{ height:"250px" }}>Ж</div>
                </Card>
            </CardScroll>
        </Div>
    );
}