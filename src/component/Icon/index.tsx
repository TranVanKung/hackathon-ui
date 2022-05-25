interface IconProps {
  name: string;
  style?: any;
  className?: string;
}

const Icon = (props: IconProps) => {
  const { name, style, className } = props;

  return (
    <span className={`material-icons-outlined ${className}`} style={style}>
      {name}
    </span>
  );
};

export default Icon;
