import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import useOutsideClick from "../utils/useOutsideClick";
import Image from "next/image";
import {
  BsSearch,
  BsHeart,
  BsX,
  BsList,
  BsArrowLeftShort,
} from "react-icons/bs";
import NavbarLink from "./NavbarLink";
import Link from "next/link";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  svg {
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.16));
  }
`;

const Navigation = styled.nav`
  width: 100%;
  max-width: 1240px;
  height: 40px;
  margin: 16px 0;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1250px) {
    padding: 0 10px;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  cursor: pointer;
  @media (max-width: 1250px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 40px;
  position: relative;
  img {
    object-fit: contain;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex: 2;
  height: 100%;
  align-items: center;

  li:first-child {
    margin-left: 0;
  }

  li {
    margin-left: 60px;
  }

  @media (max-width: 1250px) {
    display: none;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button:first-child {
    margin-right: 15px;
  }
  flex: 1;

  @media (max-width: 1250px) {
    button:first-child {
      display: none;
      margin-right: 0px;
    }
  }
`;

const MenuButtons = styled.div`
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  display: none;
  @media (max-width: 1250px) {
    display: flex;
  }
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  margin-right: ${(props) => props.openSearch && "0px !important"};

  img {
    object-fit: contain;
    border-radius: 10px;
  }
`;

const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  margin-right: ${(props) => props.openSearch && "0px !important"};

  img {
    object-fit: contain;
    border-radius: 10px;
  }
`;

const SearchBar = styled.div`
  width: 95%;
  max-width: 600px;
  height: 40px;
  position: relative;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  @media (max-width: 1250px) {
    display: none;
  }

  svg {
    cursor: pointer;
  }
`;

const SearchBarMob = styled.div`
  width: 95%;
  max-width: 600px;
  height: 40px;
  position: relative;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  display: none;
  @media (max-width: 1250px) {
    display: flex;
    width: 100%;
    max-width: calc(100% - 20px);
    margin-bottom: 15px;
  }

  svg {
    cursor: pointer;
  }
`;

const Search = styled.input`
  width: calc(100% - 65px);
  font-size: 16px;
  height: 40px;
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
  border: none;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
`;

const SearchDiv = styled.div`
  width: 95%;
  max-width: 600px;
  height: 150px;
  position: absolute;
  top: 65px;
  left: 50%;
  z-index: 96;
  transform: translateX(-50%);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
  padding: 12px 0;

  svg {
    cursor: pointer;
  }

  @media (max-width: 1250px) {
    display: none;
  }
`;

const SearchDivMob = styled.div`
  width: 95%;
  max-width: 600px;
  height: 150px;
  position: absolute;
  z-index: 96;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: none;
  flex-direction: column;
  padding: 12px 0;

  svg {
    cursor: pointer;
  }

  @media (max-width: 1250px) {
    width: 100%;
    display: flex;
    max-width: calc(100% - 20px);
    margin-bottom: 15px;
  }
`;

const ShList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ShItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
  padding: 0 12px;
  margin-bottom: 8px;
`;

const HamMenu = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  position: fixed;
  left: 0;
  top: 65px;
  z-index: 99;
  display: none;
  flex-direction: column;
  padding: 20px 0;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aeaeae;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }
  ::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: inset 0px 0px 2px #e0e0e0;
  }
  @media (max-width: 1250px) {
    display: flex;
  }
`;

const HamMenuItem = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.textColorPrimary};
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin: 45px 0;
  cursor: pointer;
`;

function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openHam, setOpenHam] = useState(false);
  const [inputValue, setInputValue] = useState(undefined);
  const [inputValue2, setInputValue2] = useState(undefined);
  const [onMenu, setOnMenu] = useState();

  const activeSub = [
    {
      value: "Möbel",
      leftMenus: [
        {
          value: "Wohnzimmer",
          data: [
            { value: "Sofas & Couches" },
            { value: "Sessel" },
            { value: "Stühle" },
            { value: "Sitzbänke" },
            { value: "Hocker" },
            { value: "Stühle" },
            { value: "Tische" },
            { value: "Wohnwände" },
            { value: "Sideboards" },
            { value: "TV-HiFi-Möbel" },
            { value: "Regale" },
            { value: "Vitrine" },
            { value: "Schränke" },
            { value: "Teppiche" },
            { value: "Wohntextilien" },
            { value: "Wohnzimmerlampen" },
            { value: "Barmöbel" },
            { value: "Truhen" },
            { value: "Kamine" },
            { value: "Deko" },
          ],
        },
        {
          value: "Schlafzimmer",
          data: [
            { value: "Betten" },
            { value: "Matratzen" },
            { value: "Lattenroste" },
            { value: "Schlafsofas" },
            { value: "Kleiderschränke" },
            { value: "Kommoden" },
            { value: "Nachttische" },
            { value: "Schlafzimmerserien" },
            { value: "Schlafzimmertextilien" },
            { value: "Schlafzimmerlampen" },
            { value: "Bettbänke & -truhen" },
            { value: "Teppiche" },
            { value: "Spiegel" },
            { value: "Aufbewahrung" },
            { value: "Deko" },
          ],
        },

        {
          value: "Esszimmer",
          data: [
            { value: "Esstische" },
            { value: "Stühle" },
            { value: "Hocker" },
            { value: "Essgruppen" },
            { value: "Sitzbänke" },
            { value: "Regale" },
            { value: "Vitrine" },
            { value: "Schränke" },
            { value: "Sideboards" },
            { value: "Barmöbel" },
            { value: "Servierwagen" },
            { value: "Lampen" },
            { value: "Deko" },
          ],
        },

        {
          value: "Kinderzimmer",
          data: [
            { value: "Babyzimmer" },
            { value: "Jugendzimmer" },
            { value: "Kindermatratzen" },
            { value: "Kinderzimmer-Sets" },
            { value: "Baby- & Kinderbetten" },
            { value: "Kinderzimmerschränke" },
            { value: "Kinderzimmerregale" },
            { value: "Kinderzimmerkommoden" },
            { value: "Kindertische" },
            { value: "Kindersessel & -sofas" },
            { value: "Kinder- & Hochstühle" },
            { value: "Kinderzimmerlampen" },
            { value: "Aufbewahrung" },
            { value: "Spielzeug" },
            { value: "Deko" },
            { value: "Textilien" },
          ],
        },

        {
          value: "Badezimmer",
          data: [
            { value: "Badmöbel-Set" },
            { value: "Badregale" },
            { value: "Waschbecken" },
            { value: "Waschtische" },
            { value: "Spiegel" },
            { value: "Armaturen" },
            { value: "Badewanne & Whirpools" },
            { value: "Duschen" },
            { value: "WCs" },
            { value: "Badlampen" },
            { value: "Badaccessoires" },
            { value: "Kinderzimmerlampen" },
            { value: "Textilien" },
            { value: "Deko" },
          ],
        },

        {
          value: "Arbeitszimmer",
          data: [
            { value: "Bürotische" },
            { value: "Bürostühle & Chefsessel" },
            { value: "Büroschränke" },
            { value: "Büroregale" },
            { value: "Büromöbel-Serien" },
            { value: "Raumteiler" },
            { value: "Tafel & Boards" },
            { value: "Sideboards" },
            { value: "Bürolampen" },
            { value: "Deko" },
          ],
        },

        {
          value: "Flur",
          data: [
            { value: "Gardaroben" },
            { value: "Schuhschränke" },
            { value: "Sideboards" },
            { value: "Regale" },
            { value: "Flur-Sets" },
            { value: "Bänke" },
            { value: "Schränke" },
            { value: "Flurlampen" },
            { value: "Fußmatten" },
            { value: "Schirmständer" },
            { value: "Deko" },
          ],
        },
      ],
    },
    {
      value: "Garten",
      leftMenus: [
        {
          value: "Gartenmöbel",
          data: [
            { value: "Gartenmöbel-Sets" },
            { value: "Loungemöbel" },
            { value: "Gartensofas" },
            { value: "Gartensessel" },
            { value: "Gartenliegen" },
            { value: "Gartenhocker" },
            { value: "Gartentische" },
            { value: "Gartenstühle" },
            { value: "Gartenbänke" },
            { value: "Sonneninseln" },
            { value: "Sonnenliegen" },
            { value: "Hängematten" },
            { value: "Hollywoodschaukeln" },
            { value: "Balkon" },
          ],
        },
        {
          value: "Gartenausstattung",
          data: [
            { value: "Sonnenschirme & Markisen" },
            { value: "Pavillons" },
            { value: "Zäune & Sichtschutz" },
            { value: "Grills & Gartenkamine" },
            { value: "Gewächshäuser" },
            { value: "Gerätehäuser" },
            { value: "Gartenhäuser" },
            { value: "Swimmingpools" },
            { value: "Brunnen & Teiche" },
            { value: "Heizstrahler" },
            { value: "Außenleuchten" },
            { value: "Outdoorteppiche" },
            { value: "Pflanzen & Pflanzenpflege" },
            { value: "Tierbedarf" },
            { value: "Sitzauflagen" },
            { value: "Schutzhüllen" },
          ],
        },
      ],
    },
    {
      value: "Leuchten",
      leftMenus: [
        {
          value: "Innenleuchten",
          data: [
            { value: "Deckenlampen" },
            { value: "Pendelleuchten" },
            { value: "Kronenleuchter" },
            { value: "Tischlampen" },
            { value: "Stehlampen" },
            { value: "Wandleuchten" },
            { value: "Deckenstrahler" },
            { value: "Einbauleuchten" },
            { value: "Seil- & Schienensysteme" },
            { value: "Deckenventilatoren" },
            { value: "Kinderzimmerlampen" },
            { value: "Badezimmerlampen" },
            { value: "Bürolampen" },
            { value: "Lichterketten" },
            { value: "Möbelleuchten" },
          ],
        },
        {
          value: "Außenleuchten",
          data: [
            { value: "Gartenlaternen" },
            { value: "Außenwandleuchten" },
            { value: "Außendeckenleuchten" },
            { value: "Solarleuchten" },
            { value: "Außenleuchten mit Bewegungsmelder" },
            { value: "Außenhängeleuchten" },
            { value: "LED-Außenleuchten" },
            { value: "Mastleuchter" },
            { value: "Wege- & Pollerleuchten" },
            { value: "Gartenbeleuchtung" },
            { value: "Terassen- & Stufenbeleuchtung" },
            { value: "Brunnen- & Teichbeleuchtung" },
            { value: "Bürolampen" },
            { value: "Lichterketten" },
            { value: "Campingleuchten & Laternen" },
          ],
        },
        {
          value: "LED-Leuchten",
          data: [
            { value: "LED-Stehlampen" },
            { value: "LED-Leuchtmittel" },
            { value: "LED--Seil- & Schienensysteme" },
            { value: "LED-Wandleuchten" },
            { value: "LED-Einbauleuchten" },
            { value: "LED-Außenleuchten" },
          ],
        },
        {
          value: "Leuchtmittel",
          data: [
            { value: "Smart Home Leuchtmittel" },
            { value: "LED- Leuchtmittel" },
            { value: "E27 Leuchtmittel" },
            { value: "E14 Leuchtmittel" },
            { value: "GU10 Leuchtmittel" },
            { value: "G9 Leuchtmittel" },
          ],
        },
      ],
    },
    {
      value: "Accessoires",
      leftMenus: [
        {
          value: "Deko",
          data: [
            { value: "Blumentöpfe" },
            { value: "Kunstblumen" },
            { value: "Pflanzen" },
            { value: "Kerzen & Kerzenständer" },
            { value: "Bilder & Rahmen" },
            { value: "Spiegel" },
            { value: "Wandgestaltung" },
            { value: "Figuren & Skulpturen" },
            { value: "Vasen" },
            { value: "Uhre" },
            { value: "Weihnachten" },
            { value: "Ostern" },
            { value: "Lichterketten" },
            { value: "Aufbewahrung" },
            { value: "Windlichter" },
            { value: "Tabletts" },
            { value: "Tapeten" },
            { value: "Wandobjekte" },
          ],
        },
        {
          value: "Badaccessoires",
          data: [
            { value: "Duschzubehör" },
            { value: "Badewannenzubehör" },
            { value: "WC-Zubehör" },
            { value: "Bad- & Duschhocker" },
            { value: "Handtuchhalter" },
            { value: "Seifenspender & -schalen" },
            { value: "Zahnputzbecher" },
            { value: "Bad-Accessoires-Set" },
            { value: "Toilettenpapierhalter" },
            { value: "WC-Bürsten" },
            { value: "Haken" },
            { value: "Wäschekörbe" },
            { value: "Haltegriffe" },
            { value: "Waagen" },
          ],
        },
      ],
    },
    {
      value: "Textilien",
      leftMenus: [
        {
          value: "Teppiche",
          data: [
            { value: "Kurzflor-Teppiche" },
            { value: "Hochflor-Teppiche" },
            { value: "Läufer" },
            { value: "Shaggy-Teppiche" },
            { value: "Orientteppiche" },
            { value: "Teppichböden" },
            { value: "Kinderteppiche" },
            { value: "Wollteppiche" },
            { value: "Vintage-Teppiche" },
            { value: "Runde Teppiche" },
            { value: "Wandteppiche" },
            { value: "Bambus-Teppiche" },
            { value: "Teppichfliesen" },
            { value: "Fußmatten" },
            { value: "Felle & Fellteppiche" },
            { value: "Outdoor-Teppiche" },
          ],
        },
        {
          value: "Gardinen & Vorhänge",
          data: [
            { value: "Gardinen" },
            { value: "Schiebegardinen & -vorhänge" },
            { value: "Scheibengardinen" },
            { value: "Schlaufenschals" },
            { value: "Vorhänge" },
            { value: "Gardinenstangen" },
            { value: "Fertiggardinen" },
            { value: "Ösenschals" },
            { value: "Blickdichte Vorhänge" },
            { value: "Raffhalter" },
            { value: "Zubehör für Gardinen" },
          ],
        },
        {
          value: "Kissen",
          data: [
            { value: "Dekokissen" },
            { value: "Sitzkissen" },
            { value: "Kissenbezüge" },
            { value: "Kinderkissen" },
            { value: "Kissenfüllung" },
            { value: "Outdoorkissen" },
            { value: "Kopfkissen" },
            { value: "Nackenroller" },
            { value: "Nackenstützkissen" },
            { value: "Kopfkissenbezüge" },
          ],
        },
        {
          value: "Bettwaren",
          data: [
            { value: "Kopfkissen" },
            { value: "Nackenroller" },
            { value: "Nackenstützkissen" },
            { value: "Kopfkissenbezüge" },
            { value: "Tagesdecken & Bettüberwürfe" },
            { value: "Daunendecken" },
            { value: "Naturfaserdecken" },
            { value: "Vierjahreszeitendecken" },
            { value: "Microfaserdecken" },
            { value: "Steppbetten" },
            { value: "Matrazen" },
            { value: "Wolldecken" },
            { value: "Felldecken" },
            { value: "Plaids" },
            { value: "Baumwolldecken" },
            { value: "Fleecedecken" },
            { value: "Bettwäsche-Garnituren" },
            { value: "Wendebettwäsche" },
            { value: "Kopfkissenbezüge" },
            { value: "Kinderbettwäsche" },
            { value: "Spannbettlaken" },
            { value: "Matratzenschoner" },
          ],
        },
        {
          value: "Jalousien & Rollos",
          data: [
            { value: "Raffrollos" },
            { value: "Plissees" },
            { value: "Doppelrollos" },
            { value: "Seitenzugrollos" },
            { value: "Jalousien" },
            { value: "Springrollos" },
            { value: "Verdunklungsrollos" },
          ],
        },
        {
          value: "Badtextilien",
          data: [
            { value: "Badgarnituren-Set" },
            { value: "Läufer & Matten" },
            { value: "Badteppich" },
            { value: "Handtuch-Sets" },
            { value: "Badetücher" },
            { value: "Saunatücher" },
            { value: "Strandtücher" },
            { value: "Gästehandtücher" },
            { value: "Waschlappen" },
            { value: "Duschvorhänge" },
            { value: "Bademäntel" },
          ],
        },
        {
          value: "Küchentextilien",
          data: [
            { value: "Tischläufer" },
            { value: "Tischdecken" },
            { value: "Tischsets" },
            { value: "Servietten" },
            { value: "Geschirrtücher" },
            { value: "Küchenschürzen" },
            { value: "Topflappen & Ofenhandtücher" },
          ],
        },
      ],
    },
    {
      value: "Küche",
      leftMenus: [
        {
          value: "Küchenschränke",
          data: [
            { value: "Küchenzeilen" },
            { value: "Buffets & Buffetschränke" },
            { value: "Unterschränke" },
            { value: "Hängeschränke" },
            { value: "Anrichten" },
            { value: "Umbauschränke" },
            { value: "Vorratsschränke" },
            { value: "Spülenschränke" },
          ],
        },
        {
          value: "Küchenregale",
          data: [
            { value: "Weinregale" },
            { value: "Wandregale" },
            { value: "Standregale" },
            { value: "Gewürzregale" },
          ],
        },
        {
          value: "Bar-Möbel",
          data: [
            { value: "Barhocker" },
            { value: "Stehtische" },
            { value: "Barschränke" },
            { value: "Flaschenregale & -halter" },
          ],
        },
        {
          value: "Aufbewahrung",
          data: [
            { value: "Vorratsdosen" },
            { value: "Brotkästen" },
            { value: "Etageren" },
            { value: "Halter & Haken" },
          ],
        },
        {
          value: "Besteck & Geschirr",
          data: [
            { value: "Kombiservice" },
            { value: "Kaffeeservice" },
            { value: "Tafelservice" },
            { value: "Teller" },
            { value: "Schüsseln" },
            { value: "Schalen" },
            { value: "Tassen" },
            { value: "Becher" },
            { value: "Kindergeschirr" },
            { value: "Messer" },
            { value: "Besteck-Sets" },
            { value: "Messerblöcke" },
            { value: "Besteckkästen" },
            { value: "Trinkgläser" },
            { value: "Messer-Sets" },
            { value: "Weingläserr" },
            { value: "Spiritousen- & Schnapsgläser" },
            { value: "Champagner- & Sektgläser" },
            { value: "Biergläser" },
            { value: "Karaffen & Dekanter" },
          ],
        },
      ],
    },
    {
      value: "Marken",
      leftMenus: [],
    },
  ];
  const [menuData, setMenuData] = useState(activeSub);
  const router = useRouter();
  const ref = useRef();
  const ref2 = useRef();
  const refInputs = useRef();

  useEffect(() => {}, [inputValue, inputValue2]);
  useOutsideClick(ref, () => {
    setInputValue2(undefined);
    refInputs.current.value = "";
  });
  useOutsideClick(ref2, () => {
    setInputValue(undefined);
    refInputs.current.value = "";
  });

  return (
    <Container>
      <Navigation>
        <MenuButtons>
          {!openHam ? (
            <MenuButton
              onClick={() => {
                setOpenHam(true);
                document.getElementsByTagName("body")[0].style =
                  "overflow:hidden";
              }}
              openSearch={openSearch}
            >
              <BsList size={30} color="#9C9C9C" />
            </MenuButton>
          ) : (
            <MenuButton
              onClick={() => {
                setOpenHam(false);
                setMenuData(activeSub);
                document.getElementsByTagName("body")[0].style =
                  "overflow:unset";
              }}
              openSearch={openSearch}
            >
              <BsX size={30} color="#9C9C9C" />
            </MenuButton>
          )}
        </MenuButtons>
        {openHam && (
          <HamMenu>
            {menuData.map((e, index) => (
              <HamMenuItem
                onClick={() => {
                  setOnMenu(true);
                  if (e.value === "Marken") {
                    router.push("/store/ecksofas");
                    setOpenHam(false);
                    setMenuData(activeSub);
                    document.getElementsByTagName("body")[0].style =
                      "overflow:unset";
                  } else {
                    if (activeSub.some((k) => k.value === e.value)) {
                      setMenuData(
                        menuData.filter((d) => d.value === e.value)[0].leftMenus
                      );
                    } else {
                      if (menuData[0].data) {
                        setMenuData(
                          menuData.filter((d) => d.value === e.value)[0].data
                        );
                      } else {
                        router.push("/store/ecksofas");
                        setOpenHam(false);
                        setMenuData(activeSub);
                        document.getElementsByTagName("body")[0].style =
                          "overflow:unset";
                      }
                    }
                  }
                }}
                key={index}
              >
                {e.value}
              </HamMenuItem>
            ))}
          </HamMenu>
        )}
        <LogoContainer onClick={() => router.push("/")}>
          <Logo>
            <Image
              src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1620672673/Polygon_11_c6pgu9.png"
              alt="Moebel Logo"
              layout="fill"
            />
          </Logo>
        </LogoContainer>
        {!openSearch && (
          <NavLinks>
            <NavbarLink value="Möbel" activeSub={activeSub} />
            <NavbarLink value="Garten" activeSub={activeSub} />
            <NavbarLink value="Leuchten" activeSub={activeSub} />
            <NavbarLink value="Accessoires" activeSub={activeSub} />
            <NavbarLink value="Textilien" activeSub={activeSub} />
            <NavbarLink value="Küche" activeSub={activeSub} />
            <NavbarLink value="Marken" activeSub={activeSub} />
          </NavLinks>
        )}
        {openSearch && (
          <>
            <SearchBar>
              <BsSearch size={20} color="#9C9C9C" />
              <Search
                ref={refInputs}
                onChange={(e) => setInputValue(e.target.value)}
              ></Search>
              <BsX
                size={25}
                color="#9C9C9C"
                onClick={() => {
                  setOpenSearch(false);
                  setInputValue(undefined);
                  setInputValue2(undefined);
                }}
              />
            </SearchBar>
            {inputValue && (
              <SearchDiv ref={ref2}>
                <ShList>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                </ShList>
              </SearchDiv>
            )}
          </>
        )}
        <NavButtons>
          {!openSearch && (
            <NavButton
              style={{ paddingTop: "1px" }}
              onClick={() => setOpenSearch(true)}
            >
              <BsSearch size={24} color="#9C9C9C" />
            </NavButton>
          )}
          {openHam ? (
            onMenu && (
              <NavButton
                onClick={() => {
                  setMenuData(activeSub);
                  setOnMenu(null);
                }}
                openSearch={openSearch}
              >
                <BsArrowLeftShort size={38} color="#9C9C9C" />
              </NavButton>
            )
          ) : (
            <NavButton
              onClick={() => router.push("/wunschliste")}
              style={{ paddingTop: "4px" }}
              openSearch={openSearch}
            >
              <BsHeart size={24} color="#9C9C9C" />
            </NavButton>
          )}
        </NavButtons>
      </Navigation>
      <SearchBarMob>
        <Search
          ref={refInputs}
          onChange={(e) => setInputValue2(e.target.value)}
        ></Search>
        <BsSearch size={24} color="#9C9C9C" />
      </SearchBarMob>
      {inputValue2 && (
        <SearchDivMob ref={ref}>
          <ShList>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
          </ShList>
        </SearchDivMob>
      )}
    </Container>
  );
}

export default Navbar;
