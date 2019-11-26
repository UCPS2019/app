export class AlumnoNotasFinalesModel {
    curid:string;
    curcod:string;
    curnom:string;
    turid:string;
    turnom:string;
    aludni: string;
    alunom:string;
    aluapepat:string;
    aluapemat:string;
    //notas: NotasPareciales [];
    notfinpromfinal:string;
    notfinaplazado:string;
    notfinestado:string;
    1: string; //valor de la nota parcial 1
    2: string; //valor de la nota parcial 2
    3: string; //valor de la nota parcial 3

    
constructor(obj?: any) {
    this.curid = obj && (obj.curid) || null;
    this.curcod = obj && (obj.curcod) || null;
    this.curnom = obj && (obj.curnom) || null;
    this.turid = obj && (obj.turid) || null;
    this.turnom = obj && (obj.turnom) || null;
    this.aludni = obj && (obj.aludni) || null;
    this.alunom = obj && (obj.alunom) || null;
    this.aluapepat = obj && (obj.aluapepat) || null;
    this.aluapemat = obj && (obj.aluapemat) || null;
    //this.notas = obj && (obj.notas) || [];
    this.notfinpromfinal = obj && (obj.notfinpromfinal) || null;
    this.notfinaplazado = obj && (obj.notfinaplazado) || null;
    this.notfinestado = obj && (obj.notfinestado) || null;
    this[1] = obj && (obj[1]) || null;
    this[2] = obj && (obj[2]) || null;
    this[3] = obj && (obj[3]) || null;
    }
}

export class NotasPareciales{
    1: string;
    2: string;
    3: string;
} 