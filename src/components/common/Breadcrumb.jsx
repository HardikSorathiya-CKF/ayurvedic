import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { breadcrumbData } from "../../data/BreadcrumData";

export default function Breadcrumb({ page }) {
  const data = breadcrumbData[page];
  if (!data) return null;

  return (
    <section className="page-breadcrumb">
      <div className="container">
        <h1 className="page-breadcrumb-title">{data.title}</h1>
        <nav className="page-breadcrumb-nav d-flex align-items-center justify-content-center">
          {data.items.map((item, index) => (
            <span key={item.label} className="d-flex align-items-center">
              {index > 0 && <FiChevronRight />}
              {item.to ? (
                <Link to={item.to}>{item.label}</Link>
              ) : (
                <span className="current">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
