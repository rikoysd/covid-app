import { FC, useEffect, useState } from "react";
import { PatientsLineChart } from "./PatientsLineChart";
import countryPatients from "../json/countryPatients.json";
import transport from "../json/transport.json";
import { styled } from "@mui/material";

export const MainTopic: FC = () => {
  // 折れ線グラフに使用するデータ(全国)
  const [data, setData] = useState<any>({
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

  const options = {
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
    let newData = {
      labels: [""],
      datasets: [
        {
          label: "救急搬送困難事案数",
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
    let dateArr: Array<string> = [];
    let transportArr: Array<number> = [];
    let patientsArr: Array<number> = [];
    for (let ob of transport) {
      transportArr.push(Number(ob.transportDifficultNum));
    }
    newData.datasets[0].data = transportArr;
    for (let ob of countryPatients) {
      dateArr.push(ob.date);
      patientsArr.push(Number(ob.patients));
    }
    newData.labels = dateArr;
    newData.datasets[1].data = patientsArr;
    setData(newData);
  }, []);

  return (
    <SLine>
      <PatientsLineChart data={data} options={options}></PatientsLineChart>
    </SLine>
  );
};

const SLine = styled("div")({
  margin: "40px",
});
