import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import {NbActionsModule, NbDialogModule, NbWindowModule} from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {DocenteCursoComponent} from './docente-curso/docente-curso.component';
import {GesConfComponent} from './ges-confi.component';
import {ModalAddDocenteComponent} from './docente-curso/modal-add/modal-add.component';
import {ConfiguracionService} from '../../services/ges-configuracion/configuracion.service';
import {UtilsService} from '../../services/utils.service';

const rutasgesconf: Routes = [{
  path: '',
  component: DocenteCursoComponent,
  children: [
    {
      path: 'DocenteCurso',
      component: DocenteCursoComponent,
    },
  ],
}];

@NgModule({
  declarations: [
    GesConfComponent,
    DocenteCursoComponent,
    ModalAddDocenteComponent,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    NbActionsModule,
    RouterModule.forChild(rutasgesconf),
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
  ],
  entryComponents: [
    ModalAddDocenteComponent,
  ],
  providers: [
    ConfiguracionService,
    UtilsService,
  ],
})
export class GesConfModule { }
