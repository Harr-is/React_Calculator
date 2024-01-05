import { useState, useEffect } from "react";

const ApiFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetch("https://api.quotable.io/quotes/random");
      const jsonData = await apiData.json();
      setData(jsonData);
    };
    fetchData();
  }, [setData]);

  return (
    <>
      <ul>
        {data.map((item) => (
          <>
            <div className="quote">{item.content} </div>
            <div className="author">{item.author}</div>
          </>
        ))}
      </ul>
    </>
  );
};
export default ApiFetch;
