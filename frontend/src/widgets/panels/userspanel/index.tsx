import {
  Card,
  Heading,
  Table,
  Text,
  ContextMenu,
  Button,
  Dialog,
  TextField,
  Flex,
  Select,
  AlertDialog,
  Box,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";

interface User {
  id: number;
  firstName: string;
  password: string;
  role: string;
}

export const UsersPanel: React.FC = () => {
  const [data, setData] = useState<User[] | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [editUser, setEditUser] = useState<any | null>(null);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/users?limit=5");
      const data: { users: User[] } = await response.json();
      setData(data.users);
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Flex gap="4" mb="2" justify="between">
        <Heading as="h2">Панель пользователей</Heading>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="classic">Добавить</Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title mb="4">Добавить нового пользователя</Dialog.Title>
            <Dialog.Description></Dialog.Description>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Логин
                </Text>
                <TextField.Root variant="classic" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Пароль
                </Text>
                <TextField.Root variant="classic" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Роль
                </Text>
                <Select.Root defaultValue="user">
                  <Select.Trigger variant="classic" />
                  <Select.Content variant="solid">
                    <Select.Group>
                      <Select.Label>Роль</Select.Label>
                      <Select.Item value="user">Пользователь</Select.Item>

                      <Select.Item value="manager">Менеджер</Select.Item>

                      <Select.Item value="admin">Администратор</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
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
            <Dialog.Title mb="4">
              Изменить существующего пользователя
            </Dialog.Title>
            <Dialog.Description></Dialog.Description>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Логин
                </Text>
                <TextField.Root
                  variant="classic"
                  defaultValue={editUser?.login}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Пароль
                </Text>
                <TextField.Root
                  variant="classic"
                  defaultValue={editUser?.password}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Роль
                </Text>
                <Select.Root defaultValue={editUser?.role}>
                  <Select.Trigger variant="classic" />
                  <Select.Content variant="solid">
                    <Select.Group>
                      <Select.Label>Роль</Select.Label>
                      <Select.Item value="user">Пользователь</Select.Item>

                      <Select.Item value="moderator">Менеджер</Select.Item>

                      <Select.Item value="admin">Администратор</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="classic" color="gray">
                  Отменить
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button variant="classic">Добавить</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
        <AlertDialog.Root open={deleteModal} onOpenChange={setDeleteModal}>
          <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>Удаление пользователя</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Вы уверены что хотите удалить пользователя?
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
      <Card style={{ padding: "24px" }} variant="classic">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
                <Text weight="bold">Идентификатор</Text>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <Text weight="bold">Логин</Text>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <Text weight="bold">Пароль</Text>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <Text weight="bold">Роль</Text>
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data?.map((user) => (
              <ContextMenu.Root key={user.id}>
                <ContextMenu.Trigger>
                  <Table.Row>
                    <Table.RowHeaderCell>{user.id}</Table.RowHeaderCell>
                    <Table.Cell>{user.firstName}</Table.Cell>
                    <Table.Cell>{user.password}</Table.Cell>
                    <Table.Cell>{user.role}</Table.Cell>
                  </Table.Row>
                </ContextMenu.Trigger>

                <ContextMenu.Content variant="solid">
                  <Text>{user.id}</Text>
                  <ContextMenu.Item
                    onClick={() => {
                      setEditUser({
                        id: user.id,
                        login: user.firstName,
                        password: user.password,
                        role: user.role,
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
          </Table.Body>
        </Table.Root>
      </Card>
    </Box>
  );
};
