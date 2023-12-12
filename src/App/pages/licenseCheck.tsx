import { useEffect, useState } from "react";
import * as Styled from "../styles";

declare global {
  interface Window {
    electronAPI: any;
  }
}
const Logo = () => (
  <Styled.Logo>
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1775_15)">
        <rect
          x="0.5"
          y="0.5"
          width="79"
          height="79"
          rx="15.5"
          fill="url(#paint0_linear_1775_15)"
          stroke="url(#paint1_linear_1775_15)"
        />
        <path
          d="M22.2701 23.4308C21.9948 22.1826 22.9449 21 24.2231 21H58C59.1046 21 60 21.8954 60 23V56.3227C60 57.6573 58.7177 58.6175 57.437 58.2418L29.1825 49.9538L28.3381 52.8325L29.1825 49.9538C28.4824 49.7484 27.9496 49.178 27.7925 48.4655L22.2701 23.4308Z"
          stroke="url(#paint2_linear_1775_15)"
          strokeWidth="6"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1775_15"
          x1="40"
          y1="0"
          x2="40"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#272727" />
          <stop offset="1" stopColor="#141414" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1775_15"
          x1="40"
          y1="0"
          x2="40"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#373737" />
          <stop offset="1" stopColor="#373737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1775_15"
          x1="40.5"
          y1="18"
          x2="40.5"
          y2="63"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#73F75E" />
          <stop offset="1" stopColor="#52EF9A" stopOpacity="0.57" />
        </linearGradient>
        <clipPath id="clip0_1775_15">
          <rect width="80" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </Styled.Logo>
);
export default function LicenseCheck() {
  const [licenseKey, setLicenseKey] = useState("");
  const [licenseErr, setLicenseErr] = useState(false);
  const [agree, setAgree] = useState(false);
  const [data, setData] = useState(true);
  const [errors, setErrors] = useState([]);

  const validateActivation = (e: any) => {
    //Enter license key
    e.preventDefault();
    const newArr = [];
    if (
      licenseKey !== "" &&
      licenseKey.length === 19 &&
      licenseKey.split("-").length === 4
    ) {
      // perform license check
      setLicenseErr(false);
    } else {
      newArr.push("License key is invalid");
      setLicenseErr(true);
    }
    if (!agree) {
      newArr.push("Accept license agreement");
    }
    if (newArr.length > 0) {
      setErrors(newArr);
    } else {
      // Example usage of the exposed function
      window.electronAPI.License.verifyKey({
        key: licenseKey,
        userInfo: {
          agree,
          data,
        },
      })
        .then((response: any) => {
          console.log("Received response from main process:", response);
        })
        .catch((error: any) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <>
      <Styled.TrafficLights>
        <svg
          width="56"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="5.5" stroke="currentColor"></circle>
          <circle cx="28" cy="8" r="5.5" stroke="currentColor"></circle>
          <circle cx="48" cy="8" r="5.5" stroke="currentColor"></circle>
        </svg>
      </Styled.TrafficLights>
      <Styled.Wrapper onSubmit={validateActivation}>
        <Styled.FormContent>
          <Logo />
          <Styled.Heading>Welcome to Lapse!</Styled.Heading>
          <Styled.Description>
            Enter your license below to activate:
          </Styled.Description>
          <Styled.LicenseInput
            placeholder="lapse_XXXX-XXXX-XXXX-XXXX..."
            id="license_input"
            value={licenseKey}
            valid={licenseErr}
            onChange={(e: any) => {
              const inputValue = e.target.value;
              if (
                inputValue.split("-").length === 4 &&
                inputValue.length === 18
              ) {
                setLicenseKey(e.target.value);
              } else {
                const sanitizedValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
                const formattedValue = sanitizedValue
                  .replace(/(.{4})/g, "$1-")
                  .slice(0, 19);
                setLicenseKey(formattedValue);
              }
            }}
          />
          <Styled.Consent>
            <Styled.ConsentLabel>
              <Styled.Checkbox
                type="checkbox"
                id="license_agree"
                checked={agree}
                onChange={() => {
                  setAgree(!agree);
                }}
              />
              <span>
                I have read and agree to the{" "}
                <u
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  terms of the software license agreement
                </u>
              </span>
            </Styled.ConsentLabel>
            <Styled.ConsentLabel>
              <Styled.Checkbox
                type="checkbox"
                id="license_data"
                checked={data}
                onChange={() => {
                  setData(!data);
                }}
              />{" "}
              <span>
                Share anonymous usage data to help improve the app ( optional )
              </span>
            </Styled.ConsentLabel>
          </Styled.Consent>
          <Styled.ErrorPack>
            {errors.map((error) => (
              <Styled.Error key={`${error}`}>{error}</Styled.Error>
            ))}
          </Styled.ErrorPack>
        </Styled.FormContent>
        <Styled.CTA>
          <Styled.TrialBtn>start 7-day trail</Styled.TrialBtn>
          <Styled.ActivateBtn type="submit">Activate</Styled.ActivateBtn>
          <Styled.GetLicense> Get your license key</Styled.GetLicense>
        </Styled.CTA>
      </Styled.Wrapper>
    </>
  );
}
