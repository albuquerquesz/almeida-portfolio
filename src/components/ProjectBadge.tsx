import { ReactNode } from "react";

interface ProjectBadgeProps {
  icon?: ReactNode;
  name: string;
  href?: string;
}

const ProjectBadge = ({ icon, name, href }: ProjectBadgeProps) => {
  const content = (
    <>
      {icon && <span className="text-primary">{icon}</span>}
      <span>{name}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="badge-project cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return <span className="badge-project">{content}</span>;
};

export default ProjectBadge;
