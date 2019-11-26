export class GesAlumnoDetalleModel {
    aludni: string;
    alunom: string;
    aluapepat: string;
    aluapemat: string;
    seddes: string;
    proid: string;
    pronom: string;
    matfec: string;
    cuotaspag:string;
    procuota:string;
    constructor(obj?: any) {
      this.aludni = obj && (obj.aludni) || null;
      this.alunom = obj && (obj.alunom) || null;
      this.aluapepat = obj && (obj.aluapepat) || null;
      this.aluapemat = obj && obj.aluapemat || null;
      this.seddes = obj && obj.seddes || null;
      this.proid = obj && obj.proid || null;  
      this.pronom = obj && obj.pronom || null;
      this.matfec = obj && obj.matfec || null;      
      this.cuotaspag=obj && obj.cuotaspag || null; 
      this.procuota=obj && obj.procuota || null; 
    }
  }

