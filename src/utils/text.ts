export const saveAsTextFile = (filename: string, content: string): void => {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8'});
  const anchor = document.createElement('a');
  anchor.download = `${filename}.txt`;
  anchor.href = window.URL.createObjectURL(blob);
  anchor.click();
};