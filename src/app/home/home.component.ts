import { Component, OnInit } from '@angular/core';
import Chart, { ChartOptions, ChartType, ChartDataset, } from 'chart.js/auto';
import {
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  TitleOptions,
  TooltipLabelStyle,
  TooltipOptions
} from 'chart.js';
import { AdminService } from '../service/admin/admin.service';
import { RestauranteMasVentas } from '../models/Restaurante/RestauranteMasVentas';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myChart: any;
  ready: boolean = false;
  restaurantesMasVentas: RestauranteMasVentas[] = [];
  constructor(private adminService : AdminService) { }

  ngOnInit() {

    this.adminService.restaurantesMasVentas().subscribe(
      data=>{
        this.restaurantesMasVentas = data;
        this.ready = true;
        console.log(this.restaurantesMasVentas[0]);
        this.myChart = new Chart('myCanvasId',  {
          type: 'bar',
          data: {
              labels: [this.restaurantesMasVentas[0].nombreRestaurante,this.restaurantesMasVentas[1].nombreRestaurante,
              this.restaurantesMasVentas[2].nombreRestaurante, this.restaurantesMasVentas[3].nombreRestaurante,
              this.restaurantesMasVentas[4].nombreRestaurante,this.restaurantesMasVentas[5].nombreRestaurante,
              this.restaurantesMasVentas[6].nombreRestaurante,this.restaurantesMasVentas[7].nombreRestaurante,
              this.restaurantesMasVentas[8].nombreRestaurante,this.restaurantesMasVentas[9].nombreRestaurante],
              datasets: [{
                  label: '# of Votes',
                  data: [this.restaurantesMasVentas[0].cantidadVentas,this.restaurantesMasVentas[1].cantidadVentas,
                  this.restaurantesMasVentas[2].cantidadVentas, this.restaurantesMasVentas[3].cantidadVentas,
                  this.restaurantesMasVentas[4].cantidadVentas,this.restaurantesMasVentas[5].cantidadVentas,
                  this.restaurantesMasVentas[6].cantidadVentas,this.restaurantesMasVentas[7].cantidadVentas,
                  this.restaurantesMasVentas[8].cantidadVentas,this.restaurantesMasVentas[9].cantidadVentas],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  /* y: {
                      beginAtZero: true
                  } */
              }
          }
      });
      },
      err => {
        console.log(err);
      }
    );
    

  }
    

}
