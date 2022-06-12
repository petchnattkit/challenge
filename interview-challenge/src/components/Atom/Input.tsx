import styled from '@emotion/styled'
import { Input } from 'antd';
import { useForm } from "react-hook-form";

interface Props {
  type: string;
  outlined?: boolean;
  placeholder?: string;
  title?: string;
  dark?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  name: string;
  className?: string;
  value: string | number | readonly string[] | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const StyledInput = styled(Input)`
  padding: 8px 12px;
`

const StyledWrapper = styled.div``

const matchPattern = (type: string): Record<string, (v: string) => string | boolean> => {
  if (type === 'email') return {
    checkEmailPattern: (v:string) => (!v && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v)) || "Email doesn't match"
  }
  return {}
}

export default (props: Props) => {
  const { register } = useForm();
  return (
    <StyledWrapper>
      <label htmlFor={props.name}></label>
      <StyledInput
        {...register(props.name ?? '', {
          required: props.required ?? false,
          minLength: props.min ?? 0,
          maxLength: props.max ?? 100,
          validate: {
            ...matchPattern(props.type),
          }
        })}
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        title={props.title}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
      />
    </StyledWrapper>
  )
}