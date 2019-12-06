export class AlumnoHistorialAllModel {
    aludni: string;
    alunom: string;
    aluapepat: string;
    historialasis:AlumnosAsistenciasAll[];
    
constructor(obj?: any) {
    this.aludni = obj && (obj.aludni) || null;
    this.alunom = obj && (obj.alunom) || null;
    this.aluapepat = obj && (obj.aluapepat) || null;
    this.historialasis = obj && (obj.historialasis) || [];
    }   
}

export class AlumnosAsistenciasAll{
    asisfec: string;
    asisasistencia: string;
    altipoasis :boolean;
    constructor(obj?: any) {
        this.asisfec = obj && (obj.asisfec) || null;
        this.asisasistencia = obj && (obj.asisasistencia) || true;
        this.altipoasis = obj && (obj.altipoasis) || (obj.asisasistencia=="1")?true:false;
        } 
} 
