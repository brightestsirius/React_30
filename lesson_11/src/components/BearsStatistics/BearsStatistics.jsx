import React from "react";
import useBearsStore from "../../store/features/bears";

export default function BearsStatistics() {
  const bears = useBearsStore((state) => state.bears);
  return <div>BearsStatistics: {bears}</div>;
}
