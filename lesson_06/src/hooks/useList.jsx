import React, { useState, useEffect } from "react";

import service from "../services/mockapi";

export default function useList() {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const response = await service.get(`todos`);
      setList(response);
    } catch (err) {
      console.lg(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return { list };
}
