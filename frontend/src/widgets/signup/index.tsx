import { Button, Flex, Heading, TextField } from "@radix-ui/themes";

export const SignUp: React.FC = () => {
  return (
    <Flex
      direction="column"
      gap="2"
      style={{
        border: "1px solid #ededed",
        borderRadius: "10px",
        padding: "24px",
        boxShadow: "1px 4px 16px -7px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Heading as="h2" size="6" weight="medium">Регистрация</Heading>
      <TextField.Root size="3" placeholder="Логин" variant="classic" />
      <TextField.Root size="3" placeholder="Пароль" variant="classic" />
      <Button variant="classic">Зарегестрироваться</Button>
    </Flex>
  );
};
