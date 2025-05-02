import React from 'react'
import { FiHelpCircle, FiPhone, FiMapPin, FiUser } from 'react-icons/fi'
import { FaYoutube, FaInstagram, FaTiktok, FaTwitter, FaFacebookF, FaPinterestP } from 'react-icons/fa'

const footerLinks = [
  { icon: FiHelpCircle, text: 'Visit our Support Center', href: '/support' },
  { icon: FiPhone, text: 'Contact Us', href: '/contact' },
  { icon: FiMapPin, text: 'Find a Store', href: '/store-locator' },
  { icon: FiUser, text: 'My Account', href: '/account' },
]

export default function Footer() {
  return (
    <div className="w-full bg-slate-100 pt-6 px-10">
      
      {/* Top Icon Links */}
      <div className="flex flex-wrap justify-evenly border-b-2 border-gray-300  px-4 pb-6">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex flex-col items-center gap-2 px-5 py-3 rounded hover:underline"
          >
            <div className="text-gray-500">
              <link.icon className="text-4xl" />
            </div>
            <p className="text-xs text-blue-700">{link.text}</p>
          </a>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-nowrap justify-between gap-10  py-8">

        {/* Left Sections */}
        <div className="flex flex-wrap gap-10">
          
          {/* Support & Services */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-2">Support & Services</h3>
            <ul className="text-blue-700 space-y-1">
              <li><a href="/service" className="hover:underline">Connect with an Expert</a></li>
              <li><a className="hover:underline">Schedule a Service</a></li>
              <li><a className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Partnerships */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-2">Partnerships</h3>
            <ul className="text-blue-700 space-y-1">
              <li><a href="/service" className="hover:underline">Sell on Best Buy Marketplace</a></li>
              <li><a className="hover:underline">Advertise with Us</a></li>
              <li><a className="hover:underline">Affiliate Program</a></li>
              <li><a className="hover:underline">Best Buy Business</a></li>
              <li><a className="hover:underline">Partner*</a></li>
              <li><a className="hover:underline">Developers</a></li>
            </ul>
          </div>

        </div>

        {/* Sign Up Section */}
        <div className="flex flex-col ml-auto min-w-[280px] bg-white">
          <p className="text-blue-700 font-medium mb-4 px-4">Sign in or Create Account</p>
          <h3 className="font-semibold mb-2 px-4">Get the latest deals and more</h3>

          <div className="flex gap-2 mb-4 px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-400"
            />
            <button className="bg-blue-700 text-white px-4 py-2 rounded text-sm hover:bg-blue-800">
              Sign Up
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 px-4 text-blue-700 text-2xl">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-700 text-white">
              <FaPinterestP />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>

        </div>

      </div>

      <div className="flex justify-center gap-10">
        <p>How was your experience?</p>
        <p className='text-blue-700 hover:underline'>Give feedback about our website</p>
      </div>
      <p className='pb-12 pt-6'>In-store pricing may vary. Prices and offers are subject to change. &copy;2025 dakshinkalielectronics. All rights reserved. Dakshinkali Electronics, the Dakshinkali logo, the tag design.</p>
    </div>
  )
}
