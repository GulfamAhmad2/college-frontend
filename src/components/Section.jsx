const Section = ({ className, children, id }) => {
  return (
    <section id={id} className={`max-w-[1170px] md:w-full w-[96%]  mx-auto pt-[15px] relative  ${className || ""}`}>
      {children}
    </section>
  );
};

export default Section;
