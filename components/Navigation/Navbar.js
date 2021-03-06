import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useOutsideClick from '../utils/useOutsideClick';
import Image from 'next/image';
import { BsSearch, BsHeart, BsX, BsList, BsArrowLeftShort } from 'react-icons/bs';
import NavbarLink from './NavbarLink';
import Link from 'next/link';
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
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
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  margin-right: ${(props) => props.openSearch && '0px !important'};

  svg {
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.16));
  }
`;

const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  margin-right: ${(props) => props.openSearch && '0px !important'};

  svg {
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.16));
  }
`;

const SearchBar = styled.div`
  width: 95%;
  max-width: 600px;
  height: 40px;
  position: relative;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
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
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.16));
  }
`;

const SearchBarMob = styled.div`
  width: 95%;
  max-width: 600px;
  height: 40px;
  position: relative;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
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
  font-family: 'Nunito', sans-serif;
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
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
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
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
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
  font-family: 'Nunito', sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
  padding: 0 12px;
  margin-bottom: 8px;
`;

const HamMenu = styled.div`
  width: 100%;
  /* height: calc(100vh - 64px); */
  height: calc(100 * var(--vh) - 64px);
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  position: fixed;
  left: 0;
  top: 65px;
  z-index: 99;
  display: none;
  flex-direction: column;
  padding: 0px 0px 20px 0;
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
    /*  justify-content: space-around;
    align-items: center; */
  }
`;

const HamMenuItem = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.textColorPrimary};
  font-family: 'Nunito', sans-serif;
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
  const [beforeState, setBeforeState] = useState();
  const activeSub = [
    {
      value: 'M??bel',
      leftMenus: [
        {
          value: 'Wohnzimmer',
          data: [
            { value: 'Sofas & Couches' },
            { value: 'Sessel' },
            { value: 'St??hle' },
            { value: 'Sitzb??nke' },
            { value: 'Hocker' },
            { value: 'St??hle' },
            { value: 'Tische' },
            { value: 'Wohnw??nde' },
            { value: 'Sideboards' },
            { value: 'TV-HiFi-M??bel' },
            { value: 'Regale' },
            { value: 'Vitrine' },
            { value: 'Schr??nke' },
            { value: 'Teppiche' },
            { value: 'Wohntextilien' },
            { value: 'Wohnzimmerlampen' },
            { value: 'Barm??bel' },
            { value: 'Truhen' },
            { value: 'Kamine' },
            { value: 'Deko' }
          ]
        },
        {
          value: 'Schlafzimmer',
          data: [
            { value: 'Betten' },
            { value: 'Matratzen' },
            { value: 'Lattenroste' },
            { value: 'Schlafsofas' },
            { value: 'Kleiderschr??nke' },
            { value: 'Kommoden' },
            { value: 'Nachttische' },
            { value: 'Schlafzimmerserien' },
            { value: 'Schlafzimmertextilien' },
            { value: 'Schlafzimmerlampen' },
            { value: 'Bettb??nke & -truhen' },
            { value: 'Teppiche' },
            { value: 'Spiegel' },
            { value: 'Aufbewahrung' },
            { value: 'Deko' }
          ]
        },

        {
          value: 'Esszimmer',
          data: [
            { value: 'Esstische' },
            { value: 'St??hle' },
            { value: 'Hocker' },
            { value: 'Essgruppen' },
            { value: 'Sitzb??nke' },
            { value: 'Regale' },
            { value: 'Vitrine' },
            { value: 'Schr??nke' },
            { value: 'Sideboards' },
            { value: 'Barm??bel' },
            { value: 'Servierwagen' },
            { value: 'Lampen' },
            { value: 'Deko' }
          ]
        },

        {
          value: 'Kinderzimmer',
          data: [
            { value: 'Babyzimmer' },
            { value: 'Jugendzimmer' },
            { value: 'Kindermatratzen' },
            { value: 'Kinderzimmer-Sets' },
            { value: 'Baby- & Kinderbetten' },
            { value: 'Kinderzimmerschr??nke' },
            { value: 'Kinderzimmerregale' },
            { value: 'Kinderzimmerkommoden' },
            { value: 'Kindertische' },
            { value: 'Kindersessel & -sofas' },
            { value: 'Kinder- & Hochst??hle' },
            { value: 'Kinderzimmerlampen' },
            { value: 'Aufbewahrung' },
            { value: 'Spielzeug' },
            { value: 'Deko' },
            { value: 'Textilien' }
          ]
        },

        {
          value: 'Badezimmer',
          data: [
            { value: 'Badm??bel-Set' },
            { value: 'Badregale' },
            { value: 'Waschbecken' },
            { value: 'Waschtische' },
            { value: 'Spiegel' },
            { value: 'Armaturen' },
            { value: 'Badewanne & Whirpools' },
            { value: 'Duschen' },
            { value: 'WCs' },
            { value: 'Badlampen' },
            { value: 'Badaccessoires' },
            { value: 'Kinderzimmerlampen' },
            { value: 'Textilien' },
            { value: 'Deko' }
          ]
        },

        {
          value: 'Arbeitszimmer',
          data: [
            { value: 'B??rotische' },
            { value: 'B??rost??hle & Chefsessel' },
            { value: 'B??roschr??nke' },
            { value: 'B??roregale' },
            { value: 'B??rom??bel-Serien' },
            { value: 'Raumteiler' },
            { value: 'Tafel & Boards' },
            { value: 'Sideboards' },
            { value: 'B??rolampen' },
            { value: 'Deko' }
          ]
        },

        {
          value: 'Flur',
          data: [
            { value: 'Gardaroben' },
            { value: 'Schuhschr??nke' },
            { value: 'Sideboards' },
            { value: 'Regale' },
            { value: 'Flur-Sets' },
            { value: 'B??nke' },
            { value: 'Schr??nke' },
            { value: 'Flurlampen' },
            { value: 'Fu??matten' },
            { value: 'Schirmst??nder' },
            { value: 'Deko' }
          ]
        }
      ]
    },
    {
      value: 'Garten',
      leftMenus: [
        {
          value: 'Gartenm??bel',
          data: [
            { value: 'Gartenm??bel-Sets' },
            { value: 'Loungem??bel' },
            { value: 'Gartensofas' },
            { value: 'Gartensessel' },
            { value: 'Gartenliegen' },
            { value: 'Gartenhocker' },
            { value: 'Gartentische' },
            { value: 'Gartenst??hle' },
            { value: 'Gartenb??nke' },
            { value: 'Sonneninseln' },
            { value: 'Sonnenliegen' },
            { value: 'H??ngematten' },
            { value: 'Hollywoodschaukeln' },
            { value: 'Balkon' }
          ]
        },
        {
          value: 'Gartenausstattung',
          data: [
            { value: 'Sonnenschirme & Markisen' },
            { value: 'Pavillons' },
            { value: 'Z??une & Sichtschutz' },
            { value: 'Grills & Gartenkamine' },
            { value: 'Gew??chsh??user' },
            { value: 'Ger??teh??user' },
            { value: 'Gartenh??user' },
            { value: 'Swimmingpools' },
            { value: 'Brunnen & Teiche' },
            { value: 'Heizstrahler' },
            { value: 'Au??enleuchten' },
            { value: 'Outdoorteppiche' },
            { value: 'Pflanzen & Pflanzenpflege' },
            { value: 'Tierbedarf' },
            { value: 'Sitzauflagen' },
            { value: 'Schutzh??llen' }
          ]
        }
      ]
    },
    {
      value: 'Leuchten',
      leftMenus: [
        {
          value: 'Innenleuchten',
          data: [
            { value: 'Deckenlampen' },
            { value: 'Pendelleuchten' },
            { value: 'Kronenleuchter' },
            { value: 'Tischlampen' },
            { value: 'Stehlampen' },
            { value: 'Wandleuchten' },
            { value: 'Deckenstrahler' },
            { value: 'Einbauleuchten' },
            { value: 'Seil- & Schienensysteme' },
            { value: 'Deckenventilatoren' },
            { value: 'Kinderzimmerlampen' },
            { value: 'Badezimmerlampen' },
            { value: 'B??rolampen' },
            { value: 'Lichterketten' },
            { value: 'M??belleuchten' }
          ]
        },
        {
          value: 'Au??enleuchten',
          data: [
            { value: 'Gartenlaternen' },
            { value: 'Au??enwandleuchten' },
            { value: 'Au??endeckenleuchten' },
            { value: 'Solarleuchten' },
            { value: 'Au??enleuchten mit Bewegungsmelder' },
            { value: 'Au??enh??ngeleuchten' },
            { value: 'LED-Au??enleuchten' },
            { value: 'Mastleuchter' },
            { value: 'Wege- & Pollerleuchten' },
            { value: 'Gartenbeleuchtung' },
            { value: 'Terassen- & Stufenbeleuchtung' },
            { value: 'Brunnen- & Teichbeleuchtung' },
            { value: 'B??rolampen' },
            { value: 'Lichterketten' },
            { value: 'Campingleuchten & Laternen' }
          ]
        },
        {
          value: 'LED-Leuchten',
          data: [
            { value: 'LED-Stehlampen' },
            { value: 'LED-Leuchtmittel' },
            { value: 'LED--Seil- & Schienensysteme' },
            { value: 'LED-Wandleuchten' },
            { value: 'LED-Einbauleuchten' },
            { value: 'LED-Au??enleuchten' }
          ]
        },
        {
          value: 'Leuchtmittel',
          data: [
            { value: 'Smart Home Leuchtmittel' },
            { value: 'LED- Leuchtmittel' },
            { value: 'E27 Leuchtmittel' },
            { value: 'E14 Leuchtmittel' },
            { value: 'GU10 Leuchtmittel' },
            { value: 'G9 Leuchtmittel' }
          ]
        }
      ]
    },
    {
      value: 'Accessoires',
      leftMenus: [
        {
          value: 'Deko',
          data: [
            { value: 'Blument??pfe' },
            { value: 'Kunstblumen' },
            { value: 'Pflanzen' },
            { value: 'Kerzen & Kerzenst??nder' },
            { value: 'Bilder & Rahmen' },
            { value: 'Spiegel' },
            { value: 'Wandgestaltung' },
            { value: 'Figuren & Skulpturen' },
            { value: 'Vasen' },
            { value: 'Uhre' },
            { value: 'Weihnachten' },
            { value: 'Ostern' },
            { value: 'Lichterketten' },
            { value: 'Aufbewahrung' },
            { value: 'Windlichter' },
            { value: 'Tabletts' },
            { value: 'Tapeten' },
            { value: 'Wandobjekte' }
          ]
        },
        {
          value: 'Badaccessoires',
          data: [
            { value: 'Duschzubeh??r' },
            { value: 'Badewannenzubeh??r' },
            { value: 'WC-Zubeh??r' },
            { value: 'Bad- & Duschhocker' },
            { value: 'Handtuchhalter' },
            { value: 'Seifenspender & -schalen' },
            { value: 'Zahnputzbecher' },
            { value: 'Bad-Accessoires-Set' },
            { value: 'Toilettenpapierhalter' },
            { value: 'WC-B??rsten' },
            { value: 'Haken' },
            { value: 'W??schek??rbe' },
            { value: 'Haltegriffe' },
            { value: 'Waagen' }
          ]
        }
      ]
    },
    {
      value: 'Textilien',
      leftMenus: [
        {
          value: 'Teppiche',
          data: [
            { value: 'Kurzflor-Teppiche' },
            { value: 'Hochflor-Teppiche' },
            { value: 'L??ufer' },
            { value: 'Shaggy-Teppiche' },
            { value: 'Orientteppiche' },
            { value: 'Teppichb??den' },
            { value: 'Kinderteppiche' },
            { value: 'Wollteppiche' },
            { value: 'Vintage-Teppiche' },
            { value: 'Runde Teppiche' },
            { value: 'Wandteppiche' },
            { value: 'Bambus-Teppiche' },
            { value: 'Teppichfliesen' },
            { value: 'Fu??matten' },
            { value: 'Felle & Fellteppiche' },
            { value: 'Outdoor-Teppiche' }
          ]
        },
        {
          value: 'Gardinen & Vorh??nge',
          data: [
            { value: 'Gardinen' },
            { value: 'Schiebegardinen & -vorh??nge' },
            { value: 'Scheibengardinen' },
            { value: 'Schlaufenschals' },
            { value: 'Vorh??nge' },
            { value: 'Gardinenstangen' },
            { value: 'Fertiggardinen' },
            { value: '??senschals' },
            { value: 'Blickdichte Vorh??nge' },
            { value: 'Raffhalter' },
            { value: 'Zubeh??r f??r Gardinen' }
          ]
        },
        {
          value: 'Kissen',
          data: [
            { value: 'Dekokissen' },
            { value: 'Sitzkissen' },
            { value: 'Kissenbez??ge' },
            { value: 'Kinderkissen' },
            { value: 'Kissenf??llung' },
            { value: 'Outdoorkissen' },
            { value: 'Kopfkissen' },
            { value: 'Nackenroller' },
            { value: 'Nackenst??tzkissen' },
            { value: 'Kopfkissenbez??ge' }
          ]
        },
        {
          value: 'Bettwaren',
          data: [
            { value: 'Kopfkissen' },
            { value: 'Nackenroller' },
            { value: 'Nackenst??tzkissen' },
            { value: 'Kopfkissenbez??ge' },
            { value: 'Tagesdecken & Bett??berw??rfe' },
            { value: 'Daunendecken' },
            { value: 'Naturfaserdecken' },
            { value: 'Vierjahreszeitendecken' },
            { value: 'Microfaserdecken' },
            { value: 'Steppbetten' },
            { value: 'Matrazen' },
            { value: 'Wolldecken' },
            { value: 'Felldecken' },
            { value: 'Plaids' },
            { value: 'Baumwolldecken' },
            { value: 'Fleecedecken' },
            { value: 'Bettw??sche-Garnituren' },
            { value: 'Wendebettw??sche' },
            { value: 'Kopfkissenbez??ge' },
            { value: 'Kinderbettw??sche' },
            { value: 'Spannbettlaken' },
            { value: 'Matratzenschoner' }
          ]
        },
        {
          value: 'Jalousien & Rollos',
          data: [
            { value: 'Raffrollos' },
            { value: 'Plissees' },
            { value: 'Doppelrollos' },
            { value: 'Seitenzugrollos' },
            { value: 'Jalousien' },
            { value: 'Springrollos' },
            { value: 'Verdunklungsrollos' }
          ]
        },
        {
          value: 'Badtextilien',
          data: [
            { value: 'Badgarnituren-Set' },
            { value: 'L??ufer & Matten' },
            { value: 'Badteppich' },
            { value: 'Handtuch-Sets' },
            { value: 'Badet??cher' },
            { value: 'Saunat??cher' },
            { value: 'Strandt??cher' },
            { value: 'G??stehandt??cher' },
            { value: 'Waschlappen' },
            { value: 'Duschvorh??nge' },
            { value: 'Badem??ntel' }
          ]
        },
        {
          value: 'K??chentextilien',
          data: [
            { value: 'Tischl??ufer' },
            { value: 'Tischdecken' },
            { value: 'Tischsets' },
            { value: 'Servietten' },
            { value: 'Geschirrt??cher' },
            { value: 'K??chensch??rzen' },
            { value: 'Topflappen & Ofenhandt??cher' }
          ]
        }
      ]
    },
    {
      value: 'K??che',
      leftMenus: [
        {
          value: 'K??chenschr??nke',
          data: [
            { value: 'K??chenzeilen' },
            { value: 'Buffets & Buffetschr??nke' },
            { value: 'Unterschr??nke' },
            { value: 'H??ngeschr??nke' },
            { value: 'Anrichten' },
            { value: 'Umbauschr??nke' },
            { value: 'Vorratsschr??nke' },
            { value: 'Sp??lenschr??nke' }
          ]
        },
        {
          value: 'K??chenregale',
          data: [
            { value: 'Weinregale' },
            { value: 'Wandregale' },
            { value: 'Standregale' },
            { value: 'Gew??rzregale' }
          ]
        },
        {
          value: 'Bar-M??bel',
          data: [
            { value: 'Barhocker' },
            { value: 'Stehtische' },
            { value: 'Barschr??nke' },
            { value: 'Flaschenregale & -halter' }
          ]
        },
        {
          value: 'Aufbewahrung',
          data: [
            { value: 'Vorratsdosen' },
            { value: 'Brotk??sten' },
            { value: 'Etageren' },
            { value: 'Halter & Haken' }
          ]
        },
        {
          value: 'Besteck & Geschirr',
          data: [
            { value: 'Kombiservice' },
            { value: 'Kaffeeservice' },
            { value: 'Tafelservice' },
            { value: 'Teller' },
            { value: 'Sch??sseln' },
            { value: 'Schalen' },
            { value: 'Tassen' },
            { value: 'Becher' },
            { value: 'Kindergeschirr' },
            { value: 'Messer' },
            { value: 'Besteck-Sets' },
            { value: 'Messerbl??cke' },
            { value: 'Besteckk??sten' },
            { value: 'Trinkgl??ser' },
            { value: 'Messer-Sets' },
            { value: 'Weingl??serr' },
            { value: 'Spiritousen- & Schnapsgl??ser' },
            { value: 'Champagner- & Sektgl??ser' },
            { value: 'Biergl??ser' },
            { value: 'Karaffen & Dekanter' }
          ]
        }
      ]
    },
    {
      value: 'Marken',
      leftMenus: []
    }
  ];
  const [menuData, setMenuData] = useState(activeSub);
  const router = useRouter();
  const ref = useRef();
  const ref2 = useRef();
  const refInputs = useRef();

  useEffect(() => {}, [inputValue, inputValue2]);
  useOutsideClick(ref, () => {
    setInputValue2(undefined);
    refInputs.current.value = '';
  });
  useOutsideClick(ref2, () => {
    setInputValue(undefined);
    refInputs.current.value = '';
  });

  return (
    <Container>
      <Navigation>
        <MenuButtons>
          {!openHam ? (
            <MenuButton
              onClick={() => {
                setOpenHam(true);
                document.getElementsByTagName('body')[0].style = 'overflow:hidden';
              }}
              openSearch={openSearch}>
              <BsList size={30} color="#9C9C9C" />
            </MenuButton>
          ) : (
            <MenuButton
              onClick={() => {
                setOpenHam(false);
                setMenuData(activeSub);
                setOnMenu(null);
                document.getElementsByTagName('body')[0].style = 'overflow:unset';
              }}
              openSearch={openSearch}>
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
                  if (e.value === 'Marken') {
                    router.push('/store/ecksofas');
                    setOpenHam(false);
                    setMenuData(activeSub);
                    document.getElementsByTagName('body')[0].style = 'overflow:unset';
                  } else {
                    if (activeSub.some((k) => k.value === e.value)) {
                      setBeforeState(menuData);
                      setMenuData(menuData.filter((d) => d.value === e.value)[0].leftMenus);
                    } else {
                      if (menuData[0].data) {
                        setBeforeState(menuData);
                        setMenuData(menuData.filter((d) => d.value === e.value)[0].data);
                      } else {
                        router.push('/store/ecksofas');
                        setOpenHam(false);
                        setMenuData(activeSub);
                        document.getElementsByTagName('body')[0].style = 'overflow:unset';
                      }
                    }
                  }
                }}
                key={index}>
                {e.value}
              </HamMenuItem>
            ))}
          </HamMenu>
        )}
        <LogoContainer onClick={() => router.push('/')}>
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
            <NavbarLink value="M??bel" activeSub={activeSub} />
            <NavbarLink value="Garten" activeSub={activeSub} />
            <NavbarLink value="Leuchten" activeSub={activeSub} />
            <NavbarLink value="Accessoires" activeSub={activeSub} />
            <NavbarLink value="Textilien" activeSub={activeSub} />
            <NavbarLink value="K??che" activeSub={activeSub} />
            <NavbarLink value="Marken" activeSub={activeSub} />
          </NavLinks>
        )}
        {openSearch && (
          <>
            <SearchBar>
              <BsSearch size={24} color="#9C9C9C" />
              <Search ref={refInputs} onChange={(e) => setInputValue(e.target.value)}></Search>
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
            <NavButton style={{ paddingTop: '1px' }} onClick={() => setOpenSearch(true)}>
              <BsSearch size={24} color="#9C9C9C" />
            </NavButton>
          )}
          {openHam ? (
            onMenu && (
              <NavButton
                onClick={() => {
                  setBeforeState(activeSub);
                  setMenuData(beforeState);
                  if (activeSub[0].value === beforeState[0].value) {
                    setOnMenu(null);
                  }
                }}
                openSearch={openSearch}>
                <BsArrowLeftShort size={38} color="#9C9C9C" />
              </NavButton>
            )
          ) : (
            <NavButton
              onClick={() => router.push('/wunschliste')}
              style={{ paddingTop: '4px' }}
              openSearch={openSearch}>
              <BsHeart size={24} color="#9C9C9C" />
            </NavButton>
          )}
        </NavButtons>
      </Navigation>
      <SearchBarMob>
        <Search ref={refInputs} onChange={(e) => setInputValue2(e.target.value)}></Search>
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
