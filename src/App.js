import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
// import Carrinho from './pages/Carrinho/Carrinho' ; 

// To do: rotas para renderização das páginas

function App() {
  return (
    <>
      <Navbar />
      <main className="body container">
        <Home />
        {/* <Busca /> */}
        {/* <Carrinho /> */}
      </main>
      <Footer />
    </>
  );
} 
 
export default App;
