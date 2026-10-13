import type { Cat } from "../../types/cat";

interface CatInfoProps {
  cat: Cat;
}

function CatInfo({ cat }: CatInfoProps) {
  return (
    <div>
      <img src={cat.image} width="400px" height="300px" alt={cat.name} />
      <h3>{cat.name}</h3>
      <p>{cat.email}</p>
      <p>
        Age: <strong>{cat.age}</strong>
      </p>
      <p>
        Available: <strong>{cat.available ? "Yes" : "No"}</strong>
      </p>
    </div>
  );
}

export default CatInfo;
