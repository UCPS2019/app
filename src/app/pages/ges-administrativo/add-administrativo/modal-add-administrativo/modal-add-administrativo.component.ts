import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GesAdministrativoModel} from '../../../../models/ges-administrativo/ges-administrativo.model';
import {AdministrativoService} from '../../../../services/ges-administrativo/administrativo.service';
import {SedeService} from '../../../../services/ges-sede/sede.service';

@Component({
  selector: 'ngx-modal-add-administrativo',
  styleUrls: ['./modal-add-administrativo.component.scss'],
  templateUrl: './modal-add-administrativo.component.html',
})
export class ModalAddAdministrativoComponent {
  formError = false;
  titulo = 'Agregar Administrativo';
  boton = 'Guardar';
  cbSedes: any;
  cbTipos: any;
  admupdate: any;
  flagIsModificar = false;
  loadingGuardar = false;
  
  public myformadministrativo: FormGroup;
  administrativoToSend: GesAdministrativoModel = new GesAdministrativoModel();
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private sedeService: SedeService,
              private administrativoeservice: AdministrativoService) {
       }
  ngOnInit(): void {
    if (this.flagIsModificar) {
      console.log('modificar');
      this.iniciarFormUpdate();
      this.listcbSedes();
      this.listcbTipos();
      this.myformadministrativo.controls['formdni'].setValue(this.admupdate.admdni);
      this.myformadministrativo.controls['formnombres'].setValue(this.admupdate.admnom);
      this.myformadministrativo.controls['formapepat'].setValue(this.admupdate.admapepat);
      this.myformadministrativo.controls['formapemat'].setValue(this.admupdate.admapemat);
      this.myformadministrativo.controls['formcorreo'].setValue(this.admupdate.admcorele);
      this.myformadministrativo.controls['sedid'].setValue(this.admupdate.sedid);
      this.myformadministrativo.controls['formfecnac'].setValue(this.admupdate.admfecnac);
      this.myformadministrativo.controls['formtel'].setValue(this.admupdate.admtel);
      this.myformadministrativo.controls['formdir'].setValue(this.admupdate.admdir);
      this.myformadministrativo.controls['formnomusu'].setValue(this.admupdate.admnomusu);
      //this.myformadministrativo.controls['formcont'].setValue(this.admupdate.admcon);
      this.myformadministrativo.controls['formtipo'].setValue(this.admupdate.admtipo);
      this.myformadministrativo.controls['formestreg'].setValue(this.admupdate.admestreg);
    } else {
      this.iniciarFormCreate();
      this.listcbSedes();
      this.listcbTipos();
      console.log('crear');
    }
  }
  

  btn_clickAceptar() {
    this.formError = false;
    if (this.myformadministrativo.valid) {
      this.passFormToObject();
      this.loadingGuardar = true;
      if (this.flagIsModificar) {
        this.administrativoeservice.putModificarAdministrativo(this.administrativoToSend).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      } else {
        this.administrativoeservice.postCrearAdministrativo(this.administrativoToSend).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      }
    } else {
      this.formError = true;
    }
  }

  listcbSedes() {
    this.sedeService.getListarSede().subscribe(
      resp => {
        this.cbSedes = resp;
      },
      err => {
        console.log(err);
      });
  }

  listcbTipos() {
    this.cbTipos = [
      {
        descTip: 'Administrador',
      },
      {
        descTip: 'Secretaria',
      },
    ];
  }

  passFormToObject() {
    this.administrativoToSend.admdni = this.myformadministrativo.get('formdni').value;
    this.administrativoToSend.admcorele = this.myformadministrativo.get('formcorreo').value;
    this.administrativoToSend.sedid = this.myformadministrativo.get('sedid').value;
    this.administrativoToSend.admnom = this.myformadministrativo.get('formnombres').value;
    this.administrativoToSend.admapepat = this.myformadministrativo.get('formapepat').value;
    this.administrativoToSend.admapemat = this.myformadministrativo.get('formapemat').value;
    this.administrativoToSend.admfecnac = this.myformadministrativo.get('formfecnac').value;
    this.administrativoToSend.admtel = this.myformadministrativo.get('formtel').value;
    this.administrativoToSend.admdir = this.myformadministrativo.get('formdir').value;
    this.administrativoToSend.admnomusu = this.myformadministrativo.get('formnomusu').value;
    if (!this.flagIsModificar) {
      this.administrativoToSend.admcon = this.myformadministrativo.get('formcont').value;
    }
    this.administrativoToSend.admtipo = this.myformadministrativo.get('formtipo').value;
    this.administrativoToSend.admestreg = this.myformadministrativo.get('formestreg').value;
  }
  iniciarFormulario(admtvo: GesAdministrativoModel) {
    this.admupdate = admtvo;
    this.flagIsModificar = true;
    this.titulo = 'Modificar Administrativo';
    this.boton = 'Modificar';
  }

  iniciarFormUpdate() {
    this.myformadministrativo = this.fb.group({
      formdni: [null, Validators.compose([Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.required])],
      formnombres: [null, Validators.compose([Validators.required])],
      formapepat: [null, Validators.compose([Validators.required])],
      formapemat: [null, Validators.compose([Validators.required])],
      formcorreo: [null, Validators.compose([Validators.pattern('^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$'),
          Validators.required])],
      formfecnac: [null, Validators.required],
      formtel: [null, Validators.compose([Validators.pattern('^(0|[1-9][0-9]*)$'),Validators.required])],
      formdir: [null, Validators.required],
      formnomusu: [null, Validators.required],
      formtipo: [null, Validators.required],
      sedid: [null, Validators.required],
      formestreg: ['A', Validators.required],
    });
  }

  iniciarFormCreate() {
    this.myformadministrativo = this.fb.group({
      formdni: [null, Validators.compose([Validators.pattern('^(0|[1-9][0-9]*)$'),Validators.required])],
      formnombres: [null, Validators.compose([Validators.required])],
      formapepat: [null, Validators.compose([Validators.required])],
      formapemat: [null, Validators.compose([Validators.required])],
      formcorreo: [null, Validators.compose([Validators.pattern('^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$'),
          Validators.required])],
      formfecnac: [null, Validators.required],
      formtel: [null, Validators.compose([Validators.pattern('^(0|[1-9][0-9]*)$'),
          Validators.required])],
      formdir: [null, Validators.required],
      formnomusu: [null, Validators.required],
      formcont: [null, Validators.required],
      formtipo: [null, Validators.required],
      sedid: [null, Validators.required],
      formestreg: ['A', Validators.required],
    });
  }



}
