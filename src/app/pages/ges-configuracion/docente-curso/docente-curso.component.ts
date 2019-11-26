import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalAddDocenteComponent} from './modal-add/modal-add.component';
import {ConfiguracionService} from '../../../services/ges-configuracion/configuracion.service';
import {DeleteModel, DocenteCursoModel} from '../../../models/ges-conf/ges-conf.model';

@Component({
  selector: 'ngx-docente-curso',
  templateUrl: './docente-curso.component.html',
})
export class DocenteCursoComponent implements OnInit {
  loading = false;
  listDocenteCurso : DocenteCursoModel[] = [];
  modalref: NgbModalRef;

  constructor(private modalService: NgbModal,
              private configuracionservice: ConfiguracionService) {
  }
  ngOnInit(): void {
    this.listarDocente();
  }
  listarDocente() {
    this.loading = true;
    this.configuracionservice.getListarDocenteCurso()
      .subscribe(res => {
        this.listDocenteCurso = res;
        this.loading = false;
      });
  }
  
  btnAddDocenteCurso() {
    const modalR = this.modalService.open(ModalAddDocenteComponent, { size: 'lg'});
    modalR.result.then(result => {
      if (result) {
        this.listarDocente();
      } else {
      }
    }).catch((res) => {});
  }

  editarDocente(id: string) {
    this.configuracionservice.postBuscarCurDocId(id)
      .subscribe(res => {
        if (res.curdocid) {
          this.modalref = this.modalService.open(ModalAddDocenteComponent, {size: 'lg'});
          (<ModalAddDocenteComponent>(this.modalref.componentInstance)).iniciarFormulario(res);
          this.modalref.result.then(result => {
            if (result) {
              this.listarDocente();
            } else {
            }
          }).catch((resp) => {});
        } else {
          console.log('No existe ID');
        }
      });
  }

  // cambiarEstado(c: GesConfifuracionModel) {
  //   const deleteAlumno = new DeleteModel();
  //   deleteAlumno.docdni = c.docdni;
  //   if (c.curdocestreg === 'A') {
  //     deleteAlumno.curdocestreg = '*';
  //   } else {
  //     deleteAlumno.curdocestreg = 'A';
  //   }
  //   this.configuracionservice.deleteAlumno(deleteAlumno)
  //     .subscribe(res => {
  //       c.curdocestreg = res.curdocestreg;
  //     });
  // }
  // filtroDNI(filtro) {
  //   console.log(filtro);
  //   if (filtro) {
  //     this.loading = true;
  //     this.configuracionservice.getListarSearchAlumno(filtro)
  //       .subscribe(res => {
  //         this.listDocenteCurso = res;
  //         this.loading = false;
  //       });
  //   } else {
  //     this.listarDocente();
  //   }
  // }
}




