import { Icon } from "@/component";
import { StatusWrapper } from "./style";

interface StatusProps {
  content: string;
  isSuccess: boolean;
  style?: any;
  isLarge?: boolean;
  onClick?: any;
  icon?: string;
}

const Status = (props: StatusProps) => {
  const { content, isSuccess, style, isLarge, onClick, icon } = props;

  return (
    <StatusWrapper
      isSuccess={isSuccess}
      style={style}
      isLarge={isLarge}
      onClick={onClick}
    >
      {icon ? <Icon name={icon} className="status-icon" /> : null}

      {content}
    </StatusWrapper>
  );
};

export default Status;
