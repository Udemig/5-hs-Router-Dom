import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Merhaba Sayfamıza Hoşgeldiniz</h1>
      <p>İstatistikler</p>
      <h1>
        <Link to={'/books'}>Kitaplar Sayfamıza</Link> bir göz Atın!
      </h1>
    </div>
  );
};

export default MainPage;
