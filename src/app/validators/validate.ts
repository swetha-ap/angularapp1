import { AbstractControl, ValidationErrors } from "@angular/forms";

export class myValidators{
    static containSpace(control:AbstractControl):ValidationErrors | null{
        let val=control.value;
        // console.log(typeof val)
        if(val.indexOf(' ') != -1){
            return {containSpace:true}
        }
        return null
    }

    static nosplchar(control:AbstractControl):ValidationErrors | null{
        let val=control.value;
        let pattern=/[`!@#]/
        console.log(pattern.test(val))
        if(pattern.test(val)){
            return {nosplchar:true}
        }
        return null
    }
}