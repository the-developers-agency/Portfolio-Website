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
import TestimonialSlider from "../component/slider";
import Input from "@/component/input";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import designCard from "/assets/Images/DesignCard.png";
// import { url } from "inspector";
// import BackgroundImage from "/assets/Images/HomeBackgroundImage.png";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />

      <div className="flex content_bg  bg-cover bg-center  container mx-auto">
        <div className="">
          <div className="align-middle mt-[120px]">
            <h1 className="text-[64px] text-center  font-Roboto py-6xl  font-[500] leading-normal text-white">
              Cutting Edge Web3 Solutions That <br />
              <text className="text-[#DCAF48]">Enhance</text> Humanity
            </h1>
            <h2 className="text-center font-Sen font-[300] text-[#E3E3E3] text-3xl mt-[92px] py-[10px]">
              Blockchain - AI/ML - IoT - AR/VR
            </h2>
            <div className="flex align-middle justify-center ">
              <h3 className="text-center text-[20px] text-white font-Sen font-[600] text-xl mt-[32px] py-[19px] px-[45px] border-2 gap-10 border-[#ffffff] rounded-md">
                Contact Us
              </h3>
            </div>
          </div>

          {/* Section 2 */}

          <div className="container mx-auto">
            <div className="flex align-middle  justify-center mt-[124px]">
              <h2 className="text-[35px] font-[700] text-white font-Sen py-[10px]">
                Trusted by
              </h2>
            </div>
            <div className="flex align-middle items-center justify-center mt-[50px] py-[32px]">
              <div className="flex flex-row justify-between w-[80%]  mx-auto">
                <div>
                  <h2 className="font-Sen text-[25px] text-white font-[600] non-italic">
                    Emizen Tech
                  </h2>
                </div>
                <div>
                  <h2 className="font-Sen text-[25px] text-white font-[600] non-italic">
                    Intuz
                  </h2>
                </div>
                <div>
                  <h2 className="font-Sen text-[25px] text-white font-[600] non-italic">
                    Umbrella IT
                  </h2>
                </div>
                <div>
                  <h2 className="font-Sen text-[25px] text-white font-[600] non-italic">
                    e-Flair
                  </h2>
                </div>
                <div>
                  <h2 className="font-Sen text-[25px] text-white font-[600] non-italic">
                    Cosmico
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[60%] items-center py-[32px] pb-[75px]">
                <h3 className="text-[30px] font-[300] text-center font-Sen text-white ">
                  We work hand in hand with companies to create long-lasting
                  solutions that enhance your current organization through
                  blockchain technology.
                </h3>
              </div>
            </div>
          </div>

          {/* Section 3 */}

          <div className="flex justify-center py-[65px] ">
            <div className="flex justify-center bg-gradient-to-b w-[90%] from-[#976D00] to-[#292929] p-[4px] rounded-lg ">
              <div className="   bg-black  w-[100%] ">
                <div className="flex flex-wrap w-[100%] justify-between rounded-md px-[200px] py-[20px]">
                  <div>
                    <h3 className="font-Sen text-white text-[35px] font-normal">
                      300+
                    </h3>
                    <h3 className="font-Sen text-[20px] text-white font-normal mt-[24px]">
                      Developers and designers
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-Sen text-white text-[35px] font-normal">
                      15M+
                    </h3>
                    <h3 className="font-Sen text-[20px] text-white font-normal mt-[24px]">
                      Lines of Code
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-Sen text-white text-[35px] font-normal">
                      300+
                    </h3>
                    <h3 className="font-Sen text-[20px] text-white font-normal mt-[24px]">
                      Projects Completed
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[15px]">
        <h1 className="text-6xl font-Sen py-[50px] font-[500] font-Roboto text-white text-center ">
          What we do?
        </h1>
        <h3 className=" py-[32px] text-white text-[30px] font-[300] w-[60%] mx-auto font-Sen text-center">
          Enable businesses like yours to build a beautiful, user -friendly Web3
          solutions - no domain experience required. We help turn your ideas
          into a blockchain reality.
        </h3>
      </div>

      <div className="flex container mx-auto flex-row justify-center w-full mt-[64px] py-[32px]">
        <div className="card-bg bg-cover h-[fit-content]">
          <div className="rounded-md  p-1">
            <div
              className="pt-20 pb-10 pl-6 w-[400px] 
            
              "
            >
              <h1 className="text-2xl font-Sen font-semibold text-white">
                #Development
              </h1>
              <ul className="text-white  font-Sen font-[300] mt-8 pl-5 text-xl leading-10 ">
                <li>dApps</li>
                <li>Web & Mobile</li>
                <li>Smart Contracts</li>
                <li>Bridges</li>
                <li>Formal Verifications</li>
              </ul>
              <div className="flex justify-end mx-10 mt-8 ">
                <h1 className="font-bold font-Sen text-transparent align-middle text-lg text-right bg-clip-text bg-gradient-to-b from-[#956B00] to-[#FFDA58]">
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
        <div className="mx-20 mt-96 card-bg bg-cover h-[fit-content]">
          <div className="rounded-md  p-1">
            <div className="pt-20 pb-10 pl-6 w-[400px]  ">
              <h1 className="text-2xl font-Sen font-semibold text-white">
                #Design
              </h1>
              <ul className="text-white  font-Sen font-[300] mt-8 pl-5 text-xl leading-10 ">
                <li>dApps</li>
                <li>Web & Mobile</li>
                <li>Smart Contracts</li>
                <li>Bridges</li>
                <li>Formal Verifications</li>
              </ul>
              <div className="flex justify-end mx-10 mt-8 ">
                <h1 className="font-bold text-transparent font-Sen align-middle text-lg text-right bg-clip-text bg-gradient-to-b from-[#956B00] to-[#FFDA58]">
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

      {/* Speciality Section */}

      <div className=" container mx-auto py-[32px]">
        <h1 className="text-[62px] font-Roboto font-[500]  text-white text-center py-[51px] ">
          Our Specialties
        </h1>

        <div className="flex align-middle mt-[100px] w-full justify-center self-center">
          <div className=" w-full flex justify-center">
            <div className="grid grid-cols-2 w-[60%] gap-[45px]">
              <div className=" bg-gradient-to-b  from-[#956B00] to-[#000000] p-[3px] ">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] py-[20px] ">
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
              <div className=" bg-gradient-to-b   from-[#956B00] to-[#000000] p-[3px]">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] py-[20px] ">
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
              <div className=" bg-gradient-to-b   from-[#956B00] to-[#000000] p-[3px]">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] py-[20px] ">
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
              <div className=" bg-gradient-to-b  from-[#956B00] to-[#000000] p-[3px]">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] py-[20px] ">
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
              <div className=" bg-gradient-to-b  from-[#956B00] to-[#000000] p-[3px]">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] py-[20px] ">
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
              <div className=" bg-gradient-to-b  from-[#956B00] to-[#000000] p-[3px]">
                <div className=" bg-gradient-to-b from-[#232323] to-[#0E0E0E] py-[20px] ">
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

      {/* Process Section */}

      <div className="container mx-auto py-[32px]">
        <div>
          <h1 className="text-[62px] mt-[136px] font-Roboto font-[500] text-white text-center ">
            Our Process
          </h1>
          <h3 className=" w-[70%] mx-auto py-[45px] text-white text-[30px] font-[300] font-Sen text-center">
            We work hand in hand with companies to create long-lasting solutions
            that enhance your current organization through blockchain
            technology.
          </h3>
        </div>
      </div>

      {/* Process Plan */}

      <div className=" conatiner mx-auto content-center flex justify-center py-[76px] ">
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
                width: "100%",
                height: "280px",
                objectFit: "contain",
              }}
            />
          </div>
          <h3 className="mt-20 w-[70%] mx-auto text-white text-[25px] font-[300] font-Sen text-center">
            Blockchain app development is complex. That’s we‘re obsessive about
            our process and
            <br />
            it shows in the quality of our work. Get your project delivered to
            scope, on time and
            <br />
            within budget- every time.
          </h3>
          <div className=" w-[70%] mx-auto">
            {processData.Process.map((item, index) => {
              return (
                <div className="flex flex-row my-[200px] gap-[70px] w-[90%]">
                  <div className=" justify-center flex">
                    <Image
                      // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                      src={item.image}
                      height={190}
                      width={190}
                      alt={item.title}
                      style={{
                        objectFit: "contain",
                        height: "190px",
                      }}
                    />
                  </div>
                  <div className="w-[70%] justify-center flex flex-col">
                    <h3 className="text-white font-Sen text-[25px] my-[10px]">
                      0{index + 1}
                    </h3>
                    <h1 className="text-[40px] font-[300] text-white font-Sen my-2">
                      {item.title}
                    </h1>
                    <h3 className="text-white mt-[18px] text-[20px] font-Sen font-[300] ">
                      {item.description}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tech Section */}

      <div className="container mx-auto">
        <h1 className="font-bold  text-3xl text-center align-middle text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#BBBBBB] py-[80px]">
          /TECH WE’RE WORKING WITH
        </h1>
        {/* <div></div> */}
        <div className="flex justify-center flex-wrap mt-[25px] gap-[100px]">
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
                <h1 className="text-white text-center text-[20px] font-[300] font-Sen py-[32px]">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="py-[70px]">
          <h1 className="text-center text-[#A9A9A9] font-Sen text-4xl font-[300] leading-[49px] px-20 ">
            We are on a mission to build{" "}
            <text className=" text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#C5A655]">
              great products
            </text>{" "}
            that speed up <br /> the adoption of blockchain technology because
            we believe in <br /> its{" "}
            <text className=" text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#C5A655]">
              power
            </text>{" "}
            to bring greater{" "}
            <text className=" text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#C5A655]">
              economic freedom
            </text>{" "}
            to people <br /> around the world.
          </h1>
          <div className="flex align-middle justify-center ">
            <h3 className="text-center text-xl font-[300] text-white font-Sen font-bold mt-10 py-[10px] px-10 border-2 gap-10 border-[#956B00] rounded-md">
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
          <h3 className="mt-20  px-32 text-white font-[300] text-3xl font-Sen text-center">
            We are an experienced team of blockchain developers & designers
            <br />
            who only take on a few hand-selected projects at a time.
          </h3>
        </div>
        <div className="flex gap-[100px] flex-row mt-[90px] w-full justify-center">
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
              <h1 className="font-bold font-Sen text-transparent align-middle text-lg bg-clip-text bg-gradient-to-b from-[#956B00] to-[#FFDA58]">
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
              <h1 className="font-bold font-Sen text-transparent align-middle text-lg bg-clip-text bg-gradient-to-b from-[#956B00] to-[#FFDA58]">
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
              <h1 className="font-bold font-Sen text-transparent align-middle text-lg bg-clip-text bg-gradient-to-b from-[#956B00] to-[#FFDA58]">
                CTO
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}

      <div className="container mx-auto">
        <h1 className="font-bold  text-3xl text-center align-middle text-transparent bg-clip-text bg-gradient-to-b from-[#CE9503] to-[#BBBBBB] py-[80px]">
          /TESTIMONIALS
        </h1>

        <h3 className="text-6xl text-[#fff] text-center py-[62px]">
          {" "}
          What our clients say about working with us
        </h3>

        <div className="w-[60%] mx-auto">
          <TestimonialSlider />
        </div>
      </div>

      {/* Contact Form */}

      <div className="container mx-auto py-[120px] ">
        <div className="grid grid-cols-2 bg-gradient-to-r  from-[#956B00] to-[#000000] p-[60px] rounded-[30px]">
          <div className="col-span-1">
            <h1 className="font-bold w-[100%]  text-3xl text-left align-middle text-transparent bg-clip-text bg-gradient-to-b from-[#FFB800] to-[#F8F8F8] pb-[40px]">
              /CONTACT US
            </h1>
            <p className="text-3xl font-Sen w-[70%] font-[700]">
              Looking For Experienced Blockchain Developers?
            </p>
            <p className="text-3xl mt-[44px] fotn-Sen font-[700]">
              {" "}
              Let’s Talk
            </p>
          </div>
          <div className="col-span-1 flex flex-col gap-[20px]">
            <Input label="First Name" required />
            <Input label="Last Name" required />
            <Input label="Email" required />
            <Input label="Phone Number" />

            <div className="flex gap-[10px] flex-col">
              <p className="font-Sen text-md">
                Do you have a current or planned project?
              </p>
              <div>
                <div className="flex gap-[10px]">
                  <input type="radio" id="yes" name="project" value="yes" />
                  <label className="text-gray-400 font-Sen text-md">Yes</label>
                </div>
                <div className="flex gap-[10px]">
                  <input type="radio" id="yes" name="project" value="yes" />
                  <label className="text-gray-400 font-Sen text-md">No</label>
                </div>
                <div className="flex gap-[10px]">
                  <input type="radio" id="yes" name="project" value="yes" />
                  <label className="text-gray-400 font-Sen text-md">
                    Looking for a partnership
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-[10px] flex-col">
              <p className="font-Sen text-md">
                Tell us a bit about your project?
              </p>
              <textarea
                placeholder="Budget? Timeline? Solutions"
                className="placeholder:text-[#4D4D4D] p-[10px] border-[1px] border-[#565656] bg-transparent rounded-[10px] h-[150px] "
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
