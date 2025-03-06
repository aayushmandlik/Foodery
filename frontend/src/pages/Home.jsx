import React, { useContext } from "react";
import { useState } from "react";
import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import { useEffect } from "react";
import "../index.css";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import { StoreContext } from "../context/StoreContext";

const Home = ({ setShowLogin }) => {
  const [category, setCategory] = useState("All");
  const { food_list } = useContext(StoreContext);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = entry.target.dataset.delay;
          entry.target.classList.add("animate-fade-in-bottom");
          observer.unobserve(entry.target); // Stop observing once the animation has been applied
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const elements = document.querySelectorAll(".fade-in-bottom");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, [category, food_list]);

  return (
    <div className="pt-36">
      <Header />
      <hr className="lg:mx-0 my-3 h-1 rounded xs:w-[95%] lg:w-full xs:mx-auto bg-[#e2e2e2] border-none" />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} setShowLogin={setShowLogin} />
      <Testimonials />
      <About />
    </div>
  );
};

export default Home;
