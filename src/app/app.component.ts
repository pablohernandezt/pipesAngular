import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  togglePassword(){
    
    this.activar = !this.activar;
  }

nombre:string = "Capitan America";
nombre2:string = "pAbLo hErNaNdeZ";
PI: number = Math.PI;
porcentaje:number = 0.234;
salario: number= 1234.5;
fecha: Date = new Date();
videoUrl:string = 'https://www.youtube.com/embed/hEiIUd9RIaY';
activar:boolean = true;

idioma:string ='en';

valorPromesa = new Promise<string>((resolve) =>{
  setTimeout(()=>{
      resolve('Llego la data');
  }, 4500)
})

heroe = {
  nombre: 'Logan',
  clave: 'Lobezno',
  edad: 500,
  direccion:{
    calle:'Primera',
    casa: 20
  }
}

arreglo = [1,2,3,4,5,6,7,8,9,10];


}


