import Footer from '../landing/footer';
import Header from '../landing/header';
import Navbar from '../landing/navbar';
import Welcome from '../landing/welcome';
import Conform from './conform';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#a072d4]'>
                <Welcome />
                <Header name='Contact -' />
                <Conform />
                <Footer />
                <hr />
            </div>
        </>
    )
}
export default Contact;