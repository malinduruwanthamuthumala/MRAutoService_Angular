import {Pipe,PipeTransform} from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
    name:'upper',
})

export class uppercase implements PipeTransform {


    transform(value: String, ...args: any[]) {
        if(!value || typeof value !== 'string' ){
            return '';
        }
        else{
            return value.toUpperCase();
        }
    }
    
}