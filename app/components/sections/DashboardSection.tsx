type DashboardSectionProps = {
  title?: string;
  children?: React.ReactNode;
};

export default function DashboardSection({
  title,
  children,
}: DashboardSectionProps): React.JSX.Element {
  return (
    <section className="w-full max-w-7xl px-4 py-6 mx-auto">
      {title && <h2 className="mb-6 text-3xl font-semibold">{title}</h2>}
      {children}
    </section>
  );
}
