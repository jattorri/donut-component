import React from "react";


import PieChart, {
    Legend,
    Series,
    Tooltip,
    Format,
    Label,
    Connector,
    Export
  } from 'devextreme-react/pie-chart';

const Donut = ({config}) =>{

    const {title, palette, dataSource, labelVisible, connectorVisible, exportEnabled, margin, tooltipEnabled, formatType} = config;

    const customizeTooltip = (arg) =>{
        return {
          text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`
        };
      }
      
        return (
          <PieChart
            id="pie"
            type="doughnut"
            title={title}
            palette={palette}
            dataSource={dataSource}
          >
            <Series argumentField="region">
              <Label visible={labelVisible} format={formatType}>
                <Connector visible={connectorVisible} />
              </Label>
            </Series>
            <Export enabled={exportEnabled} />
            <Legend
              margin={margin}
              horizontalAlignment="right"
              verticalAlignment="top"
            />
            <Tooltip enabled={tooltipEnabled} customizeTooltip={customizeTooltip}>
              <Format type={formatType} />
            </Tooltip>
          </PieChart>
        );
    }


export default Donut;