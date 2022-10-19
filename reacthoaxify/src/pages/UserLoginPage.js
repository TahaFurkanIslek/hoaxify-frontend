import React from 'react'
import Input from '../components/Input'
import { withTranslation} from 'react-i18next';
import { login } from '../api/apiCalls';


class UserLoginPage extends React.Component {

    state = {
        username: null,
        password: null
    }

    onChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    onClickLogin=event=>{
        event.preventDefault()
        const{username,password}=this.state
        const creds={
            username,
            password
        }
        login(creds)
    }

    render() {
        const {t}=this.props
        return (
            <div className="container">
                <form>
                    <h1 className="text-center">{t('Login')}</h1>
                    <Input name="username" label={t("Username")} onChange={this.onChange}></Input>
                    <Input name="password" label={t("Password")}onChange={this.onChange} type="password"></Input>
                    <div className='text-center mt-3'>
                        <button className="btn btn-primary" onClick={this.onClickLogin}>{t('Login')}</button>
                    </div>
                </form>

            </div>
        )

    }


}
export default  withTranslation()(UserLoginPage) 