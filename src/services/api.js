/**
 * Mocking client-server processing
 */
import { Observable } from 'rxjs/Observable';

export type ProductType = {
  id: number,
  title : string,
  price: number,
  inventory: number,
}

const mockProducts = [
  {
    id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2,
  },
  {
    id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10,
  },
  {
    id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5,
  },
];

const TIMEOUT = 100;
const MAX_CHECKOUT = 2; // max different items

const api = {
  getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 1000);
    });
  },
  /* getProducts: () => new Observable((observer) => {
    const timerId = setTimeout(() => {
      observer.next(mockProducts);
      observer.complete();
    }, TIMEOUT);
    return () => clearTimeout(timerId);
  }),
 */
  buyProducts: cart => new Observable((observer) => {
    const timerId = setTimeout(() => {
      if (Object.keys(cart.quantityById).length <= MAX_CHECKOUT) {
        observer.next(cart);
      } else {
        observer.error(`You can buy ${MAX_CHECKOUT} items at maximum in a checkout`);
      }
      observer.complete();
    }, TIMEOUT);
    return () => clearTimeout(timerId);
  }),
};

export default api;
