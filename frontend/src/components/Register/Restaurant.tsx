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
      <br/>
      <h4>Insira aqui os dados do restaurante</h4>
      <br/>
      <form onSubmit={onSubmit}>
        <div>Nome</div>
        
        <input name="name" value={formData.name} onChange={handleChange} />
        <div>Endereço</div>
        <input name="address" value={formData.address} onChange={handleChange} />
        <div>Descrição</div>
        <input name="description" value={formData.description} onChange={handleChange} />
        <div>Logo</div>
        <input name="image_restaurant" value={formData.image_restaurant} onChange={handleChange} />
        <div>Pessoa Responsável</div>
        <input name="responsible_name" value={formData.responsible_name} onChange={handleChange} />
        <button type="submit"> Enviar </button>
      </form>
    </div>
  );
}

export default RestaurantForm;
