"use client";
import {
  useThemeChange,
  THEME_LIST,
  ColorPalette,
  Dropdown,
} from "amvasdev-ui";
import { Palette } from "lucide-react";
import { useCallback } from "react";
import { useCookies } from "react-cookie";
import { THEME_COOKIE } from "@/constants/cookies";

const ThemeTrigger = () => (
  <span className="flex items-center gap-2">
    Theme
    <Palette size={18} />
  </span>
);

const ThemeChanger = () => {
  const [_cookies, setCookie] = useCookies([THEME_COOKIE]);
  const { changeTheme } = useThemeChange();
  const handleThemeChange = useCallback(
    (theme: (typeof THEME_LIST)[number]) => {
      changeTheme(theme);
      setCookie(THEME_COOKIE, theme);
    },
    [setCookie, changeTheme]
  );
  return (
    <Dropdown
      triggerElement={<ThemeTrigger />}
      position="right"
      showChevron={false}
    >
      <ul className="m-0 flex flex-col gap-4 p-3 w-[300px] max-w-full">
        {THEME_LIST.map((theme) => (
          <button key={theme} onClick={() => handleThemeChange(theme)}>
            <ColorPalette theme={theme} />
          </button>
        ))}
      </ul>
    </Dropdown>
  );
};

export default ThemeChanger;
