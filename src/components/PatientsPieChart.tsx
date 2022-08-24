import { FC } from "react";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(ArcElement, Tooltip);

type Props = {
  data: any;
  options: any;
};

export const PatientsPieChart: FC<Props> = (props) => {
  const { data, options } = props;

  return (
    <div>
      <div></div>
      <Pie width={300} height={300} data={props.data} options={props.options} />
    </div>
  );
};
