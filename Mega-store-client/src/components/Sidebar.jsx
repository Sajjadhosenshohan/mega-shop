import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
const Home = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-full">
      {isSidebarVisible && (
        <div className="flex flex-col min-h-[800px] p-3 w-60 bg-white">
          <div className="space-y-3">
            <div className="flex items-center justify-between ">
              <h2>Dashboard</h2>
              
              <button className="p-2 bg-gray-100 rounded-full block md:hidden" onClick={toggleSidebar}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-800">
                  <rect width="352" height="32" x="80" y="96"></rect>
                  <rect width="352" height="32" x="80" y="240"></rect>
                  <rect width="352" height="32" x="80" y="384"></rect>
                </svg> */}
                <RxCross2 />
              </button>
            </div>

            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                      <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                    </svg>
                    <span>Home</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                    <span>Search</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                      <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                    </svg>
                    <span>Chat</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                      <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                    </svg>
                    <span>Orders</span>
                  </a>
                </li>
                <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900">
                  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.765l6.91-6.91a96.063,96.063,0,0,1,135.815,0l15.595,15.595,11.314,11.313L261.7,143.028l28.3-28.628,15.595-15.7a96,96,0,1,1,135.8,135.778Z"></path>
                    </svg>
                    <span>Wishlist</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                      <path d="M290.74,184.93a79.671,79.671,0,0,0-69.485,0A80.016,80.016,0,1,0,295.012,272c.038,1.033.085,2.066.085,3.106a79.566,79.566,0,0,0,40.068,69.068,67.07,67.07,0,0,0,92.055,24.476A67.076,67.076,0,0,0,467.1,276.115a79.647,79.647,0,0,0-82.47-81.185,79.653,79.653,0,0,0-80.363-10Zm-65.318-65.318A48.008,48.008,0,1,1,175.8,208,48.055,48.055,0,0,1,225.422,119.612Zm148.131,160.5a48.008,48.008,0,1,1,48,48A48.055,48.055,0,0,1,373.553,280.108ZM142.857,336A68.57,68.57,0,0,0,74.3,365.74,48.023,48.023,0,0,1,33.874,318a96.028,96.028,0,0,1,108.318-8.527A68.522,68.522,0,0,0,142.857,336Z"></path>
                    </svg>
                    <span>Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {
        !isSidebarVisible && <div className="flex-1 p-6">
       
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded block md:hidden" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
        
      </div>
      }
    </div>
  );
};

export default Home;
