import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
//import {AlumnoService} from '../../../services/ges-usu/alumno.service';
//import {DeleteAlumnoModel, GesUsuAlumnoModel} from '../../../models/ges-usu/ges-usu-alumno.model';
import { DocenteListCursosModel } from '../../../models/ges-nota/docente-cursos.model';
import { DocenteListCursosService } from '../../../services/ges-notas/docente-listcursos.service';
import {SeguridadService} from '../../../services/authentication/seguridad.service';

@Component({
  selector: 'ngx-list-curso',
  styleUrls: ['./list-curso.component.scss'],
  templateUrl: './list-curso.component.html',
})
export class ListCursoComponent implements OnInit {
 
  cars:any[];
  loading = false;
  nomdoc: string;
  dnidoc: string;
  listaCursosDocente: DocenteListCursosModel[]=[];


  constructor(private router: Router, private docentelistcursoservice:DocenteListCursosService,
              private seguridadService: SeguridadService) {
    this.nomdoc="docente";
    this.cars = [
      { fila: '1',pronom:'COCINA',curnom:'GASTRONOMIA-EDUCACION',turnom:'turno2'},
      { fila: '2',pronom:'COCINA',curnom:'EDUCACION',turnom:'turno1'},
      { fila: '3',pronom:'COCINA',curnom:'GASTRONOMIA',turnom:'turno1'},
      { fila: '4',pronom:'COCINA',curnom:'GASTRONOMIA',turnom:'turno3'},
      { fila: '5',pronom:'COCINA',curnom:'GASTRONOMIA',turnom:'turno2'},
      { fila: '6',pronom:'ELECTRÓNICA',curnom:'REDES',turnom:'turno1'}
  ];
  }
  ngOnInit(): void {    
    this.dnidoc=this.seguridadService.getTokenAsObj().jti;
    console.log('token', this.dnidoc);
    this.listarCursosDocente();

  }

  listarCursosDocente() {
    this.loading = true;
    this.docentelistcursoservice.getListarCursosDocente(this.dnidoc)
      .subscribe(res => {
        this.listaCursosDocente = res;//res
        // this.nomdoc= this.listaCursosDocente[0].docnom+" "+this.listaCursosDocente[0].docapepat+" "+
        //               this.listaCursosDocente[0].docapemat;
        this.loading = false;
        console.log("Curso docentes ",this.listaCursosDocente);
      });
  }


  
  ingresarNotasCurso(proid:number, curid: number, turid:number, tipnottipo: number) {
    this.router.navigate(['/pages/ges-nota/curso/'+proid+'/'+curid+'/'+turid+'/'+tipnottipo ]);
  }
  
  
  ingresarNotasFinales(proid:number, curid: number, turid:number) {
    this.router.navigate(['/pages/ges-nota/notasfinales/'+proid+'/'+curid+'/'+turid ]);
  }
  
}




