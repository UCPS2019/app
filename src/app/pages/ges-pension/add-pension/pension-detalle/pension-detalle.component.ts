import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalAddPensionComponent} from '../modal-add-pension/modal-add-pension.component';
import {GesPensionModel} from '../../../../models/ges-pensiones/ges-pensiones.model';
import {PensionService} from '../../../../services/ges-pensiones/ges-pensiones.service';
import {GesPensionlListModel} from '../../../../models/ges-pensiones/ges-pensiones-list.model';
import {Router} from '@angular/router';
@Component({
  selector: 'ngx-pension-detalle',
  templateUrl: './pension-detalle.component.html',
  styleUrls: ['./pension-detalle.component.scss'],
})
export class PensionDetalleComponent {
dni:string;
idprograma:string;
idMatricula:string;
loading = false;
listmisPensiones: GesPensionModel[] = [];
modalref: NgbModalRef;
mipension:GesPensionlListModel=new GesPensionlListModel();
minombre:string;
misede:string;
miprograma:string;
numero_cuotas:string;
numero_cuotas_pagadas:string;
txt_cuotas:string;

constructor(private router: Router,private modalService: NgbModal,
            private pensionservice: PensionService,private route: ActivatedRoute) {
            route.params.subscribe(
                data => {
                    this.dni = data.dni;
                    this.idprograma=data.idprograma;
                    this.idMatricula=data.idMatr;
                },
            );
}
ngOnInit(): void {
  this.cuotasPrograma();
  this.alumnoDetalle();
  this.numerCuotas();
  this.listarPension(); 
  this.cuotasPagadas();
}
listarPension() {
  this.loading = true;
  this.pensionservice.postBuscarPensionxParteIdDetalle(this.idMatricula)
    .subscribe(res => {     
      this.listmisPensiones = res;
      this.loading = false;
      this.cuotasPagadas();
    });
}
cuotasPrograma(){
  this.pensionservice.postCuotasPrograma(this.idprograma).subscribe(
    resp => {
      this.numero_cuotas = resp.procuota;
      this.loading = false;
    },
    err => {
      console.log(err);
    });
}
alumnoDetalle(){
  this.pensionservice.postAlumnoDetalle(this.idMatricula,this.dni)
  .subscribe(res => {
    this.minombre  = res.alunom +" "+ res.aluapepat +" "+ res.aluapemat; 
    this.misede =res.seddes;
    this.miprograma= res.pronom;
  });
}
numerCuotas(){
  this.pensionservice.postNumeroCuotas(this.idMatricula,this.dni).subscribe(
    resp => {
      this.numero_cuotas_pagadas=resp.cuotaspag;
    },
    err => {
      console.log(err);
    });
}

cuotasPagadas(){
  this.txt_cuotas =  parseInt((this.numero_cuotas_pagadas))+" - "+this.numero_cuotas;
}

btnAddPension() {
  const modalR = this.modalService.open(ModalAddPensionComponent, { size: 'lg'});
  (<ModalAddPensionComponent>(modalR.componentInstance)).enviarId(this.idMatricula,this.numero_cuotas_pagadas,this.numero_cuotas);
  modalR.result.then(result => {
    if (result) {
      this.listarPension();
      this.numerCuotas();
      this.cuotasPrograma();
      this.cuotasPagadas();
    } else {
    }
  }).catch((res) => {});
}
editarPension(id: string) {
  this.pensionservice.postBuscarPensionxId(id)
    .subscribe(res => {
      if (res.pagid) {
        this.modalref = this.modalService.open(ModalAddPensionComponent, {size: 'lg'});
        (<ModalAddPensionComponent>(this.modalref.componentInstance)).iniciarFormulario(res,this.idMatricula);
        this.modalref.result.then(result => {
          if (result) {
            this.listarPension()
          } else {
          }
        }).catch((resp) => {});
      } else {
        console.log('No existe alumno');
      }
    });
}



}
