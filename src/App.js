import {Provider} from 'react-redux';
import {AppRouter} from './routers/AppRouter';
import './styles/app.css';
import { store } from './redux/storeRedux';

const App = () => {

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

export default App;
