import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {AlumnoService} from '../../../services/ges-usu/alumno.service';
//import {DeleteAlumnoModel, GesUsuAlumnoModel} from '../../../models/ges-usu/ges-usu-alumno.model';
import { AlumnoAplazadosModel, CursosAplazadosdelPrograma } from '../../../models/ges-nota/alumno-aplazados.model';
import { ProgramaAlumnoModel, ListProgramas } from '../../../models/ges-nota/alumno-list-programas.model';
import { AlumnoNotasFinalesModel } from '../../../models/ges-nota/alumno-notas-finales.model';
import { AlumnoLibretaNotasService } from '../../../services/ges-notas/alumno-libretanotas.service';
import { AlumnoAplazadosService } from '../../../services/ges-notas/alumno-aplazados.service';
import {SeguridadService} from '../../../services/authentication/seguridad.service';

import { Observable } from 'rxjs';
import { AlumnoService } from '../../../services/ges-usu/alumno.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ngx-nota-aplazados',
  styleUrls: ['./nota-aplazados.component.scss'],
  templateUrl: './nota-aplazados.component.html',
})
export class NotaAplazadosComponent implements OnInit {

  loading = false;
  listaProgramasAlumno: ProgramaAlumnoModel[] = []; //datos del alumno+programas[]
  selectedPrograma: ListProgramas;
  listProgramas: ListProgramas[];                   //programas: proid+pronom
  listaCursosAplazados: AlumnoAplazadosModel[] = [];
  listCursos: CursosAplazadosdelPrograma[];
  listGuardarAplazados: AlumnoNotasFinalesModel[] = [];
  dniAlumno: any;
  dniadm: any;
  dim: any;
  public myformmatricula: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private alumnolistprogramasservice:
    AlumnoLibretaNotasService, private alumnoservice: AlumnoService, private alumnoaplazadosservice: AlumnoAplazadosService,
    private seguridadService: SeguridadService) {
    this.myformmatricula = this.fb.group({

      aludni: [null, Validators.required]

    });
  }

  ngOnInit(): void {
    this.dniadm=this.seguridadService.getTokenAsObj().jti;
    //console.log('token', this.dniadm);
    //this.listarProgramasAlumno();

  }

  searchAlumnoXdni = (text$: Observable<string>) => {
    console.log('entro al filtro searchalumnoxDNI');
    return text$.filter((t: string) => t.length > 1)
      .debounceTime(200)
      .switchMap((text: string) => {
        const dni = text;
        return this.alumnoservice.postBuscarAlumnoxParteId(dni);

      });

  }

  formatearEntradaAlumnoXdni = (result: any) =>
    result.alunom + ' ' +
    result.aluapepat + ' ' +
    result.aluapemat + ' - ' + 'dni: ' +
    result.aludni

  listarProgramasAlumno() {
    this.loading = true;
    console.log("dni alumno form", this.myformmatricula.get('aludni').value);
    this.dniAlumno = this.myformmatricula.get('aludni').value;
    console.log("dni alumno ", this.dniAlumno.aludni);

    this.alumnolistprogramasservice.getListarProgramaAlumno(this.dniAlumno.aludni)
      .subscribe(res => {
        this.listaProgramasAlumno = res;
        this.loading = false;
        this.listProgramas = this.listaProgramasAlumno[0].programas;
        console.log("Programa alumno ", this.listaProgramasAlumno);
        console.log("Programa lista ", this.listProgramas);
        this.loading = false;
      });
  }

  seleccionPrograma() {
    console.log(this.selectedPrograma.proid);
    this.listarCursosAplazados(this.selectedPrograma.proid, this.dniAlumno.aludni);
  }

  listarCursosAplazados(codPro: any, aludni: any) {
    this.loading = true;
    this.alumnoaplazadosservice.getListarCursosAlumno(codPro, aludni)
      .subscribe(res => {
        this.listaCursosAplazados = res;//res
        this.listCursos = this.listaCursosAplazados[0].cursos;
        this.loading = false;
        console.log("Cursos lista ", this.listaCursosAplazados);
        console.log("Cursos lista ", this.listCursos);

        this.dim = this.listCursos.length;
        console.log('longitud', this.dim);
        
        console.log('lista notas aplazados', this.listGuardarAplazados);
        //copiar a objeto AlumnoNotasFinalesModel
        //listGuardarAplazados: AlumnoNotasFinalesModel[] = [];
        //this.listGuardarAplazados = new Array<AlumnoNotasFinalesModel>(this.listCursos.length) ;
        for (let i = 0; i < this.dim; i++) {
          this.listGuardarAplazados.push(new AlumnoNotasFinalesModel);
        }

        for (let i = 0; i < this.dim; i++) {
          this.listGuardarAplazados[i].aludni = this.listaCursosAplazados[0].aludni;
          this.listGuardarAplazados[i].curid = this.listaCursosAplazados[0].cursos[i].curid;
          this.listGuardarAplazados[i].curcod = this.listaCursosAplazados[0].cursos[i].curcod;
          this.listGuardarAplazados[i].curnom = this.listaCursosAplazados[0].cursos[i].curnom;
          this.listGuardarAplazados[i].turid = this.listaCursosAplazados[0].cursos[i].turid;
          this.listGuardarAplazados[i].turnom = this.listaCursosAplazados[0].cursos[i].turnom;
          this.listGuardarAplazados[i].notfinestado = this.listaCursosAplazados[0].cursos[i].notfinestado;
          this.listGuardarAplazados[i].notfinpromfinal = this.listaCursosAplazados[0].cursos[i].notfinpromfinal;
          this.listGuardarAplazados[i].notfinaplazado = this.listaCursosAplazados[0].cursos[i].notfinaplazado;

        }
        console.log('lista notas aplazados', this.listGuardarAplazados);


      });



  }

  actualizarListNotasAplazados(posicion, descripcion) {
    if (descripcion.value) {
      if (descripcion.value >= 0 && descripcion.value <= 20) {
        this.listGuardarAplazados[posicion].notfinaplazado = descripcion.value;
        console.log(this.listGuardarAplazados[posicion].notfinaplazado);
        console.log('valido');

        if(Number(this.listGuardarAplazados[posicion].notfinaplazado)>= 11) {
          this.listGuardarAplazados[posicion].notfinestado= "APROBADO";
          console.log('ESTADO: ',this.listGuardarAplazados[posicion].notfinestado);
        }
        if(Number(this.listGuardarAplazados[posicion].notfinaplazado)< 11){
          this.listGuardarAplazados[posicion].notfinestado= "DESAPROBADO";
          console.log('ESTADO: ',this.listGuardarAplazados[posicion].notfinestado);
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
    console.log('antes de guardar: ', this.listGuardarAplazados);
    this.alumnoaplazadosservice.saveNotasAplazadosAlumnos(this.listGuardarAplazados).subscribe(//--listGuardarAplazados
      resp => {
        this.loading = false;
      },
      err => {
        console.log(err);
      });
    console.log("Nota guardada exitosamente ");

  }



}




