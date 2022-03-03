import React from 'react';
import { Alert } from 'react-native';


export const tonyCredentials = {
    ssn: '123456789', 
    dob: '05291970', 
    last_name: 'Stark',
    first_name: 'Anthony',
    country: 'United States of America',
    state_of_residence: 'California',
    current_address: '10880 Malibu Point',
    current_city: 'Malibu',
    current_zip: '90263',
    eye_color: 'brown',
    gender: 'M',
    height: "6'1",
    DL_number: "",
    DL_exp_date: '05292026',
    birth_place: 'New York, U.S.A',
    PP_number:'',
    PP_exp_date: ''
}

export const steveCredentials = {
    ssn: '234567891', 
    dob: '07041918', 
    last_name: 'Rodgers',
    first_name: 'Steve',
    country: 'United States of America',
    state_of_residence: 'New York',
    current_address: '569 Leaman Place',
    current_city: 'Brooklyn',
    current_zip: '44131',
    eye_color: 'blue',
    gender: 'M',
    height: "6'2",
    DL_number: "",
    DL_exp_date: '07042025',
    birth_place: 'New York, U.S.A',
    PP_number:'',
    PP_exp_date: ''
}


function citizendb(props) {

   

    

    const findUser = () => {
        for(let i = 0; i <= allCitizens; i++){
            for(let x =0; x <= allCitizens[i]; i++){
                if(ssn === allCitizens[i][x]){
                    Alert.alert(allCitizens[i])
                }
                else{
                    Alert.alert('No user found')
                }

            }
        }
    }

    return (
        <div>
            
        </div>
    );
}

export default citizendb;