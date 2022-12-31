import './App.css';
import Navbar from './component/navbar';
import Card from './component/InformationCard';
import DividingLine from './component/dividingLine';
import FixedCard from './component/fixedCard';
import { RiRadioButtonFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Footer from './component/foter';


export default function App() {
  return (
    <div className='h-screen'>
      <div className='fixed top-0 left-0 right-0'>
        <Navbar />
      </div>
      <div className='container mx-auto w-2/3'>
        <div className='flex flex-col'>
          <div className='mt-10 mx-auto sm:flex sm:flex-wrap sm:justify-around lg:justify-between lg:mx-0'>
            <Card Link='/' name="Store" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
            <Card Link='/' name="Shopping" img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" />
            <Card Link='/' name="online store" img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
          </div>
          <DividingLine text='welcom to aplication' />
          <FixedCard img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            img1="https://flowbite.com/docs/images/people/profile-picture-4.jpg" />
        </div>
      </div>
      <div className='text-xl flex justify-end fixed buttom-30 left-0 right-20'><Link to='/'><RiRadioButtonFill /></Link></div>
      <div className='fixed bottom-0 left-0 right-0'>
        <Footer />
      </div>
    </div>
  )
};