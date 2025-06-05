import React, { createContext, useState, useContext, useEffect } from 'react';
import { BuilderSetting } from '../builderSettings';

// Create context without TypeScript types
const BuilderSettingContext = createContext(undefined);

export const BuilderSettingsProvider = ({ children, authBuilderSetting }) => {
  const [chatFeatures, setChatFeatures] = useState(BuilderSetting.chatFeatures);
  const [callFeatures, setCallFeatures] = useState(BuilderSetting.callFeatures);
  const [styleFeatures, setStyleFeatures] = useState(BuilderSetting.style);
  const [layoutFeatures, setLayoutFeatures] = useState(BuilderSetting.layout);

  useEffect(() => {
    const setting = authBuilderSetting || BuilderSetting;
    if (setting) {
      const { chatFeatures, callFeatures, layout, style } = setting;
      setChatFeatures(chatFeatures);
      setCallFeatures(callFeatures);
      setStyleFeatures(style);
      setLayoutFeatures(layout);
    }
  }, [authBuilderSetting]);

  return (
    <BuilderSettingContext.Provider
      value={{
        chatFeatures,
        callFeatures,
        styleFeatures,
        layoutFeatures,
        setChatFeatures,
        setCallFeatures,
        setStyleFeatures,
        setLayoutFeatures,
      }}
    >
      {children}
    </BuilderSettingContext.Provider>
  );
};

export const useBuilderSettingContext = () => {
  const context = useContext(BuilderSettingContext);
  if (!context) {
    throw new Error('useBuilderSettingContext must be used within a BuilderSettingsProvider');
  }
  return context;
};

// This is for user & product identification for runnable app, DO NOT DELETE
if (typeof window !== 'undefined') {
  window.CometChatVisualBuilderReact = {
    name: 'cometchat-visual-builder-react',
    version: '1.0.2',
  };
}
