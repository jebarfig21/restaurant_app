import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { agregarReserva } from '../controllers/agregarReserva';
import '../styles/ReservasStyle.css'; 

function Reservas() {
  const [startDate, setStartDate] = useState(null);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [partySize, setPartySize] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  
  const handleAgregarReserva = () => {
    // ... lógica para obtener los datos de la reserva
    console.log('Datos del formulario:', {
      name,
      lastName,
      reservationDate: startDate,
      reservationTime,
      partySize,
      mail,
      phone
    });
    

    agregarReserva(name,lastName,startDate,reservationTime,mail,partySize,phone);
  };

  /**
   * Render de componente
   */
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <form className="formulario-especifico"   onSubmit={handleAgregarReserva}>
            <h2>Reserva</h2>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Fecha de Reserva</label>
              <br />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="reservationTime">Hora de Reserva</label>
              <input
                type="time"
                className="form-control"
                id="reservationTime"
                value={reservationTime}
                onChange={(e) => setReservationTime(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="partySize">Cantidad de Personas</label>
              <select
                className="form-control"
                id="partySize"
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                required
              >
                <option value="">Seleccionar</option>
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
                <option value="6">6 personas</option>
                <option value="7+">7 o más personas</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mail">Correo Electrónico</label>
              <input
                  type="mail"
                  className="form-control"
                  id="mail"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Número de Teléfono</label>
              <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
              />
              </div>
           
            <button type="submit" className="btn btn-primary">
              Reservar
            </button>
          </form>
        </div>
        <div className="col-md-8">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/restaurant-app-4d79b.appspot.com/o/TacoPortada.png?alt=media&token=3f38960a-4a83-4bcf-9424-73c6da940453"
            alt="Imagen del restaurante"
            className="img-fluid"
            style={{ borderRadius: '10%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Reservas;