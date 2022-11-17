import React from 'react';
import s from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'function/randomColor';
const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={s.label}> {stat.label} </span>
            <span className={s.percentage}> {stat.percentage}% </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
