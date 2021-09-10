import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer, Categories, Restaurants, Highlights, Cards } from './components';

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Highlights />
      <Restaurants />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
