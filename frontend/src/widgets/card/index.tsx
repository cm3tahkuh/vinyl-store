import { Box, Text, Heading, Flex } from "@radix-ui/themes";

interface CardProps {
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  quantity,
  image,
}) => {
  return (
    <Flex direction="column" maxWidth="200px">
      <img
        style={{ maxWidth: "300px", maxHeight: "300px", marginBottom: "20px" }}
        src={image}
        alt={title}
      />
      <Heading style={{ marginBottom: "10px" }}>{title}</Heading>
      <Text as="p">{description}</Text>
      <Text as="span">Цена: {price}</Text>
      <Text as="span">Количество: {quantity}</Text>
    </Flex>
  );
};
