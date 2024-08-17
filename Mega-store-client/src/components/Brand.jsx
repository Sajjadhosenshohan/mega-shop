/* eslint-disable react/prop-types */

const Brand = ({ setBrandName, BrandName }) => {
    return (

        <span className='flex  gap-2'>
            <input
                type="radio"
                id={BrandName}
                name={BrandName}
                value={BrandName}
                onChange={e => setBrandName(e.target.value)}
            />
            <label htmlFor={BrandName}>{BrandName}</label>

            {/* <span className='flex  gap-2'>
                    <input
                        type="radio"
                        id="Samsung"
                        name="brand"
                        value="Samsung"
                        onChange={e => setBrandName(e.target.value)}
                    />
                    <label htmlFor="Samsung">Samsung</label>
                </span>

                <span className='flex  gap-2'>
                    <input
                        type="radio"
                        id="Sansui"
                        name="brand"
                        value="Sansui"
                        onChange={e => setBrandName(e.target.value)}
                    />
                    <label htmlFor="Sansui">Sansui</label>
                </span> */}
        </span>
    )
}

export default Brand
