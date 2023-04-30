import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsPage = () => {
  const [bookState, setBookState] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3030/books').then((res) => {
      setBookState(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Ürünlerin Hepsi BUrada Yer Alıyor</h1>
      <div>
        {bookState.map((book) => (
          <div>{book.title}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
