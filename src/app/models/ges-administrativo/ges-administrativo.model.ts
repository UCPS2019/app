export class GesAdministrativoModel {
  admdni: string;
  admcorele: string;
  sedid: string;
  sednom:string;
  seddes:string;
  admnom: string;
  admapepat: string;
  admapemat: string;
  admfecnac: string;
  admtel: string;
  admdir: string;
  admnomusu: string;
  admcon: string;
  admtipo: string;
  admestreg: string;

  constructor(obj?: any) {
    this.admdni = obj && (obj.admdni) || null;
    this.admcorele = obj && (obj.admcorele) || null;
    this.sedid = obj && (obj.sedid) || null;
    this.sednom = obj && (obj.sednom) || null;
    this.seddes = obj && (obj.seddes) || null;
    this.admnom = obj && (obj.admnom) || null;
    this.admapepat = obj && obj.admapepat || null;
    this.admapemat = obj && obj.admapemat || null;
    this.admfecnac = obj && obj.admfecnac || null;
    this.admtel = obj && obj.admtel || null;
    this.admdir = obj && obj.admdir || null;
    this.admnomusu = obj && obj.admnomusu || null;
    this.admcon = obj && obj.admcon || null;
    this.admtipo = obj && obj.admtipo || null;
    this.admestreg = obj && obj.admestreg || null;
  }
}