import * as React from "react";
import { Chart } from "react-google-charts";
 
function SuperChart (props) {
  return (
    <Chart
      chartType="LineChart"
      rows={props.entrada}/** representa um array que para cada valor dentro desse array tem [tempo,montante] */
      columns={[
        {
          type: "number",
          label: "Tempo"
        },
        {
          type: "number",
          label: "Montante Acumulado"
        }
      ]}
      options={
        // Chart options
        {
          title: " "/*"Juros Compostos" */,
          hAxis: {/** eixo horizontal é o tempo */
            title: "Tempo",
            viewWindow: { min: 1, max: props.entrada.length }/** */
          },
          /**eixo vertical é o montante */
          vAxis: { title: "Montante Acumulado",
          viewWindow: { min: 0, max: props.entrada[props.entrada.length-1] || 1 } },
          legend: "none"
        }
      }
      width={"100%"}
      height={"400px"}
      legendToggle
    />
  );
};
export default SuperChart;