import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Reservas() {
  const [startDate, setStartDate] = useState(null);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [partySize, setPartySize] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor
    console.log('Datos del formulario:', {
      name,
      lastName,
      reservationDate: startDate,
      reservationTime,
      partySize,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={handleFormSubmit}>
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
            <button type="submit" className="btn btn-primary">
              Reservar
            </button>
          </form>
        </div>
        <div className="col-md-8">
          <img
            src="URL_DE_LA_IMAGEN"
            alt="Imagen del restaurante"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Reservas;