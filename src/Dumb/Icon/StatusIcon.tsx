import {
  GoAlert as IconError,
  GoInfo as IconInfo,
  GoIssueClosed as IconSucces,
  GoIssueDraft as IconLoading,
} from "react-icons/go";

interface Props {
  status: "idle" | "loading" | "error" | "success";
  color?: string;
  size?: number;
}

export default function StatusIcon(props: Props) {
  const { status = "idle", color = "currentColor", size = 28 } = props;

  const icon = {
    idle: <IconInfo color={color} size={size} />,
    loading: <IconLoading color={color} size={size} />,
    error: <IconError color={color} size={size} />,
    success: <IconSucces color={color} size={size} />,
  }[status];

  return icon;
}
