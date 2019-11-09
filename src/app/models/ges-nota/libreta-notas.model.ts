export class LibretaNotasModel {
    aludni: string;
    alunom:string;
    aluapepat:string;
    proid:string;
    pronom:string;
    aluapemat:string;
    cursos: CursosdelPrograma [];
    
constructor(obj?: any) {
    this.aludni = obj && (obj.aludni) || null;
    this.alunom = obj && (obj.alunom) || null;
    this.aluapepat = obj && (obj.aluapepat) || null;
    this.aluapemat = obj && (obj.aluapemat) || null;
    this.cursos = obj && (obj.cursos) || [];
    }
}

export class CursosdelPrograma{
    curid: string;
    curnom: string;
    curcod: string;
    notfinpromfinal:string;
    notfinestado:string;
} 