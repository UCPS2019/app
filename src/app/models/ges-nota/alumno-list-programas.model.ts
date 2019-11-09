export class ProgramaAlumnoModel {
    aludni: string;
    alunom:string;
    aluapepat:string;
    aluapemat:string;
    programas: ListProgramas [];
    
constructor(obj?: any) {
    this.aludni = obj && (obj.aludni) || null;
    this.alunom = obj && (obj.alunom) || null;
    this.aluapepat = obj && (obj.aluapepat) || null;
    this.aluapemat = obj && (obj.aluapemat) || null;
    this.programas = obj && (obj.programas) || [];
    }
}

export class ListProgramas{
    proid: string;
    pronom:string;
} 