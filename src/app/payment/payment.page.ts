import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  cal :  any[]=[];
  data: any[]=[];
  Names : any;
  get : any;
  constructor(private fb: FormBuilder,private route:ActivatedRoute, private router: Router) {
    this.data= [
      {
        "name": "oranges",
        "type": "minivan", 
        "registration": new Date('2017-01-03'),
        "capacity": 7
      },
      {
        "name": "apples",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5 
      },
         
    ];
   }
  ngOnInit() {
  
  }
  //onSubmit(){
 //var arr = [(this.cal)];
//var string= arr.toString();

//const capacity = this.data.filter(data =>(data.name === ([...this.cal])));

//console.log(capacity);
//console.log(...this.cal);

  
 // }

  navigate(){
    this.router.navigate(['/veiw'])
    
  }
  onSubmit(cal) {
    const capacity = this.data.filter(data => (data.name === (this.cal)));
    if (this.data.includes(this.cal)) {
      this.data = this.data.filter(data => (data.name === (this.cal)));
      //console.log("=====", this.data);
    } else {
     //// this.data.push(this.cal)
      console.log(this.data)
    }
  }

}
