import Image from "next/image";
import Link from "next/link";
import logo from "/assets/Images/CompanyLogo.png";
import Menu from "/assets/Images/MenuButton.png";
import developmentCard from "/assets/Images/DevCard.png";
import rightArrow from "/public/rightArrow.png";
import MvpDev from "/public/MVPDev.png";
import prototype from "/public/prototyping.png";
import contract from "/public/smartContract.png";
import appUpdate from "/public/AppUpdates.png";
import Blockchain from "/public/BlockChain.png";
import consult from "/public/SoftwareConsulting.png";
import vBox from "/public/v_box.png";
import processData from "../constants/process.json";

// import designCard from "/assets/Images/DesignCard.png";
// import { url } from "inspector";
// import BackgroundImage from "/assets/Images/HomeBackgroundImage.png";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="flex absolute w-full p-5 bg-black flex-row justify-between">
        <div className="item-center">
          <Image
            // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={logo}
            alt="Company Logo"
            width={20}
            height={10}
            priority
          />
        </div>
        <div className="flex w-[50%]  bg-black flex-row justify-between">
          <div className="mt-2">
            <text className="text-white font-Sen non-italic font-extrabold  text-base leading-5">
              About Us
            </text>
          </div>
          <div className="mt-2">
            <text className="text-[#A6A6A6] align-middle font-Sen non-italic font-normal  text-base leading-5">
              Portfolio
            </text>
          </div>
          <div className="mt-2">
            <text className="text-[#A6A6A6] align-middle font-Sen non-italic font-normal text-base leading-5">
              Careers
            </text>
          </div>
          <div className="mt-2">
            <text className="text-[#A6A6A6] align-middle font-Sen non-italic font-normal text-base leading-5">
              Blog
            </text>
          </div>
        </div>
        <div className="flex flex-row w-[15%] justify-between">
          <div className="bg-gradient-to-t from-[#FDB739]  to-[#BFA855] rounded-[9px] p-[2px]">
            <div className="flex h-full w-full items-center justify-center bg-black rounded-[8px] py-2 px-5">
              <text className="text-white align-middle font-Sen non-italic font-extrabold  text-base leading-5">
                Get started
              </text>
            </div>
          </div>
          <div className="item-center align-middle mt-[10px] ">
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={Menu}
              alt="Company Logo"
              width={20}
              height={10}
              priority
              className="align-middle"
            />
          </div>
        </div>
      </div>
      <div className="flex py-20 content_bg">
        <div>
          <div className="align-middle">
            <h1 className="text-6xl text-center mt-[15%] font-Sen mx-20 font-semibold leading-normal text-white">
              Cutting Edge Web3 Solutions That{" "}
              <text className="text-[#DCAF48]">Enhance</text> Humanity
            </h1>
            <h2 className="text-center font-Sen font-normal text-[#E3E3E3] text-2xl mt-20">
              Blockchain - AI/ML - IoT - AR/VR
            </h2>
            <div className="flex align-middle justify-center ">
              <h3 className="text-center text-xl text-white font-Sen bg-gradient-to-b from-[#4A2800CC] via-[#FF9900A3] to-[#959252CC]  font-bold mt-10 py-[10px] px-10 border-2 gap-10 border-[#ffffff] rounded-md">
                Contact Us
              </h3>
            </div>
          </div>
          <div className="flex align-middle  justify-center mt-20">
            <h2 className="text-4xl text-white font-Sen">Trusted by</h2>
          </div>
          <div className="flex align-middle items-center justify-center m-28">
            <div className="flex flex-row align-middle justify-between w-[100%]">
              <div>
                <h2 className="font-Sen text-2xl text-white font-bold non-italic">
                  Emizen Tech
                </h2>
              </div>
              <div>
                <h2 className="font-Sen text-2xl text-white font-bold non-italic">
                  Intuz
                </h2>
              </div>
              <div>
                <h2 className="font-Sen text-2xl text-white font-bold non-italic">
                  Umbrella IT
                </h2>
              </div>
              <div>
                <h2 className="font-Sen text-2xl text-white font-bold non-italic">
                  e-Flair
                </h2>
              </div>
              <div>
                <h2 className="font-Sen text-2xl text-white font-bold non-italic">
                  Cosmico
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[80%] items-center my-10">
              <h3 className="text-3xl text-center font-Sen text-white ">
                We work hand in hand with companies to create long-lasting
                solutions that enhance your current organization through
                blockchain technology.
              </h3>
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <div className="flex justify-center bg-gradient-to-b w-[90%] from-[#976D00] to-[#292929] py-1 rounded-lg ">
              <div className="flex flex-wrap w-[99%] justify-between px-[8%] bg-black p-2  rounded-md">
                <div>
                  <h3 className="font-Sen text-white text-4xl font-normal">
                    300+
                  </h3>
                  <h3 className="font-Sen text-xl text-white font-normal mt-5">
                    Developers and designers
                  </h3>
                </div>
                <div>
                  <h3 className="font-Sen text-4xl text-white font-normal">
                    15M+
                  </h3>
                  <h3 className="font-Sen text-xl text-white font-normal mt-5">
                    Lines of Code
                  </h3>
                </div>
                <div>
                  <h3 className="font-Sen text-4xl text-white font-normal">
                    300+
                  </h3>
                  <h3 className="font-Sen text-xl text-white font-normal mt-5">
                    Projects Completed
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-6xl font-Sen font-bold text-white text-center ">
          What we do?
        </h1>
        <h3 className="mt-20  px-32 text-white text-3xl font-Sen text-center">
          Enable businesses like yours to build a beautiful, user -friendly Web3
          solutions - no domain experience required. We help turn your ideas
          into a blockchain reality.
        </h3>
      </div>

      <div className="flex flex-row justify-center w-full mt-28">
        <div className="">
          <div className="rounded-md bg-gradient-to-b from-[#956B00] to-[#000000] p-1">
            <div className="pt-20 pb-10 pl-6 w-[400px]  bg-gradient-to-b from-[#232323] to-[#0E0E0E] ">
              <h1 className="text-2xl font-Sen font-bold text-white">
                #Development
              </h1>
              <ul className="text-white  font-Sen mt-8 pl-5 text-xl leading-10 ">
                <li>dApps</li>
                <li>Web & Mobile</li>
                <li>Smart Contracts</li>
                <li>Bridges</li>
                <li>Formal Verifications</li>
              </ul>
              <div className="flex justify-end mx-10 ">
                <h1 className="font-bold font-Sen text-transparent align-middle text-lg text-right bg-clip-text bg-gradient-to-b from-[#956B00] to-[#FFDA58">
                  Let’s talk
                </h1>
                <Image
                  src={rightArrow}
                  alt="Company Logo"
                  width={20}
                  style={{ objectFit: "contain", marginLeft: 10 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-20 mt-96">
          <div className="rounded-md bg-gradient-to-b from-[#956B00] to-[#000000] p-1">
            <div className="pt-20 pb-10 pl-6 w-[400px]  bg-gradient-to-b from-[#232323] to-[#0E0E0E] ">
              <h1 className="text-2xl font-Sen font-bold text-white">
                #Development
              </h1>
              <ul className="text-white  font-Sen mt-8 pl-5 text-xl leading-10 ">
                <li>dApps</li>
                <li>Web & Mobile</li>
                <li>Smart Contracts</li>
                <li>Bridges</li>
                <li>Formal Verifications</li>
              </ul>
              <div className="flex justify-end mx-10 ">
                <h1 className="font-bold text-transparent font-Sen align-middle text-lg text-right bg-clip-text bg-gradient-to-b from-[#956B00] to-[#FFDA58">
                  Let’s talk
                </h1>
                <Image
                  src={rightArrow}
                  alt="Company Logo"
                  width={20}
                  style={{ objectFit: "contain", marginLeft: 10 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-6xl font-Sen font-bold text-white text-center ">
          Our Specialties
        </h1>

        <div className="flex align-middle mt-10 w-full justify-center self-center">
          <div className=" w-full flex justify-center">
            <div className="grid grid-cols-2 gap-2">
              <div className=" bg-gradient-to-b w-[350px] from-[#956B00] to-[#000000] p-1 mr-10">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] ">
                  <div className="items-center justify-center flex ">
                    <Image
                      src={MvpDev}
                      alt="Company Logo"
                      width={40}
                      style={{
                        objectFit: "contain",

                        margin: 10,
                      }}
                    />
                    <h3 className="text-white text-xl font-Sen">
                      MVP Development
                    </h3>
                  </div>
                </div>
              </div>
              <div className=" bg-gradient-to-b  w-[350px] from-[#956B00] to-[#000000] p-1">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] ">
                  <div className="items-center justify-center flex ">
                    <Image
                      src={prototype}
                      alt="Company Logo"
                      width={40}
                      style={{
                        objectFit: "contain",

                        margin: 10,
                      }}
                    />
                    <h3 className="text-white text-xl font-Sen">Prototyping</h3>
                  </div>
                </div>
              </div>
              <div className=" bg-gradient-to-b  w-[350px] from-[#956B00] to-[#000000] p-1">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] ">
                  <div className="items-center justify-center flex ">
                    <Image
                      src={contract}
                      alt="Company Logo"
                      width={40}
                      style={{
                        objectFit: "contain",
                        margin: 10,
                      }}
                    />
                    <h3 className="text-white text-xl font-Sen">
                      Smart Contracts
                    </h3>
                  </div>
                </div>
              </div>
              <div className=" bg-gradient-to-b w-[350px] from-[#956B00] to-[#000000] p-1">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] ">
                  <div className="items-center justify-center flex ">
                    <Image
                      src={appUpdate}
                      alt="Company Logo"
                      width={40}
                      style={{
                        objectFit: "contain",

                        margin: 10,
                      }}
                    />
                    <h3 className="text-white text-xl font-Sen">App Updates</h3>
                  </div>
                </div>
              </div>
              <div className=" bg-gradient-to-b w-[350px] from-[#956B00] to-[#000000] p-1">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] ">
                  <div className="items-center justify-center flex ">
                    <Image
                      src={Blockchain}
                      alt="Company Logo"
                      width={40}
                      style={{
                        objectFit: "contain",

                        margin: 10,
                      }}
                    />
                    <h3 className="text-white text-xl font-Sen">
                      Blockchain Consulting
                    </h3>
                  </div>
                </div>
              </div>
              <div className=" bg-gradient-to-b w-[350px] from-[#956B00] to-[#000000] p-1">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] ">
                  <div className="items-center justify-center flex ">
                    <Image
                      src={consult}
                      alt="Company Logo"
                      width={40}
                      style={{
                        objectFit: "contain",
                        margin: 10,
                      }}
                    />
                    <h3 className="text-white text-xl font-Sen">
                      Software Consulting
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div>
          <h1 className="text-6xl font-Sen font-bold text-white text-center ">
            Our Process
          </h1>
          <h3 className="mt-20  px-32 text-white text-3xl font-Sen text-center">
            We work hand in hand with companies to create long-lasting solutions
            that enhance your current organization through blockchain
            technology.
          </h3>
        </div>
      </div>
      <div className="content-center flex justify-center py-20 ">
        <div className=" w-[90%] box_shadow rounded-md pt-10 bg-[#0E0E0E]">
          <div className="content-center flex justify-center">
            {/* check the image rendering here */}
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={"Rectangles.svg"}
              width={10}
              height={10}
              alt="Company Logo"
              style={{
                width: "80%",
                height: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <h3 className="mt-20 pt-2  px-32 text-white text-3xl font-Sen text-center">
            Blockchain app development is complex. That’s we‘re obsessive about
            our process and it shows in the quality of our work. Get your
            project delivered to scope, on time and within budget- every time.
          </h3>
          <div className="mt-10 mx-28">
            {processData.Process.map((item, index) => {
              return (
                <div className="flex flex-row my-28 justify-between w-[90%]">
                  <div className=" justify-center flex">
                    <Image
                      // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                      src={item.image}
                      width={150}
                      height={80}
                      alt={item.title}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="w-[70%] justify-center flex flex-col">
                    <h3 className="text-white font-Sen my-2">0{index + 1}</h3>
                    <h1 className="text-4xl text-white font-Sen my-2">
                      {item.title}
                    </h1>
                    <h3 className="text-white text-xl">{item.description}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-20">
        <h1 className="font-bold  text-3xl text-center align-middle text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#BBBBBB">
          /TECH WE’RE WORKING WITH
        </h1>
        {/* <div></div> */}
        <div className="flex justify-center flex-wrap mt-20">
          {processData.Companies.map((item, index) => {
            return (
              <div className="mx-10 align-middle">
                <div className="h-28">
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src={item.image}
                    alt="Company Logo"
                    width={100}
                    height={10}
                    priority
                    style={{}}
                  />
                </div>
                <h1 className="text-white text-center text-xl font-Sen">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-center text-[#A9A9A9] font-Sen text-4xl leading-[49px] px-20 py-20">
            We are on a mission to build{" "}
            <text className=" text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#C5A655">
              great products
            </text>{" "}
            that speed up the adoption of blockchain technology because we
            believe in its{" "}
            <text className=" text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#C5A655">
              power
            </text>{" "}
            to bring greater{" "}
            <text className=" text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#C5A655">
              economic freedom
            </text>{" "}
            to people around the world.
          </h1>
          <div className="flex align-middle justify-center ">
            <h3 className="text-center text-xl text-white font-Sen font-bold mt-10 py-[10px] px-10 border-2 gap-10 border-[#956B00] rounded-md">
              Contact Us
            </h3>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div>
          <h1 className="text-6xl font-Sen font-bold text-white text-center ">
            Our Leadership Team
          </h1>
          <h3 className="mt-20  px-32 text-white text-3xl font-Sen text-center">
            We are an experienced team of blockchain developers & designers who
            only take on a few hand-selected projects at a time.
          </h3>
        </div>
        <div className="flex flex-row w-full justify-center">
          <div>
            <div className="py-10">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={"/CEOImage.svg"}
                alt="Company Logo"
                width={20}
                height={10}
                priority
                style={{
                  width: 366,
                  height: 492,
                  objectFit: "contain",
                }}
              />
              <h2 className="text-3xl font-Sen text-white py-5">
                Crysal Lurre
              </h2>
              <h1 className="font-bold font-Sen text-transparent align-middle text-lg bg-clip-text bg-gradient-to-b from-[#956B00] to-[#FFDA58">
                CEO
              </h1>
            </div>
            <div className="">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={"/PresidentImage.svg"}
                alt="Company Logo"
                width={20}
                height={10}
                priority
                style={{
                  width: 366,
                  height: 492,
                  objectFit: "contain",
                }}
              />
              <h2 className="text-3xl font-Sen text-white py-5">
                Tyson Faulkner
              </h2>
              <h1 className="font-bold font-Sen text-transparent align-middle text-lg bg-clip-text bg-gradient-to-b from-[#956B00] to-[#FFDA58">
                President
              </h1>
            </div>
          </div>
          <div className="align-bottom self-center px-10">
            <div className="">
              <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={"/CTOImage.svg"}
                alt="Company Logo"
                width={20}
                height={10}
                priority
                style={{
                  width: 366,
                  height: 492,
                  objectFit: "contain",
                }}
              />
              <h2 className="text-3xl font-Sen text-white py-5">
                Jesse Anglen
              </h2>
              <h1 className="font-bold font-Sen text-transparent align-middle text-lg bg-clip-text bg-gradient-to-b from-[#956B00] to-[#FFDA58">
                CTO
              </h1>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="flex flex-row justify-center">
          <div>
            <h1 className="font-bold font-Sen text-transparent align-middle text-lg text-right bg-clip-text bg-gradient-to-t from-[#FFCB12] to-[#F3F3F3">
              Explore
            </h1>
          </div>
        </div>
      </footer>
    </main>
  );
}
