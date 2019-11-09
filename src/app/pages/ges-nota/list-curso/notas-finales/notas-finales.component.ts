import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlumnoNotasFinalesModel } from '../../../../models/ges-nota/alumno-notas-finales.model';
import { AlumnoListNotasFinalesService } from '../../../../services/ges-notas/alumno-listnotasfinales.service';

@Component({
  selector: 'ngx-notas-finales',
  styleUrls: ['./notas-finales.component.scss'],
  templateUrl: './notas-finales.component.html',
})

export class NotasFinalesComponent implements OnInit {
  idCur: any;
  nombCur: any;
  cars: any[];
  loading = false;
  listaNotasFinales: AlumnoNotasFinalesModel[] = [];


  constructor(private route: ActivatedRoute, private alumnolistnotasfinalesservice: AlumnoListNotasFinalesService) {
    this.nombCur="curso";
    this.cars = [
      { "aludni": "22334455", "alunom": "Jorge", "aluapepat": "Gonzáles", "aluapemat": "Pérez", "not1val": "16", "not2val": "17", "not3val": "18", "notprom": "17", "notfinal": "0", },
      { "aludni": "22334455", "alunom": "Luis", "aluapepat": "Flores", "aluapemat": "Salas", "not1val": "15", "not2val": "19", "not3val": "10", "notprom": "16", "notfinal": "0", },
      { "aludni": "22334455", "alunom": "Jaime", "aluapepat": "Araujo", "aluapemat": "Silva", "not1val": "12", "not2val": "11", "not3val": "18", "notprom": "13", "notfinal": "0", }
    ];

    route.params.subscribe(
      data => {
        this.idCur = data.curid;
      },
    );
  }

  ngOnInit(): void {
    this.listarAlumnoNotasFinales();    
    console.log("id del curso ", this.idCur);
  }

  listarAlumnoNotasFinales() {
    this.loading = true;
    this.alumnolistnotasfinalesservice.getListarNotasFinalesAlumnos(this.idCur)
      .subscribe(res => {
        this.listaNotasFinales = res;
        this.nombCur=this.listaNotasFinales[0].curnom;
        this.loading = false;
        console.log("Notas alumnos ", this.listaNotasFinales);
      });
  }

  actualizarListNotasParcial1(posicion, descripcion) {
    if (descripcion.value) {
      if (descripcion.value >= 0 && descripcion.value <= 20) {
        this.listaNotasFinales[posicion].notas[1] = descripcion.value;
        console.log(this.listaNotasFinales[posicion].notas[1]);
        console.log('valido');

        this.listaNotasFinales[posicion].notfinpromfinal= String(Math.ceil((Number(this.listaNotasFinales[posicion].notas[1])+
                                                            Number(this.listaNotasFinales[posicion].notas[2])+
                                                            Number(this.listaNotasFinales[posicion].notas[3]) )/3));
        console.log("Promedio ",this.listaNotasFinales[posicion].notfinpromfinal);

        if(Number(this.listaNotasFinales[posicion].notfinpromfinal)>= 11){
          this.listaNotasFinales[posicion].notfinestado= "APROBADO";
          console.log('ESTADO: ',this.listaNotasFinales[posicion].notfinestado);
        }else {
          this.listaNotasFinales[posicion].notfinestado= "DESAPROBADO";
          console.log('ESTADO: ',this.listaNotasFinales[posicion].notfinestado);
        }

      } else {
        console.log('invalido');
        descripcion.value = '0';
      }
    } else {
      console.log('no escribio nada');
    }
  }

  actualizarListNotasParcial2(posicion, descripcion) {
    if (descripcion.value) {
      if (descripcion.value >= 0 && descripcion.value <= 20) {
        this.listaNotasFinales[posicion].notas[2] = descripcion.value;
        console.log(this.listaNotasFinales[posicion].notas[2]);
        console.log('valido');
        
        this.listaNotasFinales[posicion].notfinpromfinal= String(Math.ceil((Number(this.listaNotasFinales[posicion].notas[1])+
                                                            Number(this.listaNotasFinales[posicion].notas[2])+
                                                            Number(this.listaNotasFinales[posicion].notas[3]) )/3));
        console.log("Promedio ",this.listaNotasFinales[posicion].notfinpromfinal);
        
        if(Number(this.listaNotasFinales[posicion].notfinpromfinal)>= 11){
          this.listaNotasFinales[posicion].notfinestado= "APROBADO";
          console.log('ESTADO: ',this.listaNotasFinales[posicion].notfinestado);
        }else {
          this.listaNotasFinales[posicion].notfinestado= "DESAPROBADO";
          console.log('ESTADO: ',this.listaNotasFinales[posicion].notfinestado);
        }
      } else {
        console.log('invalido');
        descripcion.value = '0';
      }

    } else {
      console.log('no escribio nada');
    }
  }

  actualizarListNotasParcial3(posicion, descripcion) {
    if (descripcion.value) {
      if (descripcion.value >= 0 && descripcion.value <= 20) {
        this.listaNotasFinales[posicion].notas[3] = descripcion.value;
        console.log(this.listaNotasFinales[posicion].notas[3]);
        console.log('valido');

        this.listaNotasFinales[posicion].notfinpromfinal= String(Math.ceil((Number(this.listaNotasFinales[posicion].notas[1])+
                                                            Number(this.listaNotasFinales[posicion].notas[2])+
                                                            Number(this.listaNotasFinales[posicion].notas[3]) )/3));
        console.log("Promedio ",this.listaNotasFinales[posicion].notfinpromfinal);
        
        if(Number(this.listaNotasFinales[posicion].notfinpromfinal)>= 11){
          this.listaNotasFinales[posicion].notfinestado= "APROBADO";
          console.log('ESTADO: ',this.listaNotasFinales[posicion].notfinestado);
        }else {
          this.listaNotasFinales[posicion].notfinestado= "DESAPROBADO";
          console.log('ESTADO: ',this.listaNotasFinales[posicion].notfinestado);
        }

      } else {
        console.log('invalido');
        descripcion.value = '0';
      }
    } else {
      console.log('no escribio nada');
    }
  }

  actualizarListNotasFinal(posicion, descripcion) {
    if (descripcion.value) {
      if (descripcion.value >= 0 && descripcion.value <= 20) {
        this.listaNotasFinales[posicion].notfinpromfinal = descripcion.value;
        console.log(this.listaNotasFinales[posicion].notfinpromfinal);
        console.log('valido');

        if(Number(this.listaNotasFinales[posicion].notfinpromfinal)>= 11){
          this.listaNotasFinales[posicion].notfinestado= "APROBADO";
          console.log('ESTADO: ',this.listaNotasFinales[posicion].notfinestado);
        }else {
          this.listaNotasFinales[posicion].notfinestado= "DESAPROBADO";
          console.log('ESTADO: ',this.listaNotasFinales[posicion].notfinestado);
        }

      } else {
        console.log('invalido');
        descripcion.value = '0';
      }
    } else {
      console.log('no escribio nada');
    }
  }

  subirNotas() {
    this.loading = true;
    console.log('antes de guardar: ',this.listaNotasFinales);
    this.alumnolistnotasfinalesservice.saveNotasFinalesAlumnos(this.listaNotasFinales).subscribe(//--listaAlumnosNotas
      resp => {
        this.loading = false;
      },
      err => {
        console.log(err);
      });
    console.log("Nota guardada exitosamente ");

  }


}