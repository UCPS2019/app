import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GesPensionModel} from '../../../../models/ges-pensiones/ges-pensiones.model';
import {PensionService} from '../../../../services/ges-pensiones/ges-pensiones.service';
import { DebugContext } from '@angular/core/src/view';

@Component({
  selector: 'ngx-modal-add-pension',
  styleUrls: ['./modal-add-pension.component.scss'],
  templateUrl: './modal-add-pension.component.html',
})
export class ModalAddPensionComponent {
  titulo = 'Agregar Pension';
  boton = 'Guardar';
  idDetalle:string;
  n_cuotas:number;
  n_cuotas_pagadas:number;
  dni:string;
  flagIsModificar = false;
  loadingGuardar = false;
  txtmensaje:string;
  miscuotaspagadas :number;
  public myformpension: FormGroup;
  pensionToSend: GesPensionModel = new GesPensionModel();
  
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private pensionservice: PensionService,private cuotasService: PensionService) {
     
     this.myformpension = this.fb.group({
      pagid: null,
      matid:null,
      formmat:[this.idDetalle,Validators.required],
      formfecpag: [null,Validators.required],
      formpagnomban: [null, Validators.required],
      formpagcod: [null, Validators.required],
      formpagmon: [null, Validators.required],
      formtipocuota: ["1",Validators.required],      
      formnumcuota: [null,Validators.required],
      formpagestreg: ['A', Validators.required]
     });

  }
  ngOnInit(): void {
    
  }
  enviarId(idmatricula:string,n_cuotas_pagadas:string,n_cuotas:string){
    this.idDetalle =idmatricula;
    this.n_cuotas=parseInt(n_cuotas);
    this.n_cuotas_pagadas = parseInt(n_cuotas_pagadas);
    this.myformpension.controls['formnumcuota'].setValue((this.n_cuotas_pagadas+1)+ " - "+this.n_cuotas);
  }
  onSubmit(f) {
    console.log(f.value);
}
  myId(){
    return this.idDetalle;
  }
  numerCuotas(){
   
  }
 
  btn_clickAceptar() {
    this.passFormToObject();
    this.loadingGuardar = true;
    if (this.flagIsModificar) {
      
      this.pensionservice.putModificarPension(this.pensionToSend).subscribe(
        resp => {
          this.activeModal.close(true);
        },
        err => {
          console.log(err);
        });
    } else {
      console.log("PENSIONNN",this.pensionToSend);
      if(this.n_cuotas_pagadas<this.n_cuotas){
        this.pensionservice.postCrearPension(this.pensionToSend).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      }else{
        this.txtmensaje="No se puede realizar más pagos"
      }
    }
  }
  passFormToObject() {
   
    if(this.pensionToSend.matid!=null){
      this.pensionToSend.matid = this.myformpension.get('matid').value;
    } else {
      this.pensionToSend.matid = this.idDetalle
    }   
    // this.pensionToSend.matid = this.myformpension.get('matid').value;
    this.pensionToSend.pagfec = this.myformpension.get('formfecpag').value;
    this.pensionToSend.pagnomban = this.myformpension.get('formpagnomban').value;
    this.pensionToSend.pagcod= this.myformpension.get('formpagcod').value;
    this.pensionToSend.pagmontot = this.myformpension.get('formpagmon').value;
    this.pensionToSend.pagcuota = this.myformpension.get('formnumcuota').value;  
    this.pensionToSend.pagtipo ="1";
    this.pensionToSend.pagestreg = this.myformpension.get('formpagestreg').value;
  }
  iniciarFormulario(pension: GesPensionModel,idmatricula:string) {

    console.log("ESTA PENSIONES ES DIFERENTE",pension);
    this.flagIsModificar = true;
    this.titulo = 'Modificar Pension';
    this.boton = 'Modificar';
    this.myformpension.controls['pagid'].setValue(pension.pagid);
    this.myformpension.controls['matid'].setValue(pension.matid);
    this.myformpension.controls['formfecpag'].setValue(pension.pagfec);
    this.myformpension.controls['formpagnomban'].setValue(pension.pagnomban);
    this.myformpension.controls['formpagcod'].setValue(pension.pagcod);
    this.myformpension.controls['formpagmon'].setValue(pension.pagmontot);
    this.myformpension.controls['formtipocuota'].setValue("1");
    this.myformpension.controls['formnumcuota'].setValue(pension.pagcuota);
    this.myformpension.controls['formpagestreg'].setValue(pension.pagestreg);
    
    this.pensionToSend = pension;
    this.pensionToSend.matid = idmatricula;

  }
}
