import {Component, Injectable} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, merge} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // checked = false;
  // indeterminate = false;
  // labelPosition = 'after';
  // disabled = false;

  // autoTicks = false;
  // disabled = false;
  // invert = false;
  // max = 100;
  // min = 0;
  // showTicks = false;
  // step = 1;
  // thumbLabel = false;
  // value = 0;
  // vertical = false;

  // get tickInterval(): number | 'auto' {
  //   return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  // }
  // set tickInterval(v) {
  //   this._tickInterval = Number(v);
  // }
  // private _tickInterval = 1;

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  // options: FormGroup;

  // constructor(fb: FormBuilder) {
  //   this.options = fb.group({
  //     'fixed': false,
  //     'top': 0,
  //     'bottom': 0,
  //   });
  // }
  // tiles = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];
  // typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
//   isLinear = false;
//   firstFormGroup: FormGroup;
//   secondFormGroup: FormGroup;

//   constructor(private _formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.firstFormGroup = this._formBuilder.group({
//       firstCtrl: ['', Validators.required]
//     });
//     this.secondFormGroup = this._formBuilder.group({
//       secondCtrl: ['', Validators.required]
//     });
//   }
// // }
// constructor(public item: string, public level: number = 1, public expandable: boolean = false,
//   public isLoading: boolean = false) {}
}

