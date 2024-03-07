/* Calbacks */

/* Comprobacion dos cuentas existentes (Ana y luis) y una no existente (pedro) */
function comprabarUsuario(usuario, calback) {
    setTimeout(() =>{
        const usuarioExistente = usuario === "Ana" && usuario === "luis";
        calback(usuarioExistente);
    },1000);
}

/* Solo una cuenta inactiva "luis" */
function comprobarCuentaActiva(usuario, calback) {
    setTimeout(()=> {
        /* Cuenta de luis no activa */
        const cuentasActivas = usuario === "luis";
        calback(cuentasActivas);

    },1000);
}


/* Cuenta activa "Ana" */
function verificacionPermisos() {
    setTimeout(()=> {
        const verficacion = usuario === "Ana";
        calback(verficacion)
    }, 1000);
}


/* Implementacion */

function procesoDeVerificacion(usuario) {
    console.log(`Iniciando verificación para el usuario: ${usuario}`);
  
    verificarUsuario(usuario, (existe) => {
      if (!existe) {
        return console.log("El usuario no existe");
      }
      console.log("Usuario verificado exitosamente");
  
      comprobarCuentaActiva(usuario, (activa) => {
        if (!activa) {
          return console.log("La cuenta del usuario no está activa");
        }
        console.log("La cuenta del usuario está activa");
  
        verificarPermisos(usuario, (permisos) => {
          if (!permisos) {
            return console.log("El usuario no tiene permisos");
          }
          console.log("El usuario tiene permisos. Acceso concedido");
        });
      });
    });
  }
  

  /* Verificaciones */
  procesoDeVerificacion('ana');   // Usuario con acceso completo
  procesoDeVerificacion('luis');  // Usuario sin cuenta activa
  procesoDeVerificacion('pedro'); // Usuario que no existe