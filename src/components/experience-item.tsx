interface ExperienceItemProps {
  role: string;
  company: string;
  dates: string;
  description: string[];
  isLast?: boolean;
}

export default function ExperienceItem({ role, company, dates, description, isLast }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 sm:pl-12 pb-12 group">
      {/* Timeline Connector */}
      {!isLast && (
        <div className="absolute left-3 sm:left-5 top-1 bottom-0 w-0.5 bg-border group-hover:bg-primary transition-colors duration-300"></div>
      )}
      {/* Dot */}
      <div className="absolute left-0 sm:left-2 top-0.5 w-6 h-6 bg-background border-2 border-border rounded-full flex items-center justify-center group-hover:border-primary transition-colors duration-300">
        <div className="w-3 h-3 bg-border rounded-full group-hover:bg-primary transition-colors duration-300"></div>
      </div>
      
      <div className="p-6 rounded-lg bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-primary font-headline">{role}</h3>
        <p className="text-md font-medium text-foreground mb-1">{company}</p>
        <p className="text-sm text-muted-foreground mb-3">{dates}</p>
        <ul className="list-disc list-inside space-y-1 text-foreground/90 text-sm">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
