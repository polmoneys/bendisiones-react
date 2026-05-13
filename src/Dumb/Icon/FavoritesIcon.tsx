import { GoHeart as Icon, GoHeartFill as IconActive } from "react-icons/go";

interface Props {
  status: "idle" | "active";
  color?: string;
  size?: number;
}

export default function FavoritesIcon(props: Props) {
  const { status = "idle", color = "currentColor", size = 28 } = props;

  return status === "idle" ? (
    <Icon color={color} size={size} />
  ) : (
    <IconActive color={color} size={size} />
  );
}
