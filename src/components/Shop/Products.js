import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Apples',
    description: 'The best apples from the area',
  },
  {
    id: 'p2',
    price: 3,
    title: 'Plums',
    description: 'The favorite fruit of the Queen',
  },
  {
    id: 'p3',
    price: 5,
    title: 'Peaches',
    description: 'Everybody loves peaches',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(({id, title, price, description}) => 
          <ProductItem key={id}
            id={id}
            title={title}
            price={price}
            description={description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
