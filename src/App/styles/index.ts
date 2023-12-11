import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  inset: 0px;
  padding: 24px;
  app-region: drag;
`;

export const TrafficLights = styled.div`
  position: fixed;
  display: flex;
  gap: 8px;
  top: 16px;
  left: 15px;
  z-index: 9999;
  opacity: 0.3;
  transition: opacity ease-in-out;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

export const Logo = styled.div`
  padding: 15px 0px;
`;

export const Heading = styled.h3`
  font-weight: 600;
  padding: 0px;
  margin: 0px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #888;
`;

export const LicenseInput = styled.input`
  padding: 15px 10px;
  border-radius: 8px;
  flex: 1;
  outline: none;
  app-region: no-drag;
  border: 1px solid #555;
  font-size: 16px;
  &:hover {
    border: 1px solid red;
  }
`;

export const Consent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 0px;
  align-items: baseline;
  justify-content: start;
  gap: 14px;
  app-region: no-drag;
`;
export const ConsentLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #888;
  font-size: 15px;
`;

export const Checkbox = styled.input``;
export const Error = styled.p`
  font-size: 15px;
  color: #ff6060;
`;
export const ErrorPack = styled.div`
  flex: 1;
  display: flex;
  gap: 12px;
`;
export const CTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;

export const ActivateBtn = styled.button`
  padding: 10px;
  border-radius: 5px;
  background: #6aff6a;
  color: green;
  font-weight: 700;
  app-region: no-drag;
  &:hover {
    opacity: 0.8;
  }
`;
export const TrialBtn = styled.button`
  app-region: no-drag;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    opacity: 0.6;
  }
`;
export const GetLicense = styled.u`
  font-size: 15px;
  color: #888;
  app-region: no-drag;
  &:hover {
    opacity: 0.7;
  }
`;
