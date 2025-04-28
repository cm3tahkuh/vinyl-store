import { Box, Container, Flex } from "@radix-ui/themes";
import { Filters } from "@widgets/filters";
import { Search } from "@widgets/search";

export const Catalog: React.FC = () => {
  return (
    <Box>
      <Container size="4">
        <Box  px="5">
        <Filters />
        </Box>
        <Box width="100%"  px="5">
          <Search />
          
        </Box>
      </Container>
    </Box>
  );
};
