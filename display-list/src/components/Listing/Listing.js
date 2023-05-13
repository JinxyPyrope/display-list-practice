import React, { useState } from "react"

function Listing() {
  const [list, setList] = useState(["Apple", "Banna", "Orange", "Cherry", "Watermelon"])

  return (
    <div>
      {list.map(fruit => (
        <div>{fruit}</div>
      ))}
    </div>
  )
}

export default Listing
