import React from 'react';
import { Link } from 'react-router-dom';

type Toppicks = {
  image: string;
  title: string;
  href: string;
};
type Newarrivals = {
  image: string;
  title: string;
  href: string;
};

const toppick: Toppicks[] = [
  { image: "/img/applemac.png", title: "Apple-MacBook Air 13-inch Apple M2 chip Built for Apple", href: "/abc" },
  { image: "/img/appleipad.png", title: "Apple-10.9-Inch iPad-Latest Model-(10th Generation)", href: "/abc" },
  { image: "/img/lenevo.png", title: "Lenebo-IdeaPad 1 15* FHD Laptop-Ryzen5 7520U-", href: "/abc" },
  { image: "/img/hp.png", title: "HP-15.6* Touch-Screen Laptop-AMd Ryzen5 -8GB", href: "/abc" },
];

const newarrival: Newarrivals[] = [
  { image: "/img/legion.png", title: "Lenovo-Legion Go 8 120Hz WUXGA Gaming Handheld-AMD Ryzen Z2 Go", href: "/abc" },
  { image: "/img/legofornite.png", title: "LEGO - Fornite Peely Bone - Collectible Kit for Adults 77072", href: "/abc" },
  { image: "/img/legoharry.png", title: "LEGO - Harry Potter The Burrow - Collectors' Edition, Weasly House", href: "/abc" },
  { image: "/img/pokemon.png", title: "Pokemon - Trading Card Game: World Championship Deck 2024 - Styles May", href: "/abc" },
  { image: "/img/uag.png", title: "UAG - Bunddle: Pathfinder Series MagSafe Case and Lanyard for iPhone", href: "/abc" },
];

export default function Homepage() {
  return (
    <>
      <div className="flex mt-4 pl-10 pt-[24px] gap-6 w-[1519.2px] h-[px64px]">
        <div className="w-675 h-645">
          <img src="/img/advertise.jpg" className="w-[645px] h-[645px]" />
        </div>

        <div className="w-[848.2px] h-[223.86px] ">
          <div className="w-[818.2px] h-[223.86px] border-2 border-[#C5CBD5]">
            <div>
            <p className="p-[20px]">Today's Top Picks</p>
            </div>
            <div className="flex gap-4 px-4">
              {toppick.map((link, i) => (
                <a href={link.href} key={i}>
                  <div>
                    <img src={link.image} className="w-[139px] h-[107.28px] object-cover mb-2" />
                    <h3 className="text-sm text-blue-700 font-thin pb-[24px]">{link.title}</h3>
                  </div>
                </a>
              ))}
            </div>
           </div>

            <div className="flex mt-6 gap-4 w-[818.2px] h-[223.86px]  justify-evenly">
                <div className='border-2 border-[#C5CBD5] w-[424.1px] h-[397.34px]'>

                <div className='w-[355.5px] h-355.74px]'>    
                  <div className='w-[150px] px-4 py-4'>
                  <p className='wrap bg-blue-700 text-white '>Outlet Deals</p>
                  </div>
                  <div className='py-10 px-4  font-bold text-6xl justify-self-center'>
                  <h1 className='text-red-600'>Clearance,</h1>
                  <h1 className=' '>open-box,</h1>
                  <h1 className="">
                    and more<span className="text-red-500">.</span>
                  </h1>
                  </div>

                  <div className='px-4'>
                  <a href='/'>
                  <p className='text-blue-700 pt-10 font-thin'>View Outlet Deals</p>
                  </a>
                  </div>
                </div>
                </div>

                <div className='border-2 border-[#C5CBD5] w-[424.1px] h-[397.34px]'>

                <div className='w-[355.5px] h-355.74px]'>  
                  <div className='max-w-fit px-4 pt-4'>
                  <p className='wrap bg-red-700 text-white '>Top Deals</p>
                  </div>
                  <img 
                    src='img/beatsearbud.png'
                    className='px-4 justify-self-center font-bold w-[355.5px] h-[246.84px] '/>
                    <p className='px-4 text-blue-700 font-thin'>Beats-PowerBeats Pro Totally Wireless EarBuds</p>
                  <div className='px-4 '>
                  
                  <p>$99.99</p>
                  <p className='line-through'>$199.99</p>
                  <a href='/'>
                  <p className='text-blue-700 font-thin'>Shop All Top Deals</p>
                  </a>
                  </div>
                </div>

                </div>
            </div>
            </div>
        <div>
      </div>
      </div>

      <div className='px-10 pt-10 w-[1519.2px] h-[396.7px] pr-6'>
      <div className="relative border-b-2 border-[#C5CBD5]">
       <p className="inline-block pb-0 border-b-[3px] border-[#0a0e14]">
         New arrivals
       </p>

      </div>


      <div className="flex gap-4 justify-evenly pt-10">
        {newarrival.map((link, i) => (
            <a href={link.href} key={i}>
              <div className='w-[278.64px] h-[236px] pt-[32.8px] px-[16.8px] pb-[16.8px] border-[#C5CBD5] border-2'>
                <img src={link.image} className="w-[245.04px] h-[136.6px] object-cover mb-2" />
                  <h3 className="text-sm text-blue-700 font-thin pb-[24px]">{link.title}</h3>
              </div>
            </a>
        ))}
      </div>
      </div>
    </>
  );
}
