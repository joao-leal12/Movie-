import { createContext, ReactNode, useState } from 'react';
import { useBoolean } from '@chakra-ui/react';
interface IinitialValue {
  newElement: string;
  handleChangeInput: (value: string) => void;
  setOnInput: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  onInput: boolean;
}

interface Ichildren {
  children: ReactNode;
}

export const ContextCreate = createContext({} as IinitialValue);

export const GlobalContext = ({ children }: Ichildren) => {
  const [newElement, setNewElement] = useState('');

  const [onInput, setOnInput] = useBoolean();
  function handleChangeInput(value: string) {
    setNewElement(value);
  }

  return (
    <ContextCreate.Provider
      value={{
        newElement,
        handleChangeInput,
        onInput,
        setOnInput,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
