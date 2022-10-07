import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"trim"})
export class SplChar implements PipeTransform{
    transform(value: any):any {
            return value.replace(/[!@#$%^&*]/g,'');
    }
}
