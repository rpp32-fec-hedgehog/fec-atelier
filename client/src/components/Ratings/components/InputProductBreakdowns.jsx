import React from 'react';

const InputProductBreakdowns = (props) => {

  if (props.characteristics) {

    const outerCharacteristics = props.characteristics;
    let characteristicsList = [];

      for (const key in outerCharacteristics) {
        characteristicsList.push(outerCharacteristics[key].inner_characteristic);
      }

    function ListItems(props) {
      return <li>{props.characteristic}</li>;
    }

    function CharacteristicsList(props) {
      const characteristics = props.characteristics;
      const listItems = characteristics.map((characteristic) => {
        return <ListItems characteristic={characteristic} />
      });
      return (
        <ul>
          <CharacteristicsList characteristics={characteristicsList} />
        </ul>
      );
      console.log('react objects in char list: ', listItems);
    }

  } else {
    return (
      <div>nope!</div>
    );
  }
}

export default InputProductBreakdowns;