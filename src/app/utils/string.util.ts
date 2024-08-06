export const isInclude = (text: string, index: string) => {
  return text.toLowerCase().includes(index.toLowerCase());
};
export const convertJsonStringToArray = (jsonString: string): string[] => {
  try {
    const jsonObject = JSON.parse(jsonString);
    return Object.entries(jsonObject).map(
      ([key, value]) => `${key}: ${JSON.stringify(value)}`
    );
  } catch (error) {
    console.error("Invalid JSON string:", error);
    return [];
  }
};
