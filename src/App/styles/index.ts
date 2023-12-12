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
  flex: 1;
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
  outline: none;
  app-region: no-drag;
  font-size: 16px;
  border: ${(props) => (props.valid ? `1px solid red` : `1px solid #555`)};
`;

export const Consent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
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

export const Error = styled.span`
  font-size: 15px;
  color: #ff6060;
`;
export const ErrorPack = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  row-gap: 5px;
  column-gap: 10px;
  padding: 5px;
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

export const PermissionsImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PermissionsImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;
