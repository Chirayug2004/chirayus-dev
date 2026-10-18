import { color, motion } from "motion/react";
// import "./style.css";
import { CircleArrowOutUpRight } from 'lucide-react';

const services = [
    { name: "UI/UX Design", image: "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg" },
    { name: "Website Designing", image: "https://images.pexels.com/photos/14553720/pexels-photo-14553720.jpeg" },
    { name: "Video Editing", image: "https://images.pexels.com/photos/29505140/pexels-photo-29505140.jpeg" },
    { name: "Graphic Designing", image: "https://images.pexels.com/photos/4443137/pexels-photo-4443137.jpeg" },
];

function Services () {
   return (

    <div className="services"> 
    <h1 className="service-text">What Do I Offer ?</h1>
       {services.map((service,index) => (

         <motion.div
         className="service"
         key={service.name}
         whileHover={{background: "#a3ff68", color:"black"}}
         >

          <h2>
             0{index + 1}.{service.name}
          </h2>

          <span className="CircleArrowOutUpRight" >
          <CircleArrowOutUpRight/>
          </span>

          <motion.img
            className="preview"
            src={service.image}
            alt={service.name}
            // initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            // whileHover={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.3 }}
          />

         </motion.div>
       ))}
    </div>

   )
}

export default Services ;