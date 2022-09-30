import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getPercentage'
})
export class LearnPipe implements PipeTransform {

  transform(value:number, wantedPerc:number): number {
    const percentage = value * (wantedPerc / 100);
    return percentage;
  }

}
