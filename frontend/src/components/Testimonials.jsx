import React from "react";
// import "./Testimonials.css"; // Ensure you have appropriate styling and Swiper CSS
// import "swiper/swiper-bundle.min.css";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../assets/assets";

// Install Swiper modules
SwiperCore.use([Pagination]);

const Testimonials = () => {
  return (
    <div id="testimonials">
      <h2 className="font-bold lg:text-4xl mt-7 mb-5 text-[#49557e] xs:text-3xl">
        What Our Customers Say
      </h2>
      <Swiper pagination={{ clickable: true }} className="swiper mt-8 w-full">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide py-16">
            <div className="client__card max-w-[700px] mx-auto text-center fade-in-bottom">
              <img
                className="max-w-24 mx-auto mb-4 border-2 border-solid border-orange-500 rounded-[100%]"
                src={assets.client1}
                alt="client"
              />
              <div className="text-2xl opacity-50 text-[#737373]">
                <i className="ri-double-quotes-r"></i>
              </div>
              <p className="mb-4 text-[#49557e]">
                The best food delivery service I've ever used! The ordering
                process is seamless, and my food always arrives hot and fresh.
                The variety of options available is fantastic, and the quality
                of the meals is top-notch. I highly recommend this service to
                anyone looking for convenient and delicious dining at home.
              </p>
              <h4 className="text-2xl font-medium underline underline-offset-2">
                Sarah Johnson
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide py-16">
            <div className="client__card max-w-[750px] mx-auto text-center">
              <img
                className="max-w-24 mx-auto mb-4 border-2 border-solid border-orange-500 rounded-[100%]"
                src={assets.client2}
                alt="client"
              />
              <div className="text-2xl opacity-50 text-[#737373]">
                <i className="ri-double-quotes-r"></i>
              </div>
              <p className="mb-4 text-[#49557e]">
                I am consistently impressed by the speed and reliability of this
                food delivery service. The drivers are courteous, and the app is
                user-friendly, making it easy to place orders. The special
                promotions and discounts are a great bonus, and the customer
                service is excellent. I can't imagine ordering from anywhere
                else!
              </p>
              <h4 className="text-2xl font-medium underline underline-offset-2">
                Michael Wong
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide py-16">
            <div className="client__card max-w-[750px] mx-auto text-center">
              <img
                className="max-w-24 mx-auto mb-4 border-2 border-solid border-orange-500 rounded-[100%]"
                src={assets.client3}
                alt="client"
              />
              <div className="text-2xl opacity-50 text-[#737373]">
                <i className="ri-double-quotes-r"></i>
              </div>
              <p className="mb-4 text-[#49557e]">
                This food delivery service has changed the way I eat. The
                selection is amazing, with options to suit every taste and
                dietary preference. I love being able to track my order in
                real-time, and the packaging is always eco-friendly and secure.
                Whether it's a quick lunch or a gourmet dinner, they never
                disappoint. Truly a game-changer!
              </p>
              <h4 className="text-2xl font-medium underline underline-offset-2">
                Emily Davis
              </h4>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
      <hr className="lg:mx-0 my-3 mt-16 rounded h-1 xs:w-[95%] lg:w-full xs:mx-auto bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default Testimonials;
