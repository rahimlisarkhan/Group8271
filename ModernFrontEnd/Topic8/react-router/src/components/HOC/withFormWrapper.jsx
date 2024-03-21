import { useEffect, useState } from "react";

export function withFormWrapper(QucaqlayacagimComponent) {
  return (props) => {
    const [form, setForm] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
      // Your logic
    }, []);

    const handleSubmit = () => {
      console.log("handleSubmit Logic....");
    };

    const handleChange = () => {
      console.log("handleChange Logic....");
    };

    const handleTime = () => {
      console.log("handleTime Logic....");
    };

    return (
      <QucaqlayacagimComponent
        form={form}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleTime={handleTime}
        {...props}
      />
    );
  };
}
