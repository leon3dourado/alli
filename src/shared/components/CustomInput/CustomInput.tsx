import { ChangeEvent, FocusEvent, useState, useRef, useEffect } from "react";
import * as S from "./style";
import { useField } from "@unform/core";

type InputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  size?: number;
  mask?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
};

export const CustomInput = ({
  name,
  type,
  placeholder,
  label,
  size,
  mask = "",
  defaultValue,
  disabled,
  onChange,
  onBlur,
  onFocus,
  ...rest
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue ?? "");
  const inputRef = useRef(null);
  const { fieldName, registerField, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue: (ref, value: string) => {
        ref.current.value = value;
      }
    });
  }, [fieldName, registerField]);

  const definirValor = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = target;
    clearError();
    setInputValue(inputValue);
  };

  const devolverOnChange = (evento: ChangeEvent<HTMLInputElement>) => {
    clearError();
    if (onChange) {
      onChange(evento);
    }
  };

  return (
    <S.InputWithLabel size={size}>
      <S.Label>{label}</S.Label>
      {mask ? (
        <>
          {defaultValue ? (
            <S.StyledMaskInput
              mask={mask}
              name={name}
              type={type}
              placeholder={placeholder}
              value={inputValue}
              disabled={disabled}
              onBlur={onBlur}
              onFocus={onFocus}
              onChange={definirValor}
              ref={inputRef}
              {...rest}
            />
          ) : (
            <S.StyledMaskInput
              mask={mask}
              name={name}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              onBlur={onBlur}
              onFocus={onFocus}
              onChange={devolverOnChange}
              ref={inputRef}
              {...rest}
            />
          )}
        </>
      ) : (
        <>
          {defaultValue ? (
            <S.StyledInput
              name={name}
              placeholder={placeholder}
              value={inputValue}
              onBlur={onBlur}
              onFocus={onFocus}
              onChange={definirValor}
              {...rest}
            />
          ) : (
            <S.StyledInput
              type={type}
              name={name}
              placeholder={placeholder}
              onBlur={onBlur}
              onFocus={onFocus}
              onChange={devolverOnChange}
              ref={inputRef}
              {...rest}
            />
          )}
        </>
      )}
    </S.InputWithLabel>
  );
};
