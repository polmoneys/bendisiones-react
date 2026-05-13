import {
  GoBell as Icon,
  GoBellFill as IconActive,
  GoBellSlash as IconMute,
} from "react-icons/go";

interface Props {
  status: "idle" | "active" | "mute";
  color?: string;
  size?: number;
}

export default function NotificationsIcon(props: Props) {
  const { status = "idle", color = "currentColor", size = 28 } = props;

  const icon = {
    idle: <Icon color={color} />,
    active: <IconActive color={color} size={size} />,
    mute: <IconMute color={color} size={size} />,
  }[status];

  return icon;
}
