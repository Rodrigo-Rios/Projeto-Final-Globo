import React, {useState} from 'react';
import axios from "axios"

function RestaurantForm () {
    const [ formData, setFormData ] = useState({
        name: '',
        address: '',
        description: '',
        image_restaurant: '',
        responsible_name: ''
    });

    // const { handleSubmit } = useForm();
    const onSubmit = (event: any) =>{
      event.preventDefault();
       console.log(JSON.stringify(formData));

       axios.post('http://127.0.0.1:5000/api/v1/restaurants', {
        ...formData
      })

}

    function handleChange(event: any) {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (<div>
        <h3>Cadastro de Restaurantes</h3>
        <form onSubmit = { onSubmit } >
        <div>Nome</div>   
        <input name="name" value={formData.name} onChange={handleChange}/>
        <div>Endereço</div> 
        <input name="address" value={formData.address} onChange={handleChange}/>
        <div>Descrição</div> 
        <input name="description" value={formData.description} onChange={handleChange} />
        <div>Logo</div> 
        <input name="image_restaurant" value={formData.image_restaurant} onChange={handleChange}/>
        <div>Pessoa Responsável</div> 
        <input name="responsible_name" value={formData.responsible_name} onChange={handleChange} />
        <button type="submit"> Enviar </button>
      </form>  
    </div>)
}

export default RestaurantForm;