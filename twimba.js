export const twimba = (strings, ...values) => {
  const propertyNameRules = {
    fl: "flex",
    flb: "flex-basis",
    fld: "flex-direction",
    flf: "flex-flow",
    flg: "flex-grow",
    fls: "flex-shrink",
    flw: "flex-wrap",
    ga: "grid-area",
    gac: "grid-auto-columns",
    gaf: "grid-auto-flow",
    gar: "grid-auto-rows",
    gc: "grid-column",
    gce: "grid-column-end",
    gcg: "grid-column-gap",
    gcs: "grid-column-start",
    gr: "grid-row",
    gre: "grid-row-end",
    grg: "grid-row-gap",
    grs: "grid-row-start",
    gt: "grid-template",
    gta: "grid-template-areas",
    gtc: "grid-template-columns",
    gtr: "grid-template-rows",
    ac: "align-content",
    ai: "align-items",
    as: "align-self",
    jc: "justify-content",
    ji: "justify-items",
    js: "justify-self",
    jac: "place-content",
    jai: "place-items",
    jas: "place-self",
    ea: "transition", // FIXME
    ease: "transition", // FIXME
    eaw: "transition-delay",
    "ease-all-delay": "transition-delay",
    ead: "transition-duration", // change (ease-all-duration)
    "ease-all-duration": "transition-duration", // change (ease-all-duration)
    eaf: "transition-timing-function", // change (ease-all-function)
    "ease-all-function": "transition-timing-function", // change (ease-all-function)
    eb: "transition", // change (ease-box)
    "ease-box": "transition", // change (ease-box)
    ebw: "transition-delay", // change (ease-box-delay)
    "ease-box-delay": "transition-delay", // change (ease-box-delay)
    ebd: "transition-duration", // change (ease-box-duration)
    "ease-box-duration": "transition-duration", // change (ease-box-duration)
    ebf: "transition-timing-function", // change (ease-box-function)
    "ease-box-function": "transition-timing-function", // change (ease-box-function)
    ec: "transition-color", // change (ease-colors)
    "ease-colors": "transition-color", // change (ease-colors)
    ecw: "transition-delay", // change (ease-colors-delay)
    "ease-colors-delay": "transition-delay", // change (ease-colors-delay)
    ecd: "transition-duration", // change (ease-colors-duration)
    "ease-colors-duration": "transition-duration", // change (ease-colors-duration)
    ecf: "transition-timing-function", // change (ease-colors-function)
    "ease-colors-function": "transition-timing-function", // change (ease-colors-function)
    eo: "transition", // change (ease-opacity)
    "ease-opacity": "transition", // change (ease-opacity)
    eow: "transition-delay", // change (ease-opacity-delay)
    "ease-opacity-delay": "transition-delay", // change (ease-opacity-delay)
    eod: "transition-duration", // change (ease-opacity-duration)
    "ease-opacity-duration": "transition-duration", // change (ease-opacity-duration)
    eof: "transition-timing-function", // change (ease-opacity-function)
    "ease-opacity-function": "transition-timing-function", // change (ease-opacity-function)
    et: "transition-timing-function", // change (ease-transform)
    "ease-transform": "transition", // (ease-transform)
    etw: "transition-delay", // (ease-transform-delay)
    "ease-transform-delay": "transition-delay", // (ease-transform-delay)
    etd: "transition-duration", // (ease-transform-duration)
    "ease-transform-duration": "transition-duration", // (ease-transform-duration)
    etf: "transition-timing-function", // (ease-transform-function)
    "ease-transform-function": "transition-timing-function", // (ease-transform-function)
    s: "size",
    bg: "background",
    bga: "background-attachment",
    bgclip: "background-clip",
    bgc: "background-color",
    bgi: "background-image",
    bgo: "background-origin",
    bgp: "background-position",
    bgr: "background-repeat",
    bgs: "background-size",
    bd: "border",
    bdb: "border-bottom",
    bcb: "border-bottom-color",
    rdbl: "border-bottom-left-radius",
    rdbr: "border-bottom-right-radius",
    bsb: "border-bottom-style",
    bwb: "border-bottom-width",
    bc: "border-color",
    bdl: "border-left",
    bcl: "border-left-color",
    bsl: "border-left-style",
    bwl: "border-left-width",
    rd: "border-radius",
    bdr: "border-right",
    bcr: "border-right-color",
    bsr: "border-right-style",
    bwr: "border-right-width",
    bs: "border-style",
    bdt: "border-top",
    bct: "border-top-color",
    rdtl: "border-top-left-radius",
    rdtr: "border-top-right-radius",
    bst: "border-top-style",
    bwt: "border-top-width",
    bw: "border-width",
    b: "bottom",
    bxs: "box-shadow",
    c: "color",
    cg: "column-gap",
    d: "display",
    ff: "font-family",
    fs: "font-size",
    fw: "font-weight",
    g: "gap",
    h: "height",
    l: "left",
    ls: "letter-spacing",
    lh: "line-height",
    m: "margin",
    mb: "margin-bottom",
    ml: "margin-left",
    mr: "margin-right",
    mt: "margin-top",
    o: "opacity",
    ol: "outline",
    olc: "outline-color",
    olo: "outline-offset",
    ols: "outline-style",
    olw: "outline-width",
    of: "overflow",
    ofa: "overflow-anchor",
    p: "padding",
    pb: "padding-bottom",
    pl: "padding-left",
    pr: "padding-right",
    pt: "padding-top",
    pe: "pointer-events",
    pos: "position",
    r: "right",
    rg: "row-gap",
    ta: "text-align",
    td: "text-decoration",
    tdc: "text-decoration-color",
    tdl: "text-decoration-line",
    tdsi: "text-decoration-skip-ink",
    tds: "text-decoration-style",
    tdt: "text-decoration-thickness",
    te: "text-emphasis",
    tec: "text-emphasis-color",
    tep: "text-emphasis-position",
    tes: "text-emphasis-style",
    txs: "text-shadow",
    tt: "text-transform",
    t: "top",
    origin: "transform-origin",
    tween: "transition",
    us: "user-select",
    va: "vertical-align",
    ws: "white-space",
    w: "width",
    zi: "z-index",
  };
  const propertyValueRules = {
    rose0: "rgb(255, 240, 241)",
    rose1: "rgb(255, 230, 231)",
    rose2: "rgb(254, 205, 211)",
    rose3: "rgb(253, 165, 175)",
    rose4: "rgb(251, 111, 132)",
    rose5: "rgb(244, 62, 92)",
    rose6: "rgb(226, 29, 72)",
    rose7: "rgb(191, 18, 61)",
    rose8: "rgb(161, 18, 58)",
    rose9: "rgb(134, 19, 54)",
    pink0: "rgb(253, 242, 248)",
    pink1: "rgb(252, 232, 244)",
    pink2: "rgb(251, 208, 232)",
    pink3: "rgb(249, 169, 213)",
    pink4: "rgb(244, 113, 181)",
    pink5: "rgb(236, 70, 153)",
    pink6: "rgb(219, 41, 121)",
    pink7: "rgb(191, 24, 93)",
    pink8: "rgb(155, 23, 76)",
    pink9: "rgb(129, 24, 66)",
    fuchsia0: "rgb(253, 245, 255)",
    fuchsia1: "rgb(249, 230, 255)",
    fuchsia2: "rgb(245, 210, 254)",
    fuchsia3: "rgb(240, 171, 252)",
    fuchsia4: "rgb(232, 123, 249)",
    fuchsia5: "rgb(217, 72, 239)",
    fuchsia6: "rgb(191, 39, 211)",
    fuchsia7: "rgb(163, 29, 175)",
    fuchsia8: "rgb(133, 25, 143)",
    fuchsia9: "rgb(113, 26, 117)",
    purple0: "rgb(250, 245, 255)",
    purple1: "rgb(242, 230, 255)",
    purple2: "rgb(234, 214, 255)",
    purple3: "rgb(216, 180, 254)",
    purple4: "rgb(191, 131, 252)",
    purple5: "rgb(168, 85, 247)",
    purple6: "rgb(146, 52, 234)",
    purple7: "rgb(126, 34, 206)",
    purple8: "rgb(106, 33, 166)",
    purple9: "rgb(89, 28, 135)",
    violet0: "rgb(247, 245, 255)",
    violet1: "rgb(235, 231, 254)",
    violet2: "rgb(222, 215, 254)",
    violet3: "rgb(195, 180, 253)",
    violet4: "rgb(166, 137, 250)",
    violet5: "rgb(137, 90, 246)",
    violet6: "rgb(124, 59, 237)",
    violet7: "rgb(107, 38, 217)",
    violet8: "rgb(90, 33, 181)",
    violet9: "rgb(77, 29, 149)",
    indigo0: "rgb(240, 243, 255)",
    indigo1: "rgb(224, 232, 255)",
    indigo2: "rgb(200, 211, 254)",
    indigo3: "rgb(166, 180, 252)",
    indigo4: "rgb(130, 141, 248)",
    indigo5: "rgb(100, 103, 242)",
    indigo6: "rgb(80, 72, 229)",
    indigo7: "rgb(70, 58, 203)",
    indigo8: "rgb(55, 47, 162)",
    indigo9: "rgb(49, 46, 127)",
    blue0: "rgb(240, 246, 255)",
    blue1: "rgb(220, 235, 254)",
    blue2: "rgb(190, 219, 254)",
    blue3: "rgb(145, 195, 253)",
    blue4: "rgb(97, 166, 250)",
    blue5: "rgb(60, 131, 246)",
    blue6: "rgb(36, 99, 235)",
    blue7: "rgb(29, 79, 215)",
    blue8: "rgb(30, 63, 174)",
    blue9: "rgb(30, 59, 138)",
    sky0: "rgb(240, 249, 255)",
    sky1: "rgb(225, 243, 254)",
    sky2: "rgb(186, 229, 253)",
    sky3: "rgb(126, 212, 252)",
    sky4: "rgb(58, 191, 248)",
    sky5: "rgb(13, 162, 231)",
    sky6: "rgb(2, 132, 197)",
    sky7: "rgb(3, 105, 160)",
    sky8: "rgb(7, 87, 131)",
    sky9: "rgb(12, 74, 110)",
    cyan0: "rgb(235, 254, 255)",
    cyan1: "rgb(205, 250, 254)",
    cyan2: "rgb(166, 244, 252)",
    cyan3: "rgb(103, 232, 249)",
    cyan4: "rgb(32, 211, 238)",
    cyan5: "rgb(7, 182, 213)",
    cyan6: "rgb(8, 142, 175)",
    cyan7: "rgb(14, 116, 144)",
    cyan8: "rgb(21, 95, 117)",
    cyan9: "rgb(22, 79, 100)",
    teal0: "rgb(242, 253, 250)",
    teal1: "rgb(203, 251, 240)",
    teal2: "rgb(152, 246, 227)",
    teal3: "rgb(93, 234, 213)",
    teal4: "rgb(43, 212, 189)",
    teal5: "rgb(20, 184, 165)",
    teal6: "rgb(13, 150, 139)",
    teal7: "rgb(15, 117, 109)",
    teal8: "rgb(17, 95, 90)",
    teal9: "rgb(19, 78, 74)",
    emerald0: "rgb(237, 253, 245)",
    emerald1: "rgb(209, 250, 229)",
    emerald2: "rgb(165, 243, 207)",
    emerald3: "rgb(110, 231, 183)",
    emerald4: "rgb(54, 211, 153)",
    emerald5: "rgb(16, 183, 127)",
    emerald6: "rgb(5, 148, 103)",
    emerald7: "rgb(4, 119, 86)",
    emerald8: "rgb(6, 96, 70)",
    emerald9: "rgb(6, 76, 57)",
    green0: "rgb(242, 253, 245)",
    green1: "rgb(222, 252, 233)",
    green2: "rgb(187, 247, 208)",
    green3: "rgb(133, 239, 172)",
    green4: "rgb(74, 222, 128)",
    green5: "rgb(33, 196, 93)",
    green6: "rgb(22, 162, 73)",
    green7: "rgb(21, 127, 60)",
    green8: "rgb(22, 100, 52)",
    green9: "rgb(20, 82, 45)",
    lime0: "rgb(247, 254, 231)",
    lime1: "rgb(235, 252, 202)",
    lime2: "rgb(217, 249, 159)",
    lime3: "rgb(190, 242, 99)",
    lime4: "rgb(161, 230, 51)",
    lime5: "rgb(130, 203, 21)",
    lime6: "rgb(102, 165, 13)",
    lime7: "rgb(76, 123, 15)",
    lime8: "rgb(64, 99, 18)",
    lime9: "rgb(53, 82, 20)",
    yellow0: "rgb(254, 252, 231)",
    yellow1: "rgb(254, 249, 195)",
    yellow2: "rgb(254, 240, 139)",
    yellow3: "rgb(253, 223, 73)",
    yellow4: "rgb(250, 204, 20)",
    yellow5: "rgb(231, 176, 8)",
    yellow6: "rgb(200, 138, 4)",
    yellow7: "rgb(162, 97, 7)",
    yellow8: "rgb(134, 78, 14)",
    yellow9: "rgb(115, 63, 18)",
    amber0: "rgb(255, 251, 235)",
    amber1: "rgb(254, 243, 200)",
    amber2: "rgb(253, 230, 139)",
    amber3: "rgb(252, 212, 79)",
    amber4: "rgb(251, 189, 35)",
    amber5: "rgb(245, 159, 10)",
    amber6: "rgb(219, 119, 6)",
    amber7: "rgb(179, 83, 9)",
    amber8: "rgb(145, 64, 13)",
    amber9: "rgb(118, 53, 15)",
    orange0: "rgb(255, 246, 235)",
    orange1: "rgb(255, 237, 214)",
    orange2: "rgb(254, 214, 169)",
    orange3: "rgb(253, 186, 114)",
    orange4: "rgb(251, 146, 60)",
    orange5: "rgb(249, 116, 21)",
    orange6: "rgb(233, 89, 12)",
    orange7: "rgb(192, 63, 12)",
    orange8: "rgb(155, 52, 18)",
    orange9: "rgb(125, 45, 18)",
    red0: "rgb(254, 241, 241)",
    red1: "rgb(254, 225, 225)",
    red2: "rgb(254, 200, 200)",
    red3: "rgb(252, 166, 166)",
    red4: "rgb(248, 114, 114)",
    red5: "rgb(239, 67, 67)",
    red6: "rgb(220, 40, 40)",
    red7: "rgb(186, 28, 28)",
    red8: "rgb(152, 27, 27)",
    red9: "rgb(129, 29, 29)",
    warmer0: "rgb(250, 250, 249)",
    warmer1: "rgb(245, 245, 244)",
    warmer2: "rgb(231, 229, 228)",
    warmer3: "rgb(214, 211, 209)",
    warmer4: "rgb(168, 162, 159)",
    warmer5: "rgb(120, 114, 109)",
    warmer6: "rgb(86, 82, 78)",
    warmer7: "rgb(68, 64, 60)",
    warmer8: "rgb(41, 37, 36)",
    warmer9: "rgb(28, 25, 23)",
    warm0: "rgb(250, 250, 250)",
    warm1: "rgb(245, 245, 245)",
    warm2: "rgb(230, 230, 230)",
    warm3: "rgb(212, 212, 212)",
    warm4: "rgb(163, 163, 163)",
    warm5: "rgb(115, 115, 115)",
    warm6: "rgb(82, 82, 82)",
    warm7: "rgb(64, 64, 64)",
    warm8: "rgb(38, 38, 38)",
    warm9: "rgb(23, 23, 23)",
    gray0: "rgb(250, 250, 250)",
    gray1: "rgb(244, 244, 245)",
    gray2: "rgb(228, 228, 231)",
    gray3: "rgb(212, 212, 216)",
    gray4: "rgb(161, 161, 170)",
    gray5: "rgb(113, 113, 122)",
    gray6: "rgb(82, 82, 91)",
    gray7: "rgb(63, 63, 70)",
    gray8: "rgb(39, 39, 42)",
    gray9: "rgb(24, 24, 27)",
    cool0: "rgb(249, 250, 251)",
    cool1: "rgb(243, 244, 246)",
    cool2: "rgb(229, 231, 235)",
    cool3: "rgb(209, 213, 219)",
    cool4: "rgb(156, 163, 176)",
    cool5: "rgb(107, 114, 128)",
    cool6: "rgb(75, 85, 99)",
    cool7: "rgb(56, 66, 82)",
    cool8: "rgb(31, 41, 55)",
    cool9: "rgb(17, 24, 39)",
    cooler0: "rgb(248, 250, 252)",
    cooler1: "rgb(241, 245, 249)",
    cooler2: "rgb(225, 231, 239)",
    cooler3: "rgb(203, 213, 225)",
    cooler4: "rgb(148, 163, 184)",
    cooler5: "rgb(101, 117, 139)",
    cooler6: "rgb(72, 86, 106)",
    cooler7: "rgb(52, 66, 86)",
    cooler8: "rgb(29, 40, 58)",
    cooler9: "rgb(15, 23, 41)",
    hflex: "flex;flex-direction:row",
    vflex: "flex;flex-direction:column",
    xxs: "10px",
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  };
  const customPropertyNameRules = {
    ofx: ["overflow-left", "overflow-right"],
    "overflow-x": ["overflow-left", "overflow-right"],
    ofy: ["overflow-top", "overflow-bottom"],
    "overflow-y": ["overflow-top", "overflow-bottom"],
    bdx: ["border-left", "border-right"],
    "border-x": ["border-left", "border-right"],
    bcx: ["border-left-color", "border-right-color"],
    "border-x-color": ["border-left-color", "border-right-color"],
    bsx: ["border-left-style", "border-right-style"],
    "border-x-style": ["border-left-style", "border-right-style"],
    bwx: ["border-left-width", "border-right-width"],
    "border-x-width": ["border-left-width", "border-right-width"],
    bdy: ["border-top", "border-bottom"],
    "border-y": ["border-top", "border-bottom"],
    bcy: ["border-top-color", "border-bottom-color"],
    "border-y-color": ["border-top-color", "border-bottom-color"],
    bsy: ["border-top-style", "border-bottom-style"],
    "border-y-style": ["border-top-style", "border-bottom-style"],
    bwy: ["border-top-width", "border-bottom-width"],
    "border-y-width": ["border-top-width", "border-bottom-width"],
    rdb: ["border-bottom-left-radius", "border-bottom-right-radius"],
    "border-bottom-radius": [
      "border-bottom-left-radius",
      "border-bottom-right-radius",
    ],
    rdl: ["border-top-left-radius", "border-bottom-left-radius"],
    "border-left-radius": [
      "border-top-left-radius",
      "border-bottom-left-radius",
    ],
    rdr: ["border-top-right-radius", "border-bottom-right-radius"],
    "border-right-radius": [
      "border-top-right-radius",
      "border-bottom-right-radius",
    ],
    rdt: ["border-top-left-radius", "border-top-right-radius"],
    "border-top-radius": ["border-top-left-radius", "border-top-right-radius"],
    mx: ["margin-left", "margin-right"],
    "margin-x": ["margin-left", "margin-right"],
    my: ["margin-top", "margin-bottom"],
    "margin-y": ["margin-top", "margin-bottom"],
    px: ["padding-left", "padding-right"],
    "padding-x": ["padding-left", "padding-right"],
    py: ["padding-top", "padding-bottom"],
    "padding-y": ["padding-top", "padding-bottom"],
  };
  let s = "";
  let tl = [];
  let r = "";
  for (let i = 0; i < strings.length; i++) {
    s += strings[i];
    if (i < values.length) {
      s += values[i];
    }
  }

  /*  b - buffer
    eb - ease buffer
    tl = token list
    i - token list index
    j - token list token char(acter) index
    c - (current) char(acter)
    pl = parsed (tokens) list */
  tl = s.trim().split(/\s/);
  // console.log(tl)
  let b = [];
  let eb = null;
  let pl = [];
  let tp = null;
  for (let i = 0; i < tl.length; i++) {
    for (let j = 0; j < tl[i].length; j++) {
      let c = tl[i][j];
      //console.log(c);
      /* #2 fix - If e{letter} or ease-{property} has been opened, halt splitting until
      rule has been parsed succesfully */
      if (eb && i === tl.length - 1) {
        //console.log(`pillese la i: ${i}\ny la j: ${j}`)
        //console.log(`pillese la tl.length: ${tl.length}\ny la tl[i].length: ${tl[i].length}`)
        //console.log(`sera? ${i === tl.length-2}`)
        //console.log("DIOS")
        //console.log(tl)
        //console.log(eb+' '+tl[i])
        pl.push(eb + " " + tl[i]);
        eb = null;
        break;
      }
      // if before : then propertyName
      if (c === ":") {
        // #2 fix, halts proper parsing/splitting of values until easing value is parsed.
        if (eb) {
          pl.push(eb);
          eb = null;
        }
        //console.log(b);
        // look for it in the not-custom
        let propertyNameRule = propertyNameRules[b];
        if (propertyNameRule) {
          // if transition property name (eaw, ebd, ease-color-delay, etc.)
          if (/^(ea|ease\-all\-)\w+$/.test(b)) {
            // console.log(`DEBUG | ease property: ${b}`);
            if (!tp) {
              tp = b.match(/(?<=^e)\w(?=\w$)|(?<=^ease-)/gm);
              // console.log(`DEBUG | tp: ${tp}`);
              // console.log(`DEBUG | tp === a ? | ${tp === 'a'} | ${typeof tp}`);
              switch (tp[0]) {
                case "a":
                case "all":
                  pl.push("transition-property", "all");
                  break;
                case "b":
                case "box":
                  pl.push(
                    "transition-property",
                    "top,left,right,bottom,width,height,max-width,max-height,padding,margin,border-width,stroke-width,transform"
                  );
                  break;
                case "c":
                case "colors":
                  pl.push(
                    "transition-property",
                    "color,background-color,border-color,outline-color,fill,stroke,box-shadow"
                  );
                  break;
                case "o":
                case "opacity":
                  pl.push("transition-property", "opacity");
                  break;
                case "t":
                case "transform":
                  pl.push("transition-property", "transform");
                  break;
              }
            }
          }
          // if name is two-letter shorthand or ease -> turn off parsing
          // if name is ease-something -> push transition: <property> -> turn off parsing
          if (/^(e\w$|ease\-\w+$)|^ease$/.test(b)) {
            tp = b.match(/(?<=^e)\w(?=$)|(?<=^ease-)\w+/gm);
            pl.push("transition");
            switch (tp[0]) {
              case "a":
              case "all":
                tp = "all";
                break;
              case "b":
              case "box":
                tp =
                  "top,left,right,bottom,width,height,max-width,max-height,padding,margin,border-width,stroke-width,transform";
                break;
              case "c":
              case "colors":
                tp =
                  "color,background-color,border-color,outline-color,fill,stroke,box-shadow";
                break;
              case "o":
              case "opacity":
                tp = "opacity";
                break;
              case "t":
              case "transform":
                tp = "transform";
                break;
            }
            eb = tp;
            b = "";
            continue;
          }
          pl.push(propertyNameRule);
          b = "";
          continue;
        }

        // look for it in the custom
        let customPropertyNameRule = customPropertyNameRules[b];
        if (customPropertyNameRule) {
          // save to pl as Array (With 2 CSS Name Strings)
          pl.push(customPropertyNameRule);
          b = "";
          continue;
        }

        // save to pl
        pl.push(propertyNameRule ? propertyNameRule : b);
        b = "";
        continue;
      }
      // if before end of line then propertyValue
      if (j === tl[i].length - 1) {
        // add the current letter before doing any checking (Otherwise it'll chopped off)
        b += c;
        // look for it
        console.log(b);
        let propertyValueRule = propertyValueRules[b];
        if (propertyValueRule) {
          // save to pl as CSS Value String
          pl.push(propertyValueRule);
          b = "";
          continue;
        }
        // if number (except for value of font-weight)
        if (
          /\d+$/g.test(b) &&
          !/\D+$/g.test(b) &&
          !/font\-weight|fw/.test(pl[pl.length - 1])
        ) {
          b = `${parseInt(b) * 0.25}rem`;
          pl.push(b);
          b = "";
          continue;
        }

        if (eb) {
          //console.log(`al final: ${eb}`)
          eb += " " + b;
          b = "";
          continue;
        }

        pl.push(b);
        b = "";
        continue;
      }
      b += c;
    }
  }
  // console.log(pl)
  // code generation
  for (let i = 0; i < pl.length; i++) {
    if (!Array.isArray(pl[i])) {
      r += pl[i] + ":" + pl[i + 1] + ";";
      i += 1;
      continue;
    } else {
      r += pl[i][0] + ":" + pl[i + 1] + ";" + pl[i][1] + ":" + pl[i + 1] + ";";
      i += 1;
      continue;
    }
  }
  return r;
};
