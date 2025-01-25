import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        {/* Delivery Info */}
        <div className="text-center mb-4">
          <p className="text-lg font-semibold">We deliver all over India!</p>
        </div>

        {/* Address and Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p>107/78 B Jawahar Nagar, Bhadauria Chauraha</p>
            <p>Kanpur, Uttar Pradesh, India</p>
            <p>Pin Code: 208012</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Phone: +91-9839430044</p>
            <p>Email: mohitkukreja463@gmail.com</p>
            <p>Customer Care: Available 24/7</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} Furniture Shop. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;
