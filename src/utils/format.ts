export const getComponentName = (name: string) => {
  const splittedName = name.split(/(?=[A-Z])/);
  // capitalize first letter
  splittedName[0] =
    splittedName[0].charAt(0).toUpperCase() + splittedName[0].slice(1);
  return splittedName.join(" ");
};
