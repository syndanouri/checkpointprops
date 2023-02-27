
import logo from "./logo.svg";
import { Navbar } from "react-bootstrap";
import "./App.css";
import ItemList from "./components/ItemList/ItemList";
import NavBar from "./components/NavBar/NavBar";


function App() {
const items = [
  {
    image:
      "https://whttps://www.google.fr/imgres?imgurl=https%3A%2F%2Fwww.radiofrance.fr%2Fs3%2Fcruiser-production%2F2020%2F12%2F0943738d-0301-4ddb-a8a7-c442e2bcccb0%2F870x489_gettyimages-1164537342.jpg&imgrefurl=https%3A%2F%2Fwww.radiofrance.fr%2Ffranceinter%2Frefaites-vos-jeux-completer-ses-jeux-de-societe-au-lieu-de-les-jeter-4645674&tbnid=U3n7DgOrK7CBbM&vet=12ahUKEwjijfPMurb9AhV8gScCHVUTAqQQMygBegUIARDbAQ..i&docid=2nDOA5llgJsMjM&w=870&h=489&q=image%20jeux%20&hl=fr&ved=2ahUKEwjijfPMurb9AhV8gScCHVUTAqQQMygBegUIARDbAQww.google.fr/url?sa=i&url=https%3A%2F%2Fwww.vtech-jouets.com%2Fstorio%2Fjeu-storio-pat-patrouille&psig=AOvVaw1aUF8JA7XD1u64g7-UmtEf&ust=1677604339000000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiE-OaZtv0CFQAAAAAdAAAAABAD",
    name: "JeuTablettePat Patrouille",
    price: 400,
  },
  {
    image:
      "https://www.google.fr/url?sa=i&url=https%3A%2F%2Fwww.thimbletoys.com%2Fen%2Fspeelgoed%2Fdetail%2F3830579-vtech-storio-paw-patrol---watch-skye&psig=AOvVaw1aUF8JA7XD1u64g7-UmtEf&ust=1677604339000000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiE-OaZtv0CFQAAAAAdAAAAABAI",
    name: "VTechStorio PAW Patrol",
    price: 500,
  },
  {
    image:
      "https://www.google.fr/url?sa=i&url=https%3A%2F%2Fwww.playpolis.com%2Fvtech%2Fstorio-educational-game-paw-patrol&psig=AOvVaw1aUF8JA7XD1u64g7-UmtEf&ust=1677604339000000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiE-OaZtv0CFQAAAAAdAAAAABAQ",
    name: "Educational Game Paw Patrol",
    price: 600,
  },
  {
    image:
      "https://www.google.fr/url?sa=i&url=https%3A%2F%2Fwww.cdiscount.com%2Fjuniors%2Fjeux-de-societe-cartes%2Fvtech-pat-patrouille-super-pilote-aducatif-paw-pa%2Ff-12079-vte3573205057409.html&psig=AOvVaw1aUF8JA7XD1u64g7-UmtEf&ust=1677604339000000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiE-OaZtv0CFQAAAAAdAAAAABAZ",
    name: "Pat Patrouille SuperPilote",
    price: 700,
  },
  {
    image:
      "https://www.google.fr/url?sa=i&url=https%3A%2F%2Fwww.cdiscount.com%2Fjuniors%2Fjeux-de-societe-cartes%2Fvtech-pat-patrouille-super-pilote-aducatif-paw-pa%2Ff-12079-vte3573205057409.html&psig=AOvVaw1aUF8JA7XD1u64g7-UmtEf&ust=1677604339000000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiE-OaZtv0CFQAAAAAdAAAAABAZ",
    name: "Pat Patrouille SuperPilote",
    price: 700,
  },
  {
    image:
      "https://www.google.fr/url?sa=i&url=https%3A%2F%2Fwww.playpolis.com%2Fvtech%2Fstorio-educational-game-paw-patrol&psig=AOvVaw1aUF8JA7XD1u64g7-UmtEf&ust=1677604339000000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiE-OaZtv0CFQAAAAAdAAAAABAQ",
    name: "Educational Game Paw Patrol",
    price: 600,
  },
  {
    image:
      "https://whttps://www.google.fr/imgres?imgurl=https%3A%2F%2Fwww.radiofrance.fr%2Fs3%2Fcruiser-production%2F2020%2F12%2F0943738d-0301-4ddb-a8a7-c442e2bcccb0%2F870x489_gettyimages-1164537342.jpg&imgrefurl=https%3A%2F%2Fwww.radiofrance.fr%2Ffranceinter%2Frefaites-vos-jeux-completer-ses-jeux-de-societe-au-lieu-de-les-jeter-4645674&tbnid=U3n7DgOrK7CBbM&vet=12ahUKEwjijfPMurb9AhV8gScCHVUTAqQQMygBegUIARDbAQ..i&docid=2nDOA5llgJsMjM&w=870&h=489&q=image%20jeux%20&hl=fr&ved=2ahUKEwjijfPMurb9AhV8gScCHVUTAqQQMygBegUIARDbAQww.google.fr/url?sa=i&url=https%3A%2F%2Fwww.vtech-jouets.com%2Fstorio%2Fjeu-storio-pat-patrouille&psig=AOvVaw1aUF8JA7XD1u64g7-UmtEf&ust=1677604339000000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiE-OaZtv0CFQAAAAAdAAAAABAD",
    name: "JeuTablettePat Patrouille",
    price: 400,
  },
];


  return (
    <div className="App">
   <Navbar/>

   <ItemList items={items}/>
    </div>
  );
}

export default App;
