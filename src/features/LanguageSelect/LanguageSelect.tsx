import styles from './LanguageSelect.module.css';

import { FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { languages } from "./model/languages"
import { v4 as uuidv4 } from 'uuid'
import { LanguageSelectProps } from './LanguageSelect.types';
import { useTranslation } from 'react-i18next';

const LanguageSelect: FC<LanguageSelectProps> = ({onChange, value}) => {
    const {t} = useTranslation();
    
    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value as string);
    }

    return (
        <FormControl className={styles.select} variant='filled'>
            <Typography variant='body1' fontWeight={600}>{t('languageSelectText')}</Typography>
            <Select defaultValue={value || languages[0]} onChange={handleChange}>
                {languages.map((language) => <MenuItem key={uuidv4()} value={language}>{language}</MenuItem>)}
            </Select>
        </FormControl>
    )
};

export { LanguageSelect };