export class AlumnoAplazadosModel {
    aludni: string;
    alunom:string;
    aluapepat:string;
    aluapemat:string;
    proid:string;
    pronom:string;    
    cursos: CursosAplazadosdelPrograma [];
    
constructor(obj?: any) {
    this.aludni = obj && (obj.aludni) || null;
    this.alunom = obj && (obj.alunom) || null;
    this.aluapepat = obj && (obj.aluapepat) || null;
    this.aluapemat = obj && (obj.aluapemat) || null;
    this.cursos = obj && (obj.cursos) || [];
    }
}

export class CursosAplazadosdelPrograma{
    curid: string;
    curnom: string;
    curcod: string;
    turnom: string;
    turid: string;
    notfinpromfinal:string;
    notfinaplazado:string;
    notfinestado:string;
} 