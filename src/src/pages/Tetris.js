import React from "react";
import Game from "../components/Game"
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default function (){
    return(
        <div className="Tetris">
            <Game rows={20} columns={10} />
            <Container>
                <div className="social-media-icons">
                {
                    <a href = {"https://github.com/Ewu694/Tetris"}>
                    <FontAwesomeIcon icon = {faGithub} />
                    </a>
                }
                </div>
          </Container>
        </div>
    );
}