import { THEME_LIST, ColorPalette } from "amvasdev-ui";

const ColorPaletteStory = () => {
  return (
    <div className="flex flex-1 gap-4 flex-wrap">
      {THEME_LIST.map((theme) => (
        <ColorPalette key={theme} theme={theme} />
      ))}
    </div>
  );
};

export default ColorPaletteStory;
