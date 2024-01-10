import { useEffect, useRef } from "react";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>React TypeScript</h1>
      <input type="text" placeholder="Name" ref={inputRef} />
    </div>
  );
};

export default App;
