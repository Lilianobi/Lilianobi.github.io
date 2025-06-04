import ReactDOM from "react-dom/client"; // Change from 'createRoot' to this if you're not using React 18
import "./index.css";
import App from "./App"; // Remove .tsx extension
import {
  UIKitSettingsBuilder,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import { setupLocalization } from "./CometChat/utils/utils"; // Remove .ts extension
import { BuilderSettingsProvider } from "./CometChat/context/BuilderSettingsContext.jsx"; // Remove .tsx

export const COMETCHAT_CONSTANTS = {
  APP_ID: "275632e293a52ae1",
  REGION: "EU",
  AUTH_KEY: "60a6daeb8c120f5d8c35360fe9c612b66781a0d5",
};

const uiKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

CometChatUIKit.init(uiKitSettings)?.then(() => {
  setupLocalization();

  const UID = "cometchat-uid-2";

  CometChatUIKit.getLoggedinUser().then((user) => {
    if (!user) {
      CometChatUIKit.login(UID)
        .then((loggedUser) => {
          console.log("Login Successful:", loggedUser);
          ReactDOM.createRoot(document.getElementById("root")).render(
            <BuilderSettingsProvider>
              <App />
            </BuilderSettingsProvider>
          );
        })
        .catch((error) => console.error("Login Failed:", error));
    } else {
      console.log("User already logged in:", user);
      ReactDOM.createRoot(document.getElementById("root")).render(
        <BuilderSettingsProvider>
          <App />
        </BuilderSettingsProvider>
      );
    }
  });
});




