import LeftContentBlock from "./LeftContentBlock";
import PrincipalContentBlock from "./PrincipalContentBlock";
import RightContentBlock from "./RightContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "principal") return <PrincipalContentBlock {...props} />;
  return null;
};

export default ContentBlock;
