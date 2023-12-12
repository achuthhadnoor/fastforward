import { useEffect, useState } from "react";
import * as Styled from "../styles";

declare global {
  interface Window {
    electronAPI: any;
  }
}
export default function permissionsCheck() {
  const [data, setData] = useState(true);
  const [errors, setErrors] = useState([]);

  const checkPermissions = (e: any) => {
    //Enter license key
    e.preventDefault();
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
      <Styled.Wrapper onSubmit={checkPermissions}>
        <Styled.FormContent>
          <Styled.PermissionsImageWrapper>
            <Styled.PermissionsImage
              src="https://dummyimage.com/600x400/000/fff"
              alt="dummy"
            />
          </Styled.PermissionsImageWrapper>
          <Styled.Consent>
            <Styled.ConsentLabel>
              <Styled.Checkbox type="checkbox" id="license_agree" />
              <span>
                Allow Lapse to record my screen for time-lapse videos.
              </span>
            </Styled.ConsentLabel>
          </Styled.Consent>

          <Styled.ErrorPack>
            {errors.map((error) => (
              <Styled.Error key={`${error}`}>{error}</Styled.Error>
            ))}
          </Styled.ErrorPack>

          <Styled.CTA>
            <Styled.ActivateBtn type="submit">
              Request for permission
            </Styled.ActivateBtn>
          </Styled.CTA>
        </Styled.FormContent>
      </Styled.Wrapper>
    </>
  );
}
