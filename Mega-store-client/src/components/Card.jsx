/* eslint-disable react/prop-types */
const Card = ({ singleData }) => {

    const { productName, productImage, brandName, price, ratings, productCreationDate , category} = singleData;

    return (
        <div className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="flex flex-col p-3 group">
                <div
                    className="bg-center hover:scale-110 transition-all duration-300 ease-in-out  mt-3 bg-no-repeat h-48"
                    style={{
                        backgroundImage: `url('${productImage}')`,
                        backgroundSize: "contain"
                    }}
                ></div>


                <div className="p-4 md:p-4">
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{brandName}</p>
                    <h1 className="text-xl font-medium text-gray-800 dark:text-white">{productName}</h1>

                    <div className="flex mt-2 items-center">
                        {(() => {
                            const stars = [];
                            for (let i = 0; i < 5; i++) {
                                stars.push(
                                    <svg
                                        key={i}
                                        className="w-5 h-5"
                                        fill={i < ratings ? 'orange' : 'gray'}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>
                                );
                            }
                            return stars;
                        })()}
                    </div>
                    <p>{new Date(productCreationDate).toLocaleDateString()}</p>

                    <div className="flex justify-between mt-3 items-center">
                        <h1 className="text-lg font-bold text-[#ef2d2d] md:text-xl">${price}</h1>
                        <button className="p-3 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-primary rounded  hover:bg-blue-600  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                            view
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
