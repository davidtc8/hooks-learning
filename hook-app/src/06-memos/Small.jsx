import { memo } from "react";

// cuando pones memo practicamente estas diciciéndole a react que memorice todo el componente
export const Small = memo(({value}) => {
  return (
    <small>{ value }</small>
  )
})
