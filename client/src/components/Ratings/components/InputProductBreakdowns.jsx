import React from 'react';
import IndividualInputProductBreakdown from 'IndividualInputProductBreakdown.jsx';

const InputProductBreakdowns = (props) => {

  if (props.characteristics) {

    const outerCharacteristics = props.characteristics;
    let characteristicsList = [];

    for (const key in outerCharacteristics) {
      characteristicsList.push(outerCharacteristics[key].inner_characteristic);
    }



    function CharacteristicsList(props) {
      const characteristics = props.characteristics;
      const listItems = characteristics.map((characteristic) => {
        return <IndividualInputProductBreakdown characteristic={characteristic} />
      });

      return (
        <ul>
          <CharacteristicsList characteristics={characteristicsList} />
        </ul>
      );
      console.log('react objects in char list: ', listItems);
    }

  }
}

export default InputProductBreakdowns;