import {Component,Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { AlumnoDocenteService } from '../../../../services/ges-asistencia/alumno-docente.service';
import { AsistenciaDatosService } from '../../../../services/ges-asistencia/asistencia-datos.service';
import { AlumnoDocenteModel } from '../../../../models/ges_asistencia/alumno-docente.model';
import { AsistencaDatodModel } from '../../../../models/ges_asistencia/asistencia-datos.model';
import { AlumnosAsistencia, AlumnoAsistDocenteModel } from '../../../../models/ges_asistencia/asistencias-alumno.model';
import { AsistencaAlumnoModificarModel } from '../../../../models/ges_asistencia/asistencia-alumno-modificar.model';
import { DatePipe } from '@angular/common';
import { AsistenciaModificarModel } from '../../../../models/ges_asistencia/asistencia-modificar.model';
import { ProgramaDocenteModel } from '../../../../models/ges_asistencia/programa-docente';
import { ProgramaDocenteService } from '../../../../services/ges-asistencia/programadocente.service';
import { CursoDocenteModel } from '../../../../models/ges_asistencia/curso-docente.model';
import { CursoDocenteService } from '../../../../services/ges-asistencia/cursodocente.service';
import { AlumnoHistorialAllModel, AlumnosAsistenciasAll } from '../../../../models/ges_asistencia/asistencia_historial_all.model';
import { SeguridadService } from '../../../../services/authentication/seguridad.service';

@Component({
    selector: 'ngx-asistencia-detalle',
    templateUrl: './asistencia-detalle.component.html',
    styleUrls: ['./asistencia-detalle.component.scss'],
    providers: [DatePipe]
  })
  export class AsistenciaDetalleComponent implements OnInit {
    idCur:any;
    idPro:any;
    dnido:any; 
    datee:any;
    selectedDocente:any;
    date11:any;
    date12:any;
    selectedPrograma:any;
    alumnoDocentelist:AlumnoDocenteModel[]=[];
    listarHistorialAll:AlumnoHistorialAllModel[]=[];
    listarHistoriaFecha:AlumnosAsistenciasAll[]=[];
    dnidoc:string;
    selectedCurso :any;
    listaProgramaDocente: ProgramaDocenteModel []=[];
    listaCursoDocente: CursoDocenteModel []=[];
    constructor(private route: ActivatedRoute,private datePipe: DatePipe, private alumnoDocenteService:AlumnoDocenteService,private programadocenteservice:ProgramaDocenteService
      ,private cursodocenteservice:CursoDocenteService,private asistenciaService:AsistenciaDatosService,private seguridadService: SeguridadService) {
            route.params.subscribe(
                data => {
                    this.dnido = data.dni;
                },
            );         
    }
    ngOnInit(): void {
      this.dnidoc=this.seguridadService.getTokenAsObj().jti;
        this.listarProgramaDocente();
        //this.listarHistorialAllAsistencia();
    }
    listarProgramaDocente() {
        // this.loading = true;
         this.programadocenteservice.getListarProgramaDocente(this.dnido)
           .subscribe(res => {
             this.listaProgramaDocente = res;
           });
     }
     
     listarHistorialAllAsistencia(){
      this.asistenciaService.getListarHistoriaAsistenciaAll("2019-09-29","2019-12-29","65881477","1","1")
      .subscribe(res => {
        this.listarHistorialAll = res;
        this.listarHistoriaFecha = res[0].historialasis
      });
     }

    listarAlumnosCursos(){
      
        this.alumnoDocenteService.getListarAlumnosDocentes(this.dnido,this.idPro,this.idCur)
            .subscribe(res => {
              this.alumnoDocentelist= res;
              for(var i=0;i<this.alumnoDocentelist.length;i++){
                this.alumnoDocentelist[i].altipoasis=true;
              }     
            });
    }

    btn_clickMostrarAsistencias(){        
       
        // var mifecha = this.datePipe.transform(this.date11,'yyyy-MM-dd');
        // var mifecha2 = this.datePipe.transform(this.date12,'yyyy-MM-dd');
        // console.log("Fecha Inicial",this.date11);
        // console.log("Fecha Final",this.date12);
        // console.log("DNI",this.dnido);
        // console.log("CURSO",this.idCur);
        // console.log("PROGRAMA",this.idPro);


        this.asistenciaService.getListarHistoriaAsistenciaAll(this.date11,this.date12,this.dnido,this.selectedCurso.idCurso,this.selectedPrograma.proid)
        .subscribe(res => {

          this.listarHistorialAll = res;  
          this.listarHistoriaFecha = res[0].historialasis
        });
    }
    listarCursoDocente(){
        console.log(this.selectedCurso.idCurso);
    }

    seleccionPrograma(){
        
        this.listarCursosDocente(this.selectedPrograma.proid);
    }
    listarCursosDocente(codPro:any){
        this.cursodocenteservice.getListarCursoDocente(this.dnidoc,codPro)
        .subscribe(res => {
        this.listaCursoDocente = res;
        for(var i=0;i<this.listaCursoDocente.length;i++){
            this.listaCursoDocente[i].idCurso=i+1;
             //this.listaHorario = this.listaCursoDocente[i].horario;
        }
        //console.log("Mis Listas",this.listaCursoDocente);
        });
    }
  


    }
    