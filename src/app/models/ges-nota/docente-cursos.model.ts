
export class DocenteListCursosModel {
    docdni: string;
    docnom:string;
    docapepat:string;
    docapemat:string;
    proid:string;
    pronom:string;
    curid:string;
    curnom:string;
    turid:string;
    turnom:string;
    
constructor(obj?: any) {
    this.docdni = obj && (obj.docdni) || null;
    this.docnom = obj && (obj.docnom) || null;
    this.docapepat = obj && (obj.docapepat) || null;
    this.docapemat = obj && (obj.docapemat) || null;
    this.proid = obj && (obj.proid) || null;
    this.pronom = obj && (obj.pronom) || null;
    this.curid = obj && (obj.curid) || null;
    this.curnom = obj && (obj.curnom) || null;
    this.turid = obj && (obj.turid) || null;
    this.turnom = obj && (obj.turnom) || null;
    }
}
