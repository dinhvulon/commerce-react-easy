import react, { useEffect } from "react";
import Button from "@mui/material/Button";
import categoryApi from "../api/categoryApi";
import { axiosClient } from "../api/axiosClient";
const Home: React.FC = () => {
  useEffect(() => {
    const url = "/todos";
    const a = axiosClient.get(url, { params: "" }).then((response: any) => console.log(response));
  }, []);
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <button></button>
    </div>
  );
};

export default Home;
