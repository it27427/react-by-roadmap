import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={} />
      </Routes>

      <h1>React By Roadmap</h1>

      <Footer />
    </>
  );
}

export default App;
