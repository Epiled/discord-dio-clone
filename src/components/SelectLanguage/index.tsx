import {
  SelectLanguageStyled,
  SelectLanguageDropDown,
  SelectLanguageItem,
  SelectLanguageFlag,
  SelectLanguageButton,
  SelectLanguageIcon,
  SelectLanguageTrigger,
} from "./styles";
import { useEffect, useRef, useState } from "react";
import { Languages, type Language } from "../../data/languages";

export const SelectLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    Languages[19],
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const selectLanguage = (item: Language) => {
    const { id, flag, label } = item;

    setSelectedLanguage({
      id,
      flag,
      label,
    });
  };

  return (
    <SelectLanguageStyled>
      <SelectLanguageTrigger
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <SelectLanguageFlag
          src={selectedLanguage.flag}
          alt={selectedLanguage.label}
        />
        <SelectLanguageButton>
          {selectedLanguage.label} <SelectLanguageIcon />
        </SelectLanguageButton>
      </SelectLanguageTrigger>

      {isOpen && (
        <SelectLanguageDropDown ref={dropdownRef}>
          {Languages.map((item) => {
            const { id, flag, label } = item;

            return (
              <SelectLanguageItem
                key={id}
                onClick={() => {
                  selectLanguage(item);
                  setIsOpen((prev) => !prev);
                }}
              >
                <SelectLanguageFlag src={flag} alt={label} />
                <span>{label}</span>
              </SelectLanguageItem>
            );
          })}
        </SelectLanguageDropDown>
      )}
    </SelectLanguageStyled>
  );
};
