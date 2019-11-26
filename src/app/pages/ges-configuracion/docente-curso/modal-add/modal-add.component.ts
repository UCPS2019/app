import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DocenteCursoModel, docenteGuardarModificarModel} from '../../../../models/ges-conf/ges-conf.model';
import {ConfiguracionService} from '../../../../services/ges-configuracion/configuracion.service';

@Component({
  selector: 'ngx-modal-add',
  templateUrl: './modal-add.component.html',
})
export class ModalAddDocenteComponent implements OnInit {
  formError = false;
  titulo = 'Asignar Cursos';
  boton = 'Guardar';
  flagIsModificar = false;
  loadingGuardar = false;
  public myformaDocenteCurso: FormGroup;
  curDocSend: docenteGuardarModificarModel = new docenteGuardarModificarModel();
  asignacionupdate: any;
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private configuracionservice: ConfiguracionService) {
  }
  ngOnInit(): void {
    if (this.flagIsModificar) {
      console.log('modificar');
      this.iniciarFormUpdate();
      this.myformaDocenteCurso.controls['formdni'].setValue(this.asignacionupdate.docdni);
      this.myformaDocenteCurso.controls['formcurso'].setValue(this.asignacionupdate.curid);
      this.myformaDocenteCurso.controls['formestado'].setValue(this.asignacionupdate.curdocestreg);
    } else {
      this.iniciarFormCreate();
      console.log('crear');
    }
  }

  iniciarFormCreate() {
    this.myformaDocenteCurso = this.fb.group({
      formdni: [null, Validators.compose([Validators.pattern('^(0|[1-9][0-9]*)$'),Validators.required])],
      formcurso: [null, Validators.compose([Validators.required])],
      formestado: ['A', Validators.required],
    });
  }

  iniciarFormUpdate() {
    this.myformaDocenteCurso = this.fb.group({
      formdni: [null, Validators.compose([Validators.pattern('^(0|[1-9][0-9]*)$'),Validators.required])],
      formcurso: [null, Validators.compose([Validators.required])],
      formestado: [null, Validators.compose([Validators.required])],
    });
  }

  btn_clickAceptar() {
    this.formError = false;
    console.log(this.myformaDocenteCurso.value);
    if (this.myformaDocenteCurso.valid) {
      this.formError = false;
      this.passFormToObject();
      this.loadingGuardar = true;
      if (this.flagIsModificar) { // MODIFICAR
        this.configuracionservice.putModificarAlumno(this.curDocSend).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            this.activeModal.close(true);
            console.log(err);
          });
      } else { // CREAR
        this.configuracionservice.postCrearDocenteCurso(this.curDocSend).
          subscribe(resp => {
            this.activeModal.close(true);
          },
          err => {
            this.activeModal.close(true);
            console.log(err);
          });
      }
    } else {
      this.formError = true;
    }
  }

  passFormToObject() {
    this.curDocSend.docdni = this.myformaDocenteCurso.get('formdni').value;
    this.curDocSend.curid = this.myformaDocenteCurso.get('formcurso').value;
    this.curDocSend.curdocestreg = this.myformaDocenteCurso.get('formestado').value;
  }
  iniciarFormulario(alumno: DocenteCursoModel) {
    this.asignacionupdate = alumno;
    //console.log('entro aca', alumno);
    this.flagIsModificar = true;
    this.titulo = 'Modificar';
    this.boton = 'Modificar';
  }
}
