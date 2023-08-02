import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Image from "next/image";
import React from "react";

import bannerImg from "/assets/Images/career/banner.png";
import bannerSide from "/assets/Images/career/bannerSide.png";
import aftraid from "/assets/Images/career/afraid.png";

import autonomy from "/assets/Images/career/autonomy.png";
import knowUs from "/assets/Images/career/knowUs.png";

const page = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* Section 1 */}

      <Image
        className="absolute  w-[600px]  aspect-ratio-[1/1] top-[18vh] left-[-320px]"
        src={bannerSide}
        alt="carrer banner"
        priority
      />
      <div className="container flex items-center  mx-auto min-h-[70vh]">
        <div className="flex-[0.4] bg-black relative">
          <h2 className="text-6xl text-white font-Roboto">
            Careers at The
            <br />
            Developer’s
            <br /> Agency
          </h2>
        </div>
        <div className="flex-[0.6]">
          <Image
            className="relative w-[1000px] h-[100%]"
            src={bannerImg}
            alt="carrer banner"
            priority
          />
        </div>
      </div>

      {/* Section 2 */}

      <div className="container flex flex-col  items-center  mx-auto ">
        <h1 className="font-bold  text-6xl text-center align-middle text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#BBBBBB] py-[80px]">
          “ Innovate The Future”
        </h1>
        <p className="font-Sen text-3xl pt-[12px] text-center ">
          The Developer’s Agency believes decentralization is essential for a
          thriving society. Sharing economy, collaboration, and new levels of
          transparency give everyone freedom to pursue their passions and goals.
          Our mission is to give power back to the people through blockchain
          technology.
        </p>
        <button className="bg-transparent border-[2px] border-[#956B00] text-white text-xl py-[19px] px-[50px] rounded-[10px] mt-[80px] mx-auto">
          View Roles
        </button>
      </div>

      {/* Section 3 */}

      <div className="container mx-auto mt-[142px] flex flex-col">
        <h1 className="font-bold  text-6xl text-left align-middle text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#BBBBBB] py-[27px]">
          Join Our Team of Innovators
        </h1>
        <h3 className="text-5xl pb-[150px]">
          Are YOU ready to help us change <br /> the world?
        </h3>
        <div className="flex gap-[80px]">
          <div className="flex-[0.7] py-[35px] flex-col">
            <p className="font-Sen text-[#979797] text-2xl">
              At The Developer’s Agency, we provide the platform and opportunity
              for innovators like you to thrive in a stimulating blockchain
              environment. We empower team members to embrace challenges,
              discover their potential, and contribute to a rapidly growing
              industry. What you do today has a significant impact on blockchain
              tomorrow.
            </p>
          </div>
          <div className="flex-[0.3]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Section 4 */}

      <div className="container mx-auto mt-[168px]  flex flex-col">
        <h1 className="font-bold  text-6xl text-left align-middle text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#BBBBBB] py-[80px]">
          CTO: Jesse Anglen
        </h1>
        <div className="flex  gap-[80px]">
          <div className="flex-[0.3]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
          <div className="flex-[0.7] py-[35px] flex-col">
            <p className="font-Sen text-[#979797] text-2xl">
              At The Developer’s Agency, we provide the platform and opportunity
              for innovators like you to thrive in a stimulating blockchain
              environment. We empower team members to embrace challenges,
              discover their potential, and contribute to a rapidly growing
              industry. What you do today has a significant impact on blockchain
              tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Section 5 */}

      <div className="container flex flex-col mx-auto mt-[160px]">
        <h1 className="font-bold font-Sen text-6xl text-center align-middle text-white py-[80px]">
          Core Values
        </h1>
        <p className="text-2xl font-Sen text-white text-center">
          The Developer’s Agency believes decentralization is essential for a
          thriving society. Sharing economy, collaboration, and new levels of
          transparency give everyone freedom to pursue their passions and goals.
          Our mission is to give power back to the people through blockchain
          technology.
        </p>

        <div className=" py-[120px]">
          <div className="grid grid-cols-4 gap-[20px] w-[100%]">
            {[...Array(4)].map((_, i) => (
              <div className="rounded-[60px] w-[100%] flex font-Sen bg-gradient-to-b w-[90%] from-[#976D00] to-[#292929] p-[4px]">
                <div className="py-[80px] W-[100%] px-[10px] rounded-[60px] bg-black flex justify-center items-center flex-col">
                  <Image
                    className="relative  w-[100px] mb-[40px]"
                    src={autonomy}
                    alt="autonomy"
                  />
                  <h2 className="text-2xl font-[700]">Autonomy</h2>
                  <p className="mt-[30px] text-[#979797] text-center font-Sen">
                    We create a work environment that is objective-driven, not
                    obsessed with where or when you are meeting your objectives.
                    You enjoy a work-life balance in a company that emphasizes
                    collaboration over micro-management.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-transparent border-[2px] border-[#956B00] text-white text-xl py-[19px] px-[50px] rounded-[10px] mt-[20px] mx-auto">
          View Roles
        </button>
      </div>

      {/* Section 6 */}

      <div className="container mx-auto mt-[128px] ">
        <h1 className="font-[500] font-Sen text-6xl text-left align-middle text-white py-[80px]">
          Don't be afraid to Fail Forward
        </h1>

        <div className="flex mt-[120px] items-center justify-center ">
          <div className="flex-[0.3] ">
            <div className="  flex items-center justify-center  h-[400px] left-0">
              <Image
                className="absolute w-[700px]   left-[-100px] "
                src={aftraid}
                alt="afraid image"
                priority
              />
            </div>
          </div>
          <div className="flex-[0.6]">
            <p className="text-2xl font-Sen font-[300] text-[#BFBFBF]">
              We encourage you to shoot for the moon. You don’t have to be
              afraid to fail, because failures lead to learning and true growth
              that builds success. Rapid Innovation encourages you to take
              chances without the fear of failing. As a company, some of our
              greatest success occurred from rebounds. We want you to feel like
              you have our full support even in the moments when things aren’t
              working.
            </p>
          </div>
        </div>
      </div>

      {/* Section 7 */}

      <div className="container mx-auto mt-[128px]">
        <h1 className="font-[500] font-Sen  text-6xl text-center align-middle text-white py-[80px]">
          Get to Know Us from the Inside
        </h1>

        <div className="flex mt-[80px] ">
          <p className="text-2xl text-center font-Sen font-[300] text-[#ffffff]">
            We believe that building a team of talented people who support each
            other and genuinely enjoy the work they do is one of the biggest
            competitive advantages a company can have. It means holding each
            other to a high standard and always being there to lift each other
            in times of need. Winning for us is only real when it’s shared
            between our team, our clients, our vendors, and our industry.
          </p>
        </div>

        <div className="flex">
          <Image
            className="relative w-[50%] mt-[80px] mx-auto "
            src={knowUs}
            alt="know us"
          />
        </div>
      </div>

      {/* Section 8 */}

      <div className="container mx-auto mt-[120px]">
        <div className="grid grid-cols-2 gap-y-[90px] gap-x-[60px] ">
          {[...Array(4)]?.map((_, i) => (
            <div className="py-[30px] ">
              <h3 className="text-4xl font-[500]">
                Stay on the Inside Track with The Developer’s Agency
              </h3>
              <p className="text-xl mt-[60px] text-[#DFDFDF] font-[300]">
                Another benefit of working with Rapid Innovation is seeing and
                learning about all of the latest technologies early - like layer
                1 blockchains, DeFi apps, NFTs, gaming projects, and social
                tokens, which helps you build your own investment portfolio.In
                addition, there is plenty of room for you to get ahead in your
                career, as you grow within the company. Our team members have a
                sense of ownership and pride here. No matter what task someone
                is working on or the department, everyone has the ability to
                take things on and do them their own way.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sectionn 9 */}

      <div className="continer mx-auto my-[180px]">
        <div className="rounded-[30px] mx-auto    w-[100%] font-Sen bg-gradient-to-b w-[90%] from-[#976D00] to-[#292929] p-[2px] rounded-lg overflow-hidden">
          <div className="py-[80px] px-[10px] rounded-[15px] bg-[#0D0510] flex justify-center items-center flex-col">
            <div className="w-[60%] mx-auto flex flex-col items-center">
              <h2 className="text-6xl font-[500]">Open Positions</h2>
              <p className="font-[300] font-Sen text-center mt-[30px] text-[#DFDFDF] text-xl">
                Like what you've seen so far and interested in working with us?
                If so, click the link below to see all of our current job
                openings. We are growing so quickly that this list of job
                openings is being updated regularly. If you don't see your ideal
                job listed right now, be sure to bookmark this page and check
                back with us in a couple weeks. We'll look forward to hearing
                from you!
              </p>
              <button className="bg-transparent border-[2px] border-[#956B00] text-white text-xl py-[19px] px-[50px] mt-[60px] font-[700] rounded-[10px] mt-[20px] mx-auto">
                View Roles on Linkedin
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
