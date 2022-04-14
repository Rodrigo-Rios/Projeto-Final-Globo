import React, { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RestaurantForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    image_restaurant: '',
    responsible_name: '',
  });

  const onSubmit = (event: any) => {
    event.preventDefault();

    axios
      .post('http://127.0.0.1:5000/api/v1/restaurants', {
        ...formData,
      })
      .then(() => {
        setFormData({
          name: '',
          address: '',
          description: '',
          image_restaurant: '',
          responsible_name: '',
        })
        toast.success('Restaurante cadastrado com sucesso!');
      })
      .catch(() => {
        toast.error('Erro ao cadastrar restaurante!');
      });
  };

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <br /><br />
      <form className="col-6" onSubmit={onSubmit}>

        <div className="mb-3">
          <label htmlFor="restaurant" className="form-label">
            Nome do Restaurante
          </label>
          <input name="name" type="text" className="form-control" value={formData.name} onChange={handleChange} />
        </div>


        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Endereço do Restaurante
          </label>
          <input name="address" type="text" className="form-control" value={formData.address} onChange={handleChange} />
        </div>


        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descrição do Restaurante
          </label>
          <input name="description" type="text" className="form-control" value={formData.description} onChange={handleChange} />
        </div>


        <div className="mb-3">
          <label htmlFor="image_restaurant" className="form-label">
            Logo do Restaurante
          </label>
          <input name="image_restaurant" type="text" className="form-control" value={formData.image_restaurant} onChange={handleChange} />
        </div>


        <div className="mb-3">
          <label htmlFor="image_restaurant" className="form-label">
            Responsável pelo Restaurante
          </label>
          <input name="responsible_name" type="text" className="form-control" value={formData.responsible_name} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary"> Cadastrar </button>
      </form>
    </div>
  );
}

export default RestaurantForm;
