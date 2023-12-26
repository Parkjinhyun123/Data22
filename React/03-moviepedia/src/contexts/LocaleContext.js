import { createContext, useContext, useState } from "react";

// Context가 제공할 기본값을 받는다.
const LocaleContext = createContext();

export function LocaleProvider({ defaultValue = "ko", children }) {
  const [locale, setLocale] = useState(defaultValue);
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

// 매번 useContext하고 LocaleCOnstext 값을 가지고 사용하는 것이 번거롭기 때문에
// 이것들을 대신 할 수 있는 커스텀 Hook을 만든다.
// useLocale Hook은 locale 값을 전달해주고, useSetLocale 이라는 Hook은
// setLocale 함수를 전달해주도록 한다.
export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("반드시 LocaleProvider안에서 사용");
  }
  return context.locale;
}

export function useSetLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("반드시 LocaleProvider안에서 사용");
  }
  return context.setLocale;
}
