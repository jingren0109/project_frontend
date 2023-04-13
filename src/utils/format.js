export function toTitleCase(str) {
  const words = str.split(/[_\s]+/);
  const titledWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return titledWords.join(" ");
}
