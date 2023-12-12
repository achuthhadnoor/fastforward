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
        # Terms of Service # Website Terms and Conditions of Use ## 1. Terms By
        accessing this Website, accessible from https://lapse.achuth.dev, you
        are agreeing to be bound by these Website Terms and Conditions of Use
        and agree that you are responsible for the agreement with any applicable
        local laws. If you disagree with any of these terms, you are prohibited
        from accessing this site. The materials contained in this Website are
        protected by copyright and trade mark law. ## 2. Use License Permission
        is granted to temporarily download one copy of the materials on Lapse's
        Website for personal, non-commercial transitory viewing only. This is
        the grant of a license, not a transfer of title, and under this license
        you may not: - modify or copy the materials; - use the materials for any
        commercial purpose or for any public display; - attempt to reverse
        engineer any software contained on Lapse's Website; - remove any
        copyright or other proprietary notations from the materials; or -
        transferring the materials to another person or "mirror" the materials
        on any other server. This will let Lapse to terminate upon violations of
        any of these restrictions. Upon termination, your viewing right will
        also be terminated and you should destroy any downloaded materials in
        your possession whether it is printed or electronic format. ## 3.
        Disclaimer All the materials on Lapse’s Website are provided "as is".
        Lapse makes no warranties, may it be expressed or implied, therefore
        negates all other warranties. Furthermore, Lapse does not make any
        representations concerning the accuracy or reliability of the use of the
        materials on its Website or otherwise relating to such materials or any
        sites linked to this Website. ## 4. Limitations Lapse or its suppliers
        will not be hold accountable for any damages that will arise with the
        use or inability to use the materials on Lapse’s Website, even if Lapse
        or an authorize representative of this Website has been notified, orally
        or written, of the possibility of such damage. Some jurisdiction does
        not allow limitations on implied warranties or limitations of liability
        for incidental damages, these limitations may not apply to you. ## 5.
        Revisions and Errata The materials appearing on Lapse’s Website may
        include technical, typographical, or photographic errors. Lapse will not
        promise that any of the materials in this Website are accurate,
        complete, or current. Lapse may change the materials contained on its
        Website at any time without notice. Lapse does not make any commitment
        to update the materials. ## 6. Links Lapse has not reviewed all of the
        sites linked to its Website and is not responsible for the contents of
        any such linked site. The presence of any link does not imply
        endorsement Animockup out of the site. The use of any linked website is
        at the user’s own risk. ## 7. Site Terms of Use Modifications Lapse may
        revise these Terms of Use for its Website at any time without prior
        notice. By using this Website, you are agreeing to be bound by the
        current version of these Terms and Conditions of Use. ## 8. Your Privacy
        Please read our Privacy Policy. ## 9. Governing Law Any claim related to
        Lapse's Website shall be governed by the laws of us without regards to
        its conflict of law provisions.
      </Styled.Wrapper>
    </>
  );
}
