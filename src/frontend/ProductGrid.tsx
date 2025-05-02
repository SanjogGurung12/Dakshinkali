import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import React, { useState, useEffect, useRef } from "react";

export interface Product {
  image: string;
  title: string;
  price: string;
  offerprice: string;
  category: string;
}

const products: Product[] = [
  { image: "/img/samsung.png", title: "Samsung - 75' Class DU6950 Series...", offerprice: "$549.99", price: "$749.99", category: "TV & Home Theater" },
  { image: "/img/insigniaF20.png", title: "Insignia™ - 32' Class F20 Series LED HiDatabase...", offerprice: "$89.99", price: "$129.99", category: "TV & Home Theater" },
  { image: "/img/pioneer.png", title: "Pioneer - 50' Class LED 4K UHD Smart...", offerprice: "$169.99", price: "$299.99", category: "TV & Home Theater" },
  { image: "/img/samsungDU7200.png", title: "Samsung - 65' Class DU7200 Series...", offerprice: "$399.99", price: "$469.99", category: "TV & Home Theater" },
  { image: "/img/samsungDU6900.png", title: "Samsung - 55' Class DU6900 Series...", offerprice: "$279.99", price: "$429.99", category: "TV & Home Theater" },
  { image: "/assets/product2.png", title: "Apple Watch", offerprice: "$149.99", price: "", category: "Cell Phones" },
  { image: "/img/acer.jpg", title: "Acer", offerprice: "$299.99", price: "$369.99", category: "Computers & Tablets" },
  { image: "/img/insigniaF50.png", title: "Insignia™ - 65' Class F50 Series LED 4K", offerprice: "$299.99", price: "$499.99", category: "TV & Home Theater" },
];

const categories = [
  "TV & Home Theater",
  "Computers & Tablets",
  "Video Games",
  "Appliances",
  "Cell Phones",
  "Refrigerator",
  "others",
];

interface ProductGridProps {
  addToCart: (product: Product) => void;
}

export default function ProductGrid({ addToCart }: ProductGridProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productVisibleCount, setProductVisibleCount] = useState(5);
  const [categoryVisibleCount, setCategoryVisibleCount] = useState(5);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("TV & Home Theater"); // Default first category
  const containerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const calculateVisibleItems = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = 300 + 20;
      const count = Math.floor(containerWidth / itemWidth);
      setProductVisibleCount(count > 0 ? count : 1);
    }

    if (categoriesRef.current) {
      const categoryContainerWidth = categoriesRef.current.offsetWidth;
      const categoryItemWidth = 243 + 8;
      const categoryCount = Math.floor(categoryContainerWidth / categoryItemWidth);
      setCategoryVisibleCount(categoryCount > 0 ? categoryCount : 1);
    }
  };

  useEffect(() => {
    calculateVisibleItems();
    window.addEventListener("resize", calculateVisibleItems);
    return () => window.removeEventListener("resize", calculateVisibleItems);
  }, []);

  // Product scroll arrow handlers
  const handleRightArrowClick = () => {
    if (currentIndex + productVisibleCount < filteredProducts.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleLeftArrowClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Category scroll arrow handlers
  const handleCategoryRightArrowClick = () => {
    if (categoryIndex + categoryVisibleCount < categories.length) {
      setCategoryIndex(categoryIndex + 1);
    }
  };

  const handleCategoryLeftArrowClick = () => {
    if (categoryIndex > 0) {
      setCategoryIndex(categoryIndex - 1);
    }
  };

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(""); // Deselect category
    } else {
      setSelectedCategory(category); // Select new category
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="h-[541.4px] px-4 sm:px-10 py-4">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Trending Deals</h2>
        <h3 className="font-semibold mb-4 text-gray-700">See what deals are selling fast</h3>
      </div>

      {/* Categories section */}
      <div className="relative">
        <div className="overflow-hidden">
          {/* Left arrow for categories */}
          {categoryIndex > 0 && (
            <div
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1 cursor-pointer hover:bg-gray-300"
              onClick={handleCategoryLeftArrowClick}
              style={{ zIndex: 100 }}
            >
              <MdOutlineKeyboardArrowLeft size={30} />
            </div>
          )}

          <div className="flex" ref={categoriesRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(-${categoryIndex * (243 + 8)}px)`,
              }}
            >
              {categories.map((category, i) => (
                <div
                  key={i}
                  className={`text-md w-[235px] h-[42.6px] pr-[8px] rounded-[20px] text-center pt-2  inline-block cursor-pointer gap-[80px] ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-white text-black border-gray-400 border-2"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow for categories */}
          {categoryIndex + categoryVisibleCount < categories.length && (
            <div
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1 cursor-pointer hover:bg-gray-300"
              onClick={handleCategoryRightArrowClick}
            >
              <MdOutlineKeyboardArrowRight size={30} />
            </div>
          )}
        </div>
      </div>

      {/* Display products for the selected category */}
      <div className="relative" ref={containerRef}>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-[90px] pt-[20px]"
            style={{
              transform: `translateX(-${currentIndex * (300 + 20)}px)`,
            }}
          >
            {filteredProducts.map((product, i) => (
              <div
                key={i}
                className="w-[168px] h-[298px] flex-shrink-0 border rounded-[8px]  shadow hover:shadow-md flex-col items-center "
              >
                <div className="w-[70px] h-[25px] bg-red-500 text-white rounded-[8px_0_8px_0] flex items-center justify-center text-xs font-semibold">
                  {product.price && (
                    <>
                      $
                      {Math.round(
                        parseFloat(product.price.replace("$", "")) -
                        parseFloat(product.offerprice.replace("$", ""))
                      )}{" "}
                      off
                    </>
                  )}
                </div>

                <img
                  src={product.image}
                  className="w-[131px] h-[112px] justify-self-center object-cover mb-2 pt-4  "
                />
                <h3 className="text-sm font-medium pl-2">{product.title}</h3>
                <p className="text-sm pl-2">{product.offerprice}</p>
                <p className="text-sm line-through text-gray-700 pl-2">{product.price}</p>
                <div
                  className="flex justify-self-center text-blue-700 gap-1 text-sm cursor-pointer mt-2"
                  onClick={() => addToCart(product)}
                >
                  <FaShoppingCart size={18} />
                  Add to Cart
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left arrow for products */}
        {currentIndex > 0 && (
          <div
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1 cursor-pointer hover:bg-gray-300"
            onClick={handleLeftArrowClick}
          >
            <MdOutlineKeyboardArrowLeft size={30} />
          </div>
        )}

        {/* Right arrow for products */}
        {currentIndex + productVisibleCount < filteredProducts.length && (
          <div
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1 cursor-pointer hover:bg-gray-300"
            onClick={handleRightArrowClick}
          >
            <MdOutlineKeyboardArrowRight size={30} />
          </div>
        )}
      </div>
    </div>
  );
}
