import React from 'react';
import clsx from 'clsx';
import truncate from 'lodash/truncate';
import { useInView } from 'react-intersection-observer';

import styles from './CardItem.module.scss';
import {Typography} from "@mui/material";
import {isMobile} from "../../utils/mobile";

const imageSize = isMobile ? 230 : 300;
const DEFAULT_TAGS = [];

export const CardItem = React.memo(function CardItem({
  id,
  disabledFavorite = false,
  type,
  classes,
  description,
  favorite = false,
  imageUrl,
  name,
  price,
  size,
  tags = DEFAULT_TAGS,
  isBlog = false,
  icon,
  count,
  tooltipText,
  topRightAdornment = null,
  importButton,
  onPlus,
  onMinus,
  onClickFavorite,
  hidePrice,
  isrestaurantsStorePage = false,
  rating,
  cuisine,
}) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const noImage = type && type === 'restaurant' ? '/static/no_avatar.svg' : '/static/no_image.svg';
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const userData = {};

  const getTypeCls = (s) => {
    if (typeof s !== 'string') {
      return '';
    }
    return `cardItem${s.charAt(0).toUpperCase()}${s.slice(1)}`;
  };

  const rootCls = clsx(styles.cardItem, classes?.cardItem, {
    [styles[getTypeCls(type)]]: type,
    [styles.large]: size === 'large',
    [styles.storePageCardItem]: isrestaurantsStorePage,
    [styles.categoryCardItem]: classes?.cardItem === 'categoryCardItem',
  });

  return (
    <div className={rootCls}>
      {type !== 'blog' && (
        <div className={styles.cardItemTop}>

        </div>
      )}

      <div ref={ref} className={clsx(styles.cardItemImage, classes?.cardItemImage)}>
        {inView ? (
          <img
            className={imageLoaded ? styles.cardItemImageOpacity : undefined}
            src={imageUrl ? `${imageUrl}?width=${imageSize}&height=${imageSize}` : noImage}
            alt={name}
            onLoad={() => setImageLoaded(true)}
          />
        ) : null}
      </div>
      <div className={clsx(styles.cardItemDetails, classes?.cardItemDetails)}>
        <Typography className={clsx(styles.cardItemTitle, classes?.cardItemTitle)} variant="h5" component="h3">
          {truncate(name, { length: 50 })}
        </Typography>

        <Typography
          component="p"
          className={clsx('description', classes?.cardItemDescription)}
          dangerouslySetInnerHTML={{
            __html:
              truncate(description.replace(/(<([^>]+)>)/gi, ''), {
                length: 95,
              }) || '',
          }}
        />
      </div>
    </div>
  );
});
