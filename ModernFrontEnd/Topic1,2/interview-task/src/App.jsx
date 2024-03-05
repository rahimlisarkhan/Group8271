import { useEffect, useRef, useState } from "react";
import "./App.css";
import { getItems } from "./service";

function App() {
  const [data, setData] = useState([]);

  const inputRef = useRef();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getItems({
      action: "get_ids",
      params: { offset: 10, limit: 50 },
    })
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleFilter = () => {
    setLoading(true);
    getItems({
      action: "filter",
      params: { price: +inputRef.current.value },
    })
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: 50 }}>
      <div>
        <input
          ref={inputRef}
          type="number"
          placeholder="Please enter price ex:1700"
        />
        <button onClick={handleFilter}>Search</button>
      </div>
      {loading && <h1>Loading...</h1>}
      {data?.map((item) => (
        <div
          key={item.id}
          style={{ border: "3px solid white", margin: 20, padding: 10 }}
        >
          <h4>{item.brand ?? "No brand name"}</h4>
          <h5>{item.product}</h5>
          <h6>₽{item.price}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
