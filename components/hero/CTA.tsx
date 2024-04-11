// components/CallToAction.tsx
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Get Started with Our E-Commerce Platform
        </h2>
        <p className="text-gray-600 mb-6">
          Try it free for 14 days, no credit card required.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">
          Try It Free
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
