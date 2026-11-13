function DropDown(){
    const countryList = ['India', 'china', 'Pakistan'];

    return(
        <div>
            <select>
                {
                    countryList.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}


export default DropDown;