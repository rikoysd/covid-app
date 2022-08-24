import { FC, useCallback, useEffect, useState } from "react";
import { PatientsLineChart } from "../components/PatientsLineChart";
import { PatientsPieChart } from "../components/PatientsPieChart";
import { useFetchPrefectureData } from "../hooks/useFetchPrefectureData";
import type { Prefecture } from "../types/prefecture";
import { useFetchTableInfo } from "../hooks/useFetchTableInfo";
import type { TableInfo } from "../types/tableInfo";
import { useFetchPatients } from "../hooks/useFetchPatients";
import { styled } from "@mui/material";
import countryPatients from "../json/countryPatients.json";
import transport from "../json/transport.json";
import ventilator from "../json/ventilator.json";
import type { Ventilator } from "../types/ventilator";

type Props = {
  setChangeComponentFlag: (boolean: boolean) => void;
  selectedPrefecture: string;
  graphFlag: boolean;
  changePatientsFlag: boolean;
  patientsOfBreakingNews: Prefecture;
  tokyoPatient: Prefecture;
};

export const SwitchPrefecture: FC<Props> = (props) => {
  const {
    setChangeComponentFlag,
    selectedPrefecture,
    graphFlag,
    changePatientsFlag,
    patientsOfBreakingNews,
    tokyoPatient,
  } = props;
  const { patients, getPatients } = useFetchPatients();
  const { prefectures, getPrefectures, country } = useFetchPrefectureData();
  const { info, getTableInfo, allBedNum } = useFetchTableInfo();

  const [targetPrefecture, setTargetPrefecture] = useState<Prefecture>();
  const [hospitalInfo, setHospitalInfo] = useState<TableInfo>();
  const [ventilatorInfo, setVentilatorInfo] = useState<Ventilator>({
    prefecture: "",
    ce: 0,
    ventilator: 0,
    ecmo: 0,
  });

  // 円グラフに使用するデータ
  const [data, setData] = useState<any>({
    cutout: 0,
    labels: ["現在患者数"],
    datasets: [
      {
        label: "Dataset",
        data: [0],
        backgroundColor: ["#F30100"],
        borderColor: ["#FFFFFF"],
        borderWidth: 2,
      },
    ],
  });
  const options = {
    cutout: 0,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {},
    },
    maintainAspectRatio: false,
  };

  // 折れ線グラフに使用するデータ
  const [data2, setData2] = useState<any>({
    labels: [""],
    datasets: [
      {
        label: "入院治療を要する者",
        data: [0],
        backgroundColor: "",
        borderColor: "",
        yAxisID: "A",
      },
      {
        label: "累計死亡者数",
        data: [0],
        backgroundColor: "",
        borderColor: "",
        yAxisID: "B",
      },
    ],
  });

  const options2 = {
    scales: {
      A: {
        position: "right",
        title: {
          display: true,
          text: "入院治療を要する者",
        },
      },
      B: {
        position: "left",
        title: {
          display: true,
          text: "累計死亡者数",
        },
      },
    },
  };

  // 折れ線グラフに使用するデータ(全国)
  const [data3, setData3] = useState<any>({
    labels: [""],
    datasets: [
      {
        label: "救急搬送困難事案数",
        data: [0],
        showLine: false,
        backgroundColor: "",
        borderColor: "",
        yAxisID: "y-axis-transport",
      },
      {
        label: "入院治療を要する者",
        data: [0],
        backgroundColor: "",
        borderColor: "",
        yAxisID: "y-axis-patients",
      },
    ],
  });

  const options3 = {
    scales: {
      "y-axis-transport": {
        position: "left",
        title: {
          display: true,
          text: "救急搬送困難事案数",
        },
      },
      "y-axis-patients": {
        position: "right",
        title: {
          display: true,
          text: "入院治療を要する者",
        },
      },
    },
  };

  useEffect(() => {
    (async () => {
      await getPrefectures();
      await getTableInfo();
      await getPatients(props.selectedPrefecture);
      for (let ob of ventilator) {
        if (ob.prefecture === props.selectedPrefecture) {
          let ventilator: Ventilator = {
            prefecture: ob.prefecture,
            ce: Number(ob.ce),
            ventilator: Number(ob.ventilator) + Number(ob.maskVentilator),
            ecmo: Number(ob.ecmo),
          };
          setVentilatorInfo(ventilator);
        }
      }
    })();
  }, [props.selectedPrefecture]);

  useEffect(() => {
    let data = {
      labels: ["現在患者数", "想定病床残数"],
      datasets: [
        {
          label: "Dataset",
          data: [0],
          backgroundColor: ["#F30100"],
          borderColor: ["#FFFFFF"],
          borderWidth: 2,
        },
      ],
    };

    let data2 = {
      labels: [""],
      datasets: [
        {
          label: "数救急搬送困難事案数",
          data: [0],
          showLine: false,
          backgroundColor: "#F30100",
          borderColor: "#a9a9a9",
          borderWidth: 0.5,
          yAxisID: "y-axis-transport",
        },
        {
          label: "入院治療を要する者",
          data: [0],
          backgroundColor: "#5050cd",
          borderColor: "#5050cd",
          yAxisID: "y-axis-patients",
        },
      ],
    };
    if (props.selectedPrefecture === "全国") {
      const arr = [];
      // 速報
      if (props.changePatientsFlag === true) {
        const patients = Number(props.patientsOfBreakingNews.ncurrentpatients);
        const label = "現在患者数(" + patients + ")";
        arr.push(label);
        const countryData = [patients];
        data.datasets[0].data = countryData;
        setData(data);
        let object: Prefecture = {
          name: "",
          name_jp: "全国",
          npatients: Number(props.patientsOfBreakingNews.npatients),
          ncurrentpatients: Number(
            props.patientsOfBreakingNews.ncurrentpatients
          ),
          nexits: Number(props.patientsOfBreakingNews.nexits),
          ndeaths: Number(props.patientsOfBreakingNews.ndeaths),
        };
        setTargetPrefecture(object);
      } else {
        const patients = Number(country.ncurrentpatients);
        const label = "現在患者数(" + patients + ")";
        arr.push(label);
        const countryData = [patients];
        data.datasets[0].data = countryData;
        setData(data);
        let object: Prefecture = {
          name: "",
          name_jp: "全国",
          npatients: Number(country.npatients),
          ncurrentpatients: Number(country.ncurrentpatients),
          nexits: Number(country.nexits),
          ndeaths: Number(country.ndeaths),
        };
        setTargetPrefecture(object);
      }

      let dateArr: Array<string> = [];
      let transportArr: Array<number> = [];
      let patientsArr: Array<number> = [];
      for (let ob of transport) {
        transportArr.push(Number(ob.transportDifficultNum));
      }
      data2.datasets[0].data = transportArr;
      const beds = Number(country.ncurrentpatients) - Number(allBedNum);
      const label2 = "想定病床残数(-" + beds + ")";
      arr.push(label2);
      data.labels = arr;

      for (let ob of countryPatients) {
        dateArr.push(ob.date);
        patientsArr.push(Number(ob.patients));
      }
      data2.labels = dateArr;
      data2.datasets[1].data = patientsArr;
      setData3(data2);
    } else {
      let currentPatients = 0;
      const arr = [];
      if (props.changePatientsFlag === true) {
        for (let prefecture of prefectures) {
          if (props.selectedPrefecture === prefecture.name_jp) {
            if (props.selectedPrefecture === "東京都") {
              const patients = Number(props.tokyoPatient.ncurrentpatients);
              const label = "現在患者数(" + patients + ")";
              arr.push(label);
              const countryData = [patients];
              data.datasets[0].data = countryData;
              setData(data);
              currentPatients = prefecture.ncurrentpatients;
              let object: Prefecture = {
                name: "",
                name_jp: prefecture.name_jp,
                npatients: prefecture.npatients,
                ncurrentpatients: patients,
                nexits: prefecture.nexits,
                ndeaths: prefecture.ndeaths,
              };
              setTargetPrefecture(object);
            } else {
              const patients = Number(prefecture.ncurrentpatients);
              const label = "現在患者数(" + patients + ")";
              arr.push(label);
              const countryData = [patients];
              data.datasets[0].data = countryData;
              setData(data);
              currentPatients = prefecture.ncurrentpatients;
              let object: Prefecture = {
                name: "",
                name_jp: prefecture.name_jp,
                npatients: prefecture.npatients,
                ncurrentpatients: prefecture.ncurrentpatients,
                nexits: prefecture.nexits,
                ndeaths: prefecture.ndeaths,
              };
              setTargetPrefecture(object);
            }
          }
        }
      } else {
        for (let prefecture of prefectures) {
          if (props.selectedPrefecture === prefecture.name_jp) {
            const patients = Number(prefecture.ncurrentpatients);
            const label = "現在患者数(" + patients + ")";
            arr.push(label);
            const countryData = [patients];
            data.datasets[0].data = countryData;
            setData(data);
            currentPatients = prefecture.ncurrentpatients;
            let object: Prefecture = {
              name: "",
              name_jp: prefecture.name_jp,
              npatients: prefecture.npatients,
              ncurrentpatients: prefecture.ncurrentpatients,
              nexits: prefecture.nexits,
              ndeaths: prefecture.ndeaths,
            };
            setTargetPrefecture(object);
          }
        }
      }

      for (let prefecture of info) {
        if (props.selectedPrefecture === prefecture.name) {
          let object: TableInfo = {
            id: prefecture.id,
            name: prefecture.name,
            patients: Number(prefecture.patients),
            hospitalBeds: Number(prefecture.hospitalBeds),
            hotelRooms: Number(prefecture.hotelRooms),
            bedRooms: Number(prefecture.bedRooms),
            percent: Number(prefecture.percent),
            dcurrentpatients: Number(prefecture.dcurrentpatients),
          };
          setHospitalInfo(object);
          const beds = Number(currentPatients) - object.bedRooms;
          const label = "想定病床残数(-" + beds + ")";
          arr.push(label);
          data.labels = arr;
        }
      }
    }
  }, [prefectures, country, info, allBedNum, ventilatorInfo]);

  useEffect(() => {
    let data = {
      labels: [""],
      datasets: [
        {
          label: "入院治療を要する者",
          data: [0],
          backgroundColor: "#5050cd",
          borderColor: "#5050cd",
        },
        {
          label: "累計死亡者数",
          data: [0],
          backgroundColor: "#000000",
          borderColor: "#000000",
        },
      ],
    };
    let dateArr: Array<string> = [];
    let patientsArr: Array<number> = [];
    let deathsArr: Array<number> = [];
    for (let ob of patients) {
      dateArr.push(ob.date);
      patientsArr.push(ob.patients);
      deathsArr.push(ob.deaths);
    }
    data.labels = dateArr;
    data.datasets[0].data = patientsArr;
    data.datasets[1].data = deathsArr;
    setData2(data);
  }, [patients]);

  useEffect(() => {}, [targetPrefecture, hospitalInfo]);

  const onClickTop = useCallback(() => {
    props.setChangeComponentFlag(false);
  }, []);

  return (
    <div>
      <SPrefecture>
        {(() => {
          if (props.selectedPrefecture === "全国") {
            return (
              <div>
                {targetPrefecture?.name_jp} 現在患者数/対策病床数{" "}
                {Math.floor(
                  (Number(targetPrefecture?.ncurrentpatients) /
                    Number(allBedNum)) *
                    100
                )}
                %
              </div>
            );
          } else {
            return (
              <div>
                {targetPrefecture?.name_jp} 現在患者数/対策病床数{" "}
                {(() => {
                  if (props.selectedPrefecture === "東京都") {
                    return (
                      <span>
                        {Math.floor(
                          (Number(targetPrefecture?.ncurrentpatients) /
                            Number(hospitalInfo?.bedRooms)) *
                            100
                        )}
                        %
                      </span>
                    );
                  } else {
                    return <span>{hospitalInfo?.percent}%</span>;
                  }
                })()}
              </div>
            );
          }
        })()}
      </SPrefecture>
      <PatientsPieChart data={data} options={options}></PatientsPieChart>
      <SData style={{ marginTop: "8px" }}>
        累積陽性者: {Number(targetPrefecture?.npatients).toLocaleString()}人
        &nbsp;累積退院者: {Number(targetPrefecture?.nexits).toLocaleString()}人
      </SData>
      <SData>
        累積死者: {Number(targetPrefecture?.ndeaths).toLocaleString()}人&nbsp;
        {(() => {
          if (props.selectedPrefecture === "全国") {
            return <span>対策病床数: {allBedNum?.toLocaleString()}床</span>;
          } else {
            return (
              <span>
                対策病床数: {hospitalInfo?.bedRooms.toLocaleString()}床
              </span>
            );
          }
        })()}
      </SData>
      <SDocument>
        現在患者数 出典：
        <a
          style={{ color: "#696969" }}
          href="https://www.mhlw.go.jp/content/10906000/000976773.pdf"
        >
          厚生労働省 新型コロナウイルス感染症 各都道府県の検査陽性者の状況
        </a>
        (更新日: 2022-08-16)
      </SDocument>
      <SDocument>
        <a
          style={{ color: "#696969" }}
          href="http://www.jibika.or.jp/members/information/info_corona.html"
        >
          一般社団法人 日本耳鼻咽喉科学会
        </a>
        定義におけるハイリスク地域（現在患者数{" "}
        {Number(targetPrefecture?.ncurrentpatients).toLocaleString()}名 &gt;=
        10名）
      </SDocument>
      <SDocument>
        {(() => {
          if (props.selectedPrefecture !== "全国") {
            return (
              <span>
                対策病床数 医療機関{hospitalInfo?.hospitalBeds.toLocaleString()}
                床+宿泊施設{hospitalInfo?.hotelRooms.toLocaleString()}室 出典:
                <a
                  style={{ color: "#696969" }}
                  href="https://www.mhlw.go.jp/stf/seisakunitsuite/newpage_00023.html"
                >
                  新型コロナウイルス対策病床数オープンデータ
                </a>
                (発表日: 2022-08-10)
              </span>
            );
          }
        })()}
      </SDocument>
      <SDocument style={{ marginTop: "20px" }}>
        (参考) 臨床工学技士:
        {(() => {
          if (ventilatorInfo.ce === null) {
            return <span>-人</span>;
          } else {
            return <span>{Number(ventilatorInfo.ce).toLocaleString()}人</span>;
          }
        })()}
        &nbsp;マスク専用含む人工呼吸器取扱:
        {ventilatorInfo.ventilator.toLocaleString()}台 ECMO装置取扱:
        {ventilatorInfo.ecmo.toLocaleString()}台
      </SDocument>
      <SDocument>
        2020年2月回答 出典:
        <a
          style={{ color: "#696969" }}
          href="https://ja-ces.or.jp/info-ce/%e4%ba%ba%e5%b7%a5%e5%91%bc%e5%90%b8%e5%99%a8%e3%81%8a%e3%82%88%e3%81%b3ecmo%e8%a3%85%e7%bd%ae%e3%81%ae%e5%8f%96%e6%89%b1%e5%8f%b0%e6%95%b0%e7%ad%89%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e7%b7%8a/"
        >
          一般社団法人 日本呼吸療法医学会 公益社団法人 日本臨床工学技士会
        </a>
      </SDocument>
      {(() => {
        if (props.graphFlag === true) {
          return (
            <PatientsLineChart
              data={data3}
              options={options3}
            ></PatientsLineChart>
          );
        } else {
          return (
            <PatientsLineChart
              data={data2}
              options={options2}
            ></PatientsLineChart>
          );
        }
      })()}

      <SButtonPosition>
        <SButton onClick={onClickTop}>戻る</SButton>
      </SButtonPosition>
    </div>
  );
};

const SPrefecture = styled("div")({
  fontSize: "23px",
  textAlign: "center",
  margin: "30px 0 0 20px",
});

const SData = styled("div")({
  fontSize: "18px",
  textAlign: "center",
});

const SDocument = styled("div")({
  fontSize: "12px",
  textAlign: "center",
});

const SButtonPosition = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const SButton = styled("button")({
  width: "100px",
  height: "40px",
  marginTop: "10px",
  marginBottom: "60px",
  fontSize: "1.0em",
  "&:hover": {
    cursor: "pointer",
  },
});
