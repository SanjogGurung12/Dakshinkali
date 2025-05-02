import { Heart } from 'lucide-react';
import { Truck, ShoppingBag, PackageCheck } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";

export interface Product {
  image: string;
  title: string;
  price: string;
  offerprice: string;
}

const products: Product[] = [
  { image: "/img/beatsearbud.png", title: "Beats - PowerBeats Pro Totally Wireless EarBuds - Black", offerprice: "$99.99", price: "$199.99" },
  { image: "/img/samsungDU6900.png", title: "Samsung - 55' Class DU6900 Series Crystal UHD 4K Smart Tizen Tv(2024)", offerprice: "$279.99", price: "$429.99" },
  { image: "/img/asushandga.png", title: "ASUS - ROG Ally7' 120Hz FHD 1080p Gaming Handheld - AMD Ryzen Z1 Extreme Processor-", offerprice: "$499.99", price: "$649.99" },
  { image: "/img/appleipad.png", title: "Apple - iPad mini (A17 Pro chip) - Built for Apple Intelligence - Wi-Fi 128GB - Space Gray", offerprice: "$399.99", price: "$499.99" },
  { image: "/img/asuszen14.png", title: "ASUS - Zenbook 14 OLED 14' WUXGA Touch Laptop, Intel Core Ultra7 - Intel Evo Edition - 16GB", offerprice: "$699.99", price: "$1049.99" },
  { image: "/img/applepencil.png", title: "Apple Pencil Pro - White", offerprice: "$199.99", price: "$129.99" },
];

const bestsell: Product[] = [
  { image: "/img/hp14.png", title: "HP - 14' laptop - Intel Celeron - 4GB Memory - 64GB eMMC - Snowflake White", offerprice: "$129.99", price: "$179.99" },
  { image: "/img/bellaAirfryer.png", title: "bellaPRO - 4.2-qt. Touchscreen Air Fryer - Stainless Steel", offerprice: "$79.99", price: "" },
  { image: "/img/mybuy.png", title: "My Best Buy Total™ - Yearly Membership", offerprice: "$179.99", price: "" },
  { image: "/img/insigniaF20.png", title: "Insignia™ - 32' Class F20 Series LED HD Smart Fire TV", offerprice: "$89.99", price: "$129.99", },
  { image: "/img/bellaPro.png", title: "bella PRO - 2 - Slice Toaster with Extra Wide Slots - Oatmilk", offerprice: "$39.99", price: "$49.99" },
  { image: "/img/appleairtag.png", title: "Apple - AirTag (4-Pack) - Silver", offerprice: "$199.99", price: "$129.99" },
];

const latestgear: Product[] = [
  { image: "/img/lgultragear.png", title: "LG - UltraGear 27' OLED QHD 480Hz 0.03ms NVIDIA G_SYNC", offerprice: "$999.99", price: "" },
  { image: "/img/hyperXalloy.png", title: "HyperX - Alloy Rise 75 &5% Wired Mechanical Linear Switch Gaming", offerprice: "$139.99", price: "169.99" },
  { image: "/img/corsair.png", title: "CORSAIR - K70 PRO TKL Wired Hall Effect Programmable Gamin", offerprice: "$153.99", price: "$179.99" },
  { image: "/img/turtleBeach.png", title: "Turtle Beach - Stealth™ 700 Gen3 Wireless Amplified Gaming", offerprice: "$169.99", price: "$199.99", },
  { image: "/img/wd-black.png", title: "WD - BLACK SN850X 2TB Internal SSD PCle Gen4 x4 NVMe with", offerprice: "$154.99", price: "$229.99" },
  { image: "/img/metaquestVR.png", title: "Meta Quest 3S - Get Batman Shadow", offerprice: "$349.99", price: "$399.99" },
];

export default function Lowerbody() {
  const [liked, setLiked] = useState<boolean[]>(Array(products.length).fill(false));
  const containerRef = useRef<HTMLDivElement>(null);
  const [productVisibleCount, setProductVisibleCount] = useState(0);

  const toggleLike = (index: number) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  const calculateVisibleItems = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = 300 + 20;
      const count = Math.floor(containerWidth / itemWidth);
      setProductVisibleCount(count > 0 ? count : 1);
    }
  };

  const handleRightArrowClick = () => {
    if (containerRef.current) {
      const itemWidth = 300 + 20; // Width of each item including margin
      const scrollAmount = itemWidth * productVisibleCount;
      
      // Scroll by the calculated scrollAmount
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    calculateVisibleItems();
    window.addEventListener("resize", calculateVisibleItems);
    return () => window.removeEventListener("resize", calculateVisibleItems);
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div className="flex w-[1519.2px] h-[506.34px] min-w-[1008px] min-h-[506.34px]">
        <div className="px-10 w-[534px] h-[476.34px]">
          <img src="/img/outlet.png" className="h-[476.34px] w-[476.34px] justify-self-center" />
        </div>
        <div className="flex px-10 w-[964.9px] h-[476.34px] relative">
          <img src="/img/unsplash.png" className="w-[554.38px] h-[476.34px]" />
          <div className="absolute top-12 h-[372.2px] w-[469.56px] bg-white ml-[500px] shadow-md">
            <h1 className="text-5xl font-bold pt-12 pl-10">Our Showrooms</h1>
            <div className="w-[376px] h-[109px] mb-10 pl-4">
              <p className="p-6 text-[17px] text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
            </div>
            <button className="ml-10 text-white bg-black rounded-[20px] px-6 py-3">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="pl-10 mt-10">
        <p className="text-2xl font-semibold mb-6">Trending now</p>
        <div className="flex flex-wrap gap-6 w-[1519.2px] min-w-[1008px] h-[337.2px] px-10">
          {products.map((product, i) => (
            <div key={i} className="w-[218px] flex flex-col items-start relative">
              <div className="w-[200px] h-[150px] overflow-hidden flex items-center justify-center relative">
                <img src={product.image} alt={product.title} className="object-contain h-full" />
                <button
                  onClick={() => toggleLike(i)}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center"
                >
                  <Heart
                    size={18}
                    className={`${liked[i] ? "text-red-500" : "text-black"}`}
                    fill={liked[i] ? "red" : "none"}
                  />
                </button>
              </div>
              <h3 className="text-sm font-medium pl-2 mt-2 h-[51px]">{product.title}</h3>
              <div className="pl-2 mt-1">
                <p className="text-sm font-bold text-green-700">{product.offerprice}</p>
                <p className="text-sm line-through text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className="flex pl-12 w-[1519.2px] h-[180px]">
        <div className="w-[1200px] h-[150px] bg-gradient-to-r from-[#7026BF] to-[#0046BE]">
          <img src="/img/home.png" />
        </div>
        <div className="w-[286px] h-[150px] pl-[16px] rounded-[0_8px_8px_0] text-white bg-[#0046BE] p-2">
          <p>Yes, Dakshinkali sells<br />premium products straight.</p>
          <p className="py-3 font-thin">We've got so much more.</p>
          <a href="#" className="text-yellow-300">Shop now</a>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="flex justify-between items-start w-full max-w-[1519.2px] h-[110px] mx-auto pl-12 pr-12">
        <div className="flex items-start gap-4 max-w-[300px]">
          <PackageCheck className="text-blue-600 w-10 h-10" />
          <p className="font-medium text-gray-500">Free next-day shipping<br />on thousands of items.</p>
        </div>
        <div className="h-12 w-px bg-gray-300 mx-6" />
        <div className="flex items-start gap-4 max-w-[300px]">
          <ShoppingBag className="text-blue-600 w-10 h-10" />
          <p className="font-medium text-gray-500">Ready in one hour with<br />Store or Curbside Pickup</p>
        </div>
        <div className="h-12 w-px bg-gray-300 mx-6" />
        <div className="flex items-start gap-4 max-w-[300px]">
          <Truck className="text-blue-600 w-10 h-10" />
          <p className="font-medium text-gray-500">Same-day delivery</p>
        </div>
      </div>

      {/* Best Selling Section */}
      <div className="pl-10">
        <p className="text-2xl font-semibold mb-6">Best Selling items</p>
        <div className="flex flex-wrap gap-6 w-[1519.2px] min-w-[1008px] h-[337.2px] px-10">
          {bestsell.map((product, i) => (
            <div key={i} className="w-[218px] flex flex-col items-start relative">
              <div className="w-[200px] h-[150px] overflow-hidden flex items-center justify-center relative">
                <img src={product.image} alt={product.title} className="object-contain h-full" />
                <button
                  onClick={() => toggleLike(i)}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center"
                >
                  <Heart
                    size={18}
                    className={`${liked[i] ? "text-red-500" : "text-black"}`}
                    fill={liked[i] ? "red" : "none"}
                  />
                </button>
              </div>
              <h3 className="text-sm font-medium pl-2 mt-2 h-[51px] text-blue-700">{product.title}</h3>
              <div className="pl-2 mt-1">
                <p className="text-sm font-bold text-green-700">{product.offerprice}</p>
                <p className="text-sm line-through text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Background Image Section */}
      <div className="w-[1507.2px] h-[350px] min-w-[1008px] ml-12 mr-6">
        <div className="w-full h-[320px] bg-[url('/img/background.png')] bg-cover bg-center flex items-center relative">
          <div className="w-[340px] h-[288px] pl-12">
            <h1 className="text-5xl font-bold text-white">
              The latest gear is just the beginning
            </h1>
            <a href="#" className="text-sm text-yellow-300">Shop all</a>
          </div>
          <div className="relative w-[1037.2px] h-[288px] overflow-hidden ml-[115px] mr-10">
            <div ref={containerRef} className="flex flex-nowrap overflow-x-auto no-scrollbar h-full px-2 space-x-4">
              {latestgear.map((product, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[170px] h-[288px] bg-white rounded-md shadow-md p-2 "
                >
                  <div className="relative flex justify-center items-center h-[120px] ">
                    <img src={product.image}  className="h-[120px] w-[120px] object-contain" />
                    <button
                      onClick={() => toggleLike(i)}
                      className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center"
                    >
                      <Heart size={14} className={liked[i] ? "text-red-500" : "text-black"} fill={liked[i] ? "red" : "none"} />
                    </button>
                  </div>
                  <p className="text-sm text-blue-700 mt-2 h-[70px]">{product.title}</p>
                  <div className="mt-1">
                    <p className="text-sm font-bold text-green-700">{product.offerprice}</p>
                    <p className="text-sm line-through text-gray-500">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleRightArrowClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-yellow-500 px-2 py-1 rounded-r text-5xl z-10"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className='w=[1519.2px] h-[506.34px] pl-12'>
        <div className='flex justify-center'>
          <img src='\img\deal.png'/>
          <img src='\img\outlet.png'/>
        </div>
      </div>

      <div className='w=full h-[90px] bg-blue-700'>
        <div className='flex items-center justify-center  h-[90px] bg-transparent'>
          <img src='\img\card.png'/>
          <div className='w-[237.94px] text-center'>
            <p className='text-sm text-white font-bold'> Apply today and get</p>
            <p className='text-3xl font-bold text-yellow-200'>10% back</p>
          </div>
          <div className='w-[510.8px]'>
           <p className='w-[478.8px] h-[58.55px] text-white'>in rewards on your first day of purchases, or choose financing, when you are approved for the Card.</p>
          </div>
          <div className='w-[129.26px] pl-[16px] items-center'>
            <button className='w-[72.6px] h-[30.1px] text-blue-700 bg-white rounded-[6px] text-sm font-thin'>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
