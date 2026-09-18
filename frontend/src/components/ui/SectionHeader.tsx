interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({ title, subtitle, align = 'center', className = '' }: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} mb-12 md:mb-16 ${className}`}>
      <h2 className="text-h2 md:text-display font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
