import { useLanguage } from "@libs/hooks";
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { RouterPath } from "@path";

export default () => {
  const language = useLanguage();

  return (
    <Container className={`h-screen flex flex-col justify-center items-center`}>
      <div className={`text-gray-300 text-8xl font-bold`}>404</div>

      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={`my-4 text-4xl font-bold`}
      >
        {language.notFoundTip}
      </Text>

      <Link to={RouterPath.Home}>
        <Button size="md">{language.goBackHomePapeTip}</Button>
      </Link>
    </Container>
  );
};
