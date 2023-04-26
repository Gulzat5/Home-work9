import { useEffect, useState } from "react";
import styled from "styled-components";
export function User() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState();

  useEffect(() => {
    const Data = async () => {
      const respoce = await fetch("https://jsonplaceholder.typicode.com/users");
      const posts = await respoce.json();
      console.log(posts, "post");
      setData(posts);
      // newarr = posts;
    };
    console.log(Data);
    Data();
  }, []);

  async function fetchData(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const responseDate = await response.json();
    setItem(responseDate);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ad9be9",
      }}
    >
      {data?.map((el) => (
        <div
          style={{
            backgroundColor: "pink",
            color: "green",
          }}
          onClick={() => fetchData(el.id)}
          key={el.id}
        >
          {el.name}
        </div>
      ))}

      {item && (
        <div>
          <p>{item.username}</p>
          <p>{item.name}</p>
          <p>{item.username}</p>
          <p>{item.id}</p>
        </div>
      )}
    </div>
  );
}
const UserContainer = (styled.div = `

`);
