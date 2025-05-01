import { Box, Heading, Flex, Tabs, Text } from "@radix-ui/themes";
import { ProductsPanel } from "@widgets/panels/productspanel";
import { UsersPanel } from "@widgets/panels/userspanel";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  role: string;
}

export const AdminPanel: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setTimeout(() => setUser({ role: "admin" }), 3000);
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth");
    // очищаем кэщ
  };

  return (
    <Box p="4">
      <Flex mb="4" justify="between" align="center">
        <Heading>Админ-Панель</Heading>
        {user !== null ? (
          <Text onClick={handleLogout} style={{ cursor: "pointer" }}>
            Выйти
          </Text>
        ) : (
          <Text style={{ cursor: "pointer" }}>
            Войти
          </Text>
        )}
      </Flex>

      <Tabs.Root defaultValue="products">
        <Tabs.List>
          <Tabs.Trigger value="products">Товары</Tabs.Trigger>
          <Tabs.Trigger value="users">Пользователи</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Box>
            <Tabs.Content value="products">
              <ProductsPanel />
            </Tabs.Content>

            <Tabs.Content value="users">
              <UsersPanel />
            </Tabs.Content>
          </Box>
        </Box>
      </Tabs.Root>
    </Box>
  );
};
