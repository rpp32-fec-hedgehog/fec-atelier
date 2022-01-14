import React from 'react';
import IndividualInputProductBreakdown from './IndividualInputProductBreakdown.jsx';

const InputProductBreakdowns = (props) => {

  if (props.characteristics) {

    const outerCharacteristics = props.characteristics;
    let characteristicsList = [];

    for (const key in outerCharacteristics) {
      characteristicsList.push(outerCharacteristics[key].inner_characteristic);
    }

    let listItems = characteristicsList.map((characteristic) => {
        return (
          <IndividualInputProductBreakdown key={characteristic} characteristic={characteristic} />
        )
      });

      return (
        <ul className="list">
          {listItems}
        </ul>
      );
  }
}

export default InputProductBreakdowns;