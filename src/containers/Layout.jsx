import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AddAnArticle from '../pages/addAnArticle/AddAnArticle';
import LastData from '../pages/lastData/LastData';
import SoorehList from '../pages/soorehList/SoorehList';
import BooksWorkshop from '../pages/booksWorkshop/BooksWorkshop';
import Home from '../pages/home/Home';
import MainRoute from './mainRoute/MainRoute';
import useStyles from './styles';
import { setFirstSearchLayer, setSecondSearchLayer } from "./../context/redux/actions/setSearchLayersAction"
import { useDispatch } from 'react-redux';

const Layout = () => {
    const { root } = useStyles()
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(setFirstSearchLayer({ "page": 1 }))
        dispatch(setSecondSearchLayer())
    }, [])
    return (
        <HashRouter>
            <div className={root} >
                <Routes>
                    <Route path='/' element={<MainRoute />}>
                        <Route index element={<Home />} />
                        <Route path='/lastData/:id' element={<LastData />} />
                        <Route path='/booksWorkshop' element={<BooksWorkshop />} />
                        <Route path='/addAnArticle' element={<AddAnArticle />} />
                        <Route path='/soorehList' element={<SoorehList />} />
                    </Route>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default Layout;