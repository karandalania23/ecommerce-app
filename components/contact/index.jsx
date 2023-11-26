import Footer from '../landing/footer';
import Header from '../landing/header';
import Navbar from '../landing/navbar';
import Welcome from '../landing/welcome';
import Conform from './conform';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#f2f2f2]'>
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