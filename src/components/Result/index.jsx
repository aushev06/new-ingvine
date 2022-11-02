
import clsx from 'clsx';

import styles from './Result.module.scss';
import Typography from "@mui/material/Typography";
import {Icon} from "../Icon";


export const Result = ({
  subTitle,
  title,
  style,
  children,
  status = 'empty',
  classes,
}) => {
  const rootClasses = clsx('d-flex flex-column align-items-center', classes?.root);
  const titleClasses = clsx(styles.title, classes?.title);
  const subtitleClasses = clsx(classes?.subtitle);
  const contentClasses = clsx(classes?.content);
  const iconClasses = clsx('d-flex align-items-center justify-content-center', classes?.icon);

  return (
    <div className={rootClasses} style={style}>
      {status && (
        <span className={iconClasses}>
          <Icon type={'success'} className={iconClasses} />
        </span>
      )}
      <Typography className={titleClasses}>{title}</Typography>
      {subTitle && <div className={subtitleClasses}>{subTitle}</div>}
      {children && <div className={contentClasses}>{children}</div>}
    </div>
  );
};
