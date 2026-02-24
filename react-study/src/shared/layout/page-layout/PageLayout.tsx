
import PageLayoutStyles from './PageLayout.module.css';

interface IPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PageLayout = ({ children, title }: IPageLayoutProps) => {
  return (
    <div className={PageLayoutStyles.PageLayoutContainer}>
      <div className={PageLayoutStyles.PageLayoutTitle}>
        <h1>{title}</h1>
      </div>
      <div className={PageLayoutStyles.PageLayoutContent}>
        {children}
      </div>
    </div>
  );
};
