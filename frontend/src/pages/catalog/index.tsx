import { getAllProductsByFilter } from "@api/product";
import { Box, Container, Flex, Spinner } from "@radix-ui/themes";
import useUserStore from "@store/userStore";
import { useQuery } from "@tanstack/react-query";
import { CardProduct } from "@widgets/card";
import { Filters } from "@widgets/filters";
import { Search } from "@widgets/search";
import { useState } from "react";

export const Catalog: React.FC = () => {
  const token = useUserStore((state) => state.token);

  const [filters, setFilters] = useState({
    priceRange: [0, 20000],
    condition: "new",
  });



  // Запрос с фильтрами
  const { data, isLoading } = useQuery({
    queryKey: ["products", token, filters],
    queryFn: getAllProductsByFilter,
  });

  const handleFilterChange = (newPriceRange: Array<number>, condition: string) => {
    setFilters({ priceRange: newPriceRange, condition });
  };


  return (
    <Box>
      <Container size="4">
        <Flex justify="between">
          <Box px="5">
            <Filters onChange={handleFilterChange}/>
          </Box>
          <Flex direction="column" gap="20px" width="70%" px="5">
            <Search />
            <Flex wrap="wrap" gap="20px" justify="between">
              {data?.map((product: any) => (
                <div key={product.id}>
                  <CardProduct
                    title={product.name}
                    description={product.description}
                    price={product.price}
                    quantity={product.quantity}
                    image={product.image}
                  />
                </div>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
