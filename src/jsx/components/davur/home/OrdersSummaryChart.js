import React from "react";
import ReactApexChart from "react-apexcharts";

class OrderSummaryChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [45, 35, 20],
      options: {
        chart: {
          width: 140,
          height: 140,
          type: "donut",
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#ff5c5a", "#2bc156", "#404a56"],
        plotOptions: {
          pie: {
            customScale: 1,
            donut: {
              size: "50%",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },

        responsive: [
          {
            breakpoint: 1300,
            options: {
              chart: {
                width: 120,
                height: 120,
              },
            },
          },
        ],
        legend: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="donut"
        height="120px"
      />
    );
  }
}

export default OrderSummaryChart;
