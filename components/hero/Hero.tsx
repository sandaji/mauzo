import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg')`,
        width: "90%",
        height: "75vh",
        margin: "0 auto",
      }}
    >
      <div className=" text-center">
        <h1 className="text-4xl font-semibold mb-4 text-purple-500">
          Welcome to Our E-Commerce Store
        </h1>
        <p className="text-lg mb-6">
          Discover the latest trends in fashion, electronics, and more.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
