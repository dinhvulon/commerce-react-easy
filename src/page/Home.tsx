import react, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import categoryApi from "../api/categoryApi";
import { axiosClient } from "../api/axiosClient";
const Home: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    const url = "/todos";
    const a = axiosClient.get(url, { params: "" }).then((response: any) => console.log(response));
  }, []);
  return (
    <div>
      <Button variant="contained">Hello World 1</Button>
      {
        items?.map(e => {
          return <div key={e}>{e}</div>;
        })
      }
      <button></button>
    </div>
  );
};

export default Home;
