import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import MenuLeftItem from "./MenuLeftItem";
const Menu = styled.div`
  position: absolute;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  width: 814px;
  height: 0px;
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 20px;
  visibility: hidden;
  display: flex;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

const MenuLeft = styled.div`
  width: 170px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  height: 292px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aeaeae;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }
  ::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 5px;
    box-shadow: inset 0px 0px 2px #e0e0e0;
  }
`;

const HoverSpan = styled.span`
  width: 5px;
  height: 5px;
  box-shadow: 3px 3px 10px #00000040;
  visibility: hidden;
  background-color: #a0a0a0;
  position: absolute;
  top: 29px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100%;
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 40px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
  position: relative;
`;

const NavLinkItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  :hover {
    ${Menu} {
      visibility: visible;
      height: 292px;
      transition: 0.4s;
      transition-property: height, visibility;
    }
    ${HoverSpan} {
      visibility: visible;
    }
  }
`;

const HoverSpanLeft = styled.span`
  width: 5px;
  height: 5px;
  box-shadow: 3px 3px 10px #00000040;
  background-color: #a0a0a0;
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
  display: none;
  border-radius: 100%;
`;

const MenuLeftList = styled.ul`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding: 18px 40px;
  justify-content: center;
  li {
    margin-bottom: 25px;
  }

  li:last-child {
    margin-bottom: 0px;
  }
`;

const MenuRight = styled.div`
  width: calc(100% - 170px);
  height: 292px;
  overflow-y: auto;
  margin-right: 5px;
  padding: 18px 25px 0px 30px;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aeaeae;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }
  ::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 5px;
    box-shadow: inset 0px 0px 2px #e0e0e0;
  }
`;

const MenuRightList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const MenuRightListItem = styled.li`
  margin-right: 30px;
  width: 155px;
  margin-left: 0 !important;
  margin-bottom: 25px;
`;

const MenuRightLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
  position: relative;
  :hover {
    ${HoverSpanLeft} {
      display: block;
    }
  }
`;

function NavbarLink({ value }) {
  const [activeSub, setActiveSub] = useState([
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
  ]);

  const [active, setActive] = useState(
    activeSub.filter((val) => val.value === value)[0].leftMenus[0].value
  );
  return (
    <NavLinkItem>
      <Link href="/">
        <a>
          <NavLink>
            {value}
            <HoverSpan></HoverSpan>
          </NavLink>
        </a>
      </Link>
      <Menu>
        <MenuLeft>
          <MenuLeftList>
            {activeSub
              .filter((val) => val.value === value)[0]
              .leftMenus.map((e, idx) => (
                <MenuLeftItem
                  key={idx}
                  value={e.value}
                  active={active}
                  setActiveSub={setActive}
                />
              ))}
          </MenuLeftList>
        </MenuLeft>
        <MenuRight>
          <MenuRightList>
            {activeSub
              .filter((val) => val.value === value)[0]
              .leftMenus.filter((v) => v.value === active)[0]
              .data.map((d, idx) => (
                <MenuRightListItem key={idx}>
                  <Link href="/">
                    <a>
                      <MenuRightLink>
                        {d.value}
                        <HoverSpanLeft></HoverSpanLeft>
                      </MenuRightLink>
                    </a>
                  </Link>
                </MenuRightListItem>
              ))}
          </MenuRightList>
        </MenuRight>
      </Menu>
    </NavLinkItem>
  );
}

export default NavbarLink;
