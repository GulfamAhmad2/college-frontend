const Section = ({ className, children, id }) => {
  return (
    <section id={id} className={`max-w-[1170px] w-full mx-auto pt-[175px] relative z-1 ${className || ""}`}>
      {children}
    </section>
  );
};

export default Section;
