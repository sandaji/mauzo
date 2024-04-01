import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div>
      <span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
}

export default Loading