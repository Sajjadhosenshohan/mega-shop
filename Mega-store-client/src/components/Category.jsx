
// eslint-disable-next-line react/prop-types
const Category = ({setCategory}) => {
    return (
        <div>

            <p className='my-4 md:text-xl font-semibold'>Please select your Category name:</p>
            <div className="flex flex-col gap-3 ">
                <span className='flex  gap-2'>
                    <input
                        type="radio"
                        id="TV"
                        name="brand"
                        value="TV"
                        onChange={e => setCategory(e.target.value)}
                    />
                    <label htmlFor="TV">TV</label>
                </span>

                <span className='flex  gap-2'>
                    <input
                        type="radio"
                        id="Watch"
                        name="brand"
                        value="Watch"
                        onChange={e => setCategory(e.target.value)}
                    />
                    <label htmlFor="Watch">Watch</label>
                </span>

                <span className='flex  gap-2'>
                    <input
                        type="radio"
                        id="Headphones"
                        name="brand"
                        value="Headphones"
                        onChange={e => setCategory(e.target.value)}
                    />
                    <label htmlFor="Headphones">Headphones</label>
                </span>

                <span className='flex  gap-2'>
                    <input
                        type="radio"
                        id="Camera"
                        name="brand"
                        value="Camera"
                        onChange={e => setCategory(e.target.value)}
                    />
                    <label htmlFor="Camera">Camera</label>
                </span>
            </div>

        </div>
    )
}

export default Category
