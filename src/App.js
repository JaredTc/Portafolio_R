
// import './assets/css/styles.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Header } from './components/header';
import { Footer } from './components/footer';
import { HomePague } from './pages/home';
import AboutMe from './pages/about';
import SkillScreen from './pages/skilss';
import WorkScreen from './pages/work';
import ContactScreen from './pages/contact';

function App() {
  return (

    <div >
      <body>
        <Header />
        <HomePague />
        <AboutMe />
        <SkillScreen />
        <WorkScreen />
        <ContactScreen />
        <Footer />

      </body>

    </div>
  );
}

export default App;
