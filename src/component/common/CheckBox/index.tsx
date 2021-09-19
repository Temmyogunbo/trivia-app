export const CheckBox = ({ checked }: { checked: boolean }) => {
  return (
    <>
      {checked ? (
        <img
          className="Header-logo"
          src="/icons/square-check-box-on.svg"
          alt="Logo"
        />
      ) : (
        <img
          className="Header-logo"
          src="/icons/square-check-box-off.svg"
          alt="Logo"
        />
      )}
    </>
  );
};
