import { fonts } from './fonts/fonts';

export const Font = () => {
  return (
    <div className="font-test">
      {fonts.map(({ name }) => {
        return (
          <button
            key={name}
            onClick={() => {
              const ps = document.querySelectorAll('p');
              ps.forEach((p) => {
                p.style.fontFamily = name;
              });
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};
