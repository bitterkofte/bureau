export const parseTextToHtml = (text) => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    if (!doc.documentElement || !doc.documentElement.tagName) {
      throw new Error("Invalid HTML");
    }
    return doc.documentElement;
  } catch (error) {
    console.error("Error parsing text to HTML:", error);
    return null;
  }
};
