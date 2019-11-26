
export class AlumnoNotasModel {
    curid:string;
    curnom:string;
    aludni: string;
    alunom:string;
    aluapepat:string;
    aluapemat:string;
    tipnottipo:string;
    turid:string;
    turnom:string;
    notval:string;
    
constructor(obj?: any) {
    this.curid = obj && (obj.curid) || null;
    this.curnom = obj && (obj.curnom) || null;
    this.aludni = obj && (obj.aludni) || null;
    this.alunom = obj && (obj.alunom) || null;
    this.aluapepat = obj && (obj.aluapepat) || null;
    this.aluapemat = obj && (obj.aluapemat) || null;
    this.tipnottipo = obj && (obj.tipnottipo) || null;
    this.turid = obj && (obj.turid) || null;
    this.turnom = obj && (obj.turnom) || null;
    this.notval = obj && (obj.notval) || null;
    }
}
