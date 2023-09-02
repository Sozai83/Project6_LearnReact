// Allows this child component to skip re-rendering when parent componet changes but nothing affects to the child component (no changes to props or state in child component)
import { memo } from 'react';

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.group("ChildArea got rendered.")
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log(".....");
  })

  return (
    <>
      {open ? (<div>
        <p>Component</p>
        <button onClick={onClickClose}>Close</button>
      </div>) : null}
    </>
  );
});
