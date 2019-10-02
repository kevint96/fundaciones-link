export class NumeroEtabs {

    constructor(numeroEtabs = 0 ,irPedestal = false,ip = "") {
        this.numeroEtabs= numeroEtabs;
        this.irPedestal = irPedestal;
        this.ip = ip;
    }
    numeroEtabs:number;
    irPedestal:boolean;
    ip: string;
}