export const sortFiles = (files) => {
  return files.sort((a, b) => {
    return parseInt(a.file.match(/\d+/) || 0, 10) - parseInt(b.file.match(/\d+/) || 0, 10);
  });
}

export const sortListFiles = (files) => {
  return files.sort((a, b) => {
    return parseInt(a.match(/\d+/) || 0, 10) - parseInt(b.match(/\d+/) || 0, 10);
  });
}
