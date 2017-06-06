import React from 'react';
import cx from 'classnames';
import { Loading } from 'light-ui';
import GitHubCalendar from 'github-calendar';
import 'github-calendar/dist/github-calendar.css';

import locales from 'LOCALES';
import styles from '../styles/github.css';
import cardStyles from '../styles/info_card.css';

const githubLocales = locales('github');
const githubTexts = githubLocales.sections;

class heatmap extends React.Component {
  constructor(props) {
    super(props);
    this.githubCalendar = false;
  }

  componentDidUpdate() {
    const { userLogin } = this.props;
    if (!this.githubCalendar && userLogin) {
      this.githubCalendar = true;
      $('#calendar') && GitHubCalendar("#calendar", userLogin);
    }
  }

  render() {
    const { className } = this.props;
    return (
      <div id="calendar" className={cx(styles["github_calendar"], className)}>
        <Loading loading={true} />
      </div>
    );
  }
}

heatmap.defaultProps = {
  className: ''
};

export default heatmap;
