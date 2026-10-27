import { Input, Button } from "antd";

import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSearch: (topic: string) => void;
}

function SearchForm({ onSearch }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;

    if (topic.trim() !== "") {
      onSearch(topic);
    }
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <Input type="text" name="topic" className={css.input} />
      <Button htmlType="submit">Search</Button>
    </form>
  );
}

export default SearchForm;
