import { createStore } from 'easy-peasy'; // 👈 import
import productsModel from './model/products-model';
import basketModel from './model/basket-model';
import articlesModel from './model/articles-model';

const storeModel = {
  products: productsModel,
  basket: basketModel,
  Articles: articlesModel
};

const store = createStore(storeModel); // 👈 create our store

export default store;
