import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyDNnSFX4FiKtVGpN_1kFiCQc3H7YQmlxs0';


  // CREAR NUEVOS USUARIOS
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor( private http:HttpClient ) { }

  logout() { 

  }

  login( usuario: UsuarioModel ) { 

  }

  nuevoUsuario( usuario: UsuarioModel ) {

  }
}
