/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import RestaurantService from '../../RestaurantList/RestaurantService';
import RestaurantModel from '../../../models/RestaurantModel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Extra{
  extra: string;    
}
function FormCardapio() {
  const restaurantService = new RestaurantService();
  const [restaurants, setRestaurants] = useState([]);
  const [form, setForm] = useState({
    restaurant: '',
    name: '',
    image_product: '',
    description: '',
    price: '',
  });

  const [inputList, setInputList] = useState<Extra[]>([{ extra: '' }]);

  const handleAddClick = () => {
    setInputList([...inputList, { extra: '' }]);
  };

  const handleInputChange = (e: any, index: number) => {
    const { name, value  } = e.target;
    const list = [...inputList];
    const indexArray: keyof [] = index;
    const key: keyof Extra = name
    list[indexArray][key] = value;
    
    setInputList(list);
  };

  useEffect(() => {
    restaurantService.getRestaurants().then(setRestaurants);
  }, []);

  function handleChange(event: any) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function resetForm() {
    setForm({ restaurant: '', name: '', description: '', image_product:'', price: '' });
    setInputList([{ extra: '' }]);
  }

  function onSubmit(event: any) {
    event.preventDefault();
    const payload = {
      name: form.name,
      image_product: form.image_product,
      price: parseFloat(form.price),
      description: form.description,
      extras: inputList.map((item: any) => item.extra),
    };
    restaurantService
      .addMenu(form.restaurant, payload)
      .then(() => {
        toast.success('Cardápio cadastrado com sucesso!');
        resetForm();
      })
      .catch(() => {
        toast.error('Erro ao cadastrar cardapio! Verifique os dados e tente novamente.');
      });
  }

  return (
    <>
      <ToastContainer position="bottom-right" />
      <form className="col-6" onSubmit={onSubmit}>
        <select
          className="form-select mb-3 mt-5"
          value={form.restaurant}
          aria-label="Default select example"
          onChange={handleChange}
          name="restaurant"
        >
          {restaurants.map((restaurant: RestaurantModel, index) => (
            <option key={index} value={restaurant.restaurant_id}>
              {restaurant.name}
            </option>
          ))}
        </select>

        <div className="mb-3">
          <label htmlFor="product" className="form-label">
            Nome do Produto
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            id="product"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descrição do produto
          </label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="form-control"
            id="description"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image_product" className="form-label">
            Imagem do Produto
          </label>
          <input
            type="text"
            name="image_product"
            value={form.image_product}
            onChange={handleChange}
            className="form-control"
            id="price"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Preço
          </label>
          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="form-control"
            id="price"
          />
        </div>
       
        <div className="mb-3">
          <label htmlFor="extra" className="form-label">
            Extras
          </label>
          <div className="">
            {inputList.map((input, index) => {
              return (
                <div key={index}>
                  <input
                    type="text"
                    name="extra"
                    value={input.extra}
                    onChange={(e) => handleInputChange(e, index)}
                    className="form-control col-8 mb-3"
                    id="extra"
                  />
                  {inputList.length - 1 === index && (
                    <button type="button" className="btn btn-primary" onClick={handleAddClick}>
                      +
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default FormCardapio;
