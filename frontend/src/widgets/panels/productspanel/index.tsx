import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  DataList,
  Dialog,
  Select,
  TextField,
  Text,
  AlertDialog,
  ContextMenu,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";

interface Rating {
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: Rating;
}

export const ProductsPanel: React.FC = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [editProduct, setEditProduct] = useState<any | null>(null);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      const data: Product[] = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Flex gap="5" align="center" mb="5" justify="between">
        <Heading as="h2">Панель товаров</Heading>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="classic">Добавить</Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title mb="4">Добавить новый товар</Dialog.Title>
            <Dialog.Description></Dialog.Description>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Название
                </Text>
                <TextField.Root variant="classic" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Описание
                </Text>
                <TextField.Root variant="classic" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Цена
                </Text>
                <TextField.Root variant="classic" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Количество
                </Text>
                <TextField.Root variant="classic" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Изображение
                </Text>
                <TextField.Root variant="classic" />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="classic" color="gray">
                  Отменить
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button variant="classic">Сохранить</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
        <Dialog.Root open={modal} onOpenChange={setModal}>
          <Dialog.Content aria-label="Изменить пользователя" maxWidth="450px">
            <Dialog.Title mb="4">Изменить существующий товар</Dialog.Title>
            <Dialog.Description></Dialog.Description>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Название
                </Text>
                <TextField.Root
                  variant="classic"
                  defaultValue={editProduct?.title}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Описание
                </Text>
                <TextField.Root
                  variant="classic"
                  defaultValue={editProduct?.description}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Цена
                </Text>
                <TextField.Root
                  variant="classic"
                  defaultValue={editProduct?.price}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Количество
                </Text>
                <TextField.Root
                  variant="classic"
                  defaultValue={editProduct?.count}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Изображение
                </Text>
                <TextField.Root
                  variant="classic"
                  defaultValue={editProduct?.image}
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="classic" color="gray">
                  Отменить
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button variant="classic">Изменить</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
        <AlertDialog.Root open={deleteModal} onOpenChange={setDeleteModal}>
          <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>Удаление товара</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Вы уверены что хотите удалить товар?
            </AlertDialog.Description>

            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="classic" color="gray">
                  Отменить
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button variant="classic" color="red">
                  Удалить
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </Flex>
      <Box style={{ overflowY: "auto" }}>
        <Flex gap="4" direction="column">
          {data?.map((product) => (
            <ContextMenu.Root key={product.id}>
              <ContextMenu.Trigger>
                <Card>
                  <Flex
                    style={{ padding: "24px" }}
                    gap="8"
                    justify="center"
                    align="center"
                  >
                    <img
                      style={{ maxWidth: "20%", objectFit: "cover" }}
                      src={product.image}
                    />
                    <Card style={{ padding: "24px" }}>
                      <DataList.Root>
                        <DataList.Item>
                          <DataList.Label minWidth="122px">
                            Название
                          </DataList.Label>
                          <DataList.Value>{product.title}</DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                          <DataList.Label minWidth="122px">
                            Описание
                          </DataList.Label>
                          <DataList.Value>{product.description}</DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                          <DataList.Item>
                            <DataList.Label minWidth="122px">
                              Цена
                            </DataList.Label>
                            <DataList.Value>{product.price}</DataList.Value>
                          </DataList.Item>
                          <DataList.Label minWidth="122px">
                            Количество
                          </DataList.Label>
                          <DataList.Value>
                            {product.rating.count}
                          </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                          <DataList.Label minWidth="122px">
                            Изображение
                          </DataList.Label>
                          <DataList.Value>{product.image}</DataList.Value>
                        </DataList.Item>
                      </DataList.Root>
                    </Card>
                  </Flex>
                </Card>
              </ContextMenu.Trigger>
              <ContextMenu.Content variant="solid">
                <Text>{product.id}</Text>
                <ContextMenu.Item
                  onClick={() => {
                    setEditProduct({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      description: product.description,
                      image: product.image,
                      count: product.rating.count,
                    });
                    setModal(true);
                  }}
                  shortcut="✎"
                >
                  Изменить
                </ContextMenu.Item>
                <ContextMenu.Item
                  onClick={() => {
                    setDeleteModal(true);
                  }}
                  shortcut="⌫"
                  color="red"
                >
                  Удалить
                </ContextMenu.Item>
              </ContextMenu.Content>
            </ContextMenu.Root>
          ))}
        </Flex>
      </Box>
    </>
  );
};
