import Image from "next/image";
// icons of technologies used in projects
import js from "@/public/icons/js.png";
import react from "@/public/icons/react.png";
import sass from "@/public/icons/sass.png";
import css from "@/public/icons/css3.png";
import html from "@/public/icons/html5.png";
import firebase from "@/public/icons/firebase.png";
import illustrator from "@/public/icons/illustrator.png";
import tailwind from "@/public/icons/tailwind.png";
import express from "@/public/icons/express.png";
import nodejs from "@/public/icons/nodejs.png";
import vercel from "@/public/icons/vercel.png";
import socketio from "@/public/icons/socketio.png";
import nextjs from "@/public/icons/nextjs.png";

// thumbnails of projects
import firebaseProjectThumbnail from "@/public/firebase-budget-tracker.jpg";
import linesProjectThumbnail from "@/public/lines.jpg";
import memoryGameProjectThumbnail from "@/public/memory-online.jpg";
import shootoutProjectThumbnail from "@/public/shooting.jpg";
import ticTacToeProjectThumbnail from "@/public/tic-tac-toe.jpg";
import weatherProjectThumbnail from "@/public/weather.jpg";
import mapProjectThumbnail from "@/public/map.jpg";
import hangmanProjectThumbnail from "@/public/hangman.jpg";
import flagsProjectThumbnail from "@/public/flags.jpg";
import bfsProjectThumbnail from "@/public/bfs.jpg";
import portfolioProjectThumbnail from "@/public/portfolio.jpg";

export function staticIconPath(icon) {
  switch (icon) {
    case "js":
      return <Image alt='js icon' src={js} />;
    case "react":
      return <Image alt='react icon' src={react} />;
    case "sass":
      return <Image alt='sass icon' src={sass} />;
    case "css":
      return <Image alt='css icon' src={css} />;
    case "html":
      return <Image alt='html icon' src={html} />;
    case "firebase":
      return <Image alt='firebase icon' src={firebase} />;
    case "illustrator":
      return <Image alt='illustrator icon' src={illustrator} />;
    case "tailwind":
      return <Image alt='tailwind icon' src={tailwind} />;
    case "express":
      return <Image alt='express icon' src={express} />;
    case "nodejs":
      return <Image alt='nodejs icon' src={nodejs} />;
    case "nextjs":
      return <Image alt='nextjs icon' src={nextjs} />;
    case "vercel":
      return <Image alt='vercel icon' src={vercel} />;
    case "socketio":
      return <Image alt='socketio icon' src={socketio} />;
    default:
      return null;
  }
}

export function staticImagePath(src) {
  const classname =
    "border border-solid border-textColor dark:border-textColorDark rounded-lg";

  switch (src) {
    case "tic-tac-toe":
      return (
        <Image
          alt='Online two player tic-tac-toe game project image'
          src={ticTacToeProjectThumbnail}
          className={classname}
        />
      );
    case "weather":
      return (
        <Image
          alt='Weather app project image'
          src={weatherProjectThumbnail}
          className={classname}
        />
      );
    case "map":
      return (
        <Image
          alt='European countries project image'
          src={mapProjectThumbnail}
          className={classname}
        />
      );
    case "hangman":
      return (
        <Image
          alt='Hangman game project image'
          src={hangmanProjectThumbnail}
          className={classname}
        />
      );
    case "shooting":
      return (
        <Image
          alt='Shootout game project image'
          src={shootoutProjectThumbnail}
          className={classname}
        />
      );
    case "firebase":
      return (
        <Image
          alt='Firebase budget tracker project image'
          src={firebaseProjectThumbnail}
          className={classname}
        />
      );
    case "lines":
      return (
        <Image
          alt='Lines game project image'
          src={linesProjectThumbnail}
          className={classname}
        />
      );
    case "memory":
      return (
        <Image
          alt='Memory game project image'
          src={memoryGameProjectThumbnail}
          className={classname}
        />
      );
    case "flags":
      return (
        <Image
          alt='Guess the flag quiz project image'
          src={flagsProjectThumbnail}
          className={classname}
        />
      );
    case "bfs":
      return (
        <Image
          alt='BFS visualization project image'
          src={bfsProjectThumbnail}
          className={classname}
        />
      );
    case "portfolio":
      return (
        <Image
          alt='Portfolio project image'
          src={portfolioProjectThumbnail}
          className={classname}
        />
      );
    default:
      return null;
  }
}
