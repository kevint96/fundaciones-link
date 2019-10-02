import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Excel } from '../models/excel';
import { Zapatas } from '../models/zapatas';
import { Bases } from '../models/bases';
import { Pedestal } from '../models/pedestal';
import { NumeroEtabs } from '../models/numeroEtabs';
import { NumeroZapata } from '../models/numeroZapata';
import { Resultados } from '../models/resultados';

@Injectable({
  providedIn: 'root'
})
export class ZapatasService {

  selectedZapata: Zapatas;
  employees: Zapatas[];
  zapata: Zapatas; 
  selectedExcel: Excel[];
  cargas: Excel;
  selectedResultados: Resultados[];
  resultados: Resultados;
  numeroEtabs: NumeroEtabs;
  numeroZapata: NumeroZapata;
  selectedBases: Bases[];
  bases: Bases;

  
  //GET
  readonly URL_API = 'http://localhost:3000/api/zapatas';
  readonly URL_BAS = 'http://localhost:3000/api/zapatas/bases';
  //GET
  readonly URL_ZAP = 'http://localhost:3000/api/zapatas/darZapata';
  readonly SEL_ZAP = 'http://localhost:3000/api/zapatas/seleccionarZapata';
  //GET
  readonly URL_EXC = 'http://localhost:3000/api/excel';
  readonly URL_DEV_CAR_EST = 'http://localhost:3000/api/excel/establecer';
  readonly SEL_CAR = 'http://localhost:3000/api/excel/seleccionarCarga';
  //GET
  readonly DAR_ETABS = 'http://localhost:3000/api/numeroEtabs/darNumeroEtabs';
  readonly GUARDAR_ETABS = 'http://localhost:3000/api/numeroEtabs/guardarNumeroEtabs';
  readonly GUARDAR_RESULT = 'http://localhost:3000/api/resultados/guardarResultados';
  readonly GUARDAR_RESULT_PED = 'http://localhost:3000/api/resultados/guardarResultadosPedestal';
  readonly ELIMINAR_RESULTADOS = 'http://localhost:3000/api/resultados/eliminarResultados';
  readonly ELIMINAR_ZAPATAS = 'http://localhost:3000/api/zapatas/eliminarZapatas';
  //GET
  readonly DAR_RESULT = 'http://localhost:3000/api/resultados/darResultados';
  //GET
  readonly DAR_NUM_ZAP = 'http://localhost:3000/api/numeroZapata/darNumeroZapata';
  readonly GUARDAR_NUM_ZAP = 'http://localhost:3000/api/numeroZapata/guardarNumeroZapata';
  readonly URL_EXC_BASES = 'http://localhost:3000/api/excel/darBases';
  readonly URL_AGR_BASES = 'http://localhost:3000/api/bases/agregarBase';
  readonly URL_CAL_BASES = 'http://localhost:3000/api/bases/calcularBase';
  //GET
  readonly URL_DAR_BASES = 'http://localhost:3000/api/bases/';
  readonly RUTA_IP = 'https://jsonip.com/?callback';

  constructor(private http: HttpClient) {
    this.selectedZapata = new Zapatas();
    this.cargas = new Excel();
    this.bases = new Bases();
    this.numeroEtabs = new NumeroEtabs();
    this.resultados = new Resultados();
  }

  postZapatas(zapatas: Zapatas) {
    return this.http.post(this.URL_API, zapatas);
  }

  postBases(bases: Bases) {
    return this.http.post(this.URL_BAS, bases);
  }

  postExcel(excel: Excel) {
    return this.http.post(this.URL_EXC_BASES, excel);
  }

  postAgregarBases(bases: Bases) {
    return this.http.post(this.URL_AGR_BASES, bases);
  }

  postCalcularPedestal(pedestal: Pedestal) {
    return this.http.post(this.URL_CAL_BASES, pedestal);
  }

  postExcelBases(excel: Excel) {
    return this.http.post(this.URL_EXC_BASES, excel);
  }

  postGuardarResultados(resultados: Resultados) {
    return this.http.post(this.GUARDAR_RESULT, resultados);
  }

  postGuardarResultadosPedestal(resultados: Resultados) {
    return this.http.post(this.GUARDAR_RESULT_PED, resultados);
  }

  postEliminarResultados(resultados: Resultados) {
    return this.http.post(this.ELIMINAR_RESULTADOS, resultados);
  }

  postEliminarZapatas(zapatas: Zapatas) {
    return this.http.post(this.ELIMINAR_ZAPATAS, zapatas);
  }

  postSeleccionarCarga(excel: Excel) {
    return this.http.post(this.SEL_CAR, excel);
  }

  getResultados()
  {
    return this.http.get(this.DAR_RESULT); 
  }

  getNumeroEtabs() {
    return this.http.get(this.DAR_ETABS);
  }

  getNumeroZapata() {
    return this.http.get(this.DAR_NUM_ZAP);
  }

  guardarNumeroEtabs(etabs: NumeroEtabs)
  {
    return this.http.post(this.GUARDAR_ETABS, etabs);
  }

  guardarNumeroZapata(numeroZapata: NumeroZapata)
  {
    return this.http.post(this.GUARDAR_NUM_ZAP, numeroZapata);
  }

  getZapatas() {
    return this.http.get(this.URL_API);
  }

  getZapata() {
    return this.http.get(this.URL_ZAP);
  }

  postSeleccionarZapata(zapata: Zapatas) {
    return this.http.post(this.SEL_ZAP, zapata);
  }
  

  getCargas(){
    return this.http.get(this.URL_EXC);
  }

  postEstablecerCarga(excel: Excel) {
    return this.http.post(this.URL_DEV_CAR_EST, excel);
  }

  getBases(){
    return this.http.get(this.URL_DAR_BASES);
  }

  getIP()
  {
    return this.http.get(this.RUTA_IP);
  }

  // $.getJSON("http://jsonip.com/?callback=?", function (data) {
  //         console.log(data);
  //         // alert(data.ip);
  //         document.getElementById('ipId').innerHTML = data.ip; 
  //     });


}