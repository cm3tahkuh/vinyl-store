import { Box, Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { CardProduct } from "@widgets/card";
import { useState } from "react";

export const CartPage: React.FC = () => {
  const [user, _] = useState<string>("user");
  const [cartItems, setCartItems] = useState<Array<number>>(
    Array(9)
      .fill(0)
      .map((_, index) => index + 1)
  );

  if (cartItems.length === 0) {
    return (
      <Heading align="center" as="h2">
        Корзина пуста.
      </Heading>
    );
  }

  return (
    <Box>
      <Heading mb="2" align="center" size="8" as="h1">
        Корзина
      </Heading>
      <Text as="p" align="center" weight="medium">
        Ваши покупки, {user}
      </Text>
      <Box>
        <Container size="4">
          <Flex gap="5" align="center" justify="center" p="5" wrap="wrap">
            {cartItems.map((item, index) => (
              <Flex key={index} direction="column" gap="2">
                <CardProduct
                  title={item.toString()}
                  description="rar"
                  price={33335}
                  quantity={1}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVq-OmHL5H_5P8b1k306pFddOe3049-il2A&s"
                />
                <Button
                  onClick={() =>
                    setCartItems((prev) =>
                      prev.filter((itemArray) => itemArray !== item)
                    )
                  }
                  color="red"
                  variant="classic"
                >
                  Удалить
                </Button>
              </Flex>
            ))}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
