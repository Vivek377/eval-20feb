import UserCard from "@/components/UserCard";
import { getUser } from "@/utils/api";
import { User } from "@/utils/types";
import React from "react";

const Peoples = ({ data }) => {
  // console.log(data);
  return (
    <div>
      {data.map((ele) => {
        return <UserCard key={ele.id} {...ele} />;
      })}
    </div>
  );
};

export async function getStaticProps() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Peoples;
