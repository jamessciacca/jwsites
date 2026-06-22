type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-line bg-white p-7 card-hover sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
