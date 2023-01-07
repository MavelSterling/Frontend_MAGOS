import Conexion from "./Conexion";
/* eslint-disable */
class Usuario {  
  _username = 'null';  
  _first_name = 'null';  
  _last_name = 'null';  
  _email = 'null';  
  _rol = 'null';  
  _password = 'null';  // No es necesario guardarla
  _fechaNacimiento = 'null';  
  _documento = 'null'; 
  _token = 'null'; 


  constructor( ){
    //username, first_name, last_name, email, rol, fechaNacimiento, documento 
    // this._username = username;  
    // this._first_name = first_name;  
    // this._last_name = last_name;  
    // this._email = email;  
    // this._rol = rol;   
    // this._fechaNacimiento = fechaNacimiento;  
    // this._documento =  documento; 

    if (typeof Usuario.instance === 'object' ) {
      return Usuario.instance;
    }

    Usuario.instance = this;
    return this;
  }

  // getters
  get getFirst_name() {
    return this._first_name;
  }

  get getUsername (){      
    return this._username;
  }

  get getLast_name (){    
    return this._last_name;
  }

  get getEmail (){    
    return this._email;
  }

  get getRol (){     
    return this._rol;
  }

  get getFechaNacimiento (){    
    return this._fechaNacimiento;
  }

  get getDocumento (){   
    return this._documento;
  }

  get getPassword() {
    return this._password;
  }

  get getToken() {
    return this._token;
  }
  
  // setters

  set setFirst_name( first_name ) {
    this._first_name = first_name;
  }

  set setUsername (username){      
    this._username = username;
  }

  set setLast_name (last_name){    
    this._last_name = last_name;
  }

  set setEmail (email){    
    this._email = email;
  }

  set setRol (rol){     
    this._rol = rol;
  }

  set setFechaNacimiento (fechaNacimiento){    
    this._fechaNacimiento = fechaNacimiento;
  }

  set setDocumento ( documento){   
    this._documento =  documento;
  }

  set setPassword( password ) {
    this._password = password;
  }

  set setToken( token ) {
    this._token = token;
  }

  guardarInformacion( {username, first_name, last_name, email, rol, fechaNacimiento, documento,
    password} ){
    this._username = username;  
    this._first_name = first_name;  
    this._last_name = last_name;  
    this._email = email;  
    this._rol = rol;   
    this._fechaNacimiento = fechaNacimiento;  
    this._documento =  documento; 
    //this._password = password;
  }

  // Método que se encarga de encontrar el objeto Usuario de un arreglo de usuarios según el email
  encontrarUsuarioPorEmail( arreglo ) {
    const respuesta = arreglo.find( elem => this._email === elem.email );
    // console.log( arreglo );
    // console.log( respuesta ); 
    return respuesta
  }
  
  saludar() {
    console.log(`Hola, me llamo ${this._first_name} ${this._last_name}, y soy un ${this._rol}`);
    console.log(`Mi token es: ${this._token}`);
  }

  // Método que elimina la única instancia de Usuario en el caso que éste se desconecte.
  desconectar() {
    delete Usuario.instance;
    this._username = 'null';  
    this._first_name = 'null';  
    this._last_name = 'null';  
    this._email = 'null';  
    this._rol = 'null';   
    this._fechaNacimiento = 'null';  
    this._documento =  'null'; 
    this._password = 'null';
    this._token = 'null';
  }

  // Este método siempre tendrá que ejecutarse primero para asegurar que el usuario tenga todas sus credenciales correctas, sin importar la operación (una vez haya accedido satisfactoriamente)
  validarOperacion( ) {
    return Conexion.validarConexion( this._email, this._password, this._token) 
  }

  obtenerUsuarios() {
    this.validarOperacion()
      .then( validar => {
        Conexion.listarUsuarios( this._token )
          .then( async (resp) => {
            const usuarioEncontrado = this.encontrarUsuarioPorEmail( await resp.data );
            console.log('usuario Encontrado:', usuarioEncontrado );
            if ( usuarioEncontrado ) {
              this.guardarInformacion( usuarioEncontrado ); 
              console.log(`Mi fecha de nacimiento es: ${this._fechaNacimiento}`);
            } else {
              throw 'Usuario no encontrado, o error en el servidor';
            }
            //console.log( resp.data )
          })
      })
      .catch( err => console.log( err ))
  }

}

export default Usuario;