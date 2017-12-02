window["Playground"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var HtmlGenerator = __webpack_require__(3).HtmlGenerator;

var en = __webpack_require__(12);

var latexjs = __webpack_require__(13);

var generator = new HtmlGenerator({
  hyphenate: true,
  languagePatterns: en
});
/* function to compile latex source into the HTML element preview */

module.exports.compile = function (latex, preview) {
  try {
    generator.reset();
    var result = latexjs.parse(latex, {
      generator: generator
    });

    while (preview.firstChild) preview.removeChild(preview.firstChild);

    preview.appendChild(result.dom());
  } catch (e) {
    var error;

    if (e instanceof latexjs.SyntaxError) {
      error = {
        line: definedOrElse(e.location.start.line, 0),
        column: definedOrElse(e.location.start.column, 0),
        message: e.message,
        found: definedOrElse(e.found, ""),
        expected: definedOrElse(e.expected, ""),
        location: excerpt(latex, definedOrElse(e.location.start.offset, 0))
      };
      preview.innerHTML = "<pre>ERROR: Parsing failure:\n\n" + errorMessage(error, true) + "</pre>";
    } else {
      preview.innerHTML = "<pre>ERROR: " + e.message + "</pre>";
    }

    console.error(e);
  }
};

function definedOrElse(value, fallback) {
  return typeof value !== "undefined" ? value : fallback;
}

;
/* utility function: create a source excerpt */

function excerpt(txt, o) {
  var l = txt.length;
  var b = o - 20;
  if (b < 0) b = 0;
  var e = o + 20;
  if (e > l) e = l;

  var hex = function (ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  };

  var extract = function (txt, pos, len) {
    return txt.substr(pos, len).replace(/\\/g, "\\\\").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x80-\xFF]/g, function (ch) {
      return "\\x" + hex(ch);
    }).replace(/[\u0100-\u0FFF]/g, function (ch) {
      return "\\u0" + hex(ch);
    }).replace(/[\u1000-\uFFFF]/g, function (ch) {
      return "\\u" + hex(ch);
    });
  };

  return {
    prolog: extract(txt, b, o - b),
    token: extract(txt, o, 1),
    epilog: extract(txt, o + 1, e - (o + 1))
  };
}
/* render a useful error message */


function errorMessage(e, noFinalNewline) {
  var l = e.location;
  var prefix1 = "line " + e.line + " (column " + e.column + "): ";
  var prefix2 = "";

  for (var i = 0; i < prefix1.length + l.prolog.length; i++) prefix2 += "-";

  var msg = prefix1 + l.prolog + l.token + l.epilog + "\n" + prefix2 + "^" + "\n" + e.message + (noFinalNewline ? "" : "\n");
  return msg;
}

;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by LiveScript 1.5.0
(function () {
  var entities,
      katex,
      Hypher,
      Macros,
      HtmlGenerator,
      out$ = typeof exports != 'undefined' && exports || this;
  entities = __webpack_require__(4);
  katex = __webpack_require__(10)['default'];
  Hypher = __webpack_require__(11);
  Object.defineProperty(Array.prototype, 'top', {
    enumerable: false,
    configurable: true,
    get: function () {
      return this[this.length - 1];
    },
    set: undefined
  });

  Macros = function () {
    Macros.displayName = 'Macros';
    var prototype = Macros.prototype,
        constructor = Macros;

    function Macros(generator) {
      this._generator = generator;
    }

    Macros.prototype._checkOneM = function (arg) {
      var macro;

      if (arg.length === 1 && arg[0].mandatory) {
        return;
      }

      macro = /Macros\.(\w+)/.exec(new Error().stack.split('\n')[2])[1];
      throw new Error(macro + " expects exactly one mandatory argument!");
    };

    Macros.prototype._appendRemainingArgs = function (node, args) {};

    Macros.prototype._returnRemainingArgs = function (args) {
      return this._generator.createFragment(args.map(function (a) {
        return a.value;
      }));
    };

    Macros.prototype.echo = function (args) {
      var this$ = this;
      return this._generator.createFragment(args.map(function (x) {
        if (x.value) {
          return this$._generator.createFragment([this$._generator.createText(x.mandatory ? "+" : "-"), x.value, this$._generator.createText(x.mandatory ? "+" : "-")]);
        }
      }));
    };

    Macros.prototype.TeX = function () {
      var tex, e;
      tex = this._generator.create(this._generator.inlineBlock);
      tex.setAttribute('class', 'tex');
      tex.appendChild(this._generator.createText('T'));
      e = this._generator.create(this._generator.inlineBlock);
      e.appendChild(this._generator.createText('e'));
      tex.appendChild(e);
      tex.appendChild(this._generator.createText('X'));
      return tex;
    };

    Macros.prototype.LaTeX = function () {
      var latex, a, e;
      latex = this._generator.create(this._generator.inlineBlock);
      latex.setAttribute('class', 'latex');
      latex.appendChild(this._generator.createText('L'));
      a = this._generator.create(this._generator.inlineBlock);
      a.appendChild(this._generator.createText('a'));
      latex.appendChild(a);
      latex.appendChild(this._generator.createText('T'));
      e = this._generator.create(this._generator.inlineBlock);
      e.appendChild(this._generator.createText('e'));
      latex.appendChild(e);
      latex.appendChild(this._generator.createText('X'));
      return latex;
    };

    Macros.prototype.today = function () {
      return this._generator.createText(new Date().toLocaleDateString('en', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    };

    Macros.prototype.newline = function () {
      return this._generator.create(this._generator.linebreak);
    };

    Macros.prototype.negthinspace = function () {
      var ts;
      ts = this._generator.create(this._generator.inlineBlock);
      ts.setAttribute('class', 'negthinspace');
      return ts;
    };

    Macros.prototype.mbox = function (arg) {};

    Macros.prototype.fbox = function (arg) {};

    Macros.prototype.pagestyle = function (arg) {};

    Macros.prototype.include = function (arg) {};

    Macros.prototype.includeonly = function (arg) {};

    Macros.prototype.input = function (arg) {};

    Macros.prototype.vfill = function () {};

    Macros.prototype['break'] = function () {};

    Macros.prototype.nobreak = function () {};

    Macros.prototype.allowbreak = function () {};

    Macros.prototype.newpage = function () {};

    Macros.prototype.linebreak = function () {};

    Macros.prototype.nolinebreak = function () {};

    Macros.prototype.pagebreak = function () {};

    Macros.prototype.nopagebreak = function () {};

    Macros.prototype.samepage = function () {};

    Macros.prototype.enlargethispage = function () {};

    Macros.prototype.thispagestyle = function () {};

    return Macros;
  }();

  out$.HtmlGenerator = HtmlGenerator = function () {
    HtmlGenerator.displayName = 'HtmlGenerator';
    var ligatures,
        symbols,
        serializeFragment,
        debugDOM,
        debugNode,
        debugNodes,
        debugNodeContent,
        prototype = HtmlGenerator.prototype,
        constructor = HtmlGenerator;
    HtmlGenerator.prototype.sp = ' ';
    HtmlGenerator.prototype.brsp = '\u200B ';
    HtmlGenerator.prototype.nbsp = entities.decodeHTML("&nbsp;");
    HtmlGenerator.prototype.zwnj = entities.decodeHTML("&zwnj;");
    HtmlGenerator.prototype.shy = entities.decodeHTML("&shy;");
    HtmlGenerator.prototype.thinsp = entities.decodeHTML("&thinsp;");
    HtmlGenerator.prototype.hyphen = entities.decodeHTML("&hyphen;");
    HtmlGenerator.prototype.minus = entities.decodeHTML("&minus;");
    HtmlGenerator.prototype.endash = entities.decodeHTML("&ndash;");
    HtmlGenerator.prototype.emdash = entities.decodeHTML("&mdash;");
    HtmlGenerator.prototype.part = "part";
    HtmlGenerator.prototype.chapter = "h1";
    HtmlGenerator.prototype.section = "h2";
    HtmlGenerator.prototype.subsection = "h3";
    HtmlGenerator.prototype.subsubsection = "h4";
    HtmlGenerator.prototype.subparagraph = "h6";
    HtmlGenerator.prototype.paragraph = "p";

    HtmlGenerator.prototype.unorderedList = function () {
      var el;
      el = document.createElement("ul");
      el.setAttribute("class", "list");
      return el;
    }();

    HtmlGenerator.prototype.orderedList = function () {
      var el;
      el = document.createElement("ol");
      el.setAttribute("class", "list");
      return el;
    }();

    HtmlGenerator.prototype.listitem = "li";

    HtmlGenerator.prototype.descriptionList = function () {
      var el;
      el = document.createElement("dl");
      el.setAttribute("class", "list");
      return el;
    }();

    HtmlGenerator.prototype.term = "dt";
    HtmlGenerator.prototype.description = "dd";

    HtmlGenerator.prototype.multicols = function () {
      var el;
      el = document.createElement("div");
      el.setAttribute("class", "multicols");
      return function (c) {
        el.setAttribute("style", "column-count:" + c);
        return el;
      };
    }();

    HtmlGenerator.prototype.inlineBlock = "span";
    HtmlGenerator.prototype.block = "div";
    HtmlGenerator.prototype.emph = "em";
    HtmlGenerator.prototype.linebreak = "br";

    HtmlGenerator.prototype.link = function () {
      var el;
      el = document.createElement("a");
      return function (u) {
        el.setAttribute("href", u);
        return el;
      };
    }();

    HtmlGenerator.prototype.table = "div";
    HtmlGenerator.prototype.tableRow = "row";
    HtmlGenerator.prototype.tableCol = "col";

    HtmlGenerator.prototype._isPhrasingContent = function (el) {};

    ligatures = new Map([['ff', '\uFB00'], ['ffi', '\uFB03'], ['ffl', '\uFB04'], ['fi', '\uFB01'], ['fl', '\uFB02'], ['!´', '\u00A1'], ['?´', '\u00BF'], ['<<', '\u00AB'], ['>>', '\u00BB']]);
    symbols = new Map([['nobreakspace', entities.decodeHTML('&nbsp;')], ['thinspace', entities.decodeHTML('&thinsp;')], ['enspace', entities.decodeHTML('&ensp;')], ['enskip', entities.decodeHTML('&ensp;')], ['quad', entities.decodeHTML('&emsp;')], ['qquad', entities.decodeHTML('&emsp;&emsp;')], ['textvisiblespace', '\u2423'], ['ss', 'ß'], ['slash', '/'], ['textasciicircum', '^'], ['textless', '<'], ['textgreater', '>'], ['textasciitilde', '˜'], ['textbackslash', '∖'], ['textbraceleft', '{'], ['textbraceright', '}'], ['textdollar', '$'], ['textunderscore', '_'], ['textquoteleft', entities.decodeHTML('&lsquo;')], ['textquoteright', entities.decodeHTML('&rsquo;')], ['textquotedbl', entities.decodeHTML('&quot;')], ['textquotedblleft', entities.decodeHTML('&ldquo;')], ['textquotedblright', entities.decodeHTML('&rdquo;')], ['quotesinglbase', entities.decodeHTML('&sbquo;')], ['quotedblbase', entities.decodeHTML('&bdquo;')], ['guillemotleft', entities.decodeHTML('&laquo;')], ['guillemotright', entities.decodeHTML('&raquo;')], ['guilsinglleft', entities.decodeHTML('&lsaquo;')], ['guilsinglright', entities.decodeHTML('&rsaquo;')], ['textellipsis', entities.decodeHTML('&hellip;')], ['dots', entities.decodeHTML('&hellip;')], ['textbullet', entities.decodeHTML('&bull;')], ['textemdash', '\u2013'], ['textendash', '\u2014'], ['textdagger', '\u2020'], ['dag', '\u2020'], ['textdaggerdbl', '\u2021'], ['ddag', '\u2021'], ['textperiodcentered', entities.decodeHTML('&middot;')], ['textexclamdown', entities.decodeHTML('&iexcl;')], ['textquestiondown', entities.decodeHTML('&iquest;')], ['textsection', entities.decodeHTML('&sect;')], ['S', entities.decodeHTML('&sect;')], ['textparagraph', entities.decodeHTML('&para;')], ['P', entities.decodeHTML('&para;')], ['checkmark', '\u2713'], ['textordfeminine', entities.decodeHTML('&ordf;')], ['textordmasculine', entities.decodeHTML('&ordm;')], ['textbar', '\u007C'], ['textbardbl', '\u2016'], ['textbigcircle', '\u25CB'], ['textcopyright', entities.decodeHTML('&copy;')], ['copyright', entities.decodeHTML('&copy;')], ['textregistered', entities.decodeHTML('&reg;')], ['texttrademark', entities.decodeHTML('&trade;')], ['textdegree', entities.decodeHTML('&deg;')], ['degree', entities.decodeHTML('&deg;')], ['textcelsius', '\u2103'], ['celsius', '\u2103'], ['textperthousand', entities.decodeHTML('&permil;')], ['perthousand', entities.decodeHTML('&permil;')], ['textpertenthousand', '\u2031'], ['textonehalf', entities.decodeHTML('&frac12;')], ['textthreequarters', entities.decodeHTML('&frac34;')], ['textonequarter', entities.decodeHTML('&frac14;')], ['textfractionsolidus', entities.decodeHTML('&frasl;')], ['textdiv', entities.decodeHTML('&divide;')], ['texttimes', entities.decodeHTML('&times;')], ['textminus', entities.decodeHTML('&minus;')], ['textpm', entities.decodeHTML('&plusmn;')], ['textsurd', entities.decodeHTML('&radic;')], ['textlnot', entities.decodeHTML('&not;')], ['textasteriskcentered', entities.decodeHTML('&lowast;')], ['textonesuperior', entities.decodeHTML('&sup1;')], ['texttwosuperior', entities.decodeHTML('&sup2;')], ['textthreesuperior', entities.decodeHTML('&sup3;')], ['textzerooldstyle', '\uF730'], ['textoneoldstyle', '\uF731'], ['texttwooldstyle', '\uF732'], ['textthreeoldstyle', '\uF733'], ['textfouroldstyle', '\uF734'], ['textfiveoldstyle', '\uF735'], ['textsixoldstyle', '\uF736'], ['textsevenoldstyle', '\uF737'], ['texteightoldstyle', '\uF738'], ['textnineoldstyle', '\uF739'], ['texteuro', entities.decodeHTML('&euro;')], ['textcent', entities.decodeHTML('&cent;')], ['textsterling', entities.decodeHTML('&pound;')], ['pounds', entities.decodeHTML('&pound;')], ['textalpha', entities.decodeHTML('&alpha;')], ['textbeta', entities.decodeHTML('&beta;')], ['textgamma', entities.decodeHTML('&gamma;')], ['textdelta', entities.decodeHTML('&delta;')], ['textepsilon', entities.decodeHTML('&epsilon;')], ['textzeta', entities.decodeHTML('&zeta;')], ['texteta', entities.decodeHTML('&eta;')], ['texttheta', entities.decodeHTML('&thetasym;')], ['textiota', entities.decodeHTML('&iota;')], ['textkappa', entities.decodeHTML('&kappa;')], ['textlambda', entities.decodeHTML('&lambda;')], ['textmu', entities.decodeHTML('&mu;')], ['textnu', entities.decodeHTML('&nu;')], ['textxi', entities.decodeHTML('&xi;')], ['textomikron', entities.decodeHTML('&omicron;')], ['textpi', entities.decodeHTML('&pi;')], ['textrho', entities.decodeHTML('&rho;')], ['textsigma', entities.decodeHTML('&sigma;')], ['texttau', entities.decodeHTML('&tau;')], ['textupsilon', entities.decodeHTML('&upsilon;')], ['textphi', entities.decodeHTML('&phi;')], ['textchi', entities.decodeHTML('&chi;')], ['textpsi', entities.decodeHTML('&psi;')], ['textomega', entities.decodeHTML('&omega;')], ['textAlpha', entities.decodeHTML('&Alpha;')], ['textBeta', entities.decodeHTML('&Beta;')], ['textGamma', entities.decodeHTML('&Gamma;')], ['textDelta', entities.decodeHTML('&Delta;')], ['textEpsilon', entities.decodeHTML('&Epsilon;')], ['textZeta', entities.decodeHTML('&Zeta;')], ['textEta', entities.decodeHTML('&Eta;')], ['textTheta', entities.decodeHTML('&Theta;')], ['textIota', entities.decodeHTML('&Iota;')], ['textKappa', entities.decodeHTML('&Kappa;')], ['textLambda', entities.decodeHTML('&Lambda;')], ['textMu', entities.decodeHTML('&Mu;')], ['textNu', entities.decodeHTML('&Nu;')], ['textXi', entities.decodeHTML('&Xi;')], ['textOmikron', entities.decodeHTML('&Omicron;')], ['textPi', entities.decodeHTML('&Pi;')], ['textRho', entities.decodeHTML('&Rho;')], ['textSigma', entities.decodeHTML('&Sigma;')], ['textTau', entities.decodeHTML('&Tau;')], ['textUpsilon', entities.decodeHTML('&Upsilon;')], ['textPhi', entities.decodeHTML('&Phi;')], ['textChi', entities.decodeHTML('&Chi;')], ['textPsi', entities.decodeHTML('&Psi;')], ['textOmega', entities.decodeHTML('&Omega;')]]);
    HtmlGenerator.prototype._options = null;
    HtmlGenerator.prototype._macros = null;
    HtmlGenerator.prototype._dom = null;
    HtmlGenerator.prototype._attrs = null;
    HtmlGenerator.prototype._groups = null;
    HtmlGenerator.prototype._continue = false;
    HtmlGenerator.prototype._labels = null;
    HtmlGenerator.prototype._refs = null;
    HtmlGenerator.prototype._boxes = null;
    HtmlGenerator.prototype._counters = null;
    HtmlGenerator.prototype._lengths = null;

    function HtmlGenerator(options) {
      this._options = options;

      if (this._options.hyphenate) {
        this._h = new Hypher(this._options.languagePatterns);
      }

      this._macros = new Macros(this);
      this.reset();
    }

    HtmlGenerator.prototype.reset = function () {
      this._dom = document.createDocumentFragment();
      this._attrs = [{}];
      this._groups = [];
      this._labels = new Map();
      this._refs = new Map();
      this._boxes = new Map();
      this._counters = new Map();
      return this._lengths = new Map();
    };

    HtmlGenerator.prototype.character = function (c) {
      return c;
    };

    HtmlGenerator.prototype.ligature = function (l) {
      return ligatures.get(l);
    };

    HtmlGenerator.prototype.controlSymbol = function (c) {
      switch (c) {
        case ' ':
        case '\n':
        case '\r':
        case '\t':
          return this.brsp;

        case '/':
          return this.zwnj;

        case ',':
          return this.thinsp;

        case '-':
          return this.shy;

        default:
          return this.character(c);
      }
    };
    /* @return the DOM representation (DocumentFrament) for immediate use */


    HtmlGenerator.prototype.dom = function () {
      return this._dom;
    };
    /* @return the HTML representation */


    HtmlGenerator.prototype.html = function () {
      return serializeFragment(this._dom);
    };

    HtmlGenerator.prototype.createDocument = function (fs) {
      this._appendChildrenTo(fs, this._dom);
    };

    HtmlGenerator.prototype.create = function (type, children, classes) {
      var el;
      classes == null && (classes = "");

      if (type === this.paragraph || type === this.block) {
        classes += " " + this._blockAttributes();
      }

      if (typeof type === "object") {
        el = type.cloneNode(true);

        if (el.hasAttribute("class")) {
          classes += " " + el.getAttribute("class");
        }
      } else {
        el = document.createElement(type);
      }

      if (this._continue) {
        classes += " continue";
        this._continue = false;
      }

      if (classes.trim()) {
        el.setAttribute("class", classes.trim());
      }

      return this._appendChildrenTo(children, el);
    };

    HtmlGenerator.prototype.createText = function (t) {
      if (!t) {
        return;
      }

      return this._wrapWithAttributes(document.createTextNode(this._options.hyphenate ? this._h.hyphenateText(t) : t));
    };

    HtmlGenerator.prototype.createFragment = function (children) {
      var f;

      if (!children || !children.length) {
        return;
      }

      f = document.createDocumentFragment();
      return this._appendChildrenTo(children, f);
    };

    HtmlGenerator.prototype.createVSpaceSkip = function (skip) {
      var span;
      span = document.createElement("span");
      span.setAttribute("class", "vspace " + skip);
      return span;
    };

    HtmlGenerator.prototype.createVSpaceSkipInline = function (skip) {
      var span;
      span = document.createElement("span");
      span.setAttribute("class", "vspace-inline " + skip);
      return span;
    };

    HtmlGenerator.prototype.createVSpace = function (length) {
      var span;
      span = document.createElement("span");
      span.setAttribute("class", "vspace");
      span.setAttribute("style", "margin-bottom:" + length);
      return span;
    };

    HtmlGenerator.prototype.createVSpaceInline = function (length) {
      var span;
      span = document.createElement("span");
      span.setAttribute("class", "vspace-inline");
      span.setAttribute("style", "margin-bottom:" + length);
      return span;
    };

    HtmlGenerator.prototype.createBreakSpace = function (length) {
      var span;
      span = document.createElement("span");
      span.setAttribute("class", "breakspace");
      span.setAttribute("style", "margin-bottom:" + length);
      return span;
    };

    HtmlGenerator.prototype.createHSpace = function (length) {
      var span;
      span = document.createElement("span");
      span.setAttribute("style", "margin-right:" + length);
      return span;
    };

    HtmlGenerator.prototype.parseMath = function (math, display) {
      var f;
      f = document.createDocumentFragment();
      katex.render(math, f, {
        displayMode: !!display,
        throwOnError: false
      });
      return f;
    };

    HtmlGenerator.prototype.hasSymbol = function (name) {
      return symbols.has(name);
    };

    HtmlGenerator.prototype.getSymbol = function (name) {
      return symbols.get(name);
    };

    HtmlGenerator.prototype.hasMacro = function (name) {
      return typeof this._macros[name] === "function";
    };

    HtmlGenerator.prototype.processMacro = function (name, starred, args) {
      return this._macros[name](args);
    };

    HtmlGenerator.prototype.enterGroup = function () {
      this._attrs.push(Object.assign({}, this._attrs.top));

      ++this._groups[this._groups.length - 1];
    };

    HtmlGenerator.prototype.exitGroup = function () {
      this._attrs.pop();

      return --this._groups[this._groups.length - 1] >= 0;
    };

    HtmlGenerator.prototype.startBalanced = function () {
      this._groups.push(0);
    };

    HtmlGenerator.prototype.endBalanced = function () {
      return this._groups.pop() === 0;
    };

    HtmlGenerator.prototype.isBalanced = function () {
      return this._groups[this._groups.length - 1] === 0;
    };

    HtmlGenerator.prototype['continue'] = function () {
      this._continue = true;
    };

    HtmlGenerator.prototype['break'] = function () {
      this._continue = false;
    };

    HtmlGenerator.prototype.setFontFamily = function (family) {
      this._attrs.top.fontFamily = family;
    };

    HtmlGenerator.prototype.setFontWeight = function (weight) {
      this._attrs.top.fontWeight = weight;
    };

    HtmlGenerator.prototype.setFontShape = function (shape) {
      this._attrs.top.fontShape = shape;
    };

    HtmlGenerator.prototype.setFontSize = function (size) {
      this._attrs.top.fontSize = size;
    };

    HtmlGenerator.prototype.setAlignment = function (align) {
      this._attrs.top.align = align;
    };

    HtmlGenerator.prototype.setTextDecoration = function (decoration) {
      this._attrs.top.textDecoration = decoration;
    };

    HtmlGenerator.prototype._inlineAttributes = function () {
      var cur;
      cur = this._attrs.top;
      return [cur.fontFamily, cur.fontWeight, cur.fontShape, cur.fontSize, cur.textDecoration].join(" ").trim();
    };

    HtmlGenerator.prototype._blockAttributes = function () {
      return [this._attrs.top.align].join(" ".trim());
    };

    HtmlGenerator.prototype._appendChildrenTo = function (children, parent) {
      var i$, to$, yet$, i, e;

      if (children) {
        for (yet$ = true, i$ = 0, to$ = children.length; i$ <= to$; ++i$) {
          i = i$;
          yet$ = false;

          try {
            if (children[i] != null) {
              parent.appendChild(children[i]);
            }
          } catch (e$) {
            e = e$;
            console.log(e);
            console.trace();
            debugNodes(children);
          }
        }

        if (yet$) {
          parent.appendChild(children);
        }
      }

      return parent;
    };

    HtmlGenerator.prototype._wrapWithAttributes = function (el, attrs) {
      var span;

      if (!attrs) {
        attrs = this._inlineAttributes();
      }

      if (attrs) {
        span = document.createElement("span");
        span.setAttribute("class", attrs);
        span.appendChild(el);
        return span;
      }

      return el;
    };

    HtmlGenerator.prototype._addBlockAttributes = function (el) {
      var attr;
      attr = this._blockAttributes();

      if (!attr) {
        return;
      }

      if (el.hasAttribute("class")) {
        attr += " " + el.getAttribute("class");
      }

      return el.setAttribute("class", attr);
    };

    serializeFragment = function (f) {
      var c;
      c = document.createElement("container");
      c.appendChild(f.cloneNode(true));
      return c.innerHTML;
    };

    debugDOM = function (oParent, oCallback) {
      var oNode;

      if (oParent.hasChildNodes()) {
        oNode = oParent.firstChild;

        for (; oNode; oNode = oNode.nextSibling) {
          debugDOM(oNode, oCallback);
        }
      }

      oCallback.call(oParent);
    };

    debugNode = function (n) {
      if (!n) {
        return;
      }

      if (typeof n.nodeName !== "undefined") {
        console.log(n.nodeName, ": ", n.textContent);
      } else {
        console.log("not a node: ", n);
      }
    };

    debugNodes = function (l) {
      var i$, len$, n;

      for (i$ = 0, len$ = l.length; i$ < len$; ++i$) {
        n = l[i$];
        this.debugNode(n);
      }
    };

    debugNodeContent = function () {
      if (this.nodeValue) {
        console.log(this.nodeValue);
      }
    };

    return HtmlGenerator;
  }();
}).call(this);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var encode = __webpack_require__(5),
    decode = __webpack_require__(6);

exports.decode = function (data, level) {
  return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
};

exports.decodeStrict = function (data, level) {
  return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
};

exports.encode = function (data, level) {
  return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
};

exports.encodeXML = encode.XML;
exports.encodeHTML4 = exports.encodeHTML5 = exports.encodeHTML = encode.HTML;
exports.decodeXML = exports.decodeXMLStrict = decode.XML;
exports.decodeHTML4 = exports.decodeHTML5 = exports.decodeHTML = decode.HTML;
exports.decodeHTML4Strict = exports.decodeHTML5Strict = exports.decodeHTMLStrict = decode.HTMLStrict;
exports.escape = encode.escape;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var inverseXML = getInverseObj(__webpack_require__(0)),
    xmlReplacer = getInverseReplacer(inverseXML);
exports.XML = getInverse(inverseXML, xmlReplacer);
var inverseHTML = getInverseObj(__webpack_require__(1)),
    htmlReplacer = getInverseReplacer(inverseHTML);
exports.HTML = getInverse(inverseHTML, htmlReplacer);

function getInverseObj(obj) {
  return Object.keys(obj).sort().reduce(function (inverse, name) {
    inverse[obj[name]] = "&" + name + ";";
    return inverse;
  }, {});
}

function getInverseReplacer(inverse) {
  var single = [],
      multiple = [];
  Object.keys(inverse).forEach(function (k) {
    if (k.length === 1) {
      single.push("\\" + k);
    } else {
      multiple.push(k);
    }
  }); //TODO add ranges

  multiple.unshift("[" + single.join("") + "]");
  return new RegExp(multiple.join("|"), "g");
}

var re_nonASCII = /[^\0-\x7F]/g,
    re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

function singleCharReplacer(c) {
  return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
}

function astralReplacer(c) {
  // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
  var high = c.charCodeAt(0);
  var low = c.charCodeAt(1);
  var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
  return "&#x" + codePoint.toString(16).toUpperCase() + ";";
}

function getInverse(inverse, re) {
  function func(name) {
    return inverse[name];
  }

  return function (data) {
    return data.replace(re, func).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
  };
}

var re_xmlChars = getInverseReplacer(inverseXML);

function escapeXML(data) {
  return data.replace(re_xmlChars, singleCharReplacer).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
}

exports.escape = escapeXML;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var entityMap = __webpack_require__(1),
    legacyMap = __webpack_require__(7),
    xmlMap = __webpack_require__(0),
    decodeCodePoint = __webpack_require__(8);

var decodeXMLStrict = getStrictDecoder(xmlMap),
    decodeHTMLStrict = getStrictDecoder(entityMap);

function getStrictDecoder(map) {
  var keys = Object.keys(map).join("|"),
      replace = getReplacer(map);
  keys += "|#[xX][\\da-fA-F]+|#\\d+";
  var re = new RegExp("&(?:" + keys + ");", "g");
  return function (str) {
    return String(str).replace(re, replace);
  };
}

var decodeHTML = function () {
  var legacy = Object.keys(legacyMap).sort(sorter);
  var keys = Object.keys(entityMap).sort(sorter);

  for (var i = 0, j = 0; i < keys.length; i++) {
    if (legacy[j] === keys[i]) {
      keys[i] += ";?";
      j++;
    } else {
      keys[i] += ";";
    }
  }

  var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
      replace = getReplacer(entityMap);

  function replacer(str) {
    if (str.substr(-1) !== ";") str += ";";
    return replace(str);
  } //TODO consider creating a merged map


  return function (str) {
    return String(str).replace(re, replacer);
  };
}();

function sorter(a, b) {
  return a < b ? 1 : -1;
}

function getReplacer(map) {
  return function replace(str) {
    if (str.charAt(1) === "#") {
      if (str.charAt(2) === "X" || str.charAt(2) === "x") {
        return decodeCodePoint(parseInt(str.substr(3), 16));
      }

      return decodeCodePoint(parseInt(str.substr(2), 10));
    }

    return map[str.slice(1, -1)];
  };
}

module.exports = {
  XML: decodeXMLStrict,
  HTML: decodeHTML,
  HTMLStrict: decodeHTMLStrict
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","QUOT":"\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var decodeMap = __webpack_require__(9);

module.exports = decodeCodePoint; // modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119

function decodeCodePoint(codePoint) {
  if (codePoint >= 0xD800 && codePoint <= 0xDFFF || codePoint > 0x10FFFF) {
    return "\uFFFD";
  }

  if (codePoint in decodeMap) {
    codePoint = decodeMap[codePoint];
  }

  var output = "";

  if (codePoint > 0xFFFF) {
    codePoint -= 0x10000;
    output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
    codePoint = 0xDC00 | codePoint & 0x3FF;
  }

  output += String.fromCharCode(codePoint);
  return output;
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function (f) {
  if (true) {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.katex = f();
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return require(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) s(r[o]);

    return s;
  }({
    1: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _ParseError = require("./src/ParseError");

      var _ParseError2 = _interopRequireDefault(_ParseError);

      var _Settings = require("./src/Settings");

      var _Settings2 = _interopRequireDefault(_Settings);

      var _buildTree = require("./src/buildTree");

      var _buildTree2 = _interopRequireDefault(_buildTree);

      var _parseTree = require("./src/parseTree");

      var _parseTree2 = _interopRequireDefault(_parseTree);

      var _utils = require("./src/utils");

      var _utils2 = _interopRequireDefault(_utils);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * Parse and build an expression, and place that expression in the DOM node
       * given.
       */


      var render = function render(expression, baseNode, options) {
        _utils2.default.clearNode(baseNode);

        var settings = new _Settings2.default(options);
        var tree = (0, _parseTree2.default)(expression, settings);
        var node = (0, _buildTree2.default)(tree, expression, settings).toNode();
        baseNode.appendChild(node);
      }; // KaTeX's styles don't work properly in quirks mode. Print out an error, and
      // disable rendering.

      /* eslint no-console:0 */

      /**
       * This is the main entry point for KaTeX. Here, we expose functions for
       * rendering expressions either to DOM nodes or to markup strings.
       *
       * We also expose the ParseError class to check if errors thrown from KaTeX are
       * errors in the expression, or errors in javascript handling.
       */


      if (typeof document !== "undefined") {
        if (document.compatMode !== "CSS1Compat") {
          typeof console !== "undefined" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your " + "website has a suitable doctype.");

          render = function render() {
            throw new _ParseError2.default("KaTeX doesn't work in quirks mode.");
          };
        }
      }
      /**
       * Parse and build an expression, and return the markup for that.
       */


      var renderToString = function renderToString(expression, options) {
        var settings = new _Settings2.default(options);
        var tree = (0, _parseTree2.default)(expression, settings);
        return (0, _buildTree2.default)(tree, expression, settings).toMarkup();
      };
      /**
       * Parse an expression and return the parse tree.
       */


      var generateParseTree = function generateParseTree(expression, options) {
        var settings = new _Settings2.default(options);
        return (0, _parseTree2.default)(expression, settings);
      };

      var katex = {
        render: render,
        renderToString: renderToString,

        /**
         * NOTE: This method is not currently recommended for public use.
         * The internal tree representation is unstable and is very likely
         * to change. Use at your own risk.
         */
        __parse: generateParseTree,
        ParseError: _ParseError2.default
      };
      exports.default = katex;
    }, {
      "./src/ParseError": 84,
      "./src/Settings": 87,
      "./src/buildTree": 94,
      "./src/parseTree": 109,
      "./src/utils": 115
    }],
    2: [function (require, module, exports) {
      module.exports = {
        "default": require("core-js/library/fn/array/from"),
        __esModule: true
      };
    }, {
      "core-js/library/fn/array/from": 12
    }],
    3: [function (require, module, exports) {
      module.exports = {
        "default": require("core-js/library/fn/get-iterator"),
        __esModule: true
      };
    }, {
      "core-js/library/fn/get-iterator": 13
    }],
    4: [function (require, module, exports) {
      module.exports = {
        "default": require("core-js/library/fn/is-iterable"),
        __esModule: true
      };
    }, {
      "core-js/library/fn/is-iterable": 14
    }],
    5: [function (require, module, exports) {
      module.exports = {
        "default": require("core-js/library/fn/json/stringify"),
        __esModule: true
      };
    }, {
      "core-js/library/fn/json/stringify": 15
    }],
    6: [function (require, module, exports) {
      module.exports = {
        "default": require("core-js/library/fn/object/define-property"),
        __esModule: true
      };
    }, {
      "core-js/library/fn/object/define-property": 16
    }],
    7: [function (require, module, exports) {
      module.exports = {
        "default": require("core-js/library/fn/object/freeze"),
        __esModule: true
      };
    }, {
      "core-js/library/fn/object/freeze": 17
    }],
    8: [function (require, module, exports) {
      "use strict";

      exports.__esModule = true;

      exports.default = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
    }, {}],
    9: [function (require, module, exports) {
      "use strict";

      exports.__esModule = true;

      var _defineProperty = require("../core-js/object/define-property");

      var _defineProperty2 = _interopRequireDefault(_defineProperty);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      exports.default = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            (0, _defineProperty2.default)(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
    }, {
      "../core-js/object/define-property": 6
    }],
    10: [function (require, module, exports) {
      "use strict";

      exports.__esModule = true;

      var _isIterable2 = require("../core-js/is-iterable");

      var _isIterable3 = _interopRequireDefault(_isIterable2);

      var _getIterator2 = require("../core-js/get-iterator");

      var _getIterator3 = _interopRequireDefault(_getIterator2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      exports.default = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if ((0, _isIterable3.default)(Object(arr))) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
    }, {
      "../core-js/get-iterator": 3,
      "../core-js/is-iterable": 4
    }],
    11: [function (require, module, exports) {
      "use strict";

      exports.__esModule = true;

      var _from = require("../core-js/array/from");

      var _from2 = _interopRequireDefault(_from);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      exports.default = function (arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        } else {
          return (0, _from2.default)(arr);
        }
      };
    }, {
      "../core-js/array/from": 2
    }],
    12: [function (require, module, exports) {
      require('../../modules/es6.string.iterator');

      require('../../modules/es6.array.from');

      module.exports = require('../../modules/_core').Array.from;
    }, {
      "../../modules/_core": 24,
      "../../modules/es6.array.from": 73,
      "../../modules/es6.string.iterator": 77
    }],
    13: [function (require, module, exports) {
      require('../modules/web.dom.iterable');

      require('../modules/es6.string.iterator');

      module.exports = require('../modules/core.get-iterator');
    }, {
      "../modules/core.get-iterator": 71,
      "../modules/es6.string.iterator": 77,
      "../modules/web.dom.iterable": 78
    }],
    14: [function (require, module, exports) {
      require('../modules/web.dom.iterable');

      require('../modules/es6.string.iterator');

      module.exports = require('../modules/core.is-iterable');
    }, {
      "../modules/core.is-iterable": 72,
      "../modules/es6.string.iterator": 77,
      "../modules/web.dom.iterable": 78
    }],
    15: [function (require, module, exports) {
      var core = require('../../modules/_core');

      var $JSON = core.JSON || (core.JSON = {
        stringify: JSON.stringify
      });

      module.exports = function stringify(it) {
        // eslint-disable-line no-unused-vars
        return $JSON.stringify.apply($JSON, arguments);
      };
    }, {
      "../../modules/_core": 24
    }],
    16: [function (require, module, exports) {
      require('../../modules/es6.object.define-property');

      var $Object = require('../../modules/_core').Object;

      module.exports = function defineProperty(it, key, desc) {
        return $Object.defineProperty(it, key, desc);
      };
    }, {
      "../../modules/_core": 24,
      "../../modules/es6.object.define-property": 75
    }],
    17: [function (require, module, exports) {
      require('../../modules/es6.object.freeze');

      module.exports = require('../../modules/_core').Object.freeze;
    }, {
      "../../modules/_core": 24,
      "../../modules/es6.object.freeze": 76
    }],
    18: [function (require, module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
    }, {}],
    19: [function (require, module, exports) {
      module.exports = function () {
        /* empty */
      };
    }, {}],
    20: [function (require, module, exports) {
      var isObject = require('./_is-object');

      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
      };
    }, {
      "./_is-object": 40
    }],
    21: [function (require, module, exports) {
      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = require('./_to-iobject');

      var toLength = require('./_to-length');

      var toAbsoluteIndex = require('./_to-absolute-index');

      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value; // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare

          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++]; // eslint-disable-next-line no-self-compare

            if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
          } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
          }
          return !IS_INCLUDES && -1;
        };
      };
    }, {
      "./_to-absolute-index": 62,
      "./_to-iobject": 64,
      "./_to-length": 65
    }],
    22: [function (require, module, exports) {
      // getting tag from 19.1.3.6 Object.prototype.toString()
      var cof = require('./_cof');

      var TAG = require('./_wks')('toStringTag'); // ES3 wrong here


      var ARG = cof(function () {
        return arguments;
      }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

      var tryGet = function (it, key) {
        try {
          return it[key];
        } catch (e) {
          /* empty */
        }
      };

      module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
        : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
        : ARG ? cof(O) // ES3 arguments fallback
        : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
      };
    }, {
      "./_cof": 23,
      "./_wks": 69
    }],
    23: [function (require, module, exports) {
      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
    }, {}],
    24: [function (require, module, exports) {
      var core = module.exports = {
        version: '2.5.1'
      };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    }, {}],
    25: [function (require, module, exports) {
      'use strict';

      var $defineProperty = require('./_object-dp');

      var createDesc = require('./_property-desc');

      module.exports = function (object, index, value) {
        if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
      };
    }, {
      "./_object-dp": 50,
      "./_property-desc": 56
    }],
    26: [function (require, module, exports) {
      // optional / simple context binding
      var aFunction = require('./_a-function');

      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;

        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };

          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };

          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }

        return function ()
        /* ...args */
        {
          return fn.apply(that, arguments);
        };
      };
    }, {
      "./_a-function": 18
    }],
    27: [function (require, module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
    }, {}],
    28: [function (require, module, exports) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !require('./_fails')(function () {
        return Object.defineProperty({}, 'a', {
          get: function () {
            return 7;
          }
        }).a != 7;
      });
    }, {
      "./_fails": 32
    }],
    29: [function (require, module, exports) {
      var isObject = require('./_is-object');

      var document = require('./_global').document; // typeof document.createElement is 'object' in old IE


      var is = isObject(document) && isObject(document.createElement);

      module.exports = function (it) {
        return is ? document.createElement(it) : {};
      };
    }, {
      "./_global": 33,
      "./_is-object": 40
    }],
    30: [function (require, module, exports) {
      // IE 8- don't enum bug keys
      module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
    }, {}],
    31: [function (require, module, exports) {
      var global = require('./_global');

      var core = require('./_core');

      var ctx = require('./_ctx');

      var hide = require('./_hide');

      var PROTOTYPE = 'prototype';

      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var IS_WRAP = type & $export.W;
        var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
        var expProto = exports[PROTOTYPE];
        var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
        var key, own, out;
        if (IS_GLOBAL) source = name;

        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined;
          if (own && key in exports) continue; // export native or passed

          out = own ? target[key] : source[key]; // prevent global pollution for namespaces

          exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out ? function (C) {
            var F = function (a, b, c) {
              if (this instanceof C) {
                switch (arguments.length) {
                  case 0:
                    return new C();

                  case 1:
                    return new C(a);

                  case 2:
                    return new C(a, b);
                }

                return new C(a, b, c);
              }

              return C.apply(this, arguments);
            };

            F[PROTOTYPE] = C[PROTOTYPE];
            return F; // make static versions for prototype methods
          }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

          if (IS_PROTO) {
            (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

            if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
          }
        }
      }; // type bitmap


      $export.F = 1; // forced

      $export.G = 2; // global

      $export.S = 4; // static

      $export.P = 8; // proto

      $export.B = 16; // bind

      $export.W = 32; // wrap

      $export.U = 64; // safe

      $export.R = 128; // real proto method for `library`

      module.exports = $export;
    }, {
      "./_core": 24,
      "./_ctx": 26,
      "./_global": 33,
      "./_hide": 35
    }],
    32: [function (require, module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    }, {}],
    33: [function (require, module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
      : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    }, {}],
    34: [function (require, module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;

      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
    }, {}],
    35: [function (require, module, exports) {
      var dP = require('./_object-dp');

      var createDesc = require('./_property-desc');

      module.exports = require('./_descriptors') ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
    }, {
      "./_descriptors": 28,
      "./_object-dp": 50,
      "./_property-desc": 56
    }],
    36: [function (require, module, exports) {
      var document = require('./_global').document;

      module.exports = document && document.documentElement;
    }, {
      "./_global": 33
    }],
    37: [function (require, module, exports) {
      module.exports = !require('./_descriptors') && !require('./_fails')(function () {
        return Object.defineProperty(require('./_dom-create')('div'), 'a', {
          get: function () {
            return 7;
          }
        }).a != 7;
      });
    }, {
      "./_descriptors": 28,
      "./_dom-create": 29,
      "./_fails": 32
    }],
    38: [function (require, module, exports) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = require('./_cof'); // eslint-disable-next-line no-prototype-builtins


      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };
    }, {
      "./_cof": 23
    }],
    39: [function (require, module, exports) {
      // check on default Array iterator
      var Iterators = require('./_iterators');

      var ITERATOR = require('./_wks')('iterator');

      var ArrayProto = Array.prototype;

      module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
      };
    }, {
      "./_iterators": 46,
      "./_wks": 69
    }],
    40: [function (require, module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
    }, {}],
    41: [function (require, module, exports) {
      // call something on iterator step with safe closing on error
      var anObject = require('./_an-object');

      module.exports = function (iterator, fn, value, entries) {
        try {
          return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
        } catch (e) {
          var ret = iterator['return'];
          if (ret !== undefined) anObject(ret.call(iterator));
          throw e;
        }
      };
    }, {
      "./_an-object": 20
    }],
    42: [function (require, module, exports) {
      'use strict';

      var create = require('./_object-create');

      var descriptor = require('./_property-desc');

      var setToStringTag = require('./_set-to-string-tag');

      var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

      require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () {
        return this;
      });

      module.exports = function (Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, {
          next: descriptor(1, next)
        });
        setToStringTag(Constructor, NAME + ' Iterator');
      };
    }, {
      "./_hide": 35,
      "./_object-create": 49,
      "./_property-desc": 56,
      "./_set-to-string-tag": 58,
      "./_wks": 69
    }],
    43: [function (require, module, exports) {
      'use strict';

      var LIBRARY = require('./_library');

      var $export = require('./_export');

      var redefine = require('./_redefine');

      var hide = require('./_hide');

      var has = require('./_has');

      var Iterators = require('./_iterators');

      var $iterCreate = require('./_iter-create');

      var setToStringTag = require('./_set-to-string-tag');

      var getPrototypeOf = require('./_object-gpo');

      var ITERATOR = require('./_wks')('iterator');

      var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

      var FF_ITERATOR = '@@iterator';
      var KEYS = 'keys';
      var VALUES = 'values';

      var returnThis = function () {
        return this;
      };

      module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);

        var getMethod = function (kind) {
          if (!BUGGY && kind in proto) return proto[kind];

          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };

            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }

          return function entries() {
            return new Constructor(this, kind);
          };
        };

        var TAG = NAME + ' Iterator';
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base.prototype;
        var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
        var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
        var methods, key, IteratorPrototype; // Fix native

        if ($anyNative) {
          IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

          if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

            if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
          }
        } // fix Array#{values, @@iterator}.name in V8 / FF


        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true;

          $default = function values() {
            return $native.call(this);
          };
        } // Define iterator


        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        } // Plug for library


        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;

        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
          };
          if (FORCED) for (key in methods) {
            if (!(key in proto)) redefine(proto, key, methods[key]);
          } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        }

        return methods;
      };
    }, {
      "./_export": 31,
      "./_has": 34,
      "./_hide": 35,
      "./_iter-create": 42,
      "./_iterators": 46,
      "./_library": 47,
      "./_object-gpo": 52,
      "./_redefine": 57,
      "./_set-to-string-tag": 58,
      "./_wks": 69
    }],
    44: [function (require, module, exports) {
      var ITERATOR = require('./_wks')('iterator');

      var SAFE_CLOSING = false;

      try {
        var riter = [7][ITERATOR]();

        riter['return'] = function () {
          SAFE_CLOSING = true;
        }; // eslint-disable-next-line no-throw-literal


        Array.from(riter, function () {
          throw 2;
        });
      } catch (e) {
        /* empty */
      }

      module.exports = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return false;
        var safe = false;

        try {
          var arr = [7];
          var iter = arr[ITERATOR]();

          iter.next = function () {
            return {
              done: safe = true
            };
          };

          arr[ITERATOR] = function () {
            return iter;
          };

          exec(arr);
        } catch (e) {
          /* empty */
        }

        return safe;
      };
    }, {
      "./_wks": 69
    }],
    45: [function (require, module, exports) {
      module.exports = function (done, value) {
        return {
          value: value,
          done: !!done
        };
      };
    }, {}],
    46: [function (require, module, exports) {
      module.exports = {};
    }, {}],
    47: [function (require, module, exports) {
      module.exports = true;
    }, {}],
    48: [function (require, module, exports) {
      var META = require('./_uid')('meta');

      var isObject = require('./_is-object');

      var has = require('./_has');

      var setDesc = require('./_object-dp').f;

      var id = 0;

      var isExtensible = Object.isExtensible || function () {
        return true;
      };

      var FREEZE = !require('./_fails')(function () {
        return isExtensible(Object.preventExtensions({}));
      });

      var setMeta = function (it) {
        setDesc(it, META, {
          value: {
            i: 'O' + ++id,
            // object ID
            w: {} // weak collections IDs

          }
        });
      };

      var fastKey = function (it, create) {
        // return primitive with prefix
        if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return 'F'; // not necessary to add metadata

          if (!create) return 'E'; // add missing metadata

          setMeta(it); // return object ID
        }

        return it[META].i;
      };

      var getWeak = function (it, create) {
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return true; // not necessary to add metadata

          if (!create) return false; // add missing metadata

          setMeta(it); // return hash weak collections IDs
        }

        return it[META].w;
      }; // add metadata on freeze-family methods calling


      var onFreeze = function (it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
        return it;
      };

      var meta = module.exports = {
        KEY: META,
        NEED: false,
        fastKey: fastKey,
        getWeak: getWeak,
        onFreeze: onFreeze
      };
    }, {
      "./_fails": 32,
      "./_has": 34,
      "./_is-object": 40,
      "./_object-dp": 50,
      "./_uid": 68
    }],
    49: [function (require, module, exports) {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      var anObject = require('./_an-object');

      var dPs = require('./_object-dps');

      var enumBugKeys = require('./_enum-bug-keys');

      var IE_PROTO = require('./_shared-key')('IE_PROTO');

      var Empty = function () {
        /* empty */
      };

      var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

      var createDict = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = require('./_dom-create')('iframe');

        var i = enumBugKeys.length;
        var lt = '<';
        var gt = '>';
        var iframeDocument;
        iframe.style.display = 'none';

        require('./_html').appendChild(iframe);

        iframe.src = 'javascript:'; // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);

        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
        iframeDocument.close();
        createDict = iframeDocument.F;

        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];

        return createDict();
      };

      module.exports = Object.create || function create(O, Properties) {
        var result;

        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty();
          Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

          result[IE_PROTO] = O;
        } else result = createDict();

        return Properties === undefined ? result : dPs(result, Properties);
      };
    }, {
      "./_an-object": 20,
      "./_dom-create": 29,
      "./_enum-bug-keys": 30,
      "./_html": 36,
      "./_object-dps": 51,
      "./_shared-key": 59
    }],
    50: [function (require, module, exports) {
      var anObject = require('./_an-object');

      var IE8_DOM_DEFINE = require('./_ie8-dom-define');

      var toPrimitive = require('./_to-primitive');

      var dP = Object.defineProperty;
      exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return dP(O, P, Attributes);
        } catch (e) {
          /* empty */
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
    }, {
      "./_an-object": 20,
      "./_descriptors": 28,
      "./_ie8-dom-define": 37,
      "./_to-primitive": 67
    }],
    51: [function (require, module, exports) {
      var dP = require('./_object-dp');

      var anObject = require('./_an-object');

      var getKeys = require('./_object-keys');

      module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = getKeys(Properties);
        var length = keys.length;
        var i = 0;
        var P;

        while (length > i) dP.f(O, P = keys[i++], Properties[P]);

        return O;
      };
    }, {
      "./_an-object": 20,
      "./_descriptors": 28,
      "./_object-dp": 50,
      "./_object-keys": 54
    }],
    52: [function (require, module, exports) {
      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
      var has = require('./_has');

      var toObject = require('./_to-object');

      var IE_PROTO = require('./_shared-key')('IE_PROTO');

      var ObjectProto = Object.prototype;

      module.exports = Object.getPrototypeOf || function (O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];

        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        }

        return O instanceof Object ? ObjectProto : null;
      };
    }, {
      "./_has": 34,
      "./_shared-key": 59,
      "./_to-object": 66
    }],
    53: [function (require, module, exports) {
      var has = require('./_has');

      var toIObject = require('./_to-iobject');

      var arrayIndexOf = require('./_array-includes')(false);

      var IE_PROTO = require('./_shared-key')('IE_PROTO');

      module.exports = function (object, names) {
        var O = toIObject(object);
        var i = 0;
        var result = [];
        var key;

        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key); // Don't enum bug & hidden keys


        while (names.length > i) if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        }

        return result;
      };
    }, {
      "./_array-includes": 21,
      "./_has": 34,
      "./_shared-key": 59,
      "./_to-iobject": 64
    }],
    54: [function (require, module, exports) {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = require('./_object-keys-internal');

      var enumBugKeys = require('./_enum-bug-keys');

      module.exports = Object.keys || function keys(O) {
        return $keys(O, enumBugKeys);
      };
    }, {
      "./_enum-bug-keys": 30,
      "./_object-keys-internal": 53
    }],
    55: [function (require, module, exports) {
      // most Object methods by ES6 should accept primitives
      var $export = require('./_export');

      var core = require('./_core');

      var fails = require('./_fails');

      module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY];
        var exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
          fn(1);
        }), 'Object', exp);
      };
    }, {
      "./_core": 24,
      "./_export": 31,
      "./_fails": 32
    }],
    56: [function (require, module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
    }, {}],
    57: [function (require, module, exports) {
      module.exports = require('./_hide');
    }, {
      "./_hide": 35
    }],
    58: [function (require, module, exports) {
      var def = require('./_object-dp').f;

      var has = require('./_has');

      var TAG = require('./_wks')('toStringTag');

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
          configurable: true,
          value: tag
        });
      };
    }, {
      "./_has": 34,
      "./_object-dp": 50,
      "./_wks": 69
    }],
    59: [function (require, module, exports) {
      var shared = require('./_shared')('keys');

      var uid = require('./_uid');

      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key));
      };
    }, {
      "./_shared": 60,
      "./_uid": 68
    }],
    60: [function (require, module, exports) {
      var global = require('./_global');

      var SHARED = '__core-js_shared__';
      var store = global[SHARED] || (global[SHARED] = {});

      module.exports = function (key) {
        return store[key] || (store[key] = {});
      };
    }, {
      "./_global": 33
    }],
    61: [function (require, module, exports) {
      var toInteger = require('./_to-integer');

      var defined = require('./_defined'); // true  -> String#at
      // false -> String#codePointAt


      module.exports = function (TO_STRING) {
        return function (that, pos) {
          var s = String(defined(that));
          var i = toInteger(pos);
          var l = s.length;
          var a, b;
          if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
          a = s.charCodeAt(i);
          return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
        };
      };
    }, {
      "./_defined": 27,
      "./_to-integer": 63
    }],
    62: [function (require, module, exports) {
      var toInteger = require('./_to-integer');

      var max = Math.max;
      var min = Math.min;

      module.exports = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
    }, {
      "./_to-integer": 63
    }],
    63: [function (require, module, exports) {
      // 7.1.4 ToInteger
      var ceil = Math.ceil;
      var floor = Math.floor;

      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
    }, {}],
    64: [function (require, module, exports) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = require('./_iobject');

      var defined = require('./_defined');

      module.exports = function (it) {
        return IObject(defined(it));
      };
    }, {
      "./_defined": 27,
      "./_iobject": 38
    }],
    65: [function (require, module, exports) {
      // 7.1.15 ToLength
      var toInteger = require('./_to-integer');

      var min = Math.min;

      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };
    }, {
      "./_to-integer": 63
    }],
    66: [function (require, module, exports) {
      // 7.1.13 ToObject(argument)
      var defined = require('./_defined');

      module.exports = function (it) {
        return Object(defined(it));
      };
    }, {
      "./_defined": 27
    }],
    67: [function (require, module, exports) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = require('./_is-object'); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string


      module.exports = function (it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
    }, {
      "./_is-object": 40
    }],
    68: [function (require, module, exports) {
      var id = 0;
      var px = Math.random();

      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };
    }, {}],
    69: [function (require, module, exports) {
      var store = require('./_shared')('wks');

      var uid = require('./_uid');

      var Symbol = require('./_global').Symbol;

      var USE_SYMBOL = typeof Symbol == 'function';

      var $exports = module.exports = function (name) {
        return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
      };

      $exports.store = store;
    }, {
      "./_global": 33,
      "./_shared": 60,
      "./_uid": 68
    }],
    70: [function (require, module, exports) {
      var classof = require('./_classof');

      var ITERATOR = require('./_wks')('iterator');

      var Iterators = require('./_iterators');

      module.exports = require('./_core').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
      };
    }, {
      "./_classof": 22,
      "./_core": 24,
      "./_iterators": 46,
      "./_wks": 69
    }],
    71: [function (require, module, exports) {
      var anObject = require('./_an-object');

      var get = require('./core.get-iterator-method');

      module.exports = require('./_core').getIterator = function (it) {
        var iterFn = get(it);
        if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
        return anObject(iterFn.call(it));
      };
    }, {
      "./_an-object": 20,
      "./_core": 24,
      "./core.get-iterator-method": 70
    }],
    72: [function (require, module, exports) {
      var classof = require('./_classof');

      var ITERATOR = require('./_wks')('iterator');

      var Iterators = require('./_iterators');

      module.exports = require('./_core').isIterable = function (it) {
        var O = Object(it);
        return O[ITERATOR] !== undefined || '@@iterator' in O // eslint-disable-next-line no-prototype-builtins
        || Iterators.hasOwnProperty(classof(O));
      };
    }, {
      "./_classof": 22,
      "./_core": 24,
      "./_iterators": 46,
      "./_wks": 69
    }],
    73: [function (require, module, exports) {
      'use strict';

      var ctx = require('./_ctx');

      var $export = require('./_export');

      var toObject = require('./_to-object');

      var call = require('./_iter-call');

      var isArrayIter = require('./_is-array-iter');

      var toLength = require('./_to-length');

      var createProperty = require('./_create-property');

      var getIterFn = require('./core.get-iterator-method');

      $export($export.S + $export.F * !require('./_iter-detect')(function (iter) {
        Array.from(iter);
      }), 'Array', {
        // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
        from: function from(arrayLike
        /* , mapfn = undefined, thisArg = undefined */
        ) {
          var O = toObject(arrayLike);
          var C = typeof this == 'function' ? this : Array;
          var aLen = arguments.length;
          var mapfn = aLen > 1 ? arguments[1] : undefined;
          var mapping = mapfn !== undefined;
          var index = 0;
          var iterFn = getIterFn(O);
          var length, result, step, iterator;
          if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

          if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
              createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
            }
          } else {
            length = toLength(O.length);

            for (result = new C(length); length > index; index++) {
              createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
            }
          }

          result.length = index;
          return result;
        }
      });
    }, {
      "./_create-property": 25,
      "./_ctx": 26,
      "./_export": 31,
      "./_is-array-iter": 39,
      "./_iter-call": 41,
      "./_iter-detect": 44,
      "./_to-length": 65,
      "./_to-object": 66,
      "./core.get-iterator-method": 70
    }],
    74: [function (require, module, exports) {
      'use strict';

      var addToUnscopables = require('./_add-to-unscopables');

      var step = require('./_iter-step');

      var Iterators = require('./_iterators');

      var toIObject = require('./_to-iobject'); // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()


      module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
        this._t = toIObject(iterated); // target

        this._i = 0; // next index

        this._k = kind; // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
      }, function () {
        var O = this._t;
        var kind = this._k;
        var index = this._i++;

        if (!O || index >= O.length) {
          this._t = undefined;
          return step(1);
        }

        if (kind == 'keys') return step(0, index);
        if (kind == 'values') return step(0, O[index]);
        return step(0, [index, O[index]]);
      }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

      Iterators.Arguments = Iterators.Array;
      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');
    }, {
      "./_add-to-unscopables": 19,
      "./_iter-define": 43,
      "./_iter-step": 45,
      "./_iterators": 46,
      "./_to-iobject": 64
    }],
    75: [function (require, module, exports) {
      var $export = require('./_export'); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


      $export($export.S + $export.F * !require('./_descriptors'), 'Object', {
        defineProperty: require('./_object-dp').f
      });
    }, {
      "./_descriptors": 28,
      "./_export": 31,
      "./_object-dp": 50
    }],
    76: [function (require, module, exports) {
      // 19.1.2.5 Object.freeze(O)
      var isObject = require('./_is-object');

      var meta = require('./_meta').onFreeze;

      require('./_object-sap')('freeze', function ($freeze) {
        return function freeze(it) {
          return $freeze && isObject(it) ? $freeze(meta(it)) : it;
        };
      });
    }, {
      "./_is-object": 40,
      "./_meta": 48,
      "./_object-sap": 55
    }],
    77: [function (require, module, exports) {
      'use strict';

      var $at = require('./_string-at')(true); // 21.1.3.27 String.prototype[@@iterator]()


      require('./_iter-define')(String, 'String', function (iterated) {
        this._t = String(iterated); // target

        this._i = 0; // next index
        // 21.1.5.2.1 %StringIteratorPrototype%.next()
      }, function () {
        var O = this._t;
        var index = this._i;
        var point;
        if (index >= O.length) return {
          value: undefined,
          done: true
        };
        point = $at(O, index);
        this._i += point.length;
        return {
          value: point,
          done: false
        };
      });
    }, {
      "./_iter-define": 43,
      "./_string-at": 61
    }],
    78: [function (require, module, exports) {
      require('./es6.array.iterator');

      var global = require('./_global');

      var hide = require('./_hide');

      var Iterators = require('./_iterators');

      var TO_STRING_TAG = require('./_wks')('toStringTag');

      var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

      for (var i = 0; i < DOMIterables.length; i++) {
        var NAME = DOMIterables[i];
        var Collection = global[NAME];
        var proto = Collection && Collection.prototype;
        if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
        Iterators[NAME] = Iterators.Array;
      }
    }, {
      "./_global": 33,
      "./_hide": 35,
      "./_iterators": 46,
      "./_wks": 69,
      "./es6.array.iterator": 74
    }],
    79: [function (require, module, exports) {
      function getRelocatable(re) {
        // In the future, this could use a WeakMap instead of an expando.
        if (!re.__matchAtRelocatable) {
          // Disjunctions are the lowest-precedence operator, so we can make any
          // pattern match the empty string by appending `|()` to it:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-patterns
          var source = re.source + '|()'; // We always make the new regex global.

          var flags = 'g' + (re.ignoreCase ? 'i' : '') + (re.multiline ? 'm' : '') + (re.unicode ? 'u' : '') // sticky (/.../y) doesn't make sense in conjunction with our relocation
          // logic, so we ignore it here.
          ;
          re.__matchAtRelocatable = new RegExp(source, flags);
        }

        return re.__matchAtRelocatable;
      }

      function matchAt(re, str, pos) {
        if (re.global || re.sticky) {
          throw new Error('matchAt(...): Only non-global regexes are supported');
        }

        var reloc = getRelocatable(re);
        reloc.lastIndex = pos;
        var match = reloc.exec(str); // Last capturing group is our sentinel that indicates whether the regex
        // matched at the given location.

        if (match[match.length - 1] == null) {
          // Original regex matched.
          match.length = match.length - 1;
          return match;
        } else {
          return null;
        }
      }

      module.exports = matchAt;
    }, {}],
    80: [function (require, module, exports) {
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */
      'use strict';
      /* eslint-disable no-unused-vars */

      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;

      function toObject(val) {
        if (val === null || val === undefined) {
          throw new TypeError('Object.assign cannot be called with null or undefined');
        }

        return Object(val);
      }

      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          } // Detect buggy property enumeration order in older V8 versions.
          // https://bugs.chromium.org/p/v8/issues/detail?id=4118


          var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

          test1[5] = 'de';

          if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
          } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


          var test2 = {};

          for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
          }

          var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
          });

          if (order2.join('') !== '0123456789') {
            return false;
          } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


          var test3 = {};
          'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
          });

          if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
          }

          return true;
        } catch (err) {
          // We don't expect any of the above to throw, but better to be safe.
          return false;
        }
      }

      module.exports = shouldUseNative() ? Object.assign : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);

            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };
    }, {}],
    81: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require("babel-runtime/helpers/createClass");

      var _createClass3 = _interopRequireDefault(_createClass2);

      var _matchAt = require("match-at");

      var _matchAt2 = _interopRequireDefault(_matchAt);

      var _ParseError = require("./ParseError");

      var _ParseError2 = _interopRequireDefault(_ParseError);

      var _SourceLocation = require("./SourceLocation");

      var _SourceLocation2 = _interopRequireDefault(_SourceLocation);

      var _Token = require("./Token");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /* The following tokenRegex
       * - matches typical whitespace (but not NBSP etc.) using its first group
       * - matches comments (must have trailing newlines)
       * - does not match any control character \x00-\x1f except whitespace
       * - does not match a bare backslash
       * - matches any ASCII character except those just mentioned
       * - does not match the BMP private use area \uE000-\uF8FF
       * - does not match bare surrogate code units
       * - matches any BMP character except for those just described
       * - matches any valid Unicode surrogate pair
       * - matches a backslash followed by one or more letters
       * - matches a backslash followed by any BMP character, including newline
       * Just because the Lexer matches something doesn't mean it's valid input:
       * If there is no matching function or symbol definition, the Parser will
       * still reject the input.
       */

      /**
       * The Lexer class handles tokenizing the input in various ways. Since our
       * parser expects us to be able to backtrack, the lexer allows lexing from any
       * given starting point.
       *
       * Its main exposed function is the `lex` function, which takes a position to
       * lex from and a type of token to lex. It defers to the appropriate `_innerLex`
       * function.
       *
       * The various `_innerLex` functions perform the actual lexing of different
       * kinds.
       */


      var commentRegexString = "%[^\n]*[\n]";
      var tokenRegex = new RegExp("([ \r\n\t]+)|" + ( // whitespace
      "(" + commentRegexString + "|") + // comments
      "[!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + // single codepoint
      "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
      "|\\\\verb\\*([^]).*?\\3" + // \verb*
      "|\\\\verb([^*a-zA-Z]).*?\\4" + // \verb unstarred
      "|\\\\(?:[a-zA-Z@]+|[^\uD800-\uDFFF])" + // function name
      ")");
      var commentRegex = new RegExp(commentRegexString);
      /** Main Lexer class */

      var Lexer = function () {
        function Lexer(input) {
          (0, _classCallCheck3.default)(this, Lexer);
          this.input = input;
          this.pos = 0;
        }
        /**
         * This function lexes a single token.
         */


        (0, _createClass3.default)(Lexer, [{
          key: "lex",
          value: function lex() {
            var input = this.input;
            var pos = this.pos;

            if (pos === input.length) {
              return new _Token.Token("EOF", new _SourceLocation2.default(this, pos, pos));
            }

            var match = (0, _matchAt2.default)(tokenRegex, input, pos);

            if (match === null) {
              throw new _ParseError2.default("Unexpected character: '" + input[pos] + "'", new _Token.Token(input[pos], new _SourceLocation2.default(this, pos, pos + 1)));
            }

            var text = match[2] || " ";
            var start = this.pos;
            this.pos += match[0].length;
            var end = this.pos;

            if (commentRegex.test(text)) {
              return this.lex();
            } else {
              return new _Token.Token(text, new _SourceLocation2.default(this, start, end));
            }
          }
        }]);
        return Lexer;
      }();

      exports.default = Lexer;
    }, {
      "./ParseError": 84,
      "./SourceLocation": 88,
      "./Token": 90,
      "babel-runtime/helpers/classCallCheck": 8,
      "babel-runtime/helpers/createClass": 9,
      "match-at": 79
    }],
    82: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

      var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require("babel-runtime/helpers/createClass");

      var _createClass3 = _interopRequireDefault(_createClass2);

      var _Lexer = require("./Lexer");

      var _Lexer2 = _interopRequireDefault(_Lexer);

      var _Token = require("./Token");

      var _macros = require("./macros");

      var _macros2 = _interopRequireDefault(_macros);

      var _ParseError = require("./ParseError");

      var _ParseError2 = _interopRequireDefault(_ParseError);

      var _objectAssign = require("object-assign");

      var _objectAssign2 = _interopRequireDefault(_objectAssign);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var MacroExpander = function () {
        function MacroExpander(input, macros) {
          (0, _classCallCheck3.default)(this, MacroExpander);
          this.lexer = new _Lexer2.default(input);
          this.macros = (0, _objectAssign2.default)({}, _macros2.default, macros);
          this.stack = []; // contains tokens in REVERSE order

          this.discardedWhiteSpace = [];
        }
        /**
         * Returns the topmost token on the stack, without expanding it.
         * Similar in behavior to TeX's `\futurelet`.
         */


        (0, _createClass3.default)(MacroExpander, [{
          key: "future",
          value: function future() {
            if (this.stack.length === 0) {
              this.stack.push(this.lexer.lex());
            }

            return this.stack[this.stack.length - 1];
          }
          /**
           * Remove and return the next unexpanded token.
           */

        }, {
          key: "popToken",
          value: function popToken() {
            this.future(); // ensure non-empty stack

            return this.stack.pop();
          }
          /**
           * Consume all following space tokens, without expansion.
           */

        }, {
          key: "consumeSpaces",
          value: function consumeSpaces() {
            for (;;) {
              var token = this.future();

              if (token.text === " ") {
                this.stack.pop();
              } else {
                break;
              }
            }
          }
          /**
           * Expand the next token only once if possible.
           *
           * If the token is expanded, the resulting tokens will be pushed onto
           * the stack in reverse order and will be returned as an array,
           * also in reverse order.
           *
           * If not, the next token will be returned without removing it
           * from the stack.  This case can be detected by a `Token` return value
           * instead of an `Array` return value.
           *
           * In either case, the next token will be on the top of the stack,
           * or the stack will be empty.
           *
           * Used to implement `expandAfterFuture` and `expandNextToken`.
           *
           * At the moment, macro expansion doesn't handle delimited macros,
           * i.e. things like those defined by \def\foo#1\end{…}.
           * See the TeX book page 202ff. for details on how those should behave.
           */

        }, {
          key: "expandOnce",
          value: function expandOnce() {
            var _stack;

            var topToken = this.popToken();
            var name = topToken.text;
            var isMacro = name.charAt(0) === "\\";

            if (isMacro) {
              // Consume all spaces after \macro
              this.consumeSpaces();
            }

            if (!(isMacro && this.macros.hasOwnProperty(name))) {
              // Fully expanded
              this.stack.push(topToken);
              return topToken;
            }

            var _getExpansion2 = this._getExpansion(name),
                tokens = _getExpansion2.tokens,
                numArgs = _getExpansion2.numArgs;

            var expansion = tokens;

            if (numArgs) {
              var args = []; // obtain arguments, either single token or balanced {…} group

              for (var i = 0; i < numArgs; ++i) {
                this.consumeSpaces(); // ignore spaces before each argument

                var startOfArg = this.popToken();

                if (startOfArg.text === "{") {
                  var arg = [];
                  var depth = 1;

                  while (depth !== 0) {
                    var tok = this.popToken();
                    arg.push(tok);

                    if (tok.text === "{") {
                      ++depth;
                    } else if (tok.text === "}") {
                      --depth;
                    } else if (tok.text === "EOF") {
                      throw new _ParseError2.default("End of input in macro argument", startOfArg);
                    }
                  }

                  arg.pop(); // remove last }

                  arg.reverse(); // like above, to fit in with stack order

                  args[i] = arg;
                } else if (startOfArg.text === "EOF") {
                  throw new _ParseError2.default("End of input expecting macro argument", topToken);
                } else {
                  args[i] = [startOfArg];
                }
              } // paste arguments in place of the placeholders


              expansion = expansion.slice(); // make a shallow copy

              for (var _i = expansion.length - 1; _i >= 0; --_i) {
                var _tok = expansion[_i];

                if (_tok.text === "#") {
                  if (_i === 0) {
                    throw new _ParseError2.default("Incomplete placeholder at end of macro body", _tok);
                  }

                  _tok = expansion[--_i]; // next token on stack

                  if (_tok.text === "#") {
                    // ## → #
                    expansion.splice(_i + 1, 1); // drop first #
                  } else if (/^[1-9]$/.test(_tok.text)) {
                    var _expansion; // replace the placeholder with the indicated argument


                    (_expansion = expansion).splice.apply(_expansion, [_i, 2].concat((0, _toConsumableArray3.default)(args[+_tok.text - 1])));
                  } else {
                    throw new _ParseError2.default("Not a valid argument number", _tok);
                  }
                }
              }
            } // Concatenate expansion onto top of stack.


            (_stack = this.stack).push.apply(_stack, (0, _toConsumableArray3.default)(expansion));

            return expansion;
          }
          /**
           * Expand the next token only once (if possible), and return the resulting
           * top token on the stack (without removing anything from the stack).
           * Similar in behavior to TeX's `\expandafter\futurelet`.
           * Equivalent to expandOnce() followed by future().
           */

        }, {
          key: "expandAfterFuture",
          value: function expandAfterFuture() {
            this.expandOnce();
            return this.future();
          }
          /**
           * Recursively expand first token, then return first non-expandable token.
           */

        }, {
          key: "expandNextToken",
          value: function expandNextToken() {
            for (;;) {
              var expanded = this.expandOnce(); // expandOnce returns Token if and only if it's fully expanded.

              if (expanded instanceof _Token.Token) {
                // \relax stops the expansion, but shouldn't get returned (a
                // null return value couldn't get implemented as a function).
                if (expanded.text === "\\relax") {
                  this.stack.pop();
                } else {
                  return this.stack.pop(); // === expanded
                }
              }
            } // Flow unable to figure out that this pathway is impossible.
            // https://github.com/facebook/flow/issues/4808


            throw new Error(); // eslint-disable-line no-unreachable
          }
          /**
           * Returns the expanded macro as a reversed array of tokens and a macro
           * argument count.
           * Caches macro expansions for those that were defined simple TeX strings.
           */

        }, {
          key: "_getExpansion",
          value: function _getExpansion(name) {
            var definition = this.macros[name];
            var expansion = typeof definition === "function" ? definition(this) : definition;

            if (typeof expansion === "string") {
              var numArgs = 0;

              if (expansion.indexOf("#") !== -1) {
                var stripped = expansion.replace(/##/g, "");

                while (stripped.indexOf("#" + (numArgs + 1)) !== -1) {
                  ++numArgs;
                }
              }

              var bodyLexer = new _Lexer2.default(expansion);
              var tokens = [];
              var tok = bodyLexer.lex();

              while (tok.text !== "EOF") {
                tokens.push(tok);
                tok = bodyLexer.lex();
              }

              tokens.reverse(); // to fit in with stack using push and pop

              var expanded = {
                tokens: tokens,
                numArgs: numArgs
              }; // Cannot cache a macro defined using a function since it relies on
              // parser context.

              if (typeof definition !== "function") {
                this.macros[name] = expanded;
              }

              return expanded;
            }

            return expansion;
          }
          /**
           * Recursively expand first token, then return first non-expandable token.
           * If given a `true` argument, skips over any leading whitespace in
           * expansion, instead returning the first non-whitespace token
           * (like TeX's \ignorespaces).
           * Any skipped whitespace is stored in `this.discardedWhiteSpace`
           * so that `unget` can correctly undo the effects of `get`.
           */

        }, {
          key: "get",
          value: function get(ignoreSpace) {
            this.discardedWhiteSpace = [];
            var token = this.expandNextToken();

            if (ignoreSpace) {
              while (token.text === " ") {
                this.discardedWhiteSpace.push(token);
                token = this.expandNextToken();
              }
            }

            return token;
          }
          /**
           * Undo the effect of the preceding call to the get method.
           * A call to this method MUST be immediately preceded and immediately followed
           * by a call to get.  Only used during mode switching, i.e. after one token
           * was got in the old mode but should get got again in a new mode
           * with possibly different whitespace handling.
           */

        }, {
          key: "unget",
          value: function unget(token) {
            this.stack.push(token);

            while (this.discardedWhiteSpace.length !== 0) {
              this.stack.push(this.discardedWhiteSpace.pop());
            }
          }
        }]);
        return MacroExpander;
      }();
      /**
       * This file contains the “gullet” where macros are expanded
       * until only non-macro tokens remain.
       */


      exports.default = MacroExpander;
    }, {
      "./Lexer": 81,
      "./ParseError": 84,
      "./Token": 90,
      "./macros": 107,
      "babel-runtime/helpers/classCallCheck": 8,
      "babel-runtime/helpers/createClass": 9,
      "babel-runtime/helpers/toConsumableArray": 11,
      "object-assign": 80
    }],
    83: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require("babel-runtime/helpers/createClass");

      var _createClass3 = _interopRequireDefault(_createClass2);

      var _fontMetrics2 = require("./fontMetrics");

      var _fontMetrics3 = _interopRequireDefault(_fontMetrics2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var sizeStyleMap = [// Each element contains [textsize, scriptsize, scriptscriptsize].
      // The size mappings are taken from TeX with \normalsize=10pt.
      [1, 1, 1], // size1: [5, 5, 5]              \tiny
      [2, 1, 1], // size2: [6, 5, 5]
      [3, 1, 1], // size3: [7, 5, 5]              \scriptsize
      [4, 2, 1], // size4: [8, 6, 5]              \footnotesize
      [5, 2, 1], // size5: [9, 6, 5]              \small
      [6, 3, 1], // size6: [10, 7, 5]             \normalsize
      [7, 4, 2], // size7: [12, 8, 6]             \large
      [8, 6, 3], // size8: [14.4, 10, 7]          \Large
      [9, 7, 6], // size9: [17.28, 12, 10]        \LARGE
      [10, 8, 7], // size10: [20.74, 14.4, 12]     \huge
      [11, 10, 9]];
      /**
       * This file contains information about the options that the Parser carries
       * around with it while parsing. Data is held in an `Options` object, and when
       * recursing, a new `Options` object can be created with the `.with*` and
       * `.reset` functions.
       */

      var sizeMultipliers = [// fontMetrics.js:getFontMetrics also uses size indexes, so if
      // you change size indexes, change that function.
      0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.2, 1.44, 1.728, 2.074, 2.488];

      var sizeAtStyle = function sizeAtStyle(size, style) {
        return style.size < 2 ? size : sizeStyleMap[size - 1][style.size - 1];
      };
      /**
       * This is the main options class. It contains the current style, size, color,
       * and font.
       *
       * Options objects should not be modified. To create a new Options with
       * different properties, call a `.having*` method.
       */


      var Options = function () {
        function Options(data) {
          (0, _classCallCheck3.default)(this, Options);
          this.style = data.style;
          this.color = data.color;
          this.size = data.size || Options.BASESIZE;
          this.textSize = data.textSize || this.size;
          this.phantom = !!data.phantom;
          this.font = data.font;
          this.sizeMultiplier = sizeMultipliers[this.size - 1];
          this.maxSize = data.maxSize;
          this._fontMetrics = undefined;
        }
        /**
         * Returns a new options object with the same properties as "this".  Properties
         * from "extension" will be copied to the new options object.
         */

        /**
         * The base size index.
         */


        (0, _createClass3.default)(Options, [{
          key: "extend",
          value: function extend(extension) {
            var data = {
              style: this.style,
              size: this.size,
              textSize: this.textSize,
              color: this.color,
              phantom: this.phantom,
              font: this.font,
              maxSize: this.maxSize
            };

            for (var key in extension) {
              if (extension.hasOwnProperty(key)) {
                data[key] = extension[key];
              }
            }

            return new Options(data);
          }
          /**
           * Return an options object with the given style. If `this.style === style`,
           * returns `this`.
           */

        }, {
          key: "havingStyle",
          value: function havingStyle(style) {
            if (this.style === style) {
              return this;
            } else {
              return this.extend({
                style: style,
                size: sizeAtStyle(this.textSize, style)
              });
            }
          }
          /**
           * Return an options object with a cramped version of the current style. If
           * the current style is cramped, returns `this`.
           */

        }, {
          key: "havingCrampedStyle",
          value: function havingCrampedStyle() {
            return this.havingStyle(this.style.cramp());
          }
          /**
           * Return an options object with the given size and in at least `\textstyle`.
           * Returns `this` if appropriate.
           */

        }, {
          key: "havingSize",
          value: function havingSize(size) {
            if (this.size === size && this.textSize === size) {
              return this;
            } else {
              return this.extend({
                style: this.style.text(),
                size: size,
                textSize: size
              });
            }
          }
          /**
           * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
           * changes to at least `\textstyle`.
           */

        }, {
          key: "havingBaseStyle",
          value: function havingBaseStyle(style) {
            style = style || this.style.text();
            var wantSize = sizeAtStyle(Options.BASESIZE, style);

            if (this.size === wantSize && this.textSize === Options.BASESIZE && this.style === style) {
              return this;
            } else {
              return this.extend({
                style: style,
                size: wantSize
              });
            }
          }
          /**
           * Create a new options object with the given color.
           */

        }, {
          key: "withColor",
          value: function withColor(color) {
            return this.extend({
              color: color
            });
          }
          /**
           * Create a new options object with "phantom" set to true.
           */

        }, {
          key: "withPhantom",
          value: function withPhantom() {
            return this.extend({
              phantom: true
            });
          }
          /**
           * Create a new options objects with the give font.
           */

        }, {
          key: "withFont",
          value: function withFont(font) {
            return this.extend({
              font: font || this.font
            });
          }
          /**
           * Return the CSS sizing classes required to switch from enclosing options
           * `oldOptions` to `this`. Returns an array of classes.
           */

        }, {
          key: "sizingClasses",
          value: function sizingClasses(oldOptions) {
            if (oldOptions.size !== this.size) {
              return ["sizing", "reset-size" + oldOptions.size, "size" + this.size];
            } else {
              return [];
            }
          }
          /**
           * Return the CSS sizing classes required to switch to the base size. Like
           * `this.havingSize(BASESIZE).sizingClasses(this)`.
           */

        }, {
          key: "baseSizingClasses",
          value: function baseSizingClasses() {
            if (this.size !== Options.BASESIZE) {
              return ["sizing", "reset-size" + this.size, "size" + Options.BASESIZE];
            } else {
              return [];
            }
          }
          /**
           * Return the font metrics for this size.
           */

        }, {
          key: "fontMetrics",
          value: function fontMetrics() {
            if (!this._fontMetrics) {
              this._fontMetrics = _fontMetrics3.default.getFontMetrics(this.size);
            }

            return this._fontMetrics;
          }
          /**
           * A map of color names to CSS colors.
           * TODO(emily): Remove this when we have real macros
           */

        }, {
          key: "getColor",

          /**
           * Gets the CSS color of the current options object, accounting for the
           * `colorMap`.
           */
          value: function getColor() {
            if (this.phantom) {
              return "transparent";
            } else if (this.color != null && Options.colorMap.hasOwnProperty(this.color)) {
              return Options.colorMap[this.color];
            } else {
              return this.color;
            }
          }
        }]);
        return Options;
      }();

      Options.BASESIZE = 6;
      Options.colorMap = {
        "katex-blue": "#6495ed",
        "katex-orange": "#ffa500",
        "katex-pink": "#ff00af",
        "katex-red": "#df0030",
        "katex-green": "#28ae7b",
        "katex-gray": "gray",
        "katex-purple": "#9d38bd",
        "katex-blueA": "#ccfaff",
        "katex-blueB": "#80f6ff",
        "katex-blueC": "#63d9ea",
        "katex-blueD": "#11accd",
        "katex-blueE": "#0c7f99",
        "katex-tealA": "#94fff5",
        "katex-tealB": "#26edd5",
        "katex-tealC": "#01d1c1",
        "katex-tealD": "#01a995",
        "katex-tealE": "#208170",
        "katex-greenA": "#b6ffb0",
        "katex-greenB": "#8af281",
        "katex-greenC": "#74cf70",
        "katex-greenD": "#1fab54",
        "katex-greenE": "#0d923f",
        "katex-goldA": "#ffd0a9",
        "katex-goldB": "#ffbb71",
        "katex-goldC": "#ff9c39",
        "katex-goldD": "#e07d10",
        "katex-goldE": "#a75a05",
        "katex-redA": "#fca9a9",
        "katex-redB": "#ff8482",
        "katex-redC": "#f9685d",
        "katex-redD": "#e84d39",
        "katex-redE": "#bc2612",
        "katex-maroonA": "#ffbde0",
        "katex-maroonB": "#ff92c6",
        "katex-maroonC": "#ed5fa6",
        "katex-maroonD": "#ca337c",
        "katex-maroonE": "#9e034e",
        "katex-purpleA": "#ddd7ff",
        "katex-purpleB": "#c6b9fc",
        "katex-purpleC": "#aa87ff",
        "katex-purpleD": "#7854ab",
        "katex-purpleE": "#543b78",
        "katex-mintA": "#f5f9e8",
        "katex-mintB": "#edf2df",
        "katex-mintC": "#e0e5cc",
        "katex-grayA": "#f6f7f7",
        "katex-grayB": "#f0f1f2",
        "katex-grayC": "#e3e5e6",
        "katex-grayD": "#d6d8da",
        "katex-grayE": "#babec2",
        "katex-grayF": "#888d93",
        "katex-grayG": "#626569",
        "katex-grayH": "#3b3e40",
        "katex-grayI": "#21242c",
        "katex-kaBlue": "#314453",
        "katex-kaGreen": "#71B307"
      };
      exports.default = Options;
    }, {
      "./fontMetrics": 101,
      "babel-runtime/helpers/classCallCheck": 8,
      "babel-runtime/helpers/createClass": 9
    }],
    84: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _ParseNode = require("./ParseNode");

      var _ParseNode2 = _interopRequireDefault(_ParseNode);

      var _Token = require("./Token");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * This is the ParseError class, which is the main error thrown by KaTeX
       * functions when something has gone wrong. This is used to distinguish internal
       * errors from errors in the expression that the user provided.
       *
       * If possible, a caller should provide a Token or ParseNode with information
       * about where in the source string the problem occurred.
       */


      var ParseError = // Error position based on passed-in Token or ParseNode.
      function ParseError(message, // The error message
      token) // An object providing position information
      {
        (0, _classCallCheck3.default)(this, ParseError);
        var error = "KaTeX parse error: " + message;
        var start = void 0;
        var loc = token && token.loc;

        if (loc && loc.start <= loc.end) {
          // If we have the input and a position, make the error a bit fancier
          // Get the input
          var input = loc.lexer.input; // Prepend some information

          start = loc.start;
          var end = loc.end;

          if (start === input.length) {
            error += " at end of input: ";
          } else {
            error += " at position " + (start + 1) + ": ";
          } // Underline token in question using combining underscores


          var underlined = input.slice(start, end).replace(/[^]/g, "$&\u0332"); // Extract some context from the input and add it to the error

          var left = void 0;

          if (start > 15) {
            left = "…" + input.slice(start - 15, start);
          } else {
            left = input.slice(0, start);
          }

          var right = void 0;

          if (end + 15 < input.length) {
            right = input.slice(end, end + 15) + "…";
          } else {
            right = input.slice(end);
          }

          error += left + underlined + right;
        } // Some hackery to make ParseError a prototype of Error
        // See http://stackoverflow.com/a/8460753


        var self = new Error(error);
        self.name = "ParseError"; // $FlowFixMe

        self.__proto__ = ParseError.prototype; // $FlowFixMe

        self.position = start;
        return self;
      }; // $FlowFixMe More hackery


      ParseError.prototype.__proto__ = Error.prototype;
      exports.default = ParseError;
    }, {
      "./ParseNode": 85,
      "./Token": 90,
      "babel-runtime/helpers/classCallCheck": 8
    }],
    85: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _Token = require("./Token");

      var _SourceLocation = require("./SourceLocation");

      var _SourceLocation2 = _interopRequireDefault(_SourceLocation);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * The resulting parse tree nodes of the parse tree.
       *
       * It is possible to provide position information, so that a `ParseNode` can
       * fulfill a role similar to a `Token` in error reporting.
       * For details on the corresponding properties see `Token` constructor.
       * Providing such information can lead to better error reporting.
       */


      var ParseNode = function ParseNode(type, // type of node, like e.g. "ordgroup"
      value, // type-specific representation of the node
      mode, // parse mode in action for this node, "math" or "text"
      firstToken, // first token of the input for this node,
      lastToken) // last token of the input for this node,
      // will default to firstToken if unset
      {
        (0, _classCallCheck3.default)(this, ParseNode);
        this.type = type;
        this.value = value;
        this.mode = mode;
        this.loc = _SourceLocation2.default.range(firstToken, lastToken);
      };

      exports.default = ParseNode;
    }, {
      "./SourceLocation": 88,
      "./Token": 90,
      "babel-runtime/helpers/classCallCheck": 8
    }],
    86: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require("babel-runtime/helpers/createClass");

      var _createClass3 = _interopRequireDefault(_createClass2);

      var _functions = require("./functions");

      var _functions2 = _interopRequireDefault(_functions);

      var _environments = require("./environments");

      var _environments2 = _interopRequireDefault(_environments);

      var _MacroExpander = require("./MacroExpander");

      var _MacroExpander2 = _interopRequireDefault(_MacroExpander);

      var _symbols = require("./symbols");

      var _symbols2 = _interopRequireDefault(_symbols);

      var _utils = require("./utils");

      var _utils2 = _interopRequireDefault(_utils);

      var _units = require("./units");

      var _unicodeRegexes = require("./unicodeRegexes");

      var _ParseNode = require("./ParseNode");

      var _ParseNode2 = _interopRequireDefault(_ParseNode);

      var _ParseError = require("./ParseError");

      var _ParseError2 = _interopRequireDefault(_ParseError);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * This file contains the parser used to parse out a TeX expression from the
       * input. Since TeX isn't context-free, standard parsers don't work particularly
       * well.
       *
       * The strategy of this parser is as such:
       *
       * The main functions (the `.parse...` ones) take a position in the current
       * parse string to parse tokens from. The lexer (found in Lexer.js, stored at
       * this.lexer) also supports pulling out tokens at arbitrary places. When
       * individual tokens are needed at a position, the lexer is called to pull out a
       * token, which is then used.
       *
       * The parser has a property called "mode" indicating the mode that
       * the parser is currently in. Currently it has to be one of "math" or
       * "text", which denotes whether the current environment is a math-y
       * one or a text-y one (e.g. inside \text). Currently, this serves to
       * limit the functions which can be used in text mode.
       *
       * The main functions then return an object which contains the useful data that
       * was parsed at its given point, and a new position at the end of the parsed
       * data. The main functions can call each other and continue the parsing by
       * using the returned position as a new starting point.
       *
       * There are also extra `.handle...` functions, which pull out some reused
       * functionality into self-contained functions.
       *
       * The earlier functions return ParseNodes.
       * The later functions (which are called deeper in the parse) sometimes return
       * ParsedFuncOrArgOrDollar, which contain a ParseNode as well as some data about
       * whether the parsed object is a function which is missing some arguments, or a
       * standalone object which can be used as an argument to another function.
       */

      /* TODO: Uncomment when porting to flow.
      type ParsedType = "fn" | "arg" | "$"
      type ParsedFunc = {|
          type: "fn",
          result: string, // Function name defined via defineFunction (e.g. "\\frac").
          token: Token,
      |};
      type ParsedArg = {|
          type: "arg",
          result: ParseNode,
          token: Token,
      |};
      type ParsedDollar = {|
          // Math mode switch
          type: "$",
          result: "$",
          token: Token,
      |};
      type ParsedFuncOrArgOrDollar = ParsedFunc | ParsedArg | ParsedDollar;
      */

      /**
       * @param {ParseNode} result
       * @param {Token} token
       * @return {ParsedArg}
       */


      function newArgument(result, token) {
        return {
          type: "arg",
          result: result,
          token: token
        };
      }
      /**
       * @param {Token} token
       * @return {ParsedFunc}
       */

      /* eslint no-constant-condition:0 */


      function newFunction(token) {
        return {
          type: "fn",
          result: token.text,
          token: token
        };
      }
      /**
       * @param {Token} token
       * @return {ParsedDollar}
       */


      function newDollar(token) {
        return {
          type: "$",
          result: "$",
          token: token
        };
      }
      /**
       * @param {ParsedFuncOrArgOrDollar} parsed
       * @return {ParsedFuncOrArg}
       */


      function assertFuncOrArg(parsed) {
        if (parsed.type === "$") {
          throw new _ParseError2.default("Unexpected $", parsed.token);
        }

        return parsed;
      }

      var Parser = function () {
        function Parser(input, settings) {
          (0, _classCallCheck3.default)(this, Parser); // Create a new macro expander (gullet) and (indirectly via that) also a
          // new lexer (mouth) for this parser (stomach, in the language of TeX)

          this.gullet = new _MacroExpander2.default(input, settings.macros); // Use old \color behavior (same as LaTeX's \textcolor) if requested.
          // We do this after the macros object has been copied by MacroExpander.

          if (settings.colorIsTextColor) {
            this.gullet.macros["\\color"] = "\\textcolor";
          } // Store the settings for use in parsing


          this.settings = settings; // Count leftright depth (for \middle errors)

          this.leftrightDepth = 0;
        }
        /**
         * Checks a result to make sure it has the right type, and throws an
         * appropriate error otherwise.
         *
         * @param {boolean=} consume whether to consume the expected token,
         *                           defaults to true
         */


        (0, _createClass3.default)(Parser, [{
          key: "expect",
          value: function expect(text, consume) {
            if (this.nextToken.text !== text) {
              throw new _ParseError2.default("Expected '" + text + "', got '" + this.nextToken.text + "'", this.nextToken);
            }

            if (consume !== false) {
              this.consume();
            }
          }
          /**
           * Considers the current look ahead token as consumed,
           * and fetches the one after that as the new look ahead.
           */

        }, {
          key: "consume",
          value: function consume() {
            this.nextToken = this.gullet.get(this.mode === "math");
          }
        }, {
          key: "switchMode",
          value: function switchMode(newMode) {
            this.gullet.unget(this.nextToken);
            this.mode = newMode;
            this.consume();
          }
          /**
           * Main parsing function, which parses an entire input.
           *
           * @return {Array.<ParseNode>}
           */

        }, {
          key: "parse",
          value: function parse() {
            // Try to parse the input
            this.mode = "math";
            this.consume();
            var parse = this.parseInput();
            return parse;
          }
          /**
           * Parses an entire input tree.
           */

        }, {
          key: "parseInput",
          value: function parseInput() {
            // Parse an expression
            var expression = this.parseExpression(false); // If we succeeded, make sure there's an EOF at the end

            this.expect("EOF", false);
            return expression;
          }
        }, {
          key: "parseExpression",

          /**
           * Parses an "expression", which is a list of atoms.
           *
           * @param {boolean} breakOnInfix  Should the parsing stop when we hit infix
           *                  nodes? This happens when functions have higher precendence
           *                  than infix nodes in implicit parses.
           *
           * @param {?string} breakOnTokenText  The text of the token that the expression
           *                  should end with, or `null` if something else should end the
           *                  expression.
           *
           * @return {Array<ParseNode>}
           */
          value: function parseExpression(breakOnInfix, breakOnTokenText) {
            var body = []; // Keep adding atoms to the body until we can't parse any more atoms (either
            // we reached the end, a }, or a \right)

            while (true) {
              var lex = this.nextToken;

              if (Parser.endOfExpression.indexOf(lex.text) !== -1) {
                break;
              }

              if (breakOnTokenText && lex.text === breakOnTokenText) {
                break;
              }

              if (breakOnInfix && _functions2.default[lex.text] && _functions2.default[lex.text].infix) {
                break;
              }

              var atom = this.parseAtom(breakOnTokenText);

              if (!atom) {
                if (!this.settings.throwOnError && lex.text[0] === "\\") {
                  var errorNode = this.handleUnsupportedCmd();
                  body.push(errorNode);
                  continue;
                }

                break;
              }

              body.push(atom);
            }

            return this.handleInfixNodes(body);
          }
          /**
           * Rewrites infix operators such as \over with corresponding commands such
           * as \frac.
           *
           * There can only be one infix operator per group.  If there's more than one
           * then the expression is ambiguous.  This can be resolved by adding {}.
           *
           * @param {Array<ParseNode>} body
           * @return {Array<ParseNode>}
           */

        }, {
          key: "handleInfixNodes",
          value: function handleInfixNodes(body) {
            var overIndex = -1;
            var funcName = void 0;

            for (var i = 0; i < body.length; i++) {
              var node = body[i];

              if (node.type === "infix") {
                if (overIndex !== -1) {
                  throw new _ParseError2.default("only one infix operator per group", node.value.token);
                }

                overIndex = i;
                funcName = node.value.replaceWith;
              }
            }

            if (overIndex !== -1) {
              var numerNode = void 0;
              var denomNode = void 0;
              var numerBody = body.slice(0, overIndex);
              var denomBody = body.slice(overIndex + 1);

              if (numerBody.length === 1 && numerBody[0].type === "ordgroup") {
                numerNode = numerBody[0];
              } else {
                numerNode = new _ParseNode2.default("ordgroup", numerBody, this.mode);
              }

              if (denomBody.length === 1 && denomBody[0].type === "ordgroup") {
                denomNode = denomBody[0];
              } else {
                denomNode = new _ParseNode2.default("ordgroup", denomBody, this.mode);
              }

              var value = this.callFunction(funcName, [numerNode, denomNode], []);
              return [new _ParseNode2.default(value.type, value, this.mode)];
            } else {
              return body;
            }
          } // The greediness of a superscript or subscript

        }, {
          key: "handleSupSubscript",

          /**
           * Handle a subscript or superscript with nice errors.
           * @param {string} name For error reporting.
           * @return {ParsedNode}
           */
          value: function handleSupSubscript(name) {
            var symbolToken = this.nextToken;
            var symbol = symbolToken.text;
            this.consume();
            var group = this.parseGroup();

            if (!group) {
              if (!this.settings.throwOnError && this.nextToken.text[0] === "\\") {
                return this.handleUnsupportedCmd();
              } else {
                throw new _ParseError2.default("Expected group after '" + symbol + "'", symbolToken);
              }
            }

            var arg = assertFuncOrArg(group);

            if (arg.type === "fn") {
              // ^ and _ have a greediness, so handle interactions with functions'
              // greediness
              var funcGreediness = _functions2.default[group.result].greediness;

              if (funcGreediness > Parser.SUPSUB_GREEDINESS) {
                return this.parseGivenFunction(group);
              } else {
                throw new _ParseError2.default("Got function '" + group.result + "' with no arguments " + "as " + name, symbolToken);
              }
            } else {
              return group.result;
            }
          }
          /**
           * Converts the textual input of an unsupported command into a text node
           * contained within a color node whose color is determined by errorColor
           */

        }, {
          key: "handleUnsupportedCmd",
          value: function handleUnsupportedCmd() {
            var text = this.nextToken.text;
            var textordArray = [];

            for (var i = 0; i < text.length; i++) {
              textordArray.push(new _ParseNode2.default("textord", text[i], "text"));
            }

            var textNode = new _ParseNode2.default("text", {
              body: textordArray,
              type: "text"
            }, this.mode);
            var colorNode = new _ParseNode2.default("color", {
              color: this.settings.errorColor,
              value: [textNode],
              type: "color"
            }, this.mode);
            this.consume();
            return colorNode;
          }
          /**
           * Parses a group with optional super/subscripts.
           *
           * @param {"]" | "}"} breakOnTokenText - character to stop parsing the group on.
           * @return {?ParseNode}
           */

        }, {
          key: "parseAtom",
          value: function parseAtom(breakOnTokenText) {
            // The body of an atom is an implicit group, so that things like
            // \left(x\right)^2 work correctly.
            var base = this.parseImplicitGroup(breakOnTokenText); // In text mode, we don't have superscripts or subscripts

            if (this.mode === "text") {
              return base;
            } // Note that base may be empty (i.e. null) at this point.


            var superscript = void 0;
            var subscript = void 0;

            while (true) {
              // Lex the first token
              var lex = this.nextToken;

              if (lex.text === "\\limits" || lex.text === "\\nolimits") {
                // We got a limit control
                if (!base || base.type !== "op") {
                  throw new _ParseError2.default("Limit controls must follow a math operator", lex);
                } else {
                  var limits = lex.text === "\\limits";
                  base.value.limits = limits;
                  base.value.alwaysHandleSupSub = true;
                }

                this.consume();
              } else if (lex.text === "^") {
                // We got a superscript start
                if (superscript) {
                  throw new _ParseError2.default("Double superscript", lex);
                }

                superscript = this.handleSupSubscript("superscript");
              } else if (lex.text === "_") {
                // We got a subscript start
                if (subscript) {
                  throw new _ParseError2.default("Double subscript", lex);
                }

                subscript = this.handleSupSubscript("subscript");
              } else if (lex.text === "'") {
                // We got a prime
                if (superscript) {
                  throw new _ParseError2.default("Double superscript", lex);
                }

                var prime = new _ParseNode2.default("textord", "\\prime", this.mode); // Many primes can be grouped together, so we handle this here

                var primes = [prime];
                this.consume(); // Keep lexing tokens until we get something that's not a prime

                while (this.nextToken.text === "'") {
                  // For each one, add another prime to the list
                  primes.push(prime);
                  this.consume();
                } // If there's a superscript following the primes, combine that
                // superscript in with the primes.


                if (this.nextToken.text === "^") {
                  primes.push(this.handleSupSubscript("superscript"));
                } // Put everything into an ordgroup as the superscript


                superscript = new _ParseNode2.default("ordgroup", primes, this.mode);
              } else {
                // If it wasn't ^, _, or ', stop parsing super/subscripts
                break;
              }
            }

            if (superscript || subscript) {
              // If we got either a superscript or subscript, create a supsub
              return new _ParseNode2.default("supsub", {
                base: base,
                sup: superscript,
                sub: subscript
              }, this.mode);
            } else {
              // Otherwise return the original body
              return base;
            }
          } // A list of the size-changing functions, for use in parseImplicitGroup
          // A list of the style-changing functions, for use in parseImplicitGroup
          // Old font functions

        }, {
          key: "parseImplicitGroup",

          /**
           * Parses an implicit group, which is a group that starts at the end of a
           * specified, and ends right before a higher explicit group ends, or at EOL. It
           * is used for functions that appear to affect the current style, like \Large or
           * \textrm, where instead of keeping a style we just pretend that there is an
           * implicit grouping after it until the end of the group. E.g.
           *   small text {\Large large text} small text again
           * It is also used for \left and \right to get the correct grouping.
           *
           * @param {"]" | "}"} breakOnTokenText - character to stop parsing the group on.
           * @return {?ParseNode}
           */
          value: function parseImplicitGroup(breakOnTokenText) {
            var start = this.parseSymbol();

            if (start == null) {
              // If we didn't get anything we handle, fall back to parseFunction
              return this.parseFunction();
            }

            var func = start.result;

            if (func === "\\left") {
              // If we see a left:
              // Parse the entire left function (including the delimiter)
              var left = this.parseGivenFunction(start); // Parse out the implicit body

              ++this.leftrightDepth;
              var body = this.parseExpression(false);
              --this.leftrightDepth; // Check the next token

              this.expect("\\right", false);
              var right = this.parseFunction();
              return new _ParseNode2.default("leftright", {
                body: body,
                left: left.value.value,
                right: right.value.value
              }, this.mode);
            } else if (func === "\\begin") {
              // begin...end is similar to left...right
              var begin = this.parseGivenFunction(start);
              var envName = begin.value.name;

              if (!_environments2.default.has(envName)) {
                throw new _ParseError2.default("No such environment: " + envName, begin.value.nameGroup);
              } // Build the environment object. Arguments and other information will
              // be made available to the begin and end methods using properties.


              var env = _environments2.default.get(envName);

              var _parseArguments = this.parseArguments("\\begin{" + envName + "}", env),
                  args = _parseArguments.args,
                  optArgs = _parseArguments.optArgs;

              var context = {
                mode: this.mode,
                envName: envName,
                parser: this
              };
              var result = env.handler(context, args, optArgs);
              this.expect("\\end", false);
              var endNameToken = this.nextToken;
              var end = this.parseFunction();

              if (end.value.name !== envName) {
                throw new _ParseError2.default("Mismatch: \\begin{" + envName + "} matched " + "by \\end{" + end.value.name + "}", endNameToken);
              }

              result.position = end.position;
              return result;
            } else if (_utils2.default.contains(Parser.sizeFuncs, func)) {
              // If we see a sizing function, parse out the implicit body
              this.consumeSpaces();

              var _body = this.parseExpression(false, breakOnTokenText);

              return new _ParseNode2.default("sizing", {
                // Figure out what size to use based on the list of functions above
                size: _utils2.default.indexOf(Parser.sizeFuncs, func) + 1,
                value: _body
              }, this.mode);
            } else if (_utils2.default.contains(Parser.styleFuncs, func)) {
              // If we see a styling function, parse out the implicit body
              this.consumeSpaces();

              var _body2 = this.parseExpression(true, breakOnTokenText);

              return new _ParseNode2.default("styling", {
                // Figure out what style to use by pulling out the style from
                // the function name
                style: func.slice(1, func.length - 5),
                value: _body2
              }, this.mode);
            } else if (func in Parser.oldFontFuncs) {
              var style = Parser.oldFontFuncs[func]; // If we see an old font function, parse out the implicit body

              this.consumeSpaces();

              var _body3 = this.parseExpression(true, breakOnTokenText);

              if (style.slice(0, 4) === 'text') {
                return new _ParseNode2.default("text", {
                  style: style,
                  body: new _ParseNode2.default("ordgroup", _body3, this.mode)
                }, this.mode);
              } else {
                return new _ParseNode2.default("font", {
                  font: style,
                  body: new _ParseNode2.default("ordgroup", _body3, this.mode)
                }, this.mode);
              }
            } else if (func === "\\color") {
              // If we see a styling function, parse out the implicit body
              var color = this.parseColorGroup(false);

              if (!color) {
                throw new _ParseError2.default("\\color not followed by color");
              }

              var _body4 = this.parseExpression(true, breakOnTokenText);

              return new _ParseNode2.default("color", {
                type: "color",
                color: color.result.value,
                value: _body4
              }, this.mode);
            } else if (func === "$") {
              if (this.mode === "math") {
                throw new _ParseError2.default("$ within math mode");
              }

              this.consume();
              var outerMode = this.mode;
              this.switchMode("math");

              var _body5 = this.parseExpression(false, "$");

              this.expect("$", true);
              this.switchMode(outerMode);
              return new _ParseNode2.default("styling", {
                style: "text",
                value: _body5
              }, "math");
            } else {
              // Defer to parseGivenFunction if it's not a function we handle
              return this.parseGivenFunction(start);
            }
          }
          /**
           * Parses an entire function, including its base and all of its arguments.
           * It also handles the case where the parsed node is not a function.
           *
           * @return {?ParseNode}
           */

        }, {
          key: "parseFunction",
          value: function parseFunction() {
            var baseGroup = this.parseGroup();
            return baseGroup ? this.parseGivenFunction(baseGroup) : null;
          }
          /**
           * Same as parseFunction(), except that the base is provided, guaranteeing a
           * non-nullable result.
           *
           * @param {ParsedFuncOrArgOrDollar} baseGroup
           * @return {ParseNode}
           */

        }, {
          key: "parseGivenFunction",
          value: function parseGivenFunction(baseGroup) {
            baseGroup = assertFuncOrArg(baseGroup);

            if (baseGroup.type === "fn") {
              var func = baseGroup.result;
              var funcData = _functions2.default[func];

              if (this.mode === "text" && !funcData.allowedInText) {
                throw new _ParseError2.default("Can't use function '" + func + "' in text mode", baseGroup.token);
              } else if (this.mode === "math" && funcData.allowedInMath === false) {
                throw new _ParseError2.default("Can't use function '" + func + "' in math mode", baseGroup.token);
              }

              var _parseArguments2 = this.parseArguments(func, funcData),
                  args = _parseArguments2.args,
                  optArgs = _parseArguments2.optArgs;

              var token = baseGroup.token;
              var result = this.callFunction(func, args, optArgs, token);
              return new _ParseNode2.default(result.type, result, this.mode);
            } else {
              return baseGroup.result;
            }
          }
          /**
           * Call a function handler with a suitable context and arguments.
           * @param {string} name
           * @param {Array<ParseNode>} args
           * @param {Array<?ParseNode>} optArgs
           * @param {Token=} token
           */

        }, {
          key: "callFunction",
          value: function callFunction(name, args, optArgs, token) {
            var context = {
              funcName: name,
              parser: this,
              token: token
            };
            return _functions2.default[name].handler(context, args, optArgs);
          }
          /**
           * Parses the arguments of a function or environment
           *
           * @param {string} func  "\name" or "\begin{name}"
           * @param {{
           *   numArgs: number,
           *   numOptionalArgs: (number|undefined),
           * }} funcData
           * @return {{
           *   args: Array<ParseNode>,
           *   optArgs: Array<?ParseNode>,
           * }}
           */

        }, {
          key: "parseArguments",
          value: function parseArguments(func, funcData) {
            var totalArgs = funcData.numArgs + funcData.numOptionalArgs;

            if (totalArgs === 0) {
              return {
                args: [],
                optArgs: []
              };
            }

            var baseGreediness = funcData.greediness;
            var args = [];
            var optArgs = [];

            for (var i = 0; i < totalArgs; i++) {
              var nextToken = this.nextToken;
              var argType = funcData.argTypes && funcData.argTypes[i];
              var isOptional = i < funcData.numOptionalArgs;
              var arg = argType ? this.parseGroupOfType(argType, isOptional) : this.parseGroup(isOptional);

              if (!arg) {
                if (isOptional) {
                  optArgs.push(null);
                  continue;
                }

                if (!this.settings.throwOnError && this.nextToken.text[0] === "\\") {
                  arg = newArgument(this.handleUnsupportedCmd(), nextToken);
                } else {
                  throw new _ParseError2.default("Expected group after '" + func + "'", nextToken);
                }
              }

              var argNode = void 0;
              arg = assertFuncOrArg(arg);

              if (arg.type === "fn") {
                var argGreediness = _functions2.default[arg.result].greediness;

                if (argGreediness > baseGreediness) {
                  argNode = this.parseGivenFunction(arg);
                } else {
                  throw new _ParseError2.default("Got function '" + arg.result + "' as " + "argument to '" + func + "'", nextToken);
                }
              } else {
                argNode = arg.result;
              }

              (isOptional ? optArgs : args).push(argNode);
            }

            return {
              args: args,
              optArgs: optArgs
            };
          }
          /**
           * Parses a group when the mode is changing.
           *
           * @return {?ParsedFuncOrArgOrDollar}
           */

        }, {
          key: "parseGroupOfType",
          value: function parseGroupOfType(innerMode, optional) {
            var outerMode = this.mode; // Handle `original` argTypes

            if (innerMode === "original") {
              innerMode = outerMode;
            }

            if (innerMode === "color") {
              return this.parseColorGroup(optional);
            }

            if (innerMode === "size") {
              return this.parseSizeGroup(optional);
            }

            this.switchMode(innerMode);

            if (innerMode === "text") {
              // text mode is special because it should ignore the whitespace before
              // it
              this.consumeSpaces();
            } // By the time we get here, innerMode is one of "text" or "math".
            // We switch the mode of the parser, recurse, then restore the old mode.


            var res = this.parseGroup(optional);
            this.switchMode(outerMode);
            return res;
          }
        }, {
          key: "consumeSpaces",
          value: function consumeSpaces() {
            while (this.nextToken.text === " ") {
              this.consume();
            }
          }
          /**
           * Parses a group, essentially returning the string formed by the
           * brace-enclosed tokens plus some position information.
           *
           * @param {string} modeName  Used to describe the mode in error messages
           * @param {boolean=} optional  Whether the group is optional or required
           * @return {?Token}
           */

        }, {
          key: "parseStringGroup",
          value: function parseStringGroup(modeName, optional) {
            if (optional && this.nextToken.text !== "[") {
              return null;
            }

            var outerMode = this.mode;
            this.mode = "text";
            this.expect(optional ? "[" : "{");
            var str = "";
            var firstToken = this.nextToken;
            var lastToken = firstToken;

            while (this.nextToken.text !== (optional ? "]" : "}")) {
              if (this.nextToken.text === "EOF") {
                throw new _ParseError2.default("Unexpected end of input in " + modeName, firstToken.range(this.nextToken, str));
              }

              lastToken = this.nextToken;
              str += lastToken.text;
              this.consume();
            }

            this.mode = outerMode;
            this.expect(optional ? "]" : "}");
            return firstToken.range(lastToken, str);
          }
          /**
           * Parses a regex-delimited group: the largest sequence of tokens
           * whose concatenated strings match `regex`. Returns the string
           * formed by the tokens plus some position information.
           *
           * @param {RegExp} regex
           * @param {string} modeName  Used to describe the mode in error messages
           * @return {Token}
           */

        }, {
          key: "parseRegexGroup",
          value: function parseRegexGroup(regex, modeName) {
            var outerMode = this.mode;
            this.mode = "text";
            var firstToken = this.nextToken;
            var lastToken = firstToken;
            var str = "";

            while (this.nextToken.text !== "EOF" && regex.test(str + this.nextToken.text)) {
              lastToken = this.nextToken;
              str += lastToken.text;
              this.consume();
            }

            if (str === "") {
              throw new _ParseError2.default("Invalid " + modeName + ": '" + firstToken.text + "'", firstToken);
            }

            this.mode = outerMode;
            return firstToken.range(lastToken, str);
          }
          /**
           * Parses a color description.
           */

        }, {
          key: "parseColorGroup",
          value: function parseColorGroup(optional) {
            var res = this.parseStringGroup("color", optional);

            if (!res) {
              return null;
            }

            var match = /^(#[a-f0-9]{3}|#[a-f0-9]{6}|[a-z]+)$/i.exec(res.text);

            if (!match) {
              throw new _ParseError2.default("Invalid color: '" + res.text + "'", res);
            }

            return newArgument(new _ParseNode2.default("color", match[0], this.mode), res);
          }
          /**
           * Parses a size specification, consisting of magnitude and unit.
           */

        }, {
          key: "parseSizeGroup",
          value: function parseSizeGroup(optional) {
            var res = void 0;

            if (!optional && this.nextToken.text !== "{") {
              res = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size");
            } else {
              res = this.parseStringGroup("size", optional);
            }

            if (!res) {
              return null;
            }

            var match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(res.text);

            if (!match) {
              throw new _ParseError2.default("Invalid size: '" + res.text + "'", res);
            }

            var data = {
              number: +(match[1] + match[2]),
              // sign + magnitude, cast to number
              unit: match[3]
            };

            if (!(0, _units.validUnit)(data)) {
              throw new _ParseError2.default("Invalid unit: '" + data.unit + "'", res);
            }

            return newArgument(new _ParseNode2.default("size", data, this.mode), res);
          }
          /**
           * If the argument is false or absent, this parses an ordinary group,
           * which is either a single nucleus (like "x") or an expression
           * in braces (like "{x+y}").
           * If the argument is true, it parses either a bracket-delimited expression
           * (like "[x+y]") or returns null to indicate the absence of a
           * bracket-enclosed group.
           *
           * @param {boolean=} optional  Whether the group is optional or required
           * @return {?ParsedFuncOrArgOrDollar}
           */

        }, {
          key: "parseGroup",
          value: function parseGroup(optional) {
            var firstToken = this.nextToken; // Try to parse an open brace

            if (this.nextToken.text === (optional ? "[" : "{")) {
              // If we get a brace, parse an expression
              this.consume();
              var expression = this.parseExpression(false, optional ? "]" : "}");
              var lastToken = this.nextToken; // Make sure we get a close brace

              this.expect(optional ? "]" : "}");

              if (this.mode === "text") {
                this.formLigatures(expression);
              }

              return newArgument(new _ParseNode2.default("ordgroup", expression, this.mode, firstToken, lastToken), firstToken.range(lastToken, firstToken.text));
            } else {
              // Otherwise, just return a nucleus, or nothing for an optional group
              return optional ? null : this.parseSymbol();
            }
          }
          /**
           * Form ligature-like combinations of characters for text mode.
           * This includes inputs like "--", "---", "``" and "''".
           * The result will simply replace multiple textord nodes with a single
           * character in each value by a single textord node having multiple
           * characters in its value.  The representation is still ASCII source.
           *
           * @param {Array.<ParseNode>} group  the nodes of this group,
           *                                   list will be moified in place
           */

        }, {
          key: "formLigatures",
          value: function formLigatures(group) {
            var n = group.length - 1;

            for (var i = 0; i < n; ++i) {
              var a = group[i];
              var v = a.value;

              if (v === "-" && group[i + 1].value === "-") {
                if (i + 1 < n && group[i + 2].value === "-") {
                  group.splice(i, 3, new _ParseNode2.default("textord", "---", "text", a, group[i + 2]));
                  n -= 2;
                } else {
                  group.splice(i, 2, new _ParseNode2.default("textord", "--", "text", a, group[i + 1]));
                  n -= 1;
                }
              }

              if ((v === "'" || v === "`") && group[i + 1].value === v) {
                group.splice(i, 2, new _ParseNode2.default("textord", v + v, "text", a, group[i + 1]));
                n -= 1;
              }
            }
          }
          /**
           * Parse a single symbol out of the string. Here, we handle both the functions
           * we have defined, as well as the single character symbols
           *
           * @return {?ParsedFuncOrArgOrDollar}
           */

        }, {
          key: "parseSymbol",
          value: function parseSymbol() {
            var nucleus = this.nextToken;

            if (_functions2.default[nucleus.text]) {
              this.consume(); // If there exists a function with this name, we return the function and
              // say that it is a function.

              return newFunction(nucleus);
            } else if (_symbols2.default[this.mode][nucleus.text]) {
              this.consume(); // Otherwise if this is a no-argument function, find the type it
              // corresponds to in the symbols map

              return newArgument(new _ParseNode2.default(_symbols2.default[this.mode][nucleus.text].group, nucleus.text, this.mode, nucleus), nucleus);
            } else if (this.mode === "text" && _unicodeRegexes.cjkRegex.test(nucleus.text)) {
              this.consume();
              return newArgument(new _ParseNode2.default("textord", nucleus.text, this.mode, nucleus), nucleus);
            } else if (nucleus.text === "$") {
              return newDollar(nucleus);
            } else if (/^\\verb[^a-zA-Z]/.test(nucleus.text)) {
              this.consume();
              var arg = nucleus.text.slice(5);
              var star = arg.charAt(0) === "*";

              if (star) {
                arg = arg.slice(1);
              } // Lexer's tokenRegex is constructed to always have matching
              // first/last characters.


              if (arg.length < 2 || arg.charAt(0) !== arg.slice(-1)) {
                throw new _ParseError2.default("\\verb assertion failed --\n                    please report what input caused this bug");
              }

              arg = arg.slice(1, -1); // remove first and last char

              return newArgument(new _ParseNode2.default("verb", {
                body: arg,
                star: star
              }, "text"), nucleus);
            } else {
              return null;
            }
          }
        }]);
        return Parser;
      }();

      Parser.endOfExpression = ["}", "\\end", "\\right", "&", "\\\\", "\\cr"];
      Parser.SUPSUB_GREEDINESS = 1;
      Parser.sizeFuncs = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
      Parser.styleFuncs = ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"];
      Parser.oldFontFuncs = {
        "\\rm": "mathrm",
        "\\sf": "mathsf",
        "\\tt": "mathtt",
        "\\bf": "mathbf",
        "\\it": "mathit" //"\\sl": "textsl",
        //"\\sc": "textsc",

      };
      exports.default = Parser;
    }, {
      "./MacroExpander": 82,
      "./ParseError": 84,
      "./ParseNode": 85,
      "./environments": 99,
      "./functions": 103,
      "./symbols": 112,
      "./unicodeRegexes": 113,
      "./units": 114,
      "./utils": 115,
      "babel-runtime/helpers/classCallCheck": 8,
      "babel-runtime/helpers/createClass": 9
    }],
    87: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _utils = require("./utils");

      var _utils2 = _interopRequireDefault(_utils);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * The main Settings object
       *
       * The current options stored are:
       *  - displayMode: Whether the expression should be typeset as inline math
       *                 (false, the default), meaning that the math starts in
       *                 \textstyle and is placed in an inline-block); or as display
       *                 math (true), meaning that the math starts in \displaystyle
       *                 and is placed in a block with vertical margin.
       */


      var Settings = function Settings(options) {
        (0, _classCallCheck3.default)(this, Settings); // allow null options

        options = options || {};
        this.displayMode = _utils2.default.deflt(options.displayMode, false);
        this.throwOnError = _utils2.default.deflt(options.throwOnError, true);
        this.errorColor = _utils2.default.deflt(options.errorColor, "#cc0000");
        this.macros = options.macros || {};
        this.colorIsTextColor = _utils2.default.deflt(options.colorIsTextColor, false);
        this.maxSize = Math.max(0, _utils2.default.deflt(options.maxSize, Infinity));
      };
      /**
       * This is a module for storing settings passed into KaTeX. It correctly handles
       * default settings.
       */


      exports.default = Settings;
    }, {
      "./utils": 115,
      "babel-runtime/helpers/classCallCheck": 8
    }],
    88: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _freeze = require("babel-runtime/core-js/object/freeze");

      var _freeze2 = _interopRequireDefault(_freeze);

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require("babel-runtime/helpers/createClass");

      var _createClass3 = _interopRequireDefault(_createClass2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * Lexing or parsing positional information for error reporting.
       * This object is immutable.
       */


      var SourceLocation = function () {
        // End offset, zero-based exclusive.
        // Lexer holding the input string.
        function SourceLocation(lexer, start, end) {
          (0, _classCallCheck3.default)(this, SourceLocation);
          this.lexer = lexer;
          this.start = start;
          this.end = end;
          (0, _freeze2.default)(this); // Immutable to allow sharing in range().
        }
        /**
         * Merges two `SourceLocation`s from location providers, given they are
         * provided in order of appearance.
         * - Returns the first one's location if only the first is provided.
         * - Returns a merged range of the first and the last if both are provided
         *   and their lexers match.
         * - Otherwise, returns null.
         */
        // Start offset, zero-based inclusive.


        (0, _createClass3.default)(SourceLocation, null, [{
          key: "range",
          value: function range(first, second) {
            if (!second) {
              return first && first.loc;
            } else if (!first || !first.loc || !second.loc || first.loc.lexer !== second.loc.lexer) {
              return null;
            } else {
              return new SourceLocation(first.loc.lexer, first.loc.start, second.loc.end);
            }
          }
        }]);
        return SourceLocation;
      }();

      exports.default = SourceLocation;
    }, {
      "babel-runtime/core-js/object/freeze": 7,
      "babel-runtime/helpers/classCallCheck": 8,
      "babel-runtime/helpers/createClass": 9
    }],
    89: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require("babel-runtime/helpers/createClass");

      var _createClass3 = _interopRequireDefault(_createClass2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * This file contains information and classes for the various kinds of styles
       * used in TeX. It provides a generic `Style` class, which holds information
       * about a specific style. It then provides instances of all the different kinds
       * of styles possible, and provides functions to move between them and get
       * information about them.
       */

      /**
       * The main style class. Contains a unique id for the style, a size (which is
       * the same for cramped and uncramped version of a style), and a cramped flag.
       */


      var Style = function () {
        function Style(id, size, cramped) {
          (0, _classCallCheck3.default)(this, Style);
          this.id = id;
          this.size = size;
          this.cramped = cramped;
        }
        /**
         * Get the style of a superscript given a base in the current style.
         */


        (0, _createClass3.default)(Style, [{
          key: "sup",
          value: function sup() {
            return styles[_sup[this.id]];
          }
          /**
           * Get the style of a subscript given a base in the current style.
           */

        }, {
          key: "sub",
          value: function sub() {
            return styles[_sub[this.id]];
          }
          /**
           * Get the style of a fraction numerator given the fraction in the current
           * style.
           */

        }, {
          key: "fracNum",
          value: function fracNum() {
            return styles[_fracNum[this.id]];
          }
          /**
           * Get the style of a fraction denominator given the fraction in the current
           * style.
           */

        }, {
          key: "fracDen",
          value: function fracDen() {
            return styles[_fracDen[this.id]];
          }
          /**
           * Get the cramped version of a style (in particular, cramping a cramped style
           * doesn't change the style).
           */

        }, {
          key: "cramp",
          value: function cramp() {
            return styles[_cramp[this.id]];
          }
          /**
           * Get a text or display version of this style.
           */

        }, {
          key: "text",
          value: function text() {
            return styles[_text[this.id]];
          }
          /**
           * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
           */

        }, {
          key: "isTight",
          value: function isTight() {
            return this.size >= 2;
          }
        }]);
        return Style;
      }(); // Export an interface for type checking, but don't expose the implementation.
      // This way, no more styles can be generated.
      // IDs of the different styles


      var D = 0;
      var Dc = 1;
      var T = 2;
      var Tc = 3;
      var S = 4;
      var Sc = 5;
      var SS = 6;
      var SSc = 7; // Instances of the different styles

      var styles = [new Style(D, 0, false), new Style(Dc, 0, true), new Style(T, 1, false), new Style(Tc, 1, true), new Style(S, 2, false), new Style(Sc, 2, true), new Style(SS, 3, false), new Style(SSc, 3, true)]; // Lookup tables for switching from one style to another

      var _sup = [S, Sc, S, Sc, SS, SSc, SS, SSc];
      var _sub = [Sc, Sc, Sc, Sc, SSc, SSc, SSc, SSc];
      var _fracNum = [T, Tc, S, Sc, SS, SSc, SS, SSc];
      var _fracDen = [Tc, Tc, Sc, Sc, SSc, SSc, SSc, SSc];
      var _cramp = [Dc, Dc, Tc, Tc, Sc, Sc, SSc, SSc];
      var _text = [D, Dc, T, Tc, T, Tc, T, Tc]; // We only export some of the styles.

      exports.default = {
        DISPLAY: styles[D],
        TEXT: styles[T],
        SCRIPT: styles[S],
        SCRIPTSCRIPT: styles[SS]
      };
    }, {
      "babel-runtime/helpers/classCallCheck": 8,
      "babel-runtime/helpers/createClass": 9
    }],
    90: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Token = undefined;

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require("babel-runtime/helpers/createClass");

      var _createClass3 = _interopRequireDefault(_createClass2);

      var _SourceLocation = require("./SourceLocation");

      var _SourceLocation2 = _interopRequireDefault(_SourceLocation);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * The resulting token returned from `lex`.
       *
       * It consists of the token text plus some position information.
       * The position information is essentially a range in an input string,
       * but instead of referencing the bare input string, we refer to the lexer.
       * That way it is possible to attach extra metadata to the input string,
       * like for example a file name or similar.
       *
       * The position information is optional, so it is OK to construct synthetic
       * tokens if appropriate. Not providing available position information may
       * lead to degraded error reporting, though.
       */

      /**
       * Interface required to break circular dependency between Token, Lexer, and
       * ParseError.
       */


      var Token = exports.Token = function () {
        function Token(text, // the text of this token
        loc) {
          (0, _classCallCheck3.default)(this, Token);
          this.text = text;
          this.loc = loc;
        }
        /**
         * Given a pair of tokens (this and endToken), compute a `Token` encompassing
         * the whole input range enclosed by these two.
         */


        (0, _createClass3.default)(Token, [{
          key: "range",
          value: function range(endToken, // last token of the range, inclusive
          text) // the text of the newly constructed token
          {
            return new Token(text, _SourceLocation2.default.range(this, endToken));
          }
        }]);
        return Token;
      }();
    }, {
      "./SourceLocation": 88,
      "babel-runtime/helpers/classCallCheck": 8,
      "babel-runtime/helpers/createClass": 9
    }],
    91: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _domTree = require("./domTree");

      var _domTree2 = _interopRequireDefault(_domTree);

      var _fontMetrics = require("./fontMetrics");

      var _fontMetrics2 = _interopRequireDefault(_fontMetrics);

      var _symbols = require("./symbols");

      var _symbols2 = _interopRequireDefault(_symbols);

      var _utils = require("./utils");

      var _utils2 = _interopRequireDefault(_utils);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      } // The following have to be loaded from Main-Italic font, using class mainit

      /* eslint no-console:0 */

      /**
       * This module contains general functions that can be used for building
       * different kinds of domTree nodes in a consistent manner.
       */


      var mainitLetters = ["\\imath", // dotless i
      "\\jmath", // dotless j
      "\\pounds"];
      /**
       * Looks up the given symbol in fontMetrics, after applying any symbol
       * replacements defined in symbol.js
       */

      var lookupSymbol = function lookupSymbol(value, fontFamily, mode) {
        // Replace the value with its replaced value from symbol.js
        if (_symbols2.default[mode][value] && _symbols2.default[mode][value].replace) {
          value = _symbols2.default[mode][value].replace;
        }

        return {
          value: value,
          metrics: _fontMetrics2.default.getCharacterMetrics(value, fontFamily)
        };
      };
      /**
       * Makes a symbolNode after translation via the list of symbols in symbols.js.
       * Correctly pulls out metrics for the character, and optionally takes a list of
       * classes to be attached to the node.
       *
       * TODO: make argument order closer to makeSpan
       * TODO: add a separate argument for math class (e.g. `mop`, `mbin`), which
       * should if present come first in `classes`.
       */


      var makeSymbol = function makeSymbol(value, fontFamily, mode, options, classes) {
        var lookup = lookupSymbol(value, fontFamily, mode);
        var metrics = lookup.metrics;
        value = lookup.value;
        var symbolNode = void 0;

        if (metrics) {
          var italic = metrics.italic;

          if (mode === "text") {
            italic = 0;
          }

          symbolNode = new _domTree2.default.symbolNode(value, metrics.height, metrics.depth, italic, metrics.skew, classes);
        } else {
          // TODO(emily): Figure out a good way to only print this in development
          typeof console !== "undefined" && console.warn("No character metrics for '" + value + "' in style '" + fontFamily + "'");
          symbolNode = new _domTree2.default.symbolNode(value, 0, 0, 0, 0, classes);
        }

        if (options) {
          symbolNode.maxFontSize = options.sizeMultiplier;

          if (options.style.isTight()) {
            symbolNode.classes.push("mtight");
          }

          if (options.getColor()) {
            symbolNode.style.color = options.getColor();
          }
        }

        return symbolNode;
      };
      /**
       * Makes a symbol in Main-Regular or AMS-Regular.
       * Used for rel, bin, open, close, inner, and punct.
       */


      var mathsym = function mathsym(value, mode, options, classes) {
        // Decide what font to render the symbol in by its entry in the symbols
        // table.
        // Have a special case for when the value = \ because the \ is used as a
        // textord in unsupported command errors but cannot be parsed as a regular
        // text ordinal and is therefore not present as a symbol in the symbols
        // table for text
        if (value === "\\" || _symbols2.default[mode][value].font === "main") {
          return makeSymbol(value, "Main-Regular", mode, options, classes);
        } else {
          return makeSymbol(value, "AMS-Regular", mode, options, classes.concat(["amsrm"]));
        }
      };
      /**
       * Makes a symbol in the default font for mathords and textords.
       */


      var mathDefault = function mathDefault(value, mode, options, classes, type) {
        if (type === "mathord") {
          var fontLookup = mathit(value, mode, options, classes);
          return makeSymbol(value, fontLookup.fontName, mode, options, classes.concat([fontLookup.fontClass]));
        } else if (type === "textord") {
          var font = _symbols2.default[mode][value] && _symbols2.default[mode][value].font;

          if (font === "ams") {
            return makeSymbol(value, "AMS-Regular", mode, options, classes.concat(["amsrm"]));
          } else {
            // if (font === "main") {
            return makeSymbol(value, "Main-Regular", mode, options, classes.concat(["mathrm"]));
          }
        } else {
          throw new Error("unexpected type: " + type + " in mathDefault");
        }
      };
      /**
       * Determines which of the two font names (Main-Italic and Math-Italic) and
       * corresponding style tags (mainit or mathit) to use for font "mathit",
       * depending on the symbol.  Use this function instead of fontMap for font
       * "mathit".
       */


      var mathit = function mathit(value, mode, options, classes) {
        if (/[0-9]/.test(value.charAt(0)) || // glyphs for \imath and \jmath do not exist in Math-Italic so we
        // need to use Main-Italic instead
        _utils2.default.contains(mainitLetters, value)) {
          return {
            fontName: "Main-Italic",
            fontClass: "mainit"
          };
        } else {
          return {
            fontName: "Math-Italic",
            fontClass: "mathit"
          };
        }
      };
      /**
       * Makes either a mathord or textord in the correct font and color.
       */


      var makeOrd = function makeOrd(group, options, type) {
        var mode = group.mode;
        var value = group.value;
        var classes = ["mord"];
        var font = options.font;

        if (font) {
          var fontLookup = void 0;

          if (font === "mathit" || _utils2.default.contains(mainitLetters, value)) {
            fontLookup = mathit(value, mode, options, classes);
          } else {
            fontLookup = fontMap[font];
          }

          if (lookupSymbol(value, fontLookup.fontName, mode).metrics) {
            return makeSymbol(value, fontLookup.fontName, mode, options, classes.concat([fontLookup.fontClass || font]));
          } else {
            return mathDefault(value, mode, options, classes, type);
          }
        } else {
          return mathDefault(value, mode, options, classes, type);
        }
      };
      /**
       * Combine as many characters as possible in the given array of characters
       * via their tryCombine method.
       */


      var tryCombineChars = function tryCombineChars(chars) {
        for (var i = 0; i < chars.length - 1; i++) {
          if (chars[i].tryCombine(chars[i + 1])) {
            chars.splice(i + 1, 1);
            i--;
          }
        }

        return chars;
      };
      /**
       * Calculate the height, depth, and maxFontSize of an element based on its
       * children.
       */


      var sizeElementFromChildren = function sizeElementFromChildren(elem) {
        var height = 0;
        var depth = 0;
        var maxFontSize = 0;

        if (elem.children) {
          for (var i = 0; i < elem.children.length; i++) {
            if (elem.children[i].height > height) {
              height = elem.children[i].height;
            }

            if (elem.children[i].depth > depth) {
              depth = elem.children[i].depth;
            }

            if (elem.children[i].maxFontSize > maxFontSize) {
              maxFontSize = elem.children[i].maxFontSize;
            }
          }
        }

        elem.height = height;
        elem.depth = depth;
        elem.maxFontSize = maxFontSize;
      };
      /**
       * Makes a span with the given list of classes, list of children, and options.
       *
       * TODO: Ensure that `options` is always provided (currently some call sites
       * don't pass it).
       * TODO: add a separate argument for math class (e.g. `mop`, `mbin`), which
       * should if present come first in `classes`.
       */


      var makeSpan = function makeSpan(classes, children, options) {
        var span = new _domTree2.default.span(classes, children, options);
        sizeElementFromChildren(span);
        return span;
      };
      /**
       * Prepends the given children to the given span, updating height, depth, and
       * maxFontSize.
       */


      var prependChildren = function prependChildren(span, children) {
        span.children = children.concat(span.children);
        sizeElementFromChildren(span);
      };
      /**
       * Makes a document fragment with the given list of children.
       */


      var makeFragment = function makeFragment(children) {
        var fragment = new _domTree2.default.documentFragment(children);
        sizeElementFromChildren(fragment);
        return fragment;
      };
      /**
       * Makes a vertical list by stacking elements and kerns on top of each other.
       * Allows for many different ways of specifying the positioning method.
       *
       * Arguments:
       *  - children: A list of child or kern nodes to be stacked on top of each other
       *              (i.e. the first element will be at the bottom, and the last at
       *              the top). Element nodes are specified as
       *                {type: "elem", elem: node}
       *              while kern nodes are specified as
       *                {type: "kern", size: size}
       *  - positionType: The method by which the vlist should be positioned. Valid
       *                  values are:
       *                   - "individualShift": The children list only contains elem
       *                                        nodes, and each node contains an extra
       *                                        "shift" value of how much it should be
       *                                        shifted (note that shifting is always
       *                                        moving downwards). positionData is
       *                                        ignored.
       *                   - "top": The positionData specifies the topmost point of
       *                            the vlist (note this is expected to be a height,
       *                            so positive values move up)
       *                   - "bottom": The positionData specifies the bottommost point
       *                               of the vlist (note this is expected to be a
       *                               depth, so positive values move down
       *                   - "shift": The vlist will be positioned such that its
       *                              baseline is positionData away from the baseline
       *                              of the first child. Positive values move
       *                              downwards.
       *                   - "firstBaseline": The vlist will be positioned such that
       *                                      its baseline is aligned with the
       *                                      baseline of the first child.
       *                                      positionData is ignored. (this is
       *                                      equivalent to "shift" with
       *                                      positionData=0)
       *  - positionData: Data used in different ways depending on positionType
       *  - options: An Options object
       *
       */


      var makeVList = function makeVList(children, positionType, positionData, options) {
        var depth = void 0;
        var currPos = void 0;
        var i = void 0;

        if (positionType === "individualShift") {
          var oldChildren = children;
          children = [oldChildren[0]]; // Add in kerns to the list of children to get each element to be
          // shifted to the correct specified shift

          depth = -oldChildren[0].shift - oldChildren[0].elem.depth;
          currPos = depth;

          for (i = 1; i < oldChildren.length; i++) {
            var diff = -oldChildren[i].shift - currPos - oldChildren[i].elem.depth;
            var size = diff - (oldChildren[i - 1].elem.height + oldChildren[i - 1].elem.depth);
            currPos = currPos + diff;
            children.push({
              type: "kern",
              size: size
            });
            children.push(oldChildren[i]);
          }
        } else if (positionType === "top") {
          // We always start at the bottom, so calculate the bottom by adding up
          // all the sizes
          var bottom = positionData;

          for (i = 0; i < children.length; i++) {
            if (children[i].type === "kern") {
              bottom -= children[i].size;
            } else {
              bottom -= children[i].elem.height + children[i].elem.depth;
            }
          }

          depth = bottom;
        } else if (positionType === "bottom") {
          depth = -positionData;
        } else if (positionType === "shift") {
          depth = -children[0].elem.depth - positionData;
        } else if (positionType === "firstBaseline") {
          depth = -children[0].elem.depth;
        } else {
          depth = 0;
        } // Create a strut that is taller than any list item. The strut is added to
        // each item, where it will determine the item's baseline. Since it has
        // `overflow:hidden`, the strut's top edge will sit on the item's line box's
        // top edge and the strut's bottom edge will sit on the item's baseline,
        // with no additional line-height spacing. This allows the item baseline to
        // be positioned precisely without worrying about font ascent and
        // line-height.


        var pstrutSize = 0;

        for (i = 0; i < children.length; i++) {
          if (children[i].type === "elem") {
            var child = children[i].elem;
            pstrutSize = Math.max(pstrutSize, child.maxFontSize, child.height);
          }
        }

        pstrutSize += 2;
        var pstrut = makeSpan(["pstrut"], []);
        pstrut.style.height = pstrutSize + "em"; // Create a new list of actual children at the correct offsets

        var realChildren = [];
        var minPos = depth;
        var maxPos = depth;
        currPos = depth;

        for (i = 0; i < children.length; i++) {
          if (children[i].type === "kern") {
            currPos += children[i].size;
          } else {
            var _child = children[i].elem;
            var childWrap = makeSpan([], [pstrut, _child]);
            childWrap.style.top = -pstrutSize - currPos - _child.depth + "em";

            if (children[i].marginLeft) {
              childWrap.style.marginLeft = children[i].marginLeft;
            }

            if (children[i].marginRight) {
              childWrap.style.marginRight = children[i].marginRight;
            }

            realChildren.push(childWrap);
            currPos += _child.height + _child.depth;
          }

          minPos = Math.min(minPos, currPos);
          maxPos = Math.max(maxPos, currPos);
        } // The vlist contents go in a table-cell with `vertical-align:bottom`.
        // This cell's bottom edge will determine the containing table's baseline
        // without overly expanding the containing line-box.


        var vlist = makeSpan(["vlist"], realChildren);
        vlist.style.height = maxPos + "em"; // A second row is used if necessary to represent the vlist's depth.

        var rows = void 0;

        if (minPos < 0) {
          var depthStrut = makeSpan(["vlist"], []);
          depthStrut.style.height = -minPos + "em"; // Safari wants the first row to have inline content; otherwise it
          // puts the bottom of the *second* row on the baseline.

          var topStrut = makeSpan(["vlist-s"], [new _domTree2.default.symbolNode("\u200B")]);
          rows = [makeSpan(["vlist-r"], [vlist, topStrut]), makeSpan(["vlist-r"], [depthStrut])];
        } else {
          rows = [makeSpan(["vlist-r"], [vlist])];
        }

        var vtable = makeSpan(["vlist-t"], rows);

        if (rows.length === 2) {
          vtable.classes.push("vlist-t2");
        }

        vtable.height = maxPos;
        vtable.depth = -minPos;
        return vtable;
      }; // Converts verb group into body string, dealing with \verb* form


      var makeVerb = function makeVerb(group, options) {
        var text = group.value.body;

        if (group.value.star) {
          text = text.replace(/ /g, "\u2423"); // Open Box
        } else {
          text = text.replace(/ /g, '\xA0'); // No-Break Space
          // (so that, in particular, spaces don't coalesce)
        }

        return text;
      }; // A map of spacing functions to their attributes, like size and corresponding
      // CSS class


      var spacingFunctions = {
        "\\qquad": {
          size: "2em",
          className: "qquad"
        },
        "\\quad": {
          size: "1em",
          className: "quad"
        },
        "\\enspace": {
          size: "0.5em",
          className: "enspace"
        },
        "\\;": {
          size: "0.277778em",
          className: "thickspace"
        },
        "\\:": {
          size: "0.22222em",
          className: "mediumspace"
        },
        "\\,": {
          size: "0.16667em",
          className: "thinspace"
        },
        "\\!": {
          size: "-0.16667em",
          className: "negativethinspace"
        }
      };
      /**
       * Maps TeX font commands to objects containing:
       * - variant: string used for "mathvariant" attribute in buildMathML.js
       * - fontName: the "style" parameter to fontMetrics.getCharacterMetrics
       */
      // A map between tex font commands an MathML mathvariant attribute values

      var fontMap = {
        // styles
        "mathbf": {
          variant: "bold",
          fontName: "Main-Bold"
        },
        "mathrm": {
          variant: "normal",
          fontName: "Main-Regular"
        },
        "textit": {
          variant: "italic",
          fontName: "Main-Italic"
        },
        // "mathit" is missing because it requires the use of two fonts: Main-Italic
        // and Math-Italic.  This is handled by a special case in makeOrd which ends
        // up calling mathit.
        // families
        "mathbb": {
          variant: "double-struck",
          fontName: "AMS-Regular"
        },
        "mathcal": {
          variant: "script",
          fontName: "Caligraphic-Regular"
        },
        "mathfrak": {
          variant: "fraktur",
          fontName: "Fraktur-Regular"
        },
        "mathscr": {
          variant: "script",
          fontName: "Script-Regular"
        },
        "mathsf": {
          variant: "sans-serif",
          fontName: "SansSerif-Regular"
        },
        "mathtt": {
          variant: "monospace",
          fontName: "Typewriter-Regular"
        }
      };
      exports.default = {
        fontMap: fontMap,
        makeSymbol: makeSymbol,
        mathsym: mathsym,
        makeSpan: makeSpan,
        makeFragment: makeFragment,
        makeVList: makeVList,
        makeOrd: makeOrd,
        makeVerb: makeVerb,
        tryCombineChars: tryCombineChars,
        prependChildren: prependChildren,
        spacingFunctions: spacingFunctions
      };
    }, {
      "./domTree": 98,
      "./fontMetrics": 101,
      "./symbols": 112,
      "./utils": 115
    }],
    92: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.buildGroup = exports.groupTypes = exports.makeNullDelimiter = exports.buildExpression = exports.spliceSpaces = undefined;

      var _stringify = require("babel-runtime/core-js/json/stringify");

      var _stringify2 = _interopRequireDefault(_stringify);

      exports.default = buildHTML;

      var _ParseError = require("./ParseError");

      var _ParseError2 = _interopRequireDefault(_ParseError);

      var _Style = require("./Style");

      var _Style2 = _interopRequireDefault(_Style);

      var _buildCommon = require("./buildCommon");

      var _buildCommon2 = _interopRequireDefault(_buildCommon);

      var _delimiter = require("./delimiter");

      var _delimiter2 = _interopRequireDefault(_delimiter);

      var _domTree = require("./domTree");

      var _domTree2 = _interopRequireDefault(_domTree);

      var _units = require("./units");

      var _utils = require("./utils");

      var _utils2 = _interopRequireDefault(_utils);

      var _stretchy = require("./stretchy");

      var _stretchy2 = _interopRequireDefault(_stretchy);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * WARNING: New methods on groupTypes should be added to src/functions.
       *
       * This file does the main work of building a domTree structure from a parse
       * tree. The entry point is the `buildHTML` function, which takes a parse tree.
       * Then, the buildExpression, buildGroup, and various groupTypes functions are
       * called, to produce a final HTML tree.
       */


      var makeSpan = _buildCommon2.default.makeSpan;

      var isSpace = function isSpace(node) {
        return node instanceof _domTree2.default.span && node.classes[0] === "mspace";
      }; // Binary atoms (first class `mbin`) change into ordinary atoms (`mord`)
      // depending on their surroundings. See TeXbook pg. 442-446, Rules 5 and 6,
      // and the text before Rule 19.


      var isBin = function isBin(node) {
        return node && node.classes[0] === "mbin";
      };

      var isBinLeftCanceller = function isBinLeftCanceller(node, isRealGroup) {
        // TODO: This code assumes that a node's math class is the first element
        // of its `classes` array. A later cleanup should ensure this, for
        // instance by changing the signature of `makeSpan`.
        if (node) {
          return _utils2.default.contains(["mbin", "mopen", "mrel", "mop", "mpunct"], node.classes[0]);
        } else {
          return isRealGroup;
        }
      };

      var isBinRightCanceller = function isBinRightCanceller(node, isRealGroup) {
        if (node) {
          return _utils2.default.contains(["mrel", "mclose", "mpunct"], node.classes[0]);
        } else {
          return isRealGroup;
        }
      };
      /**
       * Splice out any spaces from `children` starting at position `i`, and return
       * the spliced-out array. Returns null if `children[i]` does not exist or is not
       * a space.
       */


      var spliceSpaces = exports.spliceSpaces = function spliceSpaces(children, i) {
        var j = i;

        while (j < children.length && isSpace(children[j])) {
          j++;
        }

        if (j === i) {
          return null;
        } else {
          return children.splice(i, j - i);
        }
      };
      /**
       * Take a list of nodes, build them in order, and return a list of the built
       * nodes. documentFragments are flattened into their contents, so the
       * returned list contains no fragments. `isRealGroup` is true if `expression`
       * is a real group (no atoms will be added on either side), as opposed to
       * a partial group (e.g. one created by \color).
       */


      var buildExpression = exports.buildExpression = function buildExpression(expression, options, isRealGroup) {
        // Parse expressions into `groups`.
        var groups = [];

        for (var i = 0; i < expression.length; i++) {
          var group = expression[i];
          var output = buildGroup(group, options);

          if (output instanceof _domTree2.default.documentFragment) {
            Array.prototype.push.apply(groups, output.children);
          } else {
            groups.push(output);
          }
        } // At this point `groups` consists entirely of `symbolNode`s and `span`s.
        // Explicit spaces (e.g., \;, \,) should be ignored with respect to atom
        // spacing (e.g., "add thick space between mord and mrel"). Since CSS
        // adjacency rules implement atom spacing, spaces should be invisible to
        // CSS. So we splice them out of `groups` and into the atoms themselves.


        for (var _i = 0; _i < groups.length; _i++) {
          var spaces = spliceSpaces(groups, _i);

          if (spaces) {
            // Splicing of spaces may have removed all remaining groups.
            if (_i < groups.length) {
              // If there is a following group, move space within it.
              if (groups[_i] instanceof _domTree2.default.symbolNode) {
                groups[_i] = makeSpan([].concat(groups[_i].classes), [groups[_i]]);
              }

              _buildCommon2.default.prependChildren(groups[_i], spaces);
            } else {
              // Otherwise, put any spaces back at the end of the groups.
              Array.prototype.push.apply(groups, spaces);
              break;
            }
          }
        } // Binary operators change to ordinary symbols in some contexts.


        for (var _i2 = 0; _i2 < groups.length; _i2++) {
          if (isBin(groups[_i2]) && (isBinLeftCanceller(groups[_i2 - 1], isRealGroup) || isBinRightCanceller(groups[_i2 + 1], isRealGroup))) {
            groups[_i2].classes[0] = "mord";
          }
        } // Process \\not commands within the group.
        // TODO(kevinb): Handle multiple \\not commands in a row.
        // TODO(kevinb): Handle \\not{abc} correctly.  The \\not should appear over
        // the 'a' instead of the 'c'.


        for (var _i3 = 0; _i3 < groups.length; _i3++) {
          if (groups[_i3].value === "\u0338" && _i3 + 1 < groups.length) {
            var children = groups.slice(_i3, _i3 + 2);
            children[0].classes = ["mainrm"]; // \u0338 is a combining glyph so we could reorder the children so
            // that it comes after the other glyph.  This works correctly on
            // most browsers except for Safari.  Instead we absolutely position
            // the glyph and set its right side to match that of the other
            // glyph which is visually equivalent.

            children[0].style.position = "absolute";
            children[0].style.right = "0"; // Copy the classes from the second glyph to the new container.
            // This is so it behaves the same as though there was no \\not.

            var classes = groups[_i3 + 1].classes;
            var container = makeSpan(classes, children); // LaTeX adds a space between ords separated by a \\not.

            if (classes.indexOf("mord") !== -1) {
              // \glue(\thickmuskip) 2.77771 plus 2.77771
              container.style.paddingLeft = "0.277771em";
            } // Ensure that the \u0338 is positioned relative to the container.


            container.style.position = "relative";
            groups.splice(_i3, 2, container);
          }
        }

        return groups;
      }; // Return math atom class (mclass) of a domTree.


      var getTypeOfDomTree = function getTypeOfDomTree(node) {
        if (node instanceof _domTree2.default.documentFragment) {
          if (node.children.length) {
            return getTypeOfDomTree(node.children[node.children.length - 1]);
          }
        } else {
          if (_utils2.default.contains(["mord", "mop", "mbin", "mrel", "mopen", "mclose", "mpunct", "minner"], node.classes[0])) {
            return node.classes[0];
          }
        }

        return null;
      };
      /**
       * Sometimes, groups perform special rules when they have superscripts or
       * subscripts attached to them. This function lets the `supsub` group know that
       * its inner element should handle the superscripts and subscripts instead of
       * handling them itself.
       */


      var shouldHandleSupSub = function shouldHandleSupSub(group, options) {
        if (!group.value.base) {
          return false;
        } else {
          var base = group.value.base;

          if (base.type === "op") {
            // Operators handle supsubs differently when they have limits
            // (e.g. `\displaystyle\sum_2^3`)
            return base.value.limits && (options.style.size === _Style2.default.DISPLAY.size || base.value.alwaysHandleSupSub);
          } else if (base.type === "accent") {
            return isCharacterBox(base.value.base);
          } else if (base.type === "horizBrace") {
            var isSup = group.value.sub ? false : true;
            return isSup === base.value.isOver;
          } else {
            return null;
          }
        }
      };
      /**
       * Sometimes we want to pull out the innermost element of a group. In most
       * cases, this will just be the group itself, but when ordgroups and colors have
       * a single element, we want to pull that out.
       */


      var getBaseElem = function getBaseElem(group) {
        if (!group) {
          return false;
        } else if (group.type === "ordgroup") {
          if (group.value.length === 1) {
            return getBaseElem(group.value[0]);
          } else {
            return group;
          }
        } else if (group.type === "color") {
          if (group.value.value.length === 1) {
            return getBaseElem(group.value.value[0]);
          } else {
            return group;
          }
        } else if (group.type === "font") {
          return getBaseElem(group.value.body);
        } else {
          return group;
        }
      };
      /**
       * TeXbook algorithms often reference "character boxes", which are simply groups
       * with a single character in them. To decide if something is a character box,
       * we find its innermost group, and see if it is a single character.
       */


      var isCharacterBox = function isCharacterBox(group) {
        var baseElem = getBaseElem(group); // These are all they types of groups which hold single characters

        return baseElem.type === "mathord" || baseElem.type === "textord" || baseElem.type === "bin" || baseElem.type === "rel" || baseElem.type === "inner" || baseElem.type === "open" || baseElem.type === "close" || baseElem.type === "punct";
      };

      var makeNullDelimiter = exports.makeNullDelimiter = function makeNullDelimiter(options, classes) {
        var moreClasses = ["nulldelimiter"].concat(options.baseSizingClasses());
        return makeSpan(classes.concat(moreClasses));
      };
      /**
       * This is a map of group types to the function used to handle that type.
       * Simpler types come at the beginning, while complicated types come afterwards.
       */


      var groupTypes = exports.groupTypes = {};

      groupTypes.mathord = function (group, options) {
        return _buildCommon2.default.makeOrd(group, options, "mathord");
      };

      groupTypes.textord = function (group, options) {
        return _buildCommon2.default.makeOrd(group, options, "textord");
      };

      groupTypes.bin = function (group, options) {
        return _buildCommon2.default.mathsym(group.value, group.mode, options, ["mbin"]);
      };

      groupTypes.rel = function (group, options) {
        return _buildCommon2.default.mathsym(group.value, group.mode, options, ["mrel"]);
      };

      groupTypes.open = function (group, options) {
        return _buildCommon2.default.mathsym(group.value, group.mode, options, ["mopen"]);
      };

      groupTypes.close = function (group, options) {
        return _buildCommon2.default.mathsym(group.value, group.mode, options, ["mclose"]);
      };

      groupTypes.inner = function (group, options) {
        return _buildCommon2.default.mathsym(group.value, group.mode, options, ["minner"]);
      };

      groupTypes.punct = function (group, options) {
        return _buildCommon2.default.mathsym(group.value, group.mode, options, ["mpunct"]);
      };

      groupTypes.ordgroup = function (group, options) {
        return makeSpan(["mord"], buildExpression(group.value, options, true), options);
      };

      groupTypes.text = function (group, options) {
        var newOptions = options.withFont(group.value.font);
        var inner = buildExpression(group.value.body, newOptions, true);

        _buildCommon2.default.tryCombineChars(inner);

        return makeSpan(["mord", "text"], inner, newOptions);
      };

      groupTypes.color = function (group, options) {
        var elements = buildExpression(group.value.value, options.withColor(group.value.color), false); // \color isn't supposed to affect the type of the elements it contains.
        // To accomplish this, we wrap the results in a fragment, so the inner
        // elements will be able to directly interact with their neighbors. For
        // example, `\color{red}{2 +} 3` has the same spacing as `2 + 3`

        return new _buildCommon2.default.makeFragment(elements);
      };

      groupTypes.supsub = function (group, options) {
        // Superscript and subscripts are handled in the TeXbook on page
        // 445-446, rules 18(a-f).
        // Here is where we defer to the inner group if it should handle
        // superscripts and subscripts itself.
        if (shouldHandleSupSub(group, options)) {
          return groupTypes[group.value.base.type](group, options);
        }

        var base = buildGroup(group.value.base, options);
        var supm = void 0;
        var subm = void 0;
        var metrics = options.fontMetrics();
        var newOptions = void 0; // Rule 18a

        var supShift = 0;
        var subShift = 0;

        if (group.value.sup) {
          newOptions = options.havingStyle(options.style.sup());
          supm = buildGroup(group.value.sup, newOptions, options);

          if (!isCharacterBox(group.value.base)) {
            supShift = base.height - newOptions.fontMetrics().supDrop * newOptions.sizeMultiplier / options.sizeMultiplier;
          }
        }

        if (group.value.sub) {
          newOptions = options.havingStyle(options.style.sub());
          subm = buildGroup(group.value.sub, newOptions, options);

          if (!isCharacterBox(group.value.base)) {
            subShift = base.depth + newOptions.fontMetrics().subDrop * newOptions.sizeMultiplier / options.sizeMultiplier;
          }
        } // Rule 18c


        var minSupShift = void 0;

        if (options.style === _Style2.default.DISPLAY) {
          minSupShift = metrics.sup1;
        } else if (options.style.cramped) {
          minSupShift = metrics.sup3;
        } else {
          minSupShift = metrics.sup2;
        } // scriptspace is a font-size-independent size, so scale it
        // appropriately


        var multiplier = options.sizeMultiplier;
        var scriptspace = 0.5 / metrics.ptPerEm / multiplier + "em";
        var supsub = void 0;

        if (!group.value.sup) {
          // Rule 18b
          subShift = Math.max(subShift, metrics.sub1, subm.height - 0.8 * metrics.xHeight);
          var vlistElem = [{
            type: "elem",
            elem: subm,
            marginRight: scriptspace
          }]; // Subscripts shouldn't be shifted by the base's italic correction.
          // Account for that by shifting the subscript back the appropriate
          // amount. Note we only do this when the base is a single symbol.

          if (base instanceof _domTree2.default.symbolNode) {
            vlistElem[0].marginLeft = -base.italic + "em";
          }

          supsub = _buildCommon2.default.makeVList(vlistElem, "shift", subShift, options);
        } else if (!group.value.sub) {
          // Rule 18c, d
          supShift = Math.max(supShift, minSupShift, supm.depth + 0.25 * metrics.xHeight);
          supsub = _buildCommon2.default.makeVList([{
            type: "elem",
            elem: supm,
            marginRight: scriptspace
          }], "shift", -supShift, options);
        } else {
          supShift = Math.max(supShift, minSupShift, supm.depth + 0.25 * metrics.xHeight);
          subShift = Math.max(subShift, metrics.sub2);
          var ruleWidth = metrics.defaultRuleThickness; // Rule 18e

          if (supShift - supm.depth - (subm.height - subShift) < 4 * ruleWidth) {
            subShift = 4 * ruleWidth - (supShift - supm.depth) + subm.height;
            var psi = 0.8 * metrics.xHeight - (supShift - supm.depth);

            if (psi > 0) {
              supShift += psi;
              subShift -= psi;
            }
          }

          var _vlistElem = [{
            type: "elem",
            elem: subm,
            shift: subShift,
            marginRight: scriptspace
          }, {
            type: "elem",
            elem: supm,
            shift: -supShift,
            marginRight: scriptspace
          }]; // See comment above about subscripts not being shifted

          if (base instanceof _domTree2.default.symbolNode) {
            _vlistElem[0].marginLeft = -base.italic + "em";
          }

          supsub = _buildCommon2.default.makeVList(_vlistElem, "individualShift", null, options);
        } // We ensure to wrap the supsub vlist in a span.msupsub to reset text-align


        var mclass = getTypeOfDomTree(base) || "mord";
        return makeSpan([mclass], [base, makeSpan(["msupsub"], [supsub])], options);
      };

      groupTypes.genfrac = function (group, options) {
        // Fractions are handled in the TeXbook on pages 444-445, rules 15(a-e).
        // Figure out what style this fraction should be in based on the
        // function used
        var style = options.style;

        if (group.value.size === "display") {
          style = _Style2.default.DISPLAY;
        } else if (group.value.size === "text") {
          style = _Style2.default.TEXT;
        }

        var nstyle = style.fracNum();
        var dstyle = style.fracDen();
        var newOptions = void 0;
        newOptions = options.havingStyle(nstyle);
        var numerm = buildGroup(group.value.numer, newOptions, options);
        newOptions = options.havingStyle(dstyle);
        var denomm = buildGroup(group.value.denom, newOptions, options);
        var rule = void 0;
        var ruleWidth = void 0;
        var ruleSpacing = void 0;

        if (group.value.hasBarLine) {
          rule = makeLineSpan("frac-line", options);
          ruleWidth = rule.height;
          ruleSpacing = rule.height;
        } else {
          rule = null;
          ruleWidth = 0;
          ruleSpacing = options.fontMetrics().defaultRuleThickness;
        } // Rule 15b


        var numShift = void 0;
        var clearance = void 0;
        var denomShift = void 0;

        if (style.size === _Style2.default.DISPLAY.size) {
          numShift = options.fontMetrics().num1;

          if (ruleWidth > 0) {
            clearance = 3 * ruleSpacing;
          } else {
            clearance = 7 * ruleSpacing;
          }

          denomShift = options.fontMetrics().denom1;
        } else {
          if (ruleWidth > 0) {
            numShift = options.fontMetrics().num2;
            clearance = ruleSpacing;
          } else {
            numShift = options.fontMetrics().num3;
            clearance = 3 * ruleSpacing;
          }

          denomShift = options.fontMetrics().denom2;
        }

        var frac = void 0;

        if (ruleWidth === 0) {
          // Rule 15c
          var candidateClearance = numShift - numerm.depth - (denomm.height - denomShift);

          if (candidateClearance < clearance) {
            numShift += 0.5 * (clearance - candidateClearance);
            denomShift += 0.5 * (clearance - candidateClearance);
          }

          frac = _buildCommon2.default.makeVList([{
            type: "elem",
            elem: denomm,
            shift: denomShift
          }, {
            type: "elem",
            elem: numerm,
            shift: -numShift
          }], "individualShift", null, options);
        } else {
          // Rule 15d
          var axisHeight = options.fontMetrics().axisHeight;

          if (numShift - numerm.depth - (axisHeight + 0.5 * ruleWidth) < clearance) {
            numShift += clearance - (numShift - numerm.depth - (axisHeight + 0.5 * ruleWidth));
          }

          if (axisHeight - 0.5 * ruleWidth - (denomm.height - denomShift) < clearance) {
            denomShift += clearance - (axisHeight - 0.5 * ruleWidth - (denomm.height - denomShift));
          }

          var midShift = -(axisHeight - 0.5 * ruleWidth);
          frac = _buildCommon2.default.makeVList([{
            type: "elem",
            elem: denomm,
            shift: denomShift
          }, {
            type: "elem",
            elem: rule,
            shift: midShift
          }, {
            type: "elem",
            elem: numerm,
            shift: -numShift
          }], "individualShift", null, options);
        } // Since we manually change the style sometimes (with \dfrac or \tfrac),
        // account for the possible size change here.


        newOptions = options.havingStyle(style);
        frac.height *= newOptions.sizeMultiplier / options.sizeMultiplier;
        frac.depth *= newOptions.sizeMultiplier / options.sizeMultiplier; // Rule 15e

        var delimSize = void 0;

        if (style.size === _Style2.default.DISPLAY.size) {
          delimSize = options.fontMetrics().delim1;
        } else {
          delimSize = options.fontMetrics().delim2;
        }

        var leftDelim = void 0;
        var rightDelim = void 0;

        if (group.value.leftDelim == null) {
          leftDelim = makeNullDelimiter(options, ["mopen"]);
        } else {
          leftDelim = _delimiter2.default.customSizedDelim(group.value.leftDelim, delimSize, true, options.havingStyle(style), group.mode, ["mopen"]);
        }

        if (group.value.rightDelim == null) {
          rightDelim = makeNullDelimiter(options, ["mclose"]);
        } else {
          rightDelim = _delimiter2.default.customSizedDelim(group.value.rightDelim, delimSize, true, options.havingStyle(style), group.mode, ["mclose"]);
        }

        return makeSpan(["mord"].concat(newOptions.sizingClasses(options)), [leftDelim, makeSpan(["mfrac"], [frac]), rightDelim], options);
      };

      groupTypes.spacing = function (group, options) {
        if (group.value === "\\ " || group.value === "\\space" || group.value === " " || group.value === "~") {
          // Spaces are generated by adding an actual space. Each of these
          // things has an entry in the symbols table, so these will be turned
          // into appropriate outputs.
          if (group.mode === "text") {
            return _buildCommon2.default.makeOrd(group, options, "textord");
          } else {
            return makeSpan(["mspace"], [_buildCommon2.default.mathsym(group.value, group.mode, options)], options);
          }
        } else {
          // Other kinds of spaces are of arbitrary width. We use CSS to
          // generate these.
          return makeSpan(["mspace", _buildCommon2.default.spacingFunctions[group.value].className], [], options);
        }
      };

      groupTypes.lap = function (group, options) {
        // mathllap, mathrlap, mathclap
        var inner = void 0;

        if (group.value.alignment === "clap") {
          // ref: https://www.math.lsu.edu/~aperlis/publications/mathclap/
          inner = makeSpan([], [buildGroup(group.value.body, options)]); // wrap, since CSS will center a .clap > .inner > span

          inner = makeSpan(["inner"], [inner], options);
        } else {
          inner = makeSpan(["inner"], [buildGroup(group.value.body, options)]);
        }

        var fix = makeSpan(["fix"], []);
        return makeSpan(["mord", group.value.alignment], [inner, fix], options);
      };

      groupTypes.smash = function (group, options) {
        var node = makeSpan(["mord"], [buildGroup(group.value.body, options)]);

        if (!group.value.smashHeight && !group.value.smashDepth) {
          return node;
        }

        if (group.value.smashHeight) {
          node.height = 0; // In order to influence makeVList, we have to reset the children.

          if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
              node.children[i].height = 0;
            }
          }
        }

        if (group.value.smashDepth) {
          node.depth = 0;

          if (node.children) {
            for (var _i4 = 0; _i4 < node.children.length; _i4++) {
              node.children[_i4].depth = 0;
            }
          }
        } // At this point, we've reset the TeX-like height and depth values.
        // But the span still has an HTML line height.
        // makeVList applies "display: table-cell", which prevents the browser
        // from acting on that line height. So we'll call makeVList now.


        return _buildCommon2.default.makeVList([{
          type: "elem",
          elem: node
        }], "firstBaseline", null, options);
      };

      groupTypes.op = function (group, options) {
        // Operators are handled in the TeXbook pg. 443-444, rule 13(a).
        var supGroup = void 0;
        var subGroup = void 0;
        var hasLimits = false;

        if (group.type === "supsub") {
          // If we have limits, supsub will pass us its group to handle. Pull
          // out the superscript and subscript and set the group to the op in
          // its base.
          supGroup = group.value.sup;
          subGroup = group.value.sub;
          group = group.value.base;
          hasLimits = true;
        }

        var style = options.style; // Most operators have a large successor symbol, but these don't.

        var noSuccessor = ["\\smallint"];
        var large = false;

        if (style.size === _Style2.default.DISPLAY.size && group.value.symbol && !_utils2.default.contains(noSuccessor, group.value.body)) {
          // Most symbol operators get larger in displaystyle (rule 13)
          large = true;
        }

        var base = void 0;

        if (group.value.symbol) {
          // If this is a symbol, create the symbol.
          var fontName = large ? "Size2-Regular" : "Size1-Regular";
          base = _buildCommon2.default.makeSymbol(group.value.body, fontName, "math", options, ["mop", "op-symbol", large ? "large-op" : "small-op"]);
        } else if (group.value.value) {
          // If this is a list, compose that list.
          var inner = buildExpression(group.value.value, options, true);

          if (inner.length === 1 && inner[0] instanceof _domTree2.default.symbolNode) {
            base = inner[0];
            base.classes[0] = "mop"; // replace old mclass
          } else {
            base = makeSpan(["mop"], inner, options);
          }
        } else {
          // Otherwise, this is a text operator. Build the text from the
          // operator's name.
          // TODO(emily): Add a space in the middle of some of these
          // operators, like \limsup
          var output = [];

          for (var i = 1; i < group.value.body.length; i++) {
            output.push(_buildCommon2.default.mathsym(group.value.body[i], group.mode));
          }

          base = makeSpan(["mop"], output, options);
        } // If content of op is a single symbol, shift it vertically.


        var baseShift = 0;
        var slant = 0;

        if (base instanceof _domTree2.default.symbolNode) {
          // Shift the symbol so its center lies on the axis (rule 13). It
          // appears that our fonts have the centers of the symbols already
          // almost on the axis, so these numbers are very small. Note we
          // don't actually apply this here, but instead it is used either in
          // the vlist creation or separately when there are no limits.
          baseShift = (base.height - base.depth) / 2 - options.fontMetrics().axisHeight; // The slant of the symbol is just its italic correction.

          slant = base.italic;
        }

        if (hasLimits) {
          // IE 8 clips \int if it is in a display: inline-block. We wrap it
          // in a new span so it is an inline, and works.
          base = makeSpan([], [base]);
          var supm = void 0;
          var supKern = void 0;
          var subm = void 0;
          var subKern = void 0;
          var newOptions = void 0; // We manually have to handle the superscripts and subscripts. This,
          // aside from the kern calculations, is copied from supsub.

          if (supGroup) {
            newOptions = options.havingStyle(style.sup());
            supm = buildGroup(supGroup, newOptions, options);
            supKern = Math.max(options.fontMetrics().bigOpSpacing1, options.fontMetrics().bigOpSpacing3 - supm.depth);
          }

          if (subGroup) {
            newOptions = options.havingStyle(style.sub());
            subm = buildGroup(subGroup, newOptions, options);
            subKern = Math.max(options.fontMetrics().bigOpSpacing2, options.fontMetrics().bigOpSpacing4 - subm.height);
          } // Build the final group as a vlist of the possible subscript, base,
          // and possible superscript.


          var finalGroup = void 0;
          var top = void 0;
          var bottom = void 0;

          if (!supGroup) {
            top = base.height - baseShift; // Shift the limits by the slant of the symbol. Note
            // that we are supposed to shift the limits by 1/2 of the slant,
            // but since we are centering the limits adding a full slant of
            // margin will shift by 1/2 that.

            finalGroup = _buildCommon2.default.makeVList([{
              type: "kern",
              size: options.fontMetrics().bigOpSpacing5
            }, {
              type: "elem",
              elem: subm,
              marginLeft: -slant + "em"
            }, {
              type: "kern",
              size: subKern
            }, {
              type: "elem",
              elem: base
            }], "top", top, options);
          } else if (!subGroup) {
            bottom = base.depth + baseShift;
            finalGroup = _buildCommon2.default.makeVList([{
              type: "elem",
              elem: base
            }, {
              type: "kern",
              size: supKern
            }, {
              type: "elem",
              elem: supm,
              marginLeft: slant + "em"
            }, {
              type: "kern",
              size: options.fontMetrics().bigOpSpacing5
            }], "bottom", bottom, options);
          } else if (!supGroup && !subGroup) {
            // This case probably shouldn't occur (this would mean the
            // supsub was sending us a group with no superscript or
            // subscript) but be safe.
            return base;
          } else {
            bottom = options.fontMetrics().bigOpSpacing5 + subm.height + subm.depth + subKern + base.depth + baseShift;
            finalGroup = _buildCommon2.default.makeVList([{
              type: "kern",
              size: options.fontMetrics().bigOpSpacing5
            }, {
              type: "elem",
              elem: subm,
              marginLeft: -slant + "em"
            }, {
              type: "kern",
              size: subKern
            }, {
              type: "elem",
              elem: base
            }, {
              type: "kern",
              size: supKern
            }, {
              type: "elem",
              elem: supm,
              marginLeft: slant + "em"
            }, {
              type: "kern",
              size: options.fontMetrics().bigOpSpacing5
            }], "bottom", bottom, options);
          }

          return makeSpan(["mop", "op-limits"], [finalGroup], options);
        } else {
          if (baseShift) {
            base.style.position = "relative";
            base.style.top = baseShift + "em";
          }

          return base;
        }
      };

      groupTypes.mod = function (group, options) {
        var inner = [];

        if (group.value.modType === "bmod") {
          // “\nonscript\mskip-\medmuskip\mkern5mu”
          if (!options.style.isTight()) {
            inner.push(makeSpan(["mspace", "negativemediumspace"], [], options));
          }

          inner.push(makeSpan(["mspace", "thickspace"], [], options));
        } else if (options.style.size === _Style2.default.DISPLAY.size) {
          inner.push(makeSpan(["mspace", "quad"], [], options));
        } else if (group.value.modType === "mod") {
          inner.push(makeSpan(["mspace", "twelvemuspace"], [], options));
        } else {
          inner.push(makeSpan(["mspace", "eightmuspace"], [], options));
        }

        if (group.value.modType === "pod" || group.value.modType === "pmod") {
          inner.push(_buildCommon2.default.mathsym("(", group.mode));
        }

        if (group.value.modType !== "pod") {
          var modInner = [_buildCommon2.default.mathsym("m", group.mode), _buildCommon2.default.mathsym("o", group.mode), _buildCommon2.default.mathsym("d", group.mode)];

          if (group.value.modType === "bmod") {
            inner.push(makeSpan(["mbin"], modInner, options)); // “\mkern5mu\nonscript\mskip-\medmuskip”

            inner.push(makeSpan(["mspace", "thickspace"], [], options));

            if (!options.style.isTight()) {
              inner.push(makeSpan(["mspace", "negativemediumspace"], [], options));
            }
          } else {
            Array.prototype.push.apply(inner, modInner);
            inner.push(makeSpan(["mspace", "sixmuspace"], [], options));
          }
        }

        if (group.value.value) {
          Array.prototype.push.apply(inner, buildExpression(group.value.value, options, false));
        }

        if (group.value.modType === "pod" || group.value.modType === "pmod") {
          inner.push(_buildCommon2.default.mathsym(")", group.mode));
        }

        return _buildCommon2.default.makeFragment(inner);
      };

      groupTypes.katex = function (group, options) {
        // The KaTeX logo. The offsets for the K and a were chosen to look
        // good, but the offsets for the T, E, and X were taken from the
        // definition of \TeX in TeX (see TeXbook pg. 356)
        var k = makeSpan(["k"], [_buildCommon2.default.mathsym("K", group.mode)], options);
        var a = makeSpan(["a"], [_buildCommon2.default.mathsym("A", group.mode)], options);
        a.height = (a.height + 0.2) * 0.75;
        a.depth = (a.height - 0.2) * 0.75;
        var t = makeSpan(["t"], [_buildCommon2.default.mathsym("T", group.mode)], options);
        var e = makeSpan(["e"], [_buildCommon2.default.mathsym("E", group.mode)], options);
        e.height = e.height - 0.2155;
        e.depth = e.depth + 0.2155;
        var x = makeSpan(["x"], [_buildCommon2.default.mathsym("X", group.mode)], options);
        return makeSpan(["mord", "katex-logo"], [k, a, t, e, x], options);
      };

      var makeLineSpan = function makeLineSpan(className, options, thickness) {
        var line = makeSpan([className], [], options);
        line.height = thickness || options.fontMetrics().defaultRuleThickness;
        line.style.borderBottomWidth = line.height + "em";
        line.maxFontSize = 1.0;
        return line;
      };

      groupTypes.overline = function (group, options) {
        // Overlines are handled in the TeXbook pg 443, Rule 9.
        // Build the inner group in the cramped style.
        var innerGroup = buildGroup(group.value.body, options.havingCrampedStyle()); // Create the line above the body

        var line = makeLineSpan("overline-line", options); // Generate the vlist, with the appropriate kerns

        var vlist = _buildCommon2.default.makeVList([{
          type: "elem",
          elem: innerGroup
        }, {
          type: "kern",
          size: 3 * line.height
        }, {
          type: "elem",
          elem: line
        }, {
          type: "kern",
          size: line.height
        }], "firstBaseline", null, options);

        return makeSpan(["mord", "overline"], [vlist], options);
      };

      groupTypes.underline = function (group, options) {
        // Underlines are handled in the TeXbook pg 443, Rule 10.
        // Build the inner group.
        var innerGroup = buildGroup(group.value.body, options); // Create the line above the body

        var line = makeLineSpan("underline-line", options); // Generate the vlist, with the appropriate kerns

        var vlist = _buildCommon2.default.makeVList([{
          type: "kern",
          size: line.height
        }, {
          type: "elem",
          elem: line
        }, {
          type: "kern",
          size: 3 * line.height
        }, {
          type: "elem",
          elem: innerGroup
        }], "top", innerGroup.height, options);

        return makeSpan(["mord", "underline"], [vlist], options);
      };

      groupTypes.sqrt = function (group, options) {
        // Square roots are handled in the TeXbook pg. 443, Rule 11.
        // First, we do the same steps as in overline to build the inner group
        // and line
        var inner = buildGroup(group.value.body, options.havingCrampedStyle());

        if (inner.height === 0) {
          // Render a small surd.
          inner.height = options.fontMetrics().xHeight;
        } // Some groups can return document fragments.  Handle those by wrapping
        // them in a span.


        if (inner instanceof _domTree2.default.documentFragment) {
          inner = makeSpan([], [inner], options);
        } // Calculate the minimum size for the \surd delimiter


        var metrics = options.fontMetrics();
        var theta = metrics.defaultRuleThickness;
        var phi = theta;

        if (options.style.id < _Style2.default.TEXT.id) {
          phi = options.fontMetrics().xHeight;
        } // Calculate the clearance between the body and line


        var lineClearance = theta + phi / 4;
        var minDelimiterHeight = (inner.height + inner.depth + lineClearance + theta) * options.sizeMultiplier; // Create a sqrt SVG of the required minimum size

        var img = _delimiter2.default.customSizedDelim("\\surd", minDelimiterHeight, false, options, group.mode); // Calculate the actual line width.
        // This actually should depend on the chosen font -- e.g. \boldmath
        // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
        // have thicker rules.


        var ruleWidth = options.fontMetrics().sqrtRuleThickness * img.sizeMultiplier;
        var delimDepth = img.height - ruleWidth; // Adjust the clearance based on the delimiter size

        if (delimDepth > inner.height + inner.depth + lineClearance) {
          lineClearance = (lineClearance + delimDepth - inner.height - inner.depth) / 2;
        } // Shift the sqrt image


        var imgShift = img.height - inner.height - lineClearance - ruleWidth;
        inner.style.paddingLeft = img.advanceWidth + "em"; // Overlay the image and the argument.

        var body = _buildCommon2.default.makeVList([{
          type: "elem",
          elem: inner
        }, {
          type: "kern",
          size: -(inner.height + imgShift)
        }, {
          type: "elem",
          elem: img
        }, {
          type: "kern",
          size: ruleWidth
        }], "firstBaseline", null, options);

        body.children[0].children[0].classes.push("svg-align");

        if (!group.value.index) {
          return makeSpan(["mord", "sqrt"], [body], options);
        } else {
          // Handle the optional root index
          // The index is always in scriptscript style
          var newOptions = options.havingStyle(_Style2.default.SCRIPTSCRIPT);
          var rootm = buildGroup(group.value.index, newOptions, options); // The amount the index is shifted by. This is taken from the TeX
          // source, in the definition of `\r@@t`.

          var toShift = 0.6 * (body.height - body.depth); // Build a VList with the superscript shifted up correctly

          var rootVList = _buildCommon2.default.makeVList([{
            type: "elem",
            elem: rootm
          }], "shift", -toShift, options); // Add a class surrounding it so we can add on the appropriate
          // kerning


          var rootVListWrap = makeSpan(["root"], [rootVList]);
          return makeSpan(["mord", "sqrt"], [rootVListWrap, body], options);
        }
      };

      function sizingGroup(value, options, baseOptions) {
        var inner = buildExpression(value, options, false);
        var multiplier = options.sizeMultiplier / baseOptions.sizeMultiplier; // Add size-resetting classes to the inner list and set maxFontSize
        // manually. Handle nested size changes.

        for (var i = 0; i < inner.length; i++) {
          var pos = _utils2.default.indexOf(inner[i].classes, "sizing");

          if (pos < 0) {
            Array.prototype.push.apply(inner[i].classes, options.sizingClasses(baseOptions));
          } else if (inner[i].classes[pos + 1] === "reset-size" + options.size) {
            // This is a nested size change: e.g., inner[i] is the "b" in
            // `\Huge a \small b`. Override the old size (the `reset-` class)
            // but not the new size.
            inner[i].classes[pos + 1] = "reset-size" + baseOptions.size;
          }

          inner[i].height *= multiplier;
          inner[i].depth *= multiplier;
        }

        return _buildCommon2.default.makeFragment(inner);
      }

      groupTypes.sizing = function (group, options) {
        // Handle sizing operators like \Huge. Real TeX doesn't actually allow
        // these functions inside of math expressions, so we do some special
        // handling.
        var newOptions = options.havingSize(group.value.size);
        return sizingGroup(group.value.value, newOptions, options);
      };

      groupTypes.styling = function (group, options) {
        // Style changes are handled in the TeXbook on pg. 442, Rule 3.
        // Figure out what style we're changing to.
        var styleMap = {
          "display": _Style2.default.DISPLAY,
          "text": _Style2.default.TEXT,
          "script": _Style2.default.SCRIPT,
          "scriptscript": _Style2.default.SCRIPTSCRIPT
        };
        var newStyle = styleMap[group.value.style];
        var newOptions = options.havingStyle(newStyle);
        return sizingGroup(group.value.value, newOptions, options);
      };

      groupTypes.font = function (group, options) {
        var font = group.value.font;
        return buildGroup(group.value.body, options.withFont(font));
      };

      groupTypes.verb = function (group, options) {
        var text = _buildCommon2.default.makeVerb(group, options);

        var body = []; // \verb enters text mode and therefore is sized like \textstyle

        var newOptions = options.havingStyle(options.style.text());

        for (var i = 0; i < text.length; i++) {
          if (text[i] === '\xA0') {
            // spaces appear as nonbreaking space
            // The space character isn't in the Typewriter-Regular font,
            // so we implement it as a kern of the same size as a character.
            // 0.525 is the width of a texttt character in LaTeX.
            // It automatically gets scaled by the font size.
            var rule = makeSpan(["mord", "rule"], [], newOptions);
            rule.style.marginLeft = "0.525em";
            body.push(rule);
          } else {
            body.push(_buildCommon2.default.makeSymbol(text[i], "Typewriter-Regular", group.mode, newOptions, ["mathtt"]));
          }
        }

        _buildCommon2.default.tryCombineChars(body);

        return makeSpan(["mord", "text"].concat(newOptions.sizingClasses(options)), body, newOptions);
      };

      groupTypes.rule = function (group, options) {
        // Make an empty span for the rule
        var rule = makeSpan(["mord", "rule"], [], options); // Calculate the shift, width, and height of the rule, and account for units

        var shift = 0;

        if (group.value.shift) {
          shift = (0, _units.calculateSize)(group.value.shift, options);
        }

        var width = (0, _units.calculateSize)(group.value.width, options);
        var height = (0, _units.calculateSize)(group.value.height, options); // Style the rule to the right size

        rule.style.borderRightWidth = width + "em";
        rule.style.borderTopWidth = height + "em";
        rule.style.bottom = shift + "em"; // Record the height and width

        rule.width = width;
        rule.height = height + shift;
        rule.depth = -shift; // Font size is the number large enough that the browser will
        // reserve at least `absHeight` space above the baseline.
        // The 1.125 factor was empirically determined

        rule.maxFontSize = height * 1.125 * options.sizeMultiplier;
        return rule;
      };

      groupTypes.kern = function (group, options) {
        // Make an empty span for the rule
        var rule = makeSpan(["mord", "rule"], [], options);

        if (group.value.dimension) {
          var dimension = (0, _units.calculateSize)(group.value.dimension, options);
          rule.style.marginLeft = dimension + "em";
        }

        return rule;
      };

      groupTypes.accent = function (group, options) {
        // Accents are handled in the TeXbook pg. 443, rule 12.
        var base = group.value.base;
        var supsubGroup = void 0;

        if (group.type === "supsub") {
          // If our base is a character box, and we have superscripts and
          // subscripts, the supsub will defer to us. In particular, we want
          // to attach the superscripts and subscripts to the inner body (so
          // that the position of the superscripts and subscripts won't be
          // affected by the height of the accent). We accomplish this by
          // sticking the base of the accent into the base of the supsub, and
          // rendering that, while keeping track of where the accent is.
          // The supsub group is the group that was passed in
          var supsub = group; // The real accent group is the base of the supsub group

          group = supsub.value.base; // The character box is the base of the accent group

          base = group.value.base; // Stick the character box into the base of the supsub group

          supsub.value.base = base; // Rerender the supsub group with its new base, and store that
          // result.

          supsubGroup = buildGroup(supsub, options);
        } // Build the base group


        var body = buildGroup(base, options.havingCrampedStyle()); // Does the accent need to shift for the skew of a character?

        var mustShift = group.value.isShifty && isCharacterBox(base); // Calculate the skew of the accent. This is based on the line "If the
        // nucleus is not a single character, let s = 0; otherwise set s to the
        // kern amount for the nucleus followed by the \skewchar of its font."
        // Note that our skew metrics are just the kern between each character
        // and the skewchar.

        var skew = 0;

        if (mustShift) {
          // If the base is a character box, then we want the skew of the
          // innermost character. To do that, we find the innermost character:
          var baseChar = getBaseElem(base); // Then, we render its group to get the symbol inside it

          var baseGroup = buildGroup(baseChar, options.havingCrampedStyle()); // Finally, we pull the skew off of the symbol.

          skew = baseGroup.skew; // Note that we now throw away baseGroup, because the layers we
          // removed with getBaseElem might contain things like \color which
          // we can't get rid of.
          // TODO(emily): Find a better way to get the skew
        } // calculate the amount of space between the body and the accent


        var clearance = Math.min(body.height, options.fontMetrics().xHeight); // Build the accent

        var accentBody = void 0;

        if (!group.value.isStretchy) {
          var accent = _buildCommon2.default.makeSymbol(group.value.label, "Main-Regular", group.mode, options); // Remove the italic correction of the accent, because it only serves to
          // shift the accent over to a place we don't want.


          accent.italic = 0; // The \vec character that the fonts use is a combining character, and
          // thus shows up much too far to the left. To account for this, we add a
          // specific class which shifts the accent over to where we want it.
          // TODO(emily): Fix this in a better way, like by changing the font
          // Similarly, text accent \H is a combining character and
          // requires a different adjustment.

          var accentClass = null;

          if (group.value.label === "\\vec") {
            accentClass = "accent-vec";
          } else if (group.value.label === '\\H') {
            accentClass = "accent-hungarian";
          }

          accentBody = makeSpan([], [accent]);
          accentBody = makeSpan(["accent-body", accentClass], [accentBody]); // Shift the accent over by the skew. Note we shift by twice the skew
          // because we are centering the accent, so by adding 2*skew to the left,
          // we shift it to the right by 1*skew.

          accentBody.style.marginLeft = 2 * skew + "em";
          accentBody = _buildCommon2.default.makeVList([{
            type: "elem",
            elem: body
          }, {
            type: "kern",
            size: -clearance
          }, {
            type: "elem",
            elem: accentBody
          }], "firstBaseline", null, options);
        } else {
          accentBody = _stretchy2.default.svgSpan(group, options);
          accentBody = _buildCommon2.default.makeVList([{
            type: "elem",
            elem: body
          }, {
            type: "elem",
            elem: accentBody
          }], "firstBaseline", null, options);
          var styleSpan = accentBody.children[0].children[0].children[1];
          styleSpan.classes.push("svg-align"); // text-align: left;

          if (skew > 0) {
            // Shorten the accent and nudge it to the right.
            styleSpan.style.width = "calc(100% - " + 2 * skew + "em)";
            styleSpan.style.marginLeft = 2 * skew + "em";
          }
        }

        var accentWrap = makeSpan(["mord", "accent"], [accentBody], options);

        if (supsubGroup) {
          // Here, we replace the "base" child of the supsub with our newly
          // generated accent.
          supsubGroup.children[0] = accentWrap; // Since we don't rerun the height calculation after replacing the
          // accent, we manually recalculate height.

          supsubGroup.height = Math.max(accentWrap.height, supsubGroup.height); // Accents should always be ords, even when their innards are not.

          supsubGroup.classes[0] = "mord";
          return supsubGroup;
        } else {
          return accentWrap;
        }
      };

      groupTypes.horizBrace = function (group, options) {
        var style = options.style;
        var hasSupSub = group.type === "supsub";
        var supSubGroup = void 0;
        var newOptions = void 0;

        if (hasSupSub) {
          // Ref: LaTeX source2e: }}}}\limits}
          // i.e. LaTeX treats the brace similar to an op and passes it
          // with \limits, so we need to assign supsub style.
          if (group.value.sup) {
            newOptions = options.havingStyle(style.sup());
            supSubGroup = buildGroup(group.value.sup, newOptions, options);
          } else {
            newOptions = options.havingStyle(style.sub());
            supSubGroup = buildGroup(group.value.sub, newOptions, options);
          }

          group = group.value.base;
        } // Build the base group


        var body = buildGroup(group.value.base, options.havingBaseStyle(_Style2.default.DISPLAY)); // Create the stretchy element

        var braceBody = _stretchy2.default.svgSpan(group, options); // Generate the vlist, with the appropriate kerns               ┏━━━━━━━━┓
        // This first vlist contains the subject matter and the brace:   equation


        var vlist = void 0;

        if (group.value.isOver) {
          vlist = _buildCommon2.default.makeVList([{
            type: "elem",
            elem: body
          }, {
            type: "kern",
            size: 0.1
          }, {
            type: "elem",
            elem: braceBody
          }], "firstBaseline", null, options);
          vlist.children[0].children[0].children[1].classes.push("svg-align");
        } else {
          vlist = _buildCommon2.default.makeVList([{
            type: "elem",
            elem: braceBody
          }, {
            type: "kern",
            size: 0.1
          }, {
            type: "elem",
            elem: body
          }], "bottom", body.depth + 0.1 + braceBody.height, options);
          vlist.children[0].children[0].children[0].classes.push("svg-align");
        }

        if (hasSupSub) {
          // In order to write the supsub, wrap the first vlist in another vlist:
          // They can't all go in the same vlist, because the note might be wider
          // than the equation. We want the equation to control the brace width.
          //      note          long note           long note
          //   ┏━━━━━━━━┓   or    ┏━━━┓     not    ┏━━━━━━━━━┓
          //    equation           eqn                 eqn
          var vSpan = makeSpan(["mord", group.value.isOver ? "mover" : "munder"], [vlist], options);

          if (group.value.isOver) {
            vlist = _buildCommon2.default.makeVList([{
              type: "elem",
              elem: vSpan
            }, {
              type: "kern",
              size: 0.2
            }, {
              type: "elem",
              elem: supSubGroup
            }], "firstBaseline", null, options);
          } else {
            vlist = _buildCommon2.default.makeVList([{
              type: "elem",
              elem: supSubGroup
            }, {
              type: "kern",
              size: 0.2
            }, {
              type: "elem",
              elem: vSpan
            }], "bottom", vSpan.depth + 0.2 + supSubGroup.height, options);
          }
        }

        return makeSpan(["mord", group.value.isOver ? "mover" : "munder"], [vlist], options);
      };

      groupTypes.accentUnder = function (group, options) {
        // Treat under accents much like underlines.
        var innerGroup = buildGroup(group.value.base, options);

        var accentBody = _stretchy2.default.svgSpan(group, options);

        var kern = /tilde/.test(group.value.label) ? 0.12 : 0; // Generate the vlist, with the appropriate kerns

        var vlist = _buildCommon2.default.makeVList([{
          type: "elem",
          elem: accentBody
        }, {
          type: "kern",
          size: kern
        }, {
          type: "elem",
          elem: innerGroup
        }], "bottom", accentBody.height + kern, options);

        vlist.children[0].children[0].children[0].classes.push("svg-align");
        return makeSpan(["mord", "accentunder"], [vlist], options);
      };

      groupTypes.enclose = function (group, options) {
        // \cancel, \bcancel, \xcancel, \sout, \fbox, \colorbox, \fcolorbox
        var inner = buildGroup(group.value.body, options);
        var label = group.value.label.substr(1);
        var scale = options.sizeMultiplier;
        var img = void 0;
        var imgShift = 0;
        var isColorbox = /color/.test(label);

        if (label === "sout") {
          img = makeSpan(["stretchy", "sout"]);
          img.height = options.fontMetrics().defaultRuleThickness / scale;
          imgShift = -0.5 * options.fontMetrics().xHeight;
        } else {
          // Add horizontal padding
          inner.classes.push(/cancel/.test(label) ? "cancel-pad" : "boxpad"); // Add vertical padding

          var vertPad = 0; // ref: LaTeX source2e: \fboxsep = 3pt;  \fboxrule = .4pt
          // ref: cancel package: \advance\totalheight2\p@ % "+2"

          if (/box/.test(label)) {
            vertPad = label === "colorbox" ? 0.3 : 0.34;
          } else {
            vertPad = isCharacterBox(group.value.body) ? 0.2 : 0;
          }

          img = _stretchy2.default.encloseSpan(inner, label, vertPad, options);
          imgShift = inner.depth + vertPad;

          if (isColorbox) {
            img.style.backgroundColor = group.value.backgroundColor.value;

            if (label === "fcolorbox") {
              img.style.borderColor = group.value.borderColor.value;
            }
          }
        }

        var vlist = void 0;

        if (isColorbox) {
          vlist = _buildCommon2.default.makeVList([// Put the color background behind inner;
          {
            type: "elem",
            elem: img,
            shift: imgShift
          }, {
            type: "elem",
            elem: inner,
            shift: 0
          }], "individualShift", null, options);
        } else {
          vlist = _buildCommon2.default.makeVList([// Write the \cancel stroke on top of inner.
          {
            type: "elem",
            elem: inner,
            shift: 0
          }, {
            type: "elem",
            elem: img,
            shift: imgShift
          }], "individualShift", null, options);
        }

        if (/cancel/.test(label)) {
          vlist.children[0].children[0].children[1].classes.push("svg-align"); // cancel does not create horiz space for its line extension.
          // That is, not when adjacent to a mord.

          return makeSpan(["mord", "cancel-lap"], [vlist], options);
        } else {
          return makeSpan(["mord"], [vlist], options);
        }
      };

      groupTypes.xArrow = function (group, options) {
        var style = options.style; // Build the argument groups in the appropriate style.
        // Ref: amsmath.dtx:   \hbox{$\scriptstyle\mkern#3mu{#6}\mkern#4mu$}%

        var newOptions = options.havingStyle(style.sup());
        var upperGroup = buildGroup(group.value.body, newOptions, options);
        upperGroup.classes.push("x-arrow-pad");
        var lowerGroup = void 0;

        if (group.value.below) {
          // Build the lower group
          newOptions = options.havingStyle(style.sub());
          lowerGroup = buildGroup(group.value.below, newOptions, options);
          lowerGroup.classes.push("x-arrow-pad");
        }

        var arrowBody = _stretchy2.default.svgSpan(group, options); // Re shift: Note that stretchy.svgSpan returned arrowBody.depth = 0.
        // The point we want on the math axis is at 0.5 * arrowBody.height.


        var arrowShift = -options.fontMetrics().axisHeight + 0.5 * arrowBody.height; // 2 mu kern. Ref: amsmath.dtx: #7\if0#2\else\mkern#2mu\fi

        var upperShift = -options.fontMetrics().axisHeight - 0.5 * arrowBody.height - 0.111; // Generate the vlist

        var vlist = void 0;

        if (group.value.below) {
          var lowerShift = -options.fontMetrics().axisHeight + lowerGroup.height + 0.5 * arrowBody.height + 0.111;
          vlist = _buildCommon2.default.makeVList([{
            type: "elem",
            elem: upperGroup,
            shift: upperShift
          }, {
            type: "elem",
            elem: arrowBody,
            shift: arrowShift
          }, {
            type: "elem",
            elem: lowerGroup,
            shift: lowerShift
          }], "individualShift", null, options);
        } else {
          vlist = _buildCommon2.default.makeVList([{
            type: "elem",
            elem: upperGroup,
            shift: upperShift
          }, {
            type: "elem",
            elem: arrowBody,
            shift: arrowShift
          }], "individualShift", null, options);
        }

        vlist.children[0].children[0].children[1].classes.push("svg-align");
        return makeSpan(["mrel", "x-arrow"], [vlist], options);
      };

      groupTypes.mclass = function (group, options) {
        var elements = buildExpression(group.value.value, options, true);
        return makeSpan([group.value.mclass], elements, options);
      };

      groupTypes.raisebox = function (group, options) {
        var body = groupTypes.sizing({
          value: {
            value: [{
              type: "text",
              value: {
                body: group.value.value,
                font: "mathrm" // simulate \textrm

              }
            }],
            size: 6 // simulate \normalsize

          }
        }, options);
        var dy = (0, _units.calculateSize)(group.value.dy.value, options);
        return _buildCommon2.default.makeVList([{
          type: "elem",
          elem: body
        }], "shift", -dy, options);
      };
      /**
       * buildGroup is the function that takes a group and calls the correct groupType
       * function for it. It also handles the interaction of size and style changes
       * between parents and children.
       */


      var buildGroup = exports.buildGroup = function buildGroup(group, options, baseOptions) {
        if (!group) {
          return makeSpan();
        }

        if (groupTypes[group.type]) {
          // Call the groupTypes function
          var groupNode = groupTypes[group.type](group, options); // If the size changed between the parent and the current group, account
          // for that size difference.

          if (baseOptions && options.size !== baseOptions.size) {
            groupNode = makeSpan(options.sizingClasses(baseOptions), [groupNode], options);
            var multiplier = options.sizeMultiplier / baseOptions.sizeMultiplier;
            groupNode.height *= multiplier;
            groupNode.depth *= multiplier;
          }

          return groupNode;
        } else {
          throw new _ParseError2.default("Got group of unknown type: '" + group.type + "'");
        }
      };
      /**
       * Take an entire parse tree, and build it into an appropriate set of HTML
       * nodes.
       */


      function buildHTML(tree, options) {
        // buildExpression is destructive, so we need to make a clone
        // of the incoming tree so that it isn't accidentally changed
        tree = JSON.parse((0, _stringify2.default)(tree)); // Build the expression contained in the tree

        var expression = buildExpression(tree, options, true);
        var body = makeSpan(["base"], expression, options); // Add struts, which ensure that the top of the HTML element falls at the
        // height of the expression, and the bottom of the HTML element falls at the
        // depth of the expression.

        var topStrut = makeSpan(["strut"]);
        var bottomStrut = makeSpan(["strut", "bottom"]);
        topStrut.style.height = body.height + "em";
        bottomStrut.style.height = body.height + body.depth + "em"; // We'd like to use `vertical-align: top` but in IE 9 this lowers the
        // baseline of the box to the bottom of this strut (instead staying in the
        // normal place) so we use an absolute value for vertical-align instead

        bottomStrut.style.verticalAlign = -body.depth + "em"; // Wrap the struts and body together

        var htmlNode = makeSpan(["katex-html"], [topStrut, bottomStrut, body]);
        htmlNode.setAttribute("aria-hidden", "true");
        return htmlNode;
      }
    }, {
      "./ParseError": 84,
      "./Style": 89,
      "./buildCommon": 91,
      "./delimiter": 97,
      "./domTree": 98,
      "./stretchy": 110,
      "./units": 114,
      "./utils": 115,
      "babel-runtime/core-js/json/stringify": 5
    }],
    93: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.buildGroup = exports.buildExpression = exports.groupTypes = exports.makeText = undefined;
      exports.default = buildMathML;

      var _buildCommon = require("./buildCommon");

      var _buildCommon2 = _interopRequireDefault(_buildCommon);

      var _fontMetrics = require("./fontMetrics");

      var _fontMetrics2 = _interopRequireDefault(_fontMetrics);

      var _mathMLTree = require("./mathMLTree");

      var _mathMLTree2 = _interopRequireDefault(_mathMLTree);

      var _ParseError = require("./ParseError");

      var _ParseError2 = _interopRequireDefault(_ParseError);

      var _Style = require("./Style");

      var _Style2 = _interopRequireDefault(_Style);

      var _symbols = require("./symbols");

      var _symbols2 = _interopRequireDefault(_symbols);

      var _utils = require("./utils");

      var _utils2 = _interopRequireDefault(_utils);

      var _stretchy = require("./stretchy");

      var _stretchy2 = _interopRequireDefault(_stretchy);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * Takes a symbol and converts it into a MathML text node after performing
       * optional replacement from symbols.js.
       */

      /**
       * WARNING: New methods on groupTypes should be added to src/functions.
       *
       * This file converts a parse tree into a cooresponding MathML tree. The main
       * entry point is the `buildMathML` function, which takes a parse tree from the
       * parser.
       */


      var makeText = exports.makeText = function makeText(text, mode) {
        if (_symbols2.default[mode][text] && _symbols2.default[mode][text].replace) {
          text = _symbols2.default[mode][text].replace;
        }

        return new _mathMLTree2.default.TextNode(text);
      };
      /**
       * Returns the math variant as a string or null if none is required.
       */


      var getVariant = function getVariant(group, options) {
        var font = options.font;

        if (!font) {
          return null;
        }

        var mode = group.mode;

        if (font === "mathit") {
          return "italic";
        }

        var value = group.value;

        if (_utils2.default.contains(["\\imath", "\\jmath"], value)) {
          return null;
        }

        if (_symbols2.default[mode][value] && _symbols2.default[mode][value].replace) {
          value = _symbols2.default[mode][value].replace;
        }

        var fontName = _buildCommon2.default.fontMap[font].fontName;

        if (_fontMetrics2.default.getCharacterMetrics(value, fontName)) {
          return _buildCommon2.default.fontMap[options.font].variant;
        }

        return null;
      };
      /**
       * Functions for handling the different types of groups found in the parse
       * tree. Each function should take a parse group and return a MathML node.
       */


      var groupTypes = exports.groupTypes = {};
      var defaultVariant = {
        "mi": "italic",
        "mn": "normal",
        "mtext": "normal"
      };

      groupTypes.mathord = function (group, options) {
        var node = new _mathMLTree2.default.MathNode("mi", [makeText(group.value, group.mode)]);
        var variant = getVariant(group, options) || "italic";

        if (variant !== defaultVariant[node.type]) {
          node.setAttribute("mathvariant", variant);
        }

        return node;
      };

      groupTypes.textord = function (group, options) {
        var text = makeText(group.value, group.mode);
        var variant = getVariant(group, options) || "normal";
        var node = void 0;

        if (group.mode === 'text') {
          node = new _mathMLTree2.default.MathNode("mtext", [text]);
        } else if (/[0-9]/.test(group.value)) {
          // TODO(kevinb) merge adjacent <mn> nodes
          // do it as a post processing step
          node = new _mathMLTree2.default.MathNode("mn", [text]);
        } else if (group.value === "\\prime") {
          node = new _mathMLTree2.default.MathNode("mo", [text]);
        } else {
          node = new _mathMLTree2.default.MathNode("mi", [text]);
        }

        if (variant !== defaultVariant[node.type]) {
          node.setAttribute("mathvariant", variant);
        }

        return node;
      };

      groupTypes.bin = function (group) {
        var node = new _mathMLTree2.default.MathNode("mo", [makeText(group.value, group.mode)]);
        return node;
      };

      groupTypes.rel = function (group) {
        var node = new _mathMLTree2.default.MathNode("mo", [makeText(group.value, group.mode)]);
        return node;
      };

      groupTypes.open = function (group) {
        var node = new _mathMLTree2.default.MathNode("mo", [makeText(group.value, group.mode)]);
        return node;
      };

      groupTypes.close = function (group) {
        var node = new _mathMLTree2.default.MathNode("mo", [makeText(group.value, group.mode)]);
        return node;
      };

      groupTypes.inner = function (group) {
        var node = new _mathMLTree2.default.MathNode("mo", [makeText(group.value, group.mode)]);
        return node;
      };

      groupTypes.punct = function (group) {
        var node = new _mathMLTree2.default.MathNode("mo", [makeText(group.value, group.mode)]);
        node.setAttribute("separator", "true");
        return node;
      };

      groupTypes.ordgroup = function (group, options) {
        var inner = buildExpression(group.value, options);
        var node = new _mathMLTree2.default.MathNode("mrow", inner);
        return node;
      };

      groupTypes.text = function (group, options) {
        var body = group.value.body; // Convert each element of the body into MathML, and combine consecutive
        // <mtext> outputs into a single <mtext> tag.  In this way, we don't
        // nest non-text items (e.g., $nested-math$) within an <mtext>.

        var inner = [];
        var currentText = null;

        for (var i = 0; i < body.length; i++) {
          var _group = buildGroup(body[i], options);

          if (_group.type === 'mtext' && currentText != null) {
            Array.prototype.push.apply(currentText.children, _group.children);
          } else {
            inner.push(_group);

            if (_group.type === 'mtext') {
              currentText = _group;
            }
          }
        } // If there is a single tag in the end (presumably <mtext>),
        // just return it.  Otherwise, wrap them in an <mrow>.


        if (inner.length === 1) {
          return inner[0];
        } else {
          return new _mathMLTree2.default.MathNode("mrow", inner);
        }
      };

      groupTypes.color = function (group, options) {
        var inner = buildExpression(group.value.value, options);
        var node = new _mathMLTree2.default.MathNode("mstyle", inner);
        node.setAttribute("mathcolor", group.value.color);
        return node;
      };

      groupTypes.supsub = function (group, options) {
        // Is the inner group a relevant horizonal brace?
        var isBrace = false;
        var isOver = void 0;
        var isSup = void 0;

        if (group.value.base) {
          if (group.value.base.value.type === "horizBrace") {
            isSup = group.value.sup ? true : false;

            if (isSup === group.value.base.value.isOver) {
              isBrace = true;
              isOver = group.value.base.value.isOver;
            }
          }
        }

        var removeUnnecessaryRow = true;
        var children = [buildGroup(group.value.base, options, removeUnnecessaryRow)];

        if (group.value.sub) {
          children.push(buildGroup(group.value.sub, options, removeUnnecessaryRow));
        }

        if (group.value.sup) {
          children.push(buildGroup(group.value.sup, options, removeUnnecessaryRow));
        }

        var nodeType = void 0;

        if (isBrace) {
          nodeType = isOver ? "mover" : "munder";
        } else if (!group.value.sub) {
          nodeType = "msup";
        } else if (!group.value.sup) {
          nodeType = "msub";
        } else {
          var base = group.value.base;

          if (base && base.value.limits && options.style === _Style2.default.DISPLAY) {
            nodeType = "munderover";
          } else {
            nodeType = "msubsup";
          }
        }

        var node = new _mathMLTree2.default.MathNode(nodeType, children);
        return node;
      };

      groupTypes.genfrac = function (group, options) {
        var node = new _mathMLTree2.default.MathNode("mfrac", [buildGroup(group.value.numer, options), buildGroup(group.value.denom, options)]);

        if (!group.value.hasBarLine) {
          node.setAttribute("linethickness", "0px");
        }

        if (group.value.leftDelim != null || group.value.rightDelim != null) {
          var withDelims = [];

          if (group.value.leftDelim != null) {
            var leftOp = new _mathMLTree2.default.MathNode("mo", [new _mathMLTree2.default.TextNode(group.value.leftDelim)]);
            leftOp.setAttribute("fence", "true");
            withDelims.push(leftOp);
          }

          withDelims.push(node);

          if (group.value.rightDelim != null) {
            var rightOp = new _mathMLTree2.default.MathNode("mo", [new _mathMLTree2.default.TextNode(group.value.rightDelim)]);
            rightOp.setAttribute("fence", "true");
            withDelims.push(rightOp);
          }

          var outerNode = new _mathMLTree2.default.MathNode("mrow", withDelims);
          return outerNode;
        }

        return node;
      };

      groupTypes.sqrt = function (group, options) {
        var node = void 0;

        if (group.value.index) {
          node = new _mathMLTree2.default.MathNode("mroot", [buildGroup(group.value.body, options), buildGroup(group.value.index, options)]);
        } else {
          node = new _mathMLTree2.default.MathNode("msqrt", [buildGroup(group.value.body, options)]);
        }

        return node;
      };

      groupTypes.accent = function (group, options) {
        var accentNode = void 0;

        if (group.value.isStretchy) {
          accentNode = _stretchy2.default.mathMLnode(group.value.label);
        } else {
          accentNode = new _mathMLTree2.default.MathNode("mo", [makeText(group.value.label, group.mode)]);
        }

        var node = new _mathMLTree2.default.MathNode("mover", [buildGroup(group.value.base, options), accentNode]);
        node.setAttribute("accent", "true");
        return node;
      };

      groupTypes.spacing = function (group) {
        var node = void 0;

        if (group.value === "\\ " || group.value === "\\space" || group.value === " " || group.value === "~") {
          node = new _mathMLTree2.default.MathNode("mtext", [new _mathMLTree2.default.TextNode("\xA0")]);
        } else {
          node = new _mathMLTree2.default.MathNode("mspace");
          node.setAttribute("width", _buildCommon2.default.spacingFunctions[group.value].size);
        }

        return node;
      };

      groupTypes.op = function (group, options) {
        var node = void 0; // TODO(emily): handle big operators using the `largeop` attribute

        if (group.value.symbol) {
          // This is a symbol. Just add the symbol.
          node = new _mathMLTree2.default.MathNode("mo", [makeText(group.value.body, group.mode)]);
        } else if (group.value.value) {
          // This is an operator with children. Add them.
          node = new _mathMLTree2.default.MathNode("mo", buildExpression(group.value.value, options));
        } else {
          // This is a text operator. Add all of the characters from the
          // operator's name.
          // TODO(emily): Add a space in the middle of some of these
          // operators, like \limsup.
          node = new _mathMLTree2.default.MathNode("mi", [new _mathMLTree2.default.TextNode(group.value.body.slice(1))]); // TODO(ron): Append an <mo>&ApplyFunction;</mo> as in \operatorname
          // ref: https://www.w3.org/TR/REC-MathML/chap3_2.html#sec3.2.2
        }

        return node;
      };

      groupTypes.mod = function (group, options) {
        var inner = [];

        if (group.value.modType === "pod" || group.value.modType === "pmod") {
          inner.push(new _mathMLTree2.default.MathNode("mo", [makeText("(", group.mode)]));
        }

        if (group.value.modType !== "pod") {
          inner.push(new _mathMLTree2.default.MathNode("mo", [makeText("mod", group.mode)]));
        }

        if (group.value.value) {
          var space = new _mathMLTree2.default.MathNode("mspace");
          space.setAttribute("width", "0.333333em");
          inner.push(space);
          inner = inner.concat(buildExpression(group.value.value, options));
        }

        if (group.value.modType === "pod" || group.value.modType === "pmod") {
          inner.push(new _mathMLTree2.default.MathNode("mo", [makeText(")", group.mode)]));
        }

        return new _mathMLTree2.default.MathNode("mo", inner);
      };

      groupTypes.katex = function (group) {
        var node = new _mathMLTree2.default.MathNode("mtext", [new _mathMLTree2.default.TextNode("KaTeX")]);
        return node;
      };

      groupTypes.font = function (group, options) {
        var font = group.value.font;
        return buildGroup(group.value.body, options.withFont(font));
      };

      groupTypes.styling = function (group, options) {
        // Figure out what style we're changing to.
        // TODO(kevinb): dedupe this with buildHTML.js
        // This will be easier of handling of styling nodes is in the same file.
        var styleMap = {
          "display": _Style2.default.DISPLAY,
          "text": _Style2.default.TEXT,
          "script": _Style2.default.SCRIPT,
          "scriptscript": _Style2.default.SCRIPTSCRIPT
        };
        var newStyle = styleMap[group.value.style];
        var newOptions = options.havingStyle(newStyle);
        var inner = buildExpression(group.value.value, newOptions);
        var node = new _mathMLTree2.default.MathNode("mstyle", inner);
        var styleAttributes = {
          "display": ["0", "true"],
          "text": ["0", "false"],
          "script": ["1", "false"],
          "scriptscript": ["2", "false"]
        };
        var attr = styleAttributes[group.value.style];
        node.setAttribute("scriptlevel", attr[0]);
        node.setAttribute("displaystyle", attr[1]);
        return node;
      };

      groupTypes.sizing = function (group, options) {
        var newOptions = options.havingSize(group.value.size);
        var inner = buildExpression(group.value.value, newOptions);
        var node = new _mathMLTree2.default.MathNode("mstyle", inner); // TODO(emily): This doesn't produce the correct size for nested size
        // changes, because we don't keep state of what style we're currently
        // in, so we can't reset the size to normal before changing it.  Now
        // that we're passing an options parameter we should be able to fix
        // this.

        node.setAttribute("mathsize", newOptions.sizeMultiplier + "em");
        return node;
      };

      groupTypes.verb = function (group, options) {
        var text = new _mathMLTree2.default.TextNode(_buildCommon2.default.makeVerb(group, options));
        var node = new _mathMLTree2.default.MathNode("mtext", [text]);
        node.setAttribute("mathvariant", _buildCommon2.default.fontMap["mathtt"].variant);
        return node;
      };

      groupTypes.overline = function (group, options) {
        var operator = new _mathMLTree2.default.MathNode("mo", [new _mathMLTree2.default.TextNode("\u203E")]);
        operator.setAttribute("stretchy", "true");
        var node = new _mathMLTree2.default.MathNode("mover", [buildGroup(group.value.body, options), operator]);
        node.setAttribute("accent", "true");
        return node;
      };

      groupTypes.underline = function (group, options) {
        var operator = new _mathMLTree2.default.MathNode("mo", [new _mathMLTree2.default.TextNode("\u203E")]);
        operator.setAttribute("stretchy", "true");
        var node = new _mathMLTree2.default.MathNode("munder", [buildGroup(group.value.body, options), operator]);
        node.setAttribute("accentunder", "true");
        return node;
      };

      groupTypes.accentUnder = function (group, options) {
        var accentNode = _stretchy2.default.mathMLnode(group.value.label);

        var node = new _mathMLTree2.default.MathNode("munder", [buildGroup(group.value.body, options), accentNode]);
        node.setAttribute("accentunder", "true");
        return node;
      };

      groupTypes.enclose = function (group, options) {
        var node = new _mathMLTree2.default.MathNode("menclose", [buildGroup(group.value.body, options)]);

        switch (group.value.label) {
          case "\\cancel":
            node.setAttribute("notation", "updiagonalstrike");
            break;

          case "\\bcancel":
            node.setAttribute("notation", "downdiagonalstrike");
            break;

          case "\\sout":
            node.setAttribute("notation", "horizontalstrike");
            break;

          case "\\fbox":
            node.setAttribute("notation", "box");
            break;

          case "\\colorbox":
            node.setAttribute("mathbackground", group.value.backgroundColor.value);
            break;

          case "\\fcolorbox":
            node.setAttribute("mathbackground", group.value.backgroundColor.value); // TODO(ron): I don't know any way to set the border color.

            node.setAttribute("notation", "box");
            break;

          default:
            // xcancel
            node.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
        }

        return node;
      };

      groupTypes.horizBrace = function (group, options) {
        var accentNode = _stretchy2.default.mathMLnode(group.value.label);

        return new _mathMLTree2.default.MathNode(group.value.isOver ? "mover" : "munder", [buildGroup(group.value.base, options), accentNode]);
      };

      groupTypes.xArrow = function (group, options) {
        var arrowNode = _stretchy2.default.mathMLnode(group.value.label);

        var node = void 0;
        var lowerNode = void 0;

        if (group.value.body) {
          var upperNode = buildGroup(group.value.body, options);

          if (group.value.below) {
            lowerNode = buildGroup(group.value.below, options);
            node = new _mathMLTree2.default.MathNode("munderover", [arrowNode, lowerNode, upperNode]);
          } else {
            node = new _mathMLTree2.default.MathNode("mover", [arrowNode, upperNode]);
          }
        } else if (group.value.below) {
          lowerNode = buildGroup(group.value.below, options);
          node = new _mathMLTree2.default.MathNode("munder", [arrowNode, lowerNode]);
        } else {
          node = new _mathMLTree2.default.MathNode("mover", [arrowNode]);
        }

        return node;
      };

      groupTypes.rule = function (group) {
        // TODO(emily): Figure out if there's an actual way to draw black boxes
        // in MathML.
        var node = new _mathMLTree2.default.MathNode("mrow");
        return node;
      };

      groupTypes.kern = function (group) {
        // TODO(kevin): Figure out if there's a way to add space in MathML
        var node = new _mathMLTree2.default.MathNode("mrow");
        return node;
      };

      groupTypes.lap = function (group, options) {
        // mathllap, mathrlap, mathclap
        var node = new _mathMLTree2.default.MathNode("mpadded", [buildGroup(group.value.body, options)]);

        if (group.value.alignment !== "rlap") {
          var offset = group.value.alignment === "llap" ? "-1" : "-0.5";
          node.setAttribute("lspace", offset + "width");
        }

        node.setAttribute("width", "0px");
        return node;
      };

      groupTypes.smash = function (group, options) {
        var node = new _mathMLTree2.default.MathNode("mpadded", [buildGroup(group.value.body, options)]);

        if (group.value.smashHeight) {
          node.setAttribute("height", "0px");
        }

        if (group.value.smashDepth) {
          node.setAttribute("depth", "0px");
        }

        return node;
      };

      groupTypes.mclass = function (group, options) {
        var inner = buildExpression(group.value.value, options);
        return new _mathMLTree2.default.MathNode("mstyle", inner);
      };

      groupTypes.raisebox = function (group, options) {
        var node = new _mathMLTree2.default.MathNode("mpadded", [buildGroup(group.value.body, options)]);
        var dy = group.value.dy.value.number + group.value.dy.value.unit;
        node.setAttribute("voffset", dy);
        return node;
      };
      /**
       * Takes a list of nodes, builds them, and returns a list of the generated
       * MathML nodes. A little simpler than the HTML version because we don't do any
       * previous-node handling.
       */


      var buildExpression = exports.buildExpression = function buildExpression(expression, options) {
        var groups = [];

        for (var i = 0; i < expression.length; i++) {
          var group = expression[i];
          groups.push(buildGroup(group, options));
        } // TODO(kevinb): combine \\not with mrels and mords


        return groups;
      };
      /**
       * Takes a group from the parser and calls the appropriate groupTypes function
       * on it to produce a MathML node.
       */


      var buildGroup = exports.buildGroup = function buildGroup(group, options) {
        var removeUnnecessaryRow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (!group) {
          return new _mathMLTree2.default.MathNode("mrow");
        }

        if (groupTypes[group.type]) {
          // Call the groupTypes function
          var result = groupTypes[group.type](group, options);

          if (removeUnnecessaryRow) {
            if (result.type === "mrow" && result.children.length === 1) {
              return result.children[0];
            }
          }

          return result;
        } else {
          throw new _ParseError2.default("Got group of unknown type: '" + group.type + "'");
        }
      };
      /**
       * Takes a full parse tree and settings and builds a MathML representation of
       * it. In particular, we put the elements from building the parse tree into a
       * <semantics> tag so we can also include that TeX source as an annotation.
       *
       * Note that we actually return a domTree element with a `<math>` inside it so
       * we can do appropriate styling.
       */


      function buildMathML(tree, texExpression, options) {
        var expression = buildExpression(tree, options); // Wrap up the expression in an mrow so it is presented in the semantics
        // tag correctly.

        var wrapper = new _mathMLTree2.default.MathNode("mrow", expression); // Build a TeX annotation of the source

        var annotation = new _mathMLTree2.default.MathNode("annotation", [new _mathMLTree2.default.TextNode(texExpression)]);
        annotation.setAttribute("encoding", "application/x-tex");
        var semantics = new _mathMLTree2.default.MathNode("semantics", [wrapper, annotation]);
        var math = new _mathMLTree2.default.MathNode("math", [semantics]); // You can't style <math> nodes, so we wrap the node in a span.

        return _buildCommon2.default.makeSpan(["katex-mathml"], [math]);
      }
    }, {
      "./ParseError": 84,
      "./Style": 89,
      "./buildCommon": 91,
      "./fontMetrics": 101,
      "./mathMLTree": 108,
      "./stretchy": 110,
      "./symbols": 112,
      "./utils": 115
    }],
    94: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _buildHTML = require("./buildHTML");

      var _buildHTML2 = _interopRequireDefault(_buildHTML);

      var _buildMathML = require("./buildMathML");

      var _buildMathML2 = _interopRequireDefault(_buildMathML);

      var _buildCommon = require("./buildCommon");

      var _buildCommon2 = _interopRequireDefault(_buildCommon);

      var _Options = require("./Options");

      var _Options2 = _interopRequireDefault(_Options);

      var _Settings = require("./Settings");

      var _Settings2 = _interopRequireDefault(_Settings);

      var _Style = require("./Style");

      var _Style2 = _interopRequireDefault(_Style);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var buildTree = function buildTree(tree, expression, settings) {
        settings = settings || new _Settings2.default({});
        var startStyle = _Style2.default.TEXT;

        if (settings.displayMode) {
          startStyle = _Style2.default.DISPLAY;
        } // Setup the default options


        var options = new _Options2.default({
          style: startStyle,
          maxSize: settings.maxSize
        }); // `buildHTML` sometimes messes with the parse tree (like turning bins ->
        // ords), so we build the MathML version first.

        var mathMLNode = (0, _buildMathML2.default)(tree, expression, options);
        var htmlNode = (0, _buildHTML2.default)(tree, options);

        var katexNode = _buildCommon2.default.makeSpan(["katex"], [mathMLNode, htmlNode]);

        if (settings.displayMode) {
          return _buildCommon2.default.makeSpan(["katex-display"], [katexNode]);
        } else {
          return katexNode;
        }
      };

      exports.default = buildTree;
    }, {
      "./Options": 83,
      "./Settings": 87,
      "./Style": 89,
      "./buildCommon": 91,
      "./buildHTML": 92,
      "./buildMathML": 93
    }],
    95: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports._environments = undefined;
      exports.default = defineEnvironment;

      var _buildHTML = require("./buildHTML");

      var _buildMathML = require("./buildMathML");

      var _Options = require("./Options");

      var _Options2 = _interopRequireDefault(_Options);

      var _ParseNode = require("./ParseNode");

      var _ParseNode2 = _interopRequireDefault(_ParseNode);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * All registered environments.
       * `environments.js` exports this same dictionary again and makes it public.
       * `Parser.js` requires this dictionary via `environments.js`.
       */

      /**
       * The context contains the following properties:
       *  - mode: current parsing mode.
       *  - envName: the name of the environment, one of the listed names.
       *  - parser: the parser object.
       */

      /**
       *  - context: information and references provided by the parser
       *  - args: an array of arguments passed to \begin{name}
       *  - optArgs: an array of optional arguments passed to \begin{name}
       */

      /**
       *  - numArgs: (default 0) The number of arguments after the \begin{name} function.
       *  - argTypes: (optional) Just like for a function
       *  - allowedInText: (default false) Whether or not the environment is allowed
       *                   inside text mode (not enforced yet).
       *  - numOptionalArgs: (default 0) Just like for a function
       */

      /**
       * Final enviornment spec for use at parse time.
       * This is almost identical to `EnvDefSpec`, except it
       * 1. includes the function handler
       * 2. requires all arguments except argType
       * It is generated by `defineEnvironment()` below.
       */


      var _environments = exports._environments = {};

      function defineEnvironment(_ref) {
        var type = _ref.type,
            names = _ref.names,
            props = _ref.props,
            handler = _ref.handler,
            htmlBuilder = _ref.htmlBuilder,
            mathmlBuilder = _ref.mathmlBuilder; // Set default values of environments

        var data = {
          numArgs: props.numArgs || 0,
          greediness: 1,
          allowedInText: false,
          numOptionalArgs: 0,
          handler: handler
        };

        for (var i = 0; i < names.length; ++i) {
          _environments[names[i]] = data;
        }

        if (htmlBuilder) {
          _buildHTML.groupTypes[type] = htmlBuilder;
        }

        if (mathmlBuilder) {
          _buildMathML.groupTypes[type] = mathmlBuilder;
        }
      }
    }, {
      "./Options": 83,
      "./ParseNode": 85,
      "./buildHTML": 92,
      "./buildMathML": 93
    }],
    96: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ordargument = exports._functions = undefined;
      exports.default = defineFunction;

      var _buildHTML = require("./buildHTML");

      var _buildMathML = require("./buildMathML");
      /**
       * All registered functions.
       * `functions.js` just exports this same dictionary again and makes it public.
       * `Parser.js` requires this dictionary.
       */

      /** Context provided to function handlers for error messages. */
      // TODO: Enumerate all allowed output types.

      /**
       * Final function spec for use at parse time.
       * This is almost identical to `FunctionPropSpec`, except it
       * 1. includes the function handler, and
       * 2. requires all arguments except argTypes.
       * It is generated by `defineFunction()` below.
       */


      var _functions = exports._functions = {};

      function defineFunction(_ref) {
        var type = _ref.type,
            names = _ref.names,
            props = _ref.props,
            handler = _ref.handler,
            htmlBuilder = _ref.htmlBuilder,
            mathmlBuilder = _ref.mathmlBuilder; // Set default values of functions

        var data = {
          numArgs: props.numArgs,
          argTypes: props.argTypes,
          greediness: props.greediness === undefined ? 1 : props.greediness,
          allowedInText: !!props.allowedInText,
          allowedInMath: props.allowedInMath === undefined ? true : props.allowedInMath,
          numOptionalArgs: props.numOptionalArgs || 0,
          infix: !!props.infix,
          handler: handler
        };

        for (var i = 0; i < names.length; ++i) {
          _functions[names[i]] = data;
        }

        if (type) {
          if (htmlBuilder) {
            _buildHTML.groupTypes[type] = htmlBuilder;
          }

          if (mathmlBuilder) {
            _buildMathML.groupTypes[type] = mathmlBuilder;
          }
        }
      } // Since the corresponding buildHTML/buildMathML function expects a
      // list of elements, we normalize for different kinds of arguments


      var ordargument = exports.ordargument = function ordargument(arg) {
        if (arg.type === "ordgroup") {
          return arg.value;
        } else {
          return [arg];
        }
      };
    }, {
      "./buildHTML": 92,
      "./buildMathML": 93
    }],
    97: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _ParseError = require("./ParseError");

      var _ParseError2 = _interopRequireDefault(_ParseError);

      var _Style = require("./Style");

      var _Style2 = _interopRequireDefault(_Style);

      var _domTree = require("./domTree");

      var _domTree2 = _interopRequireDefault(_domTree);

      var _buildCommon = require("./buildCommon");

      var _buildCommon2 = _interopRequireDefault(_buildCommon);

      var _fontMetrics = require("./fontMetrics");

      var _fontMetrics2 = _interopRequireDefault(_fontMetrics);

      var _symbols = require("./symbols");

      var _symbols2 = _interopRequireDefault(_symbols);

      var _utils = require("./utils");

      var _utils2 = _interopRequireDefault(_utils);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * Get the metrics for a given symbol and font, after transformation (i.e.
       * after following replacement from symbols.js)
       */


      var getMetrics = function getMetrics(symbol, font) {
        if (_symbols2.default.math[symbol] && _symbols2.default.math[symbol].replace) {
          return _fontMetrics2.default.getCharacterMetrics(_symbols2.default.math[symbol].replace, font);
        } else {
          return _fontMetrics2.default.getCharacterMetrics(symbol, font);
        }
      };
      /**
       * Puts a delimiter span in a given style, and adds appropriate height, depth,
       * and maxFontSizes.
       */

      /**
       * This file deals with creating delimiters of various sizes. The TeXbook
       * discusses these routines on page 441-442, in the "Another subroutine sets box
       * x to a specified variable delimiter" paragraph.
       *
       * There are three main routines here. `makeSmallDelim` makes a delimiter in the
       * normal font, but in either text, script, or scriptscript style.
       * `makeLargeDelim` makes a delimiter in textstyle, but in one of the Size1,
       * Size2, Size3, or Size4 fonts. `makeStackedDelim` makes a delimiter out of
       * smaller pieces that are stacked on top of one another.
       *
       * The functions take a parameter `center`, which determines if the delimiter
       * should be centered around the axis.
       *
       * Then, there are three exposed functions. `sizedDelim` makes a delimiter in
       * one of the given sizes. This is used for things like `\bigl`.
       * `customSizedDelim` makes a delimiter with a given total height+depth. It is
       * called in places like `\sqrt`. `leftRightDelim` makes an appropriate
       * delimiter which surrounds an expression of a given height an depth. It is
       * used in `\left` and `\right`.
       */


      var styleWrap = function styleWrap(delim, toStyle, options, classes) {
        var newOptions = options.havingBaseStyle(toStyle);

        var span = _buildCommon2.default.makeSpan((classes || []).concat(newOptions.sizingClasses(options)), [delim], options);

        span.delimSizeMultiplier = newOptions.sizeMultiplier / options.sizeMultiplier;
        span.height *= span.delimSizeMultiplier;
        span.depth *= span.delimSizeMultiplier;
        span.maxFontSize = newOptions.sizeMultiplier;
        return span;
      };

      var centerSpan = function centerSpan(span, options, style) {
        var newOptions = options.havingBaseStyle(style);
        var shift = (1 - options.sizeMultiplier / newOptions.sizeMultiplier) * options.fontMetrics().axisHeight;
        span.classes.push("delimcenter");
        span.style.top = shift + "em";
        span.height -= shift;
        span.depth += shift;
      };
      /**
       * Makes a small delimiter. This is a delimiter that comes in the Main-Regular
       * font, but is restyled to either be in textstyle, scriptstyle, or
       * scriptscriptstyle.
       */


      var makeSmallDelim = function makeSmallDelim(delim, style, center, options, mode, classes) {
        var text = _buildCommon2.default.makeSymbol(delim, "Main-Regular", mode, options);

        var span = styleWrap(text, style, options, classes);

        if (center) {
          centerSpan(span, options, style);
        }

        return span;
      };
      /**
       * Builds a symbol in the given font size (note size is an integer)
       */


      var mathrmSize = function mathrmSize(value, size, mode, options) {
        return _buildCommon2.default.makeSymbol(value, "Size" + size + "-Regular", mode, options);
      };
      /**
       * Makes a large delimiter. This is a delimiter that comes in the Size1, Size2,
       * Size3, or Size4 fonts. It is always rendered in textstyle.
       */


      var makeLargeDelim = function makeLargeDelim(delim, size, center, options, mode, classes) {
        var inner = mathrmSize(delim, size, mode, options);
        var span = styleWrap(_buildCommon2.default.makeSpan(["delimsizing", "size" + size], [inner], options), _Style2.default.TEXT, options, classes);

        if (center) {
          centerSpan(span, options, _Style2.default.TEXT);
        }

        return span;
      };
      /**
       * Make an inner span with the given offset and in the given font. This is used
       * in `makeStackedDelim` to make the stacking pieces for the delimiter.
       */


      var makeInner = function makeInner(symbol, font, mode) {
        var sizeClass = void 0; // Apply the correct CSS class to choose the right font.

        if (font === "Size1-Regular") {
          sizeClass = "delim-size1";
        } else if (font === "Size4-Regular") {
          sizeClass = "delim-size4";
        }

        var inner = _buildCommon2.default.makeSpan(["delimsizinginner", sizeClass], [_buildCommon2.default.makeSpan([], [_buildCommon2.default.makeSymbol(symbol, font, mode)])]); // Since this will be passed into `makeVList` in the end, wrap the element
        // in the appropriate tag that VList uses.


        return {
          type: "elem",
          elem: inner
        };
      };
      /**
       * Make a stacked delimiter out of a given delimiter, with the total height at
       * least `heightTotal`. This routine is mentioned on page 442 of the TeXbook.
       */


      var makeStackedDelim = function makeStackedDelim(delim, heightTotal, center, options, mode, classes) {
        // There are four parts, the top, an optional middle, a repeated part, and a
        // bottom.
        var top = void 0;
        var middle = void 0;
        var repeat = void 0;
        var bottom = void 0;
        top = repeat = bottom = delim;
        middle = null; // Also keep track of what font the delimiters are in

        var font = "Size1-Regular"; // We set the parts and font based on the symbol. Note that we use
        // '\u23d0' instead of '|' and '\u2016' instead of '\\|' for the
        // repeats of the arrows

        if (delim === "\\uparrow") {
          repeat = bottom = "\u23D0";
        } else if (delim === "\\Uparrow") {
          repeat = bottom = "\u2016";
        } else if (delim === "\\downarrow") {
          top = repeat = "\u23D0";
        } else if (delim === "\\Downarrow") {
          top = repeat = "\u2016";
        } else if (delim === "\\updownarrow") {
          top = "\\uparrow";
          repeat = "\u23D0";
          bottom = "\\downarrow";
        } else if (delim === "\\Updownarrow") {
          top = "\\Uparrow";
          repeat = "\u2016";
          bottom = "\\Downarrow";
        } else if (delim === "[" || delim === "\\lbrack") {
          top = "\u23A1";
          repeat = "\u23A2";
          bottom = "\u23A3";
          font = "Size4-Regular";
        } else if (delim === "]" || delim === "\\rbrack") {
          top = "\u23A4";
          repeat = "\u23A5";
          bottom = "\u23A6";
          font = "Size4-Regular";
        } else if (delim === "\\lfloor") {
          repeat = top = "\u23A2";
          bottom = "\u23A3";
          font = "Size4-Regular";
        } else if (delim === "\\lceil") {
          top = "\u23A1";
          repeat = bottom = "\u23A2";
          font = "Size4-Regular";
        } else if (delim === "\\rfloor") {
          repeat = top = "\u23A5";
          bottom = "\u23A6";
          font = "Size4-Regular";
        } else if (delim === "\\rceil") {
          top = "\u23A4";
          repeat = bottom = "\u23A5";
          font = "Size4-Regular";
        } else if (delim === "(") {
          top = "\u239B";
          repeat = "\u239C";
          bottom = "\u239D";
          font = "Size4-Regular";
        } else if (delim === ")") {
          top = "\u239E";
          repeat = "\u239F";
          bottom = "\u23A0";
          font = "Size4-Regular";
        } else if (delim === "\\{" || delim === "\\lbrace") {
          top = "\u23A7";
          middle = "\u23A8";
          bottom = "\u23A9";
          repeat = "\u23AA";
          font = "Size4-Regular";
        } else if (delim === "\\}" || delim === "\\rbrace") {
          top = "\u23AB";
          middle = "\u23AC";
          bottom = "\u23AD";
          repeat = "\u23AA";
          font = "Size4-Regular";
        } else if (delim === "\\lgroup") {
          top = "\u23A7";
          bottom = "\u23A9";
          repeat = "\u23AA";
          font = "Size4-Regular";
        } else if (delim === "\\rgroup") {
          top = "\u23AB";
          bottom = "\u23AD";
          repeat = "\u23AA";
          font = "Size4-Regular";
        } else if (delim === "\\lmoustache") {
          top = "\u23A7";
          bottom = "\u23AD";
          repeat = "\u23AA";
          font = "Size4-Regular";
        } else if (delim === "\\rmoustache") {
          top = "\u23AB";
          bottom = "\u23A9";
          repeat = "\u23AA";
          font = "Size4-Regular";
        } // Get the metrics of the four sections


        var topMetrics = getMetrics(top, font);
        var topHeightTotal = topMetrics.height + topMetrics.depth;
        var repeatMetrics = getMetrics(repeat, font);
        var repeatHeightTotal = repeatMetrics.height + repeatMetrics.depth;
        var bottomMetrics = getMetrics(bottom, font);
        var bottomHeightTotal = bottomMetrics.height + bottomMetrics.depth;
        var middleHeightTotal = 0;
        var middleFactor = 1;

        if (middle !== null) {
          var middleMetrics = getMetrics(middle, font);
          middleHeightTotal = middleMetrics.height + middleMetrics.depth;
          middleFactor = 2; // repeat symmetrically above and below middle
        } // Calcuate the minimal height that the delimiter can have.
        // It is at least the size of the top, bottom, and optional middle combined.


        var minHeight = topHeightTotal + bottomHeightTotal + middleHeightTotal; // Compute the number of copies of the repeat symbol we will need

        var repeatCount = Math.ceil((heightTotal - minHeight) / (middleFactor * repeatHeightTotal)); // Compute the total height of the delimiter including all the symbols

        var realHeightTotal = minHeight + repeatCount * middleFactor * repeatHeightTotal; // The center of the delimiter is placed at the center of the axis. Note
        // that in this context, "center" means that the delimiter should be
        // centered around the axis in the current style, while normally it is
        // centered around the axis in textstyle.

        var axisHeight = options.fontMetrics().axisHeight;

        if (center) {
          axisHeight *= options.sizeMultiplier;
        } // Calculate the depth


        var depth = realHeightTotal / 2 - axisHeight; // Now, we start building the pieces that will go into the vlist
        // Keep a list of the inner pieces

        var inners = []; // Add the bottom symbol

        inners.push(makeInner(bottom, font, mode));

        if (middle === null) {
          // Add that many symbols
          for (var i = 0; i < repeatCount; i++) {
            inners.push(makeInner(repeat, font, mode));
          }
        } else {
          // When there is a middle bit, we need the middle part and two repeated
          // sections
          for (var _i = 0; _i < repeatCount; _i++) {
            inners.push(makeInner(repeat, font, mode));
          }

          inners.push(makeInner(middle, font, mode));

          for (var _i2 = 0; _i2 < repeatCount; _i2++) {
            inners.push(makeInner(repeat, font, mode));
          }
        } // Add the top symbol


        inners.push(makeInner(top, font, mode)); // Finally, build the vlist

        var newOptions = options.havingBaseStyle(_Style2.default.TEXT);

        var inner = _buildCommon2.default.makeVList(inners, "bottom", depth, newOptions);

        return styleWrap(_buildCommon2.default.makeSpan(["delimsizing", "mult"], [inner], newOptions), _Style2.default.TEXT, options, classes);
      };

      var sqrtSvg = function sqrtSvg(sqrtName, height, viewBoxHeight, options) {
        var alternate = void 0;

        if (sqrtName === "sqrtTall") {
          // sqrtTall is from glyph U23B7 in the font KaTeX_Size4-Regular
          // One path edge has a variable length. It runs from the viniculumn
          // to a point near (14 units) the bottom of the surd. The viniculum
          // is 40 units thick. So the length of the line in question is:
          var vertSegment = viewBoxHeight - 54;
          alternate = "M702 0H400000v40H742v" + vertSegment + "l-4 4-4 4c-.667.667\n-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h-12l-28-84c-16.667-52-96.667\n-294.333-240-727l-212 -643 -85 170c-4-3.333-8.333-7.667-13 -13l-13-13l77-155\n 77-156c66 199.333 139 419.667 219 661 l218 661zM702 0H400000v40H742z";
        }

        var pathNode = new _domTree2.default.pathNode(sqrtName, alternate); // Note: 1000:1 ratio of viewBox to document em width.

        var attributes = [["width", "400em"], ["height", height + "em"]];
        attributes.push(["viewBox", "0 0 400000 " + viewBoxHeight]);
        attributes.push(["preserveAspectRatio", "xMinYMin slice"]);
        var svg = new _domTree2.default.svgNode([pathNode], attributes);
        return _buildCommon2.default.makeSpan(["hide-tail"], [svg], options);
      };

      var sqrtSpan = function sqrtSpan(height, delim, options) {
        // Create a span containing an SVG image of a sqrt symbol.
        var span = void 0;
        var sizeMultiplier = options.sizeMultiplier; // default

        var spanHeight = void 0;
        var viewBoxHeight = void 0;

        if (delim.type === "small") {
          // Get an SVG that is derived from glyph U+221A in font KaTeX-Main.
          viewBoxHeight = 1000; // from font

          var newOptions = options.havingBaseStyle(delim.style);
          sizeMultiplier = newOptions.sizeMultiplier / options.sizeMultiplier;
          spanHeight = 1 * sizeMultiplier;
          span = sqrtSvg("sqrtMain", spanHeight, viewBoxHeight, options);
          span.style.minWidth = "0.853em";
          span.advanceWidth = 0.833 * sizeMultiplier; // from the font.
        } else if (delim.type === "large") {
          // These SVGs come from fonts: KaTeX_Size1, _Size2, etc.
          viewBoxHeight = 1000 * sizeToMaxHeight[delim.size];
          spanHeight = sizeToMaxHeight[delim.size] / sizeMultiplier;
          span = sqrtSvg("sqrtSize" + delim.size, spanHeight, viewBoxHeight, options);
          span.style.minWidth = "1.02em";
          span.advanceWidth = 1.0 / sizeMultiplier; // from the font
        } else {
          // Tall sqrt. In TeX, this would be stacked using multiple glyphs.
          // We'll use a single SVG to accomplish the same thing.
          spanHeight = height / sizeMultiplier;
          viewBoxHeight = Math.floor(1000 * height);
          span = sqrtSvg("sqrtTall", spanHeight, viewBoxHeight, options);
          span.style.minWidth = "0.742em";
          span.advanceWidth = 1.056 / sizeMultiplier;
        }

        span.height = spanHeight;
        span.style.height = spanHeight + "em";
        span.sizeMultiplier = sizeMultiplier;
        return span;
      }; // There are three kinds of delimiters, delimiters that stack when they become
      // too large


      var stackLargeDelimiters = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd"]; // delimiters that always stack

      var stackAlwaysDelimiters = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache"]; // and delimiters that never stack

      var stackNeverDelimiters = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]; // Metrics of the different sizes. Found by looking at TeX's output of
      // $\bigl| // \Bigl| \biggl| \Biggl| \showlists$
      // Used to create stacked delimiters of appropriate sizes in makeSizedDelim.

      var sizeToMaxHeight = [0, 1.2, 1.8, 2.4, 3.0];
      /**
       * Used to create a delimiter of a specific size, where `size` is 1, 2, 3, or 4.
       */

      var makeSizedDelim = function makeSizedDelim(delim, size, options, mode, classes) {
        // < and > turn into \langle and \rangle in delimiters
        if (delim === "<" || delim === "\\lt") {
          delim = "\\langle";
        } else if (delim === ">" || delim === "\\gt") {
          delim = "\\rangle";
        } // Sized delimiters are never centered.


        if (_utils2.default.contains(stackLargeDelimiters, delim) || _utils2.default.contains(stackNeverDelimiters, delim)) {
          return makeLargeDelim(delim, size, false, options, mode, classes);
        } else if (_utils2.default.contains(stackAlwaysDelimiters, delim)) {
          return makeStackedDelim(delim, sizeToMaxHeight[size], false, options, mode, classes);
        } else {
          throw new _ParseError2.default("Illegal delimiter: '" + delim + "'");
        }
      };
      /**
       * There are three different sequences of delimiter sizes that the delimiters
       * follow depending on the kind of delimiter. This is used when creating custom
       * sized delimiters to decide whether to create a small, large, or stacked
       * delimiter.
       *
       * In real TeX, these sequences aren't explicitly defined, but are instead
       * defined inside the font metrics. Since there are only three sequences that
       * are possible for the delimiters that TeX defines, it is easier to just encode
       * them explicitly here.
       */
      // Delimiters that never stack try small delimiters and large delimiters only


      var stackNeverDelimiterSequence = [{
        type: "small",
        style: _Style2.default.SCRIPTSCRIPT
      }, {
        type: "small",
        style: _Style2.default.SCRIPT
      }, {
        type: "small",
        style: _Style2.default.TEXT
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }]; // Delimiters that always stack try the small delimiters first, then stack

      var stackAlwaysDelimiterSequence = [{
        type: "small",
        style: _Style2.default.SCRIPTSCRIPT
      }, {
        type: "small",
        style: _Style2.default.SCRIPT
      }, {
        type: "small",
        style: _Style2.default.TEXT
      }, {
        type: "stack"
      }]; // Delimiters that stack when large try the small and then large delimiters, and
      // stack afterwards

      var stackLargeDelimiterSequence = [{
        type: "small",
        style: _Style2.default.SCRIPTSCRIPT
      }, {
        type: "small",
        style: _Style2.default.SCRIPT
      }, {
        type: "small",
        style: _Style2.default.TEXT
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }, {
        type: "stack"
      }];
      /**
       * Get the font used in a delimiter based on what kind of delimiter it is.
       */

      var delimTypeToFont = function delimTypeToFont(type) {
        if (type.type === "small") {
          return "Main-Regular";
        } else if (type.type === "large") {
          return "Size" + type.size + "-Regular";
        } else if (type.type === "stack") {
          return "Size4-Regular";
        }
      };
      /**
       * Traverse a sequence of types of delimiters to decide what kind of delimiter
       * should be used to create a delimiter of the given height+depth.
       */


      var traverseSequence = function traverseSequence(delim, height, sequence, options) {
        // Here, we choose the index we should start at in the sequences. In smaller
        // sizes (which correspond to larger numbers in style.size) we start earlier
        // in the sequence. Thus, scriptscript starts at index 3-3=0, script starts
        // at index 3-2=1, text starts at 3-1=2, and display starts at min(2,3-0)=2
        var start = Math.min(2, 3 - options.style.size);

        for (var i = start; i < sequence.length; i++) {
          if (sequence[i].type === "stack") {
            // This is always the last delimiter, so we just break the loop now.
            break;
          }

          var metrics = getMetrics(delim, delimTypeToFont(sequence[i]));
          var heightDepth = metrics.height + metrics.depth; // Small delimiters are scaled down versions of the same font, so we
          // account for the style change size.

          if (sequence[i].type === "small") {
            var newOptions = options.havingBaseStyle(sequence[i].style);
            heightDepth *= newOptions.sizeMultiplier;
          } // Check if the delimiter at this size works for the given height.


          if (heightDepth > height) {
            return sequence[i];
          }
        } // If we reached the end of the sequence, return the last sequence element.


        return sequence[sequence.length - 1];
      };
      /**
       * Make a delimiter of a given height+depth, with optional centering. Here, we
       * traverse the sequences, and create a delimiter that the sequence tells us to.
       */


      var makeCustomSizedDelim = function makeCustomSizedDelim(delim, height, center, options, mode, classes) {
        if (delim === "<" || delim === "\\lt") {
          delim = "\\langle";
        } else if (delim === ">" || delim === "\\gt") {
          delim = "\\rangle";
        } // Decide what sequence to use


        var sequence = void 0;

        if (_utils2.default.contains(stackNeverDelimiters, delim)) {
          sequence = stackNeverDelimiterSequence;
        } else if (_utils2.default.contains(stackLargeDelimiters, delim)) {
          sequence = stackLargeDelimiterSequence;
        } else {
          sequence = stackAlwaysDelimiterSequence;
        } // Look through the sequence


        var delimType = traverseSequence(delim, height, sequence, options);

        if (delim === "\\surd") {
          // Get an SVG image
          return sqrtSpan(height, delimType, options);
        } else {
          // Get the delimiter from font glyphs.
          // Depending on the sequence element we decided on, call the
          // appropriate function.
          if (delimType.type === "small") {
            return makeSmallDelim(delim, delimType.style, center, options, mode, classes);
          } else if (delimType.type === "large") {
            return makeLargeDelim(delim, delimType.size, center, options, mode, classes);
          } else if (delimType.type === "stack") {
            return makeStackedDelim(delim, height, center, options, mode, classes);
          }
        }
      };
      /**
       * Make a delimiter for use with `\left` and `\right`, given a height and depth
       * of an expression that the delimiters surround.
       */


      var makeLeftRightDelim = function makeLeftRightDelim(delim, height, depth, options, mode, classes) {
        // We always center \left/\right delimiters, so the axis is always shifted
        var axisHeight = options.fontMetrics().axisHeight * options.sizeMultiplier; // Taken from TeX source, tex.web, function make_left_right

        var delimiterFactor = 901;
        var delimiterExtend = 5.0 / options.fontMetrics().ptPerEm;
        var maxDistFromAxis = Math.max(height - axisHeight, depth + axisHeight);
        var totalHeight = Math.max( // In real TeX, calculations are done using integral values which are
        // 65536 per pt, or 655360 per em. So, the division here truncates in
        // TeX but doesn't here, producing different results. If we wanted to
        // exactly match TeX's calculation, we could do
        //   Math.floor(655360 * maxDistFromAxis / 500) *
        //    delimiterFactor / 655360
        // (To see the difference, compare
        //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
        // in TeX and KaTeX)
        maxDistFromAxis / 500 * delimiterFactor, 2 * maxDistFromAxis - delimiterExtend); // Finally, we defer to `makeCustomSizedDelim` with our calculated total
        // height

        return makeCustomSizedDelim(delim, totalHeight, true, options, mode, classes);
      };

      exports.default = {
        sizedDelim: makeSizedDelim,
        customSizedDelim: makeCustomSizedDelim,
        leftRightDelim: makeLeftRightDelim
      };
    }, {
      "./ParseError": 84,
      "./Style": 89,
      "./buildCommon": 91,
      "./domTree": 98,
      "./fontMetrics": 101,
      "./symbols": 112,
      "./utils": 115
    }],
    98: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

      var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require("babel-runtime/helpers/createClass");

      var _createClass3 = _interopRequireDefault(_createClass2);

      var _unicodeRegexes = require("./unicodeRegexes");

      var _utils = require("./utils");

      var _utils2 = _interopRequireDefault(_utils);

      var _svgGeometry = require("./svgGeometry");

      var _svgGeometry2 = _interopRequireDefault(_svgGeometry);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * Create an HTML className based on a list of classes. In addition to joining
       * with spaces, we also remove null or empty classes.
       */


      var createClass = function createClass(classes) {
        classes = classes.slice();

        for (var i = classes.length - 1; i >= 0; i--) {
          if (!classes[i]) {
            classes.splice(i, 1);
          }
        }

        return classes.join(" ");
      };
      /**
       * This node represents a span node, with a className, a list of children, and
       * an inline style. It also contains information about its height, depth, and
       * maxFontSize.
       */

      /**
       * These objects store the data about the DOM nodes we create, as well as some
       * extra data. They can then be transformed into real DOM nodes with the
       * `toNode` function or HTML markup using `toMarkup`. They are useful for both
       * storing extra properties on the nodes, as well as providing a way to easily
       * work with the DOM.
       *
       * Similar functions for working with MathML nodes exist in mathMLTree.js.
       */


      var span = function () {
        function span(classes, children, options) {
          (0, _classCallCheck3.default)(this, span);
          this.classes = classes || [];
          this.children = children || [];
          this.height = 0;
          this.depth = 0;
          this.maxFontSize = 0;
          this.style = {};
          this.attributes = {};

          if (options) {
            if (options.style.isTight()) {
              this.classes.push("mtight");
            }

            if (options.getColor()) {
              this.style.color = options.getColor();
            }
          }
        }
        /**
         * Sets an arbitrary attribute on the span. Warning: use this wisely. Not all
         * browsers support attributes the same, and having too many custom attributes
         * is probably bad.
         */


        (0, _createClass3.default)(span, [{
          key: "setAttribute",
          value: function setAttribute(attribute, value) {
            this.attributes[attribute] = value;
          }
        }, {
          key: "tryCombine",
          value: function tryCombine(sibling) {
            return false;
          }
          /**
           * Convert the span into an HTML node
           */

        }, {
          key: "toNode",
          value: function toNode() {
            var span = document.createElement("span"); // Apply the class

            span.className = createClass(this.classes); // Apply inline styles

            for (var style in this.style) {
              if (Object.prototype.hasOwnProperty.call(this.style, style)) {
                span.style[style] = this.style[style];
              }
            } // Apply attributes


            for (var attr in this.attributes) {
              if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                span.setAttribute(attr, this.attributes[attr]);
              }
            } // Append the children, also as HTML nodes


            for (var i = 0; i < this.children.length; i++) {
              span.appendChild(this.children[i].toNode());
            }

            return span;
          }
          /**
           * Convert the span into an HTML markup string
           */

        }, {
          key: "toMarkup",
          value: function toMarkup() {
            var markup = "<span"; // Add the class

            if (this.classes.length) {
              markup += " class=\"";
              markup += _utils2.default.escape(createClass(this.classes));
              markup += "\"";
            }

            var styles = ""; // Add the styles, after hyphenation

            for (var style in this.style) {
              if (this.style.hasOwnProperty(style)) {
                styles += _utils2.default.hyphenate(style) + ":" + this.style[style] + ";";
              }
            }

            if (styles) {
              markup += " style=\"" + _utils2.default.escape(styles) + "\"";
            } // Add the attributes


            for (var attr in this.attributes) {
              if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                markup += " " + attr + "=\"";
                markup += _utils2.default.escape(this.attributes[attr]);
                markup += "\"";
              }
            }

            markup += ">"; // Add the markup of the children, also as markup

            for (var i = 0; i < this.children.length; i++) {
              markup += this.children[i].toMarkup();
            }

            markup += "</span>";
            return markup;
          }
        }]);
        return span;
      }();
      /**
       * This node represents a document fragment, which contains elements, but when
       * placed into the DOM doesn't have any representation itself. Thus, it only
       * contains children and doesn't have any HTML properties. It also keeps track
       * of a height, depth, and maxFontSize.
       */


      var documentFragment = function () {
        function documentFragment(children) {
          (0, _classCallCheck3.default)(this, documentFragment);
          this.children = children || [];
          this.height = 0;
          this.depth = 0;
          this.maxFontSize = 0;
        }
        /**
         * Convert the fragment into a node
         */


        (0, _createClass3.default)(documentFragment, [{
          key: "toNode",
          value: function toNode() {
            // Create a fragment
            var frag = document.createDocumentFragment(); // Append the children

            for (var i = 0; i < this.children.length; i++) {
              frag.appendChild(this.children[i].toNode());
            }

            return frag;
          }
          /**
           * Convert the fragment into HTML markup
           */

        }, {
          key: "toMarkup",
          value: function toMarkup() {
            var markup = ""; // Simply concatenate the markup for the children together

            for (var i = 0; i < this.children.length; i++) {
              markup += this.children[i].toMarkup();
            }

            return markup;
          }
        }]);
        return documentFragment;
      }();

      var iCombinations = {
        'î': "\u0131\u0302",
        'ï': "\u0131\u0308",
        'í': "\u0131\u0301",
        // 'ī': '\u0131\u0304', // enable when we add Extended Latin
        'ì': "\u0131\u0300"
      };
      /**
       * A symbol node contains information about a single symbol. It either renders
       * to a single text node, or a span with a single text node in it, depending on
       * whether it has CSS classes, styles, or needs italic correction.
       */

      var symbolNode = function () {
        function symbolNode(value, height, depth, italic, skew, classes, style) {
          (0, _classCallCheck3.default)(this, symbolNode);
          this.value = value || "";
          this.height = height || 0;
          this.depth = depth || 0;
          this.italic = italic || 0;
          this.skew = skew || 0;
          this.classes = classes || [];
          this.style = style || {};
          this.maxFontSize = 0; // Mark CJK characters with specific classes so that we can specify which
          // fonts to use.  This allows us to render these characters with a serif
          // font in situations where the browser would either default to a sans serif
          // or render a placeholder character.

          if (_unicodeRegexes.cjkRegex.test(value)) {
            // I couldn't find any fonts that contained Hangul as well as all of
            // the other characters we wanted to test there for it gets its own
            // CSS class.
            if (_unicodeRegexes.hangulRegex.test(value)) {
              this.classes.push('hangul_fallback');
            } else {
              this.classes.push('cjk_fallback');
            }
          }

          if (/[îïíì]/.test(this.value)) {
            // add ī when we add Extended Latin
            this.value = iCombinations[this.value];
          }
        }

        (0, _createClass3.default)(symbolNode, [{
          key: "tryCombine",
          value: function tryCombine(sibling) {
            if (!sibling || !(sibling instanceof symbolNode) || this.italic > 0 || createClass(this.classes) !== createClass(sibling.classes) || this.skew !== sibling.skew || this.maxFontSize !== sibling.maxFontSize) {
              return false;
            }

            for (var style in this.style) {
              if (this.style.hasOwnProperty(style) && this.style[style] !== sibling.style[style]) {
                return false;
              }
            }

            for (var _style in sibling.style) {
              if (sibling.style.hasOwnProperty(_style) && this.style[_style] !== sibling.style[_style]) {
                return false;
              }
            }

            this.value += sibling.value;
            this.height = Math.max(this.height, sibling.height);
            this.depth = Math.max(this.depth, sibling.depth);
            this.italic = sibling.italic;
            return true;
          }
          /**
           * Creates a text node or span from a symbol node. Note that a span is only
           * created if it is needed.
           */

        }, {
          key: "toNode",
          value: function toNode() {
            var node = document.createTextNode(this.value);
            var span = null;

            if (this.italic > 0) {
              span = document.createElement("span");
              span.style.marginRight = this.italic + "em";
            }

            if (this.classes.length > 0) {
              span = span || document.createElement("span");
              span.className = createClass(this.classes);
            }

            for (var style in this.style) {
              if (this.style.hasOwnProperty(style)) {
                span = span || document.createElement("span");
                span.style[style] = this.style[style];
              }
            }

            if (span) {
              span.appendChild(node);
              return span;
            } else {
              return node;
            }
          }
          /**
           * Creates markup for a symbol node.
           */

        }, {
          key: "toMarkup",
          value: function toMarkup() {
            // TODO(alpert): More duplication than I'd like from
            // span.prototype.toMarkup and symbolNode.prototype.toNode...
            var needsSpan = false;
            var markup = "<span";

            if (this.classes.length) {
              needsSpan = true;
              markup += " class=\"";
              markup += _utils2.default.escape(createClass(this.classes));
              markup += "\"";
            }

            var styles = "";

            if (this.italic > 0) {
              styles += "margin-right:" + this.italic + "em;";
            }

            for (var style in this.style) {
              if (this.style.hasOwnProperty(style)) {
                styles += _utils2.default.hyphenate(style) + ":" + this.style[style] + ";";
              }
            }

            if (styles) {
              needsSpan = true;
              markup += " style=\"" + _utils2.default.escape(styles) + "\"";
            }

            var escaped = _utils2.default.escape(this.value);

            if (needsSpan) {
              markup += ">";
              markup += escaped;
              markup += "</span>";
              return markup;
            } else {
              return escaped;
            }
          }
        }]);
        return symbolNode;
      }();
      /**
       * SVG nodes are used to render stretchy wide elements.
       */


      var svgNode = function () {
        function svgNode(children, attributes) {
          (0, _classCallCheck3.default)(this, svgNode);
          this.children = children || [];
          this.attributes = attributes || [];
        }

        (0, _createClass3.default)(svgNode, [{
          key: "toNode",
          value: function toNode() {
            var svgNS = "http://www.w3.org/2000/svg";
            var node = document.createElementNS(svgNS, "svg"); // Apply attributes

            for (var i = 0; i < this.attributes.length; i++) {
              var _attributes$i = (0, _slicedToArray3.default)(this.attributes[i], 2),
                  name = _attributes$i[0],
                  value = _attributes$i[1];

              node.setAttribute(name, value);
            }

            for (var _i = 0; _i < this.children.length; _i++) {
              node.appendChild(this.children[_i].toNode());
            }

            return node;
          }
        }, {
          key: "toMarkup",
          value: function toMarkup() {
            var markup = "<svg"; // Apply attributes

            for (var i = 0; i < this.attributes.length; i++) {
              var _attributes$i2 = (0, _slicedToArray3.default)(this.attributes[i], 2),
                  name = _attributes$i2[0],
                  value = _attributes$i2[1];

              markup += " " + name + "='" + value + "'";
            }

            markup += ">";

            for (var _i2 = 0; _i2 < this.children.length; _i2++) {
              markup += this.children[_i2].toMarkup();
            }

            markup += "</svg>";
            return markup;
          }
        }]);
        return svgNode;
      }();

      var pathNode = function () {
        function pathNode(pathName, alternate) {
          (0, _classCallCheck3.default)(this, pathNode);
          this.pathName = pathName;
          this.alternate = alternate; // Used only for tall \sqrt
        }

        (0, _createClass3.default)(pathNode, [{
          key: "toNode",
          value: function toNode() {
            var svgNS = "http://www.w3.org/2000/svg";
            var node = document.createElementNS(svgNS, "path");

            if (this.pathName !== "sqrtTall") {
              node.setAttribute("d", _svgGeometry2.default.path[this.pathName]);
            } else {
              node.setAttribute("d", this.alternate);
            }

            return node;
          }
        }, {
          key: "toMarkup",
          value: function toMarkup() {
            if (this.pathName !== "sqrtTall") {
              return "<path d='" + _svgGeometry2.default.path[this.pathName] + "'/>";
            } else {
              return "<path d='" + this.alternate + "'/>";
            }
          }
        }]);
        return pathNode;
      }();

      var lineNode = function () {
        function lineNode(attributes) {
          (0, _classCallCheck3.default)(this, lineNode);
          this.attributes = attributes || [];
        }

        (0, _createClass3.default)(lineNode, [{
          key: "toNode",
          value: function toNode() {
            var svgNS = "http://www.w3.org/2000/svg";
            var node = document.createElementNS(svgNS, "line"); // Apply attributes

            for (var i = 0; i < this.attributes.length; i++) {
              var _attributes$i3 = (0, _slicedToArray3.default)(this.attributes[i], 2),
                  name = _attributes$i3[0],
                  value = _attributes$i3[1];

              node.setAttribute(name, value);
            }

            return node;
          }
        }, {
          key: "toMarkup",
          value: function toMarkup() {
            var markup = "<line";

            for (var i = 0; i < this.attributes.length; i++) {
              var _attributes$i4 = (0, _slicedToArray3.default)(this.attributes[i], 2),
                  name = _attributes$i4[0],
                  value = _attributes$i4[1];

              markup += " " + name + "='" + value + "'";
            }

            markup += "/>";
            return markup;
          }
        }]);
        return lineNode;
      }();

      exports.default = {
        span: span,
        documentFragment: documentFragment,
        symbolNode: symbolNode,
        svgNode: svgNode,
        pathNode: pathNode,
        lineNode: lineNode
      };
    }, {
      "./svgGeometry": 111,
      "./unicodeRegexes": 113,
      "./utils": 115,
      "babel-runtime/helpers/classCallCheck": 8,
      "babel-runtime/helpers/createClass": 9,
      "babel-runtime/helpers/slicedToArray": 10
    }],
    99: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _defineEnvironment = require("./defineEnvironment");

      require("./environments/array.js");

      var environments = {
        has: function has(envName) {
          return _defineEnvironment._environments.hasOwnProperty(envName);
        },
        get: function get(envName) {
          return _defineEnvironment._environments[envName];
        }
      };
      exports.default = environments; // All environment definitions should be imported below
    }, {
      "./defineEnvironment": 95,
      "./environments/array.js": 100
    }],
    100: [function (require, module, exports) {
      "use strict";

      var _buildCommon = require("../buildCommon");

      var _buildCommon2 = _interopRequireDefault(_buildCommon);

      var _defineEnvironment = require("../defineEnvironment");

      var _defineEnvironment2 = _interopRequireDefault(_defineEnvironment);

      var _mathMLTree = require("../mathMLTree");

      var _mathMLTree2 = _interopRequireDefault(_mathMLTree);

      var _ParseError = require("../ParseError");

      var _ParseError2 = _interopRequireDefault(_ParseError);

      var _ParseNode = require("../ParseNode");

      var _ParseNode2 = _interopRequireDefault(_ParseNode);

      var _units = require("../units");

      var _utils = require("../utils");

      var _utils2 = _interopRequireDefault(_utils);

      var _buildHTML = require("../buildHTML");

      var html = _interopRequireWildcard(_buildHTML);

      var _buildMathML = require("../buildMathML");

      var mml = _interopRequireWildcard(_buildMathML);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj.default = obj;
          return newObj;
        }
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * Parse the body of the environment, with rows delimited by \\ and
       * columns delimited by &, and create a nested list in row-major order
       * with one group per cell.  If given an optional argument style
       * ("text", "display", etc.), then each cell is cast into that style.
       */
      // Data stored in the ParseNode associated with the environment.


      function parseArray(parser, result, style) {
        var row = [];
        var body = [row];
        var rowGaps = [];

        while (true) {
          // eslint-disable-line no-constant-condition
          var cell = parser.parseExpression(false, null);
          cell = new _ParseNode2.default("ordgroup", cell, parser.mode);

          if (style) {
            cell = new _ParseNode2.default("styling", {
              style: style,
              value: [cell]
            }, parser.mode);
          }

          row.push(cell);
          var next = parser.nextToken.text;

          if (next === "&") {
            parser.consume();
          } else if (next === "\\end") {
            // Arrays terminate newlines with `\crcr` which consumes a `\cr` if
            // the last line is empty.
            var lastRow = body[body.length - 1][0].value;

            if (body.length > 1 && lastRow.value.length === 1 && lastRow.value[0].value.length === 0) {
              body.pop();
            }

            break;
          } else if (next === "\\\\" || next === "\\cr") {
            var cr = parser.parseFunction();
            rowGaps.push(cr.value.size);
            row = [];
            body.push(row);
          } else {
            throw new _ParseError2.default("Expected & or \\\\ or \\end", parser.nextToken);
          }
        }

        result.body = body;
        result.rowGaps = rowGaps;
        return new _ParseNode2.default(result.type, result, parser.mode);
      } // Decides on a style for cells in an array according to whether the given
      // environment name starts with the letter 'd'.


      function dCellStyle(envName) {
        if (envName.substr(0, 1) === "d") {
          return "display";
        } else {
          return "text";
        }
      }

      var htmlBuilder = function htmlBuilder(group, options) {
        var r = void 0;
        var c = void 0;
        var nr = group.value.body.length;
        var nc = 0;
        var body = new Array(nr); // Horizontal spacing

        var pt = 1 / options.fontMetrics().ptPerEm;
        var arraycolsep = 5 * pt; // \arraycolsep in article.cls
        // Vertical spacing

        var baselineskip = 12 * pt; // see size10.clo
        // Default \jot from ltmath.dtx
        // TODO(edemaine): allow overriding \jot via \setlength (#687)

        var jot = 3 * pt; // Default \arraystretch from lttab.dtx
        // TODO(gagern): may get redefined once we have user-defined macros

        var arraystretch = _utils2.default.deflt(group.value.arraystretch, 1);

        var arrayskip = arraystretch * baselineskip;
        var arstrutHeight = 0.7 * arrayskip; // \strutbox in ltfsstrc.dtx and

        var arstrutDepth = 0.3 * arrayskip; // \@arstrutbox in lttab.dtx

        var totalHeight = 0;

        for (r = 0; r < group.value.body.length; ++r) {
          var inrow = group.value.body[r];
          var _height = arstrutHeight; // \@array adds an \@arstrut

          var _depth = arstrutDepth; // to each tow (via the template)

          if (nc < inrow.length) {
            nc = inrow.length;
          }

          var outrow = new Array(inrow.length);

          for (c = 0; c < inrow.length; ++c) {
            var elt = html.buildGroup(inrow[c], options);

            if (_depth < elt.depth) {
              _depth = elt.depth;
            }

            if (_height < elt.height) {
              _height = elt.height;
            }

            outrow[c] = elt;
          }

          var gap = 0;

          if (group.value.rowGaps[r]) {
            gap = (0, _units.calculateSize)(group.value.rowGaps[r].value, options);

            if (gap > 0) {
              // \@argarraycr
              gap += arstrutDepth;

              if (_depth < gap) {
                _depth = gap; // \@xargarraycr
              }

              gap = 0;
            }
          } // In AMS multiline environments such as aligned and gathered, rows
          // correspond to lines that have additional \jot added to the
          // \baselineskip via \openup.


          if (group.value.addJot) {
            _depth += jot;
          }

          outrow.height = _height;
          outrow.depth = _depth;
          totalHeight += _height;
          outrow.pos = totalHeight;
          totalHeight += _depth + gap; // \@yargarraycr

          body[r] = outrow;
        }

        var offset = totalHeight / 2 + options.fontMetrics().axisHeight;
        var colDescriptions = group.value.cols || [];
        var cols = [];
        var colSep = void 0;
        var colDescrNum = void 0;

        for (c = 0, colDescrNum = 0; // Continue while either there are more columns or more column
        // descriptions, so trailing separators don't get lost.
        c < nc || colDescrNum < colDescriptions.length; ++c, ++colDescrNum) {
          var colDescr = colDescriptions[colDescrNum] || {};
          var firstSeparator = true;

          while (colDescr.type === "separator") {
            // If there is more than one separator in a row, add a space
            // between them.
            if (!firstSeparator) {
              colSep = _buildCommon2.default.makeSpan(["arraycolsep"], []);
              colSep.style.width = options.fontMetrics().doubleRuleSep + "em";
              cols.push(colSep);
            }

            if (colDescr.separator === "|") {
              var _separator = _buildCommon2.default.makeSpan(["vertical-separator"], []);

              _separator.style.height = totalHeight + "em";
              _separator.style.verticalAlign = -(totalHeight - offset) + "em";
              cols.push(_separator);
            } else {
              throw new _ParseError2.default("Invalid separator type: " + colDescr.separator);
            }

            colDescrNum++;
            colDescr = colDescriptions[colDescrNum] || {};
            firstSeparator = false;
          }

          if (c >= nc) {
            continue;
          }

          var sepwidth = void 0;

          if (c > 0 || group.value.hskipBeforeAndAfter) {
            sepwidth = _utils2.default.deflt(colDescr.pregap, arraycolsep);

            if (sepwidth !== 0) {
              colSep = _buildCommon2.default.makeSpan(["arraycolsep"], []);
              colSep.style.width = sepwidth + "em";
              cols.push(colSep);
            }
          }

          var col = [];

          for (r = 0; r < nr; ++r) {
            var row = body[r];
            var elem = row[c];

            if (!elem) {
              continue;
            }

            var shift = row.pos - offset;
            elem.depth = row.depth;
            elem.height = row.height;
            col.push({
              type: "elem",
              elem: elem,
              shift: shift
            });
          }

          col = _buildCommon2.default.makeVList(col, "individualShift", null, options);
          col = _buildCommon2.default.makeSpan(["col-align-" + (colDescr.align || "c")], [col]);
          cols.push(col);

          if (c < nc - 1 || group.value.hskipBeforeAndAfter) {
            sepwidth = _utils2.default.deflt(colDescr.postgap, arraycolsep);

            if (sepwidth !== 0) {
              colSep = _buildCommon2.default.makeSpan(["arraycolsep"], []);
              colSep.style.width = sepwidth + "em";
              cols.push(colSep);
            }
          }
        }

        body = _buildCommon2.default.makeSpan(["mtable"], cols);
        return _buildCommon2.default.makeSpan(["mord"], [body], options);
      };

      var mathmlBuilder = function mathmlBuilder(group, options) {
        return new _mathMLTree2.default.MathNode("mtable", group.value.body.map(function (row) {
          return new _mathMLTree2.default.MathNode("mtr", row.map(function (cell) {
            return new _mathMLTree2.default.MathNode("mtd", [mml.buildGroup(cell, options)]);
          }));
        }));
      }; // Arrays are part of LaTeX, defined in lttab.dtx so its documentation
      // is part of the source2e.pdf file of LaTeX2e source documentation.
      // {darray} is an {array} environment where cells are set in \displaystyle,
      // as defined in nccmath.sty.


      (0, _defineEnvironment2.default)({
        type: "array",
        names: ["array", "darray"],
        props: {
          numArgs: 1
        },
        handler: function handler(context, args) {
          var colalign = args[0];
          colalign = colalign.value.map ? colalign.value : [colalign];
          var cols = colalign.map(function (node) {
            var ca = node.value;

            if ("lcr".indexOf(ca) !== -1) {
              return {
                type: "align",
                align: ca
              };
            } else if (ca === "|") {
              return {
                type: "separator",
                separator: "|"
              };
            }

            throw new _ParseError2.default("Unknown column alignment: " + node.value, node);
          });
          var res = {
            type: "array",
            cols: cols,
            hskipBeforeAndAfter: true // \@preamble in lttab.dtx

          };
          res = parseArray(context.parser, res, dCellStyle(context.envName));
          return res;
        },
        htmlBuilder: htmlBuilder,
        mathmlBuilder: mathmlBuilder
      }); // The matrix environments of amsmath builds on the array environment
      // of LaTeX, which is discussed above.

      (0, _defineEnvironment2.default)({
        type: "array",
        names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"],
        props: {
          numArgs: 0
        },
        handler: function handler(context) {
          var delimiters = {
            "matrix": null,
            "pmatrix": ["(", ")"],
            "bmatrix": ["[", "]"],
            "Bmatrix": ["\\{", "\\}"],
            "vmatrix": ["|", "|"],
            "Vmatrix": ["\\Vert", "\\Vert"]
          }[context.envName];
          var res = {
            type: "array",
            hskipBeforeAndAfter: false // \hskip -\arraycolsep in amsmath

          };
          res = parseArray(context.parser, res, dCellStyle(context.envName));

          if (delimiters) {
            res = new _ParseNode2.default("leftright", {
              body: [res],
              left: delimiters[0],
              right: delimiters[1]
            }, context.mode);
          }

          return res;
        },
        htmlBuilder: htmlBuilder,
        mathmlBuilder: mathmlBuilder
      }); // A cases environment (in amsmath.sty) is almost equivalent to
      // \def\arraystretch{1.2}%
      // \left\{\begin{array}{@{}l@{\quad}l@{}} … \end{array}\right.
      // {dcases} is a {cases} environment where cells are set in \displaystyle,
      // as defined in mathtools.sty.

      (0, _defineEnvironment2.default)({
        type: "array",
        names: ["cases", "dcases"],
        props: {
          numArgs: 0
        },
        handler: function handler(context) {
          var res = {
            type: "array",
            arraystretch: 1.2,
            cols: [{
              type: "align",
              align: "l",
              pregap: 0,
              // TODO(kevinb) get the current style.
              // For now we use the metrics for TEXT style which is what we were
              // doing before.  Before attempting to get the current style we
              // should look at TeX's behavior especially for \over and matrices.
              postgap: 1.0
              /* 1em quad */

            }, {
              type: "align",
              align: "l",
              pregap: 0,
              postgap: 0
            }]
          };
          res = parseArray(context.parser, res, dCellStyle(context.envName));
          res = new _ParseNode2.default("leftright", {
            body: [res],
            left: "\\{",
            right: "."
          }, context.mode);
          return res;
        },
        htmlBuilder: htmlBuilder,
        mathmlBuilder: mathmlBuilder
      }); // An aligned environment is like the align* environment
      // except it operates within math mode.
      // Note that we assume \nomallineskiplimit to be zero,
      // so that \strut@ is the same as \strut.

      (0, _defineEnvironment2.default)({
        type: "array",
        names: ["aligned"],
        props: {
          numArgs: 0
        },
        handler: function handler(context) {
          var res = {
            type: "array",
            cols: [],
            addJot: true
          };
          res = parseArray(context.parser, res, "display"); // Count number of columns = maximum number of cells in each row.
          // At the same time, prepend empty group {} at beginning of every second
          // cell in each row (starting with second cell) so that operators become
          // binary.  This behavior is implemented in amsmath's \start@aligned.

          var emptyGroup = new _ParseNode2.default("ordgroup", [], context.mode);
          var numCols = 0;
          res.value.body.forEach(function (row) {
            for (var i = 1; i < row.length; i += 2) {
              // Modify ordgroup node within styling node
              var ordgroup = row[i].value.value[0];
              ordgroup.value.unshift(emptyGroup);
            }

            if (numCols < row.length) {
              numCols = row.length;
            }
          });

          for (var i = 0; i < numCols; ++i) {
            var _align = "r";
            var _pregap = 0;

            if (i % 2 === 1) {
              _align = "l";
            } else if (i > 0) {
              _pregap = 2; // one \qquad between columns
            }

            res.value.cols[i] = {
              type: "align",
              align: _align,
              pregap: _pregap,
              postgap: 0
            };
          }

          return res;
        },
        htmlBuilder: htmlBuilder,
        mathmlBuilder: mathmlBuilder
      }); // A gathered environment is like an array environment with one centered
      // column, but where rows are considered lines so get \jot line spacing
      // and contents are set in \displaystyle.

      (0, _defineEnvironment2.default)({
        type: "array",
        names: ["gathered"],
        props: {
          numArgs: 0
        },
        handler: function handler(context) {
          var res = {
            type: "array",
            cols: [{
              type: "align",
              align: "c"
            }],
            addJot: true
          };
          res = parseArray(context.parser, res, "display");
          return res;
        },
        htmlBuilder: htmlBuilder,
        mathmlBuilder: mathmlBuilder
      });
    }, {
      "../ParseError": 84,
      "../ParseNode": 85,
      "../buildCommon": 91,
      "../buildHTML": 92,
      "../buildMathML": 93,
      "../defineEnvironment": 95,
      "../mathMLTree": 108,
      "../units": 114,
      "../utils": 115
    }],
    101: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _unicodeRegexes = require("./unicodeRegexes");

      var _fontMetricsData = require("./fontMetricsData");

      var _fontMetricsData2 = _interopRequireDefault(_fontMetricsData);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * This file contains metrics regarding fonts and individual symbols. The sigma
       * and xi variables, as well as the metricMap map contain data extracted from
       * TeX, TeX font metrics, and the TTF files. These data are then exposed via the
       * `metrics` variable and the getCharacterMetrics function.
       */
      // In TeX, there are actually three sets of dimensions, one for each of
      // textstyle (size index 5 and higher: >=9pt), scriptstyle (size index 3 and 4:
      // 7-8pt), and scriptscriptstyle (size index 1 and 2: 5-6pt).  These are
      // provided in the the arrays below, in that order.
      //
      // The font metrics are stored in fonts cmsy10, cmsy7, and cmsy5 respsectively.
      // This was determined by running the following script:
      //
      //     latex -interaction=nonstopmode \
      //     '\documentclass{article}\usepackage{amsmath}\begin{document}' \
      //     '$a$ \expandafter\show\the\textfont2' \
      //     '\expandafter\show\the\scriptfont2' \
      //     '\expandafter\show\the\scriptscriptfont2' \
      //     '\stop'
      //
      // The metrics themselves were retreived using the following commands:
      //
      //     tftopl cmsy10
      //     tftopl cmsy7
      //     tftopl cmsy5
      //
      // The output of each of these commands is quite lengthy.  The only part we
      // care about is the FONTDIMEN section. Each value is measured in EMs.


      var sigmasAndXis = {
        slant: [0.250, 0.250, 0.250],
        // sigma1
        space: [0.000, 0.000, 0.000],
        // sigma2
        stretch: [0.000, 0.000, 0.000],
        // sigma3
        shrink: [0.000, 0.000, 0.000],
        // sigma4
        xHeight: [0.431, 0.431, 0.431],
        // sigma5
        quad: [1.000, 1.171, 1.472],
        // sigma6
        extraSpace: [0.000, 0.000, 0.000],
        // sigma7
        num1: [0.677, 0.732, 0.925],
        // sigma8
        num2: [0.394, 0.384, 0.387],
        // sigma9
        num3: [0.444, 0.471, 0.504],
        // sigma10
        denom1: [0.686, 0.752, 1.025],
        // sigma11
        denom2: [0.345, 0.344, 0.532],
        // sigma12
        sup1: [0.413, 0.503, 0.504],
        // sigma13
        sup2: [0.363, 0.431, 0.404],
        // sigma14
        sup3: [0.289, 0.286, 0.294],
        // sigma15
        sub1: [0.150, 0.143, 0.200],
        // sigma16
        sub2: [0.247, 0.286, 0.400],
        // sigma17
        supDrop: [0.386, 0.353, 0.494],
        // sigma18
        subDrop: [0.050, 0.071, 0.100],
        // sigma19
        delim1: [2.390, 1.700, 1.980],
        // sigma20
        delim2: [1.010, 1.157, 1.420],
        // sigma21
        axisHeight: [0.250, 0.250, 0.250],
        // sigma22
        // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
        // they correspond to the font parameters of the extension fonts (family 3).
        // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
        // match cmex7, we'd use cmex7.tfm values for script and scriptscript
        // values.
        defaultRuleThickness: [0.04, 0.049, 0.049],
        // xi8; cmex7: 0.049
        bigOpSpacing1: [0.111, 0.111, 0.111],
        // xi9
        bigOpSpacing2: [0.166, 0.166, 0.166],
        // xi10
        bigOpSpacing3: [0.2, 0.2, 0.2],
        // xi11
        bigOpSpacing4: [0.6, 0.611, 0.611],
        // xi12; cmex7: 0.611
        bigOpSpacing5: [0.1, 0.143, 0.143],
        // xi13; cmex7: 0.143
        // The \sqrt rule width is taken from the height of the surd character.
        // Since we use the same font at all sizes, this thickness doesn't scale.
        sqrtRuleThickness: [0.04, 0.04, 0.04],
        // This value determines how large a pt is, for metrics which are defined
        // in terms of pts.
        // This value is also used in katex.less; if you change it make sure the
        // values match.
        ptPerEm: [10.0, 10.0, 10.0],
        // The space between adjacent `|` columns in an array definition. From
        // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
        doubleRuleSep: [0.2, 0.2, 0.2]
      }; // This map contains a mapping from font name and character code to character
      // metrics, including height, depth, italic correction, and skew (kern from the
      // character to the corresponding \skewchar)
      // This map is generated via `make metrics`. It should not be changed manually.
      // These are very rough approximations.  We default to Times New Roman which
      // should have Latin-1 and Cyrillic characters, but may not depending on the
      // operating system.  The metrics do not account for extra height from the
      // accents.  In the case of Cyrillic characters which have both ascenders and
      // descenders we prefer approximations with ascenders, primarily to prevent
      // the fraction bar or root line from intersecting the glyph.
      // TODO(kevinb) allow union of multiple glyph metrics for better accuracy.

      var extraCharacterMap = {
        // Latin-1
        'À': 'A',
        'Á': 'A',
        'Â': 'A',
        'Ã': 'A',
        'Ä': 'A',
        'Å': 'A',
        'Æ': 'A',
        'Ç': 'C',
        'È': 'E',
        'É': 'E',
        'Ê': 'E',
        'Ë': 'E',
        'Ì': 'I',
        'Í': 'I',
        'Î': 'I',
        'Ï': 'I',
        'Ð': 'D',
        'Ñ': 'N',
        'Ò': 'O',
        'Ó': 'O',
        'Ô': 'O',
        'Õ': 'O',
        'Ö': 'O',
        'Ø': 'O',
        'Ù': 'U',
        'Ú': 'U',
        'Û': 'U',
        'Ü': 'U',
        'Ý': 'Y',
        'Þ': 'o',
        'ß': 'B',
        'à': 'a',
        'á': 'a',
        'â': 'a',
        'ã': 'a',
        'ä': 'a',
        'å': 'a',
        'æ': 'a',
        'ç': 'c',
        'è': 'e',
        'é': 'e',
        'ê': 'e',
        'ë': 'e',
        'ì': 'i',
        'í': 'i',
        'î': 'i',
        'ï': 'i',
        'ð': 'd',
        'ñ': 'n',
        'ò': 'o',
        'ó': 'o',
        'ô': 'o',
        'õ': 'o',
        'ö': 'o',
        'ø': 'o',
        'ù': 'u',
        'ú': 'u',
        'û': 'u',
        'ü': 'u',
        'ý': 'y',
        'þ': 'o',
        'ÿ': 'y',
        // Cyrillic
        'А': 'A',
        'Б': 'B',
        'В': 'B',
        'Г': 'F',
        'Д': 'A',
        'Е': 'E',
        'Ж': 'K',
        'З': '3',
        'И': 'N',
        'Й': 'N',
        'К': 'K',
        'Л': 'N',
        'М': 'M',
        'Н': 'H',
        'О': 'O',
        'П': 'N',
        'Р': 'P',
        'С': 'C',
        'Т': 'T',
        'У': 'y',
        'Ф': 'O',
        'Х': 'X',
        'Ц': 'U',
        'Ч': 'h',
        'Ш': 'W',
        'Щ': 'W',
        'Ъ': 'B',
        'Ы': 'X',
        'Ь': 'B',
        'Э': '3',
        'Ю': 'X',
        'Я': 'R',
        'а': 'a',
        'б': 'b',
        'в': 'a',
        'г': 'r',
        'д': 'y',
        'е': 'e',
        'ж': 'm',
        'з': 'e',
        'и': 'n',
        'й': 'n',
        'к': 'n',
        'л': 'n',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'n',
        'р': 'p',
        'с': 'c',
        'т': 'o',
        'у': 'y',
        'ф': 'b',
        'х': 'x',
        'ц': 'n',
        'ч': 'n',
        'ш': 'w',
        'щ': 'w',
        'ъ': 'a',
        'ы': 'm',
        'ь': 'a',
        'э': 'e',
        'ю': 'm',
        'я': 'r'
      };
      /**
       * This function is a convenience function for looking up information in the
       * metricMap table. It takes a character as a string, and a font.
       *
       * Note: the `width` property may be undefined if fontMetricsData.js wasn't
       * built using `Make extended_metrics`.
       */

      var getCharacterMetrics = function getCharacterMetrics(character, font) {
        var ch = character.charCodeAt(0);

        if (character[0] in extraCharacterMap) {
          ch = extraCharacterMap[character[0]].charCodeAt(0);
        } else if (_unicodeRegexes.cjkRegex.test(character[0])) {
          ch = 'M'.charCodeAt(0);
        }

        var metrics = _fontMetricsData2.default[font]['' + ch];

        if (metrics) {
          return {
            depth: metrics[0],
            height: metrics[1],
            italic: metrics[2],
            skew: metrics[3],
            width: metrics[4]
          };
        }
      };

      var fontMetricsBySizeIndex = {};
      /**
       * Get the font metrics for a given size.
       */

      var getFontMetrics = function getFontMetrics(size) {
        var sizeIndex = void 0;

        if (size >= 5) {
          sizeIndex = 0;
        } else if (size >= 3) {
          sizeIndex = 1;
        } else {
          sizeIndex = 2;
        }

        if (!fontMetricsBySizeIndex[sizeIndex]) {
          var metrics = fontMetricsBySizeIndex[sizeIndex] = {
            cssEmPerMu: sigmasAndXis.quad[sizeIndex] / 18
          };

          for (var key in sigmasAndXis) {
            if (sigmasAndXis.hasOwnProperty(key)) {
              metrics[key] = sigmasAndXis[key][sizeIndex];
            }
          }
        }

        return fontMetricsBySizeIndex[sizeIndex];
      };

      exports.default = {
        getFontMetrics: getFontMetrics,
        getCharacterMetrics: getCharacterMetrics
      };
    }, {
      "./fontMetricsData": 102,
      "./unicodeRegexes": 113
    }],
    102: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var fontMetricsData = {
        "AMS-Regular": {
          "65": [0, 0.68889, 0, 0],
          "66": [0, 0.68889, 0, 0],
          "67": [0, 0.68889, 0, 0],
          "68": [0, 0.68889, 0, 0],
          "69": [0, 0.68889, 0, 0],
          "70": [0, 0.68889, 0, 0],
          "71": [0, 0.68889, 0, 0],
          "72": [0, 0.68889, 0, 0],
          "73": [0, 0.68889, 0, 0],
          "74": [0.16667, 0.68889, 0, 0],
          "75": [0, 0.68889, 0, 0],
          "76": [0, 0.68889, 0, 0],
          "77": [0, 0.68889, 0, 0],
          "78": [0, 0.68889, 0, 0],
          "79": [0.16667, 0.68889, 0, 0],
          "80": [0, 0.68889, 0, 0],
          "81": [0.16667, 0.68889, 0, 0],
          "82": [0, 0.68889, 0, 0],
          "83": [0, 0.68889, 0, 0],
          "84": [0, 0.68889, 0, 0],
          "85": [0, 0.68889, 0, 0],
          "86": [0, 0.68889, 0, 0],
          "87": [0, 0.68889, 0, 0],
          "88": [0, 0.68889, 0, 0],
          "89": [0, 0.68889, 0, 0],
          "90": [0, 0.68889, 0, 0],
          "107": [0, 0.68889, 0, 0],
          "165": [0, 0.675, 0.025, 0],
          "174": [0.15559, 0.69224, 0, 0],
          "240": [0, 0.68889, 0, 0],
          "295": [0, 0.68889, 0, 0],
          "710": [0, 0.825, 0, 0],
          "732": [0, 0.9, 0, 0],
          "770": [0, 0.825, 0, 0],
          "771": [0, 0.9, 0, 0],
          "989": [0.08167, 0.58167, 0, 0],
          "1008": [0, 0.43056, 0.04028, 0],
          "8245": [0, 0.54986, 0, 0],
          "8463": [0, 0.68889, 0, 0],
          "8487": [0, 0.68889, 0, 0],
          "8498": [0, 0.68889, 0, 0],
          "8502": [0, 0.68889, 0, 0],
          "8503": [0, 0.68889, 0, 0],
          "8504": [0, 0.68889, 0, 0],
          "8513": [0, 0.68889, 0, 0],
          "8592": [-0.03598, 0.46402, 0, 0],
          "8594": [-0.03598, 0.46402, 0, 0],
          "8602": [-0.13313, 0.36687, 0, 0],
          "8603": [-0.13313, 0.36687, 0, 0],
          "8606": [0.01354, 0.52239, 0, 0],
          "8608": [0.01354, 0.52239, 0, 0],
          "8610": [0.01354, 0.52239, 0, 0],
          "8611": [0.01354, 0.52239, 0, 0],
          "8619": [0, 0.54986, 0, 0],
          "8620": [0, 0.54986, 0, 0],
          "8621": [-0.13313, 0.37788, 0, 0],
          "8622": [-0.13313, 0.36687, 0, 0],
          "8624": [0, 0.69224, 0, 0],
          "8625": [0, 0.69224, 0, 0],
          "8630": [0, 0.43056, 0, 0],
          "8631": [0, 0.43056, 0, 0],
          "8634": [0.08198, 0.58198, 0, 0],
          "8635": [0.08198, 0.58198, 0, 0],
          "8638": [0.19444, 0.69224, 0, 0],
          "8639": [0.19444, 0.69224, 0, 0],
          "8642": [0.19444, 0.69224, 0, 0],
          "8643": [0.19444, 0.69224, 0, 0],
          "8644": [0.1808, 0.675, 0, 0],
          "8646": [0.1808, 0.675, 0, 0],
          "8647": [0.1808, 0.675, 0, 0],
          "8648": [0.19444, 0.69224, 0, 0],
          "8649": [0.1808, 0.675, 0, 0],
          "8650": [0.19444, 0.69224, 0, 0],
          "8651": [0.01354, 0.52239, 0, 0],
          "8652": [0.01354, 0.52239, 0, 0],
          "8653": [-0.13313, 0.36687, 0, 0],
          "8654": [-0.13313, 0.36687, 0, 0],
          "8655": [-0.13313, 0.36687, 0, 0],
          "8666": [0.13667, 0.63667, 0, 0],
          "8667": [0.13667, 0.63667, 0, 0],
          "8669": [-0.13313, 0.37788, 0, 0],
          "8672": [-0.064, 0.437, 0, 0],
          "8674": [-0.064, 0.437, 0, 0],
          "8705": [0, 0.825, 0, 0],
          "8708": [0, 0.68889, 0, 0],
          "8709": [0.08167, 0.58167, 0, 0],
          "8717": [0, 0.43056, 0, 0],
          "8722": [-0.03598, 0.46402, 0, 0],
          "8724": [0.08198, 0.69224, 0, 0],
          "8726": [0.08167, 0.58167, 0, 0],
          "8733": [0, 0.69224, 0, 0],
          "8736": [0, 0.69224, 0, 0],
          "8737": [0, 0.69224, 0, 0],
          "8738": [0.03517, 0.52239, 0, 0],
          "8739": [0.08167, 0.58167, 0, 0],
          "8740": [0.25142, 0.74111, 0, 0],
          "8741": [0.08167, 0.58167, 0, 0],
          "8742": [0.25142, 0.74111, 0, 0],
          "8756": [0, 0.69224, 0, 0],
          "8757": [0, 0.69224, 0, 0],
          "8764": [-0.13313, 0.36687, 0, 0],
          "8765": [-0.13313, 0.37788, 0, 0],
          "8769": [-0.13313, 0.36687, 0, 0],
          "8770": [-0.03625, 0.46375, 0, 0],
          "8774": [0.30274, 0.79383, 0, 0],
          "8776": [-0.01688, 0.48312, 0, 0],
          "8778": [0.08167, 0.58167, 0, 0],
          "8782": [0.06062, 0.54986, 0, 0],
          "8783": [0.06062, 0.54986, 0, 0],
          "8785": [0.08198, 0.58198, 0, 0],
          "8786": [0.08198, 0.58198, 0, 0],
          "8787": [0.08198, 0.58198, 0, 0],
          "8790": [0, 0.69224, 0, 0],
          "8791": [0.22958, 0.72958, 0, 0],
          "8796": [0.08198, 0.91667, 0, 0],
          "8806": [0.25583, 0.75583, 0, 0],
          "8807": [0.25583, 0.75583, 0, 0],
          "8808": [0.25142, 0.75726, 0, 0],
          "8809": [0.25142, 0.75726, 0, 0],
          "8812": [0.25583, 0.75583, 0, 0],
          "8814": [0.20576, 0.70576, 0, 0],
          "8815": [0.20576, 0.70576, 0, 0],
          "8816": [0.30274, 0.79383, 0, 0],
          "8817": [0.30274, 0.79383, 0, 0],
          "8818": [0.22958, 0.72958, 0, 0],
          "8819": [0.22958, 0.72958, 0, 0],
          "8822": [0.1808, 0.675, 0, 0],
          "8823": [0.1808, 0.675, 0, 0],
          "8828": [0.13667, 0.63667, 0, 0],
          "8829": [0.13667, 0.63667, 0, 0],
          "8830": [0.22958, 0.72958, 0, 0],
          "8831": [0.22958, 0.72958, 0, 0],
          "8832": [0.20576, 0.70576, 0, 0],
          "8833": [0.20576, 0.70576, 0, 0],
          "8840": [0.30274, 0.79383, 0, 0],
          "8841": [0.30274, 0.79383, 0, 0],
          "8842": [0.13597, 0.63597, 0, 0],
          "8843": [0.13597, 0.63597, 0, 0],
          "8847": [0.03517, 0.54986, 0, 0],
          "8848": [0.03517, 0.54986, 0, 0],
          "8858": [0.08198, 0.58198, 0, 0],
          "8859": [0.08198, 0.58198, 0, 0],
          "8861": [0.08198, 0.58198, 0, 0],
          "8862": [0, 0.675, 0, 0],
          "8863": [0, 0.675, 0, 0],
          "8864": [0, 0.675, 0, 0],
          "8865": [0, 0.675, 0, 0],
          "8872": [0, 0.69224, 0, 0],
          "8873": [0, 0.69224, 0, 0],
          "8874": [0, 0.69224, 0, 0],
          "8876": [0, 0.68889, 0, 0],
          "8877": [0, 0.68889, 0, 0],
          "8878": [0, 0.68889, 0, 0],
          "8879": [0, 0.68889, 0, 0],
          "8882": [0.03517, 0.54986, 0, 0],
          "8883": [0.03517, 0.54986, 0, 0],
          "8884": [0.13667, 0.63667, 0, 0],
          "8885": [0.13667, 0.63667, 0, 0],
          "8888": [0, 0.54986, 0, 0],
          "8890": [0.19444, 0.43056, 0, 0],
          "8891": [0.19444, 0.69224, 0, 0],
          "8892": [0.19444, 0.69224, 0, 0],
          "8901": [0, 0.54986, 0, 0],
          "8903": [0.08167, 0.58167, 0, 0],
          "8905": [0.08167, 0.58167, 0, 0],
          "8906": [0.08167, 0.58167, 0, 0],
          "8907": [0, 0.69224, 0, 0],
          "8908": [0, 0.69224, 0, 0],
          "8909": [-0.03598, 0.46402, 0, 0],
          "8910": [0, 0.54986, 0, 0],
          "8911": [0, 0.54986, 0, 0],
          "8912": [0.03517, 0.54986, 0, 0],
          "8913": [0.03517, 0.54986, 0, 0],
          "8914": [0, 0.54986, 0, 0],
          "8915": [0, 0.54986, 0, 0],
          "8916": [0, 0.69224, 0, 0],
          "8918": [0.0391, 0.5391, 0, 0],
          "8919": [0.0391, 0.5391, 0, 0],
          "8920": [0.03517, 0.54986, 0, 0],
          "8921": [0.03517, 0.54986, 0, 0],
          "8922": [0.38569, 0.88569, 0, 0],
          "8923": [0.38569, 0.88569, 0, 0],
          "8926": [0.13667, 0.63667, 0, 0],
          "8927": [0.13667, 0.63667, 0, 0],
          "8928": [0.30274, 0.79383, 0, 0],
          "8929": [0.30274, 0.79383, 0, 0],
          "8934": [0.23222, 0.74111, 0, 0],
          "8935": [0.23222, 0.74111, 0, 0],
          "8936": [0.23222, 0.74111, 0, 0],
          "8937": [0.23222, 0.74111, 0, 0],
          "8938": [0.20576, 0.70576, 0, 0],
          "8939": [0.20576, 0.70576, 0, 0],
          "8940": [0.30274, 0.79383, 0, 0],
          "8941": [0.30274, 0.79383, 0, 0],
          "8994": [0.19444, 0.69224, 0, 0],
          "8995": [0.19444, 0.69224, 0, 0],
          "9416": [0.15559, 0.69224, 0, 0],
          "9484": [0, 0.69224, 0, 0],
          "9488": [0, 0.69224, 0, 0],
          "9492": [0, 0.37788, 0, 0],
          "9496": [0, 0.37788, 0, 0],
          "9585": [0.19444, 0.68889, 0, 0],
          "9586": [0.19444, 0.74111, 0, 0],
          "9632": [0, 0.675, 0, 0],
          "9633": [0, 0.675, 0, 0],
          "9650": [0, 0.54986, 0, 0],
          "9651": [0, 0.54986, 0, 0],
          "9654": [0.03517, 0.54986, 0, 0],
          "9660": [0, 0.54986, 0, 0],
          "9661": [0, 0.54986, 0, 0],
          "9664": [0.03517, 0.54986, 0, 0],
          "9674": [0.11111, 0.69224, 0, 0],
          "9733": [0.19444, 0.69224, 0, 0],
          "10003": [0, 0.69224, 0, 0],
          "10016": [0, 0.69224, 0, 0],
          "10731": [0.11111, 0.69224, 0, 0],
          "10846": [0.19444, 0.75583, 0, 0],
          "10877": [0.13667, 0.63667, 0, 0],
          "10878": [0.13667, 0.63667, 0, 0],
          "10885": [0.25583, 0.75583, 0, 0],
          "10886": [0.25583, 0.75583, 0, 0],
          "10887": [0.13597, 0.63597, 0, 0],
          "10888": [0.13597, 0.63597, 0, 0],
          "10889": [0.26167, 0.75726, 0, 0],
          "10890": [0.26167, 0.75726, 0, 0],
          "10891": [0.48256, 0.98256, 0, 0],
          "10892": [0.48256, 0.98256, 0, 0],
          "10901": [0.13667, 0.63667, 0, 0],
          "10902": [0.13667, 0.63667, 0, 0],
          "10933": [0.25142, 0.75726, 0, 0],
          "10934": [0.25142, 0.75726, 0, 0],
          "10935": [0.26167, 0.75726, 0, 0],
          "10936": [0.26167, 0.75726, 0, 0],
          "10937": [0.26167, 0.75726, 0, 0],
          "10938": [0.26167, 0.75726, 0, 0],
          "10949": [0.25583, 0.75583, 0, 0],
          "10950": [0.25583, 0.75583, 0, 0],
          "10955": [0.28481, 0.79383, 0, 0],
          "10956": [0.28481, 0.79383, 0, 0],
          "57350": [0.08167, 0.58167, 0, 0],
          "57351": [0.08167, 0.58167, 0, 0],
          "57352": [0.08167, 0.58167, 0, 0],
          "57353": [0, 0.43056, 0.04028, 0],
          "57356": [0.25142, 0.75726, 0, 0],
          "57357": [0.25142, 0.75726, 0, 0],
          "57358": [0.41951, 0.91951, 0, 0],
          "57359": [0.30274, 0.79383, 0, 0],
          "57360": [0.30274, 0.79383, 0, 0],
          "57361": [0.41951, 0.91951, 0, 0],
          "57366": [0.25142, 0.75726, 0, 0],
          "57367": [0.25142, 0.75726, 0, 0],
          "57368": [0.25142, 0.75726, 0, 0],
          "57369": [0.25142, 0.75726, 0, 0],
          "57370": [0.13597, 0.63597, 0, 0],
          "57371": [0.13597, 0.63597, 0, 0]
        },
        "Caligraphic-Regular": {
          "48": [0, 0.43056, 0, 0],
          "49": [0, 0.43056, 0, 0],
          "50": [0, 0.43056, 0, 0],
          "51": [0.19444, 0.43056, 0, 0],
          "52": [0.19444, 0.43056, 0, 0],
          "53": [0.19444, 0.43056, 0, 0],
          "54": [0, 0.64444, 0, 0],
          "55": [0.19444, 0.43056, 0, 0],
          "56": [0, 0.64444, 0, 0],
          "57": [0.19444, 0.43056, 0, 0],
          "65": [0, 0.68333, 0, 0.19445],
          "66": [0, 0.68333, 0.03041, 0.13889],
          "67": [0, 0.68333, 0.05834, 0.13889],
          "68": [0, 0.68333, 0.02778, 0.08334],
          "69": [0, 0.68333, 0.08944, 0.11111],
          "70": [0, 0.68333, 0.09931, 0.11111],
          "71": [0.09722, 0.68333, 0.0593, 0.11111],
          "72": [0, 0.68333, 0.00965, 0.11111],
          "73": [0, 0.68333, 0.07382, 0],
          "74": [0.09722, 0.68333, 0.18472, 0.16667],
          "75": [0, 0.68333, 0.01445, 0.05556],
          "76": [0, 0.68333, 0, 0.13889],
          "77": [0, 0.68333, 0, 0.13889],
          "78": [0, 0.68333, 0.14736, 0.08334],
          "79": [0, 0.68333, 0.02778, 0.11111],
          "80": [0, 0.68333, 0.08222, 0.08334],
          "81": [0.09722, 0.68333, 0, 0.11111],
          "82": [0, 0.68333, 0, 0.08334],
          "83": [0, 0.68333, 0.075, 0.13889],
          "84": [0, 0.68333, 0.25417, 0],
          "85": [0, 0.68333, 0.09931, 0.08334],
          "86": [0, 0.68333, 0.08222, 0],
          "87": [0, 0.68333, 0.08222, 0.08334],
          "88": [0, 0.68333, 0.14643, 0.13889],
          "89": [0.09722, 0.68333, 0.08222, 0.08334],
          "90": [0, 0.68333, 0.07944, 0.13889]
        },
        "Fraktur-Regular": {
          "33": [0, 0.69141, 0, 0],
          "34": [0, 0.69141, 0, 0],
          "38": [0, 0.69141, 0, 0],
          "39": [0, 0.69141, 0, 0],
          "40": [0.24982, 0.74947, 0, 0],
          "41": [0.24982, 0.74947, 0, 0],
          "42": [0, 0.62119, 0, 0],
          "43": [0.08319, 0.58283, 0, 0],
          "44": [0, 0.10803, 0, 0],
          "45": [0.08319, 0.58283, 0, 0],
          "46": [0, 0.10803, 0, 0],
          "47": [0.24982, 0.74947, 0, 0],
          "48": [0, 0.47534, 0, 0],
          "49": [0, 0.47534, 0, 0],
          "50": [0, 0.47534, 0, 0],
          "51": [0.18906, 0.47534, 0, 0],
          "52": [0.18906, 0.47534, 0, 0],
          "53": [0.18906, 0.47534, 0, 0],
          "54": [0, 0.69141, 0, 0],
          "55": [0.18906, 0.47534, 0, 0],
          "56": [0, 0.69141, 0, 0],
          "57": [0.18906, 0.47534, 0, 0],
          "58": [0, 0.47534, 0, 0],
          "59": [0.12604, 0.47534, 0, 0],
          "61": [-0.13099, 0.36866, 0, 0],
          "63": [0, 0.69141, 0, 0],
          "65": [0, 0.69141, 0, 0],
          "66": [0, 0.69141, 0, 0],
          "67": [0, 0.69141, 0, 0],
          "68": [0, 0.69141, 0, 0],
          "69": [0, 0.69141, 0, 0],
          "70": [0.12604, 0.69141, 0, 0],
          "71": [0, 0.69141, 0, 0],
          "72": [0.06302, 0.69141, 0, 0],
          "73": [0, 0.69141, 0, 0],
          "74": [0.12604, 0.69141, 0, 0],
          "75": [0, 0.69141, 0, 0],
          "76": [0, 0.69141, 0, 0],
          "77": [0, 0.69141, 0, 0],
          "78": [0, 0.69141, 0, 0],
          "79": [0, 0.69141, 0, 0],
          "80": [0.18906, 0.69141, 0, 0],
          "81": [0.03781, 0.69141, 0, 0],
          "82": [0, 0.69141, 0, 0],
          "83": [0, 0.69141, 0, 0],
          "84": [0, 0.69141, 0, 0],
          "85": [0, 0.69141, 0, 0],
          "86": [0, 0.69141, 0, 0],
          "87": [0, 0.69141, 0, 0],
          "88": [0, 0.69141, 0, 0],
          "89": [0.18906, 0.69141, 0, 0],
          "90": [0.12604, 0.69141, 0, 0],
          "91": [0.24982, 0.74947, 0, 0],
          "93": [0.24982, 0.74947, 0, 0],
          "94": [0, 0.69141, 0, 0],
          "97": [0, 0.47534, 0, 0],
          "98": [0, 0.69141, 0, 0],
          "99": [0, 0.47534, 0, 0],
          "100": [0, 0.62119, 0, 0],
          "101": [0, 0.47534, 0, 0],
          "102": [0.18906, 0.69141, 0, 0],
          "103": [0.18906, 0.47534, 0, 0],
          "104": [0.18906, 0.69141, 0, 0],
          "105": [0, 0.69141, 0, 0],
          "106": [0, 0.69141, 0, 0],
          "107": [0, 0.69141, 0, 0],
          "108": [0, 0.69141, 0, 0],
          "109": [0, 0.47534, 0, 0],
          "110": [0, 0.47534, 0, 0],
          "111": [0, 0.47534, 0, 0],
          "112": [0.18906, 0.52396, 0, 0],
          "113": [0.18906, 0.47534, 0, 0],
          "114": [0, 0.47534, 0, 0],
          "115": [0, 0.47534, 0, 0],
          "116": [0, 0.62119, 0, 0],
          "117": [0, 0.47534, 0, 0],
          "118": [0, 0.52396, 0, 0],
          "119": [0, 0.52396, 0, 0],
          "120": [0.18906, 0.47534, 0, 0],
          "121": [0.18906, 0.47534, 0, 0],
          "122": [0.18906, 0.47534, 0, 0],
          "8216": [0, 0.69141, 0, 0],
          "8217": [0, 0.69141, 0, 0],
          "58112": [0, 0.62119, 0, 0],
          "58113": [0, 0.62119, 0, 0],
          "58114": [0.18906, 0.69141, 0, 0],
          "58115": [0.18906, 0.69141, 0, 0],
          "58116": [0.18906, 0.47534, 0, 0],
          "58117": [0, 0.69141, 0, 0],
          "58118": [0, 0.62119, 0, 0],
          "58119": [0, 0.47534, 0, 0]
        },
        "Main-Bold": {
          "33": [0, 0.69444, 0, 0],
          "34": [0, 0.69444, 0, 0],
          "35": [0.19444, 0.69444, 0, 0],
          "36": [0.05556, 0.75, 0, 0],
          "37": [0.05556, 0.75, 0, 0],
          "38": [0, 0.69444, 0, 0],
          "39": [0, 0.69444, 0, 0],
          "40": [0.25, 0.75, 0, 0],
          "41": [0.25, 0.75, 0, 0],
          "42": [0, 0.75, 0, 0],
          "43": [0.13333, 0.63333, 0, 0],
          "44": [0.19444, 0.15556, 0, 0],
          "45": [0, 0.44444, 0, 0],
          "46": [0, 0.15556, 0, 0],
          "47": [0.25, 0.75, 0, 0],
          "48": [0, 0.64444, 0, 0],
          "49": [0, 0.64444, 0, 0],
          "50": [0, 0.64444, 0, 0],
          "51": [0, 0.64444, 0, 0],
          "52": [0, 0.64444, 0, 0],
          "53": [0, 0.64444, 0, 0],
          "54": [0, 0.64444, 0, 0],
          "55": [0, 0.64444, 0, 0],
          "56": [0, 0.64444, 0, 0],
          "57": [0, 0.64444, 0, 0],
          "58": [0, 0.44444, 0, 0],
          "59": [0.19444, 0.44444, 0, 0],
          "60": [0.08556, 0.58556, 0, 0],
          "61": [-0.10889, 0.39111, 0, 0],
          "62": [0.08556, 0.58556, 0, 0],
          "63": [0, 0.69444, 0, 0],
          "64": [0, 0.69444, 0, 0],
          "65": [0, 0.68611, 0, 0],
          "66": [0, 0.68611, 0, 0],
          "67": [0, 0.68611, 0, 0],
          "68": [0, 0.68611, 0, 0],
          "69": [0, 0.68611, 0, 0],
          "70": [0, 0.68611, 0, 0],
          "71": [0, 0.68611, 0, 0],
          "72": [0, 0.68611, 0, 0],
          "73": [0, 0.68611, 0, 0],
          "74": [0, 0.68611, 0, 0],
          "75": [0, 0.68611, 0, 0],
          "76": [0, 0.68611, 0, 0],
          "77": [0, 0.68611, 0, 0],
          "78": [0, 0.68611, 0, 0],
          "79": [0, 0.68611, 0, 0],
          "80": [0, 0.68611, 0, 0],
          "81": [0.19444, 0.68611, 0, 0],
          "82": [0, 0.68611, 0, 0],
          "83": [0, 0.68611, 0, 0],
          "84": [0, 0.68611, 0, 0],
          "85": [0, 0.68611, 0, 0],
          "86": [0, 0.68611, 0.01597, 0],
          "87": [0, 0.68611, 0.01597, 0],
          "88": [0, 0.68611, 0, 0],
          "89": [0, 0.68611, 0.02875, 0],
          "90": [0, 0.68611, 0, 0],
          "91": [0.25, 0.75, 0, 0],
          "92": [0.25, 0.75, 0, 0],
          "93": [0.25, 0.75, 0, 0],
          "94": [0, 0.69444, 0, 0],
          "95": [0.31, 0.13444, 0.03194, 0],
          "96": [0, 0.69444, 0, 0],
          "97": [0, 0.44444, 0, 0],
          "98": [0, 0.69444, 0, 0],
          "99": [0, 0.44444, 0, 0],
          "100": [0, 0.69444, 0, 0],
          "101": [0, 0.44444, 0, 0],
          "102": [0, 0.69444, 0.10903, 0],
          "103": [0.19444, 0.44444, 0.01597, 0],
          "104": [0, 0.69444, 0, 0],
          "105": [0, 0.69444, 0, 0],
          "106": [0.19444, 0.69444, 0, 0],
          "107": [0, 0.69444, 0, 0],
          "108": [0, 0.69444, 0, 0],
          "109": [0, 0.44444, 0, 0],
          "110": [0, 0.44444, 0, 0],
          "111": [0, 0.44444, 0, 0],
          "112": [0.19444, 0.44444, 0, 0],
          "113": [0.19444, 0.44444, 0, 0],
          "114": [0, 0.44444, 0, 0],
          "115": [0, 0.44444, 0, 0],
          "116": [0, 0.63492, 0, 0],
          "117": [0, 0.44444, 0, 0],
          "118": [0, 0.44444, 0.01597, 0],
          "119": [0, 0.44444, 0.01597, 0],
          "120": [0, 0.44444, 0, 0],
          "121": [0.19444, 0.44444, 0.01597, 0],
          "122": [0, 0.44444, 0, 0],
          "123": [0.25, 0.75, 0, 0],
          "124": [0.25, 0.75, 0, 0],
          "125": [0.25, 0.75, 0, 0],
          "126": [0.35, 0.34444, 0, 0],
          "168": [0, 0.69444, 0, 0],
          "172": [0, 0.44444, 0, 0],
          "175": [0, 0.59611, 0, 0],
          "176": [0, 0.69444, 0, 0],
          "177": [0.13333, 0.63333, 0, 0],
          "180": [0, 0.69444, 0, 0],
          "215": [0.13333, 0.63333, 0, 0],
          "247": [0.13333, 0.63333, 0, 0],
          "305": [0, 0.44444, 0, 0],
          "567": [0.19444, 0.44444, 0, 0],
          "710": [0, 0.69444, 0, 0],
          "711": [0, 0.63194, 0, 0],
          "713": [0, 0.59611, 0, 0],
          "714": [0, 0.69444, 0, 0],
          "715": [0, 0.69444, 0, 0],
          "728": [0, 0.69444, 0, 0],
          "729": [0, 0.69444, 0, 0],
          "730": [0, 0.69444, 0, 0],
          "732": [0, 0.69444, 0, 0],
          "768": [0, 0.69444, 0, 0],
          "769": [0, 0.69444, 0, 0],
          "770": [0, 0.69444, 0, 0],
          "771": [0, 0.69444, 0, 0],
          "772": [0, 0.59611, 0, 0],
          "774": [0, 0.69444, 0, 0],
          "775": [0, 0.69444, 0, 0],
          "776": [0, 0.69444, 0, 0],
          "778": [0, 0.69444, 0, 0],
          "779": [0, 0.69444, 0, 0],
          "780": [0, 0.63194, 0, 0],
          "824": [0.19444, 0.69444, 0, 0],
          "915": [0, 0.68611, 0, 0],
          "916": [0, 0.68611, 0, 0],
          "920": [0, 0.68611, 0, 0],
          "923": [0, 0.68611, 0, 0],
          "926": [0, 0.68611, 0, 0],
          "928": [0, 0.68611, 0, 0],
          "931": [0, 0.68611, 0, 0],
          "933": [0, 0.68611, 0, 0],
          "934": [0, 0.68611, 0, 0],
          "936": [0, 0.68611, 0, 0],
          "937": [0, 0.68611, 0, 0],
          "8211": [0, 0.44444, 0.03194, 0],
          "8212": [0, 0.44444, 0.03194, 0],
          "8216": [0, 0.69444, 0, 0],
          "8217": [0, 0.69444, 0, 0],
          "8220": [0, 0.69444, 0, 0],
          "8221": [0, 0.69444, 0, 0],
          "8224": [0.19444, 0.69444, 0, 0],
          "8225": [0.19444, 0.69444, 0, 0],
          "8242": [0, 0.55556, 0, 0],
          "8407": [0, 0.72444, 0.15486, 0],
          "8463": [0, 0.69444, 0, 0],
          "8465": [0, 0.69444, 0, 0],
          "8467": [0, 0.69444, 0, 0],
          "8472": [0.19444, 0.44444, 0, 0],
          "8476": [0, 0.69444, 0, 0],
          "8501": [0, 0.69444, 0, 0],
          "8592": [-0.10889, 0.39111, 0, 0],
          "8593": [0.19444, 0.69444, 0, 0],
          "8594": [-0.10889, 0.39111, 0, 0],
          "8595": [0.19444, 0.69444, 0, 0],
          "8596": [-0.10889, 0.39111, 0, 0],
          "8597": [0.25, 0.75, 0, 0],
          "8598": [0.19444, 0.69444, 0, 0],
          "8599": [0.19444, 0.69444, 0, 0],
          "8600": [0.19444, 0.69444, 0, 0],
          "8601": [0.19444, 0.69444, 0, 0],
          "8636": [-0.10889, 0.39111, 0, 0],
          "8637": [-0.10889, 0.39111, 0, 0],
          "8640": [-0.10889, 0.39111, 0, 0],
          "8641": [-0.10889, 0.39111, 0, 0],
          "8656": [-0.10889, 0.39111, 0, 0],
          "8657": [0.19444, 0.69444, 0, 0],
          "8658": [-0.10889, 0.39111, 0, 0],
          "8659": [0.19444, 0.69444, 0, 0],
          "8660": [-0.10889, 0.39111, 0, 0],
          "8661": [0.25, 0.75, 0, 0],
          "8704": [0, 0.69444, 0, 0],
          "8706": [0, 0.69444, 0.06389, 0],
          "8707": [0, 0.69444, 0, 0],
          "8709": [0.05556, 0.75, 0, 0],
          "8711": [0, 0.68611, 0, 0],
          "8712": [0.08556, 0.58556, 0, 0],
          "8715": [0.08556, 0.58556, 0, 0],
          "8722": [0.13333, 0.63333, 0, 0],
          "8723": [0.13333, 0.63333, 0, 0],
          "8725": [0.25, 0.75, 0, 0],
          "8726": [0.25, 0.75, 0, 0],
          "8727": [-0.02778, 0.47222, 0, 0],
          "8728": [-0.02639, 0.47361, 0, 0],
          "8729": [-0.02639, 0.47361, 0, 0],
          "8730": [0.18, 0.82, 0, 0],
          "8733": [0, 0.44444, 0, 0],
          "8734": [0, 0.44444, 0, 0],
          "8736": [0, 0.69224, 0, 0],
          "8739": [0.25, 0.75, 0, 0],
          "8741": [0.25, 0.75, 0, 0],
          "8743": [0, 0.55556, 0, 0],
          "8744": [0, 0.55556, 0, 0],
          "8745": [0, 0.55556, 0, 0],
          "8746": [0, 0.55556, 0, 0],
          "8747": [0.19444, 0.69444, 0.12778, 0],
          "8764": [-0.10889, 0.39111, 0, 0],
          "8768": [0.19444, 0.69444, 0, 0],
          "8771": [0.00222, 0.50222, 0, 0],
          "8776": [0.02444, 0.52444, 0, 0],
          "8781": [0.00222, 0.50222, 0, 0],
          "8801": [0.00222, 0.50222, 0, 0],
          "8804": [0.19667, 0.69667, 0, 0],
          "8805": [0.19667, 0.69667, 0, 0],
          "8810": [0.08556, 0.58556, 0, 0],
          "8811": [0.08556, 0.58556, 0, 0],
          "8826": [0.08556, 0.58556, 0, 0],
          "8827": [0.08556, 0.58556, 0, 0],
          "8834": [0.08556, 0.58556, 0, 0],
          "8835": [0.08556, 0.58556, 0, 0],
          "8838": [0.19667, 0.69667, 0, 0],
          "8839": [0.19667, 0.69667, 0, 0],
          "8846": [0, 0.55556, 0, 0],
          "8849": [0.19667, 0.69667, 0, 0],
          "8850": [0.19667, 0.69667, 0, 0],
          "8851": [0, 0.55556, 0, 0],
          "8852": [0, 0.55556, 0, 0],
          "8853": [0.13333, 0.63333, 0, 0],
          "8854": [0.13333, 0.63333, 0, 0],
          "8855": [0.13333, 0.63333, 0, 0],
          "8856": [0.13333, 0.63333, 0, 0],
          "8857": [0.13333, 0.63333, 0, 0],
          "8866": [0, 0.69444, 0, 0],
          "8867": [0, 0.69444, 0, 0],
          "8868": [0, 0.69444, 0, 0],
          "8869": [0, 0.69444, 0, 0],
          "8900": [-0.02639, 0.47361, 0, 0],
          "8901": [-0.02639, 0.47361, 0, 0],
          "8902": [-0.02778, 0.47222, 0, 0],
          "8968": [0.25, 0.75, 0, 0],
          "8969": [0.25, 0.75, 0, 0],
          "8970": [0.25, 0.75, 0, 0],
          "8971": [0.25, 0.75, 0, 0],
          "8994": [-0.13889, 0.36111, 0, 0],
          "8995": [-0.13889, 0.36111, 0, 0],
          "9651": [0.19444, 0.69444, 0, 0],
          "9657": [-0.02778, 0.47222, 0, 0],
          "9661": [0.19444, 0.69444, 0, 0],
          "9667": [-0.02778, 0.47222, 0, 0],
          "9711": [0.19444, 0.69444, 0, 0],
          "9824": [0.12963, 0.69444, 0, 0],
          "9825": [0.12963, 0.69444, 0, 0],
          "9826": [0.12963, 0.69444, 0, 0],
          "9827": [0.12963, 0.69444, 0, 0],
          "9837": [0, 0.75, 0, 0],
          "9838": [0.19444, 0.69444, 0, 0],
          "9839": [0.19444, 0.69444, 0, 0],
          "10216": [0.25, 0.75, 0, 0],
          "10217": [0.25, 0.75, 0, 0],
          "10815": [0, 0.68611, 0, 0],
          "10927": [0.19667, 0.69667, 0, 0],
          "10928": [0.19667, 0.69667, 0, 0]
        },
        "Main-Italic": {
          "33": [0, 0.69444, 0.12417, 0],
          "34": [0, 0.69444, 0.06961, 0],
          "35": [0.19444, 0.69444, 0.06616, 0],
          "37": [0.05556, 0.75, 0.13639, 0],
          "38": [0, 0.69444, 0.09694, 0],
          "39": [0, 0.69444, 0.12417, 0],
          "40": [0.25, 0.75, 0.16194, 0],
          "41": [0.25, 0.75, 0.03694, 0],
          "42": [0, 0.75, 0.14917, 0],
          "43": [0.05667, 0.56167, 0.03694, 0],
          "44": [0.19444, 0.10556, 0, 0],
          "45": [0, 0.43056, 0.02826, 0],
          "46": [0, 0.10556, 0, 0],
          "47": [0.25, 0.75, 0.16194, 0],
          "48": [0, 0.64444, 0.13556, 0],
          "49": [0, 0.64444, 0.13556, 0],
          "50": [0, 0.64444, 0.13556, 0],
          "51": [0, 0.64444, 0.13556, 0],
          "52": [0.19444, 0.64444, 0.13556, 0],
          "53": [0, 0.64444, 0.13556, 0],
          "54": [0, 0.64444, 0.13556, 0],
          "55": [0.19444, 0.64444, 0.13556, 0],
          "56": [0, 0.64444, 0.13556, 0],
          "57": [0, 0.64444, 0.13556, 0],
          "58": [0, 0.43056, 0.0582, 0],
          "59": [0.19444, 0.43056, 0.0582, 0],
          "61": [-0.13313, 0.36687, 0.06616, 0],
          "63": [0, 0.69444, 0.1225, 0],
          "64": [0, 0.69444, 0.09597, 0],
          "65": [0, 0.68333, 0, 0],
          "66": [0, 0.68333, 0.10257, 0],
          "67": [0, 0.68333, 0.14528, 0],
          "68": [0, 0.68333, 0.09403, 0],
          "69": [0, 0.68333, 0.12028, 0],
          "70": [0, 0.68333, 0.13305, 0],
          "71": [0, 0.68333, 0.08722, 0],
          "72": [0, 0.68333, 0.16389, 0],
          "73": [0, 0.68333, 0.15806, 0],
          "74": [0, 0.68333, 0.14028, 0],
          "75": [0, 0.68333, 0.14528, 0],
          "76": [0, 0.68333, 0, 0],
          "77": [0, 0.68333, 0.16389, 0],
          "78": [0, 0.68333, 0.16389, 0],
          "79": [0, 0.68333, 0.09403, 0],
          "80": [0, 0.68333, 0.10257, 0],
          "81": [0.19444, 0.68333, 0.09403, 0],
          "82": [0, 0.68333, 0.03868, 0],
          "83": [0, 0.68333, 0.11972, 0],
          "84": [0, 0.68333, 0.13305, 0],
          "85": [0, 0.68333, 0.16389, 0],
          "86": [0, 0.68333, 0.18361, 0],
          "87": [0, 0.68333, 0.18361, 0],
          "88": [0, 0.68333, 0.15806, 0],
          "89": [0, 0.68333, 0.19383, 0],
          "90": [0, 0.68333, 0.14528, 0],
          "91": [0.25, 0.75, 0.1875, 0],
          "93": [0.25, 0.75, 0.10528, 0],
          "94": [0, 0.69444, 0.06646, 0],
          "95": [0.31, 0.12056, 0.09208, 0],
          "97": [0, 0.43056, 0.07671, 0],
          "98": [0, 0.69444, 0.06312, 0],
          "99": [0, 0.43056, 0.05653, 0],
          "100": [0, 0.69444, 0.10333, 0],
          "101": [0, 0.43056, 0.07514, 0],
          "102": [0.19444, 0.69444, 0.21194, 0],
          "103": [0.19444, 0.43056, 0.08847, 0],
          "104": [0, 0.69444, 0.07671, 0],
          "105": [0, 0.65536, 0.1019, 0],
          "106": [0.19444, 0.65536, 0.14467, 0],
          "107": [0, 0.69444, 0.10764, 0],
          "108": [0, 0.69444, 0.10333, 0],
          "109": [0, 0.43056, 0.07671, 0],
          "110": [0, 0.43056, 0.07671, 0],
          "111": [0, 0.43056, 0.06312, 0],
          "112": [0.19444, 0.43056, 0.06312, 0],
          "113": [0.19444, 0.43056, 0.08847, 0],
          "114": [0, 0.43056, 0.10764, 0],
          "115": [0, 0.43056, 0.08208, 0],
          "116": [0, 0.61508, 0.09486, 0],
          "117": [0, 0.43056, 0.07671, 0],
          "118": [0, 0.43056, 0.10764, 0],
          "119": [0, 0.43056, 0.10764, 0],
          "120": [0, 0.43056, 0.12042, 0],
          "121": [0.19444, 0.43056, 0.08847, 0],
          "122": [0, 0.43056, 0.12292, 0],
          "126": [0.35, 0.31786, 0.11585, 0],
          "163": [0, 0.69444, 0, 0],
          "305": [0, 0.43056, 0, 0.02778],
          "567": [0.19444, 0.43056, 0, 0.08334],
          "768": [0, 0.69444, 0, 0],
          "769": [0, 0.69444, 0.09694, 0],
          "770": [0, 0.69444, 0.06646, 0],
          "771": [0, 0.66786, 0.11585, 0],
          "772": [0, 0.56167, 0.10333, 0],
          "774": [0, 0.69444, 0.10806, 0],
          "775": [0, 0.66786, 0.11752, 0],
          "776": [0, 0.66786, 0.10474, 0],
          "778": [0, 0.69444, 0, 0],
          "779": [0, 0.69444, 0.1225, 0],
          "780": [0, 0.62847, 0.08295, 0],
          "915": [0, 0.68333, 0.13305, 0],
          "916": [0, 0.68333, 0, 0],
          "920": [0, 0.68333, 0.09403, 0],
          "923": [0, 0.68333, 0, 0],
          "926": [0, 0.68333, 0.15294, 0],
          "928": [0, 0.68333, 0.16389, 0],
          "931": [0, 0.68333, 0.12028, 0],
          "933": [0, 0.68333, 0.11111, 0],
          "934": [0, 0.68333, 0.05986, 0],
          "936": [0, 0.68333, 0.11111, 0],
          "937": [0, 0.68333, 0.10257, 0],
          "8211": [0, 0.43056, 0.09208, 0],
          "8212": [0, 0.43056, 0.09208, 0],
          "8216": [0, 0.69444, 0.12417, 0],
          "8217": [0, 0.69444, 0.12417, 0],
          "8220": [0, 0.69444, 0.1685, 0],
          "8221": [0, 0.69444, 0.06961, 0],
          "8463": [0, 0.68889, 0, 0]
        },
        "Main-Regular": {
          "32": [0, 0, 0, 0],
          "33": [0, 0.69444, 0, 0],
          "34": [0, 0.69444, 0, 0],
          "35": [0.19444, 0.69444, 0, 0],
          "36": [0.05556, 0.75, 0, 0],
          "37": [0.05556, 0.75, 0, 0],
          "38": [0, 0.69444, 0, 0],
          "39": [0, 0.69444, 0, 0],
          "40": [0.25, 0.75, 0, 0],
          "41": [0.25, 0.75, 0, 0],
          "42": [0, 0.75, 0, 0],
          "43": [0.08333, 0.58333, 0, 0],
          "44": [0.19444, 0.10556, 0, 0],
          "45": [0, 0.43056, 0, 0],
          "46": [0, 0.10556, 0, 0],
          "47": [0.25, 0.75, 0, 0],
          "48": [0, 0.64444, 0, 0],
          "49": [0, 0.64444, 0, 0],
          "50": [0, 0.64444, 0, 0],
          "51": [0, 0.64444, 0, 0],
          "52": [0, 0.64444, 0, 0],
          "53": [0, 0.64444, 0, 0],
          "54": [0, 0.64444, 0, 0],
          "55": [0, 0.64444, 0, 0],
          "56": [0, 0.64444, 0, 0],
          "57": [0, 0.64444, 0, 0],
          "58": [0, 0.43056, 0, 0],
          "59": [0.19444, 0.43056, 0, 0],
          "60": [0.0391, 0.5391, 0, 0],
          "61": [-0.13313, 0.36687, 0, 0],
          "62": [0.0391, 0.5391, 0, 0],
          "63": [0, 0.69444, 0, 0],
          "64": [0, 0.69444, 0, 0],
          "65": [0, 0.68333, 0, 0],
          "66": [0, 0.68333, 0, 0],
          "67": [0, 0.68333, 0, 0],
          "68": [0, 0.68333, 0, 0],
          "69": [0, 0.68333, 0, 0],
          "70": [0, 0.68333, 0, 0],
          "71": [0, 0.68333, 0, 0],
          "72": [0, 0.68333, 0, 0],
          "73": [0, 0.68333, 0, 0],
          "74": [0, 0.68333, 0, 0],
          "75": [0, 0.68333, 0, 0],
          "76": [0, 0.68333, 0, 0],
          "77": [0, 0.68333, 0, 0],
          "78": [0, 0.68333, 0, 0],
          "79": [0, 0.68333, 0, 0],
          "80": [0, 0.68333, 0, 0],
          "81": [0.19444, 0.68333, 0, 0],
          "82": [0, 0.68333, 0, 0],
          "83": [0, 0.68333, 0, 0],
          "84": [0, 0.68333, 0, 0],
          "85": [0, 0.68333, 0, 0],
          "86": [0, 0.68333, 0.01389, 0],
          "87": [0, 0.68333, 0.01389, 0],
          "88": [0, 0.68333, 0, 0],
          "89": [0, 0.68333, 0.025, 0],
          "90": [0, 0.68333, 0, 0],
          "91": [0.25, 0.75, 0, 0],
          "92": [0.25, 0.75, 0, 0],
          "93": [0.25, 0.75, 0, 0],
          "94": [0, 0.69444, 0, 0],
          "95": [0.31, 0.12056, 0.02778, 0],
          "96": [0, 0.69444, 0, 0],
          "97": [0, 0.43056, 0, 0],
          "98": [0, 0.69444, 0, 0],
          "99": [0, 0.43056, 0, 0],
          "100": [0, 0.69444, 0, 0],
          "101": [0, 0.43056, 0, 0],
          "102": [0, 0.69444, 0.07778, 0],
          "103": [0.19444, 0.43056, 0.01389, 0],
          "104": [0, 0.69444, 0, 0],
          "105": [0, 0.66786, 0, 0],
          "106": [0.19444, 0.66786, 0, 0],
          "107": [0, 0.69444, 0, 0],
          "108": [0, 0.69444, 0, 0],
          "109": [0, 0.43056, 0, 0],
          "110": [0, 0.43056, 0, 0],
          "111": [0, 0.43056, 0, 0],
          "112": [0.19444, 0.43056, 0, 0],
          "113": [0.19444, 0.43056, 0, 0],
          "114": [0, 0.43056, 0, 0],
          "115": [0, 0.43056, 0, 0],
          "116": [0, 0.61508, 0, 0],
          "117": [0, 0.43056, 0, 0],
          "118": [0, 0.43056, 0.01389, 0],
          "119": [0, 0.43056, 0.01389, 0],
          "120": [0, 0.43056, 0, 0],
          "121": [0.19444, 0.43056, 0.01389, 0],
          "122": [0, 0.43056, 0, 0],
          "123": [0.25, 0.75, 0, 0],
          "124": [0.25, 0.75, 0, 0],
          "125": [0.25, 0.75, 0, 0],
          "126": [0.35, 0.31786, 0, 0],
          "160": [0, 0, 0, 0],
          "168": [0, 0.66786, 0, 0],
          "172": [0, 0.43056, 0, 0],
          "175": [0, 0.56778, 0, 0],
          "176": [0, 0.69444, 0, 0],
          "177": [0.08333, 0.58333, 0, 0],
          "180": [0, 0.69444, 0, 0],
          "215": [0.08333, 0.58333, 0, 0],
          "247": [0.08333, 0.58333, 0, 0],
          "305": [0, 0.43056, 0, 0],
          "567": [0.19444, 0.43056, 0, 0],
          "710": [0, 0.69444, 0, 0],
          "711": [0, 0.62847, 0, 0],
          "713": [0, 0.56778, 0, 0],
          "714": [0, 0.69444, 0, 0],
          "715": [0, 0.69444, 0, 0],
          "728": [0, 0.69444, 0, 0],
          "729": [0, 0.66786, 0, 0],
          "730": [0, 0.69444, 0, 0],
          "732": [0, 0.66786, 0, 0],
          "768": [0, 0.69444, 0, 0],
          "769": [0, 0.69444, 0, 0],
          "770": [0, 0.69444, 0, 0],
          "771": [0, 0.66786, 0, 0],
          "772": [0, 0.56778, 0, 0],
          "774": [0, 0.69444, 0, 0],
          "775": [0, 0.66786, 0, 0],
          "776": [0, 0.66786, 0, 0],
          "778": [0, 0.69444, 0, 0],
          "779": [0, 0.69444, 0, 0],
          "780": [0, 0.62847, 0, 0],
          "824": [0.19444, 0.69444, 0, 0],
          "915": [0, 0.68333, 0, 0],
          "916": [0, 0.68333, 0, 0],
          "920": [0, 0.68333, 0, 0],
          "923": [0, 0.68333, 0, 0],
          "926": [0, 0.68333, 0, 0],
          "928": [0, 0.68333, 0, 0],
          "931": [0, 0.68333, 0, 0],
          "933": [0, 0.68333, 0, 0],
          "934": [0, 0.68333, 0, 0],
          "936": [0, 0.68333, 0, 0],
          "937": [0, 0.68333, 0, 0],
          "8211": [0, 0.43056, 0.02778, 0],
          "8212": [0, 0.43056, 0.02778, 0],
          "8216": [0, 0.69444, 0, 0],
          "8217": [0, 0.69444, 0, 0],
          "8220": [0, 0.69444, 0, 0],
          "8221": [0, 0.69444, 0, 0],
          "8224": [0.19444, 0.69444, 0, 0],
          "8225": [0.19444, 0.69444, 0, 0],
          "8230": [0, 0.12, 0, 0],
          "8242": [0, 0.55556, 0, 0],
          "8407": [0, 0.71444, 0.15382, 0],
          "8463": [0, 0.68889, 0, 0],
          "8465": [0, 0.69444, 0, 0],
          "8467": [0, 0.69444, 0, 0.11111],
          "8472": [0.19444, 0.43056, 0, 0.11111],
          "8476": [0, 0.69444, 0, 0],
          "8501": [0, 0.69444, 0, 0],
          "8592": [-0.13313, 0.36687, 0, 0],
          "8593": [0.19444, 0.69444, 0, 0],
          "8594": [-0.13313, 0.36687, 0, 0],
          "8595": [0.19444, 0.69444, 0, 0],
          "8596": [-0.13313, 0.36687, 0, 0],
          "8597": [0.25, 0.75, 0, 0],
          "8598": [0.19444, 0.69444, 0, 0],
          "8599": [0.19444, 0.69444, 0, 0],
          "8600": [0.19444, 0.69444, 0, 0],
          "8601": [0.19444, 0.69444, 0, 0],
          "8614": [0.011, 0.511, 0, 0],
          "8617": [0.011, 0.511, 0, 0],
          "8618": [0.011, 0.511, 0, 0],
          "8636": [-0.13313, 0.36687, 0, 0],
          "8637": [-0.13313, 0.36687, 0, 0],
          "8640": [-0.13313, 0.36687, 0, 0],
          "8641": [-0.13313, 0.36687, 0, 0],
          "8652": [0.011, 0.671, 0, 0],
          "8656": [-0.13313, 0.36687, 0, 0],
          "8657": [0.19444, 0.69444, 0, 0],
          "8658": [-0.13313, 0.36687, 0, 0],
          "8659": [0.19444, 0.69444, 0, 0],
          "8660": [-0.13313, 0.36687, 0, 0],
          "8661": [0.25, 0.75, 0, 0],
          "8704": [0, 0.69444, 0, 0],
          "8706": [0, 0.69444, 0.05556, 0.08334],
          "8707": [0, 0.69444, 0, 0],
          "8709": [0.05556, 0.75, 0, 0],
          "8711": [0, 0.68333, 0, 0],
          "8712": [0.0391, 0.5391, 0, 0],
          "8715": [0.0391, 0.5391, 0, 0],
          "8722": [0.08333, 0.58333, 0, 0],
          "8723": [0.08333, 0.58333, 0, 0],
          "8725": [0.25, 0.75, 0, 0],
          "8726": [0.25, 0.75, 0, 0],
          "8727": [-0.03472, 0.46528, 0, 0],
          "8728": [-0.05555, 0.44445, 0, 0],
          "8729": [-0.05555, 0.44445, 0, 0],
          "8730": [0.2, 0.8, 0, 0],
          "8733": [0, 0.43056, 0, 0],
          "8734": [0, 0.43056, 0, 0],
          "8736": [0, 0.69224, 0, 0],
          "8739": [0.25, 0.75, 0, 0],
          "8741": [0.25, 0.75, 0, 0],
          "8743": [0, 0.55556, 0, 0],
          "8744": [0, 0.55556, 0, 0],
          "8745": [0, 0.55556, 0, 0],
          "8746": [0, 0.55556, 0, 0],
          "8747": [0.19444, 0.69444, 0.11111, 0],
          "8764": [-0.13313, 0.36687, 0, 0],
          "8768": [0.19444, 0.69444, 0, 0],
          "8771": [-0.03625, 0.46375, 0, 0],
          "8773": [-0.022, 0.589, 0, 0],
          "8776": [-0.01688, 0.48312, 0, 0],
          "8781": [-0.03625, 0.46375, 0, 0],
          "8784": [-0.133, 0.67, 0, 0],
          "8800": [0.215, 0.716, 0, 0],
          "8801": [-0.03625, 0.46375, 0, 0],
          "8804": [0.13597, 0.63597, 0, 0],
          "8805": [0.13597, 0.63597, 0, 0],
          "8810": [0.0391, 0.5391, 0, 0],
          "8811": [0.0391, 0.5391, 0, 0],
          "8826": [0.0391, 0.5391, 0, 0],
          "8827": [0.0391, 0.5391, 0, 0],
          "8834": [0.0391, 0.5391, 0, 0],
          "8835": [0.0391, 0.5391, 0, 0],
          "8838": [0.13597, 0.63597, 0, 0],
          "8839": [0.13597, 0.63597, 0, 0],
          "8846": [0, 0.55556, 0, 0],
          "8849": [0.13597, 0.63597, 0, 0],
          "8850": [0.13597, 0.63597, 0, 0],
          "8851": [0, 0.55556, 0, 0],
          "8852": [0, 0.55556, 0, 0],
          "8853": [0.08333, 0.58333, 0, 0],
          "8854": [0.08333, 0.58333, 0, 0],
          "8855": [0.08333, 0.58333, 0, 0],
          "8856": [0.08333, 0.58333, 0, 0],
          "8857": [0.08333, 0.58333, 0, 0],
          "8866": [0, 0.69444, 0, 0],
          "8867": [0, 0.69444, 0, 0],
          "8868": [0, 0.69444, 0, 0],
          "8869": [0, 0.69444, 0, 0],
          "8872": [0.249, 0.75, 0, 0],
          "8900": [-0.05555, 0.44445, 0, 0],
          "8901": [-0.05555, 0.44445, 0, 0],
          "8902": [-0.03472, 0.46528, 0, 0],
          "8904": [0.005, 0.505, 0, 0],
          "8942": [0.03, 0.9, 0, 0],
          "8943": [-0.19, 0.31, 0, 0],
          "8945": [-0.1, 0.82, 0, 0],
          "8968": [0.25, 0.75, 0, 0],
          "8969": [0.25, 0.75, 0, 0],
          "8970": [0.25, 0.75, 0, 0],
          "8971": [0.25, 0.75, 0, 0],
          "8994": [-0.14236, 0.35764, 0, 0],
          "8995": [-0.14236, 0.35764, 0, 0],
          "9136": [0.244, 0.744, 0, 0],
          "9137": [0.244, 0.744, 0, 0],
          "9651": [0.19444, 0.69444, 0, 0],
          "9657": [-0.03472, 0.46528, 0, 0],
          "9661": [0.19444, 0.69444, 0, 0],
          "9667": [-0.03472, 0.46528, 0, 0],
          "9711": [0.19444, 0.69444, 0, 0],
          "9824": [0.12963, 0.69444, 0, 0],
          "9825": [0.12963, 0.69444, 0, 0],
          "9826": [0.12963, 0.69444, 0, 0],
          "9827": [0.12963, 0.69444, 0, 0],
          "9837": [0, 0.75, 0, 0],
          "9838": [0.19444, 0.69444, 0, 0],
          "9839": [0.19444, 0.69444, 0, 0],
          "10216": [0.25, 0.75, 0, 0],
          "10217": [0.25, 0.75, 0, 0],
          "10222": [0.244, 0.744, 0, 0],
          "10223": [0.244, 0.744, 0, 0],
          "10229": [0.011, 0.511, 0, 0],
          "10230": [0.011, 0.511, 0, 0],
          "10231": [0.011, 0.511, 0, 0],
          "10232": [0.024, 0.525, 0, 0],
          "10233": [0.024, 0.525, 0, 0],
          "10234": [0.024, 0.525, 0, 0],
          "10236": [0.011, 0.511, 0, 0],
          "10815": [0, 0.68333, 0, 0],
          "10927": [0.13597, 0.63597, 0, 0],
          "10928": [0.13597, 0.63597, 0, 0]
        },
        "Math-BoldItalic": {
          "47": [0.19444, 0.69444, 0, 0],
          "65": [0, 0.68611, 0, 0],
          "66": [0, 0.68611, 0.04835, 0],
          "67": [0, 0.68611, 0.06979, 0],
          "68": [0, 0.68611, 0.03194, 0],
          "69": [0, 0.68611, 0.05451, 0],
          "70": [0, 0.68611, 0.15972, 0],
          "71": [0, 0.68611, 0, 0],
          "72": [0, 0.68611, 0.08229, 0],
          "73": [0, 0.68611, 0.07778, 0],
          "74": [0, 0.68611, 0.10069, 0],
          "75": [0, 0.68611, 0.06979, 0],
          "76": [0, 0.68611, 0, 0],
          "77": [0, 0.68611, 0.11424, 0],
          "78": [0, 0.68611, 0.11424, 0],
          "79": [0, 0.68611, 0.03194, 0],
          "80": [0, 0.68611, 0.15972, 0],
          "81": [0.19444, 0.68611, 0, 0],
          "82": [0, 0.68611, 0.00421, 0],
          "83": [0, 0.68611, 0.05382, 0],
          "84": [0, 0.68611, 0.15972, 0],
          "85": [0, 0.68611, 0.11424, 0],
          "86": [0, 0.68611, 0.25555, 0],
          "87": [0, 0.68611, 0.15972, 0],
          "88": [0, 0.68611, 0.07778, 0],
          "89": [0, 0.68611, 0.25555, 0],
          "90": [0, 0.68611, 0.06979, 0],
          "97": [0, 0.44444, 0, 0],
          "98": [0, 0.69444, 0, 0],
          "99": [0, 0.44444, 0, 0],
          "100": [0, 0.69444, 0, 0],
          "101": [0, 0.44444, 0, 0],
          "102": [0.19444, 0.69444, 0.11042, 0],
          "103": [0.19444, 0.44444, 0.03704, 0],
          "104": [0, 0.69444, 0, 0],
          "105": [0, 0.69326, 0, 0],
          "106": [0.19444, 0.69326, 0.0622, 0],
          "107": [0, 0.69444, 0.01852, 0],
          "108": [0, 0.69444, 0.0088, 0],
          "109": [0, 0.44444, 0, 0],
          "110": [0, 0.44444, 0, 0],
          "111": [0, 0.44444, 0, 0],
          "112": [0.19444, 0.44444, 0, 0],
          "113": [0.19444, 0.44444, 0.03704, 0],
          "114": [0, 0.44444, 0.03194, 0],
          "115": [0, 0.44444, 0, 0],
          "116": [0, 0.63492, 0, 0],
          "117": [0, 0.44444, 0, 0],
          "118": [0, 0.44444, 0.03704, 0],
          "119": [0, 0.44444, 0.02778, 0],
          "120": [0, 0.44444, 0, 0],
          "121": [0.19444, 0.44444, 0.03704, 0],
          "122": [0, 0.44444, 0.04213, 0],
          "915": [0, 0.68611, 0.15972, 0],
          "916": [0, 0.68611, 0, 0],
          "920": [0, 0.68611, 0.03194, 0],
          "923": [0, 0.68611, 0, 0],
          "926": [0, 0.68611, 0.07458, 0],
          "928": [0, 0.68611, 0.08229, 0],
          "931": [0, 0.68611, 0.05451, 0],
          "933": [0, 0.68611, 0.15972, 0],
          "934": [0, 0.68611, 0, 0],
          "936": [0, 0.68611, 0.11653, 0],
          "937": [0, 0.68611, 0.04835, 0],
          "945": [0, 0.44444, 0, 0],
          "946": [0.19444, 0.69444, 0.03403, 0],
          "947": [0.19444, 0.44444, 0.06389, 0],
          "948": [0, 0.69444, 0.03819, 0],
          "949": [0, 0.44444, 0, 0],
          "950": [0.19444, 0.69444, 0.06215, 0],
          "951": [0.19444, 0.44444, 0.03704, 0],
          "952": [0, 0.69444, 0.03194, 0],
          "953": [0, 0.44444, 0, 0],
          "954": [0, 0.44444, 0, 0],
          "955": [0, 0.69444, 0, 0],
          "956": [0.19444, 0.44444, 0, 0],
          "957": [0, 0.44444, 0.06898, 0],
          "958": [0.19444, 0.69444, 0.03021, 0],
          "959": [0, 0.44444, 0, 0],
          "960": [0, 0.44444, 0.03704, 0],
          "961": [0.19444, 0.44444, 0, 0],
          "962": [0.09722, 0.44444, 0.07917, 0],
          "963": [0, 0.44444, 0.03704, 0],
          "964": [0, 0.44444, 0.13472, 0],
          "965": [0, 0.44444, 0.03704, 0],
          "966": [0.19444, 0.44444, 0, 0],
          "967": [0.19444, 0.44444, 0, 0],
          "968": [0.19444, 0.69444, 0.03704, 0],
          "969": [0, 0.44444, 0.03704, 0],
          "977": [0, 0.69444, 0, 0],
          "981": [0.19444, 0.69444, 0, 0],
          "982": [0, 0.44444, 0.03194, 0],
          "1009": [0.19444, 0.44444, 0, 0],
          "1013": [0, 0.44444, 0, 0]
        },
        "Math-Italic": {
          "47": [0.19444, 0.69444, 0, 0],
          "65": [0, 0.68333, 0, 0.13889],
          "66": [0, 0.68333, 0.05017, 0.08334],
          "67": [0, 0.68333, 0.07153, 0.08334],
          "68": [0, 0.68333, 0.02778, 0.05556],
          "69": [0, 0.68333, 0.05764, 0.08334],
          "70": [0, 0.68333, 0.13889, 0.08334],
          "71": [0, 0.68333, 0, 0.08334],
          "72": [0, 0.68333, 0.08125, 0.05556],
          "73": [0, 0.68333, 0.07847, 0.11111],
          "74": [0, 0.68333, 0.09618, 0.16667],
          "75": [0, 0.68333, 0.07153, 0.05556],
          "76": [0, 0.68333, 0, 0.02778],
          "77": [0, 0.68333, 0.10903, 0.08334],
          "78": [0, 0.68333, 0.10903, 0.08334],
          "79": [0, 0.68333, 0.02778, 0.08334],
          "80": [0, 0.68333, 0.13889, 0.08334],
          "81": [0.19444, 0.68333, 0, 0.08334],
          "82": [0, 0.68333, 0.00773, 0.08334],
          "83": [0, 0.68333, 0.05764, 0.08334],
          "84": [0, 0.68333, 0.13889, 0.08334],
          "85": [0, 0.68333, 0.10903, 0.02778],
          "86": [0, 0.68333, 0.22222, 0],
          "87": [0, 0.68333, 0.13889, 0],
          "88": [0, 0.68333, 0.07847, 0.08334],
          "89": [0, 0.68333, 0.22222, 0],
          "90": [0, 0.68333, 0.07153, 0.08334],
          "97": [0, 0.43056, 0, 0],
          "98": [0, 0.69444, 0, 0],
          "99": [0, 0.43056, 0, 0.05556],
          "100": [0, 0.69444, 0, 0.16667],
          "101": [0, 0.43056, 0, 0.05556],
          "102": [0.19444, 0.69444, 0.10764, 0.16667],
          "103": [0.19444, 0.43056, 0.03588, 0.02778],
          "104": [0, 0.69444, 0, 0],
          "105": [0, 0.65952, 0, 0],
          "106": [0.19444, 0.65952, 0.05724, 0],
          "107": [0, 0.69444, 0.03148, 0],
          "108": [0, 0.69444, 0.01968, 0.08334],
          "109": [0, 0.43056, 0, 0],
          "110": [0, 0.43056, 0, 0],
          "111": [0, 0.43056, 0, 0.05556],
          "112": [0.19444, 0.43056, 0, 0.08334],
          "113": [0.19444, 0.43056, 0.03588, 0.08334],
          "114": [0, 0.43056, 0.02778, 0.05556],
          "115": [0, 0.43056, 0, 0.05556],
          "116": [0, 0.61508, 0, 0.08334],
          "117": [0, 0.43056, 0, 0.02778],
          "118": [0, 0.43056, 0.03588, 0.02778],
          "119": [0, 0.43056, 0.02691, 0.08334],
          "120": [0, 0.43056, 0, 0.02778],
          "121": [0.19444, 0.43056, 0.03588, 0.05556],
          "122": [0, 0.43056, 0.04398, 0.05556],
          "915": [0, 0.68333, 0.13889, 0.08334],
          "916": [0, 0.68333, 0, 0.16667],
          "920": [0, 0.68333, 0.02778, 0.08334],
          "923": [0, 0.68333, 0, 0.16667],
          "926": [0, 0.68333, 0.07569, 0.08334],
          "928": [0, 0.68333, 0.08125, 0.05556],
          "931": [0, 0.68333, 0.05764, 0.08334],
          "933": [0, 0.68333, 0.13889, 0.05556],
          "934": [0, 0.68333, 0, 0.08334],
          "936": [0, 0.68333, 0.11, 0.05556],
          "937": [0, 0.68333, 0.05017, 0.08334],
          "945": [0, 0.43056, 0.0037, 0.02778],
          "946": [0.19444, 0.69444, 0.05278, 0.08334],
          "947": [0.19444, 0.43056, 0.05556, 0],
          "948": [0, 0.69444, 0.03785, 0.05556],
          "949": [0, 0.43056, 0, 0.08334],
          "950": [0.19444, 0.69444, 0.07378, 0.08334],
          "951": [0.19444, 0.43056, 0.03588, 0.05556],
          "952": [0, 0.69444, 0.02778, 0.08334],
          "953": [0, 0.43056, 0, 0.05556],
          "954": [0, 0.43056, 0, 0],
          "955": [0, 0.69444, 0, 0],
          "956": [0.19444, 0.43056, 0, 0.02778],
          "957": [0, 0.43056, 0.06366, 0.02778],
          "958": [0.19444, 0.69444, 0.04601, 0.11111],
          "959": [0, 0.43056, 0, 0.05556],
          "960": [0, 0.43056, 0.03588, 0],
          "961": [0.19444, 0.43056, 0, 0.08334],
          "962": [0.09722, 0.43056, 0.07986, 0.08334],
          "963": [0, 0.43056, 0.03588, 0],
          "964": [0, 0.43056, 0.1132, 0.02778],
          "965": [0, 0.43056, 0.03588, 0.02778],
          "966": [0.19444, 0.43056, 0, 0.08334],
          "967": [0.19444, 0.43056, 0, 0.05556],
          "968": [0.19444, 0.69444, 0.03588, 0.11111],
          "969": [0, 0.43056, 0.03588, 0],
          "977": [0, 0.69444, 0, 0.08334],
          "981": [0.19444, 0.69444, 0, 0.08334],
          "982": [0, 0.43056, 0.02778, 0],
          "1009": [0.19444, 0.43056, 0, 0.08334],
          "1013": [0, 0.43056, 0, 0.05556]
        },
        "Math-Regular": {
          "65": [0, 0.68333, 0, 0.13889],
          "66": [0, 0.68333, 0.05017, 0.08334],
          "67": [0, 0.68333, 0.07153, 0.08334],
          "68": [0, 0.68333, 0.02778, 0.05556],
          "69": [0, 0.68333, 0.05764, 0.08334],
          "70": [0, 0.68333, 0.13889, 0.08334],
          "71": [0, 0.68333, 0, 0.08334],
          "72": [0, 0.68333, 0.08125, 0.05556],
          "73": [0, 0.68333, 0.07847, 0.11111],
          "74": [0, 0.68333, 0.09618, 0.16667],
          "75": [0, 0.68333, 0.07153, 0.05556],
          "76": [0, 0.68333, 0, 0.02778],
          "77": [0, 0.68333, 0.10903, 0.08334],
          "78": [0, 0.68333, 0.10903, 0.08334],
          "79": [0, 0.68333, 0.02778, 0.08334],
          "80": [0, 0.68333, 0.13889, 0.08334],
          "81": [0.19444, 0.68333, 0, 0.08334],
          "82": [0, 0.68333, 0.00773, 0.08334],
          "83": [0, 0.68333, 0.05764, 0.08334],
          "84": [0, 0.68333, 0.13889, 0.08334],
          "85": [0, 0.68333, 0.10903, 0.02778],
          "86": [0, 0.68333, 0.22222, 0],
          "87": [0, 0.68333, 0.13889, 0],
          "88": [0, 0.68333, 0.07847, 0.08334],
          "89": [0, 0.68333, 0.22222, 0],
          "90": [0, 0.68333, 0.07153, 0.08334],
          "97": [0, 0.43056, 0, 0],
          "98": [0, 0.69444, 0, 0],
          "99": [0, 0.43056, 0, 0.05556],
          "100": [0, 0.69444, 0, 0.16667],
          "101": [0, 0.43056, 0, 0.05556],
          "102": [0.19444, 0.69444, 0.10764, 0.16667],
          "103": [0.19444, 0.43056, 0.03588, 0.02778],
          "104": [0, 0.69444, 0, 0],
          "105": [0, 0.65952, 0, 0],
          "106": [0.19444, 0.65952, 0.05724, 0],
          "107": [0, 0.69444, 0.03148, 0],
          "108": [0, 0.69444, 0.01968, 0.08334],
          "109": [0, 0.43056, 0, 0],
          "110": [0, 0.43056, 0, 0],
          "111": [0, 0.43056, 0, 0.05556],
          "112": [0.19444, 0.43056, 0, 0.08334],
          "113": [0.19444, 0.43056, 0.03588, 0.08334],
          "114": [0, 0.43056, 0.02778, 0.05556],
          "115": [0, 0.43056, 0, 0.05556],
          "116": [0, 0.61508, 0, 0.08334],
          "117": [0, 0.43056, 0, 0.02778],
          "118": [0, 0.43056, 0.03588, 0.02778],
          "119": [0, 0.43056, 0.02691, 0.08334],
          "120": [0, 0.43056, 0, 0.02778],
          "121": [0.19444, 0.43056, 0.03588, 0.05556],
          "122": [0, 0.43056, 0.04398, 0.05556],
          "915": [0, 0.68333, 0.13889, 0.08334],
          "916": [0, 0.68333, 0, 0.16667],
          "920": [0, 0.68333, 0.02778, 0.08334],
          "923": [0, 0.68333, 0, 0.16667],
          "926": [0, 0.68333, 0.07569, 0.08334],
          "928": [0, 0.68333, 0.08125, 0.05556],
          "931": [0, 0.68333, 0.05764, 0.08334],
          "933": [0, 0.68333, 0.13889, 0.05556],
          "934": [0, 0.68333, 0, 0.08334],
          "936": [0, 0.68333, 0.11, 0.05556],
          "937": [0, 0.68333, 0.05017, 0.08334],
          "945": [0, 0.43056, 0.0037, 0.02778],
          "946": [0.19444, 0.69444, 0.05278, 0.08334],
          "947": [0.19444, 0.43056, 0.05556, 0],
          "948": [0, 0.69444, 0.03785, 0.05556],
          "949": [0, 0.43056, 0, 0.08334],
          "950": [0.19444, 0.69444, 0.07378, 0.08334],
          "951": [0.19444, 0.43056, 0.03588, 0.05556],
          "952": [0, 0.69444, 0.02778, 0.08334],
          "953": [0, 0.43056, 0, 0.05556],
          "954": [0, 0.43056, 0, 0],
          "955": [0, 0.69444, 0, 0],
          "956": [0.19444, 0.43056, 0, 0.02778],
          "957": [0, 0.43056, 0.06366, 0.02778],
          "958": [0.19444, 0.69444, 0.04601, 0.11111],
          "959": [0, 0.43056, 0, 0.05556],
          "960": [0, 0.43056, 0.03588, 0],
          "961": [0.19444, 0.43056, 0, 0.08334],
          "962": [0.09722, 0.43056, 0.07986, 0.08334],
          "963": [0, 0.43056, 0.03588, 0],
          "964": [0, 0.43056, 0.1132, 0.02778],
          "965": [0, 0.43056, 0.03588, 0.02778],
          "966": [0.19444, 0.43056, 0, 0.08334],
          "967": [0.19444, 0.43056, 0, 0.05556],
          "968": [0.19444, 0.69444, 0.03588, 0.11111],
          "969": [0, 0.43056, 0.03588, 0],
          "977": [0, 0.69444, 0, 0.08334],
          "981": [0.19444, 0.69444, 0, 0.08334],
          "982": [0, 0.43056, 0.02778, 0],
          "1009": [0.19444, 0.43056, 0, 0.08334],
          "1013": [0, 0.43056, 0, 0.05556]
        },
        "SansSerif-Regular": {
          "33": [0, 0.69444, 0, 0],
          "34": [0, 0.69444, 0, 0],
          "35": [0.19444, 0.69444, 0, 0],
          "36": [0.05556, 0.75, 0, 0],
          "37": [0.05556, 0.75, 0, 0],
          "38": [0, 0.69444, 0, 0],
          "39": [0, 0.69444, 0, 0],
          "40": [0.25, 0.75, 0, 0],
          "41": [0.25, 0.75, 0, 0],
          "42": [0, 0.75, 0, 0],
          "43": [0.08333, 0.58333, 0, 0],
          "44": [0.125, 0.08333, 0, 0],
          "45": [0, 0.44444, 0, 0],
          "46": [0, 0.08333, 0, 0],
          "47": [0.25, 0.75, 0, 0],
          "48": [0, 0.65556, 0, 0],
          "49": [0, 0.65556, 0, 0],
          "50": [0, 0.65556, 0, 0],
          "51": [0, 0.65556, 0, 0],
          "52": [0, 0.65556, 0, 0],
          "53": [0, 0.65556, 0, 0],
          "54": [0, 0.65556, 0, 0],
          "55": [0, 0.65556, 0, 0],
          "56": [0, 0.65556, 0, 0],
          "57": [0, 0.65556, 0, 0],
          "58": [0, 0.44444, 0, 0],
          "59": [0.125, 0.44444, 0, 0],
          "61": [-0.13, 0.37, 0, 0],
          "63": [0, 0.69444, 0, 0],
          "64": [0, 0.69444, 0, 0],
          "65": [0, 0.69444, 0, 0],
          "66": [0, 0.69444, 0, 0],
          "67": [0, 0.69444, 0, 0],
          "68": [0, 0.69444, 0, 0],
          "69": [0, 0.69444, 0, 0],
          "70": [0, 0.69444, 0, 0],
          "71": [0, 0.69444, 0, 0],
          "72": [0, 0.69444, 0, 0],
          "73": [0, 0.69444, 0, 0],
          "74": [0, 0.69444, 0, 0],
          "75": [0, 0.69444, 0, 0],
          "76": [0, 0.69444, 0, 0],
          "77": [0, 0.69444, 0, 0],
          "78": [0, 0.69444, 0, 0],
          "79": [0, 0.69444, 0, 0],
          "80": [0, 0.69444, 0, 0],
          "81": [0.125, 0.69444, 0, 0],
          "82": [0, 0.69444, 0, 0],
          "83": [0, 0.69444, 0, 0],
          "84": [0, 0.69444, 0, 0],
          "85": [0, 0.69444, 0, 0],
          "86": [0, 0.69444, 0.01389, 0],
          "87": [0, 0.69444, 0.01389, 0],
          "88": [0, 0.69444, 0, 0],
          "89": [0, 0.69444, 0.025, 0],
          "90": [0, 0.69444, 0, 0],
          "91": [0.25, 0.75, 0, 0],
          "93": [0.25, 0.75, 0, 0],
          "94": [0, 0.69444, 0, 0],
          "95": [0.35, 0.09444, 0.02778, 0],
          "97": [0, 0.44444, 0, 0],
          "98": [0, 0.69444, 0, 0],
          "99": [0, 0.44444, 0, 0],
          "100": [0, 0.69444, 0, 0],
          "101": [0, 0.44444, 0, 0],
          "102": [0, 0.69444, 0.06944, 0],
          "103": [0.19444, 0.44444, 0.01389, 0],
          "104": [0, 0.69444, 0, 0],
          "105": [0, 0.67937, 0, 0],
          "106": [0.19444, 0.67937, 0, 0],
          "107": [0, 0.69444, 0, 0],
          "108": [0, 0.69444, 0, 0],
          "109": [0, 0.44444, 0, 0],
          "110": [0, 0.44444, 0, 0],
          "111": [0, 0.44444, 0, 0],
          "112": [0.19444, 0.44444, 0, 0],
          "113": [0.19444, 0.44444, 0, 0],
          "114": [0, 0.44444, 0.01389, 0],
          "115": [0, 0.44444, 0, 0],
          "116": [0, 0.57143, 0, 0],
          "117": [0, 0.44444, 0, 0],
          "118": [0, 0.44444, 0.01389, 0],
          "119": [0, 0.44444, 0.01389, 0],
          "120": [0, 0.44444, 0, 0],
          "121": [0.19444, 0.44444, 0.01389, 0],
          "122": [0, 0.44444, 0, 0],
          "126": [0.35, 0.32659, 0, 0],
          "305": [0, 0.44444, 0, 0],
          "567": [0.19444, 0.44444, 0, 0],
          "768": [0, 0.69444, 0, 0],
          "769": [0, 0.69444, 0, 0],
          "770": [0, 0.69444, 0, 0],
          "771": [0, 0.67659, 0, 0],
          "772": [0, 0.60889, 0, 0],
          "774": [0, 0.69444, 0, 0],
          "775": [0, 0.67937, 0, 0],
          "776": [0, 0.67937, 0, 0],
          "778": [0, 0.69444, 0, 0],
          "779": [0, 0.69444, 0, 0],
          "780": [0, 0.63194, 0, 0],
          "915": [0, 0.69444, 0, 0],
          "916": [0, 0.69444, 0, 0],
          "920": [0, 0.69444, 0, 0],
          "923": [0, 0.69444, 0, 0],
          "926": [0, 0.69444, 0, 0],
          "928": [0, 0.69444, 0, 0],
          "931": [0, 0.69444, 0, 0],
          "933": [0, 0.69444, 0, 0],
          "934": [0, 0.69444, 0, 0],
          "936": [0, 0.69444, 0, 0],
          "937": [0, 0.69444, 0, 0],
          "8211": [0, 0.44444, 0.02778, 0],
          "8212": [0, 0.44444, 0.02778, 0],
          "8216": [0, 0.69444, 0, 0],
          "8217": [0, 0.69444, 0, 0],
          "8220": [0, 0.69444, 0, 0],
          "8221": [0, 0.69444, 0, 0]
        },
        "Script-Regular": {
          "65": [0, 0.7, 0.22925, 0],
          "66": [0, 0.7, 0.04087, 0],
          "67": [0, 0.7, 0.1689, 0],
          "68": [0, 0.7, 0.09371, 0],
          "69": [0, 0.7, 0.18583, 0],
          "70": [0, 0.7, 0.13634, 0],
          "71": [0, 0.7, 0.17322, 0],
          "72": [0, 0.7, 0.29694, 0],
          "73": [0, 0.7, 0.19189, 0],
          "74": [0.27778, 0.7, 0.19189, 0],
          "75": [0, 0.7, 0.31259, 0],
          "76": [0, 0.7, 0.19189, 0],
          "77": [0, 0.7, 0.15981, 0],
          "78": [0, 0.7, 0.3525, 0],
          "79": [0, 0.7, 0.08078, 0],
          "80": [0, 0.7, 0.08078, 0],
          "81": [0, 0.7, 0.03305, 0],
          "82": [0, 0.7, 0.06259, 0],
          "83": [0, 0.7, 0.19189, 0],
          "84": [0, 0.7, 0.29087, 0],
          "85": [0, 0.7, 0.25815, 0],
          "86": [0, 0.7, 0.27523, 0],
          "87": [0, 0.7, 0.27523, 0],
          "88": [0, 0.7, 0.26006, 0],
          "89": [0, 0.7, 0.2939, 0],
          "90": [0, 0.7, 0.24037, 0]
        },
        "Size1-Regular": {
          "40": [0.35001, 0.85, 0, 0],
          "41": [0.35001, 0.85, 0, 0],
          "47": [0.35001, 0.85, 0, 0],
          "91": [0.35001, 0.85, 0, 0],
          "92": [0.35001, 0.85, 0, 0],
          "93": [0.35001, 0.85, 0, 0],
          "123": [0.35001, 0.85, 0, 0],
          "125": [0.35001, 0.85, 0, 0],
          "710": [0, 0.72222, 0, 0],
          "732": [0, 0.72222, 0, 0],
          "770": [0, 0.72222, 0, 0],
          "771": [0, 0.72222, 0, 0],
          "8214": [-0.00099, 0.601, 0, 0],
          "8593": [1e-05, 0.6, 0, 0],
          "8595": [1e-05, 0.6, 0, 0],
          "8657": [1e-05, 0.6, 0, 0],
          "8659": [1e-05, 0.6, 0, 0],
          "8719": [0.25001, 0.75, 0, 0],
          "8720": [0.25001, 0.75, 0, 0],
          "8721": [0.25001, 0.75, 0, 0],
          "8730": [0.35001, 0.85, 0, 0],
          "8739": [-0.00599, 0.606, 0, 0],
          "8741": [-0.00599, 0.606, 0, 0],
          "8747": [0.30612, 0.805, 0.19445, 0],
          "8748": [0.306, 0.805, 0.19445, 0],
          "8749": [0.306, 0.805, 0.19445, 0],
          "8750": [0.30612, 0.805, 0.19445, 0],
          "8896": [0.25001, 0.75, 0, 0],
          "8897": [0.25001, 0.75, 0, 0],
          "8898": [0.25001, 0.75, 0, 0],
          "8899": [0.25001, 0.75, 0, 0],
          "8968": [0.35001, 0.85, 0, 0],
          "8969": [0.35001, 0.85, 0, 0],
          "8970": [0.35001, 0.85, 0, 0],
          "8971": [0.35001, 0.85, 0, 0],
          "9168": [-0.00099, 0.601, 0, 0],
          "10216": [0.35001, 0.85, 0, 0],
          "10217": [0.35001, 0.85, 0, 0],
          "10752": [0.25001, 0.75, 0, 0],
          "10753": [0.25001, 0.75, 0, 0],
          "10754": [0.25001, 0.75, 0, 0],
          "10756": [0.25001, 0.75, 0, 0],
          "10758": [0.25001, 0.75, 0, 0]
        },
        "Size2-Regular": {
          "40": [0.65002, 1.15, 0, 0],
          "41": [0.65002, 1.15, 0, 0],
          "47": [0.65002, 1.15, 0, 0],
          "91": [0.65002, 1.15, 0, 0],
          "92": [0.65002, 1.15, 0, 0],
          "93": [0.65002, 1.15, 0, 0],
          "123": [0.65002, 1.15, 0, 0],
          "125": [0.65002, 1.15, 0, 0],
          "710": [0, 0.75, 0, 0],
          "732": [0, 0.75, 0, 0],
          "770": [0, 0.75, 0, 0],
          "771": [0, 0.75, 0, 0],
          "8719": [0.55001, 1.05, 0, 0],
          "8720": [0.55001, 1.05, 0, 0],
          "8721": [0.55001, 1.05, 0, 0],
          "8730": [0.65002, 1.15, 0, 0],
          "8747": [0.86225, 1.36, 0.44445, 0],
          "8748": [0.862, 1.36, 0.44445, 0],
          "8749": [0.862, 1.36, 0.44445, 0],
          "8750": [0.86225, 1.36, 0.44445, 0],
          "8896": [0.55001, 1.05, 0, 0],
          "8897": [0.55001, 1.05, 0, 0],
          "8898": [0.55001, 1.05, 0, 0],
          "8899": [0.55001, 1.05, 0, 0],
          "8968": [0.65002, 1.15, 0, 0],
          "8969": [0.65002, 1.15, 0, 0],
          "8970": [0.65002, 1.15, 0, 0],
          "8971": [0.65002, 1.15, 0, 0],
          "10216": [0.65002, 1.15, 0, 0],
          "10217": [0.65002, 1.15, 0, 0],
          "10752": [0.55001, 1.05, 0, 0],
          "10753": [0.55001, 1.05, 0, 0],
          "10754": [0.55001, 1.05, 0, 0],
          "10756": [0.55001, 1.05, 0, 0],
          "10758": [0.55001, 1.05, 0, 0]
        },
        "Size3-Regular": {
          "40": [0.95003, 1.45, 0, 0],
          "41": [0.95003, 1.45, 0, 0],
          "47": [0.95003, 1.45, 0, 0],
          "91": [0.95003, 1.45, 0, 0],
          "92": [0.95003, 1.45, 0, 0],
          "93": [0.95003, 1.45, 0, 0],
          "123": [0.95003, 1.45, 0, 0],
          "125": [0.95003, 1.45, 0, 0],
          "710": [0, 0.75, 0, 0],
          "732": [0, 0.75, 0, 0],
          "770": [0, 0.75, 0, 0],
          "771": [0, 0.75, 0, 0],
          "8730": [0.95003, 1.45, 0, 0],
          "8968": [0.95003, 1.45, 0, 0],
          "8969": [0.95003, 1.45, 0, 0],
          "8970": [0.95003, 1.45, 0, 0],
          "8971": [0.95003, 1.45, 0, 0],
          "10216": [0.95003, 1.45, 0, 0],
          "10217": [0.95003, 1.45, 0, 0]
        },
        "Size4-Regular": {
          "40": [1.25003, 1.75, 0, 0],
          "41": [1.25003, 1.75, 0, 0],
          "47": [1.25003, 1.75, 0, 0],
          "91": [1.25003, 1.75, 0, 0],
          "92": [1.25003, 1.75, 0, 0],
          "93": [1.25003, 1.75, 0, 0],
          "123": [1.25003, 1.75, 0, 0],
          "125": [1.25003, 1.75, 0, 0],
          "710": [0, 0.825, 0, 0],
          "732": [0, 0.825, 0, 0],
          "770": [0, 0.825, 0, 0],
          "771": [0, 0.825, 0, 0],
          "8730": [1.25003, 1.75, 0, 0],
          "8968": [1.25003, 1.75, 0, 0],
          "8969": [1.25003, 1.75, 0, 0],
          "8970": [1.25003, 1.75, 0, 0],
          "8971": [1.25003, 1.75, 0, 0],
          "9115": [0.64502, 1.155, 0, 0],
          "9116": [1e-05, 0.6, 0, 0],
          "9117": [0.64502, 1.155, 0, 0],
          "9118": [0.64502, 1.155, 0, 0],
          "9119": [1e-05, 0.6, 0, 0],
          "9120": [0.64502, 1.155, 0, 0],
          "9121": [0.64502, 1.155, 0, 0],
          "9122": [-0.00099, 0.601, 0, 0],
          "9123": [0.64502, 1.155, 0, 0],
          "9124": [0.64502, 1.155, 0, 0],
          "9125": [-0.00099, 0.601, 0, 0],
          "9126": [0.64502, 1.155, 0, 0],
          "9127": [1e-05, 0.9, 0, 0],
          "9128": [0.65002, 1.15, 0, 0],
          "9129": [0.90001, 0, 0, 0],
          "9130": [0, 0.3, 0, 0],
          "9131": [1e-05, 0.9, 0, 0],
          "9132": [0.65002, 1.15, 0, 0],
          "9133": [0.90001, 0, 0, 0],
          "9143": [0.88502, 0.915, 0, 0],
          "10216": [1.25003, 1.75, 0, 0],
          "10217": [1.25003, 1.75, 0, 0],
          "57344": [-0.00499, 0.605, 0, 0],
          "57345": [-0.00499, 0.605, 0, 0],
          "57680": [0, 0.12, 0, 0],
          "57681": [0, 0.12, 0, 0],
          "57682": [0, 0.12, 0, 0],
          "57683": [0, 0.12, 0, 0]
        },
        "Typewriter-Regular": {
          "33": [0, 0.61111, 0, 0],
          "34": [0, 0.61111, 0, 0],
          "35": [0, 0.61111, 0, 0],
          "36": [0.08333, 0.69444, 0, 0],
          "37": [0.08333, 0.69444, 0, 0],
          "38": [0, 0.61111, 0, 0],
          "39": [0, 0.61111, 0, 0],
          "40": [0.08333, 0.69444, 0, 0],
          "41": [0.08333, 0.69444, 0, 0],
          "42": [0, 0.52083, 0, 0],
          "43": [-0.08056, 0.53055, 0, 0],
          "44": [0.13889, 0.125, 0, 0],
          "45": [-0.08056, 0.53055, 0, 0],
          "46": [0, 0.125, 0, 0],
          "47": [0.08333, 0.69444, 0, 0],
          "48": [0, 0.61111, 0, 0],
          "49": [0, 0.61111, 0, 0],
          "50": [0, 0.61111, 0, 0],
          "51": [0, 0.61111, 0, 0],
          "52": [0, 0.61111, 0, 0],
          "53": [0, 0.61111, 0, 0],
          "54": [0, 0.61111, 0, 0],
          "55": [0, 0.61111, 0, 0],
          "56": [0, 0.61111, 0, 0],
          "57": [0, 0.61111, 0, 0],
          "58": [0, 0.43056, 0, 0],
          "59": [0.13889, 0.43056, 0, 0],
          "60": [-0.05556, 0.55556, 0, 0],
          "61": [-0.19549, 0.41562, 0, 0],
          "62": [-0.05556, 0.55556, 0, 0],
          "63": [0, 0.61111, 0, 0],
          "64": [0, 0.61111, 0, 0],
          "65": [0, 0.61111, 0, 0],
          "66": [0, 0.61111, 0, 0],
          "67": [0, 0.61111, 0, 0],
          "68": [0, 0.61111, 0, 0],
          "69": [0, 0.61111, 0, 0],
          "70": [0, 0.61111, 0, 0],
          "71": [0, 0.61111, 0, 0],
          "72": [0, 0.61111, 0, 0],
          "73": [0, 0.61111, 0, 0],
          "74": [0, 0.61111, 0, 0],
          "75": [0, 0.61111, 0, 0],
          "76": [0, 0.61111, 0, 0],
          "77": [0, 0.61111, 0, 0],
          "78": [0, 0.61111, 0, 0],
          "79": [0, 0.61111, 0, 0],
          "80": [0, 0.61111, 0, 0],
          "81": [0.13889, 0.61111, 0, 0],
          "82": [0, 0.61111, 0, 0],
          "83": [0, 0.61111, 0, 0],
          "84": [0, 0.61111, 0, 0],
          "85": [0, 0.61111, 0, 0],
          "86": [0, 0.61111, 0, 0],
          "87": [0, 0.61111, 0, 0],
          "88": [0, 0.61111, 0, 0],
          "89": [0, 0.61111, 0, 0],
          "90": [0, 0.61111, 0, 0],
          "91": [0.08333, 0.69444, 0, 0],
          "92": [0.08333, 0.69444, 0, 0],
          "93": [0.08333, 0.69444, 0, 0],
          "94": [0, 0.61111, 0, 0],
          "95": [0.09514, 0, 0, 0],
          "96": [0, 0.61111, 0, 0],
          "97": [0, 0.43056, 0, 0],
          "98": [0, 0.61111, 0, 0],
          "99": [0, 0.43056, 0, 0],
          "100": [0, 0.61111, 0, 0],
          "101": [0, 0.43056, 0, 0],
          "102": [0, 0.61111, 0, 0],
          "103": [0.22222, 0.43056, 0, 0],
          "104": [0, 0.61111, 0, 0],
          "105": [0, 0.61111, 0, 0],
          "106": [0.22222, 0.61111, 0, 0],
          "107": [0, 0.61111, 0, 0],
          "108": [0, 0.61111, 0, 0],
          "109": [0, 0.43056, 0, 0],
          "110": [0, 0.43056, 0, 0],
          "111": [0, 0.43056, 0, 0],
          "112": [0.22222, 0.43056, 0, 0],
          "113": [0.22222, 0.43056, 0, 0],
          "114": [0, 0.43056, 0, 0],
          "115": [0, 0.43056, 0, 0],
          "116": [0, 0.55358, 0, 0],
          "117": [0, 0.43056, 0, 0],
          "118": [0, 0.43056, 0, 0],
          "119": [0, 0.43056, 0, 0],
          "120": [0, 0.43056, 0, 0],
          "121": [0.22222, 0.43056, 0, 0],
          "122": [0, 0.43056, 0, 0],
          "123": [0.08333, 0.69444, 0, 0],
          "124": [0.08333, 0.69444, 0, 0],
          "125": [0.08333, 0.69444, 0, 0],
          "126": [0, 0.61111, 0, 0],
          "127": [0, 0.61111, 0, 0],
          "305": [0, 0.43056, 0, 0],
          "567": [0.22222, 0.43056, 0, 0],
          "768": [0, 0.61111, 0, 0],
          "769": [0, 0.61111, 0, 0],
          "770": [0, 0.61111, 0, 0],
          "771": [0, 0.61111, 0, 0],
          "772": [0, 0.56555, 0, 0],
          "774": [0, 0.61111, 0, 0],
          "776": [0, 0.61111, 0, 0],
          "778": [0, 0.61111, 0, 0],
          "780": [0, 0.56597, 0, 0],
          "915": [0, 0.61111, 0, 0],
          "916": [0, 0.61111, 0, 0],
          "920": [0, 0.61111, 0, 0],
          "923": [0, 0.61111, 0, 0],
          "926": [0, 0.61111, 0, 0],
          "928": [0, 0.61111, 0, 0],
          "931": [0, 0.61111, 0, 0],
          "933": [0, 0.61111, 0, 0],
          "934": [0, 0.61111, 0, 0],
          "936": [0, 0.61111, 0, 0],
          "937": [0, 0.61111, 0, 0],
          "2018": [0, 0.61111, 0, 0],
          "2019": [0, 0.61111, 0, 0],
          "8216": [0, 0.61111, 0, 0],
          "8217": [0, 0.61111, 0, 0],
          "8242": [0, 0.61111, 0, 0],
          "9251": [0.11111, 0.21944, 0, 0]
        }
      };
      exports.default = fontMetricsData;
    }, {}],
    103: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = require("./utils");

      var _utils2 = _interopRequireDefault(_utils);

      var _ParseError = require("./ParseError");

      var _ParseError2 = _interopRequireDefault(_ParseError);

      var _ParseNode = require("./ParseNode");

      var _ParseNode2 = _interopRequireDefault(_ParseNode);

      var _defineFunction2 = require("./defineFunction");

      var _defineFunction3 = _interopRequireDefault(_defineFunction2);

      require("./functions/phantom");

      require("./functions/operators");

      require("./functions/delimsizing");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      } // WARNING: New functions should be added to src/functions and imported here.

      /** Include this to ensure that all functions are defined. */


      var functions = _defineFunction2._functions;
      exports.default = functions; // Define a convenience function that mimcs the old semantics of defineFunction
      // to support existing code so that we can migrate it a little bit at a time.

      var defineFunction = function defineFunction(names, props, handler) // null only if handled in parser
      {
        (0, _defineFunction3.default)({
          names: names,
          props: props,
          handler: handler
        });
      }; // A normal square root


      defineFunction(["\\sqrt"], {
        numArgs: 1,
        numOptionalArgs: 1
      }, function (context, args, optArgs) {
        var index = optArgs[0];
        var body = args[0];
        return {
          type: "sqrt",
          body: body,
          index: index
        };
      }); // Non-mathy text, possibly in a font

      var textFunctionFonts = {
        "\\text": undefined,
        "\\textrm": "mathrm",
        "\\textsf": "mathsf",
        "\\texttt": "mathtt",
        "\\textnormal": "mathrm",
        "\\textbf": "mathbf",
        "\\textit": "textit"
      };
      defineFunction(["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textit"], {
        numArgs: 1,
        argTypes: ["text"],
        greediness: 2,
        allowedInText: true
      }, function (context, args) {
        var body = args[0];
        return {
          type: "text",
          body: (0, _defineFunction2.ordargument)(body),
          font: textFunctionFonts[context.funcName]
        };
      }); // A two-argument custom color

      defineFunction(["\\textcolor"], {
        numArgs: 2,
        allowedInText: true,
        greediness: 3,
        argTypes: ["color", "original"]
      }, function (context, args) {
        var color = args[0];
        var body = args[1];
        return {
          type: "color",
          color: color.value,
          value: (0, _defineFunction2.ordargument)(body)
        };
      }); // \color is handled in Parser.js's parseImplicitGroup

      defineFunction(["\\color"], {
        numArgs: 1,
        allowedInText: true,
        greediness: 3,
        argTypes: ["color"]
      }, null); // colorbox

      defineFunction(["\\colorbox"], {
        numArgs: 2,
        allowedInText: true,
        greediness: 3,
        argTypes: ["color", "text"]
      }, function (context, args) {
        var color = args[0];
        var body = args[1];
        return {
          type: "enclose",
          label: context.funcName,
          backgroundColor: color,
          body: body
        };
      }); // fcolorbox

      defineFunction(["\\fcolorbox"], {
        numArgs: 3,
        allowedInText: true,
        greediness: 3,
        argTypes: ["color", "color", "text"]
      }, function (context, args) {
        var borderColor = args[0];
        var backgroundColor = args[1];
        var body = args[2];
        return {
          type: "enclose",
          label: context.funcName,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          body: body
        };
      }); // An overline

      defineFunction(["\\overline"], {
        numArgs: 1
      }, function (context, args) {
        var body = args[0];
        return {
          type: "overline",
          body: body
        };
      }); // An underline

      defineFunction(["\\underline"], {
        numArgs: 1
      }, function (context, args) {
        var body = args[0];
        return {
          type: "underline",
          body: body
        };
      }); // A box of the width and height

      defineFunction(["\\rule"], {
        numArgs: 2,
        numOptionalArgs: 1,
        argTypes: ["size", "size", "size"]
      }, function (context, args, optArgs) {
        var shift = optArgs[0];
        var width = args[0];
        var height = args[1];
        return {
          type: "rule",
          shift: shift && shift.value,
          width: width.value,
          height: height.value
        };
      }); // TODO: In TeX, \mkern only accepts mu-units, and \kern does not accept
      // mu-units. In current KaTeX we relax this; both commands accept any unit.

      defineFunction(["\\kern", "\\mkern"], {
        numArgs: 1,
        argTypes: ["size"]
      }, function (context, args) {
        return {
          type: "kern",
          dimension: args[0].value
        };
      }); // A KaTeX logo

      defineFunction(["\\KaTeX"], {
        numArgs: 0
      }, function (context) {
        return {
          type: "katex"
        };
      }); // Math class commands except \mathop

      defineFunction(["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], {
        numArgs: 1
      }, function (context, args) {
        var body = args[0];
        return {
          type: "mclass",
          mclass: "m" + context.funcName.substr(5),
          value: (0, _defineFunction2.ordargument)(body)
        };
      }); // Build a relation by placing one symbol on top of another

      defineFunction(["\\stackrel"], {
        numArgs: 2
      }, function (context, args) {
        var top = args[0];
        var bottom = args[1];
        var bottomop = new _ParseNode2.default("op", {
          type: "op",
          limits: true,
          alwaysHandleSupSub: true,
          symbol: false,
          value: (0, _defineFunction2.ordargument)(bottom)
        }, bottom.mode);
        var supsub = new _ParseNode2.default("supsub", {
          base: bottomop,
          sup: top,
          sub: null
        }, top.mode);
        return {
          type: "mclass",
          mclass: "mrel",
          value: [supsub]
        };
      }); // \mod-type functions

      defineFunction(["\\bmod"], {
        numArgs: 0
      }, function (context, args) {
        return {
          type: "mod",
          modType: "bmod",
          value: null
        };
      });
      defineFunction(["\\pod", "\\pmod", "\\mod"], {
        numArgs: 1
      }, function (context, args) {
        var body = args[0];
        return {
          type: "mod",
          modType: context.funcName.substr(1),
          value: (0, _defineFunction2.ordargument)(body)
        };
      });
      var fontAliases = {
        "\\Bbb": "\\mathbb",
        "\\bold": "\\mathbf",
        "\\frak": "\\mathfrak"
      }; // Single-argument color functions

      defineFunction(["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"], {
        numArgs: 1,
        allowedInText: true,
        greediness: 3
      }, function (context, args) {
        var body = args[0];
        return {
          type: "color",
          color: "katex-" + context.funcName.slice(1),
          value: (0, _defineFunction2.ordargument)(body)
        };
      }); // There are 2 flags for operators; whether they produce limits in
      // displaystyle, and whether they are symbols and should grow in
      // displaystyle. These four groups cover the four possible choices.
      // No limits, not symbols

      defineFunction(["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], {
        numArgs: 0
      }, function (context) {
        return {
          type: "op",
          limits: false,
          symbol: false,
          body: context.funcName
        };
      }); // Limits, not symbols

      defineFunction(["\\det", "\\gcd", "\\inf", "\\lim", "\\liminf", "\\limsup", "\\max", "\\min", "\\Pr", "\\sup"], {
        numArgs: 0
      }, function (context) {
        return {
          type: "op",
          limits: true,
          symbol: false,
          body: context.funcName
        };
      }); // No limits, symbols

      defineFunction(["\\int", "\\iint", "\\iiint", "\\oint"], {
        numArgs: 0
      }, function (context) {
        return {
          type: "op",
          limits: false,
          symbol: true,
          body: context.funcName
        };
      }); // Limits, symbols

      defineFunction(["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint"], {
        numArgs: 0
      }, function (context) {
        return {
          type: "op",
          limits: true,
          symbol: true,
          body: context.funcName
        };
      }); // \mathop class command

      defineFunction(["\\mathop"], {
        numArgs: 1
      }, function (context, args) {
        var body = args[0];
        return {
          type: "op",
          limits: false,
          symbol: false,
          value: (0, _defineFunction2.ordargument)(body)
        };
      }); // Fractions

      defineFunction(["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac"], {
        numArgs: 2,
        greediness: 2
      }, function (context, args) {
        var numer = args[0];
        var denom = args[1];
        var hasBarLine = void 0;
        var leftDelim = null;
        var rightDelim = null;
        var size = "auto";

        switch (context.funcName) {
          case "\\dfrac":
          case "\\frac":
          case "\\tfrac":
            hasBarLine = true;
            break;

          case "\\\\atopfrac":
            hasBarLine = false;
            break;

          case "\\dbinom":
          case "\\binom":
          case "\\tbinom":
            hasBarLine = false;
            leftDelim = "(";
            rightDelim = ")";
            break;

          default:
            throw new Error("Unrecognized genfrac command");
        }

        switch (context.funcName) {
          case "\\dfrac":
          case "\\dbinom":
            size = "display";
            break;

          case "\\tfrac":
          case "\\tbinom":
            size = "text";
            break;
        }

        return {
          type: "genfrac",
          numer: numer,
          denom: denom,
          hasBarLine: hasBarLine,
          leftDelim: leftDelim,
          rightDelim: rightDelim,
          size: size
        };
      }); // Horizontal overlap functions

      defineFunction(["\\mathllap", "\\mathrlap", "\\mathclap"], {
        numArgs: 1,
        allowedInText: true
      }, function (context, args) {
        var body = args[0];
        return {
          type: "lap",
          alignment: context.funcName.slice(5),
          body: body
        };
      }); // smash, with optional [tb], as in AMS

      defineFunction(["\\smash"], {
        numArgs: 1,
        numOptionalArgs: 1,
        allowedInText: true
      }, function (context, args, optArgs) {
        var smashHeight = false;
        var smashDepth = false;
        var tbArg = optArgs[0];

        if (tbArg) {
          // Optional [tb] argument is engaged.
          // ref: amsmath: \renewcommand{\smash}[1][tb]{%
          //               def\mb@t{\ht}\def\mb@b{\dp}\def\mb@tb{\ht\z@\z@\dp}%
          var letter = "";

          for (var i = 0; i < tbArg.value.length; ++i) {
            letter = tbArg.value[i].value;

            if (letter === "t") {
              smashHeight = true;
            } else if (letter === "b") {
              smashDepth = true;
            } else {
              smashHeight = false;
              smashDepth = false;
              break;
            }
          }
        } else {
          smashHeight = true;
          smashDepth = true;
        }

        var body = args[0];
        return {
          type: "smash",
          body: body,
          smashHeight: smashHeight,
          smashDepth: smashDepth
        };
      }); // Sizing functions (handled in Parser.js explicitly, hence no handler)

      defineFunction(["\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], {
        numArgs: 0
      }, null); // Style changing functions (handled in Parser.js explicitly, hence no
      // handler)

      defineFunction(["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], {
        numArgs: 0
      }, null); // Old font changing functions

      defineFunction(["\\rm", "\\sf", "\\tt", "\\bf", "\\it"], {
        numArgs: 0
      }, null);
      defineFunction([// styles
      "\\mathrm", "\\mathit", "\\mathbf", // families
      "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", // aliases
      "\\Bbb", "\\bold", "\\frak"], {
        numArgs: 1,
        greediness: 2
      }, function (context, args) {
        var body = args[0];
        var func = context.funcName;

        if (func in fontAliases) {
          func = fontAliases[func];
        }

        return {
          type: "font",
          font: func.slice(1),
          body: body
        };
      }); // Accents

      defineFunction(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], {
        numArgs: 1
      }, function (context, args) {
        var base = args[0];
        var isStretchy = !_utils2.default.contains(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot"], context.funcName);

        var isShifty = !isStretchy || _utils2.default.contains(["\\widehat", "\\widetilde"], context.funcName);

        return {
          type: "accent",
          label: context.funcName,
          isStretchy: isStretchy,
          isShifty: isShifty,
          base: base
        };
      }); // Text-mode accents

      defineFunction(["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v"], {
        numArgs: 1,
        allowedInText: true,
        allowedInMath: false
      }, function (context, args) {
        var base = args[0];
        return {
          type: "accent",
          label: context.funcName,
          isStretchy: false,
          isShifty: true,
          base: base
        };
      }); // Horizontal stretchy braces

      defineFunction(["\\overbrace", "\\underbrace"], {
        numArgs: 1
      }, function (context, args) {
        var base = args[0];
        return {
          type: "horizBrace",
          label: context.funcName,
          isOver: /^\\over/.test(context.funcName),
          base: base
        };
      }); // Stretchy accents under the body

      defineFunction(["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\undertilde"], {
        numArgs: 1
      }, function (context, args) {
        var base = args[0];
        return {
          type: "accentUnder",
          label: context.funcName,
          base: base
        };
      }); // Stretchy arrows with an optional argument

      defineFunction(["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xLongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xLongequal", "\\xtofrom"], {
        numArgs: 1,
        numOptionalArgs: 1
      }, function (context, args, optArgs) {
        var below = optArgs[0];
        var body = args[0];
        return {
          type: "xArrow",
          // x for extensible
          label: context.funcName,
          body: body,
          below: below
        };
      }); // enclose

      defineFunction(["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\fbox"], {
        numArgs: 1
      }, function (context, args) {
        var body = args[0];
        return {
          type: "enclose",
          label: context.funcName,
          body: body
        };
      }); // Infix generalized fractions

      defineFunction(["\\over", "\\choose", "\\atop"], {
        numArgs: 0,
        infix: true
      }, function (context) {
        var replaceWith = void 0;

        switch (context.funcName) {
          case "\\over":
            replaceWith = "\\frac";
            break;

          case "\\choose":
            replaceWith = "\\binom";
            break;

          case "\\atop":
            replaceWith = "\\\\atopfrac";
            break;

          default:
            throw new Error("Unrecognized infix genfrac command");
        }

        return {
          type: "infix",
          replaceWith: replaceWith,
          token: context.token
        };
      }); // Row breaks for aligned data

      defineFunction(["\\\\", "\\cr"], {
        numArgs: 0,
        numOptionalArgs: 1,
        argTypes: ["size"]
      }, function (context, args, optArgs) {
        var size = optArgs[0];
        return {
          type: "cr",
          size: size
        };
      }); // Environment delimiters

      defineFunction(["\\begin", "\\end"], {
        numArgs: 1,
        argTypes: ["text"]
      }, function (context, args) {
        var nameGroup = args[0];

        if (nameGroup.type !== "ordgroup") {
          throw new _ParseError2.default("Invalid environment name", nameGroup);
        }

        var name = "";

        for (var i = 0; i < nameGroup.value.length; ++i) {
          name += nameGroup.value[i].value;
        }

        return {
          type: "environment",
          name: name,
          nameGroup: nameGroup
        };
      }); // Box manipulation

      defineFunction(["\\raisebox"], {
        numArgs: 2,
        argTypes: ["size", "text"],
        allowedInText: true
      }, function (context, args) {
        var amount = args[0];
        var body = args[1];
        return {
          type: "raisebox",
          dy: amount,
          body: body,
          value: (0, _defineFunction2.ordargument)(body)
        };
      }); // \verb and \verb* are dealt with directly in Parser.js.
      // If we end up here, it's because of a failure to match the two delimiters
      // in the regex in Lexer.js.  LaTeX raises the following error when \verb is
      // terminated by end of line (or file).

      defineFunction(["\\verb"], {
        numArgs: 0,
        allowedInText: true
      }, function (context) {
        throw new _ParseError2.default("\\verb ended by end of line instead of matching delimiter");
      });
    }, {
      "./ParseError": 84,
      "./ParseNode": 85,
      "./defineFunction": 96,
      "./functions/delimsizing": 104,
      "./functions/operators": 105,
      "./functions/phantom": 106,
      "./utils": 115
    }],
    104: [function (require, module, exports) {
      "use strict";

      var _buildCommon = require("../buildCommon");

      var _buildCommon2 = _interopRequireDefault(_buildCommon);

      var _defineFunction = require("../defineFunction");

      var _defineFunction2 = _interopRequireDefault(_defineFunction);

      var _delimiter = require("../delimiter");

      var _delimiter2 = _interopRequireDefault(_delimiter);

      var _mathMLTree = require("../mathMLTree");

      var _mathMLTree2 = _interopRequireDefault(_mathMLTree);

      var _ParseError = require("../ParseError");

      var _ParseError2 = _interopRequireDefault(_ParseError);

      var _utils = require("../utils");

      var _utils2 = _interopRequireDefault(_utils);

      var _buildHTML = require("../buildHTML");

      var html = _interopRequireWildcard(_buildHTML);

      var _buildMathML = require("../buildMathML");

      var mml = _interopRequireWildcard(_buildMathML);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj.default = obj;
          return newObj;
        }
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      } // Extra data needed for the delimiter handler down below


      var delimiterSizes = {
        "\\bigl": {
          mclass: "mopen",
          size: 1
        },
        "\\Bigl": {
          mclass: "mopen",
          size: 2
        },
        "\\biggl": {
          mclass: "mopen",
          size: 3
        },
        "\\Biggl": {
          mclass: "mopen",
          size: 4
        },
        "\\bigr": {
          mclass: "mclose",
          size: 1
        },
        "\\Bigr": {
          mclass: "mclose",
          size: 2
        },
        "\\biggr": {
          mclass: "mclose",
          size: 3
        },
        "\\Biggr": {
          mclass: "mclose",
          size: 4
        },
        "\\bigm": {
          mclass: "mrel",
          size: 1
        },
        "\\Bigm": {
          mclass: "mrel",
          size: 2
        },
        "\\biggm": {
          mclass: "mrel",
          size: 3
        },
        "\\Biggm": {
          mclass: "mrel",
          size: 4
        },
        "\\big": {
          mclass: "mord",
          size: 1
        },
        "\\Big": {
          mclass: "mord",
          size: 2
        },
        "\\bigg": {
          mclass: "mord",
          size: 3
        },
        "\\Bigg": {
          mclass: "mord",
          size: 4
        }
      };
      var delimiters = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "<", ">", "\\langle", "\\rangle", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]; // Delimiter functions

      function checkDelimiter(delim, context) {
        if (_utils2.default.contains(delimiters, delim.value)) {
          return delim;
        } else {
          throw new _ParseError2.default("Invalid delimiter: '" + delim.value + "' after '" + context.funcName + "'", delim);
        }
      }

      (0, _defineFunction2.default)({
        type: "delimsizing",
        names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
        props: {
          numArgs: 1
        },
        handler: function handler(context, args) {
          var delim = checkDelimiter(args[0], context);
          return {
            type: "delimsizing",
            size: delimiterSizes[context.funcName].size,
            mclass: delimiterSizes[context.funcName].mclass,
            value: delim.value
          };
        },
        htmlBuilder: function htmlBuilder(group, options) {
          var delim = group.value.value;

          if (delim === ".") {
            // Empty delimiters still count as elements, even though they don't
            // show anything.
            return _buildCommon2.default.makeSpan([group.value.mclass]);
          } // Use delimiter.sizedDelim to generate the delimiter.


          return _delimiter2.default.sizedDelim(delim, group.value.size, options, group.mode, [group.value.mclass]);
        },
        mathmlBuilder: function mathmlBuilder(group) {
          var children = [];

          if (group.value.value !== ".") {
            children.push(mml.makeText(group.value.value, group.mode));
          }

          var node = new _mathMLTree2.default.MathNode("mo", children);

          if (group.value.mclass === "mopen" || group.value.mclass === "mclose") {
            // Only some of the delimsizing functions act as fences, and they
            // return "mopen" or "mclose" mclass.
            node.setAttribute("fence", "true");
          } else {
            // Explicitly disable fencing if it's not a fence, to override the
            // defaults.
            node.setAttribute("fence", "false");
          }

          return node;
        }
      });
      (0, _defineFunction2.default)({
        type: "leftright",
        names: ["\\left", "\\right"],
        props: {
          numArgs: 1
        },
        handler: function handler(context, args) {
          var delim = checkDelimiter(args[0], context); // \left and \right are caught somewhere in Parser.js, which is
          // why this data doesn't match what is in buildHTML.

          return {
            type: "leftright",
            value: delim.value
          };
        },
        htmlBuilder: function htmlBuilder(group, options) {
          // Build the inner expression
          var inner = html.buildExpression(group.value.body, options, true);
          var innerHeight = 0;
          var innerDepth = 0;
          var hadMiddle = false; // Calculate its height and depth

          for (var i = 0; i < inner.length; i++) {
            if (inner[i].isMiddle) {
              hadMiddle = true;
            } else {
              innerHeight = Math.max(inner[i].height, innerHeight);
              innerDepth = Math.max(inner[i].depth, innerDepth);
            }
          } // The size of delimiters is the same, regardless of what style we are
          // in. Thus, to correctly calculate the size of delimiter we need around
          // a group, we scale down the inner size based on the size.


          innerHeight *= options.sizeMultiplier;
          innerDepth *= options.sizeMultiplier;
          var leftDelim = void 0;

          if (group.value.left === ".") {
            // Empty delimiters in \left and \right make null delimiter spaces.
            leftDelim = html.makeNullDelimiter(options, ["mopen"]);
          } else {
            // Otherwise, use leftRightDelim to generate the correct sized
            // delimiter.
            leftDelim = _delimiter2.default.leftRightDelim(group.value.left, innerHeight, innerDepth, options, group.mode, ["mopen"]);
          } // Add it to the beginning of the expression


          inner.unshift(leftDelim); // Handle middle delimiters

          if (hadMiddle) {
            for (var _i = 1; _i < inner.length; _i++) {
              var middleDelim = inner[_i];

              if (middleDelim.isMiddle) {
                // Apply the options that were active when \middle was called
                inner[_i] = _delimiter2.default.leftRightDelim(middleDelim.isMiddle.value, innerHeight, innerDepth, middleDelim.isMiddle.options, group.mode, []); // Add back spaces shifted into the delimiter

                var spaces = html.spliceSpaces(middleDelim.children, 0);

                if (spaces) {
                  _buildCommon2.default.prependChildren(inner[_i], spaces);
                }
              }
            }
          }

          var rightDelim = void 0; // Same for the right delimiter

          if (group.value.right === ".") {
            rightDelim = html.makeNullDelimiter(options, ["mclose"]);
          } else {
            rightDelim = _delimiter2.default.leftRightDelim(group.value.right, innerHeight, innerDepth, options, group.mode, ["mclose"]);
          } // Add it to the end of the expression.


          inner.push(rightDelim);
          return _buildCommon2.default.makeSpan(["minner"], inner, options);
        },
        mathmlBuilder: function mathmlBuilder(group, options) {
          var inner = mml.buildExpression(group.value.body, options);

          if (group.value.left !== ".") {
            var leftNode = new _mathMLTree2.default.MathNode("mo", [mml.makeText(group.value.left, group.mode)]);
            leftNode.setAttribute("fence", "true");
            inner.unshift(leftNode);
          }

          if (group.value.right !== ".") {
            var rightNode = new _mathMLTree2.default.MathNode("mo", [mml.makeText(group.value.right, group.mode)]);
            rightNode.setAttribute("fence", "true");
            inner.push(rightNode);
          }

          var outerNode = new _mathMLTree2.default.MathNode("mrow", inner);
          return outerNode;
        }
      });
      (0, _defineFunction2.default)({
        type: "middle",
        names: ["\\middle"],
        props: {
          numArgs: 1
        },
        handler: function handler(context, args) {
          var delim = checkDelimiter(args[0], context);

          if (!context.parser.leftrightDepth) {
            throw new _ParseError2.default("\\middle without preceding \\left", delim);
          }

          return {
            type: "middle",
            value: delim.value
          };
        },
        htmlBuilder: function htmlBuilder(group, options) {
          var middleDelim = void 0;

          if (group.value.value === ".") {
            middleDelim = html.makeNullDelimiter(options, []);
          } else {
            middleDelim = _delimiter2.default.sizedDelim(group.value.value, 1, options, group.mode, []);
            middleDelim.isMiddle = {
              value: group.value.value,
              options: options
            };
          }

          return middleDelim;
        },
        mathmlBuilder: function mathmlBuilder(group, options) {
          var middleNode = new _mathMLTree2.default.MathNode("mo", [mml.makeText(group.value.middle, group.mode)]);
          middleNode.setAttribute("fence", "true");
          return middleNode;
        }
      });
    }, {
      "../ParseError": 84,
      "../buildCommon": 91,
      "../buildHTML": 92,
      "../buildMathML": 93,
      "../defineFunction": 96,
      "../delimiter": 97,
      "../mathMLTree": 108,
      "../utils": 115
    }],
    105: [function (require, module, exports) {
      "use strict";

      var _defineFunction = require("../defineFunction");

      var _defineFunction2 = _interopRequireDefault(_defineFunction);

      var _buildCommon = require("../buildCommon");

      var _buildCommon2 = _interopRequireDefault(_buildCommon);

      var _mathMLTree = require("../mathMLTree");

      var _mathMLTree2 = _interopRequireDefault(_mathMLTree);

      var _domTree = require("../domTree");

      var _domTree2 = _interopRequireDefault(_domTree);

      var _buildHTML = require("../buildHTML");

      var html = _interopRequireWildcard(_buildHTML);

      var _buildMathML = require("../buildMathML");

      var mml = _interopRequireWildcard(_buildMathML);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj.default = obj;
          return newObj;
        }
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      } // \operatorname
      // amsopn.dtx: \mathop{#1\kern\z@\operator@font#3}\newmcodes@


      (0, _defineFunction2.default)({
        type: "operatorname",
        names: ["\\operatorname"],
        props: {
          numArgs: 1
        },
        handler: function handler(context, args) {
          var body = args[0];
          return {
            type: "operatorname",
            value: (0, _defineFunction.ordargument)(body)
          };
        },
        htmlBuilder: function htmlBuilder(group, options) {
          var output = [];

          if (group.value.value.length > 0) {
            var letter = "";
            var mode = ""; // Consolidate Greek letter function names into symbol characters.

            var temp = html.buildExpression(group.value.value, options, true); // All we want from temp are the letters. With them, we'll
            // create a text operator similar to \tan or \cos.

            for (var i = 0; i < temp.length; i++) {
              letter = temp[i].value; // In the amsopn package, \newmcodes@ changes four
              // characters, *-/:’, from math operators back into text.
              // Given what is in temp, we have to address two of them.

              letter = letter.replace(/\u2212/, "-"); // minus => hyphen

              letter = letter.replace(/\u2217/, "*"); // Use math mode for Greek letters

              mode = /[\u0391-\u03D7]/.test(letter) ? "math" : "text";
              output.push(_buildCommon2.default.mathsym(letter, mode));
            }
          }

          return _buildCommon2.default.makeSpan(["mop"], output, options);
        },
        mathmlBuilder: function mathmlBuilder(group, options) {
          // The steps taken here are similar to the html version.
          var output = [];

          if (group.value.value.length > 0) {
            var temp = mml.buildExpression(group.value.value, options);
            var word = "";

            for (var i = 0; i < temp.length; i++) {
              word += temp[i].children[0].text;
            }

            word = word.replace(/\u2212/g, "-");
            word = word.replace(/\u2217/g, "*");
            output = [new _mathMLTree2.default.TextNode(word)];
          }

          var identifier = new _mathMLTree2.default.MathNode("mi", output);
          identifier.setAttribute("mathvariant", "normal");
          var operator = new _mathMLTree2.default.MathNode("mo", [mml.makeText("&ApplyFunction;", "text")]);
          return new _domTree2.default.documentFragment([identifier, operator]);
        }
      });
    }, {
      "../buildCommon": 91,
      "../buildHTML": 92,
      "../buildMathML": 93,
      "../defineFunction": 96,
      "../domTree": 98,
      "../mathMLTree": 108
    }],
    106: [function (require, module, exports) {
      "use strict";

      var _defineFunction = require("../defineFunction");

      var _defineFunction2 = _interopRequireDefault(_defineFunction);

      var _buildCommon = require("../buildCommon");

      var _buildCommon2 = _interopRequireDefault(_buildCommon);

      var _mathMLTree = require("../mathMLTree");

      var _mathMLTree2 = _interopRequireDefault(_mathMLTree);

      var _buildHTML = require("../buildHTML");

      var html = _interopRequireWildcard(_buildHTML);

      var _buildMathML = require("../buildMathML");

      var mml = _interopRequireWildcard(_buildMathML);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj.default = obj;
          return newObj;
        }
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      (0, _defineFunction2.default)({
        type: "phantom",
        names: ["\\phantom"],
        props: {
          numArgs: 1
        },
        handler: function handler(context, args) {
          var body = args[0];
          return {
            type: "phantom",
            value: (0, _defineFunction.ordargument)(body)
          };
        },
        htmlBuilder: function htmlBuilder(group, options) {
          var elements = html.buildExpression(group.value.value, options.withPhantom(), false); // \phantom isn't supposed to affect the elements it contains.
          // See "color" for more details.

          return new _buildCommon2.default.makeFragment(elements);
        },
        mathmlBuilder: function mathmlBuilder(group, options) {
          var inner = mml.buildExpression(group.value.value, options);
          return new _mathMLTree2.default.MathNode("mphantom", inner);
        }
      });
      (0, _defineFunction2.default)({
        type: "hphantom",
        names: ["\\hphantom"],
        props: {
          numArgs: 1
        },
        handler: function handler(context, args) {
          var body = args[0];
          return {
            type: "hphantom",
            value: (0, _defineFunction.ordargument)(body),
            body: body
          };
        },
        htmlBuilder: function htmlBuilder(group, options) {
          var node = _buildCommon2.default.makeSpan([], [html.buildGroup(group.value.body, options.withPhantom())]);

          node.height = 0;
          node.depth = 0;

          if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
              node.children[i].height = 0;
              node.children[i].depth = 0;
            }
          } // See smash for comment re: use of makeVList


          node = _buildCommon2.default.makeVList([{
            type: "elem",
            elem: node
          }], "firstBaseline", null, options);
          return node;
        },
        mathmlBuilder: function mathmlBuilder(group, options) {
          var inner = mml.buildExpression(group.value.value, options);
          var node = new _mathMLTree2.default.MathNode("mphantom", inner);
          node.setAttribute("height", "0px");
          return node;
        }
      });
      (0, _defineFunction2.default)({
        type: "vphantom",
        names: ["\\vphantom"],
        props: {
          numArgs: 1
        },
        handler: function handler(context, args) {
          var body = args[0];
          return {
            type: "vphantom",
            value: (0, _defineFunction.ordargument)(body),
            body: body
          };
        },
        htmlBuilder: function htmlBuilder(group, options) {
          var inner = _buildCommon2.default.makeSpan(["inner"], [html.buildGroup(group.value.body, options.withPhantom())]);

          var fix = _buildCommon2.default.makeSpan(["fix"], []);

          return _buildCommon2.default.makeSpan(["mord", "rlap"], [inner, fix], options);
        },
        mathmlBuilder: function mathmlBuilder(group, options) {
          var inner = mml.buildExpression(group.value.value, options);
          var node = new _mathMLTree2.default.MathNode("mphantom", inner);
          node.setAttribute("width", "0px");
          return node;
        }
      });
    }, {
      "../buildCommon": 91,
      "../buildHTML": 92,
      "../buildMathML": 93,
      "../defineFunction": 96,
      "../mathMLTree": 108
    }],
    107: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _symbols = require("./symbols");

      var _symbols2 = _interopRequireDefault(_symbols);

      var _utils = require("./utils");

      var _utils2 = _interopRequireDefault(_utils);

      var _Token = require("./Token");

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * Provides context to macros defined by functions. Implemented by
       * MacroExpander.
       */

      /** Macro tokens (in reverse order). */


      var builtinMacros = {};
      /**
       * Predefined macros for KaTeX.
       * This can be used to define some commands in terms of others.
       */

      exports.default = builtinMacros; // This function might one day accept an additional argument and do more things.

      function defineMacro(name, body) {
        builtinMacros[name] = body;
      } //////////////////////////////////////////////////////////////////////
      // basics


      defineMacro("\\bgroup", "{");
      defineMacro("\\egroup", "}");
      defineMacro("\\begingroup", "{");
      defineMacro("\\endgroup", "}"); // We don't distinguish between math and nonmath kerns.
      // (In TeX, the mu unit works only with \mkern.)

      defineMacro("\\mkern", "\\kern"); // \llap and \rlap render their contents in text mode

      defineMacro("\\llap", "\\mathllap{\\textrm{#1}}");
      defineMacro("\\rlap", "\\mathrlap{\\textrm{#1}}");
      defineMacro("\\clap", "\\mathclap{\\textrm{#1}}"); //////////////////////////////////////////////////////////////////////
      // amsmath.sty
      // http://mirrors.concertpass.com/tex-archive/macros/latex/required/amsmath/amsmath.pdf
      // \def\overset#1#2{\binrel@{#2}\binrel@@{\mathop{\kern\z@#2}\limits^{#1}}}

      defineMacro("\\overset", "\\mathop{#2}\\limits^{#1}");
      defineMacro("\\underset", "\\mathop{#2}\\limits_{#1}"); // \newcommand{\boxed}[1]{\fbox{\m@th$\displaystyle#1$}}

      defineMacro("\\boxed", "\\fbox{\\displaystyle{#1}}"); // \def\iff{\DOTSB\;\Longleftrightarrow\;}
      // \def\implies{\DOTSB\;\Longrightarrow\;}
      // \def\impliedby{\DOTSB\;\Longleftarrow\;}

      defineMacro("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
      defineMacro("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
      defineMacro("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;"); // AMSMath's automatic \dots, based on \mdots@@ macro.

      var dotsByToken = {
        ',': '\\dotsc',
        '\\not': '\\dotsb',
        // \keybin@ checks for the following:
        '+': '\\dotsb',
        '=': '\\dotsb',
        '<': '\\dotsb',
        '>': '\\dotsb',
        '-': '\\dotsb',
        '*': '\\dotsb',
        ':': '\\dotsb',
        // Symbols whose definition starts with \DOTSB:
        '\\DOTSB': '\\dotsb',
        '\\coprod': '\\dotsb',
        '\\bigvee': '\\dotsb',
        '\\bigwedge': '\\dotsb',
        '\\biguplus': '\\dotsb',
        '\\bigcap': '\\dotsb',
        '\\bigcup': '\\dotsb',
        '\\prod': '\\dotsb',
        '\\sum': '\\dotsb',
        '\\bigotimes': '\\dotsb',
        '\\bigoplus': '\\dotsb',
        '\\bigodot': '\\dotsb',
        '\\bigsqcup': '\\dotsb',
        '\\implies': '\\dotsb',
        '\\impliedby': '\\dotsb',
        '\\And': '\\dotsb',
        '\\longrightarrow': '\\dotsb',
        '\\Longrightarrow': '\\dotsb',
        '\\longleftarrow': '\\dotsb',
        '\\Longleftarrow': '\\dotsb',
        '\\longleftrightarrow': '\\dotsb',
        '\\Longleftrightarrow': '\\dotsb',
        '\\mapsto': '\\dotsb',
        '\\longmapsto': '\\dotsb',
        '\\hookrightarrow': '\\dotsb',
        '\\iff': '\\dotsb',
        '\\doteq': '\\dotsb',
        // Symbols whose definition starts with \mathbin:
        '\\mathbin': '\\dotsb',
        '\\bmod': '\\dotsb',
        // Symbols whose definition starts with \mathrel:
        '\\mathrel': '\\dotsb',
        '\\relbar': '\\dotsb',
        '\\Relbar': '\\dotsb',
        '\\xrightarrow': '\\dotsb',
        '\\xleftarrow': '\\dotsb',
        // Symbols whose definition starts with \DOTSI:
        '\\DOTSI': '\\dotsi',
        '\\int': '\\dotsi',
        '\\oint': '\\dotsi',
        '\\iint': '\\dotsi',
        '\\iiint': '\\dotsi',
        '\\iiiint': '\\dotsi',
        '\\idotsint': '\\dotsi',
        // Symbols whose definition starts with \DOTSX:
        '\\DOTSX': '\\dotsx'
      };
      defineMacro("\\dots", function (context) {
        // TODO: If used in text mode, should expand to \textellipsis.
        // However, in KaTeX, \textellipsis and \ldots behave the same
        // (in text mode), and it's unlikely we'd see any of the math commands
        // that affect the behavior of \dots when in text mode.  So fine for now
        // (until we support \ifmmode ... \else ... \fi).
        var thedots = '\\dotso';
        var next = context.expandAfterFuture().text;

        if (next in dotsByToken) {
          thedots = dotsByToken[next];
        } else if (next.substr(0, 4) === '\\not') {
          thedots = '\\dotsb';
        } else if (next in _symbols2.default.math) {
          if (_utils2.default.contains(['bin', 'rel'], _symbols2.default.math[next].group)) {
            thedots = '\\dotsb';
          }
        }

        return thedots;
      });
      var spaceAfterDots = {
        // \rightdelim@ checks for the following:
        ')': true,
        ']': true,
        '\\rbrack': true,
        '\\}': true,
        '\\rbrace': true,
        '\\rangle': true,
        '\\rceil': true,
        '\\rfloor': true,
        '\\rgroup': true,
        '\\rmoustache': true,
        '\\right': true,
        '\\bigr': true,
        '\\biggr': true,
        '\\Bigr': true,
        '\\Biggr': true,
        // \extra@ also tests for the following:
        '$': true,
        // \extrap@ checks for the following:
        ';': true,
        '.': true,
        ',': true
      };
      defineMacro("\\dotso", function (context) {
        var next = context.future().text;

        if (next in spaceAfterDots) {
          return "\\ldots\\,";
        } else {
          return "\\ldots";
        }
      });
      defineMacro("\\dotsc", function (context) {
        var next = context.future().text; // \dotsc uses \extra@ but not \extrap@, instead specially checking for
        // ';' and '.', but doesn't check for ','.

        if (next in spaceAfterDots && next !== ',') {
          return "\\ldots\\,";
        } else {
          return "\\ldots";
        }
      });
      defineMacro("\\cdots", function (context) {
        var next = context.future().text;

        if (next in spaceAfterDots) {
          return "\\@cdots\\,";
        } else {
          return "\\@cdots";
        }
      });
      defineMacro("\\dotsb", "\\cdots");
      defineMacro("\\dotsm", "\\cdots");
      defineMacro("\\dotsi", "\\!\\cdots"); // amsmath doesn't actually define \dotsx, but \dots followed by a macro
      // starting with \DOTSX implies \dotso, and then \extra@ detects this case
      // and forces the added `\,`.

      defineMacro("\\dotsx", "\\ldots\\,"); // \let\DOTSI\relax
      // \let\DOTSB\relax
      // \let\DOTSX\relax

      defineMacro("\\DOTSI", "\\relax");
      defineMacro("\\DOTSB", "\\relax");
      defineMacro("\\DOTSX", "\\relax"); // http://texdoc.net/texmf-dist/doc/latex/amsmath/amsmath.pdf

      defineMacro("\\thinspace", "\\,"); //   \let\thinspace\,

      defineMacro("\\medspace", "\\:"); //   \let\medspace\:

      defineMacro("\\thickspace", "\\;"); //   \let\thickspace\;
      //////////////////////////////////////////////////////////////////////
      // LaTeX source2e
      // \DeclareRobustCommand\hspace{\@ifstar\@hspacer\@hspace}
      // \def\@hspace#1{\hskip  #1\relax}
      // KaTeX doesn't do line breaks, so \hspace is the same as \kern

      defineMacro("\\hspace", "\\kern{#1}"); //////////////////////////////////////////////////////////////////////
      // mathtools.sty
      //\providecommand\ordinarycolon{:}

      defineMacro("\\ordinarycolon", ":"); //\def\vcentcolon{\mathrel{\mathop\ordinarycolon}}
      //TODO(edemaine): Not yet centered. Fix via \raisebox or #726

      defineMacro("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"); // \providecommand*\dblcolon{\vcentcolon\mathrel{\mkern-.9mu}\vcentcolon}

      defineMacro("\\dblcolon", "\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon"); // \providecommand*\coloneqq{\vcentcolon\mathrel{\mkern-1.2mu}=}

      defineMacro("\\coloneqq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}="); // \providecommand*\Coloneqq{\dblcolon\mathrel{\mkern-1.2mu}=}

      defineMacro("\\Coloneqq", "\\dblcolon\\mathrel{\\mkern-1.2mu}="); // \providecommand*\coloneq{\vcentcolon\mathrel{\mkern-1.2mu}\mathrel{-}}

      defineMacro("\\coloneq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}"); // \providecommand*\Coloneq{\dblcolon\mathrel{\mkern-1.2mu}\mathrel{-}}

      defineMacro("\\Coloneq", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}"); // \providecommand*\eqqcolon{=\mathrel{\mkern-1.2mu}\vcentcolon}

      defineMacro("\\eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\vcentcolon"); // \providecommand*\Eqqcolon{=\mathrel{\mkern-1.2mu}\dblcolon}

      defineMacro("\\Eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\dblcolon"); // \providecommand*\eqcolon{\mathrel{-}\mathrel{\mkern-1.2mu}\vcentcolon}

      defineMacro("\\eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon"); // \providecommand*\Eqcolon{\mathrel{-}\mathrel{\mkern-1.2mu}\dblcolon}

      defineMacro("\\Eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon"); // \providecommand*\colonapprox{\vcentcolon\mathrel{\mkern-1.2mu}\approx}

      defineMacro("\\colonapprox", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx"); // \providecommand*\Colonapprox{\dblcolon\mathrel{\mkern-1.2mu}\approx}

      defineMacro("\\Colonapprox", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx"); // \providecommand*\colonsim{\vcentcolon\mathrel{\mkern-1.2mu}\sim}

      defineMacro("\\colonsim", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim"); // \providecommand*\Colonsim{\dblcolon\mathrel{\mkern-1.2mu}\sim}

      defineMacro("\\Colonsim", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim"); //////////////////////////////////////////////////////////////////////
      // colonequals.sty
      // Alternate names for mathtools's macros:

      defineMacro("\\ratio", "\\vcentcolon");
      defineMacro("\\coloncolon", "\\dblcolon");
      defineMacro("\\colonequals", "\\coloneqq");
      defineMacro("\\coloncolonequals", "\\Coloneqq");
      defineMacro("\\equalscolon", "\\eqqcolon");
      defineMacro("\\equalscoloncolon", "\\Eqqcolon");
      defineMacro("\\colonminus", "\\coloneq");
      defineMacro("\\coloncolonminus", "\\Coloneq");
      defineMacro("\\minuscolon", "\\eqcolon");
      defineMacro("\\minuscoloncolon", "\\Eqcolon"); // \colonapprox name is same in mathtools and colonequals.

      defineMacro("\\coloncolonapprox", "\\Colonapprox"); // \colonsim name is same in mathtools and colonequals.

      defineMacro("\\coloncolonsim", "\\Colonsim"); // Additional macros, implemented by analogy with mathtools definitions:

      defineMacro("\\simcolon", "\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon");
      defineMacro("\\simcoloncolon", "\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon");
      defineMacro("\\approxcolon", "\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon");
      defineMacro("\\approxcoloncolon", "\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon");
    }, {
      "./Token": 90,
      "./symbols": 112,
      "./utils": 115
    }],
    108: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

      var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

      var _createClass2 = require("babel-runtime/helpers/createClass");

      var _createClass3 = _interopRequireDefault(_createClass2);

      var _utils = require("./utils");

      var _utils2 = _interopRequireDefault(_utils);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * This node represents a general purpose MathML node of any type. The
       * constructor requires the type of node to create (for example, `"mo"` or
       * `"mspace"`, corresponding to `<mo>` and `<mspace>` tags).
       */


      var MathNode = function () {
        function MathNode(type, children) {
          (0, _classCallCheck3.default)(this, MathNode);
          this.type = type;
          this.attributes = {};
          this.children = children || [];
        }
        /**
         * Sets an attribute on a MathML node. MathML depends on attributes to convey a
         * semantic content, so this is used heavily.
         */


        (0, _createClass3.default)(MathNode, [{
          key: "setAttribute",
          value: function setAttribute(name, value) {
            this.attributes[name] = value;
          }
          /**
           * Converts the math node into a MathML-namespaced DOM element.
           */

        }, {
          key: "toNode",
          value: function toNode() {
            var node = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);

            for (var attr in this.attributes) {
              if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                node.setAttribute(attr, this.attributes[attr]);
              }
            }

            for (var i = 0; i < this.children.length; i++) {
              node.appendChild(this.children[i].toNode());
            }

            return node;
          }
          /**
           * Converts the math node into an HTML markup string.
           */

        }, {
          key: "toMarkup",
          value: function toMarkup() {
            var markup = "<" + this.type; // Add the attributes

            for (var attr in this.attributes) {
              if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                markup += " " + attr + "=\"";
                markup += _utils2.default.escape(this.attributes[attr]);
                markup += "\"";
              }
            }

            markup += ">";

            for (var i = 0; i < this.children.length; i++) {
              markup += this.children[i].toMarkup();
            }

            markup += "</" + this.type + ">";
            return markup;
          }
        }]);
        return MathNode;
      }();
      /**
       * This node represents a piece of text.
       */

      /**
       * These objects store data about MathML nodes. This is the MathML equivalent
       * of the types in domTree.js. Since MathML handles its own rendering, and
       * since we're mainly using MathML to improve accessibility, we don't manage
       * any of the styling state that the plain DOM nodes do.
       *
       * The `toNode` and `toMarkup` functions work simlarly to how they do in
       * domTree.js, creating namespaced DOM nodes and HTML text markup respectively.
       */


      var TextNode = function () {
        function TextNode(text) {
          (0, _classCallCheck3.default)(this, TextNode);
          this.text = text;
        }
        /**
         * Converts the text node into a DOM text node.
         */


        (0, _createClass3.default)(TextNode, [{
          key: "toNode",
          value: function toNode() {
            return document.createTextNode(this.text);
          }
          /**
           * Converts the text node into HTML markup (which is just the text itself).
           */

        }, {
          key: "toMarkup",
          value: function toMarkup() {
            return _utils2.default.escape(this.text);
          }
        }]);
        return TextNode;
      }();

      exports.default = {
        MathNode: MathNode,
        TextNode: TextNode
      };
    }, {
      "./utils": 115,
      "babel-runtime/helpers/classCallCheck": 8,
      "babel-runtime/helpers/createClass": 9
    }],
    109: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Parser = require('./Parser');

      var _Parser2 = _interopRequireDefault(_Parser);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * Parses an expression using a Parser, then returns the parsed result.
       */


      var parseTree = function parseTree(toParse, settings) {
        if (!(typeof toParse === 'string' || toParse instanceof String)) {
          throw new TypeError('KaTeX can only parse string typed expression');
        }

        var parser = new _Parser2.default(toParse, settings);
        return parser.parse();
      };
      /**
       * Provides a single function for parsing an expression using a Parser
       * TODO(emily): Remove this
       */


      exports.default = parseTree;
    }, {
      "./Parser": 86
    }],
    110: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

      var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

      var _domTree = require("./domTree");

      var _domTree2 = _interopRequireDefault(_domTree);

      var _buildCommon = require("./buildCommon");

      var _buildCommon2 = _interopRequireDefault(_buildCommon);

      var _mathMLTree = require("./mathMLTree");

      var _mathMLTree2 = _interopRequireDefault(_mathMLTree);

      var _utils = require("./utils");

      var _utils2 = _interopRequireDefault(_utils);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * This file provides support to buildMathML.js and buildHTML.js
       * for stretchy wide elements rendered from SVG files
       * and other CSS trickery.
       */


      var stretchyCodePoint = {
        widehat: "^",
        widetilde: "~",
        undertilde: "~",
        overleftarrow: "\u2190",
        underleftarrow: "\u2190",
        xleftarrow: "\u2190",
        overrightarrow: "\u2192",
        underrightarrow: "\u2192",
        xrightarrow: "\u2192",
        underbrace: "\u23B5",
        overbrace: "\u23DE",
        overleftrightarrow: "\u2194",
        underleftrightarrow: "\u2194",
        xleftrightarrow: "\u2194",
        Overrightarrow: "\u21D2",
        xRightarrow: "\u21D2",
        overleftharpoon: "\u21BC",
        xleftharpoonup: "\u21BC",
        overrightharpoon: "\u21C0",
        xrightharpoonup: "\u21C0",
        xLeftarrow: "\u21D0",
        xLeftrightarrow: "\u21D4",
        xhookleftarrow: "\u21A9",
        xhookrightarrow: "\u21AA",
        xmapsto: "\u21A6",
        xrightharpoondown: "\u21C1",
        xleftharpoondown: "\u21BD",
        xrightleftharpoons: "\u21CC",
        xleftrightharpoons: "\u21CB",
        xtwoheadleftarrow: "\u219E",
        xtwoheadrightarrow: "\u21A0",
        xLongequal: "=",
        xtofrom: "\u21C4"
      };

      var mathMLnode = function mathMLnode(label) {
        var node = new _mathMLTree2.default.MathNode("mo", [new _mathMLTree2.default.TextNode(stretchyCodePoint[label.substr(1)])]);
        node.setAttribute("stretchy", "true");
        return node;
      }; // Many of the KaTeX SVG images have been adapted from glyphs in KaTeX fonts.
      // Copyright (c) 2009-2010, Design Science, Inc. (<www.mathjax.org>)
      // Copyright (c) 2014-2017 Khan Academy (<www.khanacademy.org>)
      // Licensed under the SIL Open Font License, Version 1.1.
      // See \nhttp://scripts.sil.org/OFL
      // Nested SVGs
      //    Many of the KaTeX SVG images contain a nested SVG. This is done to
      //    achieve a stretchy image while avoiding distortion of arrowheads or
      //    brace corners.
      //    The inner SVG typically contains a very long (400 em) arrow.
      //    The outer SVG acts like a window that exposes only part of the inner SVG.
      //    The outer SVG will grow or shrink to match the dimensions set by CSS.
      //    The inner SVG always has a longer, thinner aspect ratio than the outer
      //    SVG. After the inner SVG fills 100% of the height of the outer SVG,
      //    there is a long arrow shaft left over. That left-over shaft is not shown.
      //    Instead, it is sliced off because the inner SVG is set to
      //    "preserveAspectRatio='... slice'".
      //    Thus, the reader sees an arrow that matches the subject matter width
      //    without distortion.
      //    Some functions, such as \cancel, need to vary their aspect ratio. These
      //    functions do not get the nested SVG treatment.
      // Second Brush Stroke
      //    Low resolution monitors struggle to display images in fine detail.
      //    So browsers apply anti-aliasing. A long straight arrow shaft therefore
      //    will sometimes appear as if it has a blurred edge.
      //    To mitigate this, these SVG files contain a second "brush-stroke" on the
      //    arrow shafts. That is, a second long thin rectangular SVG path has been
      //    written directly on top of each arrow shaft. This reinforcement causes
      //    some of the screen pixels to display as black instead of the anti-aliased
      //    gray pixel that a  single path would generate. So we get arrow shafts
      //    whose edges appear to be sharper.
      // In the katexImagesData object just below, the dimensions all
      // correspond to path geometry inside the relevant SVG.
      // For example, \overrightarrow uses the same arrowhead as glyph U+2192
      // from the KaTeX Main font. The scaling factor is 1000.
      // That is, inside the font, that arrowhead is 522 units tall, which
      // corresponds to 0.522 em inside the document.


      var katexImagesData = {
        //   path(s), minWidth, height, align
        overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
        overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
        underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
        underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
        xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
        xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
        Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
        xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
        xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
        overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
        xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
        xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
        overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
        xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
        xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
        xLongequal: [["longequal"], 0.888, 334, "xMinYMin"],
        xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
        xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
        overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
        overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
        underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
        underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
        xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
        xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
        xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
        xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
        xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
        xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
        overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
        underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
        overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
        undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
        xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
        xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528]
      };

      var groupLength = function groupLength(arg) {
        if (arg.type === "ordgroup") {
          return arg.value.length;
        } else {
          return 1;
        }
      };

      var svgSpan = function svgSpan(group, options) {
        // Create a span with inline SVG for the element.
        var label = group.value.label.substr(1);
        var attributes = [];
        var height = void 0;
        var viewBoxWidth = 400000; // default

        var minWidth = 0;
        var path = void 0;
        var pathName = void 0;
        var svgNode = void 0;
        var classNames = [];

        if (_utils2.default.contains(["widehat", "widetilde", "undertilde"], label)) {
          // There are four SVG images available for each function.
          // Choose a taller image when there are more characters.
          var numChars = groupLength(group.value.base);
          var viewBoxHeight = void 0;

          if (numChars > 5) {
            viewBoxHeight = label === "widehat" ? 420 : 312;
            viewBoxWidth = label === "widehat" ? 2364 : 2340; // Next get the span height, in 1000 ems

            height = label === "widehat" ? 0.42 : 0.34;
            pathName = (label === "widehat" ? "widehat" : "tilde") + "4";
          } else {
            var imgIndex = [1, 1, 2, 2, 3, 3][numChars];

            if (label === "widehat") {
              viewBoxWidth = [0, 1062, 2364, 2364, 2364][imgIndex];
              viewBoxHeight = [0, 239, 300, 360, 420][imgIndex];
              height = [0, 0.24, 0.3, 0.3, 0.36, 0.42][imgIndex];
              pathName = "widehat" + imgIndex;
            } else {
              viewBoxWidth = [0, 600, 1033, 2339, 2340][imgIndex];
              viewBoxHeight = [0, 260, 286, 306, 312][imgIndex];
              height = [0, 0.26, 0.286, 0.3, 0.306, 0.34][imgIndex];
              pathName = "tilde" + imgIndex;
            }
          }

          path = new _domTree2.default.pathNode(pathName);
          attributes.push(["width", "100%"]);
          attributes.push(["height", height + "em"]);
          attributes.push(["viewBox", "0 0 " + viewBoxWidth + " " + viewBoxHeight]);
          attributes.push(["preserveAspectRatio", "none"]);
          svgNode = new _domTree2.default.svgNode([path], attributes);
        } else {
          var width = void 0;
          var align = void 0;

          var _katexImagesData$labe = (0, _slicedToArray3.default)(katexImagesData[label], 4),
              paths = _katexImagesData$labe[0],
              gWidth = _katexImagesData$labe[1],
              vbHeight = _katexImagesData$labe[2],
              alignOne = _katexImagesData$labe[3];

          var numSvgChildren = paths.length;
          var innerSVGs = [];
          height = vbHeight / 1000;
          minWidth = gWidth;

          for (var i = 0; i < numSvgChildren; i++) {
            path = new _domTree2.default.pathNode(paths[i]);
            attributes = [];

            if (numSvgChildren === 1) {
              width = "400em";
              align = alignOne;
            } else if (numSvgChildren === 2) {
              // small overlap to prevent a 1 pixel gap.
              if (i > 0) {
                attributes.push(["x", "50%"]);
              }

              width = ["50.1%", "50%"][i];
              align = ["xMinYMin", "xMaxYMin"][i];
            } else {
              // 3 inner SVGs, as in a brace
              if (i > 0) {
                attributes.push(["x", [null, "25%", "74.9%"][i]]);
              }

              width = ["25.5%", "50%", "25.1%"][i];
              align = ["xMinYMin", "xMidYMin", "xMaxYMin"][i];
            }

            attributes.push(["width", width]);
            attributes.push(["height", height + "em"]);
            attributes.push(["viewBox", "0 0 " + viewBoxWidth + " " + vbHeight]);
            attributes.push(["preserveAspectRatio", align + " slice"]);

            if (numSvgChildren > 1) {
              innerSVGs.push(new _domTree2.default.svgNode([path], attributes));
            } else {
              // The single svgChild is a child of a hide-tail span, not the
              // child of another svg.
              svgNode = new _domTree2.default.svgNode([path], attributes);
              classNames.push("hide-tail");
            }
          }

          if (numSvgChildren > 1) {
            attributes = [["width", "100%"], ["height", height + "em"]];
            svgNode = new _domTree2.default.svgNode(innerSVGs, attributes);
          }
        }

        var span = _buildCommon2.default.makeSpan(classNames, [svgNode], options); // Note that we are returning span.depth = 0.
        // Any adjustments relative to the baseline must be done in buildHTML.


        span.height = height;
        span.style.height = height + "em";

        if (minWidth > 0) {
          span.style.minWidth = minWidth + "em";
        }

        return span;
      };

      var encloseSpan = function encloseSpan(inner, label, pad, options) {
        // Return an image span for \cancel, \bcancel, \xcancel, or \fbox
        var img = void 0;
        var totalHeight = inner.height + inner.depth + 2 * pad;

        if (/(fbox)|(color)/.test(label)) {
          img = _buildCommon2.default.makeSpan(["stretchy", label], [], options);

          if (label === "fbox" && options.color) {
            img.style.borderColor = options.getColor();
          }
        } else {
          // \cancel, \bcancel, or \xcancel
          // Since \cancel's SVG is inline and it omits the viewBox attribute,
          // its stroke-width will not vary with span area.
          var attributes = [["x1", "0"]];
          var lines = [];

          if (label !== "cancel") {
            attributes.push(["y1", "0"]);
            attributes.push(["x2", "100%"]);
            attributes.push(["y2", "100%"]);
            attributes.push(["stroke-width", "0.046em"]);
            lines.push(new _domTree2.default.lineNode(attributes));
          }

          if (label === "xcancel") {
            attributes = [["x1", "0"]]; // start a second line.
          }

          if (label !== "bcancel") {
            attributes.push(["y1", "100%"]);
            attributes.push(["x2", "100%"]);
            attributes.push(["y2", "0"]);
            attributes.push(["stroke-width", "0.046em"]);
            lines.push(new _domTree2.default.lineNode(attributes));
          }

          attributes = [["width", "100%"], ["height", totalHeight + "em"]];
          var svgNode = new _domTree2.default.svgNode(lines, attributes);
          img = _buildCommon2.default.makeSpan([], [svgNode], options);
        }

        img.height = totalHeight;
        img.style.height = totalHeight + "em";
        return img;
      };

      exports.default = {
        encloseSpan: encloseSpan,
        mathMLnode: mathMLnode,
        svgSpan: svgSpan
      };
    }, {
      "./buildCommon": 91,
      "./domTree": 98,
      "./mathMLTree": 108,
      "./utils": 115,
      "babel-runtime/helpers/slicedToArray": 10
    }],
    111: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       * This file provides support to domTree.js
       * It's a storehouse of path geometry for SVG images.
       */

      var path = {
        // sqrtMain path geometry is from glyph U221A in the font KaTeX Main
        sqrtMain: "M95 622c-2.667 0-7.167-2.667-13.5\n-8S72 604 72 600c0-2 .333-3.333 1-4 1.333-2.667 23.833-20.667 67.5-54s\n65.833-50.333 66.5-51c1.333-1.333 3-2 5-2 4.667 0 8.667 3.333 12 10l173\n378c.667 0 35.333-71 104-213s137.5-285 206.5-429S812 17.333 812 14c5.333\n-9.333 12-14 20-14h399166v40H845.272L620 507 385 993c-2.667 4.667-9 7-19\n7-6 0-10-1-12-3L160 575l-65 47zM834 0h399166v40H845z",
        // size1 is from glyph U221A in the font KaTeX_Size1-Regular
        sqrtSize1: "M263 601c.667 0 18 39.667 52 119s68.167\n 158.667 102.5 238 51.833 119.333 52.5 120C810 373.333 980.667 17.667 982 11\nc4.667-7.333 11-11 19-11h398999v40H1012.333L741 607c-38.667 80.667-84 175-136\n 283s-89.167 185.333-111.5 232-33.833 70.333-34.5 71c-4.667 4.667-12.333 7-23\n 7l-12-1-109-253c-72.667-168-109.333-252-110-252-10.667 8-22 16.667-34 26-22\n 17.333-33.333 26-34 26l-26-26 76-59 76-60zM1001 0h398999v40H1012z",
        // size2 is from glyph U221A in the font KaTeX_Size2-Regular
        sqrtSize2: "M1001 0h398999v40H1013.084S929.667 308 749\n 880s-277 876.333-289 913c-4.667 4.667-12.667 7-24 7h-12c-1.333-3.333-3.667\n-11.667-7-25-35.333-125.333-106.667-373.333-214-744-10 12-21 25-33 39l-32 39\nc-6-5.333-15-14-27-26l25-30c26.667-32.667 52-63 76-91l52-60 208 722c56-175.333\n 126.333-397.333 211-666s153.833-488.167 207.5-658.5C944.167 129.167 975 32.667\n 983 10c4-6.667 10-10 18-10zm0 0h398999v40H1013z",
        // size3 is from glyph U221A in the font KaTeX_Size3-Regular
        sqrtSize3: "M424 2398c-1.333-.667-38.5-172-111.5-514 S202.667 1370.667 202\n 1370c0-2-10.667 14.333-32 49-4.667 7.333-9.833 15.667-15.5 25s-9.833 16-12.5\n 20l-5 7c-4-3.333-8.333-7.667-13-13l-13-13 76-122 77-121 209 968c0-2 84.667\n-361.667 254-1079C896.333 373.667 981.667 13.333 983 10c4-6.667 10-10 18-10\nh398999v40H1014.622S927.332 418.667 742 1206c-185.333 787.333-279.333 1182.333\n-282 1185-2 6-10 9-24 9-8 0-12-.667-12-2zM1001 0h398999v40H1014z",
        // size4 is from glyph U221A in the font KaTeX_Size4-Regular
        sqrtSize4: "M473 2713C812.333 913.667 982.333 13 983 11c3.333-7.333 9.333\n-11 18-11h399110v40H1017.698S927.168 518 741.5 1506C555.833 2494 462 2989 460\n 2991c-2 6-10 9-24 9-8 0-12-.667-12-2s-5.333-32-16-92c-50.667-293.333-119.667\n-693.333-207-1200 0-1.333-5.333 8.667-16 30l-32 64-16 33-26-26 76-153 77-151\nc.667.667 35.667 202 105 604 67.333 400.667 102 602.667 104 606z\nM1001 0h398999v40H1017z",
        // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
        doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
        // doublerightarrow is from glyph U+21D2 in font KaTeX Main
        doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
        // leftarrow is from glyph U+2190 in font KaTeX Main
        leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
        // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
        leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
        leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
        // overgroup is from the MnSymbol package (public domain)
        leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
        leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
        // Harpoons are from glyph U+21BD in font KaTeX Main
        leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
        leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
        leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
        leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
        // hook is from glyph U+21A9 in font KaTeX Main
        lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
        leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
        leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
        // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
        leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
        longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
        midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
        midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
        rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
        rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
        rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
        rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
        rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
        rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
        rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
        rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
        rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
        righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
        rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
        rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
        // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
        twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
        twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
        // tilde1 is a modified version of a glyph from the MnSymbol package
        tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
        // ditto tilde2, tilde3, & tilde4
        tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
        tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
        tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
        // widehat1 is a modified version of a glyph from the MnSymbol package
        widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
        // ditto widehat2, widehat3, & widehat4
        widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
        widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
        widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z"
      };
      exports.default = {
        path: path
      };
    }, {}],
    112: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       * This file holds a list of all no-argument functions and single-character
       * symbols (like 'a' or ';').
       *
       * For each of the symbols, there are three properties they can have:
       * - font (required): the font to be used for this symbol. Either "main" (the
           normal font), or "ams" (the ams fonts).
       * - group (required): the ParseNode group type the symbol should have (i.e.
           "textord", "mathord", etc).
           See https://github.com/Khan/KaTeX/wiki/Examining-TeX#group-types
       * - replace: the character that this symbol or function should be
       *   replaced with (i.e. "\phi" has a replace value of "\u03d5", the phi
       *   character in the main font).
       *
       * The outermost map in the table indicates what mode the symbols should be
       * accepted in (e.g. "math" or "text").
       */

      var symbols = {
        "math": {},
        "text": {}
      };
      exports.default = symbols;
      /** `acceptUnicodeChar = true` is only applicable if `replace` is set. */

      function defineSymbol(mode, font, group, replace, name, acceptUnicodeChar) {
        symbols[mode][name] = {
          font: font,
          group: group,
          replace: replace
        };

        if (acceptUnicodeChar && replace) {
          symbols[mode][replace] = symbols[mode][name];
        }
      } // Some abbreviations for commonly used strings.
      // This helps minify the code, and also spotting typos using jshint.
      // modes:


      var math = "math";
      var text = "text"; // fonts:

      var main = "main";
      var ams = "ams"; // groups:

      var accent = "accent";
      var bin = "bin";
      var close = "close";
      var inner = "inner";
      var mathord = "mathord";
      var op = "op";
      var open = "open";
      var punct = "punct";
      var rel = "rel";
      var spacing = "spacing";
      var textord = "textord"; // Now comes the symbol table
      // Relation Symbols

      defineSymbol(math, main, rel, "\u2261", "\\equiv");
      defineSymbol(math, main, rel, "\u227A", "\\prec");
      defineSymbol(math, main, rel, "\u227B", "\\succ");
      defineSymbol(math, main, rel, "\u223C", "\\sim");
      defineSymbol(math, main, rel, "\u22A5", "\\perp");
      defineSymbol(math, main, rel, "\u2AAF", "\\preceq");
      defineSymbol(math, main, rel, "\u2AB0", "\\succeq");
      defineSymbol(math, main, rel, "\u2243", "\\simeq");
      defineSymbol(math, main, rel, "\u2223", "\\mid");
      defineSymbol(math, main, rel, "\u226A", "\\ll");
      defineSymbol(math, main, rel, "\u226B", "\\gg");
      defineSymbol(math, main, rel, "\u224D", "\\asymp");
      defineSymbol(math, main, rel, "\u2225", "\\parallel");
      defineSymbol(math, main, rel, "\u22C8", "\\bowtie");
      defineSymbol(math, main, rel, "\u2323", "\\smile");
      defineSymbol(math, main, rel, "\u2291", "\\sqsubseteq");
      defineSymbol(math, main, rel, "\u2292", "\\sqsupseteq");
      defineSymbol(math, main, rel, "\u2250", "\\doteq");
      defineSymbol(math, main, rel, "\u2322", "\\frown");
      defineSymbol(math, main, rel, "\u220B", "\\ni");
      defineSymbol(math, main, rel, "\u221D", "\\propto");
      defineSymbol(math, main, rel, "\u22A2", "\\vdash");
      defineSymbol(math, main, rel, "\u22A3", "\\dashv");
      defineSymbol(math, main, rel, "\u220B", "\\owns"); // Punctuation

      defineSymbol(math, main, punct, ".", "\\ldotp");
      defineSymbol(math, main, punct, "\u22C5", "\\cdotp"); // Misc Symbols

      defineSymbol(math, main, textord, "#", "\\#");
      defineSymbol(text, main, textord, "#", "\\#");
      defineSymbol(math, main, textord, "&", "\\&");
      defineSymbol(text, main, textord, "&", "\\&");
      defineSymbol(math, main, textord, "\u2135", "\\aleph");
      defineSymbol(math, main, textord, "\u2200", "\\forall");
      defineSymbol(math, main, textord, "\u210F", "\\hbar");
      defineSymbol(math, main, textord, "\u2203", "\\exists");
      defineSymbol(math, main, textord, "\u2207", "\\nabla");
      defineSymbol(math, main, textord, "\u266D", "\\flat");
      defineSymbol(math, main, textord, "\u2113", "\\ell");
      defineSymbol(math, main, textord, "\u266E", "\\natural");
      defineSymbol(math, main, textord, "\u2663", "\\clubsuit");
      defineSymbol(math, main, textord, "\u2118", "\\wp");
      defineSymbol(math, main, textord, "\u266F", "\\sharp");
      defineSymbol(math, main, textord, "\u2662", "\\diamondsuit");
      defineSymbol(math, main, textord, "\u211C", "\\Re");
      defineSymbol(math, main, textord, "\u2661", "\\heartsuit");
      defineSymbol(math, main, textord, "\u2111", "\\Im");
      defineSymbol(math, main, textord, "\u2660", "\\spadesuit"); // Math and Text

      defineSymbol(math, main, textord, "\u2020", "\\dag");
      defineSymbol(text, main, textord, "\u2020", "\\dag");
      defineSymbol(text, main, textord, "\u2020", "\\textdagger");
      defineSymbol(math, main, textord, "\u2021", "\\ddag");
      defineSymbol(text, main, textord, "\u2021", "\\ddag");
      defineSymbol(text, main, textord, "\u2020", "\\textdaggerdbl"); // Large Delimiters

      defineSymbol(math, main, close, "\u23B1", "\\rmoustache");
      defineSymbol(math, main, open, "\u23B0", "\\lmoustache");
      defineSymbol(math, main, close, "\u27EF", "\\rgroup");
      defineSymbol(math, main, open, "\u27EE", "\\lgroup"); // Binary Operators

      defineSymbol(math, main, bin, "\u2213", "\\mp");
      defineSymbol(math, main, bin, "\u2296", "\\ominus");
      defineSymbol(math, main, bin, "\u228E", "\\uplus");
      defineSymbol(math, main, bin, "\u2293", "\\sqcap");
      defineSymbol(math, main, bin, "\u2217", "\\ast");
      defineSymbol(math, main, bin, "\u2294", "\\sqcup");
      defineSymbol(math, main, bin, "\u25EF", "\\bigcirc");
      defineSymbol(math, main, bin, "\u2219", "\\bullet");
      defineSymbol(math, main, bin, "\u2021", "\\ddagger");
      defineSymbol(math, main, bin, "\u2240", "\\wr");
      defineSymbol(math, main, bin, "\u2A3F", "\\amalg");
      defineSymbol(math, main, bin, "&", "\\And"); // from amsmath
      // Arrow Symbols

      defineSymbol(math, main, rel, "\u27F5", "\\longleftarrow");
      defineSymbol(math, main, rel, "\u21D0", "\\Leftarrow");
      defineSymbol(math, main, rel, "\u27F8", "\\Longleftarrow");
      defineSymbol(math, main, rel, "\u27F6", "\\longrightarrow");
      defineSymbol(math, main, rel, "\u21D2", "\\Rightarrow");
      defineSymbol(math, main, rel, "\u27F9", "\\Longrightarrow");
      defineSymbol(math, main, rel, "\u2194", "\\leftrightarrow");
      defineSymbol(math, main, rel, "\u27F7", "\\longleftrightarrow");
      defineSymbol(math, main, rel, "\u21D4", "\\Leftrightarrow");
      defineSymbol(math, main, rel, "\u27FA", "\\Longleftrightarrow");
      defineSymbol(math, main, rel, "\u21A6", "\\mapsto");
      defineSymbol(math, main, rel, "\u27FC", "\\longmapsto");
      defineSymbol(math, main, rel, "\u2197", "\\nearrow");
      defineSymbol(math, main, rel, "\u21A9", "\\hookleftarrow");
      defineSymbol(math, main, rel, "\u21AA", "\\hookrightarrow");
      defineSymbol(math, main, rel, "\u2198", "\\searrow");
      defineSymbol(math, main, rel, "\u21BC", "\\leftharpoonup");
      defineSymbol(math, main, rel, "\u21C0", "\\rightharpoonup");
      defineSymbol(math, main, rel, "\u2199", "\\swarrow");
      defineSymbol(math, main, rel, "\u21BD", "\\leftharpoondown");
      defineSymbol(math, main, rel, "\u21C1", "\\rightharpoondown");
      defineSymbol(math, main, rel, "\u2196", "\\nwarrow");
      defineSymbol(math, main, rel, "\u21CC", "\\rightleftharpoons"); // AMS Negated Binary Relations

      defineSymbol(math, ams, rel, "\u226E", "\\nless");
      defineSymbol(math, ams, rel, "\uE010", "\\nleqslant");
      defineSymbol(math, ams, rel, "\uE011", "\\nleqq");
      defineSymbol(math, ams, rel, "\u2A87", "\\lneq");
      defineSymbol(math, ams, rel, "\u2268", "\\lneqq");
      defineSymbol(math, ams, rel, "\uE00C", "\\lvertneqq");
      defineSymbol(math, ams, rel, "\u22E6", "\\lnsim");
      defineSymbol(math, ams, rel, "\u2A89", "\\lnapprox");
      defineSymbol(math, ams, rel, "\u2280", "\\nprec");
      defineSymbol(math, ams, rel, "\u22E0", "\\npreceq");
      defineSymbol(math, ams, rel, "\u22E8", "\\precnsim");
      defineSymbol(math, ams, rel, "\u2AB9", "\\precnapprox");
      defineSymbol(math, ams, rel, "\u2241", "\\nsim");
      defineSymbol(math, ams, rel, "\uE006", "\\nshortmid");
      defineSymbol(math, ams, rel, "\u2224", "\\nmid");
      defineSymbol(math, ams, rel, "\u22AC", "\\nvdash");
      defineSymbol(math, ams, rel, "\u22AD", "\\nvDash");
      defineSymbol(math, ams, rel, "\u22EA", "\\ntriangleleft");
      defineSymbol(math, ams, rel, "\u22EC", "\\ntrianglelefteq");
      defineSymbol(math, ams, rel, "\u228A", "\\subsetneq");
      defineSymbol(math, ams, rel, "\uE01A", "\\varsubsetneq");
      defineSymbol(math, ams, rel, "\u2ACB", "\\subsetneqq");
      defineSymbol(math, ams, rel, "\uE017", "\\varsubsetneqq");
      defineSymbol(math, ams, rel, "\u226F", "\\ngtr");
      defineSymbol(math, ams, rel, "\uE00F", "\\ngeqslant");
      defineSymbol(math, ams, rel, "\uE00E", "\\ngeqq");
      defineSymbol(math, ams, rel, "\u2A88", "\\gneq");
      defineSymbol(math, ams, rel, "\u2269", "\\gneqq");
      defineSymbol(math, ams, rel, "\uE00D", "\\gvertneqq");
      defineSymbol(math, ams, rel, "\u22E7", "\\gnsim");
      defineSymbol(math, ams, rel, "\u2A8A", "\\gnapprox");
      defineSymbol(math, ams, rel, "\u2281", "\\nsucc");
      defineSymbol(math, ams, rel, "\u22E1", "\\nsucceq");
      defineSymbol(math, ams, rel, "\u22E9", "\\succnsim");
      defineSymbol(math, ams, rel, "\u2ABA", "\\succnapprox");
      defineSymbol(math, ams, rel, "\u2246", "\\ncong");
      defineSymbol(math, ams, rel, "\uE007", "\\nshortparallel");
      defineSymbol(math, ams, rel, "\u2226", "\\nparallel");
      defineSymbol(math, ams, rel, "\u22AF", "\\nVDash");
      defineSymbol(math, ams, rel, "\u22EB", "\\ntriangleright");
      defineSymbol(math, ams, rel, "\u22ED", "\\ntrianglerighteq");
      defineSymbol(math, ams, rel, "\uE018", "\\nsupseteqq");
      defineSymbol(math, ams, rel, "\u228B", "\\supsetneq");
      defineSymbol(math, ams, rel, "\uE01B", "\\varsupsetneq");
      defineSymbol(math, ams, rel, "\u2ACC", "\\supsetneqq");
      defineSymbol(math, ams, rel, "\uE019", "\\varsupsetneqq");
      defineSymbol(math, ams, rel, "\u22AE", "\\nVdash");
      defineSymbol(math, ams, rel, "\u2AB5", "\\precneqq");
      defineSymbol(math, ams, rel, "\u2AB6", "\\succneqq");
      defineSymbol(math, ams, rel, "\uE016", "\\nsubseteqq");
      defineSymbol(math, ams, bin, "\u22B4", "\\unlhd");
      defineSymbol(math, ams, bin, "\u22B5", "\\unrhd"); // AMS Negated Arrows

      defineSymbol(math, ams, rel, "\u219A", "\\nleftarrow");
      defineSymbol(math, ams, rel, "\u219B", "\\nrightarrow");
      defineSymbol(math, ams, rel, "\u21CD", "\\nLeftarrow");
      defineSymbol(math, ams, rel, "\u21CF", "\\nRightarrow");
      defineSymbol(math, ams, rel, "\u21AE", "\\nleftrightarrow");
      defineSymbol(math, ams, rel, "\u21CE", "\\nLeftrightarrow"); // AMS Misc

      defineSymbol(math, ams, rel, "\u25B3", "\\vartriangle");
      defineSymbol(math, ams, textord, "\u210F", "\\hslash");
      defineSymbol(math, ams, textord, "\u25BD", "\\triangledown");
      defineSymbol(math, ams, textord, "\u25CA", "\\lozenge");
      defineSymbol(math, ams, textord, "\u24C8", "\\circledS");
      defineSymbol(math, ams, textord, "\xAE", "\\circledR");
      defineSymbol(text, ams, textord, "\xAE", "\\circledR");
      defineSymbol(math, ams, textord, "\u2221", "\\measuredangle");
      defineSymbol(math, ams, textord, "\u2204", "\\nexists");
      defineSymbol(math, ams, textord, "\u2127", "\\mho");
      defineSymbol(math, ams, textord, "\u2132", "\\Finv");
      defineSymbol(math, ams, textord, "\u2141", "\\Game");
      defineSymbol(math, ams, textord, "k", "\\Bbbk");
      defineSymbol(math, ams, textord, "\u2035", "\\backprime");
      defineSymbol(math, ams, textord, "\u25B2", "\\blacktriangle");
      defineSymbol(math, ams, textord, "\u25BC", "\\blacktriangledown");
      defineSymbol(math, ams, textord, "\u25A0", "\\blacksquare");
      defineSymbol(math, ams, textord, "\u29EB", "\\blacklozenge");
      defineSymbol(math, ams, textord, "\u2605", "\\bigstar");
      defineSymbol(math, ams, textord, "\u2222", "\\sphericalangle");
      defineSymbol(math, ams, textord, "\u2201", "\\complement");
      defineSymbol(math, ams, textord, "\xF0", "\\eth");
      defineSymbol(math, ams, textord, "\u2571", "\\diagup");
      defineSymbol(math, ams, textord, "\u2572", "\\diagdown");
      defineSymbol(math, ams, textord, "\u25A1", "\\square");
      defineSymbol(math, ams, textord, "\u25A1", "\\Box");
      defineSymbol(math, ams, textord, "\u25CA", "\\Diamond");
      defineSymbol(math, ams, textord, "\xA5", "\\yen");
      defineSymbol(math, ams, textord, "\u2713", "\\checkmark");
      defineSymbol(text, ams, textord, "\u2713", "\\checkmark"); // AMS Hebrew

      defineSymbol(math, ams, textord, "\u2136", "\\beth");
      defineSymbol(math, ams, textord, "\u2138", "\\daleth");
      defineSymbol(math, ams, textord, "\u2137", "\\gimel"); // AMS Greek

      defineSymbol(math, ams, textord, "\u03DD", "\\digamma");
      defineSymbol(math, ams, textord, "\u03F0", "\\varkappa"); // AMS Delimiters

      defineSymbol(math, ams, open, "\u250C", "\\ulcorner");
      defineSymbol(math, ams, close, "\u2510", "\\urcorner");
      defineSymbol(math, ams, open, "\u2514", "\\llcorner");
      defineSymbol(math, ams, close, "\u2518", "\\lrcorner"); // AMS Binary Relations

      defineSymbol(math, ams, rel, "\u2266", "\\leqq");
      defineSymbol(math, ams, rel, "\u2A7D", "\\leqslant");
      defineSymbol(math, ams, rel, "\u2A95", "\\eqslantless");
      defineSymbol(math, ams, rel, "\u2272", "\\lesssim");
      defineSymbol(math, ams, rel, "\u2A85", "\\lessapprox");
      defineSymbol(math, ams, rel, "\u224A", "\\approxeq");
      defineSymbol(math, ams, bin, "\u22D6", "\\lessdot");
      defineSymbol(math, ams, rel, "\u22D8", "\\lll");
      defineSymbol(math, ams, rel, "\u2276", "\\lessgtr");
      defineSymbol(math, ams, rel, "\u22DA", "\\lesseqgtr");
      defineSymbol(math, ams, rel, "\u2A8B", "\\lesseqqgtr");
      defineSymbol(math, ams, rel, "\u2251", "\\doteqdot");
      defineSymbol(math, ams, rel, "\u2253", "\\risingdotseq");
      defineSymbol(math, ams, rel, "\u2252", "\\fallingdotseq");
      defineSymbol(math, ams, rel, "\u223D", "\\backsim");
      defineSymbol(math, ams, rel, "\u22CD", "\\backsimeq");
      defineSymbol(math, ams, rel, "\u2AC5", "\\subseteqq");
      defineSymbol(math, ams, rel, "\u22D0", "\\Subset");
      defineSymbol(math, ams, rel, "\u228F", "\\sqsubset");
      defineSymbol(math, ams, rel, "\u227C", "\\preccurlyeq");
      defineSymbol(math, ams, rel, "\u22DE", "\\curlyeqprec");
      defineSymbol(math, ams, rel, "\u227E", "\\precsim");
      defineSymbol(math, ams, rel, "\u2AB7", "\\precapprox");
      defineSymbol(math, ams, rel, "\u22B2", "\\vartriangleleft");
      defineSymbol(math, ams, rel, "\u22B4", "\\trianglelefteq");
      defineSymbol(math, ams, rel, "\u22A8", "\\vDash");
      defineSymbol(math, ams, rel, "\u22AA", "\\Vvdash");
      defineSymbol(math, ams, rel, "\u2323", "\\smallsmile");
      defineSymbol(math, ams, rel, "\u2322", "\\smallfrown");
      defineSymbol(math, ams, rel, "\u224F", "\\bumpeq");
      defineSymbol(math, ams, rel, "\u224E", "\\Bumpeq");
      defineSymbol(math, ams, rel, "\u2267", "\\geqq");
      defineSymbol(math, ams, rel, "\u2A7E", "\\geqslant");
      defineSymbol(math, ams, rel, "\u2A96", "\\eqslantgtr");
      defineSymbol(math, ams, rel, "\u2273", "\\gtrsim");
      defineSymbol(math, ams, rel, "\u2A86", "\\gtrapprox");
      defineSymbol(math, ams, bin, "\u22D7", "\\gtrdot");
      defineSymbol(math, ams, rel, "\u22D9", "\\ggg");
      defineSymbol(math, ams, rel, "\u2277", "\\gtrless");
      defineSymbol(math, ams, rel, "\u22DB", "\\gtreqless");
      defineSymbol(math, ams, rel, "\u2A8C", "\\gtreqqless");
      defineSymbol(math, ams, rel, "\u2256", "\\eqcirc");
      defineSymbol(math, ams, rel, "\u2257", "\\circeq");
      defineSymbol(math, ams, rel, "\u225C", "\\triangleq");
      defineSymbol(math, ams, rel, "\u223C", "\\thicksim");
      defineSymbol(math, ams, rel, "\u2248", "\\thickapprox");
      defineSymbol(math, ams, rel, "\u2AC6", "\\supseteqq");
      defineSymbol(math, ams, rel, "\u22D1", "\\Supset");
      defineSymbol(math, ams, rel, "\u2290", "\\sqsupset");
      defineSymbol(math, ams, rel, "\u227D", "\\succcurlyeq");
      defineSymbol(math, ams, rel, "\u22DF", "\\curlyeqsucc");
      defineSymbol(math, ams, rel, "\u227F", "\\succsim");
      defineSymbol(math, ams, rel, "\u2AB8", "\\succapprox");
      defineSymbol(math, ams, rel, "\u22B3", "\\vartriangleright");
      defineSymbol(math, ams, rel, "\u22B5", "\\trianglerighteq");
      defineSymbol(math, ams, rel, "\u22A9", "\\Vdash");
      defineSymbol(math, ams, rel, "\u2223", "\\shortmid");
      defineSymbol(math, ams, rel, "\u2225", "\\shortparallel");
      defineSymbol(math, ams, rel, "\u226C", "\\between");
      defineSymbol(math, ams, rel, "\u22D4", "\\pitchfork");
      defineSymbol(math, ams, rel, "\u221D", "\\varpropto");
      defineSymbol(math, ams, rel, "\u25C0", "\\blacktriangleleft");
      defineSymbol(math, ams, rel, "\u2234", "\\therefore");
      defineSymbol(math, ams, rel, "\u220D", "\\backepsilon");
      defineSymbol(math, ams, rel, "\u25B6", "\\blacktriangleright");
      defineSymbol(math, ams, rel, "\u2235", "\\because");
      defineSymbol(math, ams, rel, "\u22D8", "\\llless");
      defineSymbol(math, ams, rel, "\u22D9", "\\gggtr");
      defineSymbol(math, ams, bin, "\u22B2", "\\lhd");
      defineSymbol(math, ams, bin, "\u22B3", "\\rhd");
      defineSymbol(math, ams, rel, "\u2242", "\\eqsim");
      defineSymbol(math, main, rel, "\u22C8", "\\Join");
      defineSymbol(math, ams, rel, "\u2251", "\\Doteq"); // AMS Binary Operators

      defineSymbol(math, ams, bin, "\u2214", "\\dotplus");
      defineSymbol(math, ams, bin, "\u2216", "\\smallsetminus");
      defineSymbol(math, ams, bin, "\u22D2", "\\Cap");
      defineSymbol(math, ams, bin, "\u22D3", "\\Cup");
      defineSymbol(math, ams, bin, "\u2A5E", "\\doublebarwedge");
      defineSymbol(math, ams, bin, "\u229F", "\\boxminus");
      defineSymbol(math, ams, bin, "\u229E", "\\boxplus");
      defineSymbol(math, ams, bin, "\u22C7", "\\divideontimes");
      defineSymbol(math, ams, bin, "\u22C9", "\\ltimes");
      defineSymbol(math, ams, bin, "\u22CA", "\\rtimes");
      defineSymbol(math, ams, bin, "\u22CB", "\\leftthreetimes");
      defineSymbol(math, ams, bin, "\u22CC", "\\rightthreetimes");
      defineSymbol(math, ams, bin, "\u22CF", "\\curlywedge");
      defineSymbol(math, ams, bin, "\u22CE", "\\curlyvee");
      defineSymbol(math, ams, bin, "\u229D", "\\circleddash");
      defineSymbol(math, ams, bin, "\u229B", "\\circledast");
      defineSymbol(math, ams, bin, "\u22C5", "\\centerdot");
      defineSymbol(math, ams, bin, "\u22BA", "\\intercal");
      defineSymbol(math, ams, bin, "\u22D2", "\\doublecap");
      defineSymbol(math, ams, bin, "\u22D3", "\\doublecup");
      defineSymbol(math, ams, bin, "\u22A0", "\\boxtimes"); // AMS Arrows

      defineSymbol(math, ams, rel, "\u21E2", "\\dashrightarrow");
      defineSymbol(math, ams, rel, "\u21E0", "\\dashleftarrow");
      defineSymbol(math, ams, rel, "\u21C7", "\\leftleftarrows");
      defineSymbol(math, ams, rel, "\u21C6", "\\leftrightarrows");
      defineSymbol(math, ams, rel, "\u21DA", "\\Lleftarrow");
      defineSymbol(math, ams, rel, "\u219E", "\\twoheadleftarrow");
      defineSymbol(math, ams, rel, "\u21A2", "\\leftarrowtail");
      defineSymbol(math, ams, rel, "\u21AB", "\\looparrowleft");
      defineSymbol(math, ams, rel, "\u21CB", "\\leftrightharpoons");
      defineSymbol(math, ams, rel, "\u21B6", "\\curvearrowleft");
      defineSymbol(math, ams, rel, "\u21BA", "\\circlearrowleft");
      defineSymbol(math, ams, rel, "\u21B0", "\\Lsh");
      defineSymbol(math, ams, rel, "\u21C8", "\\upuparrows");
      defineSymbol(math, ams, rel, "\u21BF", "\\upharpoonleft");
      defineSymbol(math, ams, rel, "\u21C3", "\\downharpoonleft");
      defineSymbol(math, ams, rel, "\u22B8", "\\multimap");
      defineSymbol(math, ams, rel, "\u21AD", "\\leftrightsquigarrow");
      defineSymbol(math, ams, rel, "\u21C9", "\\rightrightarrows");
      defineSymbol(math, ams, rel, "\u21C4", "\\rightleftarrows");
      defineSymbol(math, ams, rel, "\u21A0", "\\twoheadrightarrow");
      defineSymbol(math, ams, rel, "\u21A3", "\\rightarrowtail");
      defineSymbol(math, ams, rel, "\u21AC", "\\looparrowright");
      defineSymbol(math, ams, rel, "\u21B7", "\\curvearrowright");
      defineSymbol(math, ams, rel, "\u21BB", "\\circlearrowright");
      defineSymbol(math, ams, rel, "\u21B1", "\\Rsh");
      defineSymbol(math, ams, rel, "\u21CA", "\\downdownarrows");
      defineSymbol(math, ams, rel, "\u21BE", "\\upharpoonright");
      defineSymbol(math, ams, rel, "\u21C2", "\\downharpoonright");
      defineSymbol(math, ams, rel, "\u21DD", "\\rightsquigarrow");
      defineSymbol(math, ams, rel, "\u21DD", "\\leadsto");
      defineSymbol(math, ams, rel, "\u21DB", "\\Rrightarrow");
      defineSymbol(math, ams, rel, "\u21BE", "\\restriction");
      defineSymbol(math, main, textord, "\u2018", "`");
      defineSymbol(math, main, textord, "$", "\\$");
      defineSymbol(text, main, textord, "$", "\\$");
      defineSymbol(text, main, textord, "$", "\\textdollar");
      defineSymbol(math, main, textord, "%", "\\%");
      defineSymbol(text, main, textord, "%", "\\%");
      defineSymbol(math, main, textord, "_", "\\_");
      defineSymbol(text, main, textord, "_", "\\_");
      defineSymbol(text, main, textord, "_", "\\textunderscore");
      defineSymbol(math, main, textord, "\u2220", "\\angle");
      defineSymbol(math, main, textord, "\u221E", "\\infty");
      defineSymbol(math, main, textord, "\u2032", "\\prime");
      defineSymbol(math, main, textord, "\u25B3", "\\triangle");
      defineSymbol(math, main, textord, "\u0393", "\\Gamma", true);
      defineSymbol(math, main, textord, "\u0394", "\\Delta", true);
      defineSymbol(math, main, textord, "\u0398", "\\Theta", true);
      defineSymbol(math, main, textord, "\u039B", "\\Lambda", true);
      defineSymbol(math, main, textord, "\u039E", "\\Xi", true);
      defineSymbol(math, main, textord, "\u03A0", "\\Pi", true);
      defineSymbol(math, main, textord, "\u03A3", "\\Sigma", true);
      defineSymbol(math, main, textord, "\u03A5", "\\Upsilon", true);
      defineSymbol(math, main, textord, "\u03A6", "\\Phi", true);
      defineSymbol(math, main, textord, "\u03A8", "\\Psi", true);
      defineSymbol(math, main, textord, "\u03A9", "\\Omega", true);
      defineSymbol(math, main, textord, "\xAC", "\\neg");
      defineSymbol(math, main, textord, "\xAC", "\\lnot");
      defineSymbol(math, main, textord, "\u22A4", "\\top");
      defineSymbol(math, main, textord, "\u22A5", "\\bot");
      defineSymbol(math, main, textord, "\u2205", "\\emptyset");
      defineSymbol(math, ams, textord, "\u2205", "\\varnothing");
      defineSymbol(math, main, mathord, "\u03B1", "\\alpha", true);
      defineSymbol(math, main, mathord, "\u03B2", "\\beta", true);
      defineSymbol(math, main, mathord, "\u03B3", "\\gamma", true);
      defineSymbol(math, main, mathord, "\u03B4", "\\delta", true);
      defineSymbol(math, main, mathord, "\u03F5", "\\epsilon", true);
      defineSymbol(math, main, mathord, "\u03B6", "\\zeta", true);
      defineSymbol(math, main, mathord, "\u03B7", "\\eta", true);
      defineSymbol(math, main, mathord, "\u03B8", "\\theta", true);
      defineSymbol(math, main, mathord, "\u03B9", "\\iota", true);
      defineSymbol(math, main, mathord, "\u03BA", "\\kappa", true);
      defineSymbol(math, main, mathord, "\u03BB", "\\lambda", true);
      defineSymbol(math, main, mathord, "\u03BC", "\\mu", true);
      defineSymbol(math, main, mathord, "\u03BD", "\\nu", true);
      defineSymbol(math, main, mathord, "\u03BE", "\\xi", true);
      defineSymbol(math, main, mathord, "\u03BF", "\\omicron", true);
      defineSymbol(math, main, mathord, "\u03C0", "\\pi", true);
      defineSymbol(math, main, mathord, "\u03C1", "\\rho", true);
      defineSymbol(math, main, mathord, "\u03C3", "\\sigma", true);
      defineSymbol(math, main, mathord, "\u03C4", "\\tau", true);
      defineSymbol(math, main, mathord, "\u03C5", "\\upsilon", true);
      defineSymbol(math, main, mathord, "\u03D5", "\\phi", true);
      defineSymbol(math, main, mathord, "\u03C7", "\\chi", true);
      defineSymbol(math, main, mathord, "\u03C8", "\\psi", true);
      defineSymbol(math, main, mathord, "\u03C9", "\\omega", true);
      defineSymbol(math, main, mathord, "\u03B5", "\\varepsilon", true);
      defineSymbol(math, main, mathord, "\u03D1", "\\vartheta", true);
      defineSymbol(math, main, mathord, "\u03D6", "\\varpi", true);
      defineSymbol(math, main, mathord, "\u03F1", "\\varrho", true);
      defineSymbol(math, main, mathord, "\u03C2", "\\varsigma", true);
      defineSymbol(math, main, mathord, "\u03C6", "\\varphi", true);
      defineSymbol(math, main, bin, "\u2217", "*");
      defineSymbol(math, main, bin, "+", "+");
      defineSymbol(math, main, bin, "\u2212", "-");
      defineSymbol(math, main, bin, "\u22C5", "\\cdot");
      defineSymbol(math, main, bin, "\u2218", "\\circ");
      defineSymbol(math, main, bin, "\xF7", "\\div");
      defineSymbol(math, main, bin, "\xB1", "\\pm");
      defineSymbol(math, main, bin, "\xD7", "\\times");
      defineSymbol(math, main, bin, "\u2229", "\\cap");
      defineSymbol(math, main, bin, "\u222A", "\\cup");
      defineSymbol(math, main, bin, "\u2216", "\\setminus");
      defineSymbol(math, main, bin, "\u2227", "\\land");
      defineSymbol(math, main, bin, "\u2228", "\\lor");
      defineSymbol(math, main, bin, "\u2227", "\\wedge");
      defineSymbol(math, main, bin, "\u2228", "\\vee");
      defineSymbol(math, main, textord, "\u221A", "\\surd");
      defineSymbol(math, main, open, "(", "(");
      defineSymbol(math, main, open, "[", "[");
      defineSymbol(math, main, open, "\u27E8", "\\langle");
      defineSymbol(math, main, open, "\u2223", "\\lvert");
      defineSymbol(math, main, open, "\u2225", "\\lVert");
      defineSymbol(math, main, close, ")", ")");
      defineSymbol(math, main, close, "]", "]");
      defineSymbol(math, main, close, "?", "?");
      defineSymbol(math, main, close, "!", "!");
      defineSymbol(math, main, close, "\u27E9", "\\rangle");
      defineSymbol(math, main, close, "\u2223", "\\rvert");
      defineSymbol(math, main, close, "\u2225", "\\rVert");
      defineSymbol(math, main, rel, "=", "=");
      defineSymbol(math, main, rel, "<", "<");
      defineSymbol(math, main, rel, ">", ">");
      defineSymbol(math, main, rel, ":", ":");
      defineSymbol(math, main, rel, "\u2248", "\\approx");
      defineSymbol(math, main, rel, "\u2245", "\\cong");
      defineSymbol(math, main, rel, "\u2265", "\\ge");
      defineSymbol(math, main, rel, "\u2265", "\\geq");
      defineSymbol(math, main, rel, "\u2190", "\\gets");
      defineSymbol(math, main, rel, ">", "\\gt");
      defineSymbol(math, main, rel, "\u2208", "\\in");
      defineSymbol(math, main, rel, "\u2209", "\\notin");
      defineSymbol(math, main, rel, "\u0338", "\\not");
      defineSymbol(math, main, rel, "\u2282", "\\subset");
      defineSymbol(math, main, rel, "\u2283", "\\supset");
      defineSymbol(math, main, rel, "\u2286", "\\subseteq");
      defineSymbol(math, main, rel, "\u2287", "\\supseteq");
      defineSymbol(math, ams, rel, "\u2288", "\\nsubseteq");
      defineSymbol(math, ams, rel, "\u2289", "\\nsupseteq");
      defineSymbol(math, main, rel, "\u22A8", "\\models");
      defineSymbol(math, main, rel, "\u2190", "\\leftarrow");
      defineSymbol(math, main, rel, "\u2264", "\\le");
      defineSymbol(math, main, rel, "\u2264", "\\leq");
      defineSymbol(math, main, rel, "<", "\\lt");
      defineSymbol(math, main, rel, "\u2260", "\\ne");
      defineSymbol(math, main, rel, "\u2260", "\\neq");
      defineSymbol(math, main, rel, "\u2192", "\\rightarrow");
      defineSymbol(math, main, rel, "\u2192", "\\to");
      defineSymbol(math, ams, rel, "\u2271", "\\ngeq");
      defineSymbol(math, ams, rel, "\u2270", "\\nleq");
      defineSymbol(math, main, spacing, null, "\\!");
      defineSymbol(math, main, spacing, "\xA0", "\\ ");
      defineSymbol(math, main, spacing, "\xA0", "~");
      defineSymbol(math, main, spacing, null, "\\,");
      defineSymbol(math, main, spacing, null, "\\:");
      defineSymbol(math, main, spacing, null, "\\;");
      defineSymbol(math, main, spacing, null, "\\enspace");
      defineSymbol(math, main, spacing, null, "\\qquad");
      defineSymbol(math, main, spacing, null, "\\quad");
      defineSymbol(math, main, spacing, "\xA0", "\\space");
      defineSymbol(math, main, punct, ",", ",");
      defineSymbol(math, main, punct, ";", ";");
      defineSymbol(math, main, punct, ":", "\\colon");
      defineSymbol(math, ams, bin, "\u22BC", "\\barwedge");
      defineSymbol(math, ams, bin, "\u22BB", "\\veebar");
      defineSymbol(math, main, bin, "\u2299", "\\odot");
      defineSymbol(math, main, bin, "\u2295", "\\oplus");
      defineSymbol(math, main, bin, "\u2297", "\\otimes");
      defineSymbol(math, main, textord, "\u2202", "\\partial");
      defineSymbol(math, main, bin, "\u2298", "\\oslash");
      defineSymbol(math, ams, bin, "\u229A", "\\circledcirc");
      defineSymbol(math, ams, bin, "\u22A1", "\\boxdot");
      defineSymbol(math, main, bin, "\u25B3", "\\bigtriangleup");
      defineSymbol(math, main, bin, "\u25BD", "\\bigtriangledown");
      defineSymbol(math, main, bin, "\u2020", "\\dagger");
      defineSymbol(math, main, bin, "\u22C4", "\\diamond");
      defineSymbol(math, main, bin, "\u22C6", "\\star");
      defineSymbol(math, main, bin, "\u25C3", "\\triangleleft");
      defineSymbol(math, main, bin, "\u25B9", "\\triangleright");
      defineSymbol(math, main, open, "{", "\\{");
      defineSymbol(text, main, textord, "{", "\\{");
      defineSymbol(text, main, textord, "{", "\\textbraceleft");
      defineSymbol(math, main, close, "}", "\\}");
      defineSymbol(text, main, textord, "}", "\\}");
      defineSymbol(text, main, textord, "}", "\\textbraceright");
      defineSymbol(math, main, open, "{", "\\lbrace");
      defineSymbol(math, main, close, "}", "\\rbrace");
      defineSymbol(math, main, open, "[", "\\lbrack");
      defineSymbol(math, main, close, "]", "\\rbrack");
      defineSymbol(text, main, textord, "<", "\\textless"); // in T1 fontenc

      defineSymbol(text, main, textord, ">", "\\textgreater"); // in T1 fontenc

      defineSymbol(math, main, open, "\u230A", "\\lfloor");
      defineSymbol(math, main, close, "\u230B", "\\rfloor");
      defineSymbol(math, main, open, "\u2308", "\\lceil");
      defineSymbol(math, main, close, "\u2309", "\\rceil");
      defineSymbol(math, main, textord, "\\", "\\backslash");
      defineSymbol(math, main, textord, "\u2223", "|");
      defineSymbol(math, main, textord, "\u2223", "\\vert");
      defineSymbol(text, main, textord, "|", "\\textbar"); // in T1 fontenc

      defineSymbol(math, main, textord, "\u2225", "\\|");
      defineSymbol(math, main, textord, "\u2225", "\\Vert");
      defineSymbol(text, main, textord, "\u2225", "\\textbardbl");
      defineSymbol(math, main, rel, "\u2191", "\\uparrow");
      defineSymbol(math, main, rel, "\u21D1", "\\Uparrow");
      defineSymbol(math, main, rel, "\u2193", "\\downarrow");
      defineSymbol(math, main, rel, "\u21D3", "\\Downarrow");
      defineSymbol(math, main, rel, "\u2195", "\\updownarrow");
      defineSymbol(math, main, rel, "\u21D5", "\\Updownarrow");
      defineSymbol(math, main, op, "\u2210", "\\coprod");
      defineSymbol(math, main, op, "\u22C1", "\\bigvee");
      defineSymbol(math, main, op, "\u22C0", "\\bigwedge");
      defineSymbol(math, main, op, "\u2A04", "\\biguplus");
      defineSymbol(math, main, op, "\u22C2", "\\bigcap");
      defineSymbol(math, main, op, "\u22C3", "\\bigcup");
      defineSymbol(math, main, op, "\u222B", "\\int");
      defineSymbol(math, main, op, "\u222B", "\\intop");
      defineSymbol(math, main, op, "\u222C", "\\iint");
      defineSymbol(math, main, op, "\u222D", "\\iiint");
      defineSymbol(math, main, op, "\u220F", "\\prod");
      defineSymbol(math, main, op, "\u2211", "\\sum");
      defineSymbol(math, main, op, "\u2A02", "\\bigotimes");
      defineSymbol(math, main, op, "\u2A01", "\\bigoplus");
      defineSymbol(math, main, op, "\u2A00", "\\bigodot");
      defineSymbol(math, main, op, "\u222E", "\\oint");
      defineSymbol(math, main, op, "\u2A06", "\\bigsqcup");
      defineSymbol(math, main, op, "\u222B", "\\smallint");
      defineSymbol(text, main, inner, "\u2026", "\\textellipsis");
      defineSymbol(math, main, inner, "\u2026", "\\mathellipsis");
      defineSymbol(text, main, inner, "\u2026", "\\ldots", true);
      defineSymbol(math, main, inner, "\u2026", "\\ldots", true);
      defineSymbol(math, main, inner, "\u22EF", "\\@cdots", true);
      defineSymbol(math, main, inner, "\u22F1", "\\ddots", true);
      defineSymbol(math, main, textord, "\u22EE", "\\vdots", true);
      defineSymbol(math, main, accent, "\xB4", "\\acute");
      defineSymbol(math, main, accent, "`", "\\grave");
      defineSymbol(math, main, accent, "\xA8", "\\ddot");
      defineSymbol(math, main, accent, "~", "\\tilde");
      defineSymbol(math, main, accent, "\xAF", "\\bar");
      defineSymbol(math, main, accent, "\u02D8", "\\breve");
      defineSymbol(math, main, accent, "\u02C7", "\\check");
      defineSymbol(math, main, accent, "^", "\\hat");
      defineSymbol(math, main, accent, "\u20D7", "\\vec");
      defineSymbol(math, main, accent, "\u02D9", "\\dot");
      defineSymbol(math, main, mathord, "\u0131", "\\imath");
      defineSymbol(math, main, mathord, "\u0237", "\\jmath");
      defineSymbol(text, main, accent, "\u02CA", "\\'"); // acute

      defineSymbol(text, main, accent, "\u02CB", "\\`"); // grave

      defineSymbol(text, main, accent, "\u02C6", "\\^"); // circumflex

      defineSymbol(text, main, accent, "\u02DC", "\\~"); // tilde

      defineSymbol(text, main, accent, "\u02C9", "\\="); // macron

      defineSymbol(text, main, accent, "\u02D8", "\\u"); // breve

      defineSymbol(text, main, accent, "\u02D9", "\\."); // dot above

      defineSymbol(text, main, accent, "\u02DA", "\\r"); // ring above

      defineSymbol(text, main, accent, "\u02C7", "\\v"); // caron

      defineSymbol(text, main, accent, "\xA8", '\\"'); // diaresis

      defineSymbol(text, main, accent, "\u030B", "\\H"); // double acute

      defineSymbol(text, main, textord, "\u2013", "--");
      defineSymbol(text, main, textord, "\u2013", "\\textendash");
      defineSymbol(text, main, textord, "\u2014", "---");
      defineSymbol(text, main, textord, "\u2014", "\\textemdash");
      defineSymbol(text, main, textord, "\u2018", "`");
      defineSymbol(text, main, textord, "\u2018", "\\textquoteleft");
      defineSymbol(text, main, textord, "\u2019", "'");
      defineSymbol(text, main, textord, "\u2019", "\\textquoteright");
      defineSymbol(text, main, textord, "\u201C", "``");
      defineSymbol(text, main, textord, "\u201C", "\\textquotedblleft");
      defineSymbol(text, main, textord, "\u201D", "''");
      defineSymbol(text, main, textord, "\u201D", "\\textquotedblright");
      defineSymbol(math, main, textord, "\xB0", "\\degree");
      defineSymbol(text, main, textord, "\xB0", "\\degree"); // TODO: In LaTeX, \pounds can generate a different character in text and math
      // mode, but among our fonts, only Main-Italic defines this character "163".

      defineSymbol(math, main, mathord, "\xA3", "\\pounds");
      defineSymbol(math, main, mathord, "\xA3", "\\mathsterling");
      defineSymbol(text, main, mathord, "\xA3", "\\pounds");
      defineSymbol(text, main, mathord, "\xA3", "\\textsterling");
      defineSymbol(math, ams, textord, "\u2720", "\\maltese");
      defineSymbol(text, ams, textord, "\u2720", "\\maltese");
      defineSymbol(text, main, spacing, "\xA0", "\\ ");
      defineSymbol(text, main, spacing, "\xA0", " ");
      defineSymbol(text, main, spacing, "\xA0", "~"); // There are lots of symbols which are the same, so we add them in afterwards.
      // All of these are textords in math mode

      var mathTextSymbols = "0123456789/@.\"";

      for (var i = 0; i < mathTextSymbols.length; i++) {
        var ch = mathTextSymbols.charAt(i);
        defineSymbol(math, main, textord, ch, ch);
      } // All of these are textords in text mode


      var textSymbols = "0123456789!@*()-=+[]<>|\";:?/.,";

      for (var _i = 0; _i < textSymbols.length; _i++) {
        var _ch = textSymbols.charAt(_i);

        defineSymbol(text, main, textord, _ch, _ch);
      } // All of these are textords in text mode, and mathords in math mode


      var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      for (var _i2 = 0; _i2 < letters.length; _i2++) {
        var _ch2 = letters.charAt(_i2);

        defineSymbol(math, main, mathord, _ch2, _ch2);
        defineSymbol(text, main, textord, _ch2, _ch2);
      } // Latin-1 letters


      for (var _i3 = 0x00C0; _i3 <= 0x00D6; _i3++) {
        var _ch3 = String.fromCharCode(_i3);

        defineSymbol(math, main, mathord, _ch3, _ch3);
        defineSymbol(text, main, textord, _ch3, _ch3);
      }

      for (var _i4 = 0x00D8; _i4 <= 0x00F6; _i4++) {
        var _ch4 = String.fromCharCode(_i4);

        defineSymbol(math, main, mathord, _ch4, _ch4);
        defineSymbol(text, main, textord, _ch4, _ch4);
      }

      for (var _i5 = 0x00F8; _i5 <= 0x00FF; _i5++) {
        var _ch5 = String.fromCharCode(_i5);

        defineSymbol(math, main, mathord, _ch5, _ch5);
        defineSymbol(text, main, textord, _ch5, _ch5);
      } // Cyrillic


      for (var _i6 = 0x0410; _i6 <= 0x044F; _i6++) {
        var _ch6 = String.fromCharCode(_i6);

        defineSymbol(text, main, textord, _ch6, _ch6);
      } // Unicode versions of existing characters


      defineSymbol(text, main, textord, "\u2013", "–");
      defineSymbol(text, main, textord, "\u2014", "—");
      defineSymbol(text, main, textord, "\u2018", "‘");
      defineSymbol(text, main, textord, "\u2019", "’");
      defineSymbol(text, main, textord, "\u201C", "“");
      defineSymbol(text, main, textord, "\u201D", "”");
    }, {}],
    113: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var hangulRegex = exports.hangulRegex = /[\uAC00-\uD7AF]/; // This regex combines
      // - CJK symbols and punctuation: [\u3000-\u303F]
      // - Hiragana: [\u3040-\u309F]
      // - Katakana: [\u30A0-\u30FF]
      // - CJK ideograms: [\u4E00-\u9FAF]
      // - Hangul syllables: [\uAC00-\uD7AF]
      // - Fullwidth punctuation: [\uFF00-\uFF60]
      // Notably missing are halfwidth Katakana and Romanji glyphs.

      var cjkRegex = exports.cjkRegex = /[\u3000-\u30FF\u4E00-\u9FAF\uAC00-\uD7AF\uFF00-\uFF60]/;
    }, {}],
    114: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calculateSize = exports.validUnit = undefined;

      var _ParseError = require("./ParseError");

      var _ParseError2 = _interopRequireDefault(_ParseError);

      var _Options = require("./Options");

      var _Options2 = _interopRequireDefault(_Options);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      } // This table gives the number of TeX pts in one of each *absolute* TeX unit.
      // Thus, multiplying a length by this number converts the length from units
      // into pts.  Dividing the result by ptPerEm gives the number of ems
      // *assuming* a font size of ptPerEm (normal size, normal style).

      /**
       * This file does conversion between units.  In particular, it provides
       * calculateSize to convert other units into ems.
       */


      var ptPerUnit = {
        // https://en.wikibooks.org/wiki/LaTeX/Lengths and
        // https://tex.stackexchange.com/a/8263
        "pt": 1,
        // TeX point
        "mm": 7227 / 2540,
        // millimeter
        "cm": 7227 / 254,
        // centimeter
        "in": 72.27,
        // inch
        "bp": 803 / 800,
        // big (PostScript) points
        "pc": 12,
        // pica
        "dd": 1238 / 1157,
        // didot
        "cc": 14856 / 1157,
        // cicero (12 didot)
        "nd": 685 / 642,
        // new didot
        "nc": 1370 / 107,
        // new cicero (12 new didot)
        "sp": 1 / 65536,
        // scaled point (TeX's internal smallest unit)
        // https://tex.stackexchange.com/a/41371
        "px": 803 / 800 // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX

      }; // Dictionary of relative units, for fast validity testing.

      var relativeUnit = {
        "ex": true,
        "em": true,
        "mu": true
      };
      /**
       * Determine whether the specified unit (either a string defining the unit
       * or a "size" parse node containing a unit field) is valid.
       */

      var validUnit = exports.validUnit = function validUnit(unit) {
        if (typeof unit !== "string") {
          unit = unit.unit;
        }

        return unit in ptPerUnit || unit in relativeUnit || unit === "ex";
      };
      /*
       * Convert a "size" parse node (with numeric "number" and string "unit" fields,
       * as parsed by functions.js argType "size") into a CSS em value for the
       * current style/scale.  `options` gives the current options.
       */


      var calculateSize = exports.calculateSize = function calculateSize(sizeValue, options) {
        var scale = void 0;

        if (sizeValue.unit in ptPerUnit) {
          // Absolute units
          scale = ptPerUnit[sizeValue.unit] // Convert unit to pt
          / options.fontMetrics().ptPerEm // Convert pt to CSS em
          / options.sizeMultiplier; // Unscale to make absolute units
        } else if (sizeValue.unit === "mu") {
          // `mu` units scale with scriptstyle/scriptscriptstyle.
          scale = options.fontMetrics().cssEmPerMu;
        } else {
          // Other relative units always refer to the *textstyle* font
          // in the current size.
          var unitOptions = void 0;

          if (options.style.isTight()) {
            // isTight() means current style is script/scriptscript.
            unitOptions = options.havingStyle(options.style.text());
          } else {
            unitOptions = options;
          } // TODO: In TeX these units are relative to the quad of the current
          // *text* font, e.g. cmr10. KaTeX instead uses values from the
          // comparably-sized *Computer Modern symbol* font. At 10pt, these
          // match. At 7pt and 5pt, they differ: cmr7=1.138894, cmsy7=1.170641;
          // cmr5=1.361133, cmsy5=1.472241. Consider $\scriptsize a\kern1emb$.
          // TeX \showlists shows a kern of 1.13889 * fontsize;
          // KaTeX shows a kern of 1.171 * fontsize.


          if (sizeValue.unit === "ex") {
            scale = unitOptions.fontMetrics().xHeight;
          } else if (sizeValue.unit === "em") {
            scale = unitOptions.fontMetrics().quad;
          } else {
            throw new _ParseError2.default("Invalid unit: '" + sizeValue.unit + "'");
          }

          if (unitOptions !== options) {
            scale *= unitOptions.sizeMultiplier / options.sizeMultiplier;
          }
        }

        return Math.min(sizeValue.number * scale, options.maxSize);
      };
    }, {
      "./Options": 83,
      "./ParseError": 84
    }],
    115: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       * This file contains a list of utility functions which are useful in other
       * files.
       */

      /**
       * Provide an `indexOf` function which works in IE8, but defers to native if
       * possible.
       */

      var nativeIndexOf = Array.prototype.indexOf;

      var indexOf = function indexOf(list, elem) {
        if (list == null) {
          return -1;
        }

        if (nativeIndexOf && list.indexOf === nativeIndexOf) {
          return list.indexOf(elem);
        }

        var l = list.length;

        for (var i = 0; i < l; i++) {
          if (list[i] === elem) {
            return i;
          }
        }

        return -1;
      };
      /**
       * Return whether an element is contained in a list
       */


      var contains = function contains(list, elem) {
        return indexOf(list, elem) !== -1;
      };
      /**
       * Provide a default value if a setting is undefined
       */


      var deflt = function deflt(setting, defaultIfUndefined) {
        return setting === undefined ? defaultIfUndefined : setting;
      }; // hyphenate and escape adapted from Facebook's React under Apache 2 license


      var uppercase = /([A-Z])/g;

      var hyphenate = function hyphenate(str) {
        return str.replace(uppercase, "-$1").toLowerCase();
      };

      var ESCAPE_LOOKUP = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        "\"": "&quot;",
        "'": "&#x27;"
      };
      var ESCAPE_REGEX = /[&><"']/g;

      function escaper(match) {
        return ESCAPE_LOOKUP[match];
      }
      /**
       * Escapes text to prevent scripting attacks.
       *
       * @param {*} text Text value to escape.
       * @return {string} An escaped string.
       */


      function escape(text) {
        return ("" + text).replace(ESCAPE_REGEX, escaper);
      }
      /**
       * A function to set the text content of a DOM element in all supported
       * browsers. Note that we don't define this if there is no document.
       */


      var setTextContent = void 0;

      if (typeof document !== "undefined") {
        var testNode = document.createElement("span");

        if ("textContent" in testNode) {
          setTextContent = function setTextContent(node, text) {
            node.textContent = text;
          };
        } else {
          setTextContent = function setTextContent(node, text) {
            node.innerText = text;
          };
        }
      }
      /**
       * A function to clear a node.
       */


      function clearNode(node) {
        setTextContent(node, "");
      }

      exports.default = {
        contains: contains,
        deflt: deflt,
        escape: escape,
        hyphenate: hyphenate,
        indexOf: indexOf,
        setTextContent: setTextContent,
        clearNode: clearNode
      };
    }, {}]
  }, {}, [1])(1);
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * @constructor
 * @param {!{patterns: !Object, leftmin: !number, rightmin: !number}} language The language pattern file. Compatible with Hyphenator.js.
 */
function Hypher(language) {
  var exceptions = [],
      i = 0;
  /**
   * @type {!Hypher.TrieNode}
   */

  this.trie = this.createTrie(language['patterns']);
  /**
   * @type {!number}
   * @const
   */

  this.leftMin = language['leftmin'];
  /**
   * @type {!number}
   * @const
   */

  this.rightMin = language['rightmin'];
  /**
   * @type {!Object.<string, !Array.<string>>}
   */

  this.exceptions = {};

  if (language['exceptions']) {
    exceptions = language['exceptions'].split(/,\s?/g);

    for (; i < exceptions.length; i += 1) {
      this.exceptions[exceptions[i].replace(/\u2027/g, '').toLowerCase()] = new RegExp('(' + exceptions[i].split('\u2027').join(')(') + ')', 'i');
    }
  }
}
/**
 * @typedef {{_points: !Array.<number>}}
 */


Hypher.TrieNode;
/**
 * Creates a trie from a language pattern.
 * @private
 * @param {!Object} patternObject An object with language patterns.
 * @return {!Hypher.TrieNode} An object trie.
 */

Hypher.prototype.createTrie = function (patternObject) {
  var size = 0,
      i = 0,
      c = 0,
      p = 0,
      chars = null,
      points = null,
      codePoint = null,
      t = null,
      tree = {
    _points: []
  },
      patterns;

  for (size in patternObject) {
    if (patternObject.hasOwnProperty(size)) {
      patterns = patternObject[size].match(new RegExp('.{1,' + +size + '}', 'g'));

      for (i = 0; i < patterns.length; i += 1) {
        chars = patterns[i].replace(/[0-9]/g, '').split('');
        points = patterns[i].split(/\D/);
        t = tree;

        for (c = 0; c < chars.length; c += 1) {
          codePoint = chars[c].charCodeAt(0);

          if (!t[codePoint]) {
            t[codePoint] = {};
          }

          t = t[codePoint];
        }

        t._points = [];

        for (p = 0; p < points.length; p += 1) {
          t._points[p] = points[p] || 0;
        }
      }
    }
  }

  return tree;
};
/**
 * Hyphenates a text.
 *
 * @param {!string} str The text to hyphenate.
 * @return {!string} The same text with soft hyphens inserted in the right positions.
 */


Hypher.prototype.hyphenateText = function (str, minLength) {
  minLength = minLength || 4; // Regexp("\b", "g") splits on word boundaries,
  // compound separators and ZWNJ so we don't need
  // any special cases for those characters. Unfortunately
  // it does not support unicode word boundaries, so
  // we implement it manually.

  var words = str.split(/([a-zA-Z0-9_\u0027\u00AD\u00DF-\u00EA\u00EB\u00EC-\u00EF\u00F1-\u00F6\u00F8-\u00FD\u0101\u0103\u0105\u0107\u0109\u010D\u010F\u0111\u0113\u0117\u0119\u011B\u011D\u011F\u0123\u0125\u012B\u012F\u0131\u0135\u0137\u013C\u013E\u0142\u0144\u0146\u0148\u0151\u0153\u0155\u0159\u015B\u015D\u015F\u0161\u0165\u016B\u016D\u016F\u0171\u0173\u017A\u017C\u017E\u017F\u0219\u021B\u02BC\u0390\u03AC-\u03CE\u03F2\u0401\u0410-\u044F\u0451\u0454\u0456\u0457\u045E\u0491\u0531-\u0556\u0561-\u0587\u0902\u0903\u0905-\u090B\u090E-\u0910\u0912\u0914-\u0928\u092A-\u0939\u093E-\u0943\u0946-\u0948\u094A-\u094D\u0982\u0983\u0985-\u098B\u098F\u0990\u0994-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BE-\u09C3\u09C7\u09C8\u09CB-\u09CD\u09D7\u0A02\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A14-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A82\u0A83\u0A85-\u0A8B\u0A8F\u0A90\u0A94-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABE-\u0AC3\u0AC7\u0AC8\u0ACB-\u0ACD\u0B02\u0B03\u0B05-\u0B0B\u0B0F\u0B10\u0B14-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3E-\u0B43\u0B47\u0B48\u0B4B-\u0B4D\u0B57\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB5\u0BB7-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C02\u0C03\u0C05-\u0C0B\u0C0E-\u0C10\u0C12\u0C14-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3E-\u0C43\u0C46-\u0C48\u0C4A-\u0C4D\u0C82\u0C83\u0C85-\u0C8B\u0C8E-\u0C90\u0C92\u0C94-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBE-\u0CC3\u0CC6-\u0CC8\u0CCA-\u0CCD\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D7A-\u0D7F\u1F00-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB2-\u1FB4\u1FB6\u1FB7\u1FBD\u1FBF\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD2\u1FD3\u1FD6\u1FD7\u1FE2-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u200D\u2019]+)/gi);

  for (var i = 0; i < words.length; i += 1) {
    if (words[i].indexOf('/') !== -1) {
      // Don't insert a zero width space if the slash is at the beginning or end
      // of the text, or right after or before a space.
      if (i !== 0 && i !== words.length - 1 && !/\s+\/|\/\s+/.test(words[i])) {
        words[i] += '\u200B';
      }
    } else if (words[i].length > minLength) {
      words[i] = this.hyphenate(words[i]).join('\u00AD');
    }
  }

  return words.join('');
};
/**
 * Hyphenates a word.
 *
 * @param {!string} word The word to hyphenate
 * @return {!Array.<!string>} An array of word fragments indicating valid hyphenation points.
 */


Hypher.prototype.hyphenate = function (word) {
  var characters,
      characterPoints = [],
      originalCharacters,
      i,
      j,
      k,
      node,
      points = [],
      wordLength,
      lowerCaseWord = word.toLowerCase(),
      nodePoints,
      nodePointsLength,
      m = Math.max,
      trie = this.trie,
      result = [''];

  if (this.exceptions.hasOwnProperty(lowerCaseWord)) {
    return word.match(this.exceptions[lowerCaseWord]).slice(1);
  }

  if (word.indexOf('\u00AD') !== -1) {
    return [word];
  }

  word = '_' + word + '_';
  characters = word.toLowerCase().split('');
  originalCharacters = word.split('');
  wordLength = characters.length;

  for (i = 0; i < wordLength; i += 1) {
    points[i] = 0;
    characterPoints[i] = characters[i].charCodeAt(0);
  }

  for (i = 0; i < wordLength; i += 1) {
    node = trie;

    for (j = i; j < wordLength; j += 1) {
      node = node[characterPoints[j]];

      if (node) {
        nodePoints = node._points;

        if (nodePoints) {
          for (k = 0, nodePointsLength = nodePoints.length; k < nodePointsLength; k += 1) {
            points[i + k] = m(points[i + k], nodePoints[k]);
          }
        }
      } else {
        break;
      }
    }
  }

  for (i = 1; i < wordLength - 1; i += 1) {
    if (i > this.leftMin && i < wordLength - this.rightMin && points[i] % 2) {
      result.push(originalCharacters[i]);
    } else {
      result[result.length - 1] += originalCharacters[i];
    }
  }

  return result;
};

module.exports = Hypher;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// The en-US hyphenation patterns are retrieved from
// http://tug_org/svn/texhyphen/trunk/collaboration/repository/hyphenator/
module.exports = {
  'id': ['en-us', 'en'],
  'leftmin': 2,
  'rightmin': 3,
  'patterns': {
    3: "x1qei2e1je1f1to2tlou2w3c1tue1q4tvtw41tyo1q4tz4tcd2yd1wd1v1du1ta4eu1pas4y1droo2d1psw24sv1dod1m1fad1j1su4fdo2n4fh1fi4fm4fn1fopd42ft3fu1fy1ga2sss1ru5jd5cd1bg3bgd44uk2ok1cyo5jgl2g1m4pf4pg1gog3p1gr1soc1qgs2oi2g3w1gysk21coc5nh1bck1h1fh1h4hk1zo1ci4zms2hh1w2ch5zl2idc3c2us2igi3hi3j4ik1cab1vsa22btr1w4bp2io2ipu3u4irbk4b1j1va2ze2bf4oar1p4nz4zbi1u2iv4iy5ja1jeza1y1wk1bk3fkh4k1ikk4k1lk1mk5tk1w2ldr1mn1t2lfr1lr3j4ljl1l2lm2lp4ltn1rrh4v4yn1q1ly1maw1brg2r1fwi24ao2mhw4kr1cw5p4mkm1m1mo4wtwy4x1ar1ba2nn5mx1ex1h4mtx3i1muqu2p3wx3o4mwa1jx3p1naai2x1ua2fxx4y1ba2dn1jy1cn3fpr2y1dy1i",
    4: "4dryn2itni4on1inn1im_up3nik4ni4dy5giye4tyes4_ye44ab_nhe4nha4abe2n2gyn1guy1ery5eep2pe4abry3lay3lone4wne4v1nesy3chn1erne2q3neo1nenp2seps4hy2cey5lu2nedne2cyme44nk2y5at2adine2b2ne_y5ac2p1tp2ten1den1cun1cryn5dp2th4adup4twpub3ae4rxu3ayn5gaff4pue4n2au4p1ppuf4n2atag1ipu4mag1na2gon4asx3tix1t2pu2na4gya3haa3heah4la3ho_ti2a5ian2an5puspu2tnak4_th2n1kl_te4_ta4mu4u4mupmun23mum2alex4ob_sy25ynxal1i_st4y1o4xi5cxi5a4alm_si2_sh2m5sixhu4m4sh4m3r4amam2py2rabm2pixhi2yo5dr2ai4m1pmo2vmos2x2edmo2r4n1la2mor2asx3c2xas5yom4x4apxam3nme44mokrbi2nne44andy4osp4ot3noemn4omn4a4m1n4nog4m1l2angws4l1posw3shwri4wra4yp3iwom11wo2m2izrb4ow4nopo4pr2cem2isrd2iano4mig4y3pomi3awiz55mi_no4n4m1fme4v2re_wir42mes1menme2mme2gre1o2med4me_4nop4m5c4m1bwil21noureu2whi4w3ev4maprev2w1era2plpo4crfu4r4fyy5pu2maha3pu2mab2a2rn1p4npi44lyb4lya2p3nwam42l1w1lut4luplu3or1glluf4lu5a2wacltu2y3rol1tr4vv4r3guyr4rl1te4rh_nru4ar1il2sel4sc4l1rl5prl4plys4c4lovri3ar4ib4lof3lo_ar2par3q_os3ll4oll2i4as_ri1o3vokl2levoi44p1mlka35vo_ns4cas4ll1izr4iqr2is3vivl1it3lika2tan2sen2slrle42l3hlgo3l5gal5frns3mvi4p3ley_od2r2meles24athr4myle2al3drv1inldi4l2de2vilnt2il3civik4lce42l1b4lavv3ifrno4r3nua1trr2ocnt4sy4sok4syks4la2tuk4sck3ouko5ryss4a2tyau4b4klyys1tnu1akis4au3rki4pro4ek4ima2va5ki_nu4dn4umn3uokes4k1erav1irok2ke4g1keek2ed_me2aw3ikal4aws4k5agk3ab3ka_aye4ays4veg3jo4p5ba_4vedjew3n1v24ve_ja4pzar23vatizi4n1w41batba4z2b1bb2beix4o4i5w4b1d4be_rox5nym4nyp4n3za4ittr3por1r4i1ti1bel2ith2itei2su4rs2r1sars4cr2seis1p3betvag4i2sor1shbe3wr1sioad34b3hbi2bbi4d3bie3isf4ise2is_1bilr1sp5va_r5sw_le2uz4eir1ibi2tuxu3r1tiu1v2i1raze4nze4pb2l2uu4mo1biip3iz1eripe4b4louts44b1m4b3no3br3bodi4osbo4eru3aio4mi1ol4io_3booo1ce4inyin1u2insru2n2inn4inl4inkrv4e2inioch42iner3vo4indpi2np4idbt4lb4tob3trry4cry3t2in_o4elbu4ni2muim1i5saiil3v4ilnil1iil5fs1apo3er4b5w5by_bys4_in1sau4i1lazet4u2suo3ev2z1ii2go4igius1p5saw4s5bo2fi4ifti3fl4if_i3etsch2usc22ie4i2dui4dri2diid5dpi3au3ruz4ils1cuz4is4s5d4se_se4a2ce_2ici4ich3ceii1bri5bo1ceni1blse2g5seiibe43cepi2aniam4ur2li2al2i1acet4hy2scew41phy4ch_5phuhu4thu4gche2h4tyh4shur1durc44hr44h5p5sev5sexu1ra4s3fup3p2s3gph3t2sh_ho4g2h1n_he23ciau3pl4h1mci5ch2lozo4m4ciihi2vhi4p2cim2cin4phsu1peu1ouo1geu5osheu4sho4he4th1es4shwun5zun5ysi1bunu45cizo4glck3ihep5he2nh4ed1sioph2l5hazsi2rcly4zte4_ge21siscoe22cog5siu1siv5siz_ga24skes1l2s2leha4m2s1ms3ma1ogyo1h2u1ni3gus3gun2guegu4acov1gth3_eu3g4ros1n4_es3u2nez4zyum2pu1mi3som_ev2oig4cri2gov15goos4opgon2ul5v5goeu3lugob53go_2c1t4ph_g1nog1nic2te4sov4ulsgn4ag4myc4twcud5c4ufc4uipe2t3glo1gleul2igla4_eg23giz3cun5givgi4u3gir5gio1cusul4e2spagil4g1ic5gi__eb4cze41d2a5da_u1laggo44daf2dagg2gege4v1geo1gen2ged3dato1la2ge_ol2dol2i5daypek4p4eed1d42de_4gazol2tuiv3ol2vo2lys1sa2gamgaf4o2meui4n2ui2pe2cd4em4fugi4jku3fl3ufaf2tyf4to1denu4du4pe_2f3sfri2de1ps1si4f5pfos5d3eqs4sls4snfo2rss2tdes25fon4p1b_ci23payss5w2st_de1tf4l2de1v2fin4dey4d1fd4gast2idg1id2gyd1h25di_ud5dfi3au4cy_ch4pav43didu3cud1iff2fyu3crd1inst4r4f1ffev4fer11dio2fedfe4bdir2s2ty4fe_dis1on1au3ca4f5bon1c2ondd5k25far4fagpa1peys45eyc1exps4ul2dlyp4ale3whon3s3do_e1wa5doee5vud4oge1visu2msu2nub4euav4su2rp4ai6rk_d4or3dosu1atdo4v3doxp4adoo4k4swoo2padre4eus4e3upe5un2ophet5z4syc3syl4y3hoy1ads4pd4swd4syd2tho4wo3ta_du2c4etn2tabta2luac4es4wdu4g2ess4uabdu4n4duptav4st5bow1io1pr5dyn2tawe1sp2t1bop1uead1tz4et4chopy5ea4l4t1d4te_2tyle1si4esh1tee4tyat1cr4twoteg4es2c4eru1teoer1s2eroea2tte4po1rat1wh3tusea2v3teu3texer1i2e1ber1h4tey2t1f4t1ge3br2th_th2e4thle1ce3tumec2i2ths2erb1tia4tueer1aou5vtud2tif22tige1potu1aou4lttu41timt5toos4le1cre2pat4swe5owe1cue4ottsh4eos4e1ort4sce3ol4edieo2ge5of1tio4eno4enn5tiq4edoti4u1tive3my1tiz4othee2ct5laee2ft5lo4t1mee2mtme4e1meem5bcoi4to3be5exo1ry2tof1effel2iel2ftos24t1pe1la1traos2ceig2ei5de5ico2soe1h45egyeg5n",
    5: "_ach4e4go_e4goseg1ule5gurtre5feg4iceher4eg5ibeger44egaltre4mei5gle3imbe3infe1ingtra3beir4deit3eei3the5ity5triae4jud3efiteki4nek4la2trime4la_e4lactri4v4toute4law5toure3leaefil45elece4ledto2rae5len4tonye1lestro3ve4fic4tonoto3mytom4bto2mato5ice5limto2gre3lioe2listru5i4todo4ellaee4tyello4e5locel5ogeest4el2shel4tae5ludel5uge4mace4mage5man2t1n2ee2s4ee4p1e2mele4metee4naemi4eee4lyeel3i3tled3tle_e4mistlan4eed3iem3iztrus4emo4gti3zaem3pie4mule4dulemu3ne4dritiv4aedon2e4dolti3tle5neae5neeen3emtis4pti5sotis4m3tisee3newti3sae5niee5nile3nioedi5zen3ite5niu5enized1ited3imeno4ge4nosen3oven4swti5oc4t1s2en3uaen5ufe3ny_4en3zed3ibe3diae4oi4ede4s3tini4ed3deo3ret2ina2e2dae4culeo4toe5outec4te4t3t2t4tes2t1ine5pel4timpe2corephe4e4plie2col5tigutu3arti5fytu4bie3pro3tienep4sh5tidie4putt4icoeci4t4tick2ti2bec3imera4bti4aber3ar4tuf45tu3ier4bler3che4cib2ere_4thooecca54thil3thet4thea3turethan4e4cade4bitere4qe4ben5turieret4tur5oeav5oeav5itu5ry4tess4tes_ter5ve1rio4eriter4iueri4v1terier3m4ter3cte5pe4t1waer3noeast3er5obe5rocero4rer1oue3assea5sp1tent4ertler3twtwis4eru4t3tende1s4a3tenc5telsear2te2scateli4e3scres5cue1s2ee2sec3tel_te5giear5kear4cte5diear3ae3sha2t1ede5ande2sice2sid5tecttece44teattype3ty5phesi4uea4gees4mie2sole3acte2sone1a4bdys5pdy4sedu4petaun4d3uleta5sytas4e4tare4tarctar4ata5pl2estrta5mo4talke2surtal3idu5eleta4bta5lae3teoua5naet1ic4taf4etin4ta5doe5tir4taciuan4id1ucad1u1ae3trae3tre2d1s2syn5ouar2d4drowet3uaet5ymdro4pdril4dri4b5dreneu3rouar3ieute44draieu5truar3te2vasdop4pe5veadoo3ddoni4u4belsum3iev1erdoli4do4laev3idevi4le4vinevi4ve5voc2d5ofdo5dee4wage5wee4d1n4ewil54d5lue3wit2d3lou3ber5eye_u1b4i3dledfa3blfab3rfa4ce3dle_fain4suit3su5issu2g34d5lasu4b3fa3tasu1al4fato1di1vd2iti5disiuci4bfeas4di1redi4pl4feca5fectdio5gfe3life4mofen2d4st3wuc4it5ferr5diniucle3f4fesf4fie4stry1dinaf4flydi3ge3dictd4icedia5bs4tops1tle5stirs3tifs4ties1ticfic4is5tias4ti_4ficsfi3cuud3ers3thefil5iste2w4filyudev45finas4tedfi2nes2talfin4ns2tagde2tode4suflin4u1dicf2ly5ud5isu5ditde1scd2es_der5sfon4tu4don5dermss4lid4erhfor4is4siede2pudepi4fra4tf5reade3pade3nufril4frol5ud4side3nou4eneuens4ug5infu5el5dem_s5setfu5nefu3rifusi4fus4s4futade5lode5if4dee_5gal_3galiga3lo2d1eds3selg5amos2s5cssas3u1ing4ganouir4mgass4gath3uita4deaf5dav5e5dav44dato4darygeez44spotspor4s4pon4gelydark5s4ply4spio4geno4genydard5ge3omg4ery5gesigeth54getoge4tydan3g4g1g2da2m2g3gergglu5dach4gh3inspil4gh4to4cutr1gi4agia5rula5bspho5g4icogien5s2pheulch42sperspa4n5spai3c4utu1lenul4gigir4lg3islcu5pycu3picu4mic3umecu2maso5vi5glasu5liagli4bg3lig5culiglo3r4ul3mctu4ru1l4og4na_c3terul1tig2ning4nio4ultug4noncta4b4c3s2cru4dul5ulsor5dgo3isum5absor5ccris4go3nic4rinson4gsona45gos_cri5fcre4vum4bi5credg4raigran25solvsoft3so4ceunat44graygre4nco5zi4gritcoz5egruf4cow5ag5stecove4cos4es5menun4ersmel44corbco4pl4gu4tco3pacon5tsman3gy5racon3ghach4hae4mhae4th5aguha3lac4onecon4aun4ims3latu2ninhan4gs3ket5colocol5ihan4kuni3vhap3lhap5ttras4co4grhar2dco5agsir5aclim45sionhas5shaun44clichaz3acle4m1head3hearun3s4s3ingun4sws2ina2s1in4silysil4eh5elohem4p4clarhena45sidiheo5r1c4l4h4eras5icc2c1itu4orsh3ernshor4h3eryci3phshon34cipecion45cinoc1ingc4inahi5anhi4cohigh5h4il2shiv5h4ina3ship3cilihir4lhi3rohir4phir4rsh3iohis4ssh1inci4lau5pia4h1l4hlan44cier5shevcia5rhmet4ch4tish1erh5ods3cho2hoge4chi2z3chitho4mahome3hon4aho5ny3hoodhoon45chiouptu44ura_ho5ruhos4esew4ihos1p1housu4ragses5tu4rasur4behree5se5shs1e4s4h1s24chedh4tarht1enht5esur4fru3rifser4os4erlhun4tsen5gur1inu3riosen4dhy3pehy3phu1ritces5tur3iz4cesa4sencur4no4iancian3i4semeia5peiass45selv5selfi4atu3centse1le4ceniib5iaib3inseg3ruros43cencib3li3cell5cel_s5edli5bun4icam5icap4icar4s4ed3secticas5i4cayiccu44iceour4pe4ced_i5cidsea5wi2cipseas4i4clyur4pi4i1cr5icrai4cryic4teictu2ccon4urti4ic4umic5uoi3curcci4ai4daiccha5ca4thscof4ide4s4casys4cliscle5i5dieid3ios4choid1itid5iui3dlei4domid3owu5sadu5sanid5uous4apied4ecany4ield3s4cesien4ei5enn4sceii1er_i3esci1estus3ciuse5as4cedscav5if4frsca4pi3fieu5siau3siccan4eiga5bcan5d4calous5sli3gibig3ilig3inig3iti4g4lus1trig3orig5oti5greigu5iig1ur2c5ah4i5i44cag4cach4ca1blusur4sat3usa5tab5utoi3legil1erilev4uta4b4butail3iail2ibil3io3sanc2ilitil2izsal4t5bustil3oqil4tyil5uru3tati4magsa5losal4m4ute_4imetbu3res3act5sack2s1ab4imitim4nii3mon4utelbumi4bu3libu4ga4inav4utenbsor42b5s2u4tis4briti3neervi4vr3vic4inga4inger3vey4ingir3ven4ingo4inguu4t1li5ni_i4niain3ioin1isbo4tor5uscrunk5both5b5ota5bos42i1no5boriino4si4not5borein3seru3in2int_ru4glbor5di5nusut5of5bor_uto5gioge4io2grbon4au5tonru3enu4touion3iio5phior3ibod3iio5thi5otiio4toi4ourbne5gb3lisrt4shblen4ip4icr3triip3uli3quar4tivr3tigrti4db4le_b5itzira4bi4racird5ert5ibi4refbi3tri4resir5gibi5ourte5oir4isr3tebr4tagbin4diro4gvac3uir5ul2b3ifis5agis3arisas52is1cis3chbi4eris3erbi5enrson3be5yor5shais3ibisi4di5sisbe3tw4is4krs3es4ismsbe5trr3secva4geis2piis4py4is1sbe3sp4bes4be5nuval5ois1teis1tirrys4rros44be5mis5us4ita_rron4i4tagrri4vi3tani3tatbe3lorri4or4reoit4esbe1libe5gu4itiarre4frre4cbe3giit3igbe3dii2tim2itio4itisrp4h4r3pet4itonr4peait5rybe3debe3dai5tudit3ul4itz_4be2dbeat3beak4ro4varo4tyros4sro5roiv5ioiv1itror3i5root1roomval1ub3berva5mo4izarva5piron4eban3ijac4qban4ebal1ajer5srom4prom4iba4geazz5i5judgay5alax4idax4ickais4aw4ly3awaya1vorav5ocav3igke5liv3el_ve4lov4elyro1feke4tyv4erdv4e2sa5vanav3ag5k2ick4illkilo5au1thk4in_4ves_ro3crkin4gve4teaun5dk5ishau4l2au3gu4kleyaugh3ve4tyk5nes1k2noat3ulkosh4at5uekro5n4k1s2at5uaat4that5te5vianat4sk5vidil4abolaci4l4adela3dylag4nlam3o3landrob3la4tosr4noular4glar3ilas4ea4topr3nivr3nita2tomr5nica4toglbin44l1c2vi5gnat3ifat1ica5tiar3neyr5net4ati_ld5isat4hol4driv2incle4bileft55leg_5leggr4nerr3nel4len_3lencr4nar1lentle3phle4prvin5dler4e3lergr3mitl4eroat5evr4mio5lesq3lessr3menl3eva4vingrma5cvio3lvi1ou4leyevi5rovi3so4l1g4vi3sulgar3l4gesate5cat5apli4agli2amr3lo4li4asr4lisli5bir4ligr2led4lics4vitil4icul3icyl3idaat5ac3lidirk4lel4iffli4flr3ket3lighvit3r4vityriv3iri2tulim3ili4moris4pl4inar3ishris4clin3ir4is_li5og4l4iqlis4pas1trl2it_as4shas5phri2pla4socask3ia3sicl3kallka4ta3sibl4lawashi4l5leal3lecl3legl3lel5riphas4abar2shrin4grin4ear4sarin4dr2inal5lowarre4l5met3rimol4modlmon42l1n2a3roorim5ilo4civo4la5rigil5ogo3loguri5et5longlon4iri1erlood5r4icolop3il3opmlora44ricir4icerib3a5los_v5oleri4agria4blos4tlo4taar2mi2loutar2izar3iolpa5bl3phal5phi4rhall3pit5voltar4im3volv2l1s2vom5ivori4l4siear4fllt5agar4fivo4rylten4vo4talth3ia3reeltis4ar4drw5ablrgo4naraw4lu3brluch4lu3cilu3enwag5olu5idlu4ma5lumia5raur5gitwait5luo3rw5al_luss4r5gisar4atl5venrgi4nara3pwar4tar3alwas4tly5mely3no2lys4l5ysewa1teaque5ma2car3gicma4clr3get5magnwed4nmaid54maldrg3erweet3wee5vwel4lapoc5re4whwest3ap3in4aphires2tr4es_mar3vre5rumas4emas1t5matemath3rero4r4eriap5atr1er4m5bilre1pumbi4vapar4a5nuran3ul4med_an3uare5lure1lian4twre5itmel4tan2trre4fy4antomen4are3fire2fe4menemen4imens4re1de3ment2r2edme5onre4awwin4g5reavme4tare3anme1tere1alm4etr3wiserdin4rdi4aan4stwith3an2span4snan2samid4amid4gan5otwl4esr4dalm4illmin4a3mindrcum3rc4itr3charcen4min4tm4inumiot4wl3ina3niumis5lan3ita3nip4mithan3ioan1gla3neuws4per2bina3nena5neem4ninw5s4tan1dl4mocrrbi4fmo2d1mo4gomois2xac5ex4agor4bagmo3mer4baba3narrau4ta5monrare4rar5cra5nor4aniam1inr2amiam5ifra4lomo3spmoth3m5ouf3mousam3icxer4ixe5roraf4tr5aclm3petra3bixhil5mpi4aam3ag3quetm5pirmp5is3quer2que_qua5vmpov5mp4tram5ab3alyz4m1s25alyt4alysa4ly_ali4exi5di5multx4ime4aldia4laral3adal5abak1enain5opu3trn4abu4nac_na4can5act5putexpe3dna4lia4i4n4naltai5lya3ic_pur4rag5ulnank4nar3c4narenar3inar4ln5arm3agognas4c4ag4l4ageupul3cage4oaga4na4gab3nautnav4e4n1b4ncar5ad5umn3chaa3ducptu4rpti3mnc1innc4itad4suad3owad4len4dain5dana5diua3ditndi4ba3dion1ditn3dizn5ducndu4rnd2we3yar4n3eara3dianeb3uac4um5neckac3ulp4siba3cio5negene4laac1inne5mine4moa3cie4nene4a2cine4poyc5erac1er2p1s2pro1tn2erepro3lner4rych4e2nes_4nesp2nest4neswpri4sycom4n5evea4carab3uln4gabn3gelpre3vpre3rycot4ng5han3gibng1inn5gitn4glangov4ng5shabi5an4gumy4erf4n1h4a5bannhab3a5bal3n4iani3anni4apni3bani4bl_us5ani5dini4erni2fip3petn5igr_ure3_un3up3per_un5op3pennin4g_un5k5nis_p5pel_un1en4ithp4ped_un1ani3tr_to4pympa3_til4n3ketnk3inyn5ic_se2ny4o5gy4onsnmet44n1n2_ru4d5pounnni4vnob4lpo4tan5ocly4ped_ro4qyper5noge4pos1s_ri4gpo4ry1p4or_res2no4mono3my_ree2po4ninon5ipoin2y4poc5po4gpo5em5pod_4noscnos4enos5tno5tayp2ta3noun_ra4cnowl3_pi2tyra5m_pi4eyr5ia_out3_oth32n1s2ns5ab_or3t_or1d_or3cplu4mnsid1nsig4y3s2eys3ion4socns4pen5spiploi4_odd5nta4bpli4n_ni4cn5tib4plignti2fpli3a3plannti4p1p2l23ysis2p3k2ys3ta_mis1nu5enpi2tun3uinp3ithysur4nu1men5umi3nu4nyt3icnu3trz5a2b_li4t_li3o_li2n_li4g_lev1_lep5_len4pion4oard3oas4e3pi1ooat5ip4inoo5barobe4l_la4mo2binpind4_ju3rob3ul_is4i_ir5rp4in_ocif3o4cil_in3so4codpi3lopi3enocre33piec5pidipi3dep5ida_in2kod3icodi3oo2do4odor3pi4cypian4_ine2o5engze3rooe4ta_im3m_id4l_hov5_hi3b_het3_hes3_go4r_gi4bpho4ro5geoo4gero3gie3phobog3it_gi5azo5ol3phizo4groogu5i4z1z22ogyn_fes3ohab5_eye55phieph1icoiff4_en3sph4ero3ing_en3go5ism_to2qans3v_el5d_eer4bbi4to3kenok5iebio5mo4lanper1v4chs_old1eol3erpe5ruo3letol4fi_du4co3liaper3op4ernp4erio5lilpe5ono5liop4encpe4la_do4tpee4do5livcin2q3pediolo4rol5pld3tabol3ub3pedeol3uno5lusedg1le1loaom5ahoma5l2p2edom2beom4bl_de3o3fich3pe4ao4met_co4ro3mia_co3ek3shao5midom1inll1fll3teapa2teo4monom3pi3pare_ca4tlue1pon4aco3nanm2an_pa4pum2en_on5doo3nenng1hoon4guon1ico3nioon1iso5niupa3nypan4ao3nou_bri2pain4ra1oronsu4rk1hopac4tpa4ceon5umonva5_ber4ood5eood5i6rks_oop3io3ordoost5rz1scope5dop1erpa4ca_ba4g_awn4_av4i_au1down5io3pito5pon1sync_as1s_as1p_as3ctch1c_ar5so5ra_ow3elo3visov4enore5auea1mor3eioun2d_ant4orew4or4guou5etou3blo5rilor1ino1rio_ang4o3riuor2miorn2eo5rofoto5sor5pe3orrhor4seo3tisorst4o3tif_an5cor4tyo5rum_al3tos3al_af1tos4ceo4teso4tano5scros2taos4poos4paz2z3wosi4ue3pai",
    6: "os3ityos3itoz3ian_os4i4ey1stroos5tilos5titxquis3_am5atot3er_ot5erso3scopor3thyweek1noth3i4ot3ic_ot5icao3ticeor3thiors5enor3ougor3ityor3icaouch5i4o5ria_ani5mv1ativore5sho5realus2er__an3teover3sov4erttot3icoviti4o5v4olow3dero4r3agow5esto4posiop3ingo5phero5phanthy3sc3operaontif5on3t4ionten45paganp3agattele2gonspi4on3omyon4odipan3elpan4tyon3keyon5est3oncil_ar4tyswimm6par5diompro5par5elp4a4ripar4isomo4gepa5terst5scrpa5thy_atom5sta1tio5miniom3icaom3ic_ss3hatsky1scpear4lom3ena_ba5naol3umer1veilpedia4ped4icolli4er1treuo5liteol3ishpeli4epe4nano5lis_pen4thol3ingp4era_r1thoup4erago3li4f_bas4er1krauperme5ol5id_o3liceper3tio3lescolass4oi3terpe5tenpe5tiz_be5raoi5son_be3smphar5iphe3nooi5letph4es_oi3deroic3esph5ingr3ial_3ognizo5g2ly1o1gis3phone5phonio5geneo4gatora3mour2amenofit4tof5itera3chupi4ciepoly1eod5dedo5cureoc3ula1pole_5ocritpee2v1param4oc3raco4clamo3chetob5ingob3a3boast5eoke1st3nu3itpi5thanuf4fentu3meoerst2o3chasplas5tn3tinepli5ernti4ernter3sntre1pn4s3esplum4bnsati4npre4cns4moonon1eqnor5abpo3et5n5lessn5oniz5pointpoly5tnon4agnk3rup3nomicng1sprno5l4inois5i4n3o2dno3blenni3aln5keroppa5ran3itor3nitionis4ta5nine_ni3miznd3thrmu2dron3geripray4e5precipre5copre3emm3ma1bpre4lan5gerep3rese3press_can5cmedi2c5pri4e_ce4la3neticpris3op3rocal3chain4er5ipros3en4erarnera5bnel5iz_cit5rne4gatn5d2ifpt5a4bjanu3aign4itn3chisn5chiln5cheon4ces_nau3seid4iosna3talnas5tinan4itnanci4na5mitna5liahnau3zput3er2n1a2bhex2a3hatch1multi3hair1sm4pousg1utanmpo3rim4p1inmp5iesmphas4rach4empar5iraf5figriev1mpara5mo5seyram3et4mora_rane5oran4gemo3ny_monol4rap3er3raphymo3nizgno5morar5ef4raril1g2nacg1leadmoni3ara5vairav3elra5ziemon5gemon5etght1wemoi5sege3o1dmma5ryr5bine3fluoren1dixmis4ti_de3ra_de3rie3chasrch4err4ci4bm4inglm5ineedu2al_3miliame3tryrdi4er_des4crd3ingdi2rerme5thimet3alre5arr3mestim5ersadi2rende2ticdes3icre4cremen4temensu5re3disred5itre4facmen4dede2mosmen5acmem1o3reg3ismel5onm5e5dyme3died2d5ibren4te5mediare5pindd5a5bdata1bmba4t5cle4arma3tisma5scemar4lyre4spichs3huma5riz_dumb5re3strre4terbrus4qre3tribio1rhre5utiman3izre4valrev3elbi1orbbe2vie_eas3ire5vilba1thyman5is5maniamal4tymal4lima5linma3ligmag5inav3ioul5vet4rg3inglus3teanti1dl5umn_ltur3a_el3emltera4ltane5lp5ingloun5dans5gra2cabllos5etlor5ouric5aslo5rie_enam35ricidri4cie5lope_rid5erri3encri3ent_semi5lom3errig5an3logicril3iz5rimanlob5allm3ingrim4pell5out5rina__er4ril5linal2lin4l3le4tl3le4nriph5eliv3er_ge5og_han5k_hi3er_hon3olin3ea1l4inel4im4p_idol3_in3ci_la4cy_lath5rit3iclim4blrit5urriv5elriv3et4l4i4lli4gra_leg5elif3errk4linlid5er4lict_li4cor5licioli4atorl5ish_lig5a_mal5o_man5a_mer3c5less_rm5ersrm3ingy3thinle5sco3l4erilera5b5lene__mon3ele4matld4erild4erela4v4ar1nis44lativ_mo3rola5tanlan4telan5etlan4dllab3ic_mu5takin4dek3est_ro5filk3en4dro5ker5role__of5te4jestyys3icaron4al5izont_os4tlron4tai4v3ot_pe5tero3pelrop3ici5voreiv5il__pio5n_pre3mro4the_ran4tiv3en_rov5eliv3ellit3uati4tramr5pentrp5er__rit5ui4tismrp3ingit5ill_ros5tit3ica4i2tici5terirre4stit3era4ita5mita4bi_row5dist4lyis4ta_is4sesrsa5tiissen4is4sal_sci3erse4crrs5er_islan4rse5v2yo5netish5opis3honr4si4bis5han5iron_ir4minrtach4_self5iri3turten4diri5dei4rel4ire4de_sell5r4tieriq3uidrtil3irtil4lr4tilyr4tistiq5uefip4re4_sing4_ting4yn3chrru3e4lion3at2in4th_tin5krum3pli4no4cin3ityrun4ty_ton4aruti5nymbol5rvel4i_top5irv5er_r5vestin5geni5ness_tou5s_un3cein3cerincel45ryngei4n3auim3ulai5miniimi5lesac3riim5ida_ve5rasalar4ima5ryim3ageill5abil4istsan4deila5rai2l5am_wil5ii4ladeil3a4bsa5voright3iig3eraab5erd4ific_iff5enif5eroi3entiien5a45ie5gaidi5ou3s4cieab5latidi4arid5ianide3al4scopyab5rogid5ancic3ulaac5ardi2c5ocic3ipaic5inase2c3oi4carai4car_se4d4ei2b5riib5iteib5it_ib5ertib3eraac5aroi4ativ4ian4tse4molsen5ata5ceouh4warts5enedhus3t4s5enin4sentd4sentlsep3a34s1er_hun5kehu4min4servohro3poa5chethov5el5se5umhouse3sev3enho5senhort3eho5rishor5at3hol4ehol5arh5odizhlo3riac5robhis3elhion4ehimer4het4edsh5oldhe2s5ph5eroushort5here5aher4bahera3p3side_5sideshen5atsi5diz4signahel4lyact5ifhe3l4ihe5do55sine_h5ecathe4canad4dinsion5aad5er_har4lehard3e3sitioha5rasha3ranhan4tead3icahang5oadi4ersk5inesk5ing5hand_han4cyhan4cislith5hala3mh3ab4lsmall32g5y3n5gui5t3guard5smithad5ranaeri4eag5ellag3onia5guerso4labsol3d2so3licain5in4grada3s4on_gor5ougo5rizgondo5xpan4dait5ens5ophyal3end3g4o4ggnet4tglad5i5g4insgin5ge3g4in_spen4d2s5peog3imen5gies_3spher5giciagh5outsp5ingge5nizge4natge5lizge5lisgel4inxi5miz4gativgar5n4a5le5oga3nizgan5isga5mets5sengs4ses_fu4minfres5cfort5assi4erss5ilyfore5tfor5ayfo5ratal4ia_fon4dessur5aflo3ref5lessfis4tif1in3gstam4i5stands4ta4p5stat_fin2d5al5levs5tero4allicstew5afight5fi5del5ficie5ficiafi3cer5stickf3icena5log_st3ingf3icanama5ra5stockstom3a5stone2f3ic_3storef2f5iss4tradam5ascs4trays4tridf5fin_fend5efeath3fault5fa3thefar5thfam5is4fa4mafall5eew3inge5verbeven4ie5vengevel3oev3ellev5asteva2p5euti5let5roset3roget5rifsy5rinet3ricet5onaam5eraam5ilyami4noamor5ieti4noe5tidetai5loethod3eten4dtal5enes5urramp5enan3ageta5loge5strotan4detanta3ta5pere3ston4es2toes5times3tigta3rizestan43analy4taticta4tures4prean3arces3pertax4ises5onaes3olue5skintch5etanar4ies4i4ntead4ie2s5ima3natiande4sesh5enan3disan4dowang5iete5geres5ences5ecres5cana4n1icte2ma2tem3at3tenanwrita45erwau4tenesert3era3nieser3set5erniz4erniter4nis5ter3de4rivaan3i3fter3isan4imewo5vener3ineeri4ere3rient3ess_teth5e5ericke1ria4er3ester5esser3ent4erenea5nimier5enaer3emoth3easthe5atthe3iser5el_th5ic_th5icaere3in5thinkere5coth5odea5ninee3realan3ishan4klier4che5anniz4erandti4atoanoth5equi3lep5utat4ic1uan4scoe4probep3rehe4predans3poe4precan4surantal4e3penttim5ulep5anceo5rol3tine_eop3aran4tiewin4deap5eroen3ishen5icsen3etren5esten5esien5eroa3pheren3dicap3itae4nanten5amoem5ulaa3pituti3zen5emnize5missem5ishap5olaem5ine3tles_t5let_em1in2apor5iem3icaem5anael3op_el4labapos3te3liv3el5ishaps5esweath3e3lierel3icaar3actwa5verto3nate3libee4l1erel3egato3rietor5iza5radeelaxa4aran4gto3warelan4dej5udie5insttra5chtraci4ar5av4wa5gere5git5arbal4ar5easeg5ing4voteetrem5iar3enta5ressar5ial4tricsvor5abe3finetro5mitron5i4tronyar3iantro3sp5eficia3rieted5uloed3icae4d1erec3ulaec4tane4cremeco5roec3orae4concar5o5de4comme4cluse4clame5citeec5ifya5ronias3anta5sia_tu4nis2t3up_ecan5ce4belstur3ise4bel_eav3ene4a3tue5atifeath3ieat5eneart3eear4ilear4icear5eseam3ereal3oueal5erea5geread5iedum4be4ducts4duct_duc5eras3tenasur5adrea5rat3abl4d5outdo3natdom5izdo5lor4dlessu4bero3dles_at3alou3ble_d4is3tdirt5idi5niz3dine_at5ech5di3endi4cam1d4i3ad3ge4tud5estdev3ilde3strud3iedud3iesdes3tide2s5oat3egovis3itde4nardemor5at3en_uen4teuer4ilde5milat3eraugh3en3demicater5nuil5izdeli4ede5comde4cildecan4de4bonv3io4rdeb5it4dativ2d3a4bat3estu5laticu4tie5ulcheul3dercuss4icu5riaath5em3cultua5thenul3ingul5ishul4lar4vi4naul4liscu5ityctim3ic4ticuuls5esc5tantultra3ct5angcros4ecrop5ocro4pl5critiath5omum4blycre3at5vilitumor5oat5i5b5crat_cras5tcoro3ncop3iccom5ercol3orun5ishco3inc5clareat3ituunt3abat5ropun4tescit3iz4cisti4cista4cipicc5ing_cin3em3cinatuper5s5videsup3ingci2a5b5chini5videdupt5ib5vide_at4tag4ch1inch3ersch3er_ch5ene3chemiche5loure5atur4fercheap3vi5aliat3uravet3er4ch3abc5e4taau5sib3cessives4tece5ram2cen4e4cedenccou3turs5erur5tesur3theaut5enur4tiecav5al4cativave4nover3thcar5omca5percan4tycan3izcan5iscan4icus4lin3versecal4laver3ieca3latca5dencab3in3butiobuss4ebus5iebunt4iv4eresuten4i4u1t2iv3erenu3tineut3ingv4erelbroth35u5tizbound34b1orabon5at5vere_bom4bibol3icblun4t5blespblath5av3erav5enuebi3ogrbi5netven3om2v1a4bvac5ilbi3lizbet5izbe5strva5liebe5nigbbi4nabas4siva5nizbari4aav5ernbarbi5av5eryvel3liazi4eravi4er",
    7: "_dri5v4ban5dagvar5iedbina5r43bi3tio3bit5ua_ad4derution5auti5lizver5encbuf4ferus5terevermi4ncall5incast5ercas5tigccompa5z3o1phros5itiv5chanicuri4fico5stati5chine_y5che3dupport54v3iden5cific_un4ter_at5omiz4oscopiotele4g5craticu4m3ingv3i3liz4c3retaul4li4bcul4tiscur5a4b4c5utiva5ternauiv4er_del5i5qdem5ic_de4monsdenti5fdern5izdi4latou4b5ingdrag5on5drupliuar5ant5a5si4tec5essawo4k1enec5ifiee4compear5inate4f3eretro5phewide5sp5triciatri5cesefor5ese4fuse_oth5esiar5dinear4chantra5ventrac4tetrac4itar5ativa5ratioel5ativor5est_ar5adisel5ebraton4alie4l5ic_wea5rieel5igibe4l3ingto5cratem5igraem3i3niemoni5oench4erwave1g4a4pillavoice1ption5eewill5inent5age4enthesvaude3vtill5inep5recaep5ti5bva6guer4erati_tho5rizthor5it5thodicer5ence5ternitteri5zater5iesten4tage4sage_e4sagese4sert_an5est_e4sertse4servaes5idenes5ignaesis4tees5piraes4si4btal4lisestruc5e5titioounc5erxe4cutota5bleset5itiva4m5atoa4matis5stratu4f3ical5a5lyst4ficatefill5instern5isspend4gani5zasqual4la4lenti4g3o3nas5ophiz5sophicxpecto55graph_or5angeuri4al_4graphy4gress_smol5d4hang5erh5a5nizharp5enhar5terhel4lishith5erhro5niziam5eteia4tricic4t3uascour5au2r1al_5scin4dover4nescan4t55sa3tiou5do3ny_ven4de_under5ty2p5al_anti5sylla5bliner4arturn3ari5nite_5initioinsur5aion4eryiphras4_tim5o5_ten5an_sta5blrtroph4_se5rieiq3ui3t5i5r2izis5itiviso5mer4istral5i5ticki2t5o5mtsch3ie_re5mittro3fiti4v3er_i4vers_ros5per_pe5titiv3o3ro_ped5alro5n4is_or5ato4jestierom5ete_muta5bk5iness4latelitr4ial__mist5i_me5terr4ming_lev4er__mar5tilev4eralev4ers_mag5a5liar5iz5ligaterit5ers_lat5errit5er_r5ited__im5pinri3ta3blink5er_hon5ey5litica_hero5ior5aliz_hand5irip5lic_gen3t4tolo2gylloqui5_con5grt1li2erbad5ger4operag_eu4lertho3donter2ic__ar4tie_ge4ome_ge5ot1_he3mo1_he3p6a_he3roe_in5u2tpara5bl5tar2rht1a1mintalk1a5ta3gon_par5age_aster5_ne6o3f_noe1thstyl1is_poly1s5pathic_pre1ampa4tricl3o3niz_sem4ic_semid6_semip4_semir45ommend_semiv4lea4s1a_spin1oom5etryspher1o_to6poglo4ratospe3cio3s2paceso2lute_we2b1l_re1e4ca5bolicom5erseaf6fishside5swanal6ysano5a2cside5stl5ties_5lumniasid2ed_anti1reshoe1stscy4th1s4chitzsales5wsales3cat6tes_augh4tlau5li5fom5atizol5ogizo5litiorev5olure5vertre5versbi5d2ifbil2lab_earth5pera5blro1tronro3meshblan2d1blin2d1blon2d2bor1no5ro1bot1re4ti4zr5le5quperi5stper4malbut2ed_but4tedcad5e1moist5enre5stalress5ibchie5vocig3a3roint5er4matizariv1o1lcous2ticri3tie5phisti_be5stoog5ativo2g5a5rr3a3digm4b3ingre4posir4en4tade4als_od5uctsquasis6quasir6re5fer_p5trol3rec5olldic1aiddif5fra3pseu2dr5ebrat5metric2d1lead2d1li2epro2g1epre1neuod5uct_octor5apoin3came5triem5i5liepli5narpara3memin5glim5inglypi4grappal6matmis4er_m5istryeo3graporth1riop1ism__but4tio3normaonom1icfeb1ruafermi1o_de4moio5a5lesodit1icodel3lirb5ing_gen2cy_n4t3ingmo5lestration4get2ic_4g1lishobli2g1mon4ismnsta5blmon4istg2n1or_nov3el3ns5ceivno1vembmpa5rabno4rarymula5r4nom1a6lput4tinput4tedn5o5miz_cam4penag5er_nge5nesh2t1eoun1dieck2ne1skiifac1etncour5ane3backmono1s6mono3chmol1e5cpref5ac3militapre5tenith5i2lnge4n4end5est__capa5bje1re1mma1la1ply5styr1kovian_car5olprin4t3lo2ges_l2l3ishprof5it1s2tamp",
    8: "lead6er_url5ing_ces5si5bch5a5nis1le1noidlith1o5g_chill5ilar5ce1nym5e5trych5inessation5arload4ed_load6er_la4c3i5elth5i2lyneg5ativ1lunk3erwrit6er_wrap3arotrav5es51ke6linga5rameteman3u1scmar1gin1ap5illar5tisticamedio6c1me3gran3i1tesima3mi3da5bves1titemil2l1agv1er1eigmi6n3is_1verely_e4q3ui3s5tabolizg5rapher5graphicmo5e2lasinfra1s2mon4ey1lim3ped3amo4no1enab5o5liz_cor5nermoth4et2m1ou3sinm5shack2ppo5sitemul2ti5uab5it5abimenta5rignit1ernato5mizhypo1thani5ficatuad1ratu4n5i4an_ho6r1ic_ua3drati5nologishite3sidin5dling_trib5utin5glingnom5e1non1o1mistmpos5itenon1i4so_re5stattro1p2istrof4ic_g2norespgnet1ism5glo5binlem5aticflow2er_fla1g6elntrol5lifit5ted_treach1etra1versl5i5ticso3mecha6_for5mer_de5rivati2n3o1me3spac6i2t3i4an_thy4l1antho1k2er_eq5ui5to4s3phertha4l1amt3ess2es3ter1geiou3ba3dotele1r6ooxi6d1iceli2t1isonspir5apar4a1leed1ulingea4n3iesoc5ratiztch3i1er_kil2n3ipi2c1a3dpli2c1abt6ap6athdrom3e5d_le6icesdrif2t1a_me4ga1l1prema3cdren1a5lpres2plipro2cess_met4ala3do5word1syth3i2_non1e2m_post1ampto3mat4rec5ompepu5bes5cstrib5utqu6a3si31stor1ab_sem6is4star3tliqui3v4arr1abolic_sph6in1de5clar12d3aloneradi1o6gs3qui3tosports3wsports3cra5n2hascro5e2cor3bin1gespokes5wspi2c1il_te3legrcroc1o1d_un3at5t_dictio5cat1a1s2buss4ingbus6i2esbus6i2erbo2t1u1lro5e2las1s2pacinb1i3tivema5rine_r3pau5li_un5err5r5ev5er__vi2c3arback2er_ma5chinesi5resid5losophyan3ti1n2sca6p1ersca2t1olar2rangesep3temb1sci2uttse3mes1tar3che5tsem1a1ph",
    9: "re4t1ribuuto5maticl3chil6d1a4pe5able1lec3ta6bas5ymptotyes5ter1yl5mo3nell5losophizlo1bot1o1c5laratioba6r1onierse1rad1iro5epide1co6ph1o3nscrap4er_rec5t6angre2c3i1prlai6n3ess1lum5bia_3lyg1a1miec5ificatef5i5nites2s3i4an_1ki5neticjapan1e2smed3i3cinirre6v3ocde2c5linao3les3termil5li5listrat1a1gquain2t1eep5etitiostu1pi4d1v1oir5du1su2per1e6_mi1s4ers3di1methy_mim5i2c1i5nitely_5maph1ro15moc1ra1tmoro6n5isdu1op1o1l_ko6r1te1n3ar4chs_phi2l3ant_ga4s1om1teach4er_parag6ra4o6v3i4an_oth3e1o1sn3ch2es1to5tes3toro5test1eror5tively5nop5o5liha2p3ar5rttrib1ut1_eth1y6l1e2r3i4an_5nop1oly_graph5er_5eu2clid1o1lo3n4omtrai3tor1_ratio5na5mocratiz_rav5en1o",
    10: "se1mi6t5ic3tro1le1um5sa3par5iloli3gop1o1am1en3ta5bath3er1o1s3slova1kia3s2og1a1myo3no2t1o3nc2tro3me6c1cu2r1ance5noc3er1osth1o5gen1ih3i5pel1a4nfi6n3ites_ever5si5bs2s1a3chu1d1ri3pleg5_ta5pes1trproc3i3ty_s5sign5a3b3rab1o1loiitin5er5arwaste3w6a2mi1n2ut1erde3fin3itiquin5tes5svi1vip3a3r",
    11: "pseu3d6o3f2s2t1ant5shimi1n2ut1estpseu3d6o3d25tab1o1lismpo3lyph1onophi5lat1e3ltravers3a3bschro1ding12g1o4n3i1zat1ro1pol3it3trop1o5lis3trop1o5lesle3g6en2dreeth1y6l1eneor4tho3ni4t",
    12: "3ra4m5e1triz1e6p3i3neph1"
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */


function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function (expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function (expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },
    "class": function (expectation) {
      var escapedParts = "",
          i;

      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
      }

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },
    any: function (expectation) {
      return "any character";
    },
    end: function (expectation) {
      return "end of input";
    },
    other: function (expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function classEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i,
        j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }

      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},
      peg$startRuleFunctions = {
    document: peg$parsedocument
  },
      peg$startRuleFunction = peg$parsedocument,
      peg$c0 = function () {
    g.startBalanced();
    g.enterGroup();
    return true;
  },
      peg$c1 = function (pars) {
    g.exitGroup();
    g.endBalanced() || error("groups need to be balanced!");
    g.createDocument(pars);
    return g;
  },
      peg$c2 = function (b, p) {
    b && g.break();
    return g.create(g.paragraph, p);
  },
      peg$c3 = function (e) {
    g.continue();
    return e;
  },
      peg$c4 = function () {
    return g.create(g.linebreak);
  },
      peg$c5 = peg$otherExpectation("text"),
      peg$c6 = function () {
    return undefined;
  },
      peg$c7 = function (p) {
    return g.createText(p.join(""));
  },
      peg$c8 = function () {
    g.enterGroup();
    return true;
  },
      peg$c9 = function (s) {
    return g.createText(s);
  },
      peg$c10 = function () {
    return !g.isBalanced() && g.exitGroup();
  },
      peg$c11 = peg$otherExpectation("primitive"),
      peg$c12 = function () {
    return g.sp;
  },
      peg$c13 = function (b) {
    return !g.isBalanced();
  },
      peg$c14 = function (b) {
    return b;
  },
      peg$c15 = function (c) {
    return c;
  },
      peg$c16 = peg$otherExpectation("symbol macro"),
      peg$c17 = function (name) {
    return g.hasSymbol(name);
  },
      peg$c18 = function (name) {
    return g.getSymbol(name);
  },
      peg$c19 = peg$otherExpectation("identifier"),
      peg$c20 = "_",
      peg$c21 = peg$literalExpectation("_", false),
      peg$c22 = ":",
      peg$c23 = peg$literalExpectation(":", false),
      peg$c24 = peg$otherExpectation("mandatory argument"),
      peg$c25 = function () {
    g.enterGroup();
    g.startBalanced();
    return true;
  },
      peg$c26 = function (s, p) {
    g.endBalanced() || error("groups inside an argument need to be balanced!");
    g.exitGroup() || error("there was no group to end");
    s != undefined && p.unshift(g.createText(s));
    return g.createFragment(p);
  },
      peg$c27 = peg$otherExpectation("optional argument"),
      peg$c28 = function () {
    g.startBalanced();
    return true;
  },
      peg$c29 = function (p) {
    return g.isBalanced();
  },
      peg$c30 = function (p) {
    g.endBalanced();
    return g.createFragment(p);
  },
      peg$c31 = function (m) {
    return m;
  },
      peg$c32 = function (m) {
    g.break();
    return m;
  },
      peg$c33 = "part",
      peg$c34 = peg$literalExpectation("part", false),
      peg$c35 = "chapter",
      peg$c36 = peg$literalExpectation("chapter", false),
      peg$c37 = "section",
      peg$c38 = peg$literalExpectation("section", false),
      peg$c39 = "subsection",
      peg$c40 = peg$literalExpectation("subsection", false),
      peg$c41 = "subsubsection",
      peg$c42 = peg$literalExpectation("subsubsection", false),
      peg$c43 = "paragraph",
      peg$c44 = peg$literalExpectation("paragraph", false),
      peg$c45 = "subparagraph",
      peg$c46 = peg$literalExpectation("subparagraph", false),
      peg$c47 = "addvspace",
      peg$c48 = peg$literalExpectation("addvspace", false),
      peg$c49 = "small",
      peg$c50 = peg$literalExpectation("small", false),
      peg$c51 = "med",
      peg$c52 = peg$literalExpectation("med", false),
      peg$c53 = "big",
      peg$c54 = peg$literalExpectation("big", false),
      peg$c55 = "break",
      peg$c56 = peg$literalExpectation("break", false),
      peg$c57 = "begin",
      peg$c58 = peg$literalExpectation("begin", false),
      peg$c59 = "end",
      peg$c60 = peg$literalExpectation("end", false),
      peg$c61 = "item",
      peg$c62 = peg$literalExpectation("item", false),
      peg$c63 = peg$otherExpectation("user-defined hmode macro"),
      peg$c64 = function (name) {
    return g.hasMacro(name);
  },
      peg$c65 = "*",
      peg$c66 = peg$literalExpectation("*", false),
      peg$c67 = function (name, starred, o) {
    return {
      optional: true,
      value: o
    };
  },
      peg$c68 = function (name, starred, m) {
    return {
      mandatory: true,
      value: m
    };
  },
      peg$c69 = function (name, starred, args, s) {
    var node = g.processMacro(name, starred != undefined, args);

    if (s != undefined) {
      if (node == undefined) node = g.createText(s);else node = g.createFragment([node, g.createText(s)]);
    }

    return node;
  },
      peg$c70 = function (m) {
    error("unknown macro: " + m);
  },
      peg$c71 = "tableofcontents",
      peg$c72 = peg$literalExpectation("tableofcontents", false),
      peg$c73 = function () {},
      peg$c74 = function (s, t) {
    return g.create(g.part, t);
  },
      peg$c75 = function (s, t) {
    return g.create(g.chapter, t);
  },
      peg$c76 = function (s, t) {
    return g.create(g.section, t);
  },
      peg$c77 = function (s, t) {
    return g.create(g.subsection, t);
  },
      peg$c78 = function (s, t) {
    return g.create(g.subsubsection, t);
  },
      peg$c79 = function (s, t) {
    return g.create(g.subparagraph, t);
  },
      peg$c80 = "text",
      peg$c81 = peg$literalExpectation("text", false),
      peg$c82 = "rm",
      peg$c83 = peg$literalExpectation("rm", false),
      peg$c84 = "sf",
      peg$c85 = peg$literalExpectation("sf", false),
      peg$c86 = "tt",
      peg$c87 = peg$literalExpectation("tt", false),
      peg$c88 = function (f) {
    g.enterGroup();
    g.setFontFamily(f);
    return true;
  },
      peg$c89 = function (f, a) {
    g.exitGroup();
    return a;
  },
      peg$c90 = "md",
      peg$c91 = peg$literalExpectation("md", false),
      peg$c92 = "bf",
      peg$c93 = peg$literalExpectation("bf", false),
      peg$c94 = function (w) {
    g.enterGroup();
    g.setFontWeight(w);
    return true;
  },
      peg$c95 = function (w, a) {
    g.exitGroup();
    return a;
  },
      peg$c96 = "up",
      peg$c97 = peg$literalExpectation("up", false),
      peg$c98 = "it",
      peg$c99 = peg$literalExpectation("it", false),
      peg$c100 = "sl",
      peg$c101 = peg$literalExpectation("sl", false),
      peg$c102 = "sc",
      peg$c103 = peg$literalExpectation("sc", false),
      peg$c104 = function (s) {
    g.enterGroup();
    g.setFontShape(s);
    return true;
  },
      peg$c105 = function (s, a) {
    g.exitGroup();
    return a;
  },
      peg$c106 = "textnormal",
      peg$c107 = peg$literalExpectation("textnormal", false),
      peg$c108 = function () {
    g.enterGroup();
    g.setFontFamily("rm");
    g.setFontWeight("md");
    g.setFontShape("up");
    return true;
  },
      peg$c109 = function (a) {
    g.exitGroup();
    return a;
  },
      peg$c110 = "underline",
      peg$c111 = peg$literalExpectation("underline", false),
      peg$c112 = function () {
    g.enterGroup();
    g.setTextDecoration("underline");
    return true;
  },
      peg$c113 = "emph",
      peg$c114 = peg$literalExpectation("emph", false),
      peg$c115 = function (a) {
    return g.create(g.emph, a);
  },
      peg$c116 = "family",
      peg$c117 = peg$literalExpectation("family", false),
      peg$c118 = function (f) {
    g.setFontFamily(f);
  },
      peg$c119 = "series",
      peg$c120 = peg$literalExpectation("series", false),
      peg$c121 = function (w) {
    g.setFontWeight(w);
  },
      peg$c122 = "shape",
      peg$c123 = peg$literalExpectation("shape", false),
      peg$c124 = function (s) {
    g.setFontShape(s);
  },
      peg$c125 = "normalfont",
      peg$c126 = peg$literalExpectation("normalfont", false),
      peg$c127 = function () {
    g.setFontFamily("rm");
    g.setFontWeight("md");
    g.setFontShape("up");
  },
      peg$c128 = "tiny",
      peg$c129 = peg$literalExpectation("tiny", false),
      peg$c130 = "scriptsize",
      peg$c131 = peg$literalExpectation("scriptsize", false),
      peg$c132 = "footnotesize",
      peg$c133 = peg$literalExpectation("footnotesize", false),
      peg$c134 = "normalsize",
      peg$c135 = peg$literalExpectation("normalsize", false),
      peg$c136 = "large",
      peg$c137 = peg$literalExpectation("large", false),
      peg$c138 = "Large",
      peg$c139 = peg$literalExpectation("Large", false),
      peg$c140 = "LARGE",
      peg$c141 = peg$literalExpectation("LARGE", false),
      peg$c142 = "huge",
      peg$c143 = peg$literalExpectation("huge", false),
      peg$c144 = "Huge",
      peg$c145 = peg$literalExpectation("Huge", false),
      peg$c146 = function (s) {
    g.setFontSize(s);
  },
      peg$c147 = "em",
      peg$c148 = peg$literalExpectation("em", false),
      peg$c149 = function () {
    g.setFontShape("em");
  },
      peg$c150 = "centering",
      peg$c151 = peg$literalExpectation("centering", false),
      peg$c152 = function () {
    g.setAlignment("center");
  },
      peg$c153 = "raggedright",
      peg$c154 = peg$literalExpectation("raggedright", false),
      peg$c155 = function () {
    g.setAlignment("flushleft");
  },
      peg$c156 = "raggedleft",
      peg$c157 = peg$literalExpectation("raggedleft", false),
      peg$c158 = function () {
    g.setAlignment("flushright");
  },
      peg$c159 = "vspace",
      peg$c160 = peg$literalExpectation("vspace", false),
      peg$c161 = function (l) {
    return g.createVSpaceInline(l);
  },
      peg$c162 = function (l) {
    return g.createVSpace(l);
  },
      peg$c163 = "skip",
      peg$c164 = peg$literalExpectation("skip", false),
      peg$c165 = function (s) {
    return g.createVSpaceSkipInline(s + "skip");
  },
      peg$c166 = function (s) {
    return g.createVSpaceSkip(s + "skip");
  },
      peg$c167 = "hspace",
      peg$c168 = peg$literalExpectation("hspace", false),
      peg$c169 = function (l) {
    return g.createHSpace(l);
  },
      peg$c170 = "pt",
      peg$c171 = peg$literalExpectation("pt", false),
      peg$c172 = "mm",
      peg$c173 = peg$literalExpectation("mm", false),
      peg$c174 = "cm",
      peg$c175 = peg$literalExpectation("cm", false),
      peg$c176 = "in",
      peg$c177 = peg$literalExpectation("in", false),
      peg$c178 = "ex",
      peg$c179 = peg$literalExpectation("ex", false),
      peg$c180 = function (u) {
    return u;
  },
      peg$c181 = function (l, u) {
    return l + u;
  },
      peg$c182 = function (l) {
    return l;
  },
      peg$c183 = "#",
      peg$c184 = peg$literalExpectation("#", false),
      peg$c185 = "&",
      peg$c186 = peg$literalExpectation("&", false),
      peg$c187 = "%",
      peg$c188 = peg$literalExpectation("%", false),
      peg$c189 = function () {
    return "%";
  },
      peg$c190 = peg$anyExpectation(),
      peg$c191 = function () {
    error("illegal char in url given");
  },
      peg$c192 = "url",
      peg$c193 = peg$literalExpectation("url", false),
      peg$c194 = function (c) {
    return c;
  },
      peg$c195 = function (url) {
    return g.create(g.link(url.join("")), [g.createText(url.join(""))]);
  },
      peg$c196 = "href",
      peg$c197 = peg$literalExpectation("href", false),
      peg$c198 = function (url, txt) {
    return g.create(g.link(url.join("")), txt);
  },
      peg$c199 = "hyperref",
      peg$c200 = peg$literalExpectation("hyperref", false),
      peg$c201 = peg$otherExpectation("\\begin"),
      peg$c202 = function (b) {
    b && g.break();
  },
      peg$c203 = peg$otherExpectation("\\end"),
      peg$c204 = function (id) {
    return id;
  },
      peg$c205 = peg$otherExpectation("environment"),
      peg$c206 = function (e, id) {
    // each environment has to return a json object: { name: <name in begin>, node: <content node> }
    if (e.name != id) error("environment <b>" + e.name + "</b> is missing its end, found " + id + " instead");
    g.endBalanced() || error(e.name + ": groups need to be balanced in environments!");
    g.exitGroup() || error("there was no group to end");
    return e.node;
  },
      peg$c207 = function (e) {
    error("unknown environment: " + e);
  },
      peg$c208 = peg$otherExpectation("list environment"),
      peg$c209 = "itemize",
      peg$c210 = peg$literalExpectation("itemize", false),
      peg$c211 = "enumerate",
      peg$c212 = peg$literalExpectation("enumerate", false),
      peg$c213 = "description",
      peg$c214 = peg$literalExpectation("description", false),
      peg$c215 = function (name, items) {
    let list, item, term;

    if (name === "itemize") {
      list = g.unorderedList;
      item = g.listitem;
    } else if (name === "enumerate") {
      list = g.orderedList;
      item = g.listitem;
    } else {
      list = g.descriptionList;
      item = g.description;
      term = g.term;
    }

    return {
      name: name,
      node: g.create(list, items.map(function (item_pwtext) {
        // this is the paragraph_with_linebreak fragment
        let itemtext = item_pwtext[1].map(function (text) {
          return text[1];
        });

        if (term) {
          var dt = g.create(term, item_pwtext[0]);
          var dd = g.create(item, itemtext);
          return g.createFragment([dt, dd]);
        } // TODO: giving an item in an (un)ordered list is not supported...


        itemtext.unshift(item_pwtext[0]);
        return g.create(item, itemtext);
      }))
    };
  },
      peg$c216 = function (og) {
    return og;
  },
      peg$c217 = "flushleft",
      peg$c218 = peg$literalExpectation("flushleft", false),
      peg$c219 = "flushright",
      peg$c220 = peg$literalExpectation("flushright", false),
      peg$c221 = "center",
      peg$c222 = peg$literalExpectation("center", false),
      peg$c223 = function (align) {
    g.setAlignment(align);
    return true;
  },
      peg$c224 = function (align, p) {
    return {
      name: align,
      node: g.create(g.block, p)
    };
  },
      peg$c225 = "tabular",
      peg$c226 = peg$literalExpectation("tabular", false),
      peg$c227 = function (name, s, wpc) {// return {
    //     name: name,
    //     node:
    // }
  },
      peg$c228 = "l",
      peg$c229 = peg$literalExpectation("l", false),
      peg$c230 = "c",
      peg$c231 = peg$literalExpectation("c", false),
      peg$c232 = "r",
      peg$c233 = peg$literalExpectation("r", false),
      peg$c234 = "|",
      peg$c235 = peg$literalExpectation("|", false),
      peg$c236 = "@{",
      peg$c237 = peg$literalExpectation("@{", false),
      peg$c238 = "}",
      peg$c239 = peg$literalExpectation("}", false),
      peg$c240 = "p",
      peg$c241 = peg$literalExpectation("p", false),
      peg$c242 = "*{",
      peg$c243 = peg$literalExpectation("*{", false),
      peg$c244 = "onecolumn",
      peg$c245 = peg$literalExpectation("onecolumn", false),
      peg$c246 = "twocolumn",
      peg$c247 = peg$literalExpectation("twocolumn", false),
      peg$c248 = "multicols",
      peg$c249 = peg$literalExpectation("multicols", false),
      peg$c250 = function (name, c, o) {
    return {
      cols: c,
      pre: o
    };
  },
      peg$c251 = function (name) {
    error("multicols error, required syntax: \\begin{multicols}{number}[pretext][premulticols size]");
  },
      peg$c252 = function (name, conf, pars) {
    var node = g.create(g.multicols(conf.cols), g.createFragment(pars));
    return {
      name: name,
      node: g.createFragment([conf.pre, node])
    };
  },
      peg$c253 = peg$otherExpectation("comment environment"),
      peg$c254 = "\\begin",
      peg$c255 = peg$literalExpectation("\\begin", false),
      peg$c256 = "{comment}",
      peg$c257 = peg$literalExpectation("{comment}", false),
      peg$c258 = function () {
    g.break();
    return undefined;
  },
      peg$c259 = "\\end",
      peg$c260 = peg$literalExpectation("\\end", false),
      peg$c261 = function (m) {
    return g.parseMath(m, false);
  },
      peg$c262 = function (m) {
    return g.parseMath(m, true);
  },
      peg$c263 = "par",
      peg$c264 = peg$literalExpectation("par", false),
      peg$c265 = "plus",
      peg$c266 = peg$literalExpectation("plus", false),
      peg$c267 = "minus",
      peg$c268 = peg$literalExpectation("minus", false),
      peg$c269 = "\\",
      peg$c270 = peg$literalExpectation("\\", false),
      peg$c271 = "{",
      peg$c272 = peg$literalExpectation("{", false),
      peg$c273 = peg$otherExpectation("math"),
      peg$c274 = "$",
      peg$c275 = peg$literalExpectation("$", false),
      peg$c276 = peg$otherExpectation("parameter"),
      peg$c277 = "^",
      peg$c278 = peg$literalExpectation("^", false),
      peg$c279 = "\0",
      peg$c280 = peg$literalExpectation("\0", false),
      peg$c281 = peg$otherExpectation("EOF"),
      peg$c282 = peg$otherExpectation("newline"),
      peg$c283 = "\r",
      peg$c284 = peg$literalExpectation("\r", false),
      peg$c285 = "\n",
      peg$c286 = peg$literalExpectation("\n", false),
      peg$c287 = "\r\n",
      peg$c288 = peg$literalExpectation("\r\n", false),
      peg$c289 = peg$otherExpectation("whitespace"),
      peg$c290 = /^[ \t]/,
      peg$c291 = peg$classExpectation([" ", "\t"], false, false),
      peg$c292 = peg$otherExpectation("comment"),
      peg$c293 = peg$otherExpectation("spaces"),
      peg$c294 = function () {
    return g.brsp;
  },
      peg$c295 = peg$otherExpectation("paragraph break"),
      peg$c296 = peg$otherExpectation("linebreak"),
      peg$c297 = function (l) {
    return l;
  },
      peg$c298 = function (l) {
    if (l) return g.createBreakSpace(l);else return g.create(g.linebreak);
  },
      peg$c299 = "[",
      peg$c300 = peg$literalExpectation("[", false),
      peg$c301 = "]",
      peg$c302 = peg$literalExpectation("]", false),
      peg$c303 = peg$otherExpectation("letter"),
      peg$c304 = /^[a-z]/i,
      peg$c305 = peg$classExpectation([["a", "z"]], false, true),
      peg$c306 = function (c) {
    return g.character(c);
  },
      peg$c307 = peg$otherExpectation("digit"),
      peg$c308 = /^[0-9]/,
      peg$c309 = peg$classExpectation([["0", "9"]], false, false),
      peg$c310 = function (n) {
    return g.character(n);
  },
      peg$c311 = peg$otherExpectation("punctuation"),
      peg$c312 = /^[.,;:*\/()!?=+<>]/,
      peg$c313 = peg$classExpectation([".", ",", ";", ":", "*", "/", "(", ")", "!", "?", "=", "+", "<", ">"], false, false),
      peg$c314 = function (p) {
    return g.character(p);
  },
      peg$c315 = peg$otherExpectation("quotes"),
      peg$c316 = /^[\u201C\u201D"'\xAB\xBB]/,
      peg$c317 = peg$classExpectation(["\u201C", "\u201D", "\"", "'", "\xAB", "\xBB"], false, false),
      peg$c318 = function (q) {
    return g.character(q);
  },
      peg$c319 = peg$otherExpectation("left bracket"),
      peg$c320 = function (b) {
    return g.character(b);
  },
      peg$c321 = peg$otherExpectation("right bracket"),
      peg$c322 = peg$otherExpectation("utf8 char"),
      peg$c323 = function (u) {
    return g.character(u);
  },
      peg$c324 = peg$otherExpectation("non-brk space"),
      peg$c325 = "~",
      peg$c326 = peg$literalExpectation("~", false),
      peg$c327 = function () {
    return g.nbsp;
  },
      peg$c328 = peg$otherExpectation("hyphen"),
      peg$c329 = "-",
      peg$c330 = peg$literalExpectation("-", false),
      peg$c331 = function () {
    return g.hyphen;
  },
      peg$c332 = peg$otherExpectation("endash"),
      peg$c333 = "--",
      peg$c334 = peg$literalExpectation("--", false),
      peg$c335 = function () {
    return g.endash;
  },
      peg$c336 = peg$otherExpectation("emdash"),
      peg$c337 = "---",
      peg$c338 = peg$literalExpectation("---", false),
      peg$c339 = function () {
    return g.emdash;
  },
      peg$c340 = peg$otherExpectation("ligature"),
      peg$c341 = "ffi",
      peg$c342 = peg$literalExpectation("ffi", false),
      peg$c343 = "ffl",
      peg$c344 = peg$literalExpectation("ffl", false),
      peg$c345 = "ff",
      peg$c346 = peg$literalExpectation("ff", false),
      peg$c347 = "fi",
      peg$c348 = peg$literalExpectation("fi", false),
      peg$c349 = "fl",
      peg$c350 = peg$literalExpectation("fl", false),
      peg$c351 = "!\xB4",
      peg$c352 = peg$literalExpectation("!\xB4", false),
      peg$c353 = "?\xB4",
      peg$c354 = peg$literalExpectation("?\xB4", false),
      peg$c355 = "<<",
      peg$c356 = peg$literalExpectation("<<", false),
      peg$c357 = ">>",
      peg$c358 = peg$literalExpectation(">>", false),
      peg$c359 = function (l) {
    return g.ligature(l);
  },
      peg$c360 = peg$otherExpectation("control symbol"),
      peg$c361 = /^[$%#&~{}_\^\-,\/ \n\r\t]/,
      peg$c362 = peg$classExpectation(["$", "%", "#", "&", "~", "{", "}", "_", "^", "-", ",", "/", " ", "\n", "\r", "\t"], false, false),
      peg$c363 = function (c) {
    return g.controlSymbol(c);
  },
      peg$c364 = "symbol",
      peg$c365 = peg$literalExpectation("symbol", false),
      peg$c366 = function (i) {
    return String.fromCharCode(i);
  },
      peg$c367 = "char",
      peg$c368 = peg$literalExpectation("char", false),
      peg$c369 = "^^^^",
      peg$c370 = peg$literalExpectation("^^^^", false),
      peg$c371 = "^^",
      peg$c372 = peg$literalExpectation("^^", false),
      peg$c373 = function (i) {
    return parseInt(i, 10);
  },
      peg$c374 = "'",
      peg$c375 = peg$literalExpectation("'", false),
      peg$c376 = function (o) {
    return parseInt(o, 8);
  },
      peg$c377 = "\"",
      peg$c378 = peg$literalExpectation("\"", false),
      peg$c379 = function (h) {
    return h;
  },
      peg$c380 = peg$otherExpectation("8bit hex value"),
      peg$c381 = function (h) {
    return parseInt(h, 16);
  },
      peg$c382 = peg$otherExpectation("16bit hex value"),
      peg$c383 = peg$otherExpectation("integer value"),
      peg$c384 = peg$otherExpectation("octal value"),
      peg$c385 = /^[0-7]/,
      peg$c386 = peg$classExpectation([["0", "7"]], false, false),
      peg$c387 = peg$otherExpectation("hex digit"),
      peg$c388 = /^[a-f0-9]/i,
      peg$c389 = peg$classExpectation([["a", "f"], ["0", "9"]], false, true),
      peg$c390 = peg$otherExpectation("float value"),
      peg$c391 = /^[+\-]/,
      peg$c392 = peg$classExpectation(["+", "-"], false, false),
      peg$c393 = ".",
      peg$c394 = peg$literalExpectation(".", false),
      peg$currPos = 0,
      peg$savedPos = 0,
      peg$posDetailsCache = [{
    line: 1,
    column: 1
  }],
      peg$maxFailPos = 0,
      peg$maxFailExpected = [],
      peg$silentFails = 0,
      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: "literal",
      text: text,
      ignoreCase: ignoreCase
    };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: "class",
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }

  function peg$anyExpectation() {
    return {
      type: "any"
    };
  }

  function peg$endExpectation() {
    return {
      type: "end"
    };
  }

  function peg$otherExpectation(description) {
    return {
      type: "other",
      description: description
    };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
        p;

    if (details) {
      return details;
    } else {
      p = pos - 1;

      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }

  function peg$parsedocument() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    peg$savedPos = peg$currPos;
    s1 = peg$c0();

    if (s1) {
      s1 = void 0;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_all_space();

      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseparagraph();

        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseparagraph();
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_all_space();

          if (s4 !== peg$FAILED) {
            s5 = peg$parseEOF();

            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c1(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseparagraph() {
    var s0, s1, s2, s3, s4;
    s0 = peg$parsevmode_macro();

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsebreak();

      if (s1 === peg$FAILED) {
        s1 = null;
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parseskip_space();

        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsetext();

          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parsetext();
            }
          } else {
            s3 = peg$FAILED;
          }

          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c2(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseenvironment();

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3(s1);
        }

        s0 = s1;
      }
    }

    return s0;
  }

  function peg$parseparagraph_with_linebreak() {
    var s0, s1;
    s0 = peg$parsetext();

    if (s0 === peg$FAILED) {
      s0 = peg$parsevmode_macro();

      if (s0 === peg$FAILED) {
        s0 = peg$parseenvironment();

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parsebreak();

          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c4();
          }

          s0 = s1;
        }
      }
    }

    return s0;
  }

  function peg$parsetext() {
    var s0, s1, s2, s3, s4, s5, s6;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseligature();

    if (s2 === peg$FAILED) {
      s2 = peg$parseemdash();

      if (s2 === peg$FAILED) {
        s2 = peg$parseendash();

        if (s2 === peg$FAILED) {
          s2 = peg$parseprimitive();

          if (s2 === peg$FAILED) {
            s2 = peg$currPos;
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parsebreak();
            peg$silentFails--;

            if (s4 === peg$FAILED) {
              s3 = void 0;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }

            if (s3 !== peg$FAILED) {
              s4 = peg$parsecomment();

              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parsesp();

                if (s6 === peg$FAILED) {
                  s6 = peg$parsenl();
                }

                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parsesp();

                  if (s6 === peg$FAILED) {
                    s6 = peg$parsenl();
                  }
                }

                if (s5 !== peg$FAILED) {
                  peg$savedPos = s2;
                  s3 = peg$c6();
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
        }
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseligature();

        if (s2 === peg$FAILED) {
          s2 = peg$parseemdash();

          if (s2 === peg$FAILED) {
            s2 = peg$parseendash();

            if (s2 === peg$FAILED) {
              s2 = peg$parseprimitive();

              if (s2 === peg$FAILED) {
                s2 = peg$currPos;
                s3 = peg$currPos;
                peg$silentFails++;
                s4 = peg$parsebreak();
                peg$silentFails--;

                if (s4 === peg$FAILED) {
                  s3 = void 0;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }

                if (s3 !== peg$FAILED) {
                  s4 = peg$parsecomment();

                  if (s4 !== peg$FAILED) {
                    s5 = [];
                    s6 = peg$parsesp();

                    if (s6 === peg$FAILED) {
                      s6 = peg$parsenl();
                    }

                    while (s6 !== peg$FAILED) {
                      s5.push(s6);
                      s6 = peg$parsesp();

                      if (s6 === peg$FAILED) {
                        s6 = peg$parsenl();
                      }
                    }

                    if (s5 !== peg$FAILED) {
                      peg$savedPos = s2;
                      s3 = peg$c6();
                      s2 = s3;
                    } else {
                      peg$currPos = s2;
                      s2 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              }
            }
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c7(s1);
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$parselinebreak();

      if (s0 === peg$FAILED) {
        s0 = peg$parsehmode_macro();

        if (s0 === peg$FAILED) {
          s0 = peg$parsemath();

          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parsebegin_group();

            if (s1 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s2 = peg$c8();

              if (s2) {
                s2 = void 0;
              } else {
                s2 = peg$FAILED;
              }

              if (s2 !== peg$FAILED) {
                s3 = peg$parsespace();

                if (s3 === peg$FAILED) {
                  s3 = null;
                }

                if (s3 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c9(s3);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }

            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseend_group();

              if (s1 !== peg$FAILED) {
                peg$savedPos = peg$currPos;
                s2 = peg$c10();

                if (s2) {
                  s2 = void 0;
                } else {
                  s2 = peg$FAILED;
                }

                if (s2 !== peg$FAILED) {
                  s3 = peg$parsespace();

                  if (s3 === peg$FAILED) {
                    s3 = null;
                  }

                  if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c9(s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            }
          }
        }
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c5);
      }
    }

    return s0;
  }

  function peg$parseprimitive() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$parsechar();

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsespace();

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c12();
      }

      s0 = s1;

      if (s0 === peg$FAILED) {
        s0 = peg$parsehyphen();

        if (s0 === peg$FAILED) {
          s0 = peg$parsedigit();

          if (s0 === peg$FAILED) {
            s0 = peg$parsepunctuation();

            if (s0 === peg$FAILED) {
              s0 = peg$parsequotes();

              if (s0 === peg$FAILED) {
                s0 = peg$parseleft_br();

                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseright_br();

                  if (s1 !== peg$FAILED) {
                    peg$savedPos = peg$currPos;
                    s2 = peg$c13(s1);

                    if (s2) {
                      s2 = void 0;
                    } else {
                      s2 = peg$FAILED;
                    }

                    if (s2 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c14(s1);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }

                  if (s0 === peg$FAILED) {
                    s0 = peg$parsenbsp();

                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      s1 = peg$currPos;
                      peg$silentFails++;
                      s2 = peg$parsebreak();
                      peg$silentFails--;

                      if (s2 === peg$FAILED) {
                        s1 = void 0;
                      } else {
                        peg$currPos = s1;
                        s1 = peg$FAILED;
                      }

                      if (s1 !== peg$FAILED) {
                        s2 = peg$parsectl_sym();

                        if (s2 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c15(s2);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }

                      if (s0 === peg$FAILED) {
                        s0 = peg$parsesymbol();

                        if (s0 === peg$FAILED) {
                          s0 = peg$parsecharsym();

                          if (s0 === peg$FAILED) {
                            s0 = peg$parseutf8_char();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c11);
      }
    }

    return s0;
  }

  function peg$parsesymbol() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseescape();

    if (s1 !== peg$FAILED) {
      s2 = peg$parseidentifier();

      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c17(s2);

        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c18(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c16);
      }
    }

    return s0;
  }

  function peg$parseidentifier() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsechar();

    if (s2 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 95) {
        s2 = peg$c20;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c21);
        }
      }

      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 58) {
          s2 = peg$c22;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c23);
          }
        }
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsechar();

        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 95) {
            s2 = peg$c20;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c21);
            }
          }

          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s2 = peg$c22;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c23);
              }
            }
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c19);
      }
    }

    return s0;
  }

  function peg$parsearggroup() {
    var s0, s1, s2, s3, s4, s5, s6;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsebegin_group();

      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c25();

        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parsespace();

          if (s4 === peg$FAILED) {
            s4 = null;
          }

          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parseparagraph_with_linebreak();

            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseparagraph_with_linebreak();
            }

            if (s5 !== peg$FAILED) {
              s6 = peg$parseend_group();

              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c26(s4, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c24);
      }
    }

    return s0;
  }

  function peg$parseoptgroup() {
    var s0, s1, s2, s3, s4, s5, s6;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsebegin_optgroup();

      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c28();

        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseparagraph_with_linebreak();

          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseparagraph_with_linebreak();
          }

          if (s4 !== peg$FAILED) {
            s5 = peg$parseend_optgroup();

            if (s5 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s6 = peg$c29(s4);

              if (s6) {
                s6 = void 0;
              } else {
                s6 = peg$FAILED;
              }

              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c30(s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c27);
      }
    }

    return s0;
  }

  function peg$parsemacro() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parseescape();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsefontfamily();

      if (s2 === peg$FAILED) {
        s2 = peg$parsefontweight();

        if (s2 === peg$FAILED) {
          s2 = peg$parsefontshape();

          if (s2 === peg$FAILED) {
            s2 = peg$parsenormalfont();

            if (s2 === peg$FAILED) {
              s2 = peg$parseem();

              if (s2 === peg$FAILED) {
                s2 = peg$parsefontsize();

                if (s2 === peg$FAILED) {
                  s2 = peg$parsecentering();

                  if (s2 === peg$FAILED) {
                    s2 = peg$parseraggedright();

                    if (s2 === peg$FAILED) {
                      s2 = peg$parseraggedleft();
                    }
                  }
                }
              }
            }
          }
        }
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c31(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsehmode_macro() {
    var s0, s1, s2;
    s0 = peg$parsemacro();

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();

      if (s1 !== peg$FAILED) {
        s2 = peg$parsecustom_macro();

        if (s2 === peg$FAILED) {
          s2 = peg$parsetextfamily();

          if (s2 === peg$FAILED) {
            s2 = peg$parsetextweight();

            if (s2 === peg$FAILED) {
              s2 = peg$parsetextshape();

              if (s2 === peg$FAILED) {
                s2 = peg$parsetextnormal();

                if (s2 === peg$FAILED) {
                  s2 = peg$parseemph();

                  if (s2 === peg$FAILED) {
                    s2 = peg$parseunderline();

                    if (s2 === peg$FAILED) {
                      s2 = peg$parseurl();

                      if (s2 === peg$FAILED) {
                        s2 = peg$parsehref();

                        if (s2 === peg$FAILED) {
                          s2 = peg$parsesmbskip_hmode();

                          if (s2 === peg$FAILED) {
                            s2 = peg$parsehspace();

                            if (s2 === peg$FAILED) {
                              s2 = peg$parsevspace_hmode();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c31(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsevmode_macro() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parseskip_all_space();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsemacro();

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c31(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseskip_all_space();

      if (s1 !== peg$FAILED) {
        s2 = peg$parseescape();

        if (s2 !== peg$FAILED) {
          s3 = peg$parsepart();

          if (s3 === peg$FAILED) {
            s3 = peg$parsechapter();

            if (s3 === peg$FAILED) {
              s3 = peg$parsesection();

              if (s3 === peg$FAILED) {
                s3 = peg$parsesubsection();

                if (s3 === peg$FAILED) {
                  s3 = peg$parsesubsubsection();

                  if (s3 === peg$FAILED) {
                    s3 = peg$parsevspace_vmode();

                    if (s3 === peg$FAILED) {
                      s3 = peg$parseaddvspace();

                      if (s3 === peg$FAILED) {
                        s3 = peg$parsesmbskip_vmode();

                        if (s3 === peg$FAILED) {
                          s3 = peg$parsesmbbreak();
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          if (s3 !== peg$FAILED) {
            s4 = peg$parseskip_all_space();

            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c32(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsevmode_test() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseskip_all_space();

    if (s1 !== peg$FAILED) {
      s2 = peg$parseescape();

      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c33) {
          s3 = peg$c33;
          peg$currPos += 4;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c34);
          }
        }

        if (s3 === peg$FAILED) {
          if (input.substr(peg$currPos, 7) === peg$c35) {
            s3 = peg$c35;
            peg$currPos += 7;
          } else {
            s3 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c36);
            }
          }

          if (s3 === peg$FAILED) {
            if (input.substr(peg$currPos, 7) === peg$c37) {
              s3 = peg$c37;
              peg$currPos += 7;
            } else {
              s3 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c38);
              }
            }

            if (s3 === peg$FAILED) {
              if (input.substr(peg$currPos, 10) === peg$c39) {
                s3 = peg$c39;
                peg$currPos += 10;
              } else {
                s3 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c40);
                }
              }

              if (s3 === peg$FAILED) {
                if (input.substr(peg$currPos, 13) === peg$c41) {
                  s3 = peg$c41;
                  peg$currPos += 13;
                } else {
                  s3 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c42);
                  }
                }

                if (s3 === peg$FAILED) {
                  if (input.substr(peg$currPos, 9) === peg$c43) {
                    s3 = peg$c43;
                    peg$currPos += 9;
                  } else {
                    s3 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c44);
                    }
                  }

                  if (s3 === peg$FAILED) {
                    if (input.substr(peg$currPos, 12) === peg$c45) {
                      s3 = peg$c45;
                      peg$currPos += 12;
                    } else {
                      s3 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c46);
                      }
                    }

                    if (s3 === peg$FAILED) {
                      if (input.substr(peg$currPos, 9) === peg$c47) {
                        s3 = peg$c47;
                        peg$currPos += 9;
                      } else {
                        s3 = peg$FAILED;

                        if (peg$silentFails === 0) {
                          peg$fail(peg$c48);
                        }
                      }

                      if (s3 === peg$FAILED) {
                        s3 = peg$currPos;

                        if (input.substr(peg$currPos, 5) === peg$c49) {
                          s4 = peg$c49;
                          peg$currPos += 5;
                        } else {
                          s4 = peg$FAILED;

                          if (peg$silentFails === 0) {
                            peg$fail(peg$c50);
                          }
                        }

                        if (s4 === peg$FAILED) {
                          if (input.substr(peg$currPos, 3) === peg$c51) {
                            s4 = peg$c51;
                            peg$currPos += 3;
                          } else {
                            s4 = peg$FAILED;

                            if (peg$silentFails === 0) {
                              peg$fail(peg$c52);
                            }
                          }

                          if (s4 === peg$FAILED) {
                            if (input.substr(peg$currPos, 3) === peg$c53) {
                              s4 = peg$c53;
                              peg$currPos += 3;
                            } else {
                              s4 = peg$FAILED;

                              if (peg$silentFails === 0) {
                                peg$fail(peg$c54);
                              }
                            }
                          }
                        }

                        if (s4 !== peg$FAILED) {
                          if (input.substr(peg$currPos, 5) === peg$c55) {
                            s5 = peg$c55;
                            peg$currPos += 5;
                          } else {
                            s5 = peg$FAILED;

                            if (peg$silentFails === 0) {
                              peg$fail(peg$c56);
                            }
                          }

                          if (s5 !== peg$FAILED) {
                            s4 = [s4, s5];
                            s3 = s4;
                          } else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }

                        if (s3 === peg$FAILED) {
                          if (input.substr(peg$currPos, 5) === peg$c57) {
                            s3 = peg$c57;
                            peg$currPos += 5;
                          } else {
                            s3 = peg$FAILED;

                            if (peg$silentFails === 0) {
                              peg$fail(peg$c58);
                            }
                          }

                          if (s3 === peg$FAILED) {
                            if (input.substr(peg$currPos, 3) === peg$c59) {
                              s3 = peg$c59;
                              peg$currPos += 3;
                            } else {
                              s3 = peg$FAILED;

                              if (peg$silentFails === 0) {
                                peg$fail(peg$c60);
                              }
                            }

                            if (s3 === peg$FAILED) {
                              if (input.substr(peg$currPos, 4) === peg$c61) {
                                s3 = peg$c61;
                                peg$currPos += 4;
                              } else {
                                s3 = peg$FAILED;

                                if (peg$silentFails === 0) {
                                  peg$fail(peg$c62);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parsechar();
          peg$silentFails--;

          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s1 = [s1, s2, s3, s4];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecustom_macro() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseidentifier();

    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c64(s1);

      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 42) {
          s3 = peg$c65;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c66);
          }
        }

        if (s3 === peg$FAILED) {
          s3 = null;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$currPos;
            s7 = peg$parseoptgroup();

            if (s7 !== peg$FAILED) {
              peg$savedPos = s6;
              s7 = peg$c67(s1, s3, s7);
            }

            s6 = s7;

            if (s6 === peg$FAILED) {
              s6 = peg$currPos;
              s7 = peg$parsearggroup();

              if (s7 !== peg$FAILED) {
                peg$savedPos = s6;
                s7 = peg$c68(s1, s3, s7);
              }

              s6 = s7;
            }

            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$currPos;
              s7 = peg$parseoptgroup();

              if (s7 !== peg$FAILED) {
                peg$savedPos = s6;
                s7 = peg$c67(s1, s3, s7);
              }

              s6 = s7;

              if (s6 === peg$FAILED) {
                s6 = peg$currPos;
                s7 = peg$parsearggroup();

                if (s7 !== peg$FAILED) {
                  peg$savedPos = s6;
                  s7 = peg$c68(s1, s3, s7);
                }

                s6 = s7;
              }
            }

            if (s5 !== peg$FAILED) {
              s6 = peg$parsespace();

              if (s6 === peg$FAILED) {
                s6 = null;
              }

              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c69(s1, s3, s5, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c63);
      }
    }

    return s0;
  }

  function peg$parseunknown_macro() {
    var s0, s1;
    s0 = peg$currPos;
    s1 = peg$parseidentifier();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c70(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parsetableofcontents() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 15) === peg$c71) {
      s1 = peg$c71;
      peg$currPos += 15;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c72);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c73();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsepart() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 4) === peg$c33) {
      s1 = peg$c33;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c34);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s2 = peg$c65;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsearggroup();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c74(s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsechapter() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 7) === peg$c35) {
      s1 = peg$c35;
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c36);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s2 = peg$c65;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsearggroup();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c75(s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesection() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 7) === peg$c37) {
      s1 = peg$c37;
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c38);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s2 = peg$c65;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsearggroup();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c76(s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesubsection() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 10) === peg$c39) {
      s1 = peg$c39;
      peg$currPos += 10;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c40);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s2 = peg$c65;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsearggroup();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c77(s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesubsubsection() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 13) === peg$c41) {
      s1 = peg$c41;
      peg$currPos += 13;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c42);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s2 = peg$c65;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsearggroup();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c78(s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesubparagraph() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 12) === peg$c45) {
      s1 = peg$c45;
      peg$currPos += 12;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c46);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s2 = peg$c65;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsearggroup();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c79(s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetextfamily() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 4) === peg$c80) {
      s1 = peg$c80;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c81);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c82) {
        s2 = peg$c82;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c83);
        }
      }

      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c84) {
          s2 = peg$c84;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c85);
          }
        }

        if (s2 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c86) {
            s2 = peg$c86;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c87);
            }
          }
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = peg$currPos;
          s4 = peg$c88(s2);

          if (s4) {
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s5 = peg$parsearggroup();

            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c89(s2, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetextweight() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 4) === peg$c80) {
      s1 = peg$c80;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c81);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c90) {
        s2 = peg$c90;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c91);
        }
      }

      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c92) {
          s2 = peg$c92;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c93);
          }
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = peg$currPos;
          s4 = peg$c94(s2);

          if (s4) {
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s5 = peg$parsearggroup();

            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c95(s2, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetextshape() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 4) === peg$c80) {
      s1 = peg$c80;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c81);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c96) {
        s2 = peg$c96;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c97);
        }
      }

      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c98) {
          s2 = peg$c98;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c99);
          }
        }

        if (s2 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c100) {
            s2 = peg$c100;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c101);
            }
          }

          if (s2 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c102) {
              s2 = peg$c102;
              peg$currPos += 2;
            } else {
              s2 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c103);
              }
            }
          }
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = peg$currPos;
          s4 = peg$c104(s2);

          if (s4) {
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s5 = peg$parsearggroup();

            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c105(s2, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetextnormal() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 10) === peg$c106) {
      s1 = peg$c106;
      peg$currPos += 10;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c107);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c108();

        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parsearggroup();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c109(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseunderline() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 9) === peg$c110) {
      s1 = peg$c110;
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c111);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c112();

        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parsearggroup();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c109(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseemph() {
    var s0, s1, s2;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 4) === peg$c113) {
      s1 = peg$c113;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c114);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parsearggroup();

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c115(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefontfamily() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 2) === peg$c82) {
      s1 = peg$c82;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c83);
      }
    }

    if (s1 === peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c84) {
        s1 = peg$c84;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c85);
        }
      }

      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c86) {
          s1 = peg$c86;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c87);
          }
        }
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 6) === peg$c116) {
        s2 = peg$c116;
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c117);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c118(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefontweight() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 2) === peg$c90) {
      s1 = peg$c90;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c91);
      }
    }

    if (s1 === peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c92) {
        s1 = peg$c92;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c93);
        }
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 6) === peg$c119) {
        s2 = peg$c119;
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c120);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c121(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefontshape() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 2) === peg$c96) {
      s1 = peg$c96;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c97);
      }
    }

    if (s1 === peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c98) {
        s1 = peg$c98;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c99);
        }
      }

      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c100) {
          s1 = peg$c100;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c101);
          }
        }

        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c102) {
            s1 = peg$c102;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c103);
            }
          }
        }
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 5) === peg$c122) {
        s2 = peg$c122;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c123);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c124(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenormalfont() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 10) === peg$c125) {
      s1 = peg$c125;
      peg$currPos += 10;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c126);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c127();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefontsize() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 4) === peg$c128) {
      s1 = peg$c128;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c129);
      }
    }

    if (s1 === peg$FAILED) {
      if (input.substr(peg$currPos, 10) === peg$c130) {
        s1 = peg$c130;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c131);
        }
      }

      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 12) === peg$c132) {
          s1 = peg$c132;
          peg$currPos += 12;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c133);
          }
        }

        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 5) === peg$c49) {
            s1 = peg$c49;
            peg$currPos += 5;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c50);
            }
          }

          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 10) === peg$c134) {
              s1 = peg$c134;
              peg$currPos += 10;
            } else {
              s1 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c135);
              }
            }

            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 5) === peg$c136) {
                s1 = peg$c136;
                peg$currPos += 5;
              } else {
                s1 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c137);
                }
              }

              if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 5) === peg$c138) {
                  s1 = peg$c138;
                  peg$currPos += 5;
                } else {
                  s1 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c139);
                  }
                }

                if (s1 === peg$FAILED) {
                  if (input.substr(peg$currPos, 5) === peg$c140) {
                    s1 = peg$c140;
                    peg$currPos += 5;
                  } else {
                    s1 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c141);
                    }
                  }

                  if (s1 === peg$FAILED) {
                    if (input.substr(peg$currPos, 4) === peg$c142) {
                      s1 = peg$c142;
                      peg$currPos += 4;
                    } else {
                      s1 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c143);
                      }
                    }

                    if (s1 === peg$FAILED) {
                      if (input.substr(peg$currPos, 4) === peg$c144) {
                        s1 = peg$c144;
                        peg$currPos += 4;
                      } else {
                        s1 = peg$FAILED;

                        if (peg$silentFails === 0) {
                          peg$fail(peg$c145);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c146(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseem() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 2) === peg$c147) {
      s1 = peg$c147;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c148);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c149();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecentering() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 9) === peg$c150) {
      s1 = peg$c150;
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c151);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c152();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseraggedright() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 11) === peg$c153) {
      s1 = peg$c153;
      peg$currPos += 11;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c154);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c155();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseraggedleft() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 10) === peg$c156) {
      s1 = peg$c156;
      peg$currPos += 10;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c157);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c158();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsevspace_hmode() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 6) === peg$c159) {
      s1 = peg$c159;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c160);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s2 = peg$c65;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parselengthgroup();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c161(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsevspace_vmode() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 6) === peg$c159) {
      s1 = peg$c159;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c160);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s2 = peg$c65;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parselengthgroup();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c162(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmbskip_hmode() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$currPos;

    if (input.substr(peg$currPos, 5) === peg$c49) {
      s2 = peg$c49;
      peg$currPos += 5;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c50);
      }
    }

    if (s2 === peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c51) {
        s2 = peg$c51;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c52);
        }
      }

      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c53) {
          s2 = peg$c53;
          peg$currPos += 3;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c54);
          }
        }
      }
    }

    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c163) {
        s2 = peg$c163;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c164);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c165(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmbskip_vmode() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$currPos;

    if (input.substr(peg$currPos, 5) === peg$c49) {
      s2 = peg$c49;
      peg$currPos += 5;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c50);
      }
    }

    if (s2 === peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c51) {
        s2 = peg$c51;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c52);
        }
      }

      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c53) {
          s2 = peg$c53;
          peg$currPos += 3;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c54);
          }
        }
      }
    }

    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c163) {
        s2 = peg$c163;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c164);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c166(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseaddvspace() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 9) === peg$c47) {
      s1 = peg$c47;
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c48);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parselengthgroup();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c162(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmbbreak() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$currPos;

    if (input.substr(peg$currPos, 5) === peg$c49) {
      s2 = peg$c49;
      peg$currPos += 5;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c50);
      }
    }

    if (s2 === peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c51) {
        s2 = peg$c51;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c52);
        }
      }

      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c53) {
          s2 = peg$c53;
          peg$currPos += 3;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c54);
          }
        }
      }
    }

    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 5) === peg$c55) {
        s2 = peg$c55;
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c56);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c166(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsehspace() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 6) === peg$c167) {
      s1 = peg$c167;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c168);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s2 = peg$c65;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parselengthgroup();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c169(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselength_unit() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c170) {
        s2 = peg$c170;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c171);
        }
      }

      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c172) {
          s2 = peg$c172;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c173);
          }
        }

        if (s2 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c174) {
            s2 = peg$c174;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c175);
            }
          }

          if (s2 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c176) {
              s2 = peg$c176;
              peg$currPos += 2;
            } else {
              s2 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c177);
              }
            }

            if (s2 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c178) {
                s2 = peg$c178;
                peg$currPos += 2;
              } else {
                s2 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c179);
                }
              }

              if (s2 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c147) {
                  s2 = peg$c147;
                  peg$currPos += 2;
                } else {
                  s2 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c148);
                  }
                }
              }
            }
          }
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsechar();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c180(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselength() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = peg$parsefloat();

    if (s1 !== peg$FAILED) {
      s2 = peg$parselength_unit();

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = peg$parseplus();

        if (s4 !== peg$FAILED) {
          s5 = peg$parsefloat();

          if (s5 !== peg$FAILED) {
            s6 = peg$parselength_unit();

            if (s6 !== peg$FAILED) {
              s4 = [s4, s5, s6];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 === peg$FAILED) {
          s3 = null;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = peg$parseminus();

          if (s5 !== peg$FAILED) {
            s6 = peg$parsefloat();

            if (s6 !== peg$FAILED) {
              s7 = peg$parselength_unit();

              if (s7 !== peg$FAILED) {
                s5 = [s5, s6, s7];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }

          if (s4 === peg$FAILED) {
            s4 = null;
          }

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c181(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselengthgroup() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsebegin_group();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          s4 = peg$parselength();

          if (s4 !== peg$FAILED) {
            s5 = peg$parseend_group();

            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c182(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseurl_charset() {
    var s0, s1, s2;
    s0 = peg$parsechar();

    if (s0 === peg$FAILED) {
      s0 = peg$parsedigit();

      if (s0 === peg$FAILED) {
        s0 = peg$parsehyphen();

        if (s0 === peg$FAILED) {
          s0 = peg$parsepunctuation();

          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 35) {
              s0 = peg$c183;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c184);
              }
            }

            if (s0 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 38) {
                s0 = peg$c185;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c186);
                }
              }

              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseescape();

                if (s1 === peg$FAILED) {
                  s1 = null;
                }

                if (s1 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 37) {
                    s2 = peg$c187;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c188);
                    }
                  }

                  if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c189();
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }

                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;

                  if (input.length > peg$currPos) {
                    s1 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s1 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c190);
                    }
                  }

                  if (s1 !== peg$FAILED) {
                    peg$savedPos = peg$currPos;
                    s2 = peg$c191();

                    if (s2) {
                      s2 = void 0;
                    } else {
                      s2 = peg$FAILED;
                    }

                    if (s2 !== peg$FAILED) {
                      s1 = [s1, s2];
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseurl() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 3) === peg$c192) {
      s1 = peg$c192;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c193);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();

      if (s2 !== peg$FAILED) {
        s3 = peg$parsebegin_group();

        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$parseend_group();
          peg$silentFails--;

          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }

          if (s6 !== peg$FAILED) {
            s7 = peg$parseurl_charset();

            if (s7 !== peg$FAILED) {
              peg$savedPos = s5;
              s6 = peg$c194(s7);
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }

          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$currPos;
              s6 = peg$currPos;
              peg$silentFails++;
              s7 = peg$parseend_group();
              peg$silentFails--;

              if (s7 === peg$FAILED) {
                s6 = void 0;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }

              if (s6 !== peg$FAILED) {
                s7 = peg$parseurl_charset();

                if (s7 !== peg$FAILED) {
                  peg$savedPos = s5;
                  s6 = peg$c194(s7);
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            }
          } else {
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s5 = peg$parseend_group();

            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c195(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsehref() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 4) === peg$c196) {
      s1 = peg$c196;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c197);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();

      if (s2 !== peg$FAILED) {
        s3 = peg$parsebegin_group();

        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$parseend_group();
          peg$silentFails--;

          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }

          if (s6 !== peg$FAILED) {
            s7 = peg$parseurl_charset();

            if (s7 !== peg$FAILED) {
              peg$savedPos = s5;
              s6 = peg$c194(s7);
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }

          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$currPos;
              s6 = peg$currPos;
              peg$silentFails++;
              s7 = peg$parseend_group();
              peg$silentFails--;

              if (s7 === peg$FAILED) {
                s6 = void 0;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }

              if (s6 !== peg$FAILED) {
                s7 = peg$parseurl_charset();

                if (s7 !== peg$FAILED) {
                  peg$savedPos = s5;
                  s6 = peg$c194(s7);
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            }
          } else {
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s5 = peg$parseend_group();

            if (s5 !== peg$FAILED) {
              s6 = peg$parsearggroup();

              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c198(s4, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsehyperref() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 8) === peg$c199) {
      s1 = peg$c199;
      peg$currPos += 8;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c200);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseoptgroup();

        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsebegin_env() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parsebreak();

    if (s1 === peg$FAILED) {
      s1 = null;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseescape();

        if (s3 !== peg$FAILED) {
          s4 = peg$parsebegin();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c202(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c201);
      }
    }

    return s0;
  }

  function peg$parseend_env() {
    var s0, s1, s2, s3, s4, s5, s6;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseskip_all_space();

    if (s1 !== peg$FAILED) {
      s2 = peg$parseescape();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseend();

        if (s3 !== peg$FAILED) {
          s4 = peg$parsebegin_group();

          if (s4 !== peg$FAILED) {
            s5 = peg$parseidentifier();

            if (s5 !== peg$FAILED) {
              s6 = peg$parseend_group();

              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c204(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c203);
      }
    }

    return s0;
  }

  function peg$parseenvironment() {
    var s0, s1, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parsebegin_env();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsebegin_group();

      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c25();

        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parselist();

          if (s4 === peg$FAILED) {
            s4 = peg$parsealignment();

            if (s4 === peg$FAILED) {
              s4 = peg$parsemulticols();

              if (s4 === peg$FAILED) {
                s4 = peg$parsetabular();

                if (s4 === peg$FAILED) {
                  s4 = peg$parseunknown_environment();
                }
              }
            }
          }

          if (s4 !== peg$FAILED) {
            s5 = peg$parseend_env();

            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c206(s4, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c205);
      }
    }

    return s0;
  }

  function peg$parseunknown_environment() {
    var s0, s1;
    s0 = peg$currPos;
    s1 = peg$parseidentifier();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c207(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parselist() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 7) === peg$c209) {
      s1 = peg$c209;
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c210);
      }
    }

    if (s1 === peg$FAILED) {
      if (input.substr(peg$currPos, 9) === peg$c211) {
        s1 = peg$c211;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c212);
        }
      }

      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 11) === peg$c213) {
          s1 = peg$c213;
          peg$currPos += 11;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c214);
          }
        }
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseend_group();

      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = peg$parseitem();

        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$currPos;
          s8 = peg$currPos;
          peg$silentFails++;
          s9 = peg$parseitem();

          if (s9 === peg$FAILED) {
            s9 = peg$parseend_env();
          }

          peg$silentFails--;

          if (s9 === peg$FAILED) {
            s8 = void 0;
          } else {
            peg$currPos = s8;
            s8 = peg$FAILED;
          }

          if (s8 !== peg$FAILED) {
            s9 = peg$parseparagraph();

            if (s9 !== peg$FAILED) {
              s8 = [s8, s9];
              s7 = s8;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }

          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$currPos;
            s8 = peg$currPos;
            peg$silentFails++;
            s9 = peg$parseitem();

            if (s9 === peg$FAILED) {
              s9 = peg$parseend_env();
            }

            peg$silentFails--;

            if (s9 === peg$FAILED) {
              s8 = void 0;
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }

            if (s8 !== peg$FAILED) {
              s9 = peg$parseparagraph();

              if (s9 !== peg$FAILED) {
                s8 = [s8, s9];
                s7 = s8;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
          }

          if (s6 !== peg$FAILED) {
            s5 = [s5, s6];
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }

        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$parseitem();

          if (s5 !== peg$FAILED) {
            s6 = [];
            s7 = peg$currPos;
            s8 = peg$currPos;
            peg$silentFails++;
            s9 = peg$parseitem();

            if (s9 === peg$FAILED) {
              s9 = peg$parseend_env();
            }

            peg$silentFails--;

            if (s9 === peg$FAILED) {
              s8 = void 0;
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }

            if (s8 !== peg$FAILED) {
              s9 = peg$parseparagraph();

              if (s9 !== peg$FAILED) {
                s8 = [s8, s9];
                s7 = s8;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }

            while (s7 !== peg$FAILED) {
              s6.push(s7);
              s7 = peg$currPos;
              s8 = peg$currPos;
              peg$silentFails++;
              s9 = peg$parseitem();

              if (s9 === peg$FAILED) {
                s9 = peg$parseend_env();
              }

              peg$silentFails--;

              if (s9 === peg$FAILED) {
                s8 = void 0;
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }

              if (s8 !== peg$FAILED) {
                s9 = peg$parseparagraph();

                if (s9 !== peg$FAILED) {
                  s8 = [s8, s9];
                  s7 = s8;
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
            }

            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c215(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c208);
      }
    }

    return s0;
  }

  function peg$parseitem() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;
    s1 = peg$parseskip_all_space();

    if (s1 !== peg$FAILED) {
      s2 = peg$parseescape();

      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c61) {
          s3 = peg$c61;
          peg$currPos += 4;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c62);
          }
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parsechar();
          peg$silentFails--;

          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s5 = peg$parseoptgroup();

            if (s5 === peg$FAILED) {
              s5 = null;
            }

            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();

              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c216(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsealignment() {
    var s0, s1, s2, s3, s4, s5, s6;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 9) === peg$c217) {
      s1 = peg$c217;
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c218);
      }
    }

    if (s1 === peg$FAILED) {
      if (input.substr(peg$currPos, 10) === peg$c219) {
        s1 = peg$c219;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c220);
        }
      }

      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 6) === peg$c221) {
          s1 = peg$c221;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c222);
          }
        }
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c223(s1);

      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseend_group();

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parseparagraph_with_linebreak();

            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseparagraph_with_linebreak();
            }

            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c224(s1, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetabular() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 7) === peg$c225) {
      s1 = peg$c225;
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c226);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s2 = peg$c65;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseend_group();

        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = peg$parselengthgroup();

          if (s5 !== peg$FAILED) {
            s6 = peg$parsebegin_group();

            if (s6 !== peg$FAILED) {
              s7 = peg$parseend_group();

              if (s7 !== peg$FAILED) {
                s5 = [s5, s6, s7];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c227(s1, s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetable_cols() {
    var s0, s1, s2, s3, s4, s5;
    s0 = [];

    if (input.charCodeAt(peg$currPos) === 108) {
      s1 = peg$c228;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c229);
      }
    }

    if (s1 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 99) {
        s1 = peg$c230;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c231);
        }
      }

      if (s1 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 114) {
          s1 = peg$c232;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c233);
          }
        }

        if (s1 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 124) {
            s1 = peg$c234;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c235);
            }
          }

          if (s1 === peg$FAILED) {
            s1 = peg$currPos;

            if (input.substr(peg$currPos, 2) === peg$c236) {
              s2 = peg$c236;
              peg$currPos += 2;
            } else {
              s2 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c237);
              }
            }

            if (s2 !== peg$FAILED) {
              s3 = [];
              s4 = peg$parsetext();

              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parsetext();
              }

              if (s3 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s4 = peg$c238;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c239);
                  }
                }

                if (s4 !== peg$FAILED) {
                  s2 = [s2, s3, s4];
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }

            if (s1 === peg$FAILED) {
              s1 = peg$currPos;

              if (input.charCodeAt(peg$currPos) === 112) {
                s2 = peg$c240;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c241);
                }
              }

              if (s2 !== peg$FAILED) {
                s3 = peg$parselengthgroup();

                if (s3 !== peg$FAILED) {
                  s2 = [s2, s3];
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }

              if (s1 === peg$FAILED) {
                s1 = peg$currPos;

                if (input.substr(peg$currPos, 2) === peg$c242) {
                  s2 = peg$c242;
                  peg$currPos += 2;
                } else {
                  s2 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c243);
                  }
                }

                if (s2 !== peg$FAILED) {
                  s3 = [];
                  s4 = peg$parsedigit();

                  if (s4 !== peg$FAILED) {
                    while (s4 !== peg$FAILED) {
                      s3.push(s4);
                      s4 = peg$parsedigit();
                    }
                  } else {
                    s3 = peg$FAILED;
                  }

                  if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s4 = peg$c238;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c239);
                      }
                    }

                    if (s4 !== peg$FAILED) {
                      s5 = peg$parsetable_cols();

                      if (s5 !== peg$FAILED) {
                        s2 = [s2, s3, s4, s5];
                        s1 = s2;
                      } else {
                        peg$currPos = s1;
                        s1 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              }
            }
          }
        }
      }
    }

    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);

        if (input.charCodeAt(peg$currPos) === 108) {
          s1 = peg$c228;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c229);
          }
        }

        if (s1 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 99) {
            s1 = peg$c230;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c231);
            }
          }

          if (s1 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 114) {
              s1 = peg$c232;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c233);
              }
            }

            if (s1 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 124) {
                s1 = peg$c234;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c235);
                }
              }

              if (s1 === peg$FAILED) {
                s1 = peg$currPos;

                if (input.substr(peg$currPos, 2) === peg$c236) {
                  s2 = peg$c236;
                  peg$currPos += 2;
                } else {
                  s2 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c237);
                  }
                }

                if (s2 !== peg$FAILED) {
                  s3 = [];
                  s4 = peg$parsetext();

                  while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parsetext();
                  }

                  if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s4 = peg$c238;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c239);
                      }
                    }

                    if (s4 !== peg$FAILED) {
                      s2 = [s2, s3, s4];
                      s1 = s2;
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }

                if (s1 === peg$FAILED) {
                  s1 = peg$currPos;

                  if (input.charCodeAt(peg$currPos) === 112) {
                    s2 = peg$c240;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c241);
                    }
                  }

                  if (s2 !== peg$FAILED) {
                    s3 = peg$parselengthgroup();

                    if (s3 !== peg$FAILED) {
                      s2 = [s2, s3];
                      s1 = s2;
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }

                  if (s1 === peg$FAILED) {
                    s1 = peg$currPos;

                    if (input.substr(peg$currPos, 2) === peg$c242) {
                      s2 = peg$c242;
                      peg$currPos += 2;
                    } else {
                      s2 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c243);
                      }
                    }

                    if (s2 !== peg$FAILED) {
                      s3 = [];
                      s4 = peg$parsedigit();

                      if (s4 !== peg$FAILED) {
                        while (s4 !== peg$FAILED) {
                          s3.push(s4);
                          s4 = peg$parsedigit();
                        }
                      } else {
                        s3 = peg$FAILED;
                      }

                      if (s3 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s4 = peg$c238;
                          peg$currPos++;
                        } else {
                          s4 = peg$FAILED;

                          if (peg$silentFails === 0) {
                            peg$fail(peg$c239);
                          }
                        }

                        if (s4 !== peg$FAILED) {
                          s5 = peg$parsetable_cols();

                          if (s5 !== peg$FAILED) {
                            s2 = [s2, s3, s4, s5];
                            s1 = s2;
                          } else {
                            peg$currPos = s1;
                            s1 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s1;
                          s1 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s1;
                        s1 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseonecolumn() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 9) === peg$c244) {
      s1 = peg$c244;
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c245);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetwocolumn() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 9) === peg$c246) {
      s1 = peg$c246;
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c247);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseoptgroup();

        if (s3 === peg$FAILED) {
          s3 = null;
        }

        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemulticols() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 9) === peg$c248) {
      s1 = peg$c248;
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c249);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseend_group();

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = peg$parsebegin_group();

        if (s4 !== peg$FAILED) {
          s5 = peg$parsedigit();

          if (s5 !== peg$FAILED) {
            s6 = peg$parseend_group();

            if (s6 !== peg$FAILED) {
              s7 = peg$parseoptgroup();

              if (s7 === peg$FAILED) {
                s7 = null;
              }

              if (s7 !== peg$FAILED) {
                s8 = peg$parseoptgroup();

                if (s8 === peg$FAILED) {
                  s8 = null;
                }

                if (s8 !== peg$FAILED) {
                  peg$savedPos = s3;
                  s4 = peg$c250(s1, s5, s7);
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 === peg$FAILED) {
          peg$savedPos = peg$currPos;
          s3 = peg$c251(s1);

          if (s3) {
            s3 = void 0;
          } else {
            s3 = peg$FAILED;
          }
        }

        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseparagraph();

          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseparagraph();
          }

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c252(s1, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecomment_env() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 6) === peg$c254) {
      s1 = peg$c254;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c255);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();

      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 9) === peg$c256) {
          s3 = peg$c256;
          peg$currPos += 9;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c257);
          }
        }

        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$parseend_comment();
          peg$silentFails--;

          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }

          if (s6 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c190);
              }
            }

            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }

          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$parseend_comment();
            peg$silentFails--;

            if (s7 === peg$FAILED) {
              s6 = void 0;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }

            if (s6 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c190);
                }
              }

              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }

          if (s4 !== peg$FAILED) {
            s5 = peg$parseend_comment();

            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();

              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c258();
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c253);
      }
    }

    return s0;
  }

  function peg$parseend_comment() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 4) === peg$c259) {
      s1 = peg$c259;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c260);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseskip_space();

      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 9) === peg$c256) {
          s3 = peg$c256;
          peg$currPos += 9;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c257);
          }
        }

        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemath() {
    var s0;
    s0 = peg$parseinline_math();

    if (s0 === peg$FAILED) {
      s0 = peg$parsedisplay_math();
    }

    return s0;
  }

  function peg$parseinline_math() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parsemath_shift();

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = peg$parsemath_primitive();

      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsemath_primitive();
        }
      } else {
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsemath_shift();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c261(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedisplay_math() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parsemath_shift();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsemath_shift();

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parsemath_primitive();

        if (s5 !== peg$FAILED) {
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsemath_primitive();
          }
        } else {
          s4 = peg$FAILED;
        }

        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parsemath_shift();

          if (s4 !== peg$FAILED) {
            s5 = peg$parsemath_shift();

            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c262(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();

      if (s1 !== peg$FAILED) {
        s2 = peg$parseleft_br();

        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$parsemath_primitive();

          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsemath_primitive();
            }
          } else {
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }

          if (s3 !== peg$FAILED) {
            s4 = peg$parseescape();

            if (s4 !== peg$FAILED) {
              s5 = peg$parseright_br();

              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c262(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsemath_primitive() {
    var s0, s1, s2, s3;
    s0 = peg$parseprimitive();

    if (s0 === peg$FAILED) {
      s0 = peg$parsealignment_tab();

      if (s0 === peg$FAILED) {
        s0 = peg$parsesuperscript();

        if (s0 === peg$FAILED) {
          s0 = peg$parsesubscript();

          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseescape();

            if (s1 !== peg$FAILED) {
              s2 = peg$parseidentifier();

              if (s2 !== peg$FAILED) {
                s1 = [s1, s2];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }

            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parsebegin_group();

              if (s1 !== peg$FAILED) {
                s2 = peg$parseskip_space();

                if (s2 !== peg$FAILED) {
                  s3 = peg$parseend_group();

                  if (s3 !== peg$FAILED) {
                    s1 = [s1, s2, s3];
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }

              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parsebegin_group();

                if (s1 !== peg$FAILED) {
                  s2 = [];
                  s3 = peg$parsemath_primitive();

                  if (s3 !== peg$FAILED) {
                    while (s3 !== peg$FAILED) {
                      s2.push(s3);
                      s3 = peg$parsemath_primitive();
                    }
                  } else {
                    s2 = peg$FAILED;
                  }

                  if (s2 !== peg$FAILED) {
                    s3 = peg$parseend_group();

                    if (s3 !== peg$FAILED) {
                      s1 = [s1, s2, s3];
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }

                if (s0 === peg$FAILED) {
                  s0 = peg$parsesp();

                  if (s0 === peg$FAILED) {
                    s0 = peg$parsenl();

                    if (s0 === peg$FAILED) {
                      s0 = peg$parselinebreak();

                      if (s0 === peg$FAILED) {
                        s0 = peg$parsecomment();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsebegin() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 5) === peg$c57) {
      s1 = peg$c57;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c58);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseend() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 3) === peg$c59) {
      s1 = peg$c59;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c60);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsepar() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 3) === peg$c263) {
      s1 = peg$c263;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c264);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseplus() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 4) === peg$c265) {
      s1 = peg$c265;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c266);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseminus() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 5) === peg$c267) {
      s1 = peg$c267;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c268);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parsechar();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseskip_space();

        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseescape() {
    var s0, s1;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c269;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c270);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    return s0;
  }

  function peg$parsebegin_group() {
    var s0, s1;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c271;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c272);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    return s0;
  }

  function peg$parseend_group() {
    var s0, s1;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 125) {
      s1 = peg$c238;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c239);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    return s0;
  }

  function peg$parsemath_shift() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 36) {
      s1 = peg$c274;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c275);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c273);
      }
    }

    return s0;
  }

  function peg$parsealignment_tab() {
    var s0, s1;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 38) {
      s1 = peg$c185;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c186);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    return s0;
  }

  function peg$parsemacro_parameter() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 35) {
      s1 = peg$c183;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c184);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c276);
      }
    }

    return s0;
  }

  function peg$parsesuperscript() {
    var s0, s1;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 94) {
      s1 = peg$c277;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c278);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    return s0;
  }

  function peg$parsesubscript() {
    var s0, s1;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 95) {
      s1 = peg$c20;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c21);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    return s0;
  }

  function peg$parseignore() {
    var s0, s1;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 0) {
      s1 = peg$c279;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c280);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    return s0;
  }

  function peg$parseEOF() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;
    peg$silentFails++;

    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c190);
      }
    }

    peg$silentFails--;

    if (s1 === peg$FAILED) {
      s0 = void 0;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c281);
      }
    }

    return s0;
  }

  function peg$parsenl() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;

    if (input.charCodeAt(peg$currPos) === 13) {
      s2 = peg$c283;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c284);
      }
    }

    peg$silentFails--;

    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 10) {
        s2 = peg$c285;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c286);
        }
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 13) {
        s0 = peg$c283;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c284);
        }
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;

        if (input.substr(peg$currPos, 2) === peg$c287) {
          s1 = peg$c287;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c288);
          }
        }

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c6();
        }

        s0 = s1;
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c282);
      }
    }

    return s0;
  }

  function peg$parsesp() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (peg$c290.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c291);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c289);
      }
    }

    return s0;
  }

  function peg$parsecomment() {
    var s0, s1, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 37) {
      s1 = peg$c187;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c188);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parsenl();
      peg$silentFails--;

      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }

      if (s4 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c190);
          }
        }

        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parsenl();
        peg$silentFails--;

        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }

        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c190);
            }
          }

          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsenl();

        if (s3 === peg$FAILED) {
          s3 = peg$parseEOF();
        }

        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsecomment_env();

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c6();
      }

      s0 = s1;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c292);
      }
    }

    return s0;
  }

  function peg$parseskip_space() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parsebreak();
    peg$silentFails--;

    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }

    if (s3 !== peg$FAILED) {
      s4 = peg$parsenl();

      if (s4 === peg$FAILED) {
        s4 = peg$parsesp();

        if (s4 === peg$FAILED) {
          s4 = peg$parsecomment();
        }
      }

      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }

    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$currPos;
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parsebreak();
      peg$silentFails--;

      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        s4 = peg$parsenl();

        if (s4 === peg$FAILED) {
          s4 = peg$parsesp();

          if (s4 === peg$FAILED) {
            s4 = peg$parsecomment();
          }
        }

        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c293);
      }
    }

    return s0;
  }

  function peg$parseskip_all_space() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsenl();

    if (s2 === peg$FAILED) {
      s2 = peg$parsesp();

      if (s2 === peg$FAILED) {
        s2 = peg$parsecomment();
      }
    }

    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsenl();

      if (s2 === peg$FAILED) {
        s2 = peg$parsesp();

        if (s2 === peg$FAILED) {
          s2 = peg$parsecomment();
        }
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c293);
      }
    }

    return s0;
  }

  function peg$parsespace() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parsebreak();
    peg$silentFails--;

    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parselinebreak();
      peg$silentFails--;

      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsevmode_test();
        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsesp();

          if (s5 === peg$FAILED) {
            s5 = peg$parsenl();
          }

          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsesp();

              if (s5 === peg$FAILED) {
                s5 = peg$parsenl();
              }
            }
          } else {
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parsecomment();

            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parsecomment();
            }

            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parsesp();

              if (s7 === peg$FAILED) {
                s7 = peg$parsenl();
              }

              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parsesp();

                if (s7 === peg$FAILED) {
                  s7 = peg$parsenl();
                }
              }

              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c294();
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c293);
      }
    }

    return s0;
  }

  function peg$parsebreak() {
    var s0, s1, s2, s3, s4, s5, s6;
    peg$silentFails++;
    s0 = [];
    s1 = peg$currPos;
    s2 = peg$parseskip_all_space();

    if (s2 !== peg$FAILED) {
      s3 = peg$parseescape();

      if (s3 !== peg$FAILED) {
        s4 = peg$parsepar();

        if (s4 !== peg$FAILED) {
          s5 = peg$parseskip_all_space();

          if (s5 !== peg$FAILED) {
            s2 = [s2, s3, s4, s5];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$currPos;
        s2 = peg$parseskip_all_space();

        if (s2 !== peg$FAILED) {
          s3 = peg$parseescape();

          if (s3 !== peg$FAILED) {
            s4 = peg$parsepar();

            if (s4 !== peg$FAILED) {
              s5 = peg$parseskip_all_space();

              if (s5 !== peg$FAILED) {
                s2 = [s2, s3, s4, s5];
                s1 = s2;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsesp();

      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsesp();
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseescape();

        if (s3 === peg$FAILED) {
          s3 = null;
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parsenl();

          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }

        if (s2 === peg$FAILED) {
          s2 = peg$parsecomment();
        }

        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$parsesp();

          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parsesp();
          }

          if (s5 !== peg$FAILED) {
            s6 = peg$parsenl();

            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$currPos;
              s5 = [];
              s6 = peg$parsesp();

              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parsesp();
              }

              if (s5 !== peg$FAILED) {
                s6 = peg$parsenl();

                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
          } else {
            s3 = peg$FAILED;
          }

          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsesp();

            if (s5 === peg$FAILED) {
              s5 = peg$parsenl();

              if (s5 === peg$FAILED) {
                s5 = peg$parsecomment();
              }
            }

            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsesp();

              if (s5 === peg$FAILED) {
                s5 = peg$parsenl();

                if (s5 === peg$FAILED) {
                  s5 = peg$parsecomment();
                }
              }
            }

            if (s4 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c295);
      }
    }

    return s0;
  }

  function peg$parselinebreak() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseskip_space();

    if (s1 !== peg$FAILED) {
      s2 = peg$parseescape();

      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 92) {
          s3 = peg$c269;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c270);
          }
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 42) {
              s5 = peg$c65;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c66);
              }
            }

            if (s5 === peg$FAILED) {
              s5 = null;
            }

            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();

              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                s8 = peg$parsebegin_optgroup();

                if (s8 !== peg$FAILED) {
                  s9 = peg$parseskip_space();

                  if (s9 !== peg$FAILED) {
                    s10 = peg$parselength();

                    if (s10 !== peg$FAILED) {
                      s11 = peg$parseend_optgroup();

                      if (s11 !== peg$FAILED) {
                        s12 = peg$parseskip_space();

                        if (s12 !== peg$FAILED) {
                          peg$savedPos = s7;
                          s8 = peg$c297(s10);
                          s7 = s8;
                        } else {
                          peg$currPos = s7;
                          s7 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }

                if (s7 === peg$FAILED) {
                  s7 = null;
                }

                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c298(s7);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c296);
      }
    }

    return s0;
  }

  function peg$parsebegin_optgroup() {
    var s0, s1;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c299;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c300);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    return s0;
  }

  function peg$parseend_optgroup() {
    var s0, s1;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 93) {
      s1 = peg$c301;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c302);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }

    s0 = s1;
    return s0;
  }

  function peg$parsechar() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (peg$c304.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c305);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c306(s1);
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c303);
      }
    }

    return s0;
  }

  function peg$parsedigit() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (peg$c308.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c309);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c310(s1);
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c307);
      }
    }

    return s0;
  }

  function peg$parsepunctuation() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (peg$c312.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c313);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c314(s1);
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c311);
      }
    }

    return s0;
  }

  function peg$parsequotes() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (peg$c316.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c317);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c318(s1);
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c315);
      }
    }

    return s0;
  }

  function peg$parseleft_br() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c299;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c300);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c320(s1);
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c319);
      }
    }

    return s0;
  }

  function peg$parseright_br() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 93) {
      s1 = peg$c301;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c302);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c320(s1);
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c321);
      }
    }

    return s0;
  }

  function peg$parseutf8_char() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parsesp();

    if (s2 === peg$FAILED) {
      s2 = peg$parsenl();

      if (s2 === peg$FAILED) {
        s2 = peg$parseescape();

        if (s2 === peg$FAILED) {
          s2 = peg$parsebegin_group();

          if (s2 === peg$FAILED) {
            s2 = peg$parseend_group();

            if (s2 === peg$FAILED) {
              s2 = peg$parsemath_shift();

              if (s2 === peg$FAILED) {
                s2 = peg$parsealignment_tab();

                if (s2 === peg$FAILED) {
                  s2 = peg$parsemacro_parameter();

                  if (s2 === peg$FAILED) {
                    s2 = peg$parsesuperscript();

                    if (s2 === peg$FAILED) {
                      s2 = peg$parsesubscript();

                      if (s2 === peg$FAILED) {
                        s2 = peg$parseignore();

                        if (s2 === peg$FAILED) {
                          s2 = peg$parsecomment();

                          if (s2 === peg$FAILED) {
                            s2 = peg$parsebegin_optgroup();

                            if (s2 === peg$FAILED) {
                              s2 = peg$parseend_optgroup();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    peg$silentFails--;

    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c190);
        }
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c323(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c322);
      }
    }

    return s0;
  }

  function peg$parsenbsp() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 126) {
      s1 = peg$c325;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c326);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c327();
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c324);
      }
    }

    return s0;
  }

  function peg$parsehyphen() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 45) {
      s1 = peg$c329;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c330);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c331();
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c328);
      }
    }

    return s0;
  }

  function peg$parseendash() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 2) === peg$c333) {
      s1 = peg$c333;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c334);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c335();
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c332);
      }
    }

    return s0;
  }

  function peg$parseemdash() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 3) === peg$c337) {
      s1 = peg$c337;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c338);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c339();
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c336);
      }
    }

    return s0;
  }

  function peg$parseligature() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 3) === peg$c341) {
      s1 = peg$c341;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c342);
      }
    }

    if (s1 === peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c343) {
        s1 = peg$c343;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c344);
        }
      }

      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c345) {
          s1 = peg$c345;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c346);
          }
        }

        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c347) {
            s1 = peg$c347;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c348);
            }
          }

          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c349) {
              s1 = peg$c349;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c350);
              }
            }

            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c351) {
                s1 = peg$c351;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c352);
                }
              }

              if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c353) {
                  s1 = peg$c353;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c354);
                  }
                }

                if (s1 === peg$FAILED) {
                  if (input.substr(peg$currPos, 2) === peg$c355) {
                    s1 = peg$c355;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c356);
                    }
                  }

                  if (s1 === peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c357) {
                      s1 = peg$c357;
                      peg$currPos += 2;
                    } else {
                      s1 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c358);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c359(s1);
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c340);
      }
    }

    return s0;
  }

  function peg$parsectl_sym() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseescape();

    if (s1 !== peg$FAILED) {
      if (peg$c361.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c362);
        }
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c363(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c360);
      }
    }

    return s0;
  }

  function peg$parsecharsym() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = peg$parseescape();

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 6) === peg$c364) {
        s2 = peg$c364;
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c365);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsebegin_group();

        if (s3 !== peg$FAILED) {
          s4 = peg$parseskip_space();

          if (s4 !== peg$FAILED) {
            s5 = peg$parsecharnumber();

            if (s5 !== peg$FAILED) {
              s6 = peg$parseskip_space();

              if (s6 !== peg$FAILED) {
                s7 = peg$parseend_group();

                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c366(s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseescape();

      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c367) {
          s2 = peg$c367;
          peg$currPos += 4;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c368);
          }
        }

        if (s2 !== peg$FAILED) {
          s3 = peg$parsecharnumber();

          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c366(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;

        if (input.substr(peg$currPos, 4) === peg$c369) {
          s1 = peg$c369;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c370);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parsehex16();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c366(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;

          if (input.substr(peg$currPos, 2) === peg$c371) {
            s1 = peg$c371;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c372);
            }
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parsehex8();

            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c366(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }

    return s0;
  }

  function peg$parsecharnumber() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parseint();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c373(s1);
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 39) {
        s1 = peg$c374;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c375);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parseoct();

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c376(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 34) {
          s1 = peg$c377;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c378);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parsehex16();

          if (s2 === peg$FAILED) {
            s2 = peg$parsehex8();
          }

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c379(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parsehex8() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$currPos;
    s3 = peg$parsehex();

    if (s3 !== peg$FAILED) {
      s4 = peg$parsehex();

      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }

    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c381(s1);
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c380);
      }
    }

    return s0;
  }

  function peg$parsehex16() {
    var s0, s1, s2, s3, s4, s5, s6;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$currPos;
    s3 = peg$parsehex();

    if (s3 !== peg$FAILED) {
      s4 = peg$parsehex();

      if (s4 !== peg$FAILED) {
        s5 = peg$parsehex();

        if (s5 !== peg$FAILED) {
          s6 = peg$parsehex();

          if (s6 !== peg$FAILED) {
            s3 = [s3, s4, s5, s6];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }

    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c381(s1);
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c382);
      }
    }

    return s0;
  }

  function peg$parseint() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c308.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c309);
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);

        if (peg$c308.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c309);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c383);
      }
    }

    return s0;
  }

  function peg$parseoct() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c385.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c386);
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);

        if (peg$c385.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c386);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c384);
      }
    }

    return s0;
  }

  function peg$parsehex() {
    var s0, s1;
    peg$silentFails++;

    if (peg$c388.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c389);
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c387);
      }
    }

    return s0;
  }

  function peg$parsefloat() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$currPos;

    if (peg$c391.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c392);
      }
    }

    if (s2 === peg$FAILED) {
      s2 = null;
    }

    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      s4 = peg$parseint();

      if (s4 === peg$FAILED) {
        s4 = null;
      }

      if (s4 !== peg$FAILED) {
        s5 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 46) {
          s6 = peg$c393;
          peg$currPos++;
        } else {
          s6 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c394);
          }
        }

        if (s6 !== peg$FAILED) {
          s7 = peg$parseint();

          if (s7 === peg$FAILED) {
            s7 = null;
          }

          if (s7 !== peg$FAILED) {
            s6 = [s6, s7];
            s5 = s6;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }

        if (s5 === peg$FAILED) {
          s5 = null;
        }

        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      if (s3 === peg$FAILED) {
        s3 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 46) {
          s4 = peg$c393;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c394);
          }
        }

        if (s4 !== peg$FAILED) {
          s5 = peg$parseint();

          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c390);
      }
    }

    return s0;
  }

  var g = options.generator;
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};

/***/ })
/******/ ]);