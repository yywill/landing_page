import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: ReactNode;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-left">
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div
            style={{ whiteSpace: 'pre-line' }}
            className="whiteSpace: 'pre-line' mt-4 text-xl md:px-20"
          >
            {props.description}
          </div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
