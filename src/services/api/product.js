import axios from 'axios';
import endPoints from '@services/api';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.postProduct, body, config); 
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
}

const updateProduct = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
    },
  };
  const response = await axios.put(endPoints.products.putProduct(id), body, config); 
  return response.data;
};

export { addProduct,deleteProduct, updateProduct };
