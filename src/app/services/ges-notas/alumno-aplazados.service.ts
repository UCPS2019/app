import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import { AlumnoAplazadosModel } from '../../models/ges-nota/alumno-aplazados.model';
import { AlumnoNotasFinalesModel } from '../../models/ges-nota/alumno-notas-finales.model';

@Injectable()
export class AlumnoAplazadosService {
   rutaCurso = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }

  
  public getListarCursosAlumno(proid: string, aludni: string): Observable<AlumnoAplazadosModel[]> {
    return this._http
      .post<any>(this.rutaCurso + `/nota/read_nota_aplazados.php`,'{"proid":"' + proid+'","aludni":"'+aludni+'"}')
      .map((response: any) => {
        console.log("respuesta",response);
        return response.map(d => new AlumnoAplazadosModel(d));
      })
      .catch(this.handleError);
  }

  public saveNotasAplazadosAlumnos(objarray: AlumnoNotasFinalesModel[]): Observable<any>{
    return this._http
      .post<any>(this.rutaCurso + `/nota/create_nota_aplazados.php`,objarray)
      .map((response: any) => {
       console.log('response', response);
       this.utilsservice.showMensaje(true);
       return response;
     })
      .catch(this.handleError);
  }
  


  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
