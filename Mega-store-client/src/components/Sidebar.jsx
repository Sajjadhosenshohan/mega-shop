import { useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import { Context } from '../Provider/AuthProvider';
import Category from './Category';
import PriceRange from './PriceRange';
import Brand from './Brand';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
const Home = () => {
  const { setCategory, setBrandName, setMinPrice, setMaxPrice, minPrice, maxPrice, allProducts, isSidebarVisible, toggleSidebar } = useContext(Context)



  return (
    <div className=" absolute lg:static z-40">
      {isSidebarVisible ? (
        <div className="flex flex-col min-h-[800px] p-3 w-60 bg-white">
          <div className="space-y-3">
            <div className="flex items-center justify-between ">
              <h2 className='mt-4 md:text-3xl md:font-bold'>Filter</h2>

              <button className="p-3 bg-gray-50 rounded-full " onClick={toggleSidebar}>
                
                <RxCross2 className='text-[#ef2d2d] font-bold' />
              </button>
            </div>

            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-10 text-sm">

                <Link to='/'>
                  <div className=" flex items-center my-4 md:text-xl font-semibold  gap-2 text-xl">
                    <IoMdHome className='text-[#ef2d2d]'/>
                    <p className=''>Home</p>
                  </div>
                </Link>

                <Link to='/login'>
                  <div className=" flex items-center my-4 md:text-xl font-semibold  gap-2 text-xl">
                    <MdLogin className='text-[#ef2d2d]'/>
                    <p className=''>Login</p>
                  </div>
                </Link>

                <Link to='/register'>
                  <div className=" flex items-center my-4 md:text-xl font-semibold gap-2 text-xl">
                    <RiLoginCircleLine  className='text-[#ef2d2d]'/>
                    <p className=''>Register</p>
                  </div>
                </Link>


                <div>
                  <p className='my-4 md:text-xl font-semibold'>Please select your Brand name:</p>

                  <div className="grid grid-cols-2 gap-3 ">

                    {
                      allProducts?.map((p) => (
                        <Brand key={p._id} setBrandName={setBrandName} BrandName={p.brandName} />
                      ))
                    }
                  </div>
                </div>


                {/* category */}

                <Category setCategory={setCategory} />

                {/* price range */}

                <PriceRange minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
              </ul>
            </div>
          </div>
        </div>
      ) :
        (
          <button onClick={toggleSidebar} className=" font-medium  text-white h-10 absolute  top-[5rem] left-[-20px] lg:left-1 text-base  p-1 rounded-sm bg-primary text-center">
            Dashboard
          </button>
        )


      }



    </div>
  );
};

export default Home;
