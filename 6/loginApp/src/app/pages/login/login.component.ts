import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.modelo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario : UsuarioModel = new UsuarioModel();
  constructor() { }

  ngOnInit() {
  }


  login( form: NgForm ){


    if ( form.invalid ) { return; }

    console.log(this.usuario)
    console.log(form)

  }

}