import React from "react";
import { withTranslation } from 'react-i18next';
import { changeLanguage } from "../api/apiCalls";

const LanguageSelector = (props) => {
    const onChangeLanguage = language => {
        const { i18n } = props
        i18n.changeLanguage(language)
        changeLanguage(language)
    }

    return (
        <div className="container">
            <img
                src="https://flagcdn.com/16x12/tr.png"
                srcset="https://flagcdn.com/32x24/tr.png 2x,
                            https://flagcdn.com/48x36/tr.png 3x"
                width="20"
                height="18"
                alt="Turkish Flag"
                onClick={() => onChangeLanguage('tr')} style={{ cursor: 'pointer' }} />
            <img
                src="https://flagcdn.com/16x12/us.png"
                srcset="https://flagcdn.com/32x24/us.png 2x,
                            https://flagcdn.com/48x36/us.png 3x"
                width="20"
                height="18"
                alt="English Flag"
                onClick={() => onChangeLanguage('en')} style={{ cursor: 'pointer' }} />
        </div>
    )
}
export default withTranslation()(LanguageSelector)