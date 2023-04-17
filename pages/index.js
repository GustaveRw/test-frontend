import { useState } from "react";

const App = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleRegisterClick = () => {
    setName('');
    setPhoneNumber('');
  };

  return (
    <div className="relative bg-white w-full h-[1139px] overflow-hidden text-right text-sm text-white font-montserrat">
      <div className="absolute top-[20px] left-[852px] w-[480px] h-[30px]" />
      <img
        className="absolute top-[5885px] left-[1217px] w-6 h-6 object-cover"
        alt=""
        src="/image@2x.png"
      />
      <img
        className="absolute top-[5885px] left-[1265px] w-6 h-6 object-cover"
        alt=""
        src="/image1@2x.png"
      />
      <img
        className="absolute top-[5885px] left-[1313px] w-6 h-6 object-cover"
        alt=""
        src="/image2@2x.png"
      />
      <img
        className="absolute top-[5885px] left-[1361px] w-6 h-6 object-cover"
        alt=""
        src="/image3@2x.png"
      />
      <div className="absolute top-[5883px] left-[285px] text-[18px] tracking-[1px] leading-[25.2px] uppercase text-gainsboro text-left inline-block w-[78px]">
        F O L D.
      </div>
      <div className="absolute top-[5883px] left-[699px] leading-[24px] uppercase inline-block w-[52px]">
        About
      </div>
      <div className="absolute top-[5883px] left-[775px] leading-[24px] uppercase inline-block w-[63px]">
        Privacy
      </div>
      <div className="absolute top-[5883px] left-[862px] leading-[24px] uppercase inline-block w-[50px]">
        Terms
      </div>
      <div className="absolute top-[5883px] left-[936px] leading-[24px] uppercase inline-block w-[69px]">
        Contact
      </div>
      <div className="absolute top-[0px] left-[0px] w-[880px] h-[1139px] text-left text-[9.91px]">
        <div className="absolute top-[0px] left-[0px] w-[880px] h-[71px]" />
        <div className="absolute top-[0px] left-[0px] bg-midnightblue w-[390px] h-[1139px]" />
        <div className="absolute top-[42px] left-[50px] w-[34px] h-[9px] text-[9.12px]">
          <div className="absolute w-full top-[0%] left-[0%] tracking-[1.52px] leading-[9.12px] inline-block">
            Logo.
          </div>
        </div>
        <div className="absolute top-[507px] left-[69px] w-[269px] h-[372.35px] text-center text-midnightblue">
          <div className="absolute top-[0px] left-[0px] w-[269px] h-[372.35px]">
            <div className="absolute top-[0px] left-[0px] rounded-[7.08px] bg-white w-[269px] h-[372.35px]" />
            <div className="absolute top-[109.72px] left-[21.24px] w-[219.45px] h-[114.81px] text-left">
              <div className="absolute top-[45.73px] left-[0px] bg-lightsteelblue w-[219.45px] h-[1.42px]" />
              <div className="absolute top-[21.24px] left-[0px] bg-white w-[219.45px] h-[24.78px]" />
              <div className="absolute top-[113.4px] left-[0px] bg-lightsteelblue w-[219.45px] h-[1.42px]" />
              <div className="absolute top-[88.49px] left-[0px] bg-white w-[219.45px] h-[24.78px]" />
              <label htmlFor="name"  className="absolute top-[0px] left-[0px] leading-[13.87px] inline-block w-[53.8px]">
                Name*
              </label>
              <input
                 type="text"
                 id="name"
                 name="name"
                 value={name}
                 onChange={handleNameChange}
                 className="absolute top-[20.45px] left-[0px] w-[165.65px] h-[25.3px] bg-transparent  px-[10px] py-[5px] outline-none"
             />
              <label htmlFor="phoneNumber" className="absolute top-[67.25px] left-0 leading-[13.87px] inline-block w-[83.53px]">
               Phone Number*
              </label>
              <input
                 type="text"
                 id="phoneNumber"
                 name="phoneNumber"
                 value={phoneNumber}
                 onChange={handlePhoneNumberChange}
                 className="absolute top-[84.17px] left-[opx] w-[135.92px] h-[25.3px] bg-transparent px-[10px] py-[5px] outline-none"
               />
              </div>
            <div className="absolute top-[298.02px] left-[24.78px] rounded-[35.39px] bg-midnightblue box-border w-[219.45px] h-[29.73px] border-[0.7px] border-solid border-midnightblue" />
            <b className="absolute top-[23.36px] left-[15.57px] tracking-[1.42px] leading-[11.89px] uppercase inline-block w-[230.07px]">
              FORM TEMPLATE
            </b>
            <div className="absolute top-[43.18px] left-[55.92px] text-[7.43px] leading-[14.05px] inline-block w-[157.86px]">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit.
            </div>
          </div>
          <div className="absolute top-[299.44px] left-[89.9px] text-[8.49px] tracking-[1.42px] leading-[28.32px] uppercase text-white inline-block w-[89.19px] cursor-pointer" onClick={handleRegisterClick}>
            Register
          </div>
        </div>
        <div className="relative">
      <button
        onClick={handleDropdownClick}
        className="absolute top-[42px] left-[299.85px] w-[48.15px] h-[38.52px] text-[5.57px] focus:outline-none"
      >
        <div className="absolute top-[15.2px] left-[0px] rounded-[3.48px] bg-white w-[48.15px] h-[23.31px]" />
        <div className="absolute top-[0px] left-[5.57px] w-[41.05px] h-[34.97px]">
          <img
            className="absolute top-[0px] left-[31.93px] w-[9.12px] h-[9.12px] object-cover"
            alt=""
            src="/world-1-1@2x.png"
          />
          {isDropdownOpen ? (
            <button className="absolute top-[2px] left-[2.57px] text-[6.59px] leading-[6.89px] capitalize text-right inline-block w-5 focus:outline-none cursor-pointer">
            Select
          </button>
          ) : (
          <button className="absolute top-[2px] left-[2.57px] text-[6.59px] leading-[6.89px] capitalize text-right inline-block w-5 focus:outline-none cursor-pointer">
            Login
          </button>
          )}
          </div>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-[11px] left-[-5.5px] w-[48.15px] h-[29px] bg-white rounded-[3.48px] shadow-md">
              <button className="w-full h-[14.5px] text-[6.59px] leading-[6.89px] text-midnightblue focus:outline-none">
                English
              </button>
              <button className="w-full h-[14.5px] text-[6.59px] leading-[6.89px] text-lightsteelblue focus:outline-none">
                Kinyarwanda
              </button>
            </div>
          )}
        </div>

        <div className="absolute top-[959px] left-[95.9px] w-[216.62px] h-[76.09px] text-right">
          <img
            className="absolute top-[59.1px] left-[44.6px] w-[16.99px] h-[16.99px] object-cover"
            alt=""
            src="/image4@2x.png"
          />
          <img
            className="absolute top-[59.1px] left-[78.58px] w-[16.99px] h-[16.99px] object-cover"
            alt=""
            src="/image5@2x.png"
          />
          <img
            className="absolute top-[59.1px] left-[112.55px] w-[16.99px] h-[16.99px] object-cover"
            alt=""
            src="/image6@2x.png"
          />
          <div className="absolute top-[0px] left-[90.1px] text-[12.74px] tracking-[0.71px] leading-[17.84px] uppercase text-gainsboro text-left">
            LOGO.
          </div>
          <div className="absolute top-[25.83px] left-[0px] leading-[16.99px] uppercase inline-block w-[36.81px]">
            About
          </div>
          <div className="absolute top-[25.83px] left-[53.8px] leading-[16.99px] uppercase inline-block w-[44.6px]">
            Privacy
          </div>
          <div className="absolute top-[25.83px] left-[115.39px] leading-[16.99px] uppercase inline-block w-[35.39px]">
            Terms
          </div>
          <div className="absolute top-[25.83px] left-[167.77px] leading-[16.99px] uppercase inline-block w-[48.84px]">
            Contact
          </div>
          <img
            className="absolute top-[59.1px] left-[146.53px] w-[16.99px] h-[16.99px] object-cover"
            alt=""
            src="/facebook-1@2x.png"
          />
        </div>
        <div className="absolute top-[104px] left-[74px] w-[274.93px] h-[321px] text-[8.11px]">
          <div className="absolute top-[0px] left-[0px] text-[9.46px] tracking-[1.35px] leading-[11.35px] uppercase text-darkturquoise inline-block w-[87.82px]">
            TITLE
          </div>
          <div className="absolute top-[23.64px] left-[0px] w-[274.93px] h-[64.85px] text-[22.97px]">
            <div className="absolute w-full top-[0%] left-[0%] leading-[32.15px] inline-block">
              <p className="m-0">{`LOREM IPSUM `}</p>
              <p className="m-0">LOREM IPSUM</p>
            </div>
          </div>
          <div className="absolute top-[114.16px] left-[0px] text-[7.43px] leading-[14.05px] inline-block w-[260.07px]">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit.
          </div>
          <div className="absolute top-[168.2px] left-[0px] w-[114.16px] h-[28.68px] text-center text-gray">
            <div className="absolute top-[0px] left-[0px] rounded-[33.78px] bg-darkturquoise box-border w-[114.16px] h-[28.37px] border-[0.7px] border-solid border-darkturquoise" />
            <b className="absolute top-[0.68px] left-[20.94px] tracking-[1.35px] leading-[27.02px] uppercase inline-block w-[72.28px]">
              079 xxx xxx
            </b>
          </div>
          <img
            className="absolute top-[168.2px] left-[130.37px] rounded-[33.78px] w-[114.16px] h-[28.37px]"
            alt=""
            src="/rectangle.svg"
          />
          <b className="absolute top-[168.88px] left-[151.31px] tracking-[1.35px] leading-[27.02px] uppercase inline-block text-gray text-center w-[72.28px]">
            079 xxx xxx
          </b>
          <div className="absolute top-[288px] left-[33px] text-[19.59px] leading-[32.15px]">
            QR CODE
          </div>
        </div>
        <img
          className="absolute top-[377px] left-[233px] w-[62px] h-[62px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
    </div>
  )
          }


export default App;

