import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePassword'
})
export class PipePasswordPipe implements PipeTransform {

  transform(value: any, encrypt:boolean=true, caracter:string="*"): any {
    let cadena:string = "";
    if(encrypt){
      for(let i =0; i < value.length; i++){
        cadena += "*";
      }
      cadena = value.replace(/./g, caracter);
    }else{
      cadena = value;
    }
    return cadena;
  }

}
