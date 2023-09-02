export const ChildArea = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (<div>
        <p>Component</p>
      </div>) : null}
    </>
  );
};
