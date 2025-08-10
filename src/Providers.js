"use client"; // 👈 Isso torna o componente Client

import { Provider } from "react-redux";
import { store } from "./app/store/store";

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
