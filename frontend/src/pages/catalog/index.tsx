import { getAllProductsByFilter } from "@api/product";
import { Box, Container, Flex } from "@radix-ui/themes";
import useUserStore from "@store/userStore";
import { useQuery } from "@tanstack/react-query";
import { CardProduct } from "@widgets/card";
import { Filters } from "@widgets/filters";
import { Search } from "@widgets/search";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export const Catalog: React.FC = () => {
  const token = useUserStore((state) => state.token);

  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    condition: "new",
    searchQuery: "",
  });

  const [debouncedFilters] = useDebounce(filters, 300);

  // Запрос с фильтрами
  const { data, isLoading } = useQuery({
    queryKey: ["products", token, debouncedFilters],
    queryFn: getAllProductsByFilter,
  });

  const handleFilterChange = (
    newPriceRange: Array<number>,
    condition: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: newPriceRange,
      condition,
    }));
  };

  const handleSearchChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      searchQuery: value,
    }));
  };

  return (
    <Box>
      <Container size="4">
        <Flex justify="between">
          <Box px="5">
            <Filters onChange={handleFilterChange} />
          </Box>
          <Flex direction="column" gap="20px" width="70%" px="5">
            <Search onChange={handleSearchChange} />
            <Flex wrap="wrap" gap="37.6px">
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
