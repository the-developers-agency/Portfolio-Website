import React from "react";

const index = () => {
  return (
    <>
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
        <div id="__next">
          <div className="flex flex-col w-full">
            <div className="fixed top-0 left-0 right-0 navbarBackground z-[9998] block block">
              <div className="mx-auto max-w-[1200px]">
                <div className="flex mx-24 lg:mx-0 items-center justify-between py-[8px]">
                  <div className="flex gap-[8px] items-center">
                    <a className="flex gap-[8px]" href="/">
                      <p className="no-underline text-white100 text-[18px] font-semibold font-poppins">
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
                        className="no-underline text-[14px] font-medium text-white"
                      >
                        Call Us Now
                      </a>
                    </a>
                    <div className="ml-[-24px] md:hidden block">
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

            <div>
              <meta
                httpEquiv="Content-Type"
                content="text/html; charset=utf-8"
              />
              <title>TDA Tech Portfolio</title>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n/* cspell:disable-file */\n/* webkit printing magic: print all background colors */\nhtml {\n\t-webkit-print-color-adjust: exact;\n}\n* {\n\tbox-sizing: border-box;\n\t-webkit-print-color-adjust: exact;\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n@media only screen {\n\tbody {\n\t\tmargin: 2em auto;\n\t\tmax-width: 900px;\n\t\tcolor: rgb(55, 53, 47);\n\t}\n}\n\nbody {\n\tline-height: 1.5;\n\twhite-space: pre-wrap;\n}\n\na,\na.visited {\n\tcolor: inherit;\n\ttext-decoration: underline;\n}\n\n.pdf-relative-link-path {\n\tfont-size: 80%;\n\tcolor: #444;\n}\n\nh1,\nh2,\nh3 {\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tfont-weight: 600;\n\tmargin-bottom: 0;\n}\n\n.page-title {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tmargin-top: 0;\n\tmargin-bottom: 0.75em;\n}\n\nh1 {\n\tfont-size: 1.875rem;\n\tmargin-top: 1.875rem;\n}\n\nh2 {\n\tfont-size: 1.5rem;\n\tmargin-top: 1.5rem;\n}\n\nh3 {\n\tfont-size: 1.25rem;\n\tmargin-top: 1.25rem;\n}\n\n.source {\n\tborder: 1px solid #ddd;\n\tborder-radius: 3px;\n\tpadding: 1.5em;\n\tword-break: break-all;\n}\n\n.callout {\n\tborder-radius: 3px;\n\tpadding: 1rem;\n}\n\nfigure {\n\tmargin: 1.25em 0;\n\tpage-break-inside: avoid;\n}\n\nfigcaption {\n\topacity: 0.5;\n\tfont-size: 85%;\n\tmargin-top: 0.5em;\n}\n\nmark {\n\tbackground-color: transparent;\n}\n\n.indented {\n\tpadding-left: 1.5em;\n}\n\nhr {\n\tbackground: transparent;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 1px;\n\tvisibility: visible;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n}\n\nimg {\n\tmax-width: 100%;\n}\n\n@media only print {\n\timg {\n\t\tmax-height: 100vh;\n\t\tobject-fit: contain;\n\t}\n}\n\n@page {\n\tmargin: 1in;\n}\n\n.collection-content {\n\tfont-size: 0.875rem;\n}\n\n.column-list {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.column {\n\tpadding: 0 1em;\n}\n\n.column:first-child {\n\tpadding-left: 0;\n}\n\n.column:last-child {\n\tpadding-right: 0;\n}\n\n.table_of_contents-item {\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tline-height: 1.3;\n\tpadding: 0.125rem;\n}\n\n.table_of_contents-indent-1 {\n\tmargin-left: 1.5rem;\n}\n\n.table_of_contents-indent-2 {\n\tmargin-left: 3rem;\n}\n\n.table_of_contents-indent-3 {\n\tmargin-left: 4.5rem;\n}\n\n.table_of_contents-link {\n\ttext-decoration: none;\n\topacity: 0.7;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n}\n\ntable,\nth,\ntd {\n\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\tborder-collapse: collapse;\n}\n\ntable {\n\tborder-left: none;\n\tborder-right: none;\n}\n\nth,\ntd {\n\tfont-weight: normal;\n\tpadding: 0.25em 0.5em;\n\tline-height: 1.5;\n\tmin-height: 1.5em;\n\ttext-align: left;\n}\n\nth {\n\tcolor: rgba(55, 53, 47, 0.6);\n}\n\nol,\nul {\n\tmargin: 0;\n\tmargin-block-start: 0.6em;\n\tmargin-block-end: 0.6em;\n}\n\nli > ol:first-child,\nli > ul:first-child {\n\tmargin-block-start: 0.6em;\n}\n\nul > li {\n\tlist-style: disc;\n}\n\nul.to-do-list {\n\tpadding-inline-start: 0;\n}\n\nul.to-do-list > li {\n\tlist-style: none;\n}\n\n.to-do-children-checked {\n\ttext-decoration: line-through;\n\topacity: 0.375;\n}\n\nul.toggle > li {\n\tlist-style: none;\n}\n\nul {\n\tpadding-inline-start: 1.7em;\n}\n\nul > li {\n\tpadding-left: 0.1em;\n}\n\nol {\n\tpadding-inline-start: 1.6em;\n}\n\nol > li {\n\tpadding-left: 0.2em;\n}\n\n.mono ol {\n\tpadding-inline-start: 2em;\n}\n\n.mono ol > li {\n\ttext-indent: -0.4em;\n}\n\n.toggle {\n\tpadding-inline-start: 0em;\n\tlist-style-type: none;\n}\n\n/* Indent toggle children */\n.toggle > li > details {\n\tpadding-left: 1.7em;\n}\n\n.toggle > li > details > summary {\n\tmargin-left: -1.1em;\n}\n\n.selected-value {\n\tdisplay: inline-block;\n\tpadding: 0 0.5em;\n\tbackground: rgba(206, 205, 202, 0.5);\n\tborder-radius: 3px;\n\tmargin-right: 0.5em;\n\tmargin-top: 0.3em;\n\tmargin-bottom: 0.3em;\n\twhite-space: nowrap;\n}\n\n.collection-title {\n\tdisplay: inline-block;\n\tmargin-right: 1em;\n}\n\n.page-description {\n    margin-bottom: 2em;\n}\n\n.simple-table {\n\tmargin-top: 1em;\n\tfont-size: 0.875rem;\n\tempty-cells: show;\n}\n.simple-table td {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table th {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table-header-color {\n\tbackground: rgb(247, 246, 243);\n\tcolor: black;\n}\n.simple-table-header {\n\tfont-weight: 500;\n}\n\ntime {\n\topacity: 0.5;\n}\n\n.icon {\n\tdisplay: inline-block;\n\tmax-width: 1.2em;\n\tmax-height: 1.2em;\n\ttext-decoration: none;\n\tvertical-align: text-bottom;\n\tmargin-right: 0.5em;\n}\n\nimg.icon {\n\tborder-radius: 3px;\n}\n\n.user-icon {\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder-radius: 100%;\n\tmargin-right: 0.5rem;\n}\n\n.user-icon-inner {\n\tfont-size: 0.8em;\n}\n\n.text-icon {\n\tborder: 1px solid #000;\n\ttext-align: center;\n}\n\n.page-cover-image {\n\tdisplay: block;\n\tobject-fit: cover;\n\twidth: 100%;\n\tmax-height: 30vh;\n}\n\n.page-header-icon {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n.page-header-icon-with-cover {\n\tmargin-top: -0.72em;\n\tmargin-left: 0.07em;\n}\n\n.page-header-icon img {\n\tborder-radius: 3px;\n}\n\n.link-to-page {\n\tmargin: 1em 0;\n\tpadding: 0;\n\tborder: none;\n\tfont-weight: 500;\n}\n\np > .user {\n\topacity: 0.5;\n}\n\ntd > .user,\ntd > time {\n\twhite-space: nowrap;\n}\n\ninput[type=\"checkbox\"] {\n\ttransform: scale(1.5);\n\tmargin-right: 0.6em;\n\tvertical-align: middle;\n}\n\np {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n\n.image {\n\tborder: none;\n\tmargin: 1.5em 0;\n\tpadding: 0;\n\tborder-radius: 0;\n\ttext-align: center;\n}\n\n.code,\ncode {\n\tbackground: rgba(135, 131, 120, 0.15);\n\tborder-radius: 3px;\n\tpadding: 0.2em 0.4em;\n\tborder-radius: 3px;\n\tfont-size: 85%;\n\ttab-size: 2;\n}\n\ncode {\n\tcolor: #eb5757;\n}\n\n.code {\n\tpadding: 1.5em 1em;\n}\n\n.code-wrap {\n\twhite-space: pre-wrap;\n\tword-break: break-all;\n}\n\n.code > code {\n\tbackground: none;\n\tpadding: 0;\n\tfont-size: 100%;\n\tcolor: inherit;\n}\n\nblockquote {\n\tfont-size: 1.25em;\n\tmargin: 1em 0;\n\tpadding-left: 1em;\n\tborder-left: 3px solid rgb(55, 53, 47);\n}\n\n.bookmark {\n\ttext-decoration: none;\n\tmax-height: 8em;\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: stretch;\n}\n\n.bookmark-title {\n\tfont-size: 0.85em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 1.75em;\n\twhite-space: nowrap;\n}\n\n.bookmark-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bookmark-info {\n\tflex: 4 1 180px;\n\tpadding: 12px 14px 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.bookmark-image {\n\twidth: 33%;\n\tflex: 1 1 180px;\n\tdisplay: block;\n\tposition: relative;\n\tobject-fit: cover;\n\tborder-radius: 1px;\n}\n\n.bookmark-description {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfont-size: 0.75em;\n\toverflow: hidden;\n\tmax-height: 4.5em;\n\tword-break: break-word;\n}\n\n.bookmark-href {\n\tfont-size: 0.75em;\n\tmargin-top: 0.25em;\n}\n\n.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n.code { font-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace; }\n.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }\n.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }\n.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }\n.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }\n.pdf .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }\n.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }\n.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }\n.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }\n.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.highlight-default {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.highlight-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.highlight-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.highlight-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.highlight-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.highlight-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.highlight-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.highlight-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.highlight-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.highlight-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.highlight-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.highlight-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.highlight-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.highlight-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.highlight-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.highlight-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.highlight-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.highlight-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.block-color-default {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.block-color-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.block-color-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.block-color-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.block-color-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.block-color-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.block-color-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.block-color-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.block-color-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.block-color-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.block-color-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.block-color-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.block-color-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.block-color-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.block-color-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.block-color-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.block-color-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.block-color-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.select-value-color-interactiveBlue { background-color: rgba(35, 131, 226, .07); }\n.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n.select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n.select-value-color-translucentGray { background-color: rgba(255, 255, 255, 0.0375); }\n.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n.select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }\n.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n.select-value-color-pageGlass { background-color: undefined; }\n.select-value-color-washGlass { background-color: undefined; }\n\n.checkbox {\n\tdisplay: inline-flex;\n\tvertical-align: text-bottom;\n\twidth: 16;\n\theight: 16;\n\tbackground-size: 16px;\n\tmargin-left: 2px;\n\tmargin-right: 5px;\n}\n\n.checkbox-on {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.checkbox-off {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\t\n",
                }}
              />
              <article
                id="658f007e-60a5-4198-8de8-3a1bbccadff8"
                className="page sans text-white md:px-0 px-[20px] mt-[60px]"
              >
                <header>
                  <h1 className="page-title">TDA Tech Portfolio</h1>
                  <p className="page-description" />
                </header>
                <div className="page-body">
                  <h2 id="a21bb57f-9664-4e88-964c-d32b234f6d67" className="">
                    1.
                    <strong>
                      {" "}
                      LXME - A Financial Services Platform For Women
                    </strong>
                  </h2>
                  <p id="01fb5d2e-2f39-4c6a-bbf9-a546ae7e47cc" className="">
                    <strong>Website:</strong>{" "}
                    <a href="https://lxme.in/">https://lxme.in</a>
                  </p>
                  <p id="9bc2b123-b2b5-4d40-bfda-cd3e7f352773" className="">
                    Founded by Prithi Rathi Gupta, who is also the Managing
                    Director at Anand Rathi Share &amp; Stock Brokers Ltd (a
                    public company), as a platform for women to access financial
                    services.
                  </p>
                  <h3 id="1fe4efc4-56ad-4c75-9904-af6d9562fcd4" className="">
                    What did they need?
                  </h3>
                  <ol
                    id="4c059dd6-113e-458f-b26d-c72486cf8cf1"
                    className="numbered-list"
                    start={1}
                  >
                    <li>
                      <strong>Prepaid Card Offering for their customers</strong>
                      : They wanted to start offering PPI (Prepaid Instruments)
                      ,i.e VISA prepaid card, to their customer base. They
                      wanted both the dashboard (frontend) and the backend M2P
                      integrations that will allow them to do this.
                    </li>
                  </ol>
                  <ol
                    id="df6f445f-eff3-429d-943e-ca7abcb95c25"
                    className="numbered-list"
                    start={2}
                  >
                    <li>
                      <strong>
                        Revamping their existing UI for existing flows
                      </strong>
                      (Onboarding and Home Page)
                    </li>
                  </ol>
                  <ol
                    id="f19ab116-866a-4a3c-bc86-30a83baaeb97"
                    className="numbered-list"
                    start={3}
                  >
                    <li>
                      Building more functionalities as microservices
                      <strong> </strong>on top of their existing infrastructure.
                    </li>
                  </ol>
                  <h3 id="8089aa0a-7819-4e24-8a64-9f77effd6653" className="">
                    <strong>Delivery</strong>
                  </h3>
                  <p id="874f0b58-137f-4a86-8608-f20f3d6c2281" className="">
                    We worked on two major modules:
                  </p>
                  <ol
                    id="24f56f26-a2d8-4242-9785-d0e9fa9b2468"
                    className="numbered-list"
                    start={1}
                  >
                    <li>Onboarding Experience Revamp</li>
                  </ol>
                  <ol
                    id="2b5d81ba-48f4-4360-a72f-4f50db6e886f"
                    className="numbered-list"
                    start={2}
                  >
                    <li>Dashboard Home Page revamp</li>
                  </ol>
                  <p id="4556e425-cb84-49c6-a7ef-982b52d8e6d5" className="">
                    Designs were shared to us in Figma. We built the UI
                    accordingly in React Native. Most of the functionality was
                    already there so we used the existing APIs wherever
                    possible. The new APIs were built independently on Lambda
                    functions. Our APIs were written in Node while the existing
                    were written in GO. The Lambda function infrastructure setup
                    facilitated the co-existence of multiple languages. At the
                    end, the APIs follow REST and communicates in JSON.
                  </p>
                  <p id="44554aec-db9c-4de5-95f1-aca0b4a88316" className="">
                    We are deeply integrated with their team. Our devs work
                    together, we coordinate with their Product Manager for tasks
                    prioritisation. Our builds goes through multiple rounds of
                    testing starting from our QA ⇒ their QA ⇒ the Management. We
                    get on a weekly sync up call to discuss progress and plan
                    the next week. Apart from that we are constantly in
                    communication through Slack, Whatsapp.
                  </p>
                  <p id="ac67465c-7ff8-4c8c-8d39-7e851dea1034" className="">
                    <strong>Languages used:</strong> NodeJS, TypeScript
                  </p>
                  <p id="db73522e-bb91-47b8-83a8-86de6d456270" className="">
                    <strong>Technologies involved:</strong> Express, PostgreSQL,
                    AWS Lambda, React Native
                  </p>
                  <hr id="9be3b81c-22ac-457e-8a64-d2b6342b6166" />
                  <h2 id="e436376e-3ba5-4c05-ae04-fe0977d41adc" className="">
                    2. <strong>FinStack </strong>-{" "}
                    <strong>
                      FinStack enables Banks, NBFCs, and Fintechs to underwrite
                      loans!
                    </strong>
                  </h2>
                  <p id="6e16ab51-3f25-4aeb-abc4-988e0c661277" className="">
                    <strong>Website:</strong>{" "}
                    <a href="https://www.getfinstack.in/">
                      https://www.getfinstack.in/
                    </a>
                  </p>
                  <p id="dd5b001d-8625-44e1-8fb5-e8483393a14b" className="">
                    Founded by Gaurav Agarwal, Graduate of Entrepreneur First.
                    He had been working as an engineer in fintech
                    companies(PhonePe, Capital Float Company).
                  </p>
                  <h3 id="fcaa9e29-d696-48fc-8ea0-583690a3db82" className="">
                    What did they need?
                  </h3>
                  <p id="dfd54bf0-f003-4a5c-895e-3a1b12951da8" className="">
                    They needed someone who has previous experience working with
                    integrating M2P services to build their Prepaid Card
                    Infrastructure. They also wanted to build a multi-tenant
                    system to serve their partners as a “Card Program”. We could
                    do both.
                  </p>
                  <p id="9ef306e5-2a6d-4f31-a569-edb6e630167a" className="">
                    <strong>Delivery</strong>:
                  </p>
                  <ul
                    id="9960c902-2896-482b-8d29-3ce4ab3f7271"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      We got on calls with M2P KT sessions to gather all the
                      APIs that needed to be
                      <p id="b2e60f44-9a69-43a2-a75f-2a65d65f454c" className="">
                        integrated.
                      </p>
                    </li>
                  </ul>
                  <ul
                    id="7069afc2-4547-497b-85d3-efc81cf576f9"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      We tested them all on Postman one by one until we are sure
                      of the complete
                      <p id="b86a98f5-d6e5-4ca3-80f7-0adc58e60b60" className="">
                        integration
                      </p>
                    </li>
                  </ul>
                  <ul
                    id="b7920260-3f48-4494-9c1d-a42dc26e1a9e"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      We built a sandbox environment with APIs functioning and
                      returning sample requests
                      <p id="433ce07c-7d7d-447a-ac87-72b46e59686b" className="">
                        and responses.
                      </p>
                    </li>
                  </ul>
                  <ul
                    id="320f8467-95c4-47ff-a306-364a30603b49"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      We broke down the APIs into modules and integrated it:
                      KYC, Card Transaction,
                      <p id="f3fa93ff-4e42-43a2-89f0-283fa5753ab6" className="">
                        Card Details, Other Card Services
                      </p>
                    </li>
                  </ul>
                  <p id="9605f6cd-04cc-4403-b745-27b7fdb10149" className=""></p>
                  <h3 id="e9b177b8-70a0-465b-a6dd-bf3fcbb918c6" className="">
                    Architecture
                  </h3>
                  <p id="51d46227-3e85-4288-8046-f0224b49cc51" className="">
                    Two Docker containers: one for the APIs and one for the
                    webhook handler
                  </p>
                  <p id="144d3567-758e-48e7-9486-70251c3ce230" className="">
                    We needed our webhook to be decoupled from the API service,
                    hence two containers. To optimise our time and scale, we
                    used a simple Lambda function as the webhook endpoint that
                    uploads the payload into SQS. The webhook docker container
                    polls the Queue for messages and processes them. This was
                    done to ensure no webhook payload is lost without
                    processing.
                  </p>
                  <p id="f64db1db-b25e-4ae3-9b16-1880b7340f9a" className="">
                    The API backend was built in Express. Both containers run on
                    the same EC2. NGINX sits at the front to route traffic to
                    the request service.
                  </p>
                  <p id="3c5f4e7c-d003-485c-9e0f-91c845f20040" className="">
                    <span style={{ borderBottom: "0.05em solid" }}>
                      <strong>Monitoring</strong>
                    </span>
                  </p>
                  <p id="08f9816e-fb4f-4144-8228-c63cce6ac9b8" className="">
                    Gaurav wanted monitoring to be set up for all the API calls,
                    DB calls and 3rd party calls. We wrote middleware functions
                    that log all the request, its latency, status code to a time
                    series database(OpenTSDB). It was then connected to Grafana
                    where we had our dashboard set up according to our needs.
                  </p>
                  <p id="5b885cf9-ad95-4f83-8c9d-182ad466544d" className="">
                    <strong>Languages used:</strong> NodeJS, TypeScript
                  </p>
                  <p id="4b6bfc0a-6834-4163-a658-8d0b354b5b06" className="">
                    <strong>Technologies involved:</strong> Express, AWS Lambda,
                    AWS DynamoDB, Docker, OpenTSDB, Grafana, NGINX
                  </p>
                  <hr id="83e23381-9fe9-4d50-b984-730e24930807" />
                  <h2 id="2790a1d8-4bde-41fc-9aa9-4ae018e39eb2" className="">
                    3. Veefin
                  </h2>
                  <p id="b9a0c041-3fba-464d-8f35-b8e26f5072fd" className="">
                    Website:{" "}
                    <a href="https://www.notion.so/TDA-Tech-Portfolio-658f007e60a541988de83a1bbccadff8?pvs=21">
                      www.veefin.com
                    </a>
                  </p>
                  <p id="6c4d9053-a633-4f2a-b40a-f3cbacebac5a" className="">
                    Global Leaders In Digital Supply Chain Finance.
                  </p>
                  <h3 id="15a947c7-c7d0-417c-a3ab-9db81b39c555" className="">
                    What did they need?
                  </h3>
                  <p id="106dc879-10a1-4b54-b6b3-94dfe080c584" className="">
                    They wanted us to build two financial products. One was
                    calculation problem, another was classifying problem.
                    Confidential, so we can’t really talk about it.
                  </p>
                  <h3 id="84be98e9-f03d-44fe-958c-427685bb6198" className="">
                    Delivery
                  </h3>
                  <p id="12c8ab96-30a7-49cc-b5fa-f084d82afea0" className="">
                    The work involves processing input files to generate a
                    analytical report. This involved performing some validation
                    checks on the data, feeding it into a GLM Model to calculate
                    key parameters and finally plotting it all in a graph. We
                    are building a React client where users upload the files.
                    The backend server is being built on Flask, we use NumPy to
                    do the data transformations. We are containerising these
                    micro-services which would later be deployed onto their ECS.{" "}
                  </p>
                  <p id="2bc60cb1-a893-433d-85bd-12fea6213fc6" className="">
                    <strong>NOTE:</strong> We can maybe spill some details about
                    it over call.{" "}
                  </p>
                  <p id="72b7a157-e064-4dc4-b282-e6d2a85e6376" className="">
                    <strong>Languages used: </strong> Python, React
                  </p>
                  <p id="71882045-4756-4ad8-8113-726746741488" className="">
                    <strong>Technologies involved:</strong> AWS, NumPy
                  </p>
                  <hr id="a2795671-8577-4644-ba90-bf889e372569" />
                  <h2 id="0b033acc-9054-4891-8818-15c0449f1bd2" className="">
                    <strong>
                      4. Cypherock - World's first hardware wallet without a
                      seed phrase.
                    </strong>
                  </h2>
                  <p id="671bf52d-4c95-4d7d-8491-bdb2ee3bd985" className="">
                    <strong>Website: </strong>
                    <a href="https://www.cypherock.com/">
                      https://www.cypherock.com/
                    </a>
                  </p>
                  <p id="925f7b6b-604f-4eba-a506-f4d30f1dca21" className="">
                    Founded by Rohan Agarwal and Vipul Saini. Cypherock is a
                    hardware wallet company based out of Gurgaon. Cypherock
                    CySync is the desktop application that connects to a
                    hardware device via the USB.
                  </p>
                  <h3 id="9d9dec60-e410-4464-bcf7-7af1753e531e" className="">
                    What did they need?
                  </h3>
                  <p id="9c47281b-6b7c-4fcc-b4fe-89f641bf1184" className="">
                    The Cypherock team was working to revamp their entire
                    desktop experience with more intuitive designs. They started
                    the project from scratch and they needed help in building
                    the UI components and transition triggers. So their team can
                    focus more on the protocol integration. Rohan wanted the new
                    desktop experience to be released as soon as possible to the
                    world. And they came to us to help them get there faster.
                  </p>
                  <h3 id="f3dcbaac-a8c2-478b-9b01-82b5fa332858" className="">
                    Delivery
                  </h3>
                  <p id="33eae5ac-361b-4126-a5e1-a078f23bd632" className="">
                    We have divided the flows as modules. Our team is working on
                    the flows one by one. We are coordinating and working
                    parallelly with Cypherock’s tech to be on par with
                    everything. As we complete and merge the Pull Request, their
                    teams goes ahead with the integration.
                  </p>
                  <p id="b18874bb-8952-4f99-b609-fd7c06602b95" className="">
                    <strong>Languages used:</strong> Typescript
                  </p>
                  <p id="9b3cae09-451c-4461-822e-ed7df1b54d98" className="">
                    <strong>Technologies involved:</strong> React, Electron,
                    Redux
                  </p>
                  <hr id="e54c8e95-2a2f-4347-98e4-9540c8f13aea" />
                  <h2 id="cac949ba-90ec-41e7-84a4-d76c3dccc063" className="">
                    5. Freebird - A debt management app for both lenders and
                    also for the borrowers
                  </h2>
                  <p id="e14a9716-ce96-4bc8-a760-74e28852a039" className="">
                    Website:{" "}
                    <a href="https://www.getfreebird.app/">
                      https://www.getfreebird.app/
                    </a>
                  </p>
                  <p id="73cbc0a5-a6e7-4517-91fa-417c8d6d79f4" className="">
                    Founded by{" "}
                    <a href="https://www.linkedin.com/in/ACoAAAPwAvsBjfqc1noKvngNhgNvyePRHXMcKFM">
                      Chandrahasan Vantaku
                    </a>
                    . Freebird app is a lending management app. It lets users
                    securely manage and collaborate with other team members to
                    streamline their business.
                  </p>
                  <h3 id="2ac91835-891d-4e5f-b6ab-27d8f8da2043" className="">
                    What did they need?
                  </h3>
                  <p id="912d9281-da16-4107-aaef-e0095f125248" className="">
                    Freebird had a mobile app launched on Play Store and App
                    Store. Upon receiving several user feedback to have a web
                    interface as well, they asked us to come up with a plan to
                    get Freebird web app running as quick and maintainable as
                    possible.
                  </p>
                  <h3 id="667bcf79-135a-453e-9b37-11c882bdb18e" className="">
                    Delivery
                  </h3>
                  <ul
                    id="847787e5-0de9-49a7-8231-d5aa895bf30a"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      <span style={{ borderBottom: "0.05em solid" }}>
                        Initial Discovery Phase
                      </span>
                      After exploring, we concluded we have two options. Either
                      to build a standalone web app from scratch. Or use React
                      Native for Web to configure a monorepo that would run
                      android, iOS and web from the same source code. After
                      considering all the various factors we decided to use RN
                      for web.
                    </li>
                  </ul>
                  <ul
                    id="c0db42f9-4f45-4a99-9931-b91a728b6876"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      <span style={{ borderBottom: "0.05em solid" }}>
                        Scoping out the project
                      </span>
                      There were several fundamental differences between Mobile
                      and Web. For example
                      <ol
                        id="17f618fb-cea8-40e3-a3d4-0a33ea1ca8b1"
                        className="numbered-list"
                        start={1}
                      >
                        <li>
                          Mobile had stack navigation while web had URL routing
                        </li>
                      </ol>
                      <ol
                        id="48e5241f-4214-4cdd-8131-22a2f0da0725"
                        className="numbered-list"
                        start={2}
                      >
                        <li>Async Storage vs Local Storage</li>
                      </ol>
                      <ol
                        id="58358224-a32a-44f9-ae79-e1e495afb826"
                        className="numbered-list"
                        start={3}
                      >
                        <li>Views vs Divs</li>
                      </ol>
                      <ol
                        id="1c2a559f-0274-4867-940a-a7c2dd061c4d"
                        className="numbered-list"
                        start={4}
                      >
                        <li>Bottom drawer vs Sidebar</li>
                      </ol>
                      <p id="1c595276-768b-4816-9340-b4857ed829f0" className="">
                        On top of these there were package differences and style
                        issues that had to be sorted out without interfering
                        with the mobile code.
                      </p>
                    </li>
                  </ul>
                  <ul
                    id="8dd6f86b-061b-48e5-94dc-23c7e36b7ea3"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      <span style={{ borderBottom: "0.05em solid" }}>
                        Execution
                      </span>
                      <ol
                        id="35a08926-bed0-491e-9b32-cec8211f4364"
                        className="numbered-list"
                        start={1}
                      >
                        <li>
                          We started with writing our Webpack config file that
                          aliases the packages, picks the loaders with the
                          appropriate web configuration.
                        </li>
                      </ol>
                      <ol
                        id="ec10b16e-13da-4285-961b-c072d97ee138"
                        className="numbered-list"
                        start={2}
                      >
                        <li>Resolving dependencies for the web</li>
                      </ol>
                      <ol
                        id="13d8d498-a476-41b7-88b7-5258c98a5caa"
                        className="numbered-list"
                        start={3}
                      >
                        <li>
                          Writing platform specific code to add/delete that is
                          appropriate to web
                        </li>
                      </ol>
                      <ol
                        id="4b467d85-8be0-4030-a592-01bec1de4c4e"
                        className="numbered-list"
                        start={4}
                      >
                        <li>
                          Building the Sidebar component + Writing CSS for the
                          web
                        </li>
                      </ol>
                      <ol
                        id="772ebd4f-92c0-4e1c-8111-dcad2e86971b"
                        className="numbered-list"
                        start={5}
                      >
                        <li>
                          Converting Bottom drawers to modals, adding back
                          buttons
                        </li>
                      </ol>
                    </li>
                  </ul>
                  <ul
                    id="9ec44142-f31a-4bea-a871-ba92e6e4d6d8"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      <span style={{ borderBottom: "0.05em solid" }}>
                        Testing and fixing flows
                      </span>
                      Once we reached a pretty close web app that resembled
                      their mobile app visually, we started testing each and
                      every functionality and doing the corresponding fixes. Now
                      the web app is running live on{" "}
                      <a href="https://usefreebird.web.app/OnboardingScreen">
                        https://usefreebird.web.app
                      </a>
                    </li>
                  </ul>
                  <p id="8211ba17-5679-4bd7-a4cb-01c28c289451" className="">
                    <strong>Languages used:</strong> Javascript
                  </p>
                  <p id="dadf04a0-bebf-4598-89e4-743def74bc90" className="">
                    <strong>Technologies involved:</strong> Webpack, React
                    Native, React Native for Web, Firebase
                  </p>
                  <hr id="550e38b6-e982-47b0-861f-d7e8e4f2ce3f" />
                  <h2 id="b882e887-f557-4cd7-a197-b0111b2c785b" className="">
                    6. A Stealth Company
                  </h2>
                  <p id="c521e48b-2ce4-4b6d-846f-9f6764c11c6c" className="">
                    This company is a ghost. They cannot be found online. We
                    have signed NDAs to not disclose any information about the
                    work we do here.
                  </p>
                  <h3 id="d8d17c25-c4fa-48d2-b3eb-c7f8181fd3ae" className="">
                    What did they need?
                  </h3>
                  <p id="a4a10133-2ac9-401f-951e-ad96c80f95d5" className="">
                    They needed a solid backend dev.
                  </p>
                  <h3 id="c0ec5bde-99aa-4a4a-9c45-7c8c6a541f7e" className="">
                    Delivery
                  </h3>
                  <p id="5bdd3465-4d10-4f56-a414-2f04f8c19eb0" className="">
                    The work involves understanding complex vague documentation
                    from multiple vendors and integrating into the core system.
                    This involves sophisticated business logics that needs to be
                    intact. Or else would lead to an error in the final result
                    of the computation which would have a bad impact. We handle
                    a large amount of data that needs to be processed and
                    uploaded to cache. The data format and API format varies a
                    lot, not everybody uses REST &amp; JSON. It would SOAP, RPC
                    &amp; XML as well.
                  </p>
                  <p id="5c9d37d8-b050-43f3-9361-6844c533c05b" className="">
                    <strong>NOTE:</strong> We can maybe spill some details about
                    it over call.{" "}
                  </p>
                  <p id="ab18c68c-b437-4e24-9bf6-cb9ecb53f428" className="">
                    <strong>Languages used:</strong> NodeJS, Python
                  </p>
                  <p id="cda1428c-67ab-4884-957f-b98c09227abe" className="">
                    <strong>Technologies involved:</strong> SQL, Elasticsearch
                  </p>
                  <hr id="ad28df6d-380b-4c89-96d3-b2a4a478a47c" />
                  <h2 id="b9aa54d9-27c4-4bcb-99e9-5f1eafe143aa" className="">
                    7. Handson
                  </h2>
                  <p id="c31065f7-01db-4903-9316-b031d93963fb" className="">
                    <strong>Website:</strong>{" "}
                    <a href="https://handson.ai">https://handson.ai</a>
                  </p>
                  <p id="8d7eacda-4446-4a2a-b188-3b1e1c884ad2" className="">
                    This was our first project as a company. Founded by Shankar
                    and Rachna Gaur. The HandsOn app was already in operation
                    before the pandemic. But due to the unfortunate lockdown all
                    the blue collar workers went out of jobs and Handson was put
                    out of use.
                  </p>
                  <h3 id="1f39b952-4733-4e4a-97d2-59f0eaae6873" className="">
                    What did they need?
                  </h3>
                  <p id="1187c96e-d4ff-491a-811c-c89adb030695" className="">
                    They wanted a full end-to-end platform built.
                  </p>
                  <ol
                    id="753c79b2-b0f1-42bd-ad8c-194b3639d2d6"
                    className="numbered-list"
                    start={1}
                  >
                    <li>
                      A mobile app (both android and iOS), that had a
                      distinctive map feature that a job seeker can
                      <p id="b2f47cdd-7a46-4a41-9540-3eb5a4a09af4" className="">
                        use to view and apply to jobs in real-time.
                      </p>
                    </li>
                  </ol>
                  <ol
                    id="2ada1be6-d799-42ff-b454-c1f97fc013a8"
                    className="numbered-list"
                    start={2}
                  >
                    <li>
                      A Web dashboard for Employers to post jobs and manage
                      applicants.
                    </li>
                  </ol>
                  <ol
                    id="65bd0014-6841-4151-bcb5-7656844f81cc"
                    className="numbered-list"
                    start={3}
                  >
                    <li>
                      An admin panel for the HandsOn employees to manage Active
                      Locations, Employers,
                      <p id="b4626de1-7384-4396-b2f2-da8426204fbe" className="">
                        Seekers and Jobs. It included a{" "}
                        <strong>role based system with ACL </strong>built for
                        each of the resources.
                      </p>
                    </li>
                  </ol>
                  <h3 id="15d9b92f-ea8b-4d6d-a3d5-4047d9a49ff2" className="">
                    Delivery
                  </h3>
                  <p id="8c4e7b52-74da-4289-a49f-7c30546ce72a" className="">
                    The total duration of the project was 5 months.
                  </p>
                  <ul
                    id="c94f3d03-c148-4de8-9187-9fb3ee64c050"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      In the first month, we were analysing the stories, tech
                      debt items and finalising designs.
                    </li>
                  </ul>
                  <ul
                    id="921b18b1-3f9b-445d-b764-bea8fafcb31a"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      The 2nd &amp; 3rd month was completely dedicated to
                      developing APIs, building UI, integrating
                      <p id="dc7086ca-6283-4328-b40d-2367f81dd71d" className="">
                        the flows.
                      </p>
                    </li>
                  </ul>
                  <ul
                    id="6753d5ff-3ee4-4fcd-94e4-0668a4918cba"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      During the 4th &amp; 5th month, we were testing it all end
                      to end multiple times. Some functionalities were changed,
                      some new requirements came in. We built it all and fixed
                      the bugs making the product stable.
                    </li>
                  </ul>
                  <ul
                    id="00186042-4b20-4c89-a1cd-3cd0aa9927fe"
                    className="bulleted-list"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      Towards the end of 5th month, we were working on
                      Analytics, Notifications, Data migrations, Triggers.
                    </li>
                  </ul>
                  <p id="fbadfbf2-036d-45de-b891-412ba006abb5" className="">
                    <strong>Languages used:</strong> NodeJS, TypeScript
                  </p>
                  <p id="597ec910-a0ed-476c-8e5e-481509a6bfa9" className="">
                    <strong>Technologies involved:</strong> Express, NextJS,
                    React Native, SQL, AWS
                  </p>
                </div>
              </article>
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
                <div className="footer_listWidth__WUFhY text-white100 text-[14px] font-medium">
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
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
