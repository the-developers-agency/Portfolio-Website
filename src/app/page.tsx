"use client";

import { useRouter } from "next/navigation";
import React from "react";

const brands = [
  {
    img: "https://getfinstack.in/assets/images/finstack-logo.png",
    url: "https://www.getfinstack.in/",
    height: 35,
    width: 118,
  },
  {
    img: "https://anandrathi.com/Content/image/logo1.png",
    url: "https://www.anandrathi.com/",
    height: 35,
    width: 118,
  },
  {
    img: "https://media.licdn.com/dms/image/C560BAQHh3yg6QpYr_g/company-logo_200_200/0/1649605002366?e=1701907200&v=beta&t=wKyn4eks-hV7dDDiMR6uznQXTIJBZo-D9a-M4FKCL20",
    url: "https://www.linkedin.com/company/getfreebirdapp/",
    height: 35,
    width: 60,
  },
  {
    img: "https://www.veefin.com/assets/images/logo_new.png",
    url: "https://www.veefin.com/",
    height: 35,
    width: 118,
  },
];

const page = () => {
  const router = useRouter();
  return (
    <div>
      <span
        style={{
          border: "0",
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0",
          position: "absolute",
          width: "1px",
          //   "white-space": "nowrap",
          //   "word-wrap": "normal",
        }}
      >
        <svg aria-hidden="true">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="6.29"
              numOctaves={6}
              stitchTiles="stitch"
            />
          </filter>
        </svg>
      </span>
      <div id=" bg-black">
        <div className="flex flex-col w-full">
          <div className="fixed top-0 left-0 right-0 navbarBackground z-[9998] block block">
            <div className="mx-auto max-w-[1200px]">
              <div className="flex mx-24 lg:mx-0 items-center justify-between py-[8px]">
                <div className="flex gap-[8px] items-center">
                  <a className="flex gap-[8px]" href="/">
                    <p className="text-white100 text-[18px] font-semibold font-poppins">
                      TDA
                    </p>
                  </a>
                  {/* <a target="_blank" href="https://medium.com/@cubehq">
                    <p className="text-white100 text-[14px] font-medium ml-[26px] md:block hidden">
                      Resources
                    </p>
                  </a> */}
                </div>
                <div className="flex items-center gap-24">
                  <a
                    className="rounded-full w-[100px] h-[32px] buttonOne flex items-center justify-center"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://app.cubehq.ai/signup/"
                  >
                    <a
                      href="https://calendly.com/nihad-dev/30min"
                      target="_blank"
                      className="text-[14px] font-medium text-white"
                    >
                      Call Us Now
                    </a>
                  </a>
                  <div className="ml-[-24px] hidden ">
                    <svg
                      width={50}
                      height={31}
                      viewBox="0 0 50 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 10H34V11H16V10Z" fill="#F7F8F8" />
                      <path d="M16 20H34V21H16V20Z" fill="#F7F8F8" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mx-24 lg:mx-0 navbar hidden md:block" />
            </div>
          </div>
          <main className="pt-[48px] min-h-[100vh] flex flex-col flex-grow flex-shrink flex-auto">
            <div className="hero_heroDiv__hSoQ6 bodyGradient mt-[-48px] overflow-x-hidden pt-[48px] bodyPadding flex flex-col items-center justify-center">
              <div className="bodyMaxWidth w-full mx-auto my-0">
                <div className="flex lg:gap-[100px] md:gap-[40px] gap-[10px] flex-col md:flex-row">
                  <div className="mt-[72px] lg:mt-[116px] flex flex-initial flex-col basis-6/12 hero_heroHeadingDiv__FesxT">
                    <p className="hero_headerEntry__aOhl2 lg:text-[56px] md:text-[42px] text-[44px] textGradientOne font-medium text-left mx-0 md:mt-[20px] lg:mt-[50px] mb-[24px] text-center md:text-left tracking-[-2px] md:tracking-[-4.5px] leading-[44px] md:leading-[79px] lg:leading-[79px]">
                      We Develop <br className="hidden md:block" />
                      Fintech Products
                    </p>
                    <div className="bg-separator h-[1px] w-[102px] md:block hidden" />
                    <p className="hero_subHeaderEntry___6pn_ text-left lg:text-[22px] md:text-[16px] text-[18px] text-grey250 mb-[48px] text-center md:text-left leading-[25px] md:leading-[1.3] tracking-[-0.8px] md:tracking-[-0.5px] font-normal md:mt-[34px]">
                      360° fintech. Tailor-made for your startup.
                      <br className="block" />
                      LOS, LMS, Lending Solutions, Underwriting Software,
                      Journey Builders. Built from scratch.
                    </p>
                    <div className="flex gap-[20px] md:mx-0 px-auto items-center justify-center md:justify-start">
                      <button className="hero_buttonEntry__dMyi5 rounded-full md:w-[148px] w-[130px] h-[48px] buttonOne">
                        <a
                          href="https://calendly.com/nihad-dev/30min"
                          target="_blank"
                          className="md:text-16 text-[14px] font-medium text-white"
                        >
                          Call Us Now
                        </a>
                      </button>
                      <button
                        onClick={() => {
                          router.push("/portfolio");
                        }}
                        className="hero_buttonEntry__dMyi5 rounded-full md:w-[181px] w-[160px] h-[48px] text-white hover:text-black100 hero_buttonThree__AEBhT"
                      >
                        <a
                          href="javascript:void(0)"
                          className="md:text-16 text-[14px] font-medium"
                        >
                          Portfolio
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="md:basis-6/12 basis-1">
                    <section className="hero_heroSection__rklVs">
                      <div className="h-full w-full mt-[72px] lg:mt-[116px] hero_imageDiv__kcBFR">
                        <div className="hero_heroLinesDiv__PbNIB xxsm:h-[250px] xxsm:w-[282px] xsm:h-[320px] xsm:w-[360px] sm:h-[430px] sm:w-[486px] md:h-[320px] md:w-[361px] xmd:h-[400px] xmd:w-[450px] lg:h-[450px] lg:w-[510px] mx-auto" />
                        <div className="hero_imageGridArea__oSQrf">
                          <img src="/images/home/1.png" alt="Hero Image" />
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                {/* <div className="md:mt-[240px] mt-[120px] flex flex-col  pb-[72px] md:pb-[112px]">
                  <p className="md:text-[56px] text-[44px] text-center text-white100 font-medium mx-auto">
                    Introducing Cube
                  </p>
                  <p className="md:text-[22px] text-center text-[18px] text-grey250 font-normal mx-auto">
                    Future of ORM for multi-location businesses, powered by
                    ChatGPT
                  </p>
                  <div className="md:mt-[74px] mt-[36px] relative">
                    <div className="hero_videoTwoGradient__C6gYt absolute h-[50%] w-[100%] top-[100px]" />
                    <div className="relative">
                      <video
                        className="rounded-[12px]"
                        id="video"
                        playsInline
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "black",
                        }}
                        preload="metadata"
                        src="https://dgf4or243f7kx.cloudfront.net/introduction-video.mp4"
                        poster="https://dgf4or243f7kx.cloudfront.net/poster1.png"
                      >
                        <source type="video/mp4" />
                      </video>
                      <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center bg-background bg-opacity-10 cursor-pointer block">
                        <div className="sm:block hidden">
                          <svg
                            width={96}
                            height={96}
                            viewBox="0 0 96 96"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={27}
                              y={27}
                              width={42}
                              height={42}
                              fill="#F3F4EE"
                            />
                            <g mask="url(#mask0_2784_39121)">
                              <path
                                d="M43.1769 61.4613L60.5998 50.2691C61.4562 49.7254 61.8844 48.9702 61.8844 48.0037C61.8844 47.0371 61.4562 46.2794 60.5998 45.7307L43.1769 34.5385C42.2794 33.9231 41.3589 33.8738 40.4153 34.3907C39.4718 34.9075 39 35.7132 39 36.8077V59.1921C39 60.2866 39.4718 61.0923 40.4153 61.6091C41.3589 62.126 42.2794 62.0767 43.1769 61.4613ZM48.0066 85.9998C42.7509 85.9998 37.8107 85.0025 33.1862 83.0078C28.5616 81.0131 24.5389 78.3061 21.118 74.8868C17.6971 71.4674 14.9888 67.4464 12.9933 62.8239C10.9978 58.2014 10 53.2623 10 48.0066C10 42.7509 10.9973 37.8107 12.992 33.1862C14.9867 28.5616 17.6937 24.5389 21.113 21.118C24.5324 17.6971 28.5534 14.9888 33.1759 12.9933C37.7984 10.9978 42.7375 10 47.9932 10C53.2489 10 58.1891 10.9973 62.8136 12.992C67.4382 14.9867 71.4609 17.6937 74.8818 21.113C78.3027 24.5324 81.011 28.5534 83.0065 33.1759C85.002 37.7984 85.9998 42.7375 85.9998 47.9932C85.9998 53.2489 85.0025 58.1891 83.0078 62.8136C81.0131 67.4382 78.3061 71.4609 74.8868 74.8818C71.4674 78.3027 67.4464 81.011 62.8239 83.0065C58.2014 85.002 53.2623 85.9998 48.0066 85.9998Z"
                                fill="black"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="sm:hidden block">
                          <svg
                            width={56}
                            height={56}
                            viewBox="0 0 96 96"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={27}
                              y={27}
                              width={42}
                              height={42}
                              fill="#F3F4EE"
                            />
                            <g mask="url(#mask0_2784_39121)">
                              <path
                                d="M43.1769 61.4613L60.5998 50.2691C61.4562 49.7254 61.8844 48.9702 61.8844 48.0037C61.8844 47.0371 61.4562 46.2794 60.5998 45.7307L43.1769 34.5385C42.2794 33.9231 41.3589 33.8738 40.4153 34.3907C39.4718 34.9075 39 35.7132 39 36.8077V59.1921C39 60.2866 39.4718 61.0923 40.4153 61.6091C41.3589 62.126 42.2794 62.0767 43.1769 61.4613ZM48.0066 85.9998C42.7509 85.9998 37.8107 85.0025 33.1862 83.0078C28.5616 81.0131 24.5389 78.3061 21.118 74.8868C17.6971 71.4674 14.9888 67.4464 12.9933 62.8239C10.9978 58.2014 10 53.2623 10 48.0066C10 42.7509 10.9973 37.8107 12.992 33.1862C14.9867 28.5616 17.6937 24.5389 21.113 21.118C24.5324 17.6971 28.5534 14.9888 33.1759 12.9933C37.7984 10.9978 42.7375 10 47.9932 10C53.2489 10 58.1891 10.9973 62.8136 12.992C67.4382 14.9867 71.4609 17.6937 74.8818 21.113C78.3027 24.5324 81.011 28.5534 83.0065 33.1759C85.002 37.7984 85.9998 42.7375 85.9998 47.9932C85.9998 53.2489 85.0025 58.1891 83.0078 62.8136C81.0131 67.4382 78.3061 71.4609 74.8868 74.8818C71.4674 78.3027 67.4464 81.011 62.8239 83.0065C58.2014 85.002 53.2623 85.9998 48.0066 85.9998Z"
                                fill="black"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="bodyMaxWidth bodyPadding md:mt-[240px] mt-[120px]">
              <p className="mb-[48px] text-center text-center md:text-[22px] text-[19px] text-white100 leading-[25px] md:leading-[29px] tracking-[-0.8px] md:tracking-[-0.5px] font-normal">
                <span className="text-grey250">
                  Awesome clients we've worked with.
                </span>
                <br className="block" />
                From early stage startups to publicly traded companies.
              </p>
              <div className="clients-fold_ImageDiv__6haNx">
                {[...brands]?.map((item, index) => {
                  return (
                    <a
                      href={item?.url}
                      target="_blank"
                      className={
                        "p-[5px] cursor-pointer flex " +
                        ([0, 3]?.includes(index) ? "bg-white " : "")
                      }
                    >
                      <img
                        alt="Security Logo"
                        // srcSet="https://www.cubehq.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsecurity-logo.6a8c58a4.png&w=256&q=75"
                        src={item?.img}
                        width={item?.width}
                        height={item?.height}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
            <section
              className="features_featureSection__wwuU9 md:pt-[220px]  pt-[156px]  after:bg-feature-section-gradient after:opacity-0"
              //   style={{
              //     --feature-color": "53,42,79",
              //     "--feature-color-dark": "194,97,254",
              //   }}
            >
              <div className="features_featureBulb__CG03_ h-[400px] mb-[-420px] md:mb-[-400px] box-border linear bg-bulb-gradient-mobile md:bg-bulb-gradient transition-[transform,opacity] duration-[960ms] is-visible opacity-100 [transform:translateY(-200px)_rotate(180deg)_scale(2)_translateZ(0px)]" />
              {/* <div className="features_featureTitle__dLGcF w-full bodyPadding m-[0_auto] box-border after:bodyMaxWidth after:bg-title-gradient after:opacity-0">
                <h2 className="text-center tracking-[-2px] md:tracking-[-4.5px] leading-[55px] md:leading-[92px] md:text-[80px] textGradientTwo mb-6 md:mb-[16px] text-center text-[48px] [transform:none] [.is-visible_&]:translate-y-[-40.5%] [transition:transform_960ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s]">
                  Your brand 's
                  <br />
                  custom AI assistant
                </h2>
                <div className="text-center relative overflow-hidden max-w-[100%] w-[777px] mx-auto mt-[-36px] backdrop-blur-[6px] rounded-[6px] md:rounded-[14px] features_featureImageDiv__6vB2q">
                  <div className="features_featureImage__RQixE" />
                  <img
                    alt="Feature Image"
                    srcSet="https://www.cubehq.ai/_next/image?url=/_next/static/media/feature1.473b70ab.png&w=3840&q=75"
                    src="https://www.cubehq.ai/_next/image?url=/_next/static/media/feature1.473b70ab.png&w=3840&q=75"
                    width={3108}
                    height={996}
                    decoding="async"
                    data-nimg={1}
                    className="h-auto w-full"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div> */}
              <div className="bodyMaxWidth w-[100%] bodyPadding">
                <div className="text-center mx-auto max-w-[600px]">
                  <p className="mx-auto my-[64px] text-[24px] leading-tight text-white md:text-[30px] sm:leading-[25px] md:leading-[38px] sm:tracking-[-0.8px] md:tracking-[-0.5px] z-[999] relative">
                    We follow a very simple process.
                    <br />
                    This is how it goes
                  </p>
                </div>
              </div>
              <div className="features_separator__YrQaS" />
              <div className="bodyMaxWidth w-[100%] bodyPadding">
                <div className="grid-cols-2 text-[14px] text-grey250 md:text-[16px] features_featuresGrid__NTcnj">
                  <div className="md:max-w-[256px] text-lg [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    01.
                    <span className="block text-xl text-white md:inline ml-[10px]">
                      Plan
                    </span>
                    <br />
                    We’ll sit down with you (figuratively, not literally) to
                    understand the details of your fintech product or feature
                    and discuss how we can build it in the most technically
                    sound and compliant manner.
                  </div>
                  <div className="md:max-w-[256px] text-lg [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    02.
                    <span className="block text-white text-xl md:inline ml-[10px]">
                      Design
                    </span>
                    <br />
                    We’ll then mock-up your entire user experience from scratch
                    in one of those fancy designer programs, so we can sculpt it
                    into a masterpiece.
                  </div>
                  <div className="md:max-w-[256px] text-lg [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    03.
                    <span className="block text-xl text-white md:inline ml-[10px]">
                      Architect.
                    </span>
                    <br />
                    {/* */}
                    While the designers are at work, our engineers will be
                    working on your product's architecture. This is the
                    invisible structure that ensures everything runs smoothly
                    and is 100% secure.
                  </div>
                  <div className="md:max-w-[256px] text-lg [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    04.
                    <span className="block text-xl text-white md:inline ml-[10px]">
                      Build
                    </span>
                    {/* */}
                    <br />
                    We'll then write some of the most beautiful code you’ve ever
                    seen. We follow strict guidelines and everything is fully
                    documented - giving you a solid foundation to build on.
                  </div>
                  <div className="md:max-w-[256px] text-lg [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    05.
                    <span className="block text-xl text-white md:inline ml-[10px]">
                      Test
                    </span>
                    <br />
                    {/* */}
                    Meanwhile, we’re creating automated tests that we run to
                    prevent any small changes from breaking the app and causing
                    'help desk hell' for your team.
                  </div>
                  <div className="md:max-w-[256px] text-lg [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    06.
                    <span className="block text-xl text-white md:inline ml-[10px]">
                      Launch
                    </span>
                    <br />
                    {/* */}
                    Finally, we’re ready for deployment (aka launch). Since a
                    good product is more than just a pile of source code on
                    GitHub - much of the user experience comes from a proper
                    deployment process.
                  </div>
                </div>
              </div>
              {/* <div className="bodyMaxWidth w-[100%] bodyPadding mt-[140px] z-10">
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="md:p-[56px] py-[24px] px-[32px] bg-feature-card-gradient rounded-[24px] md:rounded-[48px] z-10 features_featuresCard__6qZyC">
                    <h3 className="mb-2 text-[20px] md:text-[24px] text-white">
                      Manage multiple platforms
                    </h3>
                    <p className="max-w-[320px] text-[13px] tracking-tighter sm:tracking-normal sm:text-[16px] text-grey250">
                      Don’t let things slip through the cracks. Cube brings it
                      all together.
                    </p>
                    <img
                      alt="Card Image"
                      src="/Images/home/2.png"
                      width={1000}
                      height={614}
                      decoding="async"
                      data-nimg={1}
                      className="absolute bottom-[-10%] right-[-10%]"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="md:p-[56px] py-[24px] px-[32px] bg-feature-card-gradient rounded-[24px] md:rounded-[48px] z-10 features_featuresCard__6qZyC">
                    <h3 className="mb-2 text-[20px] md:text-[24px] text-white">
                      Finetune with feedback
                    </h3>
                    <p className="max-w-[320px] text-[13px] tracking-tighter sm:tracking-normal sm:text-[16px] text-grey250">
                      Watch responses improve with finetuning based on your
                      feedback and edits.
                    </p>
                    <img
                      alt="Card Image"
                      srcSet="https://www.cubehq.ai/_next/image?url=/_next/static/media/feature-card1.7f5acb41.png&w=2048&q=75"
                      src="https://www.cubehq.ai/_next/image?url=/_next/static/media/feature-card1.7f5acb41.png&w=2048&q=75"
                      width={962}
                      height={606}
                      decoding="async"
                      data-nimg={1}
                      className="absolute bottom-[-15%] right-[-10%]"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div> */}
            </section>
            <section
              className="features_featureSection__wwuU9 md:pt-[200px] md:mt-[-164px] pt-[256px] mt-[-128px] after:bg-feature-section-gradient after:opacity-0"
              style={
                {
                  // "--feature-color": "48,58,117",
                  // "--feature-color-dark": "40,87,255",
                }
              }
            >
              {/* <div className="features_featureBulb__CG03_ h-[400px] mb-[-420px] md:mb-[-400px] box-border linear bg-bulb-gradient-mobile md:bg-bulb-gradient transition-[transform,opacity] duration-[960ms] rotate-180 opacity-40 [transform:translateY(-200px)_rotate(180deg)]" /> */}
              {/* <div className="features_featureTitle__dLGcF w-full bodyPadding m-[0_auto] box-border after:bodyMaxWidth after:bg-title-gradient after:opacity-0">
                <h2 className="text-center tracking-[-2px] md:tracking-[-4.5px] leading-[55px] md:leading-[92px] md:text-[80px] textGradientTwo mb-6 md:mb-[16px] text-center text-[48px] [transform:none] [.is-visible_&]:translate-y-[-40.5%] [transition:transform_960ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s]">
                  Breeze through
                  <br />
                  your inbox
                </h2>
                <div className="text-center relative overflow-hidden max-w-[100%] w-[1084px] mx-auto mt-[-36px] backdrop-blur-[6px] rounded-[6px] md:rounded-[14px] features_featureImageDiv__6vB2q">
                  <div className="features_featureImage__RQixE" />
                  <img
                    alt="Feature Image"
                    srcSet="https://www.cubehq.ai/_next/image?url=/_next/static/media/feature2.b096840f.png&w=3840&q=75"
                    src="https://www.cubehq.ai/_next/image?url=/_next/static/media/feature2.b096840f.png&w=3840&q=75"
                    width={1084}
                    height={545}
                    decoding="async"
                    data-nimg={1}
                    className="h-auto w-full"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="bodyMaxWidth w-[100%] bodyPadding">
                <div className="text-center mx-auto max-w-[600px]">
                  <p className="mx-auto my-[64px] text-[24px] leading-tight text-white md:text-[30px] sm:leading-[25px] md:leading-[38px] sm:tracking-[-0.8px] md:tracking-[-0.5px] z-[999] relative">
                    Respond with brilliant timing. Manage interactions across
                    platforms, save time on drafting responses and boost
                    productivity
                  </p>
                </div>
              </div> */}
              <div className="features_separator__YrQaS" />
            </section>
            {/* <section
              className="features_featureSection__wwuU9 md:pt-[420px] md:mt-[-164px] pt-[256px] mt-[-128px] after:bg-feature-section-gradient after:opacity-0"
              style={
                {
                  // "--feature-color": "31,49,64",
                  // "--feature-color-dark": "0,225,244",
                }
              }
            >
              <div className="features_featureBulb__CG03_ h-[400px] mb-[-420px] md:mb-[-400px] box-border linear bg-bulb-gradient-mobile md:bg-bulb-gradient transition-[transform,opacity] duration-[960ms] rotate-180 opacity-40 [transform:translateY(-200px)_rotate(180deg)]" />
              <div className="features_featureTitle__dLGcF w-full bodyPadding m-[0_auto] box-border after:bodyMaxWidth after:bg-title-gradient after:opacity-0">
                <h2 className="text-center tracking-[-2px] md:tracking-[-4.5px] leading-[55px] md:leading-[92px] md:text-[80px] textGradientTwo mb-6 md:mb-[16px] text-center text-[48px] [transform:none] [.is-visible_&]:translate-y-[-40.5%] [transition:transform_960ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s]">
                  Drive action
                  <br />
                  based on insights
                </h2>
                <div className="text-center relative overflow-hidden max-w-[100%] w-[1084px] mx-auto mt-[-36px] backdrop-blur-[6px] rounded-[6px] md:rounded-[14px] features_featureImageDiv__6vB2q">
                  <div className="features_featureImage__RQixE" />
                  <img
                    alt="Feature Image"
                    srcSet="https://www.cubehq.ai/_next/image?url=/_next/static/media/feature3.fc3354cd.png&w=3840&q=75"
                    src="https://www.cubehq.ai/_next/image?url=/_next/static/media/feature3.fc3354cd.png&w=3840&q=75"
                    width={3252}
                    height={1635}
                    decoding="async"
                    data-nimg={1}
                    className="h-auto w-full"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="bodyMaxWidth w-[100%] bodyPadding">
                <div className="text-center mx-auto max-w-[600px]">
                  <p className="mx-auto my-[64px] text-[24px] leading-tight text-white md:text-[30px] sm:leading-[25px] md:leading-[38px] sm:tracking-[-0.8px] md:tracking-[-0.5px] z-[999] relative">
                    Access comprehensive reports on top issues, easily track key
                    metrics and stay on top of trends.
                  </p>
                </div>
              </div>
              <div className="features_separator__YrQaS" />
              <div className="bodyMaxWidth w-[100%] bodyPadding">
                <div className="grid-cols-2 text-[14px] text-grey250 md:text-[16px] features_featuresGrid__NTcnj">
                  <div className="md:max-w-[256px] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g mask="url(#mask0_2591_26345)">
                        <path
                          d="M3.75 15.75C3.3375 15.75 2.98438 15.6031 2.69063 15.3094C2.39688 15.0156 2.25 14.6625 2.25 14.25V3.75C2.25 3.3375 2.39688 2.98438 2.69063 2.69063C2.98438 2.39688 3.3375 2.25 3.75 2.25H6.9C7.0625 1.8 7.33437 1.4375 7.71562 1.1625C8.09688 0.8875 8.525 0.75 9 0.75C9.475 0.75 9.90313 0.8875 10.2844 1.1625C10.6656 1.4375 10.9375 1.8 11.1 2.25H14.25C14.6625 2.25 15.0156 2.39688 15.3094 2.69063C15.6031 2.98438 15.75 3.3375 15.75 3.75V14.25C15.75 14.6625 15.6031 15.0156 15.3094 15.3094C15.0156 15.6031 14.6625 15.75 14.25 15.75H3.75ZM6 12.75H9.75C9.9625 12.75 10.1406 12.6781 10.2844 12.5344C10.4281 12.3906 10.5 12.2125 10.5 12C10.5 11.7875 10.4281 11.6094 10.2844 11.4656C10.1406 11.3219 9.9625 11.25 9.75 11.25H6C5.7875 11.25 5.60938 11.3219 5.46562 11.4656C5.32187 11.6094 5.25 11.7875 5.25 12C5.25 12.2125 5.32187 12.3906 5.46562 12.5344C5.60938 12.6781 5.7875 12.75 6 12.75ZM6 9.75H12C12.2125 9.75 12.3906 9.67813 12.5344 9.53438C12.6781 9.39062 12.75 9.2125 12.75 9C12.75 8.7875 12.6781 8.60938 12.5344 8.46563C12.3906 8.32188 12.2125 8.25 12 8.25H6C5.7875 8.25 5.60938 8.32188 5.46562 8.46563C5.32187 8.60938 5.25 8.7875 5.25 9C5.25 9.2125 5.32187 9.39062 5.46562 9.53438C5.60938 9.67813 5.7875 9.75 6 9.75ZM6 6.75H12C12.2125 6.75 12.3906 6.67812 12.5344 6.53438C12.6781 6.39062 12.75 6.2125 12.75 6C12.75 5.7875 12.6781 5.60938 12.5344 5.46562C12.3906 5.32188 12.2125 5.25 12 5.25H6C5.7875 5.25 5.60938 5.32188 5.46562 5.46562C5.32187 5.60938 5.25 5.7875 5.25 6C5.25 6.2125 5.32187 6.39062 5.46562 6.53438C5.60938 6.67812 5.7875 6.75 6 6.75ZM9 3.1875C9.1625 3.1875 9.29688 3.13438 9.40313 3.02813C9.50938 2.92188 9.5625 2.7875 9.5625 2.625C9.5625 2.4625 9.50938 2.32812 9.40313 2.22187C9.29688 2.11563 9.1625 2.0625 9 2.0625C8.8375 2.0625 8.70313 2.11563 8.59688 2.22187C8.49063 2.32812 8.4375 2.4625 8.4375 2.625C8.4375 2.7875 8.49063 2.92188 8.59688 3.02813C8.70313 3.13438 8.8375 3.1875 9 3.1875Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <span className="block text-white md:inline">
                      Summarisation.{" "}
                    </span>
                    
                    Get daily, weekly or monthly drill-downs of your
                    conversations.
                  </div>
                  <div className="md:max-w-[256px] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g mask="url(#mask0_2591_26350)">
                        <path
                          d="M14.175 15.225L9.975 11.025C9.6 11.325 9.16875 11.5625 8.68125 11.7375C8.19375 11.9125 7.675 12 7.125 12C5.7625 12 4.60938 11.5281 3.66563 10.5844C2.72188 9.64062 2.25 8.4875 2.25 7.125C2.25 5.7625 2.72188 4.60938 3.66563 3.66563C4.60938 2.72188 5.7625 2.25 7.125 2.25C8.4875 2.25 9.64062 2.72188 10.5844 3.66563C11.5281 4.60938 12 5.7625 12 7.125C12 7.675 11.9125 8.19375 11.7375 8.68125C11.5625 9.16875 11.325 9.6 11.025 9.975L15.2438 14.1938C15.3813 14.3313 15.45 14.5 15.45 14.7C15.45 14.9 15.375 15.075 15.225 15.225C15.0875 15.3625 14.9125 15.4313 14.7 15.4313C14.4875 15.4313 14.3125 15.3625 14.175 15.225ZM7.125 10.5C8.0625 10.5 8.85938 10.1719 9.51562 9.51562C10.1719 8.85938 10.5 8.0625 10.5 7.125C10.5 6.1875 10.1719 5.39062 9.51562 4.73438C8.85938 4.07812 8.0625 3.75 7.125 3.75C6.1875 3.75 5.39062 4.07812 4.73438 4.73438C4.07812 5.39062 3.75 6.1875 3.75 7.125C3.75 8.0625 4.07812 8.85938 4.73438 9.51562C5.39062 10.1719 6.1875 10.5 7.125 10.5Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <span className="block text-white md:inline">
                      Theme identification.{" "}
                    </span>
                    
                    Get a bird 's eye view and identify top themes in customer
                    interactions.
                  </div>
                  <div className="md:max-w-[256px] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g mask="url(#mask0_2591_26355)">
                        <path
                          d="M6.20625 8.25156C5.91875 8.25156 5.70312 8.12344 5.55937 7.86719C5.41562 7.61094 5.41875 7.35781 5.56875 7.10781L8.3625 2.55156C8.5125 2.31406 8.725 2.19531 9 2.19531C9.275 2.19531 9.4875 2.31406 9.6375 2.55156L12.4312 7.10781C12.5813 7.35781 12.5844 7.61094 12.4406 7.86719C12.2969 8.12344 12.0813 8.25156 11.7938 8.25156H6.20625ZM13.125 16.5016C12.1875 16.5016 11.3906 16.1734 10.7344 15.5172C10.0781 14.8609 9.75 14.0641 9.75 13.1266C9.75 12.1891 10.0781 11.3922 10.7344 10.7359C11.3906 10.0797 12.1875 9.75156 13.125 9.75156C14.0625 9.75156 14.8594 10.0797 15.5156 10.7359C16.1719 11.3922 16.5 12.1891 16.5 13.1266C16.5 14.0641 16.1719 14.8609 15.5156 15.5172C14.8594 16.1734 14.0625 16.5016 13.125 16.5016ZM3 16.1266C2.7875 16.1266 2.60938 16.0547 2.46562 15.9109C2.32187 15.7672 2.25 15.5891 2.25 15.3766V10.8766C2.25 10.6641 2.32187 10.4859 2.46562 10.3422C2.60938 10.1984 2.7875 10.1266 3 10.1266H7.5C7.7125 10.1266 7.89062 10.1984 8.03438 10.3422C8.17812 10.4859 8.25 10.6641 8.25 10.8766V15.3766C8.25 15.5891 8.17812 15.7672 8.03438 15.9109C7.89062 16.0547 7.7125 16.1266 7.5 16.1266H3Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <span className="block text-white md:inline">
                      Auto-categorization.{" "}
                    </span>
                    
                    Leverage AI to categorise tickets as complaints, queries and
                    more.
                  </div>
                  <div className="md:max-w-[256px] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g mask="url(#mask0_2591_26361)">
                        <path
                          d="M3.6 8.775L1.725 6.9C1.575 6.75 1.5 6.575 1.5 6.375C1.5 6.175 1.575 6 1.725 5.85L3.6 3.975C3.75 3.825 3.925 3.75 4.125 3.75C4.325 3.75 4.5 3.825 4.65 3.975L6.525 5.85C6.675 6 6.75 6.175 6.75 6.375C6.75 6.575 6.675 6.75 6.525 6.9L4.65 8.775C4.5 8.925 4.325 9 4.125 9C3.925 9 3.75 8.925 3.6 8.775ZM7.5 16.5C7.2875 16.5 7.10938 16.4281 6.96562 16.2844C6.82188 16.1406 6.75 15.9625 6.75 15.75V12.75C6.125 12.7 5.50625 12.6313 4.89375 12.5438C4.28125 12.4563 3.66875 12.3438 3.05625 12.2063C2.84375 12.1562 2.67188 12.0375 2.54063 11.85C2.40938 11.6625 2.375 11.4625 2.4375 11.25C2.5 11.0375 2.62813 10.8813 2.82188 10.7812C3.01562 10.6812 3.21875 10.6562 3.43125 10.7063C4.34375 10.9188 5.26563 11.0625 6.19688 11.1375C7.12813 11.2125 8.0625 11.25 9 11.25C9.9375 11.25 10.8719 11.2125 11.8031 11.1375C12.7344 11.0625 13.6563 10.9188 14.5688 10.7063C14.7813 10.6562 14.9844 10.6812 15.1781 10.7812C15.3719 10.8813 15.5 11.0375 15.5625 11.25C15.625 11.4625 15.5906 11.6625 15.4594 11.85C15.3281 12.0375 15.1563 12.1562 14.9438 12.2063C14.3313 12.3438 13.7188 12.4563 13.1063 12.5438C12.4938 12.6313 11.875 12.7 11.25 12.75V15.75C11.25 15.9625 11.1781 16.1406 11.0344 16.2844C10.8906 16.4281 10.7125 16.5 10.5 16.5H7.5ZM9 5.25C8.375 5.25 7.84375 5.03125 7.40625 4.59375C6.96875 4.15625 6.75 3.625 6.75 3C6.75 2.375 6.96875 1.84375 7.40625 1.40625C7.84375 0.96875 8.375 0.75 9 0.75C9.625 0.75 10.1562 0.96875 10.5938 1.40625C11.0312 1.84375 11.25 2.375 11.25 3C11.25 3.625 11.0312 4.15625 10.5938 4.59375C10.1562 5.03125 9.625 5.25 9 5.25ZM9 10.5C8.5875 10.5 8.23438 10.3531 7.94063 10.0594C7.64688 9.76562 7.5 9.4125 7.5 9C7.5 8.5875 7.64688 8.23438 7.94063 7.94063C8.23438 7.64688 8.5875 7.5 9 7.5C9.4125 7.5 9.76562 7.64688 10.0594 7.94063C10.3531 8.23438 10.5 8.5875 10.5 9C10.5 9.4125 10.3531 9.76562 10.0594 10.0594C9.76562 10.3531 9.4125 10.5 9 10.5ZM12.5813 8.625L11.7188 7.125C11.6562 7.0125 11.625 6.8875 11.625 6.75C11.625 6.6125 11.6562 6.4875 11.7188 6.375L12.5813 4.875C12.6438 4.75 12.7312 4.65625 12.8438 4.59375C12.9563 4.53125 13.0813 4.5 13.2188 4.5H14.9062C15.0437 4.5 15.1687 4.53125 15.2812 4.59375C15.3938 4.65625 15.4812 4.75 15.5438 4.875L16.4062 6.375C16.4688 6.4875 16.5 6.6125 16.5 6.75C16.5 6.8875 16.4688 7.0125 16.4062 7.125L15.5438 8.625C15.4812 8.75 15.3938 8.84375 15.2812 8.90625C15.1687 8.96875 15.0437 9 14.9062 9H13.2188C13.0813 9 12.9563 8.96875 12.8438 8.90625C12.7312 8.84375 12.6438 8.75 12.5813 8.625Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <span className="block text-white md:inline">
                      Sentiment Analysis.{" "}
                    </span>
                    
                    Accurately classify Gen-Z lingo, sarcasm or tricky language.
                  </div>
                  <div className="md:max-w-[256px] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g mask="url(#mask0_2591_26366)">
                        <path
                          d="M8.775 13.5C7.575 13.4375 6.5625 12.975 5.7375 12.1125C4.9125 11.25 4.5 10.2125 4.5 9C4.5 7.75 4.9375 6.6875 5.8125 5.8125C6.6875 4.9375 7.75 4.5 9 4.5C10.2125 4.5 11.25 4.9125 12.1125 5.7375C12.975 6.5625 13.4375 7.575 13.5 8.775L11.925 8.30625C11.7625 7.63125 11.4125 7.07813 10.875 6.64688C10.3375 6.21563 9.7125 6 9 6C8.175 6 7.46875 6.29375 6.88125 6.88125C6.29375 7.46875 6 8.175 6 9C6 9.7125 6.21563 10.3375 6.64688 10.875C7.07813 11.4125 7.63125 11.7625 8.30625 11.925L8.775 13.5ZM9 16.5C7.9625 16.5 6.9875 16.3031 6.075 15.9094C5.1625 15.5156 4.36875 14.9813 3.69375 14.3063C3.01875 13.6313 2.48438 12.8375 2.09063 11.925C1.69688 11.0125 1.5 10.0375 1.5 9C1.5 7.9625 1.69688 6.9875 2.09063 6.075C2.48438 5.1625 3.01875 4.36875 3.69375 3.69375C4.36875 3.01875 5.1625 2.48438 6.075 2.09063C6.9875 1.69688 7.9625 1.5 9 1.5C10.0375 1.5 11.0125 1.69688 11.925 2.09063C12.8375 2.48438 13.6313 3.01875 14.3063 3.69375C14.9813 4.36875 15.5156 5.1625 15.9094 6.075C16.3031 6.9875 16.5 7.9625 16.5 9V9.3375C16.5 9.45 16.4875 9.5625 16.4625 9.675L15 9.225V9C15 7.325 14.4188 5.90625 13.2563 4.74375C12.0938 3.58125 10.675 3 9 3C7.325 3 5.90625 3.58125 4.74375 4.74375C3.58125 5.90625 3 7.325 3 9C3 10.675 3.58125 12.0938 4.74375 13.2563C5.90625 14.4188 7.325 15 9 15H9.225L9.675 16.4625C9.5625 16.4875 9.45 16.5 9.3375 16.5H9ZM15.1313 16.6125L12.1875 13.6688L11.625 15.375C11.5625 15.55 11.4438 15.6344 11.2688 15.6281C11.0938 15.6219 10.975 15.5313 10.9125 15.3563L9.20625 9.675C9.15625 9.5375 9.1875 9.4125 9.3 9.3C9.4125 9.1875 9.5375 9.15625 9.675 9.20625L15.3563 10.9125C15.5313 10.975 15.6219 11.0938 15.6281 11.2688C15.6344 11.4438 15.55 11.5625 15.375 11.625L13.6688 12.1875L16.6125 15.1313C16.6875 15.2063 16.725 15.2938 16.725 15.3938C16.725 15.4938 16.6875 15.5813 16.6125 15.6563L15.6563 16.6125C15.5813 16.6875 15.4938 16.725 15.3938 16.725C15.2938 16.725 15.2063 16.6875 15.1313 16.6125Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <span className="block text-white md:inline">
                      Actionable Insights.{" "}
                    </span>
                    
                    Get recommendations on the ideal actions for customer
                    tickets.
                  </div>
                  <div className="md:max-w-[256px] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g mask="url(#mask0_2591_26371)">
                        <path
                          d="M13.875 13.35V11.625C13.875 11.525 13.8375 11.4375 13.7625 11.3625C13.6875 11.2875 13.6 11.25 13.5 11.25C13.4 11.25 13.3125 11.2875 13.2375 11.3625C13.1625 11.4375 13.125 11.525 13.125 11.625V13.35C13.125 13.45 13.1438 13.5437 13.1812 13.6313C13.2188 13.7188 13.275 13.8 13.35 13.875L14.4938 15.0187C14.5688 15.0938 14.6563 15.1313 14.7563 15.1313C14.8563 15.1313 14.9437 15.0938 15.0187 15.0187C15.0938 14.9437 15.1313 14.8563 15.1313 14.7563C15.1313 14.6563 15.0938 14.5688 15.0187 14.4938L13.875 13.35ZM13.5 17.25C12.4625 17.25 11.5781 16.8844 10.8469 16.1531C10.1156 15.4219 9.75 14.5375 9.75 13.5C9.75 12.4625 10.1156 11.5781 10.8469 10.8469C11.5781 10.1156 12.4625 9.75 13.5 9.75C14.5375 9.75 15.4219 10.1156 16.1531 10.8469C16.8844 11.5781 17.25 12.4625 17.25 13.5C17.25 14.5375 16.8844 15.4219 16.1531 16.1531C15.4219 16.8844 14.5375 17.25 13.5 17.25ZM6 6.75H12C12.2125 6.75 12.3906 6.67812 12.5344 6.53438C12.6781 6.39062 12.75 6.2125 12.75 6C12.75 5.7875 12.6781 5.60938 12.5344 5.46562C12.3906 5.32187 12.2125 5.25 12 5.25H6C5.7875 5.25 5.60938 5.32187 5.46562 5.46562C5.32187 5.60938 5.25 5.7875 5.25 6C5.25 6.2125 5.32187 6.39062 5.46562 6.53438C5.60938 6.67812 5.7875 6.75 6 6.75ZM8.75625 15.75H3.75C3.3375 15.75 2.98438 15.6031 2.69063 15.3094C2.39688 15.0156 2.25 14.6625 2.25 14.25V3.75C2.25 3.3375 2.39688 2.98438 2.69063 2.69063C2.98438 2.39688 3.3375 2.25 3.75 2.25H14.25C14.6625 2.25 15.0156 2.39688 15.3094 2.69063C15.6031 2.98438 15.75 3.3375 15.75 3.75V8.775C15.3875 8.6 15.0219 8.46875 14.6531 8.38125C14.2844 8.29375 13.9 8.25 13.5 8.25C13.3625 8.25 13.2344 8.25312 13.1156 8.25937C12.9969 8.26562 12.875 8.28125 12.75 8.30625C12.6375 8.28125 12.5125 8.26562 12.375 8.25937C12.2375 8.25312 12.1125 8.25 12 8.25H6C5.7875 8.25 5.60938 8.32188 5.46562 8.46563C5.32187 8.60938 5.25 8.7875 5.25 9C5.25 9.2125 5.32187 9.39063 5.46562 9.53438C5.60938 9.67813 5.7875 9.75 6 9.75H9.84375C9.61875 9.9625 9.41563 10.1937 9.23438 10.4438C9.05312 10.6938 8.89375 10.9625 8.75625 11.25H6C5.7875 11.25 5.60938 11.3219 5.46562 11.4656C5.32187 11.6094 5.25 11.7875 5.25 12C5.25 12.2125 5.32187 12.3906 5.46562 12.5344C5.60938 12.6781 5.7875 12.75 6 12.75H8.30625C8.28125 12.875 8.26562 12.9969 8.25937 13.1156C8.25312 13.2344 8.25 13.3625 8.25 13.5C8.25 13.9125 8.2875 14.2969 8.3625 14.6531C8.4375 15.0094 8.56875 15.375 8.75625 15.75Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <span className="block text-white md:inline">
                      Scheduled reports.{" "}
                    </span>
                    
                    Keep your teammates in the loop with regular reports.
                  </div>
                </div>
              </div>
              <div className="bodyMaxWidth w-[100%] bodyPadding mt-[140px] z-10">
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="md:p-[56px] py-[24px] px-[32px] bg-feature-card-gradient rounded-[24px] md:rounded-[48px] z-10 features_featuresCard__6qZyC">
                    <h3 className="mb-2 text-[20px] md:text-[24px] text-white">
                      Track trends
                    </h3>
                    <p className="max-w-[320px] text-[13px] tracking-tighter sm:tracking-normal sm:text-[16px] text-grey250">
                      A comprehensive view of tickets, sentiment and CSAT for
                      quick troubleshooting
                    </p>
                    <img
                      alt="Card Image"
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature3-card1.04c53c80.png&w=1080&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature3-card1.04c53c80.png&w=2048&q=75 2x"
                      src="https://www.cubehq.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature3-card1.04c53c80.png&w=2048&q=75"
                      width={1000}
                      height={566}
                      decoding="async"
                      data-nimg={1}
                      className="absolute top-[45%] md:top-[40%]"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="md:p-[56px] py-[24px] px-[32px] bg-feature-card-gradient rounded-[24px] md:rounded-[48px] z-10 features_featuresCard__6qZyC">
                    <h3 className="mb-2 text-[20px] md:text-[24px] text-white">
                      Focus on the big picture
                    </h3>
                    <p className="max-w-[320px] text-[13px] tracking-tighter sm:tracking-normal sm:text-[16px] text-grey250">
                      Stay on top of customer conversations with comprehensive
                      overviews.
                    </p>
                    <img
                      alt="Card Image"
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature3-card2.53853677.png&w=1080&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature3-card2.53853677.png&w=2048&q=75 2x"
                      src="https://www.cubehq.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature3-card2.53853677.png&w=2048&q=75"
                      width={1000}
                      height={606}
                      decoding="async"
                      data-nimg={1}
                      className="absolute top-[40%] md:top-[40%]"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
            </section> */}
            {/* <section
              className="features_featureSection__wwuU9 md:pt-[420px] md:mt-[-164px] pt-[256px] mt-[-128px] after:bg-feature-section-gradient after:opacity-0"
              style={
                {
                  // "--feature-color": "62, 36, 118",
                  // "--feature-color-dark": "62,36,118",
                }
              }
            >
              <div className="features_featureBulb__CG03_ h-[400px] mb-[-420px] md:mb-[-400px] box-border linear bg-bulb-gradient-mobile md:bg-bulb-gradient transition-[transform,opacity] duration-[960ms] rotate-180 opacity-40 [transform:translateY(-200px)_rotate(180deg)]" />
              <div className="features_featureTitle__dLGcF w-full bodyPadding m-[0_auto] box-border after:bodyMaxWidth after:bg-title-gradient after:opacity-0">
                <h2 className="text-center tracking-[-2px] md:tracking-[-4.5px] leading-[55px] md:leading-[92px] md:text-[80px] textGradientTwo mb-6 md:mb-[16px] text-center text-[48px] [transform:none] [.is-visible_&]:translate-y-[-40.5%] [transition:transform_960ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s]">
                  Bring all customer
                  <br />
                  reviews in one place
                </h2>
                <div className="w-[100%] md:w-[500px] mx-auto">
                  <img
                    alt="Feature Image"
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature4-image.152d3306.png&w=3840&q=75 1x"
                    src="https://www.cubehq.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature4-image.152d3306.png&w=3840&q=75"
                    width={2320}
                    height={592}
                    decoding="async"
                    data-nimg={1}
                    className="h-auto w-full"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="bodyMaxWidth w-[100%] bodyPadding">
                <div className="text-center mx-auto max-w-[600px]">
                  <p className="mx-auto my-[64px] text-[24px] leading-tight text-white md:text-[30px] sm:leading-[25px] md:leading-[38px] sm:tracking-[-0.8px] md:tracking-[-0.5px] z-[999] relative">
                    We have 50+ integrations, so you can manage all customer
                    interactions in one place, from start to finish.
                  </p>
                </div>
              </div>
            </section> */}
            <div className="[transform:rotate(180deg)] [--color:#4e5cda] bodyMaxWidth moon-graphic_moonGraphicDiv__vmnFM">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={872}
                height={731}
                fill="none"
                className="moon-graphic_moonGraphic___g2Gq"
              >
                <g fill="#fff" opacity="0.7">
                  <circle
                    cx="227.718"
                    cy="547.745"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 227.718 547.745)"
                  />
                  <circle
                    cx="234.593"
                    cy="551.333"
                    r="0.881"
                    transform="rotate(-32.982 234.593 551.333)"
                  />
                  <circle
                    cx="244.14"
                    cy="530.439"
                    r="0.881"
                    transform="rotate(-32.982 244.14 530.439)"
                  />
                  <circle
                    cx="201.625"
                    cy="556.626"
                    r="0.881"
                    transform="rotate(-32.982 201.625 556.626)"
                  />
                  <circle
                    cx="184.75"
                    cy="584.029"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 184.75 584.029)"
                  />
                  <circle
                    cx="168.68"
                    cy="579.757"
                    r="0.587"
                    transform="rotate(-32.982 168.68 579.757)"
                  />
                  <circle
                    cx="239.023"
                    cy="568.411"
                    r="0.587"
                    transform="rotate(-32.982 239.023 568.411)"
                  />
                  <circle
                    cx="346.422"
                    cy="498.718"
                    r="0.587"
                    transform="rotate(-32.982 346.422 498.718)"
                  />
                  <circle
                    cx="382.851"
                    cy="437.268"
                    r="0.587"
                    transform="rotate(-32.982 382.851 437.268)"
                  />
                  <circle
                    cx="425.406"
                    cy="460.761"
                    r="0.587"
                    transform="rotate(-32.982 425.406 460.761)"
                  />
                  <circle
                    cx="66.984"
                    cy="662.554"
                    r="0.587"
                    transform="rotate(-32.982 66.984 662.554)"
                  />
                  <circle
                    cx="42.336"
                    cy="640.746"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 42.336 640.746)"
                  />
                  <circle
                    cx="28.508"
                    cy="665.823"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 28.508 665.823)"
                  />
                  <circle
                    cx="63.945"
                    cy="684.832"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 63.945 684.832)"
                  />
                  <circle
                    cx="168.398"
                    cy="589.039"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 168.398 589.039)"
                  />
                  <circle
                    cx="249.555"
                    cy="586.785"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 249.555 586.785)"
                  />
                  <circle
                    cx="340.937"
                    cy="520.477"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 340.937 520.477)"
                  />
                  <circle
                    cx="81.656"
                    cy="635.531"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 81.656 635.531)"
                  />
                  <circle
                    cx="177.695"
                    cy="535.399"
                    r="0.587"
                    transform="rotate(-32.982 177.695 535.399)"
                  />
                  <circle
                    cx="252.922"
                    cy="485.182"
                    r="0.587"
                    transform="rotate(-32.982 252.922 485.182)"
                  />
                  <circle
                    cx="173.609"
                    cy="602.461"
                    r="0.587"
                    transform="rotate(-32.982 173.609 602.461)"
                  />
                  <circle
                    cx="139.125"
                    cy="624.841"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 139.125 624.841)"
                  />
                  <circle
                    cx="78.914"
                    cy="620.51"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 78.914 620.51)"
                  />
                  <circle
                    cx="194.242"
                    cy="541.467"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 194.242 541.467)"
                  />
                  <circle
                    cx="188.062"
                    cy="606.386"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 188.062 606.386)"
                  />
                  <circle
                    cx="131.648"
                    cy="649.995"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 131.648 649.995)"
                  />
                  <circle
                    cx="95.945"
                    cy="626.262"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 95.945 626.262)"
                  />
                  <circle
                    cx="401.398"
                    cy="425.934"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 401.398 425.934)"
                  />
                  <circle
                    cx="308.976"
                    cy="457.205"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 308.976 457.205)"
                  />
                  <circle
                    cx="401.844"
                    cy="455.746"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 401.844 455.746)"
                  />
                  <circle
                    cx="279.765"
                    cy="540.572"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 279.765 540.572)"
                  />
                  <circle
                    cx="299.242"
                    cy="506.931"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 299.242 506.931)"
                  />
                  <circle
                    cx="287.968"
                    cy="490.095"
                    r="0.881"
                    transform="rotate(-32.982 287.968 490.095)"
                  />
                  <circle
                    cx="287.547"
                    cy="563.88"
                    r="0.881"
                    transform="rotate(-32.982 287.547 563.88)"
                  />
                  <circle
                    cx="457.492"
                    cy="467.594"
                    r="0.881"
                    transform="rotate(-32.982 457.492 467.594)"
                  />
                  <circle
                    cx="132.336"
                    cy="666.701"
                    r="0.881"
                    transform="rotate(-32.982 132.336 666.701)"
                  />
                  <circle
                    cx="59.468"
                    cy="697.889"
                    r="0.881"
                    transform="rotate(-32.982 59.468 697.889)"
                  />
                  <circle
                    cx="38.304"
                    cy="683.619"
                    r="0.881"
                    transform="rotate(-32.982 38.304 683.619)"
                  />
                  <circle
                    cx="270.718"
                    cy="515.293"
                    r="0.881"
                    transform="rotate(-32.982 270.718 515.293)"
                  />
                  <circle
                    cx="208.656"
                    cy="607.374"
                    r="0.881"
                    transform="rotate(-32.982 208.656 607.374)"
                  />
                  <circle
                    cx="346.547"
                    cy="547.995"
                    r="0.881"
                    transform="rotate(-32.982 346.547 547.995)"
                  />
                  <circle
                    cx="455.351"
                    cy="429.776"
                    r="0.881"
                    transform="rotate(-32.982 455.351 429.776)"
                  />
                  <circle
                    cx="449.593"
                    cy="395.009"
                    r="0.881"
                    transform="rotate(-32.982 449.593 395.009)"
                  />
                  <circle
                    cx="328.773"
                    cy="463.965"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 328.773 463.965)"
                  />
                  <circle
                    cx="306.07"
                    cy="428.99"
                    r="1.175"
                    transform="rotate(-32.982 306.07 428.99)"
                  />
                  <circle
                    cx="361.336"
                    cy="458.586"
                    r="0.881"
                    transform="rotate(-32.982 361.336 458.586)"
                  />
                  <circle
                    cx="372.601"
                    cy="423.621"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 372.601 423.621)"
                  />
                  <circle
                    cx="444.07"
                    cy="426.948"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 444.07 426.948)"
                  />
                  <circle
                    cx="387.07"
                    cy="465.337"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 387.07 465.337)"
                  />
                  <circle
                    cx="109.734"
                    cy="657.216"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 109.734 657.216)"
                  />
                  <circle
                    cx="52.242"
                    cy="656.018"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 52.242 656.018)"
                  />
                  <circle
                    cx="414.281"
                    cy="425.277"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 414.281 425.277)"
                  />
                  <circle
                    cx="111.82"
                    cy="593.553"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 111.82 593.553)"
                  />
                  <circle
                    cx="92.125"
                    cy="592.332"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 92.125 592.332)"
                  />
                  <circle
                    cx="108.648"
                    cy="626.417"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 108.648 626.417)"
                  />
                  <circle
                    cx="139.273"
                    cy="606.191"
                    r="0.881"
                    transform="rotate(-32.982 139.273 606.191)"
                  />
                  <circle
                    cx="300.453"
                    cy="286.747"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 300.453 286.747)"
                  />
                  <circle
                    cx="307.328"
                    cy="290.336"
                    r="0.881"
                    transform="rotate(-32.982 307.328 290.336)"
                  />
                  <circle
                    cx="316.875"
                    cy="269.441"
                    r="0.881"
                    transform="rotate(-32.982 316.875 269.441)"
                  />
                  <circle
                    cx="274.359"
                    cy="295.629"
                    r="0.881"
                    transform="rotate(-32.982 274.359 295.629)"
                  />
                  <circle
                    cx="257.484"
                    cy="323.031"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 257.484 323.031)"
                  />
                  <circle
                    cx="241.414"
                    cy="318.76"
                    r="0.587"
                    transform="rotate(-32.982 241.414 318.76)"
                  />
                  <circle
                    cx="311.758"
                    cy="307.413"
                    r="0.587"
                    transform="rotate(-32.982 311.758 307.413)"
                  />
                  <circle
                    cx="419.156"
                    cy="237.721"
                    r="0.587"
                    transform="rotate(-32.982 419.156 237.721)"
                  />
                  <circle
                    cx="455.586"
                    cy="176.271"
                    r="0.587"
                    transform="rotate(-32.982 455.586 176.271)"
                  />
                  <circle
                    cx="498.14"
                    cy="199.766"
                    r="0.587"
                    transform="rotate(-32.982 498.14 199.766)"
                  />
                  <circle
                    cx="139.719"
                    cy="401.556"
                    r="0.587"
                    transform="rotate(-32.982 139.719 401.556)"
                  />
                  <circle
                    cx="115.07"
                    cy="379.748"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 115.07 379.748)"
                  />
                  <circle
                    cx="101.242"
                    cy="404.825"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 101.242 404.825)"
                  />
                  <circle
                    cx="136.68"
                    cy="423.834"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 136.68 423.834)"
                  />
                  <circle
                    cx="241.133"
                    cy="328.041"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 241.133 328.041)"
                  />
                  <circle
                    cx="322.289"
                    cy="325.787"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 322.289 325.787)"
                  />
                  <circle
                    cx="413.672"
                    cy="259.479"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 413.672 259.479)"
                  />
                  <circle
                    cx="154.39"
                    cy="374.534"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 154.39 374.534)"
                  />
                  <circle
                    cx="250.43"
                    cy="274.401"
                    r="0.587"
                    transform="rotate(-32.982 250.43 274.401)"
                  />
                  <circle
                    cx="325.656"
                    cy="224.184"
                    r="0.587"
                    transform="rotate(-32.982 325.656 224.184)"
                  />
                  <circle
                    cx="246.344"
                    cy="341.464"
                    r="0.587"
                    transform="rotate(-32.982 246.344 341.464)"
                  />
                  <circle
                    cx="211.859"
                    cy="363.843"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 211.859 363.843)"
                  />
                  <circle
                    cx="151.648"
                    cy="359.513"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 151.648 359.513)"
                  />
                  <circle
                    cx="266.976"
                    cy="280.469"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 266.976 280.469)"
                  />
                  <circle
                    cx="260.797"
                    cy="345.388"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 260.797 345.388)"
                  />
                  <circle
                    cx="204.383"
                    cy="388.998"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 204.383 388.998)"
                  />
                  <circle
                    cx="168.68"
                    cy="365.264"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 168.68 365.264)"
                  />
                  <circle
                    cx="474.133"
                    cy="164.936"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 474.133 164.936)"
                  />
                  <circle
                    cx="381.711"
                    cy="196.208"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 381.711 196.208)"
                  />
                  <circle
                    cx="474.578"
                    cy="194.749"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 474.578 194.749)"
                  />
                  <circle
                    cx="352.5"
                    cy="279.575"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 352.5 279.575)"
                  />
                  <circle
                    cx="371.976"
                    cy="245.933"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 371.976 245.933)"
                  />
                  <circle
                    cx="360.703"
                    cy="229.097"
                    r="0.881"
                    transform="rotate(-32.982 360.703 229.097)"
                  />
                  <circle
                    cx="360.281"
                    cy="302.882"
                    r="0.881"
                    transform="rotate(-32.982 360.281 302.882)"
                  />
                  <circle
                    cx="530.226"
                    cy="206.596"
                    r="0.881"
                    transform="rotate(-32.982 530.226 206.596)"
                  />
                  <circle
                    cx="205.07"
                    cy="405.703"
                    r="0.881"
                    transform="rotate(-32.982 205.07 405.703)"
                  />
                  <circle
                    cx="132.203"
                    cy="436.891"
                    r="0.881"
                    transform="rotate(-32.982 132.203 436.891)"
                  />
                  <circle
                    cx="111.039"
                    cy="422.621"
                    r="0.881"
                    transform="rotate(-32.982 111.039 422.621)"
                  />
                  <circle
                    cx="343.453"
                    cy="254.296"
                    r="0.881"
                    transform="rotate(-32.982 343.453 254.296)"
                  />
                  <circle
                    cx="281.39"
                    cy="346.376"
                    r="0.881"
                    transform="rotate(-32.982 281.39 346.376)"
                  />
                  <circle
                    cx="419.281"
                    cy="286.997"
                    r="0.881"
                    transform="rotate(-32.982 419.281 286.997)"
                  />
                  <circle
                    cx="528.086"
                    cy="168.778"
                    r="0.881"
                    transform="rotate(-32.982 528.086 168.778)"
                  />
                  <circle
                    cx="522.328"
                    cy="134.012"
                    r="0.881"
                    transform="rotate(-32.982 522.328 134.012)"
                  />
                  <circle
                    cx="401.507"
                    cy="202.967"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 401.507 202.967)"
                  />
                  <circle
                    cx="378.804"
                    cy="167.992"
                    r="1.175"
                    transform="rotate(-32.982 378.804 167.992)"
                  />
                  <circle
                    cx="434.07"
                    cy="197.588"
                    r="0.881"
                    transform="rotate(-32.982 434.07 197.588)"
                  />
                  <circle
                    cx="445.336"
                    cy="162.623"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 445.336 162.623)"
                  />
                  <circle
                    cx="516.804"
                    cy="165.95"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 516.804 165.95)"
                  />
                  <circle
                    cx="459.804"
                    cy="204.339"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 459.804 204.339)"
                  />
                  <circle
                    cx="182.468"
                    cy="396.218"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 182.468 396.218)"
                  />
                  <circle
                    cx="124.976"
                    cy="395.021"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 124.976 395.021)"
                  />
                  <circle
                    cx="487.015"
                    cy="164.279"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 487.015 164.279)"
                  />
                  <circle
                    cx="184.554"
                    cy="332.556"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 184.554 332.556)"
                  />
                  <circle
                    cx="164.859"
                    cy="331.334"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 164.859 331.334)"
                  />
                  <circle
                    cx="181.382"
                    cy="365.42"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 181.382 365.42)"
                  />
                  <circle
                    cx="212.008"
                    cy="345.193"
                    r="0.881"
                    transform="rotate(-32.982 212.008 345.193)"
                  />
                  <circle
                    cx="609.586"
                    cy="195.828"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 609.586 195.828)"
                  />
                  <circle
                    cx="616.461"
                    cy="199.416"
                    r="0.881"
                    transform="rotate(-32.982 616.461 199.416)"
                  />
                  <circle
                    cx="626.008"
                    cy="178.522"
                    r="0.881"
                    transform="rotate(-32.982 626.008 178.522)"
                  />
                  <circle
                    cx="583.492"
                    cy="204.709"
                    r="0.881"
                    transform="rotate(-32.982 583.492 204.709)"
                  />
                  <circle
                    cx="566.617"
                    cy="232.111"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 566.617 232.111)"
                  />
                  <circle
                    cx="550.547"
                    cy="227.84"
                    r="0.587"
                    transform="rotate(-32.982 550.547 227.84)"
                  />
                  <circle
                    cx="620.89"
                    cy="216.494"
                    r="0.587"
                    transform="rotate(-32.982 620.89 216.494)"
                  />
                  <circle
                    cx="728.289"
                    cy="146.801"
                    r="0.587"
                    transform="rotate(-32.982 728.289 146.801)"
                  />
                  <circle
                    cx="764.719"
                    cy="85.351"
                    r="0.587"
                    transform="rotate(-32.982 764.719 85.351)"
                  />
                  <circle
                    cx="807.273"
                    cy="108.844"
                    r="0.587"
                    transform="rotate(-32.982 807.273 108.844)"
                  />
                  <circle
                    cx="448.851"
                    cy="310.637"
                    r="0.587"
                    transform="rotate(-32.982 448.851 310.637)"
                  />
                  <circle
                    cx="424.203"
                    cy="288.829"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 424.203 288.829)"
                  />
                  <circle
                    cx="410.375"
                    cy="313.906"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 410.375 313.906)"
                  />
                  <circle
                    cx="445.812"
                    cy="332.915"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 445.812 332.915)"
                  />
                  <circle
                    cx="550.265"
                    cy="237.121"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 550.265 237.121)"
                  />
                  <circle
                    cx="631.414"
                    cy="234.868"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 631.414 234.868)"
                  />
                  <circle
                    cx="722.805"
                    cy="168.56"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 722.805 168.56)"
                  />
                  <circle
                    cx="463.523"
                    cy="283.614"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 463.523 283.614)"
                  />
                  <circle
                    cx="559.562"
                    cy="183.482"
                    r="0.587"
                    transform="rotate(-32.982 559.562 183.482)"
                  />
                  <circle
                    cx="634.789"
                    cy="133.265"
                    r="0.587"
                    transform="rotate(-32.982 634.789 133.265)"
                  />
                  <circle
                    cx="555.476"
                    cy="250.545"
                    r="0.587"
                    transform="rotate(-32.982 555.476 250.545)"
                  />
                  <circle
                    cx="520.992"
                    cy="272.924"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 520.992 272.924)"
                  />
                  <circle
                    cx="460.781"
                    cy="268.593"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 460.781 268.593)"
                  />
                  <circle
                    cx="576.109"
                    cy="189.55"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 576.109 189.55)"
                  />
                  <circle
                    cx="569.93"
                    cy="254.469"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 569.93 254.469)"
                  />
                  <circle
                    cx="513.515"
                    cy="298.078"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 513.515 298.078)"
                  />
                  <circle
                    cx="477.812"
                    cy="274.345"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 477.812 274.345)"
                  />
                  <circle
                    cx="783.265"
                    cy="74.017"
                    r="0.587"
                    opacity="0.3"
                    transform="rotate(-32.982 783.265 74.017)"
                  />
                  <circle
                    cx="690.844"
                    cy="105.288"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 690.844 105.288)"
                  />
                  <circle
                    cx="783.711"
                    cy="103.829"
                    r="0.587"
                    opacity="0.11"
                    transform="rotate(-32.982 783.711 103.829)"
                  />
                  <circle
                    cx="661.632"
                    cy="188.655"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 661.632 188.655)"
                  />
                  <circle
                    cx="681.109"
                    cy="155.014"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 681.109 155.014)"
                  />
                  <circle
                    cx="669.836"
                    cy="138.178"
                    r="0.881"
                    transform="rotate(-32.982 669.836 138.178)"
                  />
                  <circle
                    cx="669.414"
                    cy="211.963"
                    r="0.881"
                    transform="rotate(-32.982 669.414 211.963)"
                  />
                  <circle
                    cx="839.359"
                    cy="115.677"
                    r="0.881"
                    transform="rotate(-32.982 839.359 115.677)"
                  />
                  <circle
                    cx="514.203"
                    cy="314.784"
                    r="0.881"
                    transform="rotate(-32.982 514.203 314.784)"
                  />
                  <circle
                    cx="441.336"
                    cy="345.972"
                    r="0.881"
                    transform="rotate(-32.982 441.336 345.972)"
                  />
                  <circle
                    cx="420.172"
                    cy="331.702"
                    r="0.881"
                    transform="rotate(-32.982 420.172 331.702)"
                  />
                  <circle
                    cx="652.586"
                    cy="163.376"
                    r="0.881"
                    transform="rotate(-32.982 652.586 163.376)"
                  />
                  <circle
                    cx="590.523"
                    cy="255.457"
                    r="0.881"
                    transform="rotate(-32.982 590.523 255.457)"
                  />
                  <circle
                    cx="728.414"
                    cy="196.078"
                    r="0.881"
                    transform="rotate(-32.982 728.414 196.078)"
                  />
                  <circle
                    cx="837.219"
                    cy="77.859"
                    r="0.881"
                    transform="rotate(-32.982 837.219 77.86)"
                  />
                  <circle
                    cx="831.461"
                    cy="43.092"
                    r="0.881"
                    transform="rotate(-32.982 831.461 43.092)"
                  />
                  <circle
                    cx="710.632"
                    cy="112.048"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 710.632 112.048)"
                  />
                  <circle
                    cx="687.937"
                    cy="77.073"
                    r="1.175"
                    transform="rotate(-32.982 687.937 77.073)"
                  />
                  <circle
                    cx="743.203"
                    cy="106.669"
                    r="0.881"
                    transform="rotate(-32.982 743.203 106.669)"
                  />
                  <circle
                    cx="754.468"
                    cy="71.704"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 754.468 71.704)"
                  />
                  <circle
                    cx="825.937"
                    cy="75.031"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 825.937 75.03)"
                  />
                  <circle
                    cx="768.937"
                    cy="113.42"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 768.937 113.42)"
                  />
                  <circle
                    cx="491.601"
                    cy="305.299"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 491.601 305.299)"
                  />
                  <circle
                    cx="434.109"
                    cy="304.102"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 434.109 304.102)"
                  />
                  <circle
                    cx="796.148"
                    cy="73.36"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 796.148 73.36)"
                  />
                  <circle
                    cx="493.687"
                    cy="241.636"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 493.687 241.636)"
                  />
                  <circle
                    cx="473.992"
                    cy="240.415"
                    r="1.175"
                    opacity="0.11"
                    transform="rotate(-32.982 473.992 240.415)"
                  />
                  <circle
                    cx="490.515"
                    cy="274.5"
                    r="1.175"
                    opacity="0.3"
                    transform="rotate(-32.982 490.515 274.5)"
                  />
                  <circle
                    cx="521.14"
                    cy="254.274"
                    r="0.881"
                    transform="rotate(-32.982 521.14 254.274)"
                  />
                </g>
              </svg>
            </div>
            <div className="bodyMaxWidth flex justify-center flex-col">
              {/* <div className="mx-auto flex items-center md:flex-row flex-col gap-[32px] md:gap-[128px]">
                <img
                  alt="Cube"
                  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsequoia-logo.8478b562.png&w=256&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsequoia-logo.8478b562.png&w=640&q=75 2x"
                  src="https://www.cubehq.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsequoia-logo.8478b562.png&w=640&q=75"
                  width={195}
                  height={26}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                />
                <img
                  alt="Cube"
                  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstanford-logo.c11f6ab8.png&w=256&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstanford-logo.c11f6ab8.png&w=384&q=75 2x"
                  src="https://www.cubehq.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstanford-logo.c11f6ab8.png&w=384&q=75"
                  width={190}
                  height={41}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                />
              </div> */}
              <p className="investor_headerGradient__35ZWi md:text-[80px] text-[40px] text-center tracking-[-2px] md:tracking-[-4.5px] leading-[44px] md:leading-[79px] mt-[60px] mb-[64px]">
                Our Clients Love Us.
                <br />
                Want To Talk To Them?
              </p>
              <div className="mx-auto flex gap-[16px] mb-[128px]">
                <a
                  className="buttonOne rounded-full p-[24px] h-[48px] flex items-center w-[max-content]"
                  rel="noopener noreferrer"
                  href="https://calendly.com/nihad-dev/30min"
                  target="_blank"
                >
                  <p className="text-[16px] font-medium text-white">
                    Call Us Now
                  </p>
                </a>
                <button
                  onClick={() => {
                    router.push("/portfolio");
                  }}
                  className="rounded-full p-[24px] h-[48px] buttonTwo items-center w-[max-content] md:flex hidden"
                >
                  <a
                    href="javascript:void(0)"
                    className="text-[16px] font-medium text-white"
                  >
                    Portfolio
                  </a>
                </button>
              </div>
            </div>
            <footer className="[border-top:1px_solid_rgba(255,255,255,0.1)]">
              <div className="py-[56px] flex flex-wrap bodyPadding mx-auto max-w-[1200px]">
                <div className="footer_firstDiv__RAC1R">
                  <a
                    className="text-grey500 hover:text-white100 text-[14px] font-medium"
                    href="/"
                  >
                    TDA
                  </a>
                </div>
                {/* <div className="footer_listWidth__WUFhY text-white100 text-[14px] font-medium">
                  <a
                    className="mb-[14px] text-grey500 hover:text-white100"
                    href="/terms-and-conditions"
                  >
                    Terms of Service
                  </a>
                </div>
                <div className="footer_listWidth__WUFhY text-white100 text-[14px] font-medium">
                  <a
                    className="mb-[14px] text-grey500 hover:text-white100"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </a>
                </div> */}
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
