export const customStyles = {
    control: (provided,state) => ({
        ...provided,
        borderRadius: '8px',
        border:'2px solid #37363A',
        paddingLeft:'4px',
        background: '#2F2E31',
        color: '#ffffff',
        fontSize:'0.875rem',
        boxShadow: state.isFocused ? 0 : 0,'&:hover': {},
    }),
    input: (provided) => ({
        ...provided,
        color: '#ffffff',
        fontSize:'0.875rem',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#ffffff',
        fontSize:'0.875rem',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'transparent' : 'transparent','&:hover': { backgroundColor: state.isSelected ? 'transparent' : '#37363A' },

        borderRadius: '6px',
        fontSize:'0.875rem',
    }),
    menu: (provided, state) => ({
        ...provided,
        background: '#2F2E31',
        borderRadius: '8px',
        border:'2px solid #37363A',
        outline: 'none',
        paddingLeft: '4px',
        paddingRight: '4px',
    })
}
