export const getComponentName = (name: string) => {
  const splittedName = name.split(/(?=[A-Z])/);
  return splittedName.join(" ");
};
