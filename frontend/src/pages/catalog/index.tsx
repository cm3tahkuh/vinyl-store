import { Box, Container, Flex } from "@radix-ui/themes";
import { Card } from "@widgets/card";
import { Filters } from "@widgets/filters";
import { Search } from "@widgets/search";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const Catalog: React.FC = () => {
  const [data, setData] = useState<Array<number>>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <Box>
      <Container size="4">
        <Flex justify="between">
          <Box px="5">
            <Filters />
          </Box>
          <Flex direction="column" gap="20px" maxWidth="70%" px="5">
            <Search />
            <Flex wrap="wrap" gap="20px" justify="between">
              {data.map((product) => (
                <>
                  <Card
                    title="Product"
                    description="Best album."
                    price={100}
                    quantity={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVq-OmHL5H_5P8b1k306pFddOe3049-il2A&s"
                  />
                </>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
