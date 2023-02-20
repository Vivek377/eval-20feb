import React, { useRef } from "react";
import { Todo, User } from "../../utils/types";
import { Heading } from "@chakra-ui/react";

const ID = ({ data }) => {
  const ref = useRef();
  
  console.log(ref);

  return (  
    <div>
      <Heading>UserId{ref.current}</Heading>
      {data.map((ele) => {
        ref.current=ele.userId;
        return <div key={ele.id}>{ele.title}</div>;
      })}
    </div>
  );
};

export async function getStaticPaths() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let data = await res.json();
  return {
    paths: data.map((ele) => ({
      params: { id: String(ele.id) },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/todos`
  );
  let data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default ID;
