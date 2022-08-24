import { FC } from "react";
import { styled } from "@mui/material";

export const Header: FC = () => {
  return (
    <SHeader>
      <STextCenter
        style={{
          fontSize: "55px",
          fontWeight: 700,
          marginBottom: "18px",
          marginTop: "8px",
        }}
      >
        COVID-19 Japan
      </STextCenter>
      <STextCenter style={{ fontSize: "18px" }}>
        新型コロナウイルス対策ダッシュボード
      </STextCenter>
    </SHeader>
  );
};

const SHeader = styled("div")({
  backgroundColor: "#ad232f",
  color: "white",
  padding: "10px",
  fontFamily: "Roboto",
});

const STextCenter = styled("div")({
  textAlign: "center",
});
