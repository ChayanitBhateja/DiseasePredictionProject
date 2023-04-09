import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

class BarChart8 extends Component {
  render() {
    const data = {
      defaultFontFamily: 'Poppins',
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Expense',
          backgroundColor: '#ff7a01',
          hoverBackgroundColor: '#142193',
          label2: 'My First dataset',
          data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 95, 54, 35],
        },
      ],
    }
    const options = {
      legend: false,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true,
              display: false,
              max: 100,
              min: 0,
              stepSize: 10,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            display: false,
            barPercentage: 0.4,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
    }

    return (
      <>
        <Bar data={data} height={100} options={options} />
      </>
    )
  }
}

export default BarChart8
