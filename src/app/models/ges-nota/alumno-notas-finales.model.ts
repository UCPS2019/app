export class AlumnoNotasFinalesModel {
    curid:string;
    curnom:string;
    aludni: string;
    alunom:string;
    aluapepat:string;
    aluapemat:string;
    notas: NotasPareciales [];
    notfinpromfinal:string;
    notfinestado:string;
    
constructor(obj?: any) {
    this.curid = obj && (obj.curid) || null;
    this.curnom = obj && (obj.curnom) || null;
    this.aludni = obj && (obj.aludni) || null;
    this.alunom = obj && (obj.alunom) || null;
    this.aluapepat = obj && (obj.aluapepat) || null;
    this.aluapemat = obj && (obj.aluapemat) || null;
    this.notas = obj && (obj.notas) || [];
    this.notfinpromfinal = obj && (obj.notfinpromfinal) || null;
    this.notfinestado = obj && (obj.notfinestado) || null;
    }
}

export class NotasPareciales{
    1: string;
    2: string;
    3: string;
} 