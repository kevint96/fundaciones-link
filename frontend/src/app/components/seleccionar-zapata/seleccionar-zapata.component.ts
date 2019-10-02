import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ZapatasService } from '../../services/zapatas.service';
import { Zapatas } from '../../models/zapatas';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { NumeroZapata } from '../../models/numeroZapata';

@Component({
  selector: 'app-seleccionar-zapata',
  templateUrl: './seleccionar-zapata.component.html',
  styleUrls: ['./seleccionar-zapata.component.css']
})
export class SeleccionarZapataComponent implements OnInit {

  pesoSuelo: number;
  pesoConcreto: number;
  diametroAcero: number;
  pesoZapata: number;
  cargaViva: number;
  cargaMuerta: number;
  cargaAdmisibleSuelo: number;
  factorMayoracion: number;
  factorMayoracionUsuario: number;
  numeroZapatas: Array<number>;
  zapatas;
  numeroZapata: number;
  pulsacion: number;
  numeroBajar: number;
  ip: string;

  constructor(public zapatasService: ZapatasService, private router: Router, private modalService: NgbModal) {
    this.getZapata();
    this.getZapatas();
    this.pulsacion = 0;
   }


  ngOnInit() {
    this.zapatasService.getIP()
      .subscribe(res => {
        var x = res;
        this.ip = x["ip"];
        console.log("IP:" + this.ip);
      });
  }

  //Se devuelven todas las zapatas en json
  getZapatas() {
    var zapata = new Zapatas();
    zapata.ip = this.ip;
    this.zapatasService.getZapatas()
      .subscribe(res => {
        this.zapatasService.zapata = res as Zapatas;
        this.zapatas = res;
        // var lista: Zapatas = this.zapatasService.zapata;
        // //console.log("GetZapatas--->:", res);
        // //console.log(res[0]);
        // //console.log(res[1]);
        console.log(this.zapatas.length);
        // document.getElementById('mensaje').style.display = 'block';
        if (this.zapatas.length > 0) {
          document.getElementById('mensaje').innerHTML = "Seleccione el dato inicial de la lista:";
          document.getElementById('imagenAdvertencia').style.display = 'none';
        }
        else {
          document.getElementById('mensaje').innerHTML = "Actualmente no hay ningun dato inicial creado!";
          document.getElementById('imagenAdvertencia').style.display = 'block';
        }
      });
  }

  //se devuelven las zapatas en partes json
  getZapata() {
    var zapata = new Zapatas();
    zapata.ip = this.ip;

    this.zapatasService.getZapata()
      .subscribe(res => {

        var x = res;
        this.zapatasService.zapata = x["ultimaZapata"] as Zapatas;
        this.numeroZapatas = x["listaZapatas"];

        if (this.numeroZapatas.length == 0) {
          //  $("#zapatas").append()
          // $('#zapatas').append('<option value="-1" selected="selected">NO HAY ZAPATAS CREADAS!</option>');
          console.log("NO HAY ZAPATAS");
          console.log("Tamaño: " + this.numeroZapatas.length);
          // $('#mensaje').append('NO HAY ZAPATAS CREADAS!');
          document.getElementById('imagenAdvertencia').style.display = 'block';
          // document.getElementById('mensaje').style.display = 'block';
        }
        else {
          $("#zapatas option[value='-1']").remove();
          // document.getElementById('mensaje').style.display = 'none';
        }

        var lista: Zapatas = this.zapatasService.zapata;
      });
  }

  bajar(i) {
    var num = i;
    this.numeroBajar = num;
    var total = this.zapatas.length;
    // //console.log("TOTAL: " + total);
    // //console.log("i" + i);
    for (let index = 0; index < this.zapatas.length; index++) {
      document.getElementById('zapatas-' + index).style.display = 'none';
      if (index == num) {
        document.getElementById('zapatas-' + num).style.display = 'block';

        var coordenadas = $('#zapatas-' + num).offset();
        console.log("top", coordenadas.top);
        // $("#diseñar").html("Y: " + coordenadas.top + " X: " + coordenadas.left);
        $('body,html').animate({
          scrollTop: coordenadas.top + 100

        }, 1000);
      }
    }
    // if (this.pulsacion == 2) {
    //     document.getElementById('zapatas-' + num).style.display = 'none';
    //     this.pulsacion = 0;
    //   }

  }

  eliminarZapata() {
    var opcion = confirm("¿Seguro que desea eliminar esta fundación?");
    if (opcion == true) {

      var id = this.zapatas[this.numeroBajar]._id;

      console.log("ID--------------->" + id);
      console.log("ZAPATAS: " , this.zapatas);
      console.log("NUM BAJAR: " , this.numeroBajar);
      console.log("ZAPATA array: " , this.zapatas[this.numeroBajar]);
      
      var zapatas = new Zapatas();

      zapatas.id = id;
      zapatas.ip = this.ip;

      this.zapatasService.postEliminarZapatas(zapatas)
        .subscribe(res => {
          //console.log(res);
        });

      setTimeout(() => this.getZapatas(), 400);
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      // this.router.navigate(['/zapatas']);
    }



  }

  seleccionar(i) {

    this.numeroZapata = i;

    //console.log("Numero zapata: " + this.numeroZapata);

    var numeroZapata = new NumeroZapata();
    numeroZapata.numeroZapata = this.numeroZapata;
    numeroZapata.ip = this.ip;

    this.zapatasService.guardarNumeroZapata(numeroZapata)
      .subscribe(res => {
        // //console.log("Se agrego correctamente!");
        //console.log("Aqui se esta enviando el res:", res);

      });

    var opcion = confirm("Se ha seleccionado la zapata, ¿Desea continuar?");
    if (opcion == true) {
      this.router.navigate(['/home']);
    }

  }

}
