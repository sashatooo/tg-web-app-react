import { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Form.css'

const Form = (props) => {

    const [ country, setCountry ] = useState('')
    const [ city, setCity ] = useState('')
    const [ street, setStreet ] = useState('')
    const [ subject, setSubject ] = useState('physical')
    const { tg } = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send data'
        })
    }, [])

    useEffect(() => {
        if( !country || !city || !street ) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, city, street])

    const onChandgeCountry = (e) => {
        setCountry( e.target.value )
    }
    const onChandgeCity = (e) => {
        setCity( e.target.value )
    }
    const onChandgeStreet = (e) => {
        setStreet( e.target.value )
    }
    const onChandgeSubject = (e) => {
        setSubject( e.target.value )
    }


    return (
        <div className={ 'form' }>
            <h3>Введите ваши данные</h3>

            <input  className={ 'input' } 
                    type={'text'} 
                    placeholder={ 'Country' } 
                    value={ country }
                    onChange={ onChandgeCountry } />

            <input  className={ 'input' } 
                    type={'text'} 
                    placeholder={ 'City' } 
                    value={ city } 
                    onChange={ onChandgeCity }/>

            <input  className={ 'input' } 
                    type={'text'} 
                    placeholder={ 'Street' } 
                    value={ street }
                    onChange={ onChandgeStreet } />

            <select className={ 'select' }
                    value={ subject }
                    onChange={ onChandgeSubject }>
                <option value={ 'physical' }>Физ. лицо</option>
                <option value={ 'legal' }>Юр. лицо</option>
            </select>
        </div>
    )
}

export default Form