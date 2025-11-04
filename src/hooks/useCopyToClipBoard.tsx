import { useState, useCallback } from "react";

type UseCopyToClipboardReturn = [
  boolean,
  (text: string) => Promise<void>,
  () => void,
  (event: KeyboardEvent, text: string) => void,
];

const useCopyToClipboard = (): UseCopyToClipboardReturn => {
  const [copied, setCopied] = useState(false);

  // Function to copy text to clipboard
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text); // Use the Clipboard API to write the text to clipboard
      setCopied(true); // Set copied state to true if successful
    } catch (error) {
      console.error("Failed to copy text: ", error); // Log error if copying fails
      setCopied(false); // Set copied state to false
    }
  }, []);

  // Function to reset copied state
  const resetCopied = useCallback(() => {
    setCopied(false);
  }, []);
  const handleCopyKeyPress = useCallback(
    async (event: KeyboardEvent, text: string) => {
      const isMac = navigator.userAgent?.toUpperCase().includes("MAC");
      const isCtrlCPressed =
        event.key === "c" && (isMac ? event.metaKey : event.ctrlKey);

      if (isCtrlCPressed) {
        copyToClipboard(text);
      }
    },
    []
  );

  return [copied, copyToClipboard, resetCopied, handleCopyKeyPress];
};

export default useCopyToClipboard;
