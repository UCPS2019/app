import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GesCursoReadModel} from '../../models/ges-curso/ges-curso-read.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Injectable()
export class CursoService {
   rutaCurso = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarCursos() {
    return this._http
      .get<any>(this.rutaCurso + `/curso/read.php`)
      .catch(this.handleError);
  }
  public getCursoById(id) {
    return this._http
      .post<any>(this.rutaCurso + `/curso/read_id.php`, {curid: id})
      .catch(this.handleError);
  }
  public postcreateCurso(data) {
    return this._http
      .post<any>(this.rutaCurso + `/curso/create.php`, data)
      .catch(this.handleError);
  }
  public putUpdateurso(data) {
    return this._http
      .put<any>(this.rutaCurso + `/curso/update.php`, data)
      .catch(this.handleError);
  }
  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
