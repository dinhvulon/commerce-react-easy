import { useState } from "react";
const Repositories: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search1</button>
      </form>
    </div>
  );
};
export default Repositories;
