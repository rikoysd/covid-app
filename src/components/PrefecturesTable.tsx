import { FC, useCallback, useEffect, useState } from "react";
import { styled } from "@mui/material";
import IconUp from "../img/up.png";
import IconDown from "../img/down.png";
import { useFetchPrefectureData } from "../hooks/useFetchPrefectureData";
import { useFetchTableInfo } from "../hooks/useFetchTableInfo";
import type { TableInfo } from "../types/tableInfo";

type Props = {
  setGraphFlag: (boolean: boolean) => void;
  setChangeComponentFlag: (boolean: boolean) => void;
  setSelectedPrefecture: (string: string) => void;
  currentPatientsOfCountry: number;
  changePatientsFlag: boolean;
  currentPatientsOfTokyo: number;
};

export const PrefecturesTable: FC<Props> = (props) => {
  const {
    setChangeComponentFlag,
    setSelectedPrefecture,
    setGraphFlag,
    currentPatientsOfCountry,
    changePatientsFlag,
    currentPatientsOfTokyo,
  } = props;
  const { info, getTableInfo, allBedNum } = useFetchTableInfo();
  const [countryPatients, setCountryPatients] = useState<TableInfo[]>([]);
  const { getPrefectures, country } = useFetchPrefectureData();

  useEffect(() => {
    (async () => {
      await getTableInfo();
      await getPrefectures();
    })();
  }, []);

  useEffect(() => {
    const newInfo = [...info];
    for (let ob of info) {
      if (ob.name === "東京都") {
        let patient = ob.patients - ob.dcurrentpatients;
        let tokyo: TableInfo = {
          id: -1,
          name: "東京都",
          patients: patient,
          hospitalBeds: ob.hospitalBeds,
          hotelRooms: ob.hotelRooms,
          bedRooms: ob.bedRooms,
          percent: Math.floor((patient / Number(ob.bedRooms)) * 100),
          dcurrentpatients: ob.dcurrentpatients,
        };
        newInfo.splice(12, 1, tokyo);
        setCountryPatients(newInfo);
      }
    }
  }, [props.currentPatientsOfTokyo, info]);

  const onClickCard = useCallback((name: string) => {
    props.setChangeComponentFlag(true);
    props.setSelectedPrefecture(name);
    // グラフの表示切替
    if (name === "全国") {
      props.setGraphFlag(true);
    } else {
      props.setGraphFlag(false);
    }
  }, []);

  return (
    <div>
      {(() => {
        if (props.changePatientsFlag === true) {
          return (
            <SCardPosition>
              <SCard
                style={{
                  width: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => onClickCard("全国")}
              >
                <div>
                  <SText style={{ fontSize: "0.9em" }}>
                    {Number(props.currentPatientsOfCountry).toLocaleString()}/
                    {allBedNum?.toLocaleString()}
                  </SText>
                  <SText style={{ fontSize: "0.6em" }}>
                    (全国)現在患者数/対策病床数
                  </SText>
                </div>
              </SCard>
              {info.map((ob, index) => (
                <SCard key={index} onClick={() => onClickCard(ob.name)}>
                  <SText
                    style={{
                      fontSize: "0.9em",
                      marginTop: "2px",
                      marginBottom: "-1px",
                    }}
                  >
                    {(() => {
                      if (ob.name.includes("都")) {
                        return <span>{ob.name.replace("都", "")}</span>;
                      } else if (ob.name.includes("府")) {
                        return <span>{ob.name.replace("府", "")}</span>;
                      } else if (ob.name.includes("県")) {
                        return <span>{ob.name.replace("県", "")}</span>;
                      } else {
                        return <span>{ob.name}</span>;
                      }
                    })()}
                    {(() => {
                      if (ob.dcurrentpatients > 0) {
                        return (
                          <img
                            style={{ marginLeft: "3px", width: "15px" }}
                            src={IconUp}
                            alt="up"
                          />
                        );
                      } else {
                        return (
                          <img
                            style={{
                              marginLeft: "3px",
                              transform: "rotate(90deg)",
                              width: "15px",
                            }}
                            src={IconDown}
                            alt="down"
                          />
                        );
                      }
                    })()}
                  </SText>
                  <SText style={{ fontSize: "0.8em", marginBottom: "-6px" }}>
                    {ob.percent}%
                  </SText>
                  <SText>
                    <span style={{ fontWeight: "bold", fontSize: "0.7em" }}>
                      {ob.patients.toLocaleString()}
                    </span>
                    <span style={{ fontSize: "0.5em" }}>
                      /{ob.bedRooms.toLocaleString()}
                    </span>
                  </SText>
                </SCard>
              ))}
            </SCardPosition>
          );
        } else {
          return (
            <SCardPosition>
              <SCard
                style={{
                  width: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => onClickCard("全国")}
              >
                <div>
                  <SText style={{ fontSize: "0.9em" }}>
                    {Number(country.ncurrentpatients).toLocaleString()}/
                    {allBedNum?.toLocaleString()}
                  </SText>

                  <SText style={{ fontSize: "0.6em" }}>
                    (全国)現在患者数/対策病床数
                  </SText>
                </div>
              </SCard>
              {countryPatients.map((ob, index) => (
                <SCard key={index} onClick={() => onClickCard(ob.name)}>
                  <SText
                    style={{
                      fontSize: "0.9em",
                      marginTop: "2px",
                      marginBottom: "-1px",
                    }}
                  >
                    {(() => {
                      if (ob.name.includes("都")) {
                        return <span>{ob.name.replace("都", "")}</span>;
                      } else if (ob.name.includes("府")) {
                        return <span>{ob.name.replace("府", "")}</span>;
                      } else if (ob.name.includes("県")) {
                        return <span>{ob.name.replace("県", "")}</span>;
                      } else {
                        return <span>{ob.name}</span>;
                      }
                    })()}
                    {(() => {
                      if (ob.dcurrentpatients > 0) {
                        return (
                          <img
                            style={{ marginLeft: "3px", width: "15px" }}
                            src={IconUp}
                            alt="up"
                          />
                        );
                      } else {
                        return (
                          <img
                            style={{
                              marginLeft: "3px",
                              transform: "rotate(90deg)",
                              width: "15px",
                            }}
                            src={IconDown}
                            alt="down"
                          />
                        );
                      }
                    })()}
                  </SText>
                  <SText style={{ fontSize: "0.8em", marginBottom: "-6px" }}>
                    {ob.percent}%
                  </SText>
                  <SText>
                    <span style={{ fontWeight: "bold", fontSize: "0.7em" }}>
                      {ob.patients.toLocaleString()}
                    </span>
                    <span style={{ fontSize: "0.5em" }}>
                      /{ob.bedRooms.toLocaleString()}
                    </span>
                  </SText>
                </SCard>
              ))}
            </SCardPosition>
          );
        }
      })()}
    </div>
  );
};

const SCard = styled("div")({
  backgroundColor: "black",
  color: "white",
  margin: "3px",
  padding: "2px",
  width: "75px",
  height: "3.3em",
  "&:hover": {
    cursor: "pointer",
  },
});

const SCardPosition = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  marginRight: "0px",
  marginLeft: "30px",
  width: "630px",
});

const SText = styled("div")({
  textAlign: "center",
  margin: "0",
});
