import { FC } from "react";
import { styled } from "@mui/material";
import Center1 from "../img/banner/center1.png";
import Center2 from "../img/banner/center2.png";
import Center3 from "../img/banner/center3.png";
import Left from "../img/banner/left.png";
import Right from "../img/banner/right.png";

export const Footer: FC = () => {
  return (
    <SBannerPosition>
    <div>
      <a href="https://note.stopcovid19.jp/n/n0b078f2b3dce">
        <img
          style={{ width: "30vw" }}
          src={Left}
          alt="banner-left"
        />
      </a>
    </div>
    <SCenterBanner>
      <a href="https://tk3-805-12365.vw.sakura.ne.jp:3443/thanks">
        <div style={{ marginTop: "5px" }}>
          <img
            style={{ marginLeft: "15px", width: "20%" }}
            src={Center1}
            alt="banner-center1"
          />
          <img
            style={{ width: "50% " }}
            src={Center2}
            alt="banner-center2"
          />
          <img
            style={{ width: "20%" }}
            src={Center3}
            alt="banner-center3"
          />
        </div>
      </a>
    </SCenterBanner>
    <div>
      <a href="https://whowatch.tv/">
        <img
          style={{ width: "30vw" }}
          src={Right}
          alt="banner-right"
        />
      </a>
    </div>
  </SBannerPosition>
  );
};

const SBannerPosition = styled("div")({
  display: "flex",
  justifyContent: "center",
  margin: "20px 0",
});

const SCenterBanner = styled("div")({
  border: "0.4px solid #d3d3d3",
  width: "30vw",
  height: "80px",
  margin: "0 30px",
});
