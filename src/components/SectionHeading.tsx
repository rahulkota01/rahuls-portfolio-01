interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="mb-12 md:mb-16">
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
    )}
    <div className="mt-4 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
  </div>
);

export default SectionHeading;
