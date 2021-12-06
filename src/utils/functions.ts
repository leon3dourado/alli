export const formatTextRemovingPipe = (text: string) => {
  const formattedText = text.replace("|", " ").toLowerCase();
  return formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
};
