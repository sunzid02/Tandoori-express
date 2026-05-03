type SectionHeadingProps = {
  kicker: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ kicker, title, text, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="section-kicker">{kicker}</p>
      <h1 className="section-title">{title}</h1>
      {text && <p className="mt-5 text-base leading-8 text-slate-700 dark:text-cream/80 sm:text-lg">{text}</p>}
    </div>
  );
}
