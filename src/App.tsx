import { useEffect, useRef } from "react";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" placeholder="Name" ref={inputRef} />
      <h1>React TypeScript</h1>
    </div>
  );
};

export default App;
