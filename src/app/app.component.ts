import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {Chart, registerables} from 'chart.js';
// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'chartsApi';
  results: any;
  coinPrice: any;
  coinName: any;
  chart: any = [];
  constructor(private service: AuthService){
    Chart.register(...registerables);
  }

  ngOnInit(){
    this.service.cryptoData().subscribe((data:any)=>{
      this.results = data;
      console.log(data);
      //Grabbing the coins Price
      this.coinPrice = this.results.data.coins.map((coin: any)=>{
          return coin.price;
      })

      //Grabbing the coins name
       this.coinName = this.results.data.coins.map((coin: any)=>{
          return coin.name;
      })

      console.log(this.coinName, this.coinPrice);
      console.log(typeof(this.coinName))

      //show the chart data
      // const ctx = document.getElementById('myChart');
      this.chart = new Chart('canvas',{
        type: 'line',
        data: {
          labels: this.coinName,
          datasets: [{
              label: 'Coin Price',
              data: this.coinPrice,
              borderWidth: 3,
              fill: false,
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderColor: '#3e95cd',
          }]
      },
     
      })
    });
  }
}
