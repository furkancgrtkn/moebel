import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Scrollbar } from "swiper/core";

SwiperCore.use([Scrollbar]);

const Container = styled.div`
  width: 100%;
  max-width: 1246px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const TopBanner = styled.div`
  width: 100%;
  height: 440px;
  background-color: #eed0b3;
  border-radius: 20px;
  box-shadow: 3px 3px 10px #00000029;
  margin-bottom: 20px;
`;

const TwoCols = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Cols = styled.div`
  width: 49.6%;
  min-width: 340px;
  background-color: #a1a896;
  box-shadow: 3px 3px 10px #00000029;
  height: 440px;
  border-radius: 20px;
  margin-bottom: 20px;
  @media (max-width: 1250px) {
    width: 100%;
  }
`;

const Header = styled.h3`
  text-align: center;
  margin-bottom: 8px;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

const SlideItem = styled.div`
  width: 299px;
  height: calc(100% - 30px);
  margin-bottom: 20px;
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 20px;
  background-color: #9c9aca;
`;

const CenterSwip = styled.div`
  width: 100%;
  height: 470px;
  margin-bottom: 20px;
  display: flex;
  position: relative;
`;

const SearchCols = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const SearchCol = styled.div`
  width: 49.6%;
  min-width: 340px;
  background-color: #f9f9f9;
  box-shadow: 3px 3px 10px #0000001a;
  height: 440px;
  border-radius: 20px;
  margin-bottom: 10px;
  @media (max-width: 1250px) {
    width: 100%;
  }
`;

const SearchColHead = styled.h3`
  text-align: center;
  margin: 15px 0;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

const PartnerSlideItem = styled.div`
  width: 300px;
  height: calc(100% - 30px);
  margin-bottom: 20px;
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 20px;
  background-color: #f0bcbc;
`;

const PartnerSwip = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  display: flex;
  position: relative;
`;

const LongText = styled.p`
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.08px;
  font-family: "Segoe UI", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Moebel</title>
      </Head>
      <Container>
        <TopBanner></TopBanner>
        <TwoCols>
          <Cols></Cols>
          <Cols></Cols>
        </TwoCols>
        <Header>Beliebte Kategorien</Header>
        <CenterSwip>
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            scrollbar={true}
            className="swiperCenter"
          >
            <SwiperSlide>
              <SlideItem></SlideItem>
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem></SlideItem>
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem></SlideItem>
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem></SlideItem>
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem></SlideItem>
            </SwiperSlide>
          </Swiper>
        </CenterSwip>
        <Header>Beliebte Suchanfragen</Header>
        <SearchCols>
          <SearchCol>
            <SearchColHead>Moebel</SearchColHead>
          </SearchCol>
          <SearchCol>
            <SearchColHead>Garten</SearchColHead>
          </SearchCol>
          <SearchCol>
            <SearchColHead>Leuchten</SearchColHead>
          </SearchCol>
          <SearchCol>
            <SearchColHead>Accessoires</SearchColHead>
          </SearchCol>
          <SearchCol>
            <SearchColHead>Textilien</SearchColHead>
          </SearchCol>
          <SearchCol>
            <SearchColHead>Küche</SearchColHead>
          </SearchCol>
        </SearchCols>
        <Header>Partner Shops</Header>
        <PartnerSwip>
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            scrollbar={true}
            className="swiperCenter"
          >
            <SwiperSlide>
              <PartnerSlideItem></PartnerSlideItem>
            </SwiperSlide>
            <SwiperSlide>
              <PartnerSlideItem></PartnerSlideItem>
            </SwiperSlide>
            <SwiperSlide>
              <PartnerSlideItem></PartnerSlideItem>
            </SwiperSlide>
            <SwiperSlide>
              <PartnerSlideItem></PartnerSlideItem>
            </SwiperSlide>
            <SwiperSlide>
              <PartnerSlideItem></PartnerSlideItem>
            </SwiperSlide>
          </Swiper>
        </PartnerSwip>
        <Header>Willkommen bei Moebel-Kaufen.com</Header>
        <LongText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
          amet sem et risus convallis pellentesque a a lectus. Curabitur
          ultricies semper enim, at egestas quam ullamcorper ut. Nullam euismod
          rutrum ipsum vel accumsan. Maecenas pellentesque rutrum pulvinar.
          Mauris interdum semper lacus ac hendrerit. Donec justo turpis, tempus
          ac placerat non, egestas a nunc. In et tellus nec lacus laoreet
          facilisis. Morbi eget dapibus eros. Nunc sagittis, ex vitae imperdiet
          tristique, orci turpis dapibus nibh, ac commodo erat libero in urna.
          Aliquam fringilla efficitur lacinia. Fusce a dolor vel sem eleifend
          auctor. Vivamus convallis eget elit ac tincidunt. Nullam facilisis
          neque eget semper dapibus. Sed nec ante sit amet risus laoreet
          imperdiet a eget metus. Duis gravida sem sit amet augue bibendum
          commodo. Morbi consectetur facilisis ante ut elementum.
          <br />
          <br /> Quisque in massa in mi euismod posuere. Quisque molestie felis
          ut efficitur dictum. Ut hendrerit in metus eget mattis. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec vel felis nec orci
          dapibus molestie feugiat sit amet dolor. Pellentesque id blandit
          sapien. Suspendisse commodo dolor et neque eleifend dapibus. Duis eu
          tortor dictum, porttitor turpis at, pellentesque risus. Aenean egestas
          pharetra erat sit amet euismod. Vivamus quis risus elementum,
          porttitor augue quis, sollicitudin lectus. Aliquam viverra risus non
          ante aliquam blandit. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Vivamus nibh nibh, ornare a lacus ac, cursus convallis tellus. Proin
          quis metus vel nulla rhoncus dictum. Pellentesque sed blandit odio.
          <br />
          <br />
          Proin nec mi varius, luctus ante a, blandit tellus. Curabitur blandit
          vestibulum nulla, eget semper velit egestas vitae. Donec non quam
          sollicitudin, commodo urna at, sollicitudin ipsum. Aenean molestie
          volutpat libero, et iaculis enim rutrum eu. Ut fringilla nibh quis
          velit faucibus efficitur. Mauris nec condimentum purus, eget facilisis
          purus. Nam et velit ac sapien semper rutrum dignissim nec ante. Nam ut
          nibh orci. Vivamus velit magna, efficitur quis ligula eget, semper
          sodales lorem. Quisque elit sem, pharetra ut velit nec, sollicitudin
          gravida libero. Suspendisse rhoncus mi eget quam pellentesque rhoncus
          ac ac nulla. Nullam lacus mauris, dapibus vel velit vel, tristique
          aliquet massa. Nulla sodales nisl sit amet lectus scelerisque, in
          dapibus neque maximus. <br />
          <br />
          Morbi consequat lacus erat, semper venenatis elit elementum quis. Sed
          auctor neque vitae aliquam tincidunt. Nam iaculis eleifend velit, vel
          tincidunt lectus porta sed. Ut tempor tortor a nibh hendrerit
          suscipit. Ut lacinia urna at faucibus auctor. Vivamus sit amet nunc at
          massa faucibus posuere nec ac diam. Donec in neque urna. Suspendisse
          lacinia pulvinar ipsum, eu imperdiet felis sodales eget. Proin
          pulvinar urna vel vestibulum semper. Aenean risus nisi, fringilla sed
          felis et, malesuada condimentum nunc. Donec eget sagittis velit.
          Vestibulum laoreet magna at neque facilisis, a condimentum elit
          aliquam. Nullam convallis consectetur augue. In lacinia sollicitudin
          nulla eu facilisis. <br />
          <br />
          Suspendisse dapibus, tellus vel fermentum pharetra, purus metus mollis
          neque, vitae interdum mauris eros ut mi. Etiam tempus lacus vel velit
          dignissim malesuada. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Donec vestibulum massa in feugiat placerat. In hac
          habitasse platea dictumst. Phasellus vestibulum ligula nec posuere
          gravida. Donec vitae eleifend orci. Sed scelerisque elit a accumsan
          interdum. Mauris egestas bibendum mauris, at molestie erat consequat
          a. Pellentesque fermentum hendrerit est. Vivamus euismod ex nec
          sagittis fermentum. Fusce quis tellus a justo molestie congue non ut
          magna. Aliquam at lectus dignissim, malesuada augue sed, tincidunt
          enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Donec et orci eu odio facilisis scelerisque. Vivamus placerat cursus
          ipsum, eu congue nisi elementum consequat. Nullam nisi lacus, bibendum
          at metus et, ullamcorper elementum justo. Nam accumsan dolor vitae
          posuere porttitor.
          <br />
          <br /> In ligula sem, efficitur mattis nisl quis, efficitur maximus
          tellus. Aenean mollis, lacus vel aliquet euismod, lacus velit vehicula
          elit, in dignissim sapien nibh in augue. Mauris interdum tortor a leo
          interdum consequat. Duis ut iaculis elit, eget suscipit nulla. Nullam
          quis aliquet sapien. Aliquam erat volutpat. Donec massa massa,
          sollicitudin sit amet metus nec, hendrerit consectetur diam. Nunc ac
          commodo nibh, quis egestas nunc. Aliquam eu felis at nisi efficitur
          gravida eget eget risus. Donec tincidunt mollis tellus, at luctus
          felis fermentum a. Nullam mollis ligula a sem eleifend, id lacinia
          ipsum venenatis. Nunc cursus mi sapien, et pharetra tortor faucibus
          quis. Aenean rutrum, justo a mollis convallis, ipsum nibh placerat
          ipsum, vehicula maximus mi lacus vitae lacus. In pretium eleifend
          cursus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Ut placerat, metus ac vehicula
          porttitor, metus lorem dignissim diam, a suscipit risus turpis eu
          orci. Aenean efficitur accumsan purus vitae finibus.
          <br />
          <br /> Sed consequat massa sit amet lectus sollicitudin mattis in id
          tellus. Etiam non mi ante. Curabitur ac dictum urna. Vestibulum
          eleifend consequat ex. Vivamus finibus mattis ligula vel bibendum.
          Proin suscipit lectus sit amet felis tincidunt aliquet. Aliquam vel
          leo lobortis, eleifend ante in, efficitur est. Phasellus fermentum
          eget odio vitae ultrices. In hac habitasse platea dictumst. Nunc
          rhoncus turpis vitae commodo consectetur. Nullam sit amet sollicitudin
          sem. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Phasellus sed felis id turpis
          egestas egestas sit amet sit amet diam. Suspendisse eu mollis metus.
          Sed semper mi tortor, ut interdum ex consectetur vitae. Duis nulla
          arcu, cursus a velit nec, suscipit luctus libero. Suspendisse auctor
          vestibulum vehicula. Donec volutpat elit a dolor molestie, hendrerit
          mollis nibh pretium. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Nunc tincidunt neque
          eleifend dui iaculis lobortis. Suspendisse in risus quis augue
          efficitur dictum et eget nisi. Suspendisse luctus vel mauris eu
          placerat. Vivamus eleifend feugiat tellus, id sodales nisi tincidunt
          nec. Maecenas tortor nibh, elementum at mauris eu, pellentesque
          faucibus neque. Nulla aliquam suscipit tincidunt. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nulla dapibus dui
          sed nisl viverra aliquet. Vestibulum accumsan efficitur orci ac
          vehicula. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Donec pulvinar ante vel mauris
          tincidunt, eu aliquam erat feugiat. Suspendisse accumsan rhoncus elit
          sed tincidunt. Ut consectetur tempor sapien, sit amet luctus ante
          posuere in. <br />
          <br />
          Sed eu augue accumsan, convallis eros sit amet, scelerisque neque.
          Aenean rhoncus est erat, tempor suscipit massa iaculis nec. Morbi
          lobortis suscipit blandit. Ut vehicula purus a dui consectetur tempus
          ac vitae enim. Suspendisse mi elit, auctor ut lacus eu, gravida
          sagittis metus. Suspendisse in turpis eros. Vestibulum nisi tellus,
          fringilla vel enim at, aliquam blandit magna. Fusce dictum sem eget
          blandit cursus. Nullam et faucibus ante. Vestibulum varius maximus
          nisi in posuere. Proin ultricies consequat tortor, nec interdum dui
          feugiat vitae. Aenean consequat lacus non tellus suscipit fringilla.
          Nulla aliquet nibh id molestie scelerisque. Phasellus semper purus at
          nibh semper, sed fermentum eros pharetra. Phasellus laoreet quam eget
          sem aliquam, sit amet vulputate odio posuere. Sed sagittis dolor vel
          sagittis egestas. Integer velit mauris, ultrices id lorem non,
          consectetur mattis erat. Maecenas tempus tincidunt tortor, vel posuere
          orci fringilla ut. Cras eros arcu, auctor accumsan porttitor sit amet,
          tempor quis justo. Nam maximus nisi at risus suscipit, at vehicula
          felis convallis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Morbi maximus nulla sed malesuada efficitur. Cras vestibulum
          diam tincidunt augue efficitur feugiat eget lobortis sem.
          <br />
          <br /> Sed fringilla felis est. Cras laoreet nunc ante, et rutrum
          ipsum consequat a. Vivamus non lacinia tortor. Aliquam sagittis
          sodales ante non pulvinar. Morbi efficitur sed urna at fermentum.
          Vivamus accumsan, lectus vel vulputate ultricies, dolor diam ultrices
          diam, vel tempus turpis ante et nisl. Quisque quis odio eu leo
          venenatis porta non non leo. Nam pharetra, ante id ultricies maximus,
          urna sapien sodales velit, at aliquet ipsum orci sit amet enim.
          Vivamus consequat, sem rutrum condimentum vestibulum, ligula nunc
          dictum est, vitae pulvinar magna mauris id massa. Nullam vitae
          vestibulum dolor. Praesent nibh dolor, volutpat ut dictum quis,
          volutpat vitae enim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
          <br />
          <br /> Pellentesque a quam non quam sollicitudin varius non at lacus.
          Fusce fermentum porttitor lacus et gravida. Pellentesque malesuada
          erat et arcu molestie, ac gravida leo sagittis. In vel nunc odio. Ut
          quis est mauris. Pellentesque id lacinia quam, et aliquet risus.
          Aliquam ac diam arcu. Quisque suscipit maximus ex quis tristique.
          Aenean ut justo dolor. Nullam purus massa, egestas at dui id, lobortis
          porta sapien. Curabitur porta, lacus sed rhoncus aliquam, eros purus
          suscipit neque, vitae cursus odio nisi a nisi. Nam lobortis orci vitae
          dapibus tempor. Maecenas fermentum sed massa ut euismod. Suspendisse
          nec tempus odio, nec varius odio. Nam porta et nulla vel lacinia.
          Nullam vestibulum mollis libero eget convallis. Sed sem ante,
          ullamcorper ut sem ac, malesuada imperdiet ex. Etiam quis metus
          dictum, eleifend turpis nec, posuere nulla. Nulla facilisi. Vestibulum
          sollicitudin et sapien at feugiat. Sed tempor orci justo, non egestas
          dui luctus ut. Etiam id erat non urna egestas cursus. Fusce id
          sollicitudin diam. In sit amet lobortis justo, vel elementum risus.
          Sed a iaculis urna. Donec nec mauris venenatis, cursus urna vitae,
          congue lectus.
        </LongText>
      </Container>
    </Layout>
  );
}
