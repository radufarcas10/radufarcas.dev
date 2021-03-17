import me from './me.jpg';
import './keyframes.css';
import './app.css';
import './media_queries.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Section from './components/Section';

function App() {
  return (
    <div className="wrapper">
      <div className="grad">
        <div className="grad-in"></div>
      </div>
      <div className="about">
        <Header />
        <div className="row">
          <Aside />
          <Section />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
