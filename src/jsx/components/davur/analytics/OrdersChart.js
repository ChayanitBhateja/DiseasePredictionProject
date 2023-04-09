import React from "react";
import ReactApexChart from "react-apexcharts";

class OrderChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Net Profit",
          data: [50, 70, 40, 80, 30, 60, 100],
          //radius: 12,
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        colors: ["#2f4cdd"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          shape: "circle",
        },
        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["#2f4cdd"],
        },

        grid: {
          borderColor: "#eee",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
          labels: {
            style: {
              colors: "#3e4954",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: 100,
              cssClass: "apexcharts-xaxis-label",
            },
          },
          crosshairs: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#3e4954",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: 100,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="area"
        height="350"
      />
    );
  }
}

export default OrderChart;
