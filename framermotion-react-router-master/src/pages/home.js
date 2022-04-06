import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main className="flex-col z-30">
      <div className="flex flex-grow my-0 items-center justify-center space-x-16 relative h-screen">
        <div className="flex">
          <motion.div
            className="relative flex-col"
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
          >
            <div
              className="relative overflow-hidden"
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}
            >
              <div className="">
                <Link to={`/model/khaingmyelkhant`}>
                  <ProgressiveImage
                    src={require("../images/yasmeen.webp")}
                    placeholder={require("../images/compressed-image.jpg")}
                  >
                    {(src) => {
                      // console.log(src);
                      return (
                        <motion.img
                          src={src["default"]}
                          alt="an image"
                          whileHover={{ scale: 1.1 }}
                          transition={transition}
                        ></motion.img>
                      );
                    }}
                    {/* {(src) => (
                      <motion.img
                        src={src}
                        alt="Yasmeen Mustafa"
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )} */}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="flex justify-between"
            >
              <div className="title">ABOUT</div>
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="relative flex-col"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
          exit={{ opacity: 0 }}
        >
          <p className="text-6xl">KHAING MYEL KHANT</p>
          <p className="text-xl text-gray-800">
            BRAND DESIGNER / WEB DEVELOPER
          </p>
          <motion.div
            className="text-xl my-auto text-center mt-5"
            whileHover={{ scale: 1.2 }}
          >
            <span className="transition duration-500 ease-in-out border-2 border-black border-dashed p-2 transform hover:rounded-lg hover:bg-black hover:text-white">
              HIRE ME
            </span>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative text-4xl text-center">SKILLS</div>
      <div className="relative flex">hi hi</div>
    </main>
  </>
);

export default Home;
