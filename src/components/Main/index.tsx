import * as S from "./styles";

export type MainProps = {
  title?: string;
  description?: string;
  text?: string;
};
export default function Main(props: MainProps) {
  const { title, description, text } = props;
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}
