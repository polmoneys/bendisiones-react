import type { LooseT } from "../interfaces";

export const download = (url: string, filename: string): void => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};

export const exportChart = async ({
  format = "png",
  filename = "file",
  container = "body",
  title = "",
  source = "",
}: {
  format?: LooseT<"svg" | "png">;
  filename?: string;
  container: string;
  title?: string;
  source?: string;
}): Promise<void> => {
  const svgElement = document?.querySelector(`${container} svg`);
  if (svgElement == null) return;

  if (format === "svg") {
    const serializer = new XMLSerializer();
    const source =
      '<?xml version="1.0" standalone="no"?>\r\n' +
      serializer.serializeToString(svgElement);
    const url =
      "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    download(url, `${filename}.svg`);
  } else {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const img = new Image();

    img.onload = () => {
      if (ctx != null) {
        // Padding and spacing
        const padding = 60;
        const titleHeight = title ? 80 : 0;
        const sourceHeight = source ? 40 : 0;
        const spacing = 30;

        // Set canvas size with extra space for title and source
        canvas.width = img.width + padding * 2;
        canvas.height =
          img.height + titleHeight + sourceHeight + padding * 2 + spacing;

        // White background
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let yOffset = padding;

        // Draw title if provided
        if (title) {
          ctx.fillStyle = "#000000";
          ctx.font = "bold 32px system-ui, -apple-system, sans-serif";
          ctx.textBaseline = "top";
          ctx.fillText(title, padding, yOffset);
          yOffset += titleHeight;
        }

        // Draw chart
        ctx.drawImage(img, padding, yOffset);
        yOffset += img.height + spacing;

        // Draw source if provided
        if (source) {
          ctx.fillStyle = "#999999";
          ctx.font = "14px system-ui, -apple-system, sans-serif";
          ctx.textBaseline = "top";
          ctx.fillText(`Source: ${source}`, padding, yOffset);
        }

        canvas.toBlob((blob) => {
          if (blob != null) {
            const url = URL.createObjectURL(blob);
            download(url, `${filename}.${format}`);
          }
        }, `image/${format}`);
      }
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgData)));
  }
};
