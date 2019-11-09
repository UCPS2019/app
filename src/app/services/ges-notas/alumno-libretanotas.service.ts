import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import { LibretaNotasModel } from '../../models/ges-nota/libreta-notas.model';
import { ProgramaAlumnoModel } from '../../models/ges-nota/alumno-list-programas.model';

@Injectable()
export class AlumnoLibretaNotasService {
   rutaCurso = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }

  
  public getListarCursosAlumno(proid: string, aludni: string): Observable<LibretaNotasModel[]> {
    return this._http
      .post<any>(this.rutaCurso + `/nota/read_libreta_notas.php`,'{"proid":"' + proid+'","aludni":"'+aludni+'"}')
      .map((response: any) => {
        console.log("respuesta",response);
        return response.map(d => new LibretaNotasModel(d));
      })
      .catch(this.handleError);
  }
  
  public getListarProgramaAlumno(aludni: string): Observable<ProgramaAlumnoModel[]> {
    return this._http
      .post<any>(this.rutaCurso + `/nota/read_programa_alumno.php`,'{"aludni":"' + aludni + '"}')
      .map((response: any) => {
        console.log("respuesta",response);
        return response.map(d => new ProgramaAlumnoModel(d));
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
