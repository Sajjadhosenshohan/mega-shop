// import Sidebar from "../components/Sidebar"

import { useContext, useEffect, useState } from "react";
import Card from "../components/card"
import { Context } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../components/Pagination";

const Home = () => {
  const axiosPublic = useAxiosPublic()
  const { loading,  brandName, category, minPrice, maxPrice, setBrandName, setCategory, setMinPrice, setMaxPrice, setAllProducts } = useContext(Context);


  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const pages = [];

  // search
  const [search, setSearch] = useState('');

  // sort
  const [sort, setSort] = useState('')

  // DateSort
  const [DateSort, setDateSort] = useState('')



  const { data } = useQuery({
    queryKey: ["products", currentPage, itemsPerPage, pages, search, sort, DateSort, brandName, category, minPrice, maxPrice],
    enabled: !loading ,
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/allProducts?page=${currentPage}&size=${itemsPerPage}&search=${search}&sort=${sort}&DateSort=${DateSort}&brandName=${brandName}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
      return data;
    },
  });



  // pagination
  const { products = [], count = 0 } = data || {};

  // send brand inf
  useEffect(() => {
    setAllProducts(products);
  }, [data]);



  const numberOfPages = Math.ceil(count / itemsPerPage);
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i)
  }

  const handleItemPerPage = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  }

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setCurrentPage(0);
  }

  // reset
  // for reset
  const handleReset = () => {
    setSearch("")
    setSort("")
    setDateSort("")
    setBrandName("")
    setCategory("")
    setMinPrice(0)
    setMaxPrice(1000)
  }


  return (
    <div className="h-full p-5 relative">

      <div className="mb-10 flex flex-col lg:flex-row items-center gap-5 lg:gap-8 justify-center mt-10 ">
        {/* search */}
        <form className="flex">
          <input onChange={(e) => handleSearch(e)} type="text" name="search" className="grow p-2 rounded border-primary  border-2 input input-bordered input-success" placeholder="Search by product name" />
        </form>

        {/* Reset button */}
        <button onClick={handleReset} className="text-white p-2 rounded bg-primary   input input-bordered input-success">Reset</button>

        {/* sort in new method */}
        <div>
          <select
            onChange={e => {
              setSort(e.target.value)

            }}
            value={sort}
            name='sort'
            id='sort'
            className="grow p-2 rounded border-primary  border-2 input input-bordered input-success"
          // className='border p-4 rounded-md'
          >
            <option value=''>Sort By Price</option>
            <option value='dsc'>High to Low</option>
            <option value='asc'>Low to High</option>
          </select>
        </div>

        {/* DateSort in new method */}
        <div>
          <select
            onChange={e => {
              setDateSort(e.target.value)

            }}
            value={DateSort}
            name='sort'
            id='sort'
            className="grow p-2 rounded border-primary  border-2 input input-bordered input-success"
          // className='border p-4 rounded-md'
          >
            <option value="">Sort by Date</option>
            <option value="newest"> Newest first</option>
            <option value="oldest"> Oldest first</option>
          </select>
        </div>



      </div>

      {
        products && products?.length > 0 ? (<div className="mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            products?.map(singleData => (

              <Card key={singleData._id} singleData={singleData} />
            ))
          }

        </div>) : (
          <div className="flex justify-center items-center text-3xl text-red-600">
            <h2>No data Found ...</h2>
          </div>
        )
      }

      {/* Pagination */}
      <div
        className={` flex-wrap justify-center items-center w-full lg:flex ${products?.length < 0 ? "mt-[400px]" : "mt-4"
          }`}
      >
        <Pagination
          handlePrevious={handlePrevious}
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleItemPerPage={handleItemPerPage}
          itemsPerPage={itemsPerPage}
          handleNext={handleNext}
        />
      </div>

    </div>
  )
}

export default Home
