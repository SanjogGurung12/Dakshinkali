import { BsCart3 } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { Product } from "./ProductGrid";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";

interface NavbarProps {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  cartItems: { item: Product; quantity: number }[];
  updateQuantity: (title: string, delta: number) => void;
  removeItem: (title: string) => void;
  handleOrder: () => void;
}


export default function Navbar({
  cartOpen,
  setCartOpen,
  cartItems,
  updateQuantity,
  removeItem,
  handleOrder,
}: NavbarProps) {


  return (
    <>
      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 h-full overflow-y-auto text-center">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
            <p>Cart is currently empty.</p>
           ) : (
      <ul className="space-y-4 w-[80%] justify-self-center ">
             {cartItems.map(({ item, quantity }, i) => (
      <li key={i} className="items-center justify-between gap-2 border-b pb-2">
            <div className="relative  h-25 flex-shrink-0">
               <img src={item.image} className="w-full h-full object-cover rounded" />
               <button
                 onClick={() => removeItem(item.title)}
                 className="absolute top-0 right-0 bg-white text-red-500 font-bold text-lg px-1 rounded-bl"
               >
                 ×
               </button>
            </div>

            <div className="flex-1 ">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">
                 {quantity} x {item.price} = ${(Number(item.price.slice(1)) * quantity).toFixed(2)}
                </p>
            <div className="flex gap-2 mt-1 justify-center">
                <button onClick={() => updateQuantity(item.title, -1)} className="px-2 bg-gray-200 rounded">-</button>
                <span>{quantity}</span>
                <button onClick={() => updateQuantity(item.title, 1)} className="px-2 bg-gray-200 rounded">+</button>
            </div>
           </div>
       
      </li>
    ))}
    <li className="font-bold text-lg text-right pt-2">
      Total: $
      {cartItems.reduce((total, { item, quantity }) => total + Number(item.price.slice(1)) * quantity, 0).toFixed(2)}
    </li>
    <li className="text-right">
      <button
        onClick={handleOrder}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Order
      </button>
    </li>
    </ul>
    )}

          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setCartOpen(false)}
          >
            Close
          </button>
        </div>
      </div>

      {/* Optional Overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav className="justify-start border-b-4 w-[1519.2px] border-b-blue-200">
        <ul className="flex gap-4 pt-1 pl-10">
          <li>Our Outlet</li>
          <li>Dakshinkali Kripa</li>
          <li>Help from an Expert</li>
        </ul>

        <div className="flex pl-10 w-full">
          <div className="block">
            <h1 className="text-3xl">DAKSHINKALI</h1>
            <h2 className="text-2xl">ELECTRONIC</h2>
          </div>

          <div className="flex justify-between items-center w-full gap-6 max-w-7xl ml-auto pr-10">
            <div className="flex items-center gap-2 cursor-pointer">
              <CiMenuBurger size={30} />
              <h3 className="text-2xl">Brands</h3>
            </div>

            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="What can we help you find today?"
                className="w-[120%] h-10 pl-4 pr-10 rounded-lg bg-blue-100 text-black placeholder-black placeholder:text-sm text-center focus:outline-none"
              />
              <IoIosSearch
                size={20}
                className="text-Cart absolute right-[-15%] top-1/2 transform -translate-y-1/2"
              />
            </div>

            <div
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 pl-10 hover:opacity-80 cursor-pointer"
            >
              <BsCart3 size={30} />
              <h3 className="text-2xl">Cart</h3>
            </div>
          </div>
        </div>
      </nav>
      <div className=" flex mt-4 ">
            <ul className="flex gap-4 pl-10">
              <li>Top Deals</li>
              <li>Deal of the Day</li>
              <li>Refurbish</li>
              <li>Membership</li>
              <li>Emi Sewa</li>
              <li>Gift Cards</li>
              <li>Gift ideas</li>
            </ul>
            
            <div className="flex justify-end flex-1 pr-10">
                <ul className='flex gap-6 items-center'>
                  <li className="flex items-center gap-1">
                    <MdOutlineAccountCircle />
                    Account
                    <FaChevronDown />
                  </li>
                  <li className="flex items-center gap-1">Order Status<FaChevronDown /></li>
                  <li className="flex items-center gap-1">Saved<FaChevronDown /></li>
                </ul>
            </div>
      
      </div>
      
    </>
  );
}
