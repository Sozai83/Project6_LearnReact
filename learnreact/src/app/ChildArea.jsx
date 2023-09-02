import { memo } from 'react';

export const ChildArea = memo((props) => {
  const { open } = props;
  console.group("ChildArea got rendered.")
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log(".....");
  })

  return (
    <>
      {open ? (<div>
        <p>Component</p>
      </div>) : null}
    </>
  );
});
