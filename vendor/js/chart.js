
// Viewer

const ctx = document.getElementById('myView');
const myView = new Chart(ctx, {
   type: 'line',
  data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Set' ,'Oct','Nov','Dec'],
      datasets: [
          {
              label: 'Viewer',
              data: [12, 19, 3, 5, 2, 3, 1,1,4,1,3,6],
              backgroundColor: [
               'rgb(123, 140, 222)',

              ],
              borderColor: [
               'rgb(123, 140, 222)',

              ],
              borderWidth: 1,
              tension:0.2
          },
      ]
  },
  options: {
      scales: {
         y : {
            beginAtZero: true,
            ticks:{
               display : false
            },
            grid: {
               // display : false,
               drawTicks: false,
               drawOnChartArea : false
            }
         }
      },
      plugins: {
      legend: {
          display: false,
      }
  }
  }
});


const category = document.getElementById('cat');
const cat = new Chart(category, {
   type: 'pie',
   data: {
      labels: ['Apple', 'Orange', 'Mango', 'Banana', 'Cherry'],
      datasets: [{
            label: '# of Votes',
            data: [12, 11, 3, 5, 2],
            backgroundColor: [
               '#c200fb',
               '#ec0868',
               '#009ddc',
               '#ec7d10',
               '#ffbc0a',
            ],
            borderColor: [
               '#c200fb',
               '#ec0868',
               '#009ddc',
               '#ec7d10',
               '#ffbc0a',
            ],
            borderWidth : 1
      }]
   },
   options: {
      plugins: {
            legend: {
               display: true,
               position: 'bottom',
               labels: {
                  color: 'rgb(255, 99, 132)',
                  pointStyle: 'circle',
                  usePointStyle: 'boolean',
               }
            }
      }
   }
});



// Date

const date = document.getElementById('myDate');
const myDate = new Chart(date, {
type: 'bar',
data: {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' , 'Sun'],
  datasets: [{
      label: 'Viewer',
      data: [12, 19, 3, 5, 2, 3, 2],
      backgroundColor: [
          'rgb(123, 140, 222)',
      ],
      borderWidth: 1
  }]
},
options: {
   plugins: {
         legend: {
            display: false,
            labels: {
               color: 'rgb(255, 99, 132)'
            }
         }
   },
   scales: {
         y : {
            beginAtZero: true,
            ticks:{
               display : false
            },
            grid: {
               // display : false,
               drawTicks: false,
               drawOnChartArea : false
            }
         }
      },
}
});