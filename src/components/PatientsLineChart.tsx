import { FC } from "react";
import { styled } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  CategoryScale,
  registerables,
} from "chart.js";
Chart.register(ArcElement, Tooltip, CategoryScale, ...registerables);

type Props = {
  data: any;
  options: any;
};

export const PatientsLineChart: FC<Props> = (props) => {
  const { data, options } = props;

  return (
    <SContainer>
      <div>
        <Line
          width={700}
          height={500}
          data={props.data}
          options={props.options}
        ></Line>
      </div>
    </SContainer>
  );
};

const SContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});
