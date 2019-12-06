import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
//import {AlumnoService} from '../../../services/ges-usu/alumno.service';
//import {DeleteAlumnoModel, GesUsuAlumnoModel} from '../../../models/ges-usu/ges-usu-alumno.model';
import { LibretaNotasModel, CursosdelPrograma } from '../../../models/ges-nota/libreta-notas.model';
import { ProgramaAlumnoModel, ListProgramas } from '../../../models/ges-nota/alumno-list-programas.model';
import { AlumnoLibretaNotasService } from '../../../services/ges-notas/alumno-libretanotas.service';
import {SeguridadService} from '../../../services/authentication/seguridad.service';

@Component({
  selector: 'ngx-libreta-notas',
  styleUrls: ['./libreta-notas.component.scss'],
  templateUrl: './libreta-notas.component.html',
})
export class LibretaNotasComponent implements OnInit {
 
  loading = false;
  nomalu: string;
  dnialu: string;
  selectedPrograma:ListProgramas;
  listProgramas:ListProgramas[];
  listCursos: CursosdelPrograma[];
  listaCursosAlumno: LibretaNotasModel[]=[];
  listaProgramasAlumno: ProgramaAlumnoModel[]=[];

  constructor(private router: Router, private alumnolistprogramasservice:AlumnoLibretaNotasService,
    private seguridadService: SeguridadService) {
    this.nomalu="Alumno";
  }

  ngOnInit(): void {
    this.dnialu=this.seguridadService.getTokenAsObj().jti;
    console.log('token', this.dnialu);
    this.listarProgramasAlumno();    

  }

  listarProgramasAlumno() {
    this.loading = true;
    this.alumnolistprogramasservice.getListarProgramaAlumno(this.dnialu)
      .subscribe(res => {
        this.listaProgramasAlumno = res;
        // this.nomalu= this.listaProgramasAlumno[0].alunom+" "+this.listaProgramasAlumno[0].aluapepat+" "+
        //               this.listaProgramasAlumno[0].aluapemat;
        
        this.listProgramas=this.listaProgramasAlumno[0].programas;
        console.log("Programa alumno ",this.listaProgramasAlumno);
        console.log("Programa lista ",this.listProgramas);
        this.loading = false;
      });
  }
  
  seleccionPrograma(){
    console.log(this.selectedPrograma.proid);
    this.listarCursosAlumno(this.selectedPrograma.proid, this.dnialu);
  }

  listarCursosAlumno(codPro:any, aludni:any ) {
    this.loading = true;
    this.alumnolistprogramasservice.getListarCursosAlumno(codPro, aludni)
      .subscribe(res => {
        this.listaCursosAlumno = res;//res
        this.listCursos=this.listaCursosAlumno[0].cursos;
        for (let i = 0; i < this.listCursos.length; i++) {
          if(Number(this.listCursos[i].notfinpromfinal)>= 11){
            this.listCursos[i].notfinestado= "APROBADO";
            //console.log('ESTADO: ',this.listaNotasFinales[posicion].notfinestado);
          }else {
            this.listCursos[i].notfinestado= "DESAPROBADO";
            //console.log('ESTADO: ',this.listaNotasFinales[posicion].notfinestado);
          }
        }
        this.loading= false;
        console.log("Cursos lista ",this.listaCursosAlumno);
        console.log("Cursos lista ",this.listCursos);
      });
  }
  
  
  
}




