import { getDeviceOS } from "../../hooks/getDeviceOS";
import { Button } from "../Button";
import { DownloadIcon } from "../Icons/DownloadIcon";
import { CallToActionStyled, CallToActionTitle } from "./styles";

export const CallToAction = () => {
  const os = getDeviceOS();

  return (
    <CallToActionStyled>
      <CallToActionTitle>Vamos começar sua jornada?</CallToActionTitle>
      {os === "Android" && (
        <Button
          text="Baixar no Google Play"
          appearance="brand"
          icon={<DownloadIcon />}
        />
      )}
      {os === "iOS" && (
        <Button
          text="Baixar na App Store"
          appearance="brand"
          icon={<DownloadIcon />}
        />
      )}
      {os === "Desktop/Other" && (
        <Button
          text="Baixar para Windows"
          appearance="brand"
          icon={<DownloadIcon />}
        />
      )}
    </CallToActionStyled>
  );
};
