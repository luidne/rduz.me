import { useEffect } from "react";
import { AdSenseContainer } from "./styles";

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
}

const AdSense = ({ 
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = true 
}: AdSenseProps) => {
  
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <AdSenseContainer>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2840199461109010"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </AdSenseContainer>
  );
};

export default AdSense;
