import { firestore } from '../firebase/firebase';
import { doc, setDoc } from "firebase/firestore";

export async function agregarReserva(name, apellido, fecha,hora, mail, personas, telefono) {
  await setDoc(doc(firestore, "reservaciones","TBTf1wupicoWUDjXU6it"), {
    nombre: name,
    apellido:apellido,
    fecha:fecha,
    hora : hora,
    personas : personas,
    mail: mail,
    telefono:telefono
}); 
}

