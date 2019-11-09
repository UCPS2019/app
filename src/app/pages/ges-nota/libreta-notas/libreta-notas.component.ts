import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
//import {AlumnoService} from '../../../services/ges-usu/alumno.service';
//import {DeleteAlumnoModel, GesUsuAlumnoModel} from '../../../models/ges-usu/ges-usu-alumno.model';
import { LibretaNotasModel, CursosdelPrograma } from '../../../models/ges-nota/libreta-notas.model';
import { ProgramaAlumnoModel, ListProgramas } from '../../../models/ges-nota/alumno-list-programas.model';
import { AlumnoLibretaNotasService } from '../../../services/ges-notas/alumno-libretanotas.service';

@Component({
  selector: 'ngx-libreta-notas',
  styleUrls: ['./libreta-notas.component.scss'],
  templateUrl: './libreta-notas.component.html',
})
export class LibretaNotasComponent implements OnInit {
 
  loading = false;
  nomalu: string;
  selectedPrograma:ListProgramas;
  listProgramas:ListProgramas[];
  listCursos: CursosdelPrograma[];
  listaCursosAlumno: LibretaNotasModel[]=[];
  listaProgramasAlumno: ProgramaAlumnoModel[]=[];

  constructor(private router: Router, private alumnolistprogramasservice:AlumnoLibretaNotasService) {
    this.nomalu="Alumno";
  }

  ngOnInit(): void {
    this.listarProgramasAlumno();    

  }

  listarProgramasAlumno() {
    this.loading = true;
    this.alumnolistprogramasservice.getListarProgramaAlumno('12345678')
      .subscribe(res => {
        this.listaProgramasAlumno = res;
        this.nomalu= this.listaProgramasAlumno[0].alunom+" "+this.listaProgramasAlumno[0].aluapepat+" "+
                      this.listaProgramasAlumno[0].aluapemat;
        this.loading = false;
        this.listProgramas=this.listaProgramasAlumno[0].programas;
        console.log("Programa alumno ",this.listaProgramasAlumno);
        console.log("Programa lista ",this.listProgramas);
        this.loading = false;
      });
  }
  
  seleccionPrograma(){
    console.log(this.selectedPrograma.proid);
    this.listarCursosAlumno(this.selectedPrograma.proid, '12345678');
  }

  listarCursosAlumno(codPro:any, aludni:any ) {
    this.loading = true;
    this.alumnolistprogramasservice.getListarCursosAlumno(codPro, aludni)
      .subscribe(res => {
        this.listaCursosAlumno = res;//res
        this.listCursos=this.listaCursosAlumno[0].cursos;
        this.loading= false;
        console.log("Cursos lista ",this.listaCursosAlumno);
        console.log("Cursos lista ",this.listCursos);
      });
  }
  
  
  
}




