import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import {Stat} from 'components/Statistics/Statistics.styled.js'

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className="title">{title}</h2> : null}
      <ul className={css.statList}>
        {stats.map(stat => (
          <Stat
            className={css.item}
            key={stat.id}
            $type={stat.label}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </Stat>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};