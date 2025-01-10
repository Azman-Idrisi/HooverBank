import styles from "./style";
import Navbar from './screens/Navbar'
import Hero from './screens/Hero'
import Stats from './screens/Stats'
import Business from './screens/Business'
import Billing from './screens/Billing'
import CardDeal from './screens/CardDeal'
import Testimonials from './screens/Testimonials'
import Clients from './screens/Clients'
import CTA from './screens/CTA'
import Footer from './screens/Footer'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials /> 
        <Clients />
        <CTA />
        <Footer /> 
      </div>
    </div>


  </div>
);

export default App;
