import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import {NbActionsModule, NbDialogModule, NbWindowModule} from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {ListCursoComponent} from './list-curso/list-curso.component';
import {LibretaNotasComponent} from './libreta-notas/libreta-notas.component';
import {NotaAplazadosComponent} from './nota-aplazados/nota-aplazados.component';
import {GesNotaComponent} from './ges-nota.component';
import {DropdownModule} from 'primeng/dropdown';
// import {ModalAddDocenteComponent} from './add-docente/modal-add-docente/modal-add-docente.component';
//import {DocenteService} from '../../services/ges-docente/docente.service';
import {RadioButtonModule} from 'primeng/radiobutton';
import {UtilsService} from '../../services/utils.service';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {NotaAlumnoComponent} from './list-curso/nota-alumno/nota-alumno.component';
import {NotasFinalesComponent} from './list-curso/notas-finales/notas-finales.component';
import { DocenteListCursosService } from '../../services/ges-notas/docente-listcursos.service';
import { AlumnoListNotasService } from '../../services/ges-notas/alumno-listnotas.service';
import { AlumnoListNotasFinalesService } from '../../services/ges-notas/alumno-listnotasfinales.service';
import { AlumnoLibretaNotasService } from '../../services/ges-notas/alumno-libretanotas.service';
import {AlumnoService} from '../../services/ges-usu/alumno.service';
import {AlumnoAplazadosService} from '../../services/ges-notas/alumno-aplazados.service';
import {SeguridadService} from '../../services/authentication/seguridad.service';

const rutasgesusu: Routes = [{
  path: '',
  component: GesNotaComponent,
  children: [
    {
      path: 'listacursos',
      component: ListCursoComponent,
    },
    {
      path: 'libretanotas',
      component: LibretaNotasComponent,
    },
    {
      path: 'notaaplazados',
      component: NotaAplazadosComponent,
    },
  ],
},{
    path: 'curso/:proid/:curid/:turid/:tipnottipo',
    component: NotaAlumnoComponent,
  },
  {
    path: 'notasfinales/:proid/:curid/:turid',
    component: NotasFinalesComponent,
  }
];

@NgModule({
  declarations: [
    GesNotaComponent,
    ListCursoComponent,
    NotaAlumnoComponent,
    NotasFinalesComponent,
    LibretaNotasComponent,
    NotaAplazadosComponent,
    // AddDocenteComponent,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    NbActionsModule,
    DropdownModule,
    RouterModule.forChild(rutasgesusu),
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    TableModule,
    CardModule,
    RadioButtonModule,
  ],
  entryComponents: [
    
    
  ],
  providers: [
    //DocenteService,
    UtilsService,
    DocenteListCursosService,
    AlumnoListNotasService,
    AlumnoListNotasFinalesService,
    AlumnoLibretaNotasService,
    AlumnoService,
    AlumnoAplazadosService,
    SeguridadService,

  ],
})
export class GesNotaModule { }
