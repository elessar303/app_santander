import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Login } from '../../containers/Login'
const mockStore = configureStore([]);


describe('Prueba en Login Container', () => {

    let store;

    store = mockStore({
        auth: {
            isLoggedIn: true,
            user: {
            id: '2',
            name: 'junior ayala',
            email: 'junior@gmail.com',
            password: '1234',
            isAdmin: true
            }
        },
        message: {
            message: ''
        },
        language: {
            lang: 'es'
        }
    });

    let wrapper = shallow(  <Provider store={store}>
                                <Login />
                            </Provider>);
    beforeEach(() => {
        store = mockStore({
            auth: {
                isLoggedIn: true,
                user: {
                id: '2',
                name: 'junior ayala',
                email: 'junior@gmail.com',
                password: '1234',
                isAdmin: true
                }
            },
            message: {
                message: ''
            },
            language: {
                lang: 'es'
            }
        });

        wrapper = shallow(  <Provider store={store}>
                                <Login />
                            </Provider>);

    });

    test('Debe mostrar el <Login />', () => {
        
        expect( wrapper ).toMatchSnapshot()
        
    })
    
    
})
