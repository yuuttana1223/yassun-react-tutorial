export const List = ({ langs }) => {
  return (
    <div>
      {langs.map((lang, index) => (
        <div key={index}>{lang}</div>
      ))}
    </div>
  );
};
