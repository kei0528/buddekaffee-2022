export const BaseHeadline = ({ label, className }: { className?: string; label: string }) => {
  return <h2 className={`pb-1 mb-6 font-display font-bold text-4xl text-text-black border-b-2 border-text-black lg:text-5xl  2xl:text-6xl 2xl:pb-3 2xl:mb-8 ${className ?? ''}`}>{label}</h2>;
};
