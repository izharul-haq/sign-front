export const saveAsJSONFile = (content: Record<string, unknown>, filename: string): void => {
  const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
  const anchor = document.createElement('a');
  anchor.download = `${filename}.json`;
  anchor.href = window.URL.createObjectURL(blob);
  anchor.click();
}
