import React from 'react';
import SetWhichBook from '../../components/setWhichBook/SetWhichBook';
import BooksContainer from '../../components/booksContainer/BooksContainer';
import { Helmet } from 'react-helmet';
const BooksWorkshop = () => {
    return (
        <>
            <Helmet>
                <title>
                    تنزیل | جستجو در قرآن
                </title>
            </Helmet>
            <SetWhichBook />
            <BooksContainer />
        </>
    );
}

export default BooksWorkshop;