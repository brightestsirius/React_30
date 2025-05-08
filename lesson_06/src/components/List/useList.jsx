import React, { useState, useEffect } from "react";

import service from "../../services/mockapi";

export default function useList(features) {
  const [list, setList] = useState([]);

  const getValue = async () => {
    try {
      const response = await service.get(features);
      setList(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  return { list };
}
