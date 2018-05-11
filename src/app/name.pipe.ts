import { Pipe, PipeTransform } from '@angular/core';
import { PlayerCreator } from './player-model';

@Pipe({
  name: "name",
  pure: false
})

export class NamePipe implements PipeTransform {
  transform(input: PlayerCreator[], desiredName) {
    let output: PlayerCreator[] = [];
    for (let i = 0; i < input.length; i++) {
      if(input[i].firstName.toLowerCase().includes(desiredName.toLowerCase()) === true) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
