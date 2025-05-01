import { Box, Flex, Heading } from "@radix-ui/themes";
import { SignIn } from "@widgets/signin";
import { SignUp } from "@widgets/signup";

export const Authorization: React.FC = () => {
  return (
    <Box>
      <Flex
        direction="column"
        justify="center"
        gap="6"
        height="80vh"
        align="center"
      >
        <Heading as="h1" size="8">
          Авторизация
        </Heading>
        <Flex gap="4">
          <SignIn />
          <SignUp />
        </Flex>
      </Flex>
    </Box>
  );
};
