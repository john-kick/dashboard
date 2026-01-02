type DashboardSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function DashboardSection({
  title,
  children,
}: DashboardSectionProps): React.JSX.Element {
  return (
    <div className="flex flex-col items-center p-3 m-3">
      <h2 className="text-3xl mb-4">{title}</h2>
      <div className="flex flex-wrap gap-12 mb-4">{children}</div>
    </div>
  );
}
