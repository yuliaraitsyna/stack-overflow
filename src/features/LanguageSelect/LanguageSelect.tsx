import styles from './LanguageSelect.module.css';

import { FormControl, MenuItem, Select } from "@mui/material"
import { languages } from "./model/languages"
import { v4 as uuidv4 } from 'uuid'

const LanguageSelect = () => {
    console.log(languages)
    return (
        <FormControl className={styles.select} variant='filled'>
            <Select defaultValue={languages[0]} label='Language'>
                {languages.map((language) => <MenuItem key={uuidv4()} value={language}>{language}</MenuItem>)}
            </Select>
        </FormControl>
    )
};

export { LanguageSelect };