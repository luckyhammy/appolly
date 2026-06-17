import AppInterfaceSlider from "../../app/components/sections/AppInterfaceSlider";
import DownloadAppSection from "../../app/components/sections/DownloadAppSection";
import FullWidthBleed from "../../app/components/FullWidthBleed";
import svgPaths from "./svg-hsb60rpkxe";
import imgBackgroundImage from "./b7089961164dd3d96eb61bd7b4822bb8e0953967.png";
import imgLogo41 from "./920de045e7cd76ae6919224d6f9837cb0536846d.png";
import imgPngItem11440502 from "./c52d780b7f4ede1720c93645d3ed6099bc5d537d.png";
import imgToppng1 from "./a522304a8c74ef585b38a629cb918edf7f116e05.png";
import imgFreeUiViewMobileAppMockup1 from "./c14d77e3a731f607bcb9c1144bd35527e6a3d633.png";
import imgAndroidSmartphoneFreeMockup1 from "./91498b75051f3be64d72d95eb3d9b60de0b7e1c3.png";
import imgApp from "./dbf52aa45dcee540a0b5437acaaf9bd18e1f6195.png";
import imgIPhoneXMockup1 from "./96bee98b84c3f527c840b70412bba7e38ba20e95.png";
import img000 from "./27d8b61f751e80dbc1b668ba6b7d76c26fb88c76.png";
import img003 from "./946df00d0462f709ba8e8c2c6c287e21a5776339.png";
import img001 from "./b6c24549df54de5cfe864a76e99569b4d37953ab.png";
import imgGravitySceneIPhone12Mockup1 from "./c1e0d8bad68a1eae874b44857a021f9e647a7def.png";
import imgImage from "./c65b0e9f7896d9c2c41b100445a28ae26a0a5840.png";
import imgProfile from "./f8c3899bc12eb2a6edf4e51bba4587e22a7a75ce.png";
import imgProfileImage from "./9bad8fface237cf2732fb1f2e327ad1b3698f79c.png";
import imgProfileImage1 from "./1f731da3717a102ba322eb4f4165c1f389aa38bc.png";
import imgProfileImage3 from "./8192acaa231cad3129c64f95e7223b7a141a7b60.png";
import imgImage1 from "./720a92634365ba980b3003fb59f2946c61c03b11.png";
import imgImage2 from "./1ee66b216ce2a319d530cfae25161218abc2364d.png";
import imgImage3 from "./dd5102e143afcf12ae87f9133e53f5a55ee95572.png";

function Logo() {
  return (
    <div className="absolute contents left-[621px] top-[59px]" data-name="Logo">
      <div className="absolute bg-white h-[90px] left-[621px] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[59px] w-[200px]" />
      <div className="absolute h-[28px] left-[637px] top-[90px] w-[167px]" data-name="Logo4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo41} />
      </div>
    </div>
  );
}

function Download() {
  return (
    <div className="absolute contents left-[1143px] top-[79px]" data-name="Download">
      <div className="absolute bg-[#5956e9] h-[50px] left-[1143px] rounded-[5px] top-[79px] w-[158px]" />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[1159px] text-[20px] text-white top-[91px] uppercase whitespace-nowrap">Download</p>
    </div>
  );
}

function Menu1() {
  return (
    <div className="absolute contents left-[136px] top-[59px]" data-name="Menu">
      <div className="absolute bg-white h-[60px] left-[136px] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[74px] w-[1170px]" />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] left-[188px] text-[#5956e9] text-[20px] top-[91px] underline uppercase whitespace-nowrap">Home</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[402px] text-[#232233] text-[20px] top-[91px] uppercase whitespace-nowrap">Features</p>
      <Logo />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[291px] text-[#232233] text-[20px] top-[91px] uppercase whitespace-nowrap">About</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[864px] text-[#232233] text-[20px] top-[91px] uppercase whitespace-nowrap">Screenshot</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[1042px] text-[#232233] text-[20px] top-[91px] uppercase whitespace-nowrap">Blog</p>
      <Download />
    </div>
  );
}

function IconsFillMailFill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[135px] size-[18px] top-[38px]"} data-name="Icons/fill/mail-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/mail-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p1cad900} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="absolute contents left-[135px] top-[35px]" data-name="Email">
      <IconsFillMailFill />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[24px] left-[171px] text-[16px] text-white top-[35px] whitespace-nowrap">Info@youremail.com</p>
    </div>
  );
}

function IconsFillPhoneFill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[365px] size-[18px] top-[38px]"} data-name="Icons/fill/phone-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/phone-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.pc00ed80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Call() {
  return (
    <div className="absolute contents left-[365px] top-[35px]" data-name="Call">
      <IconsFillPhoneFill />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[24px] left-[401px] text-[16px] text-white top-[35px] whitespace-nowrap">(480) 555-0103</p>
    </div>
  );
}

function IconsFillFacebookFill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[1137px] size-[18px] top-[38px]"} data-name="Icons/fill/facebook-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/facebook-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p2a17ae60} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillInstagramFill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[1185px] size-[18px] top-[38px]"} data-name="Icons/fill/instagram-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/instagram-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p8be1980} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillTwitterFill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[1233px] size-[18px] top-[38px]"} data-name="Icons/fill/twitter-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/twitter-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p14f75280} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillYoutubeFill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[1281px] size-[18px] top-[38px]"} data-name="Icons/fill/youtube-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/youtube-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p1803cbf0} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="absolute contents left-[1137px] top-[38px]" data-name="Social Icon">
      <IconsFillFacebookFill />
      <IconsFillInstagramFill />
      <IconsFillTwitterFill />
      <IconsFillYoutubeFill />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute contents left-[135px] top-[35px]" data-name="Menu">
      <Menu1 />
      <Email />
      <Call />
      <SocialIcon />
    </div>
  );
}

function DownloadIcon() {
  return (
    <div className="absolute contents left-[165px] top-[717px]" data-name="Download Icon">
      <div className="absolute h-[45px] left-[328px] top-[718px] w-[151px]" data-name="PngItem_1144050 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[188.64%] left-[-116.62%] max-w-none top-[-88.64%] w-[217.17%]" src={imgPngItem11440502} />
        </div>
      </div>
      <div className="absolute h-[47px] left-[165px] top-[717px] w-[149px]" data-name="toppng 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[210.64%] left-[-0.16%] max-w-none top-0 w-[100.33%]" src={imgToppng1} />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute contents left-[135px] top-[321px]" data-name="Text">
      <div className="absolute border-18 border-[#7572ff] border-solid h-[535px] left-[185px] top-[321px] w-[570px]" />
      <div className="absolute bg-white h-[432px] left-[135px] top-[372px] w-[570px]" />
      <div className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[0] left-[165px] text-[#5956e9] text-[48.83px] top-[412px] uppercase whitespace-nowrap">
        <p className="leading-[130%] mb-0">A Great App Makes</p>
        <p className="leading-[130%]">Your Life Better</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[66px] leading-[24px] left-[165px] text-[#6c6c72] text-[16px] top-[556px] w-[487px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[37.5px] left-[165px] text-[#232233] text-[25px] top-[674px] uppercase whitespace-nowrap">Download App Now</p>
      <DownloadIcon />
    </div>
  );
}

function HeroSaction() {
  return (
    <div className="absolute h-[1024px] left-0 top-0 w-[1525px]" data-name="Hero Saction">
      <FullWidthBleed className="top-0 h-[1024px]" data-name="Background Image">
        <img alt="" className="pointer-events-none size-full object-cover" src={imgBackgroundImage} />
      </FullWidthBleed>
      <Menu />
      <Text />
      <div className="absolute h-[725px] left-[879px] top-[216px] w-[646px]" data-name="Free Ui View Mobile App Mockup 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFreeUiViewMobileAppMockup1} />
      </div>
    </div>
  );
}

function IconsFillSystemCheckboxCircleFill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[592px] size-[24px] top-[226px]"} data-name="Icons/fill/system/checkbox-circle-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/checkbox-circle-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p1aba2300} fill="var(--fill-0, #5956E9)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CreativeDesign() {
  return (
    <div className="absolute contents left-[574px] top-[196px]" data-name="Creative design">
      <div className="absolute bg-white h-[160px] left-[574px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[196px] w-[570px]" />
      <IconsFillSystemCheckboxCircleFill />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[633px] text-[#232233] text-[20px] top-[226px] uppercase whitespace-nowrap">Creative design</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[67px] leading-[24px] left-[633px] text-[#6c6c72] text-[16px] top-[268px] w-[491px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
    </div>
  );
}

function IconsFillSystemCheckboxCircleFill1({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[592px] size-[24px] top-[426px]"} data-name="Icons/fill/system/checkbox-circle-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/checkbox-circle-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p1aba2300} fill="var(--fill-0, #5956E9)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function EasyToUse() {
  return (
    <div className="absolute contents left-[574px] top-[396px]" data-name="easy to use">
      <div className="absolute bg-white h-[160px] left-[574px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[396px] w-[570px]" />
      <IconsFillSystemCheckboxCircleFill1 />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[634px] text-[#232233] text-[20px] top-[426px] uppercase whitespace-nowrap">easy to use</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[67px] leading-[24px] left-[633px] text-[#6c6c72] text-[16px] top-[468px] w-[491px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
    </div>
  );
}

function IconsFillSystemCheckboxCircleFill2({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[592px] size-[24px] top-[626px]"} data-name="Icons/fill/system/checkbox-circle-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/checkbox-circle-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p1aba2300} fill="var(--fill-0, #5956E9)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BestUserExperince() {
  return (
    <div className="absolute contents left-[574px] top-[596px]" data-name="Best user experince">
      <div className="absolute bg-white h-[160px] left-[574px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[596px] w-[570px]" />
      <IconsFillSystemCheckboxCircleFill2 />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[634px] text-[#232233] text-[20px] top-[626px] uppercase whitespace-nowrap">Best user experince</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[67px] leading-[24px] left-[633px] text-[#6c6c72] text-[16px] top-[668px] w-[491px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
    </div>
  );
}

function About() {
  return (
    <div className="absolute h-[774px] left-[161px] top-[1144px] w-[1144px]" data-name="About">
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[426px] text-[#232233] text-[31.25px] top-0 uppercase whitespace-nowrap">About Our App</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[70px] leading-[24px] left-[558.5px] text-[#6c6c72] text-[16px] text-center top-[66px] w-[601px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
      <div className="absolute h-[71px] left-[74px] top-[673px] w-[212px]">
        <div className="absolute inset-[-12.68%_-4.72%_-15.49%_-4.72%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 91">
            <g filter="url(#filter0_d_1_906)" id="Ellipse 4">
              <ellipse cx="116" cy="44.5" fill="var(--fill-0, white)" rx="106" ry="35.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_d_1_906" width="232" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_906" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_906" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[526px] left-0 top-[196px] w-[386px]" data-name="android-smartphone-free-mockup 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAndroidSmartphoneFreeMockup1} />
      </div>
      <CreativeDesign />
      <EasyToUse />
      <BestUserExperince />
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[812px] left-[532px] rounded-[40px] shadow-[40px_40px_100px_0px_rgba(24,48,63,0.5)] top-[547px] w-[375px]" data-name="App">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgApp} />
    </div>
  );
}

function IconsComment({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[696px] size-[50px] top-[316px]"} data-name="Icons/comment">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/comment">
        <div className="absolute inset-[6.74%_3.17%_7.01%_3.08%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.875 43.1265">
            <path d={svgPaths.p318f3440} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="absolute contents left-[571px] top-[316px]" data-name="Chat">
      <IconsComment />
      <div className="-translate-x-1/2 -translate-y-full [word-break:break-word] absolute flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-end leading-[0] left-[720px] text-[25px] text-center text-white top-[426px] uppercase whitespace-nowrap">
        <p className="leading-[37.5px]">Full free chat</p>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[43px] leading-[24px] left-[719.5px] text-[16px] text-center text-white top-[444px] w-[297px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute inset-[3.13%_0]" data-name="surface1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 46.875">
        <g id="surface1">
          <path d={svgPaths.p273f3f80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p31999600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pfb11500} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p7accc00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p11864180} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3b647280} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p15392400} fill="var(--fill-0, white)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function IconsBrowser({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[422px] size-[50px] top-[607px]"} data-name="Icons/browser">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/browser">
        <Surface />
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="absolute contents left-[175px] top-[607px]" data-name="Features">
      <IconsBrowser />
      <div className="-translate-x-full -translate-y-full [word-break:break-word] absolute flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-end leading-[0] left-[472px] text-[25px] text-right text-white top-[717px] uppercase whitespace-nowrap">
        <p className="leading-[37.5px]">unlimiter features</p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[43px] leading-[24px] left-[472px] text-[16px] text-right text-white top-[735px] w-[297px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_9.67%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.3268 50.0001">
        <g id="Group">
          <path d={svgPaths.p13cce200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p396e7600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p39b1e080} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function IconsMaleTelemarketer({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[695px] size-[50px] top-[1419px]"} data-name="Icons/male-telemarketer">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/male-telemarketer">
        <Group />
      </div>
    </div>
  );
}

function Support() {
  return (
    <div className="absolute contents left-[560px] top-[1419px]" data-name="Support">
      <IconsMaleTelemarketer />
      <div className="-translate-x-1/2 -translate-y-full [word-break:break-word] absolute flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-end leading-[0] left-[719.5px] text-[20px] text-center text-white top-[1529px] uppercase whitespace-nowrap">
        <p className="leading-[30px]">24/7 support by real pepole</p>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[43px] leading-[24px] left-[719.5px] text-[16px] text-center text-white top-[1547px] w-[297px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_0_41.21%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 29.3945">
        <g id="Group">
          <path d={svgPaths.p2dc99280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0_0_41.21%_0]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[88.09%_29.94%_0_29.94%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0598 5.95703">
        <g id="Group">
          <path d={svgPaths.p389bdb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[88.09%_29.94%_0_29.94%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[25.68%_23.63%_16.47%_23.63%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.3672 28.927">
        <g id="Group">
          <path d={svgPaths.p6649100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[25.68%_23.63%_16.47%_23.63%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[58.79%_47.07%_35.35%_47.07%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.92969 2.92969">
        <g id="Group">
          <path d={svgPaths.p30855d80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[58.79%_47.07%_35.35%_47.07%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function IconsVector({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[422px] size-[50px] top-[1125px]"} data-name="Icons/vector">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/vector">
        <Group1 />
        <Group3 />
        <Group5 />
        <Group7 />
      </div>
    </div>
  );
}

function Design() {
  return (
    <div className="absolute contents left-[175px] top-[1125px]" data-name="Design">
      <IconsVector />
      <div className="-translate-x-full -translate-y-full [word-break:break-word] absolute flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-end leading-[0] left-[472px] text-[25px] text-right text-white top-[1235px] uppercase whitespace-nowrap">
        <p className="leading-[37.5px]">awsome ui design</p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[43px] leading-[24px] left-[472px] text-[16px] text-right text-white top-[1253px] w-[297px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[0_21.69%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3143 50">
        <g id="Group">
          <path d={svgPaths.p2e1f7540} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconsCellPhone({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[957px] size-[50px] top-[609px]"} data-name="Icons/cell-phone">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/cell-phone">
        <Group9 />
      </div>
    </div>
  );
}

function Version() {
  return (
    <div className="absolute contents left-[957px] top-[609px]" data-name="Version">
      <IconsCellPhone />
      <div className="-translate-x-1/2 -translate-y-full [word-break:break-word] absolute flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-end leading-[0] left-[1139px] text-[25px] text-center text-white top-[719px] uppercase whitespace-nowrap">
        <p className="leading-[37.5px]">{`iso & androind version`}</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[43px] leading-[24px] left-[966px] text-[16px] text-white top-[737px] w-[297px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[16.67%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.9988 37.3333">
        <g id="Group">
          <path d={svgPaths.p11e90900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[0_0_66.67%_66.67%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6667">
        <g id="Group">
          <path d={svgPaths.p31fe0e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[0_0_66.67%_66.67%]" data-name="Group">
      <Group12 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[0_66.67%_66.67%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6667">
        <g id="Group">
          <path d={svgPaths.p3e04b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[0_66.67%_66.67%_0]" data-name="Group">
      <Group14 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[66.67%_0_0_66.67%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6667">
        <g id="Group">
          <path d={svgPaths.p2c64de80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[66.67%_0_0_66.67%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[66.67%_66.67%_0_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6667">
        <g id="Group">
          <path d={svgPaths.p264bbd80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[66.67%_66.67%_0_0]" data-name="Group">
      <Group18 />
    </div>
  );
}

function IconsEyeScanner({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[966px] size-[56px] top-[1122px]"} data-name="Icons/eye-scanner 1">
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="overflow-clip relative size-full" data-name="Icons/eye-scanner 1">
            <Group10 />
            <Group11 />
            <Group13 />
            <Group15 />
            <Group17 />
          </div>
        </div>
      </div>
    </div>
  );
}

function RetinaReadyGraphic() {
  return (
    <div className="absolute contents left-[966px] top-[1122px]" data-name="Retina ready graphic">
      <IconsEyeScanner />
      <div className="-translate-x-1/2 -translate-y-full [word-break:break-word] absolute flex flex-col font-['Josefin_Sans:SemiBold',sans-serif] font-semibold justify-end leading-[0] left-[1137px] text-[25px] text-center text-white top-[1238px] uppercase whitespace-nowrap">
        <p className="leading-[37.5px]">retina ready greaphics</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[43px] leading-[24px] left-[966px] text-[16px] text-white top-[1256px] w-[297px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

function AppFeatyres() {
  return (
    <div className="absolute h-[1710px] left-0 top-[2038px] w-[1440px]" data-name="App Featyres">
      <FullWidthBleed className="top-0 h-[1710px]">
        <img alt="" className="pointer-events-none size-full object-cover" src={imgBackgroundImage} />
      </FullWidthBleed>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[603px] text-[31.25px] text-white top-[120px] uppercase whitespace-nowrap">App features</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[70px] leading-[24px] left-[719.5px] text-[16px] text-center text-white top-[186px] w-[601px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
      <App />
      <Chat />
      <Features />
      <Support />
      <Design />
      <Version />
      <RetinaReadyGraphic />
    </div>
  );
}

function AppScreenshort() {
  return (
    <div className="absolute contents left-[114px] top-[201px]" data-name="App Screenshort">
      <div className="absolute h-[532px] left-[935px] rounded-[40px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[246px] w-[245px]" data-name="004">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none rounded-[40px] size-full" src={imgApp} />
      </div>
      <div className="absolute h-[622px] left-[488px] top-[201px] w-[319px]" data-name="iPhoneX-Mockup 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIPhoneXMockup1} />
      </div>
      <div className="absolute h-[532px] left-[114px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[246px] w-[246px]" data-name="000">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={img000} />
      </div>
      <div className="absolute h-[532px] left-[224px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[246px] w-[246px]" data-name="003">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img003} />
      </div>
      <div className="absolute h-[532px] left-[825px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[246px] w-[245px]" data-name="001">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img001} />
      </div>
    </div>
  );
}

function IconsLineSystemArrowLeftSLine({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[17px] size-[50px] top-[505px]"} data-name="Icons/line/system/arrow-left-s-line">
      <div className="absolute inset-0 overflow-clip" data-name="remix-icons/line/system/arrow-left-s-line">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p235a0300} fill="var(--fill-0, #5956E9)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="absolute contents left-0 top-[488px]" data-name="Left Icon">
      <div className="absolute left-0 size-[84px] top-[488px]">
        <div className="absolute inset-[-10.71%_-11.9%_-13.1%_-11.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
            <g filter="url(#filter0_d_1_858)" id="Ellipse 5">
              <circle cx="52" cy="51" r="41.5" stroke="var(--stroke-0, #5956E9)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="104" id="filter0_d_1_858" width="104" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_858" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_858" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <IconsLineSystemArrowLeftSLine />
    </div>
  );
}

function IconsLineSystemArrowLeftSLine1({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[1227px] size-[50px] top-[505px]"} data-name="Icons/line/system/arrow-left-s-line">
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full" data-name="Icons/arrow-left-s-line">
            <div className="absolute inset-0 overflow-clip" data-name="remix-icons/line/system/arrow-left-s-line">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                <g id="Group">
                  <g id="Vector" />
                  <path d={svgPaths.p235a0300} fill="var(--fill-0, white)" id="Vector_2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightIcon() {
  return (
    <div className="absolute contents left-[1210px] top-[488px]" data-name="Right Icon">
      <div className="absolute flex items-center justify-center left-[1210px] size-[84px] top-[488px]">
        <div className="flex-none rotate-180">
          <div className="relative size-[84px]">
            <div className="absolute inset-[-10.71%_-11.9%_-13.1%_-11.9%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
                <g filter="url(#filter0_d_1_856)" id="Ellipse 6">
                  <circle cx="52" cy="51" fill="var(--fill-0, #5956E9)" r="42" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="104" id="filter0_d_1_856" width="104" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_856" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_856" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsLineSystemArrowLeftSLine1 />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute h-[20px] left-[590px] top-[863px] w-[154px]" data-name="Slider">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 20">
        <g id="Slider">
          <circle cx="10" cy="10" fill="var(--fill-0, #5956E9)" id="Ellipse 7" r="8" />
          <circle cx="44" cy="10" fill="var(--fill-0, #5956E9)" id="Ellipse 9" r="8" />
          <circle cx="78" cy="10" fill="var(--fill-0, #5956E9)" id="Ellipse 10" r="8" />
          <circle cx="112" cy="10" fill="var(--fill-0, #5956E9)" id="Ellipse 11" r="8" />
          <circle cx="146" cy="10" fill="var(--fill-0, #5956E9)" id="Ellipse 12" r="8" />
          <circle cx="10" cy="10" id="Ellipse 8" r="9.75" stroke="var(--stroke-0, #5956E9)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function AppScreenShot() {
  return (
    <div className="absolute left-0 top-[3868px] w-full" data-name="App Screen Shot">
      <AppInterfaceSlider />
    </div>
  );
}

function DownloadStore() {
  return (
    <div className="absolute contents left-0 top-[193px]" data-name="Download Store">
      <div className="absolute h-[45px] left-[174px] top-[194px] w-[151px]" data-name="PngItem_1144050 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[188.64%] left-[-116.62%] max-w-none top-[-88.64%] w-[217.17%]" src={imgPngItem11440502} />
        </div>
      </div>
      <div className="absolute h-[47px] left-0 top-[193px] w-[149px]" data-name="toppng 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[210.64%] left-[-0.16%] max-w-none top-0 w-[100.33%]" src={imgToppng1} />
        </div>
      </div>
    </div>
  );
}

function IconsFillSystemDownload2Fill1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icons/fill/system/download-2-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p2c629c60} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function IconsFillSystemDownload2Fill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[67px] size-[35px] top-[329px]"} data-name="Icons/fill/system/download-2-fill">
      <IconsFillSystemDownload2Fill1 />
    </div>
  );
}

function Download1() {
  return (
    <div className="absolute contents left-0 top-[299px]" data-name="Download">
      <div className="absolute bg-[#5851ea] h-[176px] left-0 rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[299px] w-[170px]" />
      <IconsFillSystemDownload2Fill />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[51px] text-[25px] text-white top-[382px] uppercase whitespace-nowrap">59865</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[21px] text-[20px] text-white top-[425px] uppercase whitespace-nowrap">Download</p>
    </div>
  );
}

function IconsFillSystemThumbUpFill1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icons/fill/system/thumb-up-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p315f6380} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function IconsFillSystemThumbUpFill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[273px] size-[35px] top-[329px]"} data-name="Icons/fill/system/thumb-up-fill">
      <IconsFillSystemThumbUpFill1 />
    </div>
  );
}

function Like() {
  return (
    <div className="absolute contents left-[200px] top-[299px]" data-name="Like">
      <div className="absolute bg-[#5851ea] h-[176px] left-[200px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[299px] w-[170px]" />
      <IconsFillSystemThumbUpFill />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[251px] text-[25px] text-white top-[382px] uppercase whitespace-nowrap">29852</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[262px] text-[20px] text-white top-[425px] uppercase whitespace-nowrap">LIke</p>
    </div>
  );
}

function IconsFillSystemStarFill1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icons/fill/system/star-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p3a1a4280} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function IconsFillSystemStarFill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[465px] size-[35px] top-[329px]"} data-name="Icons/fill/system/star-fill">
      <IconsFillSystemStarFill1 />
    </div>
  );
}

function Component5StarRating() {
  return (
    <div className="absolute contents left-[400px] top-[299px]" data-name="5 Star Rating">
      <div className="absolute bg-[#5851ea] h-[176px] left-[400px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[299px] w-[170px]" />
      <IconsFillSystemStarFill />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[458px] text-[25px] text-white top-[382px] uppercase whitespace-nowrap">1500</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[410px] text-[20px] text-white top-[425px] uppercase whitespace-nowrap">5 star rating</p>
    </div>
  );
}

function DownloadLikeRating() {
  return (
    <div className="absolute contents left-0 top-[299px]" data-name="Download/ Like/ Rating">
      <Download1 />
      <Like />
      <Component5StarRating />
    </div>
  );
}

function AppDesgin() {
  return (
    <div className="absolute contents left-[650px] top-0" data-name="App Desgin">
      <div className="absolute h-[71px] left-[772px] top-[435px] w-[212px]">
        <div className="absolute inset-[-12.68%_-4.72%_-15.49%_-4.72%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 91">
            <g filter="url(#filter0_d_1_809)" id="Ellipse 4">
              <ellipse cx="116" cy="44.5" fill="var(--fill-0, white)" rx="106" ry="35.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_d_1_809" width="232" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_809" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_809" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[480px] left-[650px] top-0 w-[516px]" data-name="Gravity-Scene-iPhone-12-Mockup 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGravitySceneIPhone12Mockup1} />
      </div>
    </div>
  );
}

function DownloadAppNow() {
  return (
    <div className="absolute left-0 top-[4871px] w-full" data-name="Download App Now">
      <DownloadAppSection />
    </div>
  );
}

function IconsFillMediaVideoFill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[703px] size-[24px] top-[507px]"} data-name="Icons/fill/media/video-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/video-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p3f86a700} fill="var(--fill-0, #5956E9)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function VodeoIcon() {
  return (
    <div className="absolute contents left-[680px] top-[484px]" data-name="Vodeo Icon">
      <div className="absolute left-[680px] size-[70px] top-[484px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
          <circle cx="35" cy="35" fill="var(--fill-0, white)" fillOpacity="0.6" id="Ellipse 17" r="35" />
        </svg>
      </div>
      <div className="absolute left-[685px] size-[60px] top-[489px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="30" cy="30" fill="var(--fill-0, white)" fillOpacity="0.7" id="Ellipse 16" r="30" />
        </svg>
      </div>
      <div className="absolute left-[690px] size-[50px] top-[494px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
          <circle cx="25" cy="25" fill="var(--fill-0, white)" id="Ellipse 15" r="25" />
        </svg>
      </div>
      <IconsFillMediaVideoFill />
    </div>
  );
}

function Video() {
  return (
    <div className="absolute contents left-[334px] top-[363px]" data-name="Video">
      <div className="absolute h-[319px] left-[334px] rounded-[10px] shadow-[0px_10px_100px_0px_rgba(0,0,0,0.24)] top-[363px] w-[770px]" data-name="Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgImage} />
          <div className="absolute bg-[rgba(88,81,234,0.4)] inset-0 rounded-[10px]" />
        </div>
      </div>
      <VodeoIcon />
    </div>
  );
}

function HowToUseTheApppPerfectly() {
  return (
    <div className="absolute h-[682px] left-px top-[5580px] w-[1440px]" data-name="How to use the appp perfectly">
      <FullWidthBleed className="top-[42px] h-[477px]">
        <img alt="" className="pointer-events-none size-full object-cover" src={imgBackgroundImage} />
      </FullWidthBleed>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[718.5px] text-[31.25px] text-center text-white top-[162px] uppercase whitespace-nowrap">how to use the app perfectly</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[70px] leading-[24px] left-[718.5px] text-[16px] text-center text-white top-[233px] w-[601px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
      <Video />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute left-[75px] size-[220px] top-[230px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 220">
        <g id="Group 1513">
          <g id="Ellipse 21">
            <mask fill="white" id="path-1-inside-1_1_783">
              <path d={svgPaths.p32bb2700} />
            </mask>
            <path d={svgPaths.p32bb2700} mask="url(#path-1-inside-1_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
          <g id="Ellipse 22">
            <mask fill="white" id="path-2-inside-2_1_783">
              <path d={svgPaths.p14ec3700} />
            </mask>
            <path d={svgPaths.p14ec3700} mask="url(#path-2-inside-2_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
          <g id="Ellipse 23">
            <mask fill="white" id="path-3-inside-3_1_783">
              <path d={svgPaths.p2cfca480} />
            </mask>
            <path d={svgPaths.p2cfca480} mask="url(#path-3-inside-3_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
          <g id="Ellipse 24">
            <mask fill="white" id="path-4-inside-4_1_783">
              <path d={svgPaths.p2f329480} />
            </mask>
            <path d={svgPaths.p2f329480} mask="url(#path-4-inside-4_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsFillFacebookFill1({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[44px] size-[24px] top-[704px]"} data-name="Icons/fill/facebook-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/facebook-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p32db6580} fill="var(--fill-0, #5956E9)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillInstagramFill1({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[130px] size-[24px] top-[704px]"} data-name="Icons/fill/instagram-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/instagram-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p35d17b00} fill="var(--fill-0, #232233)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillTwitterFill1({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[216px] size-[24px] top-[704px]"} data-name="Icons/fill/twitter-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/twitter-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p1f63f200} fill="var(--fill-0, #232233)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillYoutubeFill1({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[302px] size-[24px] top-[704px]"} data-name="Icons/fill/youtube-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/youtube-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p50be600} fill="var(--fill-0, #232233)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SocialIcon1() {
  return (
    <div className="absolute contents left-[44px] top-[704px]" data-name="Social Icon">
      <IconsFillFacebookFill1 />
      <div className="absolute flex h-[23px] items-center justify-center left-[99px] top-[705px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 1">
                <line id="Line " stroke="var(--stroke-0, #6C6C72)" x2="23" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillInstagramFill1 />
      <div className="absolute flex h-[23px] items-center justify-center left-[185px] top-[705px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 1">
                <line id="Line " stroke="var(--stroke-0, #6C6C72)" x2="23" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillTwitterFill1 />
      <div className="absolute flex h-[23px] items-center justify-center left-[271px] top-[705px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 1">
                <line id="Line " stroke="var(--stroke-0, #6C6C72)" x2="23" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillYoutubeFill1 />
    </div>
  );
}

function TeamMember1() {
  return (
    <div className="absolute contents left-0 top-[201px]" data-name="Team Member-1">
      <div className="absolute bg-white h-[580px] left-0 rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[201px] w-[370px]" />
      <div className="absolute left-[86px] size-[198px] top-[241px]" data-name="Profile">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="198" src={imgProfile} width="198" />
      </div>
      <Group19 />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[77px] text-[#232233] text-[31.25px] top-[516px] uppercase whitespace-nowrap">Carla Press</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[100px] text-[#6c6c72] text-[20px] top-[559px] uppercase whitespace-nowrap">App Developer</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[61px] leading-[24px] left-[185px] text-[#6c6c72] text-[16px] text-center top-[603px] w-[326px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
      <SocialIcon1 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute left-[475px] size-[220px] top-[230px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 220">
        <g id="Group 1513">
          <g id="Ellipse 21">
            <mask fill="white" id="path-1-inside-1_1_783">
              <path d={svgPaths.p32bb2700} />
            </mask>
            <path d={svgPaths.p32bb2700} mask="url(#path-1-inside-1_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
          <g id="Ellipse 22">
            <mask fill="white" id="path-2-inside-2_1_783">
              <path d={svgPaths.p14ec3700} />
            </mask>
            <path d={svgPaths.p14ec3700} mask="url(#path-2-inside-2_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
          <g id="Ellipse 23">
            <mask fill="white" id="path-3-inside-3_1_783">
              <path d={svgPaths.p2cfca480} />
            </mask>
            <path d={svgPaths.p2cfca480} mask="url(#path-3-inside-3_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
          <g id="Ellipse 24">
            <mask fill="white" id="path-4-inside-4_1_783">
              <path d={svgPaths.p2f329480} />
            </mask>
            <path d={svgPaths.p2f329480} mask="url(#path-4-inside-4_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsFillFacebookFill2({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[444px] size-[24px] top-[704px]"} data-name="Icons/fill/facebook-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/facebook-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p32db6580} fill="var(--fill-0, #232233)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillInstagramFill2({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[530px] size-[24px] top-[704px]"} data-name="Icons/fill/instagram-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/instagram-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p35d17b00} fill="var(--fill-0, #232233)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillTwitterFill2({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[616px] size-[24px] top-[704px]"} data-name="Icons/fill/twitter-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/twitter-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p1f63f200} fill="var(--fill-0, #232233)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillYoutubeFill2({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[702px] size-[24px] top-[704px]"} data-name="Icons/fill/youtube-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/youtube-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p50be600} fill="var(--fill-0, #232233)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SocialIcon2() {
  return (
    <div className="absolute contents left-[444px] top-[704px]" data-name="Social Icon">
      <IconsFillFacebookFill2 />
      <div className="absolute flex h-[23px] items-center justify-center left-[499px] top-[705px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 1">
                <line id="Line " stroke="var(--stroke-0, #6C6C72)" x2="23" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillInstagramFill2 />
      <div className="absolute flex h-[23px] items-center justify-center left-[585px] top-[705px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 1">
                <line id="Line " stroke="var(--stroke-0, #6C6C72)" x2="23" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillTwitterFill2 />
      <div className="absolute flex h-[23px] items-center justify-center left-[671px] top-[705px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 1">
                <line id="Line " stroke="var(--stroke-0, #6C6C72)" x2="23" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillYoutubeFill2 />
    </div>
  );
}

function TeamMember2() {
  return (
    <div className="absolute contents left-[400px] top-[201px]" data-name="Team Member-2">
      <div className="absolute bg-white h-[580px] left-[400px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[201px] w-[370px]" />
      <Group20 />
      <div className="absolute left-[486px] size-[198px] top-[241px]" data-name="Profile Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="198" src={imgProfileImage} width="198" />
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[473px] text-[#232233] text-[31.25px] top-[510px] uppercase whitespace-nowrap">Craig Gouse</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[500px] text-[#6c6c72] text-[20px] top-[559px] uppercase whitespace-nowrap">UI/UX Designer</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[61px] leading-[24px] left-[584px] text-[#6c6c72] text-[16px] text-center top-[603px] w-[326px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
      <SocialIcon2 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute left-[875px] size-[220px] top-[230px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 220">
        <g id="Group 1513">
          <g id="Ellipse 21">
            <mask fill="white" id="path-1-inside-1_1_783">
              <path d={svgPaths.p32bb2700} />
            </mask>
            <path d={svgPaths.p32bb2700} mask="url(#path-1-inside-1_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
          <g id="Ellipse 22">
            <mask fill="white" id="path-2-inside-2_1_783">
              <path d={svgPaths.p14ec3700} />
            </mask>
            <path d={svgPaths.p14ec3700} mask="url(#path-2-inside-2_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
          <g id="Ellipse 23">
            <mask fill="white" id="path-3-inside-3_1_783">
              <path d={svgPaths.p2cfca480} />
            </mask>
            <path d={svgPaths.p2cfca480} mask="url(#path-3-inside-3_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
          <g id="Ellipse 24">
            <mask fill="white" id="path-4-inside-4_1_783">
              <path d={svgPaths.p2f329480} />
            </mask>
            <path d={svgPaths.p2f329480} mask="url(#path-4-inside-4_1_783)" stroke="var(--stroke-0, #5956E9)" strokeWidth="8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsFillFacebookFill3({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[844px] size-[24px] top-[704px]"} data-name="Icons/fill/facebook-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/facebook-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p32db6580} fill="var(--fill-0, #232233)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillInstagramFill3({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[930px] size-[24px] top-[704px]"} data-name="Icons/fill/instagram-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/instagram-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p35d17b00} fill="var(--fill-0, #232233)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillTwitterFill3({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[1016px] size-[24px] top-[704px]"} data-name="Icons/fill/twitter-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/twitter-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p1f63f200} fill="var(--fill-0, #232233)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillYoutubeFill3({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[1102px] size-[24px] top-[704px]"} data-name="Icons/fill/youtube-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/youtube-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p50be600} fill="var(--fill-0, #232233)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SocialIcon3() {
  return (
    <div className="absolute contents left-[844px] top-[704px]" data-name="Social Icon">
      <IconsFillFacebookFill3 />
      <div className="absolute flex h-[23px] items-center justify-center left-[899px] top-[705px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 1">
                <line id="Line " stroke="var(--stroke-0, #6C6C72)" x2="23" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillInstagramFill3 />
      <div className="absolute flex h-[23px] items-center justify-center left-[985px] top-[705px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 1">
                <line id="Line " stroke="var(--stroke-0, #6C6C72)" x2="23" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillTwitterFill3 />
      <div className="absolute flex h-[23px] items-center justify-center left-[1071px] top-[705px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 1">
                <line id="Line " stroke="var(--stroke-0, #6C6C72)" x2="23" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillYoutubeFill3 />
    </div>
  );
}

function TeamMember3() {
  return (
    <div className="absolute contents left-[800px] top-[201px]" data-name="Team Member-3">
      <div className="absolute bg-white h-[580px] left-[800px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[201px] w-[370px]" />
      <Group21 />
      <div className="absolute left-[886px] size-[198px] top-[241px]" data-name="Profile Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="198" src={imgProfileImage1} width="198" />
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[827px] text-[#232233] text-[31.25px] top-[510px] uppercase whitespace-nowrap">Jocelyn Septimus</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[875px] text-[#6c6c72] text-[20px] top-[559px] uppercase whitespace-nowrap">Website developer</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[61px] leading-[24px] left-[983px] text-[#6c6c72] text-[16px] text-center top-[603px] w-[326px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
      <SocialIcon3 />
    </div>
  );
}

function TeamMember() {
  return (
    <div className="absolute contents left-0 top-[201px]" data-name="Team Member">
      <TeamMember1 />
      <TeamMember2 />
      <TeamMember3 />
    </div>
  );
}

function OurReativeTeam() {
  return (
    <div className="absolute h-[781px] left-[135px] top-[6382px] w-[1170px]" data-name="Our reative team">
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[426px] text-[#232233] text-[31.25px] top-0 uppercase whitespace-nowrap">Our reative team</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[70px] leading-[24px] left-[584.5px] text-[#6c6c72] text-[16px] text-center top-[71px] w-[601px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
      <TeamMember />
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Background Image">
      <FullWidthBleed className="top-0 h-[876px]">
        <img alt="" className="pointer-events-none size-full object-cover" src={imgBackgroundImage} />
      </FullWidthBleed>
    </div>
  );
}

function Review3() {
  return (
    <div className="absolute contents left-[735px] top-[335px]" data-name="Review-3">
      <div className="absolute bg-white h-[330px] left-[735px] rounded-[10px] shadow-[0px_10px_100px_0px_rgba(0,0,0,0.24)] top-[335px] w-[570px]" />
      <div className="absolute left-[971px] size-[96px] top-[375px]" data-name="Profile Image-3">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96" src={imgProfileImage3} width="96" />
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[926px] text-[#232233] text-[31.25px] top-[491px] uppercase whitespace-nowrap">Ann Lubin</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[1020px] text-[#232233] text-[20px] text-center top-[540px] uppercase whitespace-nowrap">Co-Founder</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[64px] leading-[24px] left-[1019.5px] text-[#6c6c72] text-[16px] text-center top-[578px] w-[495px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
    </div>
  );
}

function Review2() {
  return (
    <div className="absolute contents left-[134px] top-[335px]" data-name="Review-2">
      <div className="absolute bg-white h-[330px] left-[134px] rounded-[10px] shadow-[0px_10px_100px_0px_rgba(0,0,0,0.24)] top-[335px] w-[570px]" />
      <div className="absolute left-[370px] size-[96px] top-[375px]" data-name="Profile Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96" src={imgProfileImage3} width="96" />
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[325px] text-[#232233] text-[31.25px] top-[491px] uppercase whitespace-nowrap">Ann Lubin</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[419px] text-[#232233] text-[20px] text-center top-[540px] uppercase whitespace-nowrap">Co-Founder</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[64px] leading-[24px] left-[418.5px] text-[#6c6c72] text-[16px] text-center top-[578px] w-[495px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
    </div>
  );
}

function Review1() {
  return (
    <div className="absolute contents left-[335px] top-[321px]" data-name="Review-1">
      <div className="absolute bg-white h-[357px] left-[335px] rounded-[10px] shadow-[0px_10px_100px_0px_rgba(0,0,0,0.24)] top-[321px] w-[770px]" />
      <div className="absolute left-[671px] size-[96px] top-[361px]" data-name="Profile Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96" src={imgProfileImage3} width="96" />
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[626px] text-[#232233] text-[31.25px] top-[477px] uppercase whitespace-nowrap">Ann Lubin</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[720px] text-[#232233] text-[20px] text-center top-[526px] uppercase whitespace-nowrap">Co-Founder</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[78px] leading-[24px] left-[719.5px] text-[#6c6c72] text-[16px] text-center top-[564px] w-[647px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
    </div>
  );
}

function Review() {
  return (
    <div className="absolute contents left-[134px] top-[321px]" data-name="Review">
      <Review3 />
      <Review2 />
      <Review1 />
    </div>
  );
}

function Slider1() {
  return (
    <div className="absolute h-[20px] left-[662px] top-[738px] w-[154px]" data-name="Slider">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 20">
        <g id="Slider">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Ellipse 28" r="7.5" stroke="var(--stroke-0, white)" />
          <circle cx="44" cy="10" fill="var(--fill-0, white)" id="Ellipse 29" r="7.5" stroke="var(--stroke-0, white)" />
          <circle cx="78" cy="10" fill="var(--fill-0, white)" id="Ellipse 30" r="7.5" stroke="var(--stroke-0, white)" />
          <circle cx="112" cy="10" fill="var(--fill-0, white)" id="Ellipse 31" r="7.5" stroke="var(--stroke-0, white)" />
          <circle cx="146" cy="10" fill="var(--fill-0, white)" id="Ellipse 32" r="7.5" stroke="var(--stroke-0, white)" />
          <circle cx="10" cy="10" id="Ellipse 33" r="9.75" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function OurHappyCustomers() {
  return (
    <div className="absolute h-[876px] left-0 top-[7283px] w-[1440px]" data-name="Our Happy Customers">
      <BackgroundImage />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[520px] text-[31.25px] text-white top-[120px] uppercase whitespace-nowrap">Our Happy Customers</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[70px] leading-[24px] left-[719.5px] text-[16px] text-center text-white top-[191px] w-[601px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
      <Review />
      <Slider1 />
    </div>
  );
}

function BlogPost() {
  return (
    <div className="absolute contents left-0 top-[201px]" data-name="Blog Post-1">
      <div className="absolute bg-white h-[500px] left-0 rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[201px] w-[370px]" />
      <div className="absolute h-[228px] left-0 rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[201px] w-[370px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[10px] rounded-tr-[10px] size-full" src={imgImage1} />
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[18px] text-[#232233] text-[20px] top-[469px] uppercase w-[334px]">{`The Snap Pixel: How It Works and How to Install `}</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[72px] leading-[24px] left-[18px] text-[#6c6c72] text-[16px] top-[539px] w-[334px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] left-[18px] text-[#5851ea] text-[20px] top-[639px] underline uppercase whitespace-nowrap">Read more</p>
    </div>
  );
}

function BlogPost1() {
  return (
    <div className="absolute contents left-[400px] top-[201px]" data-name="Blog Post-2">
      <div className="absolute bg-white h-[500px] left-[400px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[201px] w-[370px]" />
      <div className="absolute h-[228px] left-[400px] rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[201px] w-[370px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[10px] rounded-tr-[10px] size-full" src={imgImage2} />
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[418px] text-[#232233] text-[20px] top-[469px] uppercase w-[334px]">Global Partner Solutions: A Partnership of Innovation</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[70px] leading-[24px] left-[418px] text-[#6c6c72] text-[16px] top-[539px] w-[334px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] left-[418px] text-[#5851ea] text-[20px] top-[639px] underline uppercase whitespace-nowrap">Read more</p>
    </div>
  );
}

function BlogPost2() {
  return (
    <div className="absolute contents left-[800px] top-[201px]" data-name="Blog Post-3">
      <div className="absolute bg-white h-[500px] left-[800px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[201px] w-[370px]" />
      <div className="absolute h-[228px] left-[800px] rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] top-[201px] w-[370px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[10px] rounded-tr-[10px] size-full" src={imgImage3} />
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[30px] left-[818px] text-[#232233] text-[20px] top-[469px] uppercase w-[334px]">2021: An opportunity for Snapchatters to start fresh</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[70px] leading-[24px] left-[818px] text-[#6c6c72] text-[16px] top-[539px] w-[334px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] left-[818px] text-[#5851ea] text-[20px] top-[639px] underline uppercase whitespace-nowrap">Read more</p>
    </div>
  );
}

function OurRecentBlog() {
  return (
    <div className="absolute h-[701px] left-[135px] top-[8279px] w-[1170px]" data-name="Our recent blog">
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[429px] text-[#232233] text-[31.25px] top-0 uppercase whitespace-nowrap">Our recent blog</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[70px] leading-[24px] left-[584.5px] text-[#6c6c72] text-[16px] text-center top-[71px] w-[601px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
      <BlogPost />
      <BlogPost1 />
      <BlogPost2 />
    </div>
  );
}

function IconsFillFacebookFill4({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[135px] size-[24px] top-[394px]"} data-name="Icons/fill/facebook-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/facebook-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p32db6580} fill="var(--fill-0, #5956E9)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillInstagramFill4({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[219px] size-[24px] top-[394px]"} data-name="Icons/fill/instagram-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/instagram-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p35d17b00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillTwitterFill4({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[303px] size-[24px] top-[394px]"} data-name="Icons/fill/twitter-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/twitter-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p1f63f200} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsFillYoutubeFill4({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[387px] size-[24px] top-[394px]"} data-name="Icons/fill/youtube-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/youtube-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p50be600} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SocialIcon4() {
  return (
    <div className="absolute contents left-[135px] top-[394px]" data-name="Social Icon">
      <IconsFillFacebookFill4 />
      <div className="absolute flex h-[20px] items-center justify-center left-[189px] top-[396px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[20px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Line 4" stroke="var(--stroke-0, white)" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillInstagramFill4 />
      <div className="absolute flex h-[20px] items-center justify-center left-[273px] top-[396px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[20px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Line 4" stroke="var(--stroke-0, white)" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillTwitterFill4 />
      <div className="absolute flex h-[20px] items-center justify-center left-[357px] top-[396px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[20px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Line 4" stroke="var(--stroke-0, white)" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconsFillYoutubeFill4 />
    </div>
  );
}

function About1() {
  return (
    <div className="absolute contents left-[135px] top-[235px]" data-name="About">
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal h-[72px] leading-[24px] left-[135px] text-[16px] text-white top-[284px] w-[334px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[47.25px] left-[135px] text-[31.25px] text-white top-[235px] uppercase whitespace-nowrap">Logo</p>
      <SocialIcon4 />
    </div>
  );
}

function QuickLink() {
  return (
    <div className="[word-break:break-word] absolute contents left-[535px] text-white top-[235px] whitespace-nowrap" data-name="Quick Link">
      <p className="absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[37.5px] left-[535px] text-[25px] top-[235px] uppercase">quick link</p>
      <p className="absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[24px] left-[535px] text-[16px] top-[320px]">Features</p>
      <p className="absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[24px] left-[535px] text-[16px] top-[284px]">About</p>
      <p className="absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[24px] left-[535px] text-[16px] top-[356px]">Screenshot</p>
      <p className="absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[24px] left-[535px] text-[16px] top-[392px]">Blog</p>
    </div>
  );
}

function IconsFillBusinessSendPlane2Fill({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[1264px] size-[24px] top-[378px]"} data-name="Icons/fill/business/send-plane-2-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/send-plane-2-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.pe3c400} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function EmailSend() {
  return (
    <div className="absolute contents left-[935px] top-[365px]" data-name="Email send">
      <div className="absolute bg-white h-[50px] left-[935px] rounded-[4px] top-[365px] w-[369px]" />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[24px] left-[953px] text-[#6c6c72] text-[16px] top-[378px] whitespace-nowrap">Your email address</p>
      <div className="absolute bg-[#5956e9] h-[46px] left-[1250px] rounded-[4px] top-[367px] w-[52px]" />
      <IconsFillBusinessSendPlane2Fill />
    </div>
  );
}

function NewsLetter() {
  return (
    <div className="absolute contents left-[935px] top-[235px]" data-name="News Letter">
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[37.5px] left-[935px] text-[25px] text-white top-[235px] uppercase whitespace-nowrap">news letter</p>
      <div className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[0] left-[935px] text-[16px] text-white top-[284px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Subscribe our newsletter to get our latest</p>
        <p className="leading-[24px]">{`update & news`}</p>
      </div>
      <EmailSend />
    </div>
  );
}

function Copyright() {
  return (
    <div className="absolute contents left-[531px] top-[500px]" data-name="Copyright">
      <div className="absolute left-[531px] overflow-clip size-[24px] top-[500px]" data-name="Icons/copyright-line">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p32713e00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:Regular',sans-serif] font-normal leading-[24px] left-[573px] text-[16px] text-white top-[500px] whitespace-nowrap">Copyright 2021 .Ojjomedia. All Right Reserved.</p>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Background Image">
      <div className="absolute bg-white h-[230px] left-0 rounded-[30px] top-0 w-[1170px]" />
    </div>
  );
}

function IconsFillMailFill1({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[80px] size-[40px] top-[95px]"} data-name="Icons/fill/mail-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/mail-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p273ccc00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function EmailIcon() {
  return (
    <div className="absolute contents left-[50px] top-[65px]" data-name="Email Icon">
      <div className="absolute left-[50px] size-[100px] top-[65px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="var(--fill-0, #5956E9)" id="Ellipse 34" r="50" />
        </svg>
      </div>
      <IconsFillMailFill1 />
    </div>
  );
}

function Email1() {
  return (
    <div className="absolute contents left-[50px] top-[65px]" data-name="Email">
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[37.5px] left-[168px] lowercase text-[#232233] text-[25px] top-[103px] whitespace-nowrap">info@youremail.com</p>
      <EmailIcon />
    </div>
  );
}

function IconsFillPhoneFill1({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[665px] size-[40px] top-[95px]"} data-name="Icons/fill/phone-fill">
      <div className="absolute inset-0 overflow-clip" data-name="Icons/phone-fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p60daf00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Call2() {
  return (
    <div className="absolute contents left-[635px] top-[65px]" data-name="Call">
      <div className="absolute left-[635px] size-[100px] top-[65px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="var(--fill-0, #5956E9)" id="Ellipse 34" r="50" />
        </svg>
      </div>
      <IconsFillPhoneFill1 />
    </div>
  );
}

function Call1() {
  return (
    <div className="absolute contents left-[635px] top-[65px]" data-name="Call">
      <Call2 />
      <p className="[word-break:break-word] absolute font-['Josefin_Sans:SemiBold',sans-serif] font-semibold leading-[37.5px] left-[753px] text-[#232233] text-[25px] top-[103px] whitespace-nowrap">+880 321 655 9985</p>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="absolute h-[230px] left-[135px] top-[-128px] w-[1170px]" data-name="Contact us">
      <BackgroundImage1 />
      <Email1 />
      <div className="absolute flex h-[117px] items-center justify-center left-[585px] top-[57px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[117px]">
            <div className="absolute inset-[-4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 4">
                <line id="Line 2" stroke="var(--stroke-0, #6C6C72)" strokeWidth="4" x2="117" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Call1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[542px] left-0 top-[9228px] w-[1440px]" data-name="Footer">
      <FullWidthBleed className="top-0 h-[542px] bg-[#232233]" />
      <About1 />
      <QuickLink />
      <NewsLetter />
      <div className="absolute h-0 left-[135px] top-[482px] w-[1167px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1167 1">
            <line id="Line 3" stroke="var(--stroke-0, white)" x2="1167" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Copyright />
      <ContactUs />
    </div>
  );
}

export default function Component01HomePageLight() {
  return (
    <div className="bg-white relative size-full" data-name="01_Home Page Light">
      <HeroSaction />
      <About />
      <AppFeatyres />
      <AppScreenShot />
      <DownloadAppNow />
      <HowToUseTheApppPerfectly />
      <OurReativeTeam />
      <OurHappyCustomers />
      <OurRecentBlog />
      <Footer />
    </div>
  );
}