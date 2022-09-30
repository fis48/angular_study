import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public barChartData: ChartData<'bar'> = {
    labels: ["Label 1", "Label 2"],
    datasets: [
      { data: [20, 40, 50], label: "Data label" },
      { data: [30, 43, 48], label: "Data label" }
    ]
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
  }

  public barChartType:ChartType = "bar";

  constructor() { }

  ngOnInit(): void {
  }

}
