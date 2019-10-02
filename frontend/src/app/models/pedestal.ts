export class Pedestal {


    constructor(ip = "", fc = [], r = [], cx = [], cy = [], h = [], e = [], pesoConcreto = [] , numeroCarga = 0 ) {
        this.ip = ip;
        this.fc = fc;
        this.r = r;
        this.cx = cx;
        this.cy = cy;
        this.h = h;
        this.e = e;
        this.pesoConcreto = pesoConcreto;
        this.numeroCarga = numeroCarga;
    }

    ip: string;
    fc: Array<number>
    r: Array<number>
    e: Array<number>
    cx: Array<number>
    cy: Array<number>
    h: Array<number>
    pesoConcreto: Array<number>
    numeroCarga: number;
}