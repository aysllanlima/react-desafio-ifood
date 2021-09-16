import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer, Categories, Restaurants, Highlights } from '../components';

function Page1() {
  return (
    <>
      <Header />
      <Categories />
      <Highlights />
      <Restaurants />
      <Footer />
    </>
  );
}

export default Page1;
