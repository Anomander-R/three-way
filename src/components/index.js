import Main from "./Main";
import Rules from "./Rules/Rules";
import Score from "./Score/Score";
import ButtonsRPS from "./ButtonsRPS/ButtonsRPS";
import Result from "./Result/Result";
import PlayAgain from "./PlayAgain/PlayAgain";
import Message from "./Message/Message";
import StyledButton from "./StyledButton/StyledButton";
import BoxButton from "./BoxButton/BoxButton";
import Container from "./Container/Container";
import {OuterContainer, GlobalStyle} from "./Container/Container";

import paper from '../assets/images/paper.png';
import paperA from '../assets/images/paper_a.png';
import paperE from '../assets/images/paper_e.png';
import rock from '../assets/images/rock.png';
import rockA from '../assets/images/rock_a.png';
import rockE from '../assets/images/rock_e.png';
import scissors from '../assets/images/scissors.png';
import scissorsA from '../assets/images/scissors_a.png';
import scissorsE from '../assets/images/scissors_e.png';

const elements = {paper, paperA, paperE, rock, rockA, rockE, scissors, scissorsA, scissorsE};

export {Main, Rules, Score, ButtonsRPS, Result, PlayAgain, Message, StyledButton, BoxButton, Container, OuterContainer, GlobalStyle, elements};