import { firestore } from '../firebase/firebase';

export async function agregarReserva(reservaData) {
  try {
    await firestore.collection('reservaciones').add(reservaData);
    console.log('Reserva agregada con éxito');
  } catch (error) {
    console.error('Error al agregar la reserva:', error);
  }
}

