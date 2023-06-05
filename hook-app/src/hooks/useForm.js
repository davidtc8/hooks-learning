import { useState } from "react";

export const useForm = (initialForm = {}) => {
  {
    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({ target }) => {
      const { name, value } = target;
      setFormState({
        // Queremos desestructurar el formstate para no afectar nada mas que el username y el email (en caso de que
        // tengamos mas valores en el useState)
        ...formState,
        [name]: value,
      });
    };

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
  }
};
