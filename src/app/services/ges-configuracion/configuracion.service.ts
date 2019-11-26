import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  DeleteModel,
  DocenteCursoModel,
  docenteGuardarModificarModel,
} from '../../models/ges-conf/ges-conf.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import {SeguridadService} from '../authentication/seguridad.service';

@Injectable()
export class ConfiguracionService {
  ruta = 'https://api-ucps-unsa.herokuapp.com/api';
  //ruta = 'http://localhost/api-ucps-unsa/ucps2019/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarDocenteCurso(): Observable<DocenteCursoModel[]>{
    return this._http
      .get<any>(this.ruta + `/curso/docenteCurso/read.php`)
      .map((response: any) => {
        return response.map(d => new DocenteCursoModel(d));
      })
      .catch(this.handleError);
  }

  public postBuscarCurDocId(id: string): Observable<DocenteCursoModel> {
    return this._http
      .post<any>(this.ruta + `/curso/docenteCurso/read_id.php`, '{"curdocid":"' + id + '"}')
      .map((response: any) => {
        return new DocenteCursoModel(response);
      })
      .catch(this.handleError);
  }

  // public postBuscarAlumnoxParteId(partOfdni: string): Observable<any> {
  //   return this._http
  //     .post<any>(this.ruta + `/usuarios/alumno/read_simple.php`, '{"alunom":"' + partOfdni + '"}')
  //     .map((response: any) => {
  //       return response;
  //     })
  //     .catch(this.handleError);
  // }

  public postCrearDocenteCurso(docente: docenteGuardarModificarModel): Observable<any> {
    return this._http
      .post(this.ruta + `/curso/docenteCurso/create.php`, docente)
      .map((response: any) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }

  public putModificarAlumno(docente: docenteGuardarModificarModel): Observable<any> {
    return this._http
      .put(this.ruta + `/curso/docenteCurso/update.php`, docente)
      .map((response: any) => {
        console.log('response', response);
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }

  // public deleteAlumno(alumno: DeleteModel): Observable<any> {
  //   return this._http
  //     .put(this.ruta + `/usuarios/alumno/delete.php`, alumno)
  //     .map((response: any) => {
  //       this.utilsservice.showMensaje(true);
  //       return response;
  //     })
  //     .catch(this.handleError);
  // }
  // public getListarSearchAlumno(filtro): Observable<any> {
  //   return this._http
  //     .post(this.ruta + `/usuarios/alumno/buscador.php`, '{"aludni":"' + filtro + '"}')
  //     .map((response: any) => {
  //       return response;
  //     })
  //     .catch(this.handleError);
  // }
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
