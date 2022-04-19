import { React, useState, useEffect } from "react";
import axios from "axios";

const higherOrederComponent = (Component, URLAddress) => {
  return function WithAjax({ ...props }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [url, setURL] = useState([]);
    useEffect(() => {
      setLoading(true);
      axios
        .get(URLAddress)
        .then((res) => setURL(res.data))
        .catch(() => setError("url at HOC not found"))
        .finally(() => setLoading(false));        
    }, []);
    return <Component url={url} error={error} loading={loading} {...props} />;
  };
};
export default higherOrederComponent;