import { User } from "@/utils/types";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const UserCard = (props: User) => {
  const { name, username, address, id } = props;
  return (
    <Card maxW="sm" marginBottom={9}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{username}</Text>
          <Text color="blue.600" fontSize="2xl">
            {address.street}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link href={`/people/${id}`}>
            Get Todos
            </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
