import React, { useRef } from "react";
import { Todo, User } from "../../utils/types";
import { Heading } from "@chakra-ui/react";
import { getUser, getUserTodo } from "@/utils/api";

const ID = ({ data }) => {
  const ref = useRef();

  console.log(ref);

  return (
    <div>
      <Heading>UserId{ref.current}</Heading>
      {data.map((ele) => {
        ref.current = ele.userId;
        return <div key={ele.id}>{ele.title}</div>;
      })}
    </div>
  );
};

export async function getStaticPaths() {
  let data = await getUser();
  return {
    paths: data.map((ele) => ({
      params: { id: String(ele.id) },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  let data = await getUserTodo(id);
  return {
    props: {
      data, 
    },
  };
}

export default ID;
