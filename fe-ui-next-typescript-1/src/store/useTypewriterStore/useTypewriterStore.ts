import { PHRASES } from "@/constants/constants";
import { TypewriterState } from "@/interface";
import { create } from "zustand";

interface TypewriterStore extends TypewriterState {
  updateText: () => void;
  resetText: () => void;
}

export const useTypewriterStore = create<TypewriterStore>((set, get) => ({
  currentPhraseIndex: 0,
  displayedText: "",
  isDeleting: false,

  updateText: () => {
    const { currentPhraseIndex, displayedText, isDeleting } = get();
    const fullText = PHRASES[currentPhraseIndex];

    let updatedText = isDeleting
      ? fullText.substring(0, displayedText.length - 1)
      : fullText.substring(0, displayedText.length + 1);

    let nextIndex = currentPhraseIndex;
    let nextDeleting = isDeleting;

    if (!isDeleting && updatedText === fullText) {
      nextDeleting = true;
    } else if (isDeleting && updatedText === "") {
      nextDeleting = false;
      nextIndex = (currentPhraseIndex + 1) % PHRASES.length;
    }

    set({
      displayedText: updatedText,
      isDeleting: nextDeleting,
      currentPhraseIndex: nextIndex,
    });
  },

  resetText: () => {
    set({ displayedText: "", isDeleting: false, currentPhraseIndex: 0 });
  },
}));
