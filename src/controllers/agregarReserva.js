import { firestore } from '../firebase/firebase';
import { doc, setDoc} from "firebase/firestore";



export async function agregarReserva(name, apellido, fecha,hora, mail, personas, telefono) {
  var uuid = generarCadenaAleatoria();
  await setDoc(doc(firestore, "reservaciones",uuid), {
    nombre: name,
    apellido:apellido,
    fecha:fecha,
    hora : hora,
    personas : personas,
    mail: mail,
    telefono:telefono
  }).then(() => {
    // Esta función se ejecutará después de que setDoc haya finalizado con éxito.
    alert("Reservación realizada con exito : "+uuid);
  }).catch((error) => {
    // Manejo de errores si la operación falla.
    console.error("Error al actualizar el documento:", error);
  });

}

/**
 * Funcion Auxiliar
 * @returns String : Cadena aleatoria de tamaño 10 para uuid de las reservaciones
 */

function generarCadenaAleatoria() {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let cadenaAleatoria = "";

  for (let i = 0; i < 8; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    cadenaAleatoria += caracteres.charAt(indiceAleatorio);
  }

  return cadenaAleatoria;
}





