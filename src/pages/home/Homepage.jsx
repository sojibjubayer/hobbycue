import Banner from '@/component/Banner';
import AddYourOwn from '@/component/card/AddYourOwn';
import Card from '@/component/card/Card';
import Testimonials from '@/component/card/Testimonials';
import GetStarted from '@/component/getstarted/GetStarted';
import Footer from '@/component/shared/Footer';
import Navbar from '@/component/shared/Navbar';


const Homepage = () => {
    return (
        <div >
           <Navbar />
           <Banner />
           <Card />
           <AddYourOwn />
           <Testimonials />
           <GetStarted />
           <Footer />
        </div>
    );
};

export default Homepage;