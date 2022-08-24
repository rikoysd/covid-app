import { FC } from "react";
import { styled } from "@mui/material";

export const Footer: FC = () => {
  return (
    <SFooter>
      APP (アプリ開発/提供):
      <STag href="https://creativecommons.org/licenses/by/4.0/deed.ja">
        CC BY
      </STag>
      &nbsp;
      <STag href="https://fukuno.jig.jp/">jig.jp 福野泰介</STag>&nbsp;
      <STag href="https://twitter.com/taisukef">@taisukef</STag>&nbsp;(
      <STag href="https://github.com/code4sabae/covid19">src on GitHub</STag>)
    </SFooter>
  );
};

const SFooter = styled("div")({
  background: "#ad232f",
  textAlign: "center",
  color: "white",
  padding: "8px",
  fontSize: "0.7em",
});

const STag = styled("a")({
  color: "white",
});
