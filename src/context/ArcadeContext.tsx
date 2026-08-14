import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ArcadeStage } from '../types';
import { sound } from '../utils/sound';

interface ArcadeContextType {
  currentStage: ArcadeStage;
  setStage: (stage: ArcadeStage) => void;
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
  crtEnabled: boolean;
  toggleCrt: () => void;
  soundMuted: boolean;
  toggleSound: () => void;
  recruiterPassOpen: boolean;
  setRecruiterPassOpen: (open: boolean) => void;
  toggleRecruiterPass: () => void;
}

const ArcadeContext = createContext<ArcadeContextType | undefined>(undefined);

export const ArcadeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStage, setCurrentStageState] = useState<ArcadeStage>('LANDING');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [crtEnabled, setCrtEnabled] = useState<boolean>(true);
  const [soundMuted, setSoundMuted] = useState<boolean>(false);
  const [recruiterPassOpen, setRecruiterPassOpen] = useState<boolean>(false);

  // Sound sync
  useEffect(() => {
    sound.setMuted(soundMuted);
  }, [soundMuted]);

  const setStage = (stage: ArcadeStage) => {
    if (stage === 'LANDING') {
      sound.playBack();
    } else if (stage === 'MENU') {
      sound.playSelect();
    } else {
      sound.playSelect();
    }
    setCurrentStageState(stage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCrt = () => {
    sound.playHover();
    setCrtEnabled(prev => !prev);
  };

  const toggleSound = () => {
    setSoundMuted(prev => !prev);
  };

  const toggleRecruiterPass = () => {
    sound.playHover();
    setRecruiterPassOpen(prev => !prev);
  };

  return (
    <ArcadeContext.Provider
      value={{
        currentStage,
        setStage,
        selectedProjectId,
        setSelectedProjectId,
        crtEnabled,
        toggleCrt,
        soundMuted,
        toggleSound,
        recruiterPassOpen,
        setRecruiterPassOpen,
        toggleRecruiterPass
      }}
    >
      {children}
    </ArcadeContext.Provider>
  );
};

export const useArcade = (): ArcadeContextType => {
  const context = useContext(ArcadeContext);
  if (!context) {
    throw new Error('useArcade must be used within an ArcadeProvider');
  }
  return context;
};
