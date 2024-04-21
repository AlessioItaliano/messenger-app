import Select from 'react-select';

const ChoiceChatSelect = ({ options, selectedRoom, onSelectRoom }) => {
  return (
    <Select
      options={options}
      value={selectedRoom}
      onChange={onSelectRoom}
      styles={{
        control: baseStyles => ({
          ...baseStyles,
          height: 'auto',
          padding: '7px 15px',
          borderRadius: '12px',
          border: 'none',
          width: '340px',
        }),
        valueContainer: baseStyles => ({
          ...baseStyles,
          padding: '0',
          margin: '0',
        }),
        indicatorsContainer: baseStyles => ({
          ...baseStyles,
          padding: '0',
          margin: '0',
        }),
        input: baseStyles => ({
          ...baseStyles,
          padding: '0',
          margin: '0',
        }),
      }}
    />
  );
};

export default ChoiceChatSelect;