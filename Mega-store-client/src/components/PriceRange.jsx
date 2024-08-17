/* eslint-disable react/prop-types */

function PriceRange({ setMinPrice, setMaxPrice, minPrice, maxPrice }) {
    return (
        <div>

            <p className='my-4 md:text-xl font-semibold'>Price Range:</p>
            <span>
                <label htmlFor="minPrice">Min Price: </label>
                <input onChange={e => setMinPrice(e.target.value)} type="number" id="minPrice" name="minPrice" value={minPrice} className="grow p-2 rounded border-primary  border-2 input input-bordered input-success" />
            </span> <br /> <br />

            <span>
                <label htmlFor="maxPrice">Max Price: </label>
                <input onChange={e => setMaxPrice(e.target.value)} type="number" id="maxPrice" name="maxPrice" value={maxPrice} className="grow p-2 rounded border-primary  border-2 input input-bordered input-success" />
            </span>
        </div>
    )
}

export default PriceRange
