import { FC } from "react";
import { styled } from "@mui/material";

export const Documents: FC = () => {
  return (
    <div>
      <SBlock>
        <SText>データ出典</SText>
        <SText>
          現在患者数（速報）:
          <STag href="https://docs.google.com/spreadsheets/d/1SPqnO0yLn8ubax96sDJZVDcjAH8QT1suLCIgroPGVHY/edit#gid=0">
            1都道府県発表 新型コロナウイルス患者数オープンデータ(東京)
          </STag>
          →
          <STag href="https://www.stopcovid19.jp/data/covid19japan-fast.csv">
            CSV
          </STag>
          /
          <STag href="https://www.stopcovid19.jp/data/covid19japan-fast.json">
            JSON
          </STag>
        </SText>
        <SText>
          現在患者数（日次更新、ベース）:
          <STag href="https://www.mhlw.go.jp/stf/newpage_27502.html">
            厚生労働省「各都道府県の検査陽性者の状況」PDF
          </STag>
          →
          <STag href="https://www.stopcovid19.jp/data/covid19japan.csv">
            CSV
          </STag>
          /
          <STag href="https://www.stopcovid19.jp/data/covid19japan.json">
            JSON
          </STag>
          /<STag href="https://www.stopcovid19.jp/mhlw-beds.html">APP</STag>/
          厚労省オープンデータ
        </SText>
        <SText>
          対策病床数（週次更新）:
          <STag href="https://www.mhlw.go.jp/stf/seisakunitsuite/newpage_00023.html">
            療養状況等及び入院患者受入病床数等に関する調査について｜厚生労働省
          </STag>
          →
          <STag href="https://www.stopcovid19.jp/data/covid19japan_beds/latest.csv">
            CSV
          </STag>
          /
          <STag href="https://www.stopcovid19.jp/data/covid19japan_beds/latest.json">
            JSON
          </STag>
          /<STag href="https://www.stopcovid19.jp/mhlw-beds.html">APP</STag>
        </SText>
        <SText>
          救急搬送困難事案数（週次更新）:
          <STag href="https://www.fdma.go.jp/disaster/coronavirus/post-1.html">
            新型コロナウイルス感染症に伴う救急搬送困難事案に係る状況調査について（救急企画室）
            | 新型コロナウイルス感染症関連 | 総務省消防庁
          </STag>
          →
          <STag href="https://github.com/code4fukui/fdma_go_jp/blob/main/README.md">
            CSV
          </STag>
          /
          <STag href="https://code4fukui.github.io/fdma_go_jp/pref.html">
            APP
          </STag>
        </SText>
      </SBlock>
      <SBlock>
        <SText>関連データ</SText>
        <SText>
          <STag href="https://www.stopcovid19.jp/mhlw-beds.html">
            新型コロナウイルス感染症患者の療養状況 病床使用率 - 厚労省発表データ
          </STag>
        </SText>
        <SText>
          <STag href="https://www.stopcovid19.jp/beds_graph.html">
            新型コロナ対策病床数推移（厚労省）
          </STag>
        </SText>
        <SText>
          <STag href="https://code4fukui.github.io/covid19vaccine/">
            新型コロナワクチンの接種状況（医療従事者含まず） -
            政府CIOポータルオープンデータ
          </STag>
        </SText>
      </SBlock>
      <SBlock>
        <SText>関連データ（更新終了）</SText>
        <SText>
          <STag href="https://www.stopcovid19.jp/forecast_chkans.html">
            {" "}
            COVID-19 Japan 都道府県別 感染者予測と結果 - Google公表データ
          </STag>
        </SText>
        <SText>
          <STag href="https://www.stopcovid19.jp/influencer.html">
            全国インフルエンザ報告数（厚労省データ使用）
          </STag>
        </SText>
      </SBlock>
      <SBlock>
        <SText>credit</SText>
        <SText>
          APP (アプリ開発/提供):
          <STag href="https://creativecommons.org/licenses/by/4.0/deed.ja">
            CC BY
          </STag>
          <STag href="https://fukuno.jig.jp/">jig.jp 福野泰介 @taisukef</STag>(
          <STag href="https://github.com/code4sabae/covid19">
            src on GitHub
          </STag>
          )
        </SText>
        <SText>
          「
          <STag href="https://fukuno.jig.jp/2799">
            厚生労働省提供 新型コロナウイルス対策ダッシュボードについて
          </STag>
          」「
          <STag href="https://fukuno.jig.jp/2788">
            感染者PDFデータをJSON-API化して公開
          </STag>
          」
        </SText>
      </SBlock>
      <SBlock>
        <SText>
          DATA:
          <STag href="https://creativecommons.org/licenses/by/4.0/deed.ja">
            CC BY
          </STag>
          「
          <STag href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000164708_00001.html">
            新型コロナウイルス感染症について - 厚生労働省
          </STag>
          」→
          <STag href="https://www.stopcovid19.jp/data/covid19japan.json">
            JSON
          </STag>
          /
          <STag href="https://www.stopcovid19.jp/data/covid19japan.csv">
            CSV
          </STag>
          /
          <STag href="https://www.stopcovid19.jp/data/covid19japan-trend.txt">
            TXT
          </STag>
          (集約版 CSV / JSON / APP)
        </SText>
        <SText>
          DATA:
          <STag href="https://creativecommons.org/licenses/by/4.0/deed.ja">
            CC BY
          </STag>
          「
          <STag href="https://docs.google.com/spreadsheets/d/1SPqnO0yLn8ubax96sDJZVDcjAH8QT1suLCIgroPGVHY/edit?usp=sharing">
            新型コロナウイルス患者数オープンデータ
          </STag>
          -<STag href="https://www.stopcovid19.jp/">COVID-19 Japan</STag>」
          <STag href="https://www.stopcovid19.jp/data/covid19japan-fast.csv">
            CSV
          </STag>
          /
          <STag href="https://www.stopcovid19.jp/data/covid19japan-fast.json">
            JSON
          </STag>
        </SText>
        <SText>
          DATA:
          <STag href="https://www.mhlw.go.jp/stf/seisakunitsuite/newpage_00023.html">
            療養状況等及び入院患者受入病床数等に関する調査について｜厚生労働省
          </STag>
          →
          <STag href="https://www.stopcovid19.jp/data/covid19japan_beds/latest.csv">
            CSV
          </STag>
          /
          <STag href="https://www.stopcovid19.jp/data/covid19japan_beds/latest.json">
            JSON
          </STag>
        </SText>
        <SText>
          DATA:
          <STag href="https://creativecommons.org/licenses/by/4.0/deed.ja">
            CC BY
          </STag>
          「
          <STag href="https://www.mhlw.go.jp/bunya/kenkou/kekkaku-kansenshou15/02-02.html">
            感染症指定医療機関の指定状況（平成31年4月1日現在）｜厚生労働省
          </STag>
          」をJSONに加工（
          <STag href="https://code4sabae.github.io/bedforinfection/">
            感染症病床 都道府県別一覧アプリ
          </STag>
          ）
        </SText>
        <SText>
          DATA: 許諾「
          <STag href="https://www.ja-ces.or.jp/info-ce/%e4%ba%ba%e5%b7%a5%e5%91%bc%e5%90%b8%e5%99%a8%e3%81%8a%e3%82%88%e3%81%b3ecmo%e8%a3%85%e7%bd%ae%e3%81%ae%e5%8f%96%e6%89%b1%e5%8f%b0%e6%95%b0%e7%ad%89%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e7%b7%8a/">
            都道府県別 治療用人工呼吸器の取扱台数等 (2020年2月調査時)
          </STag>
          」 （
          <STag
            href="都道府県別 治療用人工呼吸器の取扱台数等
          (2020年2月調査時)"
          >
            一般社団法人 日本呼吸療法医学会
          </STag>
          　
          <STag href="https://www.ja-ces.or.jp/">
            公益社団法人 日本臨床工学技士会
          </STag>
          ）
        </SText>
        <SText>
          LAYOUT:
          <STag href="https://creativecommons.org/share-your-work/public-domain/cc0">
            CC0
          </STag>
          <STag href="https://hackmd.io/7m2A33zJSWq6DA9lYbvtpQ">
            カラム地図
          </STag>
          (<STag href="https://github.com/tabularmaps/hq">カラム地図</STag>/
          <STag href="https://github.com/tabularmaps/hq">
            TabularMaps on Github
          </STag>
          /<STag href="https://fukuno.jig.jp/2434">7x7都道府県</STag>)
        </SText>
        <SText>
          ICON:
          <STag href="https://github.com/google/material-design-icons/blob/master/LICENSE">
            Apatch License 2.0
          </STag>
          <STag href="https://github.com/google/material-design-icons">
            'Material design icons' by Google
          </STag>
        </SText>
        <SText>
          DOMAIN:
          <STag href="https://www.code4japan.org/">Code for Japan</STag>-
          新型コロナウイルス感染症対策プロジェクト
          <STag href="https://twitter.com/search?q=%23StopCOVID19JP">
            #StopCOVID19JP
          </STag>
        </SText>
      </SBlock>
    </div>
  );
};

const SBlock = styled("div")({
  marginBottom: "40px",
});

const SText = styled("div")({
  fontSize: "0.7em",
  textAlign: "center",
});

const STag = styled("a")({
  color: "#696969",
});
