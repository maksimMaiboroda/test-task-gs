import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CustomAutocomplete = (props) => {
    const {
        options,
        onChange,
        displayByKey,
        className
    } = props;
    const [inputValue, setInputValue] = React.useState('');

    const getOptionLabel = option => {
        const optionLabel = typeof option === 'string' ? option : option[displayByKey] || '';

        return optionLabel.toString();
    };

    return (<div className={className}>
        <Autocomplete
            onChange={(event, newValue) => {
                onChange(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            options={options}
            getOptionLabel={getOptionLabel}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
        />
    </div>);
}

export default CustomAutocomplete;
