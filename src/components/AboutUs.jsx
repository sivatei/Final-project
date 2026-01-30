import React from "react";
import Leab from "../assets/image/leab.png"
import Tei from "../assets/image/tei.png"

export default function AboutUs() {
  return (
    <div className="max-w-300 mx-auto px-5 py-16 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center mb-16 py-10 px-5 rounded-2xl bg-linear-to-br from-orange-500 to-orange-400 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-5">About Flavorful Kitchen</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
          Where passion for cooking meets the joy of sharing delicious recipes with food lovers around the world
        </p>
      </section>

      {/* Content Section */}
      <section className="grid md:grid-cols-2 gap-10 mb-16 items-center">
        <div>
          <h2 className="text-3xl text-orange-400 mb-5">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Flavorful Kitchen was born from a simple belief: that great food brings people together and creates lasting memories. What started as a small blog sharing family recipes has grown into a vibrant community of home cooks and food enthusiasts.
          </p>
          <p className="text-gray-600 mb-4">
            We believe that cooking should be accessible, enjoyable, and rewarding for everyone, whether you're a seasoned chef or just starting your culinary journey. Every recipe we share is tested in real kitchens by real people, ensuring that you get reliable results every time.
          </p>
          <p className="text-gray-600">
            Our mission is to inspire confidence in the kitchen, celebrate diverse flavors from around the world, and help you create meals that nourish both body and soul.
          </p>
        </div>
        <div className="h-96 bg-linear-to-br from-orange-50 to-orange-200 rounded-xl flex items-center justify-center text-[#ff6b35] text-xl shadow-[0_10px_30px_rgba(255,107,53,0.2)]">
          <img src="https://i.pinimg.com/1200x/ad/13/7c/ad137c49b31f8281b8f043206759860f.jpg" alt="Kitchen" className="w-full h-full object-cover rounded-xl"/>
        </div>
      </section>


      {/* Team Section */}
      <section className="text-center mb-16">
        <h2 className="text-4xl text-orange-500 mb-5">Meet Our Team</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          The passionate people behind the recipes, photos, and stories you love
        </p>

        <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-2">
          {[
            {
              name: "Yim Sivatey",
              role: "Founder & Head Chef",
              description:
                "With 15 years of culinary experience, Tei brings professional techniques to home cooking with warmth and accessibility.",
              img: Tei, 
            },
            {
              name: "Nob SreyLeab",
              role: "Recipe Developer",
              description:
                "SreyLeab specializes in Asian fusion cuisine and brings innovative flavor combinations to traditional dishes.",
              img: Leab,
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1.25 transition-transform"
            >
            <img
            src={member.img}
            alt={member.name}
            className="w-36 h-36 mx-auto mb-5 rounded-full object-cover"
            />
              <h3 className="text-gray-800 text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-orange-500 italic mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-10 rounded-2xl bg-linear-to-r from-orange-500 to-orange-400 text-white">
        <h2 className="text-4xl mb-4">Join Our Culinary Journey</h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter and never miss a recipe, cooking tip, or kitchen story
        </p>
        <a
          href="#"
          className="inline-block px-10 py-4 bg-white text-orange-500 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-lg transition-transform"
        >
          Get Started Today
        </a>
      </section>
    </div>
  );
}
