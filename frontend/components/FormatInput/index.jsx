import React, { PropTypes } from 'react';
import { Input } from 'light-ui';

const FORMAT_TYPES = {
  date: {
    date: true,
    datePattern: ['Y', 'm', 'd']
  },
  phone: {
    phone: true,
    phoneRegionCode: 'US'
  },
  number: {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
  }
};

class FormatInput extends React.Component {
  componentDidMount() {
    const { id, formatType } = this.props;
    const formatType = (`#${id}`, FORMAT_TYPES[formatType]);
  }

  render() {
    return (
      <Input {...this.props} />
    )
  }
}

export default FormatInput;
