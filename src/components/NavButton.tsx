type Props = {
  label: string;
  href: string;
  isActive?: boolean
};

const NavButton = (props: Props) => {
  return <span>{props.label}</span>;
};

export { NavButton };
