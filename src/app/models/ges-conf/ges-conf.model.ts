export class DocenteCursoModel {
    curdocid: number;
    docdni: string;
    docnom: string;
    docapepat: string;
    docapemat: string;
    curid: number;
    curnom: string;
    curdocestreg: string;
  
    constructor(obj?: any) {
      this.curdocid = obj && (obj.curdocid) || null;
      this.docdni = obj && (obj.docdni) || null;
      this.docnom = obj && (obj.docnom) || null;
      this.docapepat = obj && (obj.docapepat) || null;
      this.docapemat = obj && (obj.docapemat) || null;
      this.curid = obj && (obj.curid) || null;
      this.curnom = obj && (obj.curnom) || null;
      this.curdocestreg = obj && obj.curdocestreg || null;
    }
  }
  export class docenteGuardarModificarModel {
    curdocid: string;
    docdni: string;
    //docnom: string;
    //docapepat: string;
    //docapemat: string;
    curid: string;
    //curnom: string;
    curdocestreg: string;

    constructor(obj?: any) {
      this.curdocid = obj && (obj.curdocid) || null;
      this.docdni = obj && (obj.docdni) || null;
      //this.docnom = obj && (obj.docnom) || null;
      //this.docapepat = obj && (obj.docapepat) || null;
      //this.docapemat = obj && (obj.docapemat) || null;
      this.curid = obj && (obj.curid) || null;
      //this.curnom = obj && (obj.curnom) || null;
      this.curdocestreg = obj && obj.curdocestreg || null;
    }
  }

  export class DeleteModel {
    docdni: string;
    curdocestreg: string;
  }
  