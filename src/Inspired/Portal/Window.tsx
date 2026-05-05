import { useEffect, useRef } from "react";

import { usePortalContext } from "./";

type PortalWindowProps = {
  id: string;
  title?: string;
  features?: string;
  copyStyles?: boolean;
  onClose?: () => void;
};

function copyStylesToWindow(sourceDoc: Document, targetDoc: Document) {
  try {
    // note: accessing document.styleSheets might throw on cross-origin sheets; this is why it's wrapped
    Array.from(sourceDoc.styleSheets).forEach((sheet) => {
      try {
        if ((sheet as CSSStyleSheet).cssRules && !sheet.href) {
          const css = Array.from((sheet as CSSStyleSheet).cssRules)
            .map((r) => r.cssText)
            .join("\n");
          if (css.trim().length) {
            const s = targetDoc.createElement("style");
            s.appendChild(targetDoc.createTextNode(css));
            targetDoc.head.appendChild(s);
          }
        }
      } catch {
        // ignore inaccessible sheets
      }
    });
  } catch {
    // ignore any errors when enumerating styleSheets
  }
}

export default function PortalWindow({
  id,
  title = "",
  features,
  copyStyles = true,
  onClose,
}: PortalWindowProps) {
  const { registerTarget, unregisterTarget } = usePortalContext();
  const newWindowRef = useRef<Window | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // open window (blank same-origin)
    const newWindow = window.open("", title || undefined, features);
    if (!newWindow) {
      console.warn("PortalWindow: could not open window (popup blocked?)");
      return;
    }
    newWindowRef.current = newWindow;

    const doc = newWindow.document;
    if (title) doc.title = title;
    // create container inside the new window's body
    const container = doc.createElement("div");
    container.setAttribute("data-portal-id", id);
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.padding = "8px";
    // doc.body.style.margin = "0";
    doc.body.appendChild(container);
    containerRef.current = container;

    // copy styles (best-effort)
    if (copyStyles) {
      try {
        copyStylesToWindow(document, doc);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        // ignore
      }
    }

    registerTarget(id, container);

    // When the new window is closed by the user, unregister
    const handleUnload = () => {
      unregisterTarget(id);
      try {
        onClose?.();
      } catch {
        /* empty */
      }
    };

    newWindow.addEventListener("beforeunload", handleUnload);
    newWindow.addEventListener("unload", handleUnload);

    // Cleanup on unmount
    return () => {
      try {
        unregisterTarget(id);
      } catch {
        /* empty */
      }
      try {
        // remove listeners then attempt to close the window if still open
        if (!newWindow.closed) {
          newWindow.removeEventListener("beforeunload", handleUnload);
          newWindow.removeEventListener("unload", handleUnload);
          newWindow.close();
        }
      } catch {
        // ignore errors
      }
      newWindowRef.current = null;
      containerRef.current = null;
    };
  }, [
    id,
    title,
    features,
    copyStyles,
    registerTarget,
    unregisterTarget,
    onClose,
  ]);

  return null;
}
