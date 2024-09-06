import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { ServicesAtom } from '../store/store';
import { useNavigate } from 'react-router-dom';
export default function Services() {
  const  setService = useSetRecoilState(ServicesAtom) 
  const navigate = useNavigate()
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const apiUrl = import.meta.env.VITE_API_URL;
  //       const res = await axios.get(`${apiUrl}/api/website/getService`);
  //       setData(res.data);
  //       console.log(res.data[0].services); 
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setError(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const data = [
    {
      services: "Web development",
      description: "Building responsive and modern websites using the latest technologies. Key features include SEO optimization, cross-browser compatibility, and fully responsive designs."
    },
    {
      services: "App development",
      description: "Creating mobile and desktop applications with seamless user experiences. Features include offline support, push notifications, and integration with third-party APIs."
    }
  ];
  
  const handleService = (value)=>{
    setService(value)
    navigate('/servicedescription')
    
  }
  return (
    <div className='flex flex-col items-center justify-center mt-16 px-4 md:px-8 text-white'>
      <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
        Services We Offer
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-4 w-full'>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className='bg-slate-900 shadow-md rounded-lg p-4 flex items-center justify-center text-center h-24 lg:h-[400px] hover:bg-slate-800 cursor-pointer ' onClick={()=>handleService(item)}>
              <h2 className='font-bold text-lg font-sora'>{item.services}</h2>
            </div>
          ))
        ) : (
          <div>Loading services...</div>
        )}
      </div>

      <div className='flex items-center justify-between w-full font-sora mt-4'>
        <h4 className='font-semibold w-40 md:w-80'>Have an idea? Let’s make it happen!</h4>
        <Link to='/contact'>
          <Button label="Contact us" />
        </Link>
      </div>
    </div>
  );
}
