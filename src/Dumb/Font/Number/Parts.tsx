export default function renderParts(
  parts: Array<Intl.NumberFormatPart>,
  className?: string,
  types?: Array<Intl.NumberFormatPartTypes>,
) {
  const allowed = types ? new Set(types) : null;

  return parts
    .filter((part) => (allowed ? allowed.has(part.type) : true))
    .map((part, index) => (
      <span key={`${part.type}-${index}`} className={className}>
        {part.value}
      </span>
    ));
}
