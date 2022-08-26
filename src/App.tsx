import { ChangeEvent, FC, useEffect, useState } from "react";
import { PrefecturesTable } from "./components/PrefecturesTable";
import { SwitchPrefecture } from "./components/switchPrefecture";
import { styled } from "@mui/material";
import IconUp from "./img/up.png";
import IconDown from "./img/down.png";
import { useFetchPrefectureData } from "./hooks/useFetchPrefectureData";
import { useFetchTableInfo } from "../src/hooks/useFetchTableInfo";
import ventilator from "./json/ventilator.json";
import { useFetchTokyo } from "./hooks/useFetchTokyo";
import type { Prefecture } from "./types/prefecture";
import { MainTopic } from "./components/MainTopic";

export const App: FC = () => {
  // 都道府県テーブルと詳細コンポーネントを切り替えるフラグ
  const [changeComponentFlag, setChangeComponentFlag] =
    useState<boolean>(false);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");
  const { prefectures, getPrefectures, country, lastUpdateOfDaily } =
    useFetchPrefectureData();
  const { getTableInfo, allBedNum, lastUpdateOfBedrooms } = useFetchTableInfo();
  // グラフコンポーネントを切り替えるフラグ
  // const [graphFlag, setGraphFlag] = useState<boolean>(false);
  const [special, setSpecial] = useState<boolean>(true);
  const [firstKind, setFirstKind] = useState<boolean>(true);
  const [secondKindOfInfection, setSecondKindOfInfection] =
    useState<boolean>(true);
  const [secondKindOfTuberculosis, setSecondKindOfTuberculosis] =
    useState<boolean>(false);
  const [secondKindOfGeneration, setSecondKindOfGeneration] =
    useState<boolean>(false);
  const [hospitalRooms, setHospitalRooms] = useState<boolean>(true);
  const [patients, setPatients] = useState<boolean>(true);
  const { tokyoPatient, getTokyoPatients, lastUpdate } = useFetchTokyo();
  // 全国の患者数（速報）
  const [patientsOfBreakingNews, setPatientsOfBreakingNews] =
    useState<Prefecture>({
      name: "",
      name_jp: "",
      npatients: 0,
      ncurrentpatients: 0,
      nexits: 0,
      ndeaths: 0,
    });
  // 通常と速報を切り替えるフラグ
  const [changePatientsFlag, setChangePatientsFlag] = useState<boolean>(true);
  const [changeMainTopic, setChangeMainTopic] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      await getPrefectures();
      await getTableInfo();
      await getTokyoPatients();
    })();
  }, []);

  useEffect(() => {
    // 速報の各患者数と昨日の各患者数の差
    let patientDifference: Prefecture = {
      name: "",
      name_jp: "",
      npatients: 0,
      ncurrentpatients: 0,
      nexits: 0,
      ndeaths: 0,
    };

    let newPatients: Prefecture = {
      name: "",
      name_jp: "",
      npatients: 0,
      ncurrentpatients: 0,
      nexits: 0,
      ndeaths: 0,
    };

    for (let ob of prefectures) {
      if (ob.name_jp === "東京都") {
        patientDifference.ncurrentpatients =
          Number(tokyoPatient.ncurrentpatients) - Number(ob.ncurrentpatients);
        patientDifference.npatients =
          Number(tokyoPatient.npatients) - Number(ob.npatients);
        patientDifference.nexits =
          Number(tokyoPatient.nexits) - Number(ob.nexits);
        patientDifference.ndeaths =
          Number(tokyoPatient.ndeaths) - Number(ob.ndeaths);
        newPatients.ncurrentpatients =
          Number(country.ncurrentpatients) + patientDifference.ncurrentpatients;
        newPatients.npatients =
          Number(country.npatients) + patientDifference.npatients;
        newPatients.nexits = Number(country.nexits) + patientDifference.nexits;
        newPatients.ndeaths =
          Number(country.ndeaths) + patientDifference.ndeaths;
        setPatientsOfBreakingNews(newPatients);
      }
    }
  }, [prefectures, tokyoPatient, lastUpdate, country]);

  useEffect(() => {}, [patientsOfBreakingNews]);

  const onChangeSpecial = (e: ChangeEvent<HTMLInputElement>) => {
    setSpecial(e.target.checked);
  };

  const onChangeFirstKind = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstKind(e.target.checked);
  };

  const onChangeSecondKindOfInfection = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondKindOfInfection(e.target.checked);
  };

  const onChangeSecondKindOfTuberculosis = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSecondKindOfTuberculosis(e.target.checked);
  };

  const onChangeSecondKindOfGeneration = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondKindOfGeneration(e.target.checked);
  };

  const onChangeHospitalRooms = (e: ChangeEvent<HTMLInputElement>) => {
    setHospitalRooms(e.target.checked);
  };

  const onChangePatients = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      setChangePatientsFlag(true);
    } else {
      setChangePatientsFlag(false);
    }
    setPatients(e.target.checked);
  };

  useEffect(() => {
    // ページ上部に自動スクロール
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [changeComponentFlag]);

  const onClickPrefectures = () => {
    setChangeMainTopic(true);
  };

  const onClickCountry = () => {
    setChangeMainTopic(false);
  };

  return (
    <div>
      {(() => {
        if (changeComponentFlag !== true) {
          return (
            <SFont>
              {(() => {
                if (changeMainTopic === true) {
                  return (
                    <STab>
                      <STabStyle onClick={onClickPrefectures}>
                        都道府県別データ
                      </STabStyle>
                      <STabStyle2 onClick={onClickCountry}>
                        全国グラフデータ
                      </STabStyle2>
                    </STab>
                  );
                } else {
                  return (
                    <STab>
                      <STabStyle2 onClick={onClickPrefectures}>
                        都道府県別データ
                      </STabStyle2>
                      <STabStyle onClick={onClickCountry}>
                        全国グラフデータ
                      </STabStyle>
                    </STab>
                  );
                }
              })()}
              {(() => {
                if (changeMainTopic === true) {
                  return (
                    <div>
                      <SContainer>
                        <div>
                          <table
                            style={{
                              border: "4px #ad232f solid ",
                              borderCollapse: "collapse",
                              width: "450px",
                              marginLeft: "80px",
                            }}
                          >
                            {(() => {
                              if (changePatientsFlag === true) {
                                return (
                                  <tbody>
                                    <STr2>
                                      <SBorder>現在患者数/対策病床数</SBorder>
                                      <SBorder>現在患者数</SBorder>
                                    </STr2>
                                    <STr>
                                      <SBorder>
                                        {Math.floor(
                                          (Number(
                                            patientsOfBreakingNews.ncurrentpatients
                                          ) /
                                            Number(allBedNum)) *
                                            100
                                        ).toLocaleString()}
                                        <SUnit>%</SUnit>
                                      </SBorder>
                                      <SBorder>
                                        {Number(
                                          patientsOfBreakingNews.ncurrentpatients
                                        ).toLocaleString()}
                                        <SUnit>人</SUnit>
                                      </SBorder>
                                    </STr>
                                    <STr2>
                                      <SBorder>累積退院者</SBorder>
                                      <SBorder>死亡者</SBorder>
                                    </STr2>
                                    <STr>
                                      <SBorder>
                                        {Number(
                                          patientsOfBreakingNews.nexits
                                        ).toLocaleString()}
                                        <SUnit>人</SUnit>
                                      </SBorder>
                                      <SBorder>
                                        {Number(
                                          patientsOfBreakingNews.ndeaths
                                        ).toLocaleString()}
                                        <SUnit>人</SUnit>
                                      </SBorder>
                                    </STr>
                                    <STr2>
                                      <SBorder>
                                        対策病床数{" "}
                                        {Number(allBedNum).toLocaleString()}床
                                      </SBorder>
                                      <SBorder>
                                        PCR検査陽性者数{" "}
                                        {Number(
                                          patientsOfBreakingNews.npatients
                                        ).toLocaleString()}
                                        人
                                      </SBorder>
                                    </STr2>
                                    <STr2>
                                      <SBorder
                                        colSpan={2}
                                        style={{ fontSize: "0.4em" }}
                                      >
                                        臨床工学技士{" "}
                                        {Number(
                                          ventilator[0].ce
                                        ).toLocaleString()}
                                        人 / 人工呼吸器{" "}
                                        {(
                                          Number(ventilator[0].ventilator) +
                                          Number(ventilator[0].maskVentilator)
                                        ).toLocaleString()}
                                        台 / ECMO{" "}
                                        {Number(
                                          ventilator[0].ecmo
                                        ).toLocaleString()}
                                        台
                                        <br />
                                        2020年2月回答 出典
                                        <a
                                          style={{ color: "#696969" }}
                                          href="https://ja-ces.or.jp/info-ce/%e4%ba%ba%e5%b7%a5%e5%91%bc%e5%90%b8%e5%99%a8%e3%81%8a%e3%82%88%e3%81%b3ecmo%e8%a3%85%e7%bd%ae%e3%81%ae%e5%8f%96%e6%89%b1%e5%8f%b0%e6%95%b0%e7%ad%89%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e7%b7%8a/"
                                        >
                                          一般社団法人
                                          日本呼吸療法医学会　公益社団法人
                                          日本臨床工学技士会
                                        </a>
                                      </SBorder>
                                    </STr2>
                                  </tbody>
                                );
                              } else {
                                return (
                                  <tbody>
                                    <STr2>
                                      <SBorder>現在患者数/対策病床数</SBorder>
                                      <SBorder>現在患者数</SBorder>
                                    </STr2>
                                    <STr>
                                      <SBorder>
                                        {Math.floor(
                                          (Number(country.ncurrentpatients) /
                                            Number(allBedNum)) *
                                            100
                                        ).toLocaleString()}
                                        <SUnit>%</SUnit>
                                      </SBorder>
                                      <SBorder>
                                        {Number(
                                          country.ncurrentpatients
                                        ).toLocaleString()}
                                        <SUnit>人</SUnit>
                                      </SBorder>
                                    </STr>
                                    <STr2>
                                      <SBorder>累積退院者</SBorder>
                                      <SBorder>死亡者</SBorder>
                                    </STr2>
                                    <STr>
                                      <SBorder>
                                        {Number(
                                          country.nexits
                                        ).toLocaleString()}
                                        <SUnit>人</SUnit>
                                      </SBorder>
                                      <SBorder>
                                        {Number(
                                          country.ndeaths
                                        ).toLocaleString()}
                                        <SUnit>人</SUnit>
                                      </SBorder>
                                    </STr>
                                    <STr2>
                                      <SBorder>
                                        対策病床数{" "}
                                        {Number(allBedNum).toLocaleString()}床
                                      </SBorder>
                                      <SBorder>
                                        PCR検査陽性者数{" "}
                                        {Number(
                                          country.npatients
                                        ).toLocaleString()}
                                        人
                                      </SBorder>
                                    </STr2>
                                    <STr2>
                                      <SBorder
                                        colSpan={2}
                                        style={{ fontSize: "0.4em" }}
                                      >
                                        臨床工学技士{" "}
                                        {Number(
                                          ventilator[0].ce
                                        ).toLocaleString()}
                                        人 / 人工呼吸器{" "}
                                        {(
                                          Number(ventilator[0].ventilator) +
                                          Number(ventilator[0].maskVentilator)
                                        ).toLocaleString()}
                                        台 / ECMO{" "}
                                        {Number(
                                          ventilator[0].ecmo
                                        ).toLocaleString()}
                                        台
                                        <br />
                                        2020年2月回答 出典
                                        <a
                                          style={{ color: "#696969" }}
                                          href="https://ja-ces.or.jp/info-ce/%e4%ba%ba%e5%b7%a5%e5%91%bc%e5%90%b8%e5%99%a8%e3%81%8a%e3%82%88%e3%81%b3ecmo%e8%a3%85%e7%bd%ae%e3%81%ae%e5%8f%96%e6%89%b1%e5%8f%b0%e6%95%b0%e7%ad%89%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e7%b7%8a/"
                                        >
                                          一般社団法人
                                          日本呼吸療法医学会　公益社団法人
                                          日本臨床工学技士会
                                        </a>
                                      </SBorder>
                                    </STr2>
                                  </tbody>
                                );
                              }
                            })()}
                          </table>
                          {(() => {
                            if (changePatientsFlag === true) {
                              return (
                                <SText>
                                  現在患者数 更新日: {lastUpdateOfDaily} (速報{" "}
                                  {lastUpdate})
                                </SText>
                              );
                            } else {
                              return (
                                <SText>
                                  現在患者数 更新日: {lastUpdateOfDaily}
                                </SText>
                              );
                            }
                          })()}

                          <SText>
                            対策病床数 発表日: {lastUpdateOfBedrooms}
                          </SText>
                          <SText>
                            新型コロナ対策病床数は
                            <a
                              style={{ color: "#696969" }}
                              href="https://www.mhlw.go.jp/bunya/kenkou/kekkaku-kansenshou15/02-02.html"
                            >
                              「感染症指定医療機関の指定状況」
                            </a>
                            の下記合計と仮定
                          </SText>
                          <SText>
                            <input
                              type="checkbox"
                              checked={special}
                              onChange={onChangeSpecial}
                            />
                            特定
                            <input
                              type="checkbox"
                              checked={firstKind}
                              onChange={onChangeFirstKind}
                            />
                            一種
                            <input
                              type="checkbox"
                              checked={secondKindOfInfection}
                              onChange={onChangeSecondKindOfInfection}
                            />
                            二種(感染)
                            <input
                              type="checkbox"
                              checked={secondKindOfTuberculosis}
                              onChange={onChangeSecondKindOfTuberculosis}
                            />
                            二種(結核)
                            <input
                              type="checkbox"
                              checked={secondKindOfGeneration}
                              onChange={onChangeSecondKindOfGeneration}
                            />
                            二種(一般/精神)
                          </SText>
                          <SText>
                            <input
                              type="checkbox"
                              checked={hospitalRooms}
                              onChange={onChangeHospitalRooms}
                            />
                            「
                            <a
                              style={{ color: "#696969" }}
                              href="https://www.mhlw.go.jp/stf/seisakunitsuite/newpage_00023.html"
                            >
                              新型コロナウイルス対策病床数オープンデータ
                            </a>
                            」を使用
                          </SText>
                          <SText>
                            <input
                              type="checkbox"
                              checked={patients}
                              onChange={onChangePatients}
                            />
                            「
                            <a
                              style={{ color: "#696969" }}
                              href="https://docs.google.com/spreadsheets/d/1SPqnO0yLn8ubax96sDJZVDcjAH8QT1suLCIgroPGVHY/edit?usp=sharing"
                            >
                              新型コロナウイルス患者数オープンデータ
                            </a>
                            」を使用(速報)
                          </SText>
                        </div>
                        <PrefecturesTable
                          currentPatientsOfTokyo={tokyoPatient.ncurrentpatients}
                          changePatientsFlag={changePatientsFlag}
                          currentPatientsOfCountry={
                            patientsOfBreakingNews.ncurrentpatients
                          }
                          // setGraphFlag={setGraphFlag}
                          setChangeComponentFlag={setChangeComponentFlag}
                          setSelectedPrefecture={setSelectedPrefecture}
                        ></PrefecturesTable>
                      </SContainer>
                      <SText2>
                        新型コロナウイルス感染症（国内事例） 現在患者数 /
                        対策病床数
                        ※軽症者等は自宅療養など、病床を使用しないことがあります（
                        <a
                          style={{ color: "#696969" }}
                          href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000164708_00001.html"
                        >
                          詳細
                        </a>
                        ）
                      </SText2>
                      <SText2>
                        （現在患者数
                        <img
                          style={{ width: "12px", margin: "0 5px" }}
                          src={IconUp}
                          alt="up"
                        />
                        前日より増加
                        <img
                          style={{
                            transform: "rotate(90deg)",
                            width: "12px",
                            margin: "0 5px",
                          }}
                          src={IconDown}
                          alt="down"
                        />
                        前日より減少）
                      </SText2>
                    </div>
                  );
                } else {
                  return <MainTopic></MainTopic>;
                }
              })()}
            </SFont>
          );
        } else {
          return (
            <SwitchPrefecture
              // graphFlag={graphFlag}
              setChangeComponentFlag={setChangeComponentFlag}
              selectedPrefecture={selectedPrefecture}
              changePatientsFlag={changePatientsFlag}
              tokyoPatient={tokyoPatient}
              patientsOfBreakingNews={patientsOfBreakingNews}
            ></SwitchPrefecture>
          );
        }
      })()}
    </div>
  );
};

const SContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "15px",
  marginBottom: "15px",
});

const SBorder = styled("td")({
  border: "4px #ad232f solid ",
});

const STr = styled("tr")({
  background: "#ad232f",
  color: "white",
  fontSize: "2.3em",
  textAlign: "center",
});

const STr2 = styled("tr")({
  textAlign: "center",
  fontSize: "0.9em",
});

const SUnit = styled("span")({
  fontSize: "0.6em",
});

const SFont = styled("div")({
  fontFamily: "Roboto",
});

const STab = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
});

const STabStyle = styled("div")({
  color: "white",
  backgroundColor: "#ad232f",
  padding: "10px 30px",
  margin: "0 5px",
  marginBottom: "10px",
  width: "500px",
  textAlign: "center",
  "&:hover": {
    cursor: "pointer",
  },
});

const STabStyle2 = styled("div")({
  color: "#ad232f",
  backgroundColor: "white",
  border: "1px solid #ad232f",
  padding: "10px 30px",
  margin: "0 5px",
  marginBottom: "10px",
  width: "500px",
  textAlign: "center",
  "&:hover": {
    cursor: "pointer",
  },
});

const SText = styled("div")({
  textAlign: "center",
  marginLeft: "80px",
  fontSize: "0.7em",
  marginBottom: "3px",
});

const SText2 = styled("div")({
  textAlign: "center",
  fontSize: "0.7em",
});
