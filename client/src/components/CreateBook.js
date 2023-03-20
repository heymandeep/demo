import React, { useState } from 'react'
import { Link } from 'react-router-dom' ;
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateBook = (props) => {
    const navigate = useNavigate();
    const [ book, setBook ] = useState({
        title: '',
        isbn: '',
        author: '',
        description: '',
        published_date: '',
        publisher: '',
    })
    const onChange = (e) => {
        setBook({
             ...book, [e.target.name]: e.target.value
            });
    }
    const onSubmit = (e) => {
        e.preventDefault();

        axios
        .post('https://3000-heymandeep-demo-1bzw4mjxllb.ws-us90.gitpod.io/api/books' , book)
        .then((res) => {
            setBook({
                title: '',
                isbn: '',
                author: '',
                description: '',
                published_date: '',
                publisher: '',
            })

        navigate('/')

        })
        .catch((err) => {
            console.log('Failed to Create a mew Book!')
        })
    }

    return (
        <div className='CreateBook'>
            <div className='container'>
                <div className='row'>


                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to= '/' className='btn btn-outline-warning float-left'>Show All Books</Link>
                    </div>

                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Add Book</h1>
                        <p className='lead text-center'>Create A New book</p>
                        
                        <form noValidate onSubmit={onSubmit}>
                            {/* tittle */}
                            <div className='form-group'>
                                <input 
                                type='text'
                                placeholder='Title of the Book'
                                name='title'
                                className='form-control'
                                value={book.title}
                                onChange={onChange} 
                                />
                            </div>
                            <br />

{/* isbn */}
                            <div className='form-group'>
                                <input 
                                type='text'
                                placeholder='ISBN'
                                name='isbn'
                                className='form-control'
                                value={book.isbn}
                                onChange={onChange} 
                                />
                            </div>
                            {/* author */}

                            <div className='form-group'>
                                <input 
                                type='text'
                                placeholder='Author'
                                name='author'
                                className='form-control'
                                value={book.author}
                                onChange={onChange} 
                                />
                            </div>
                            {/* description */}

                            <div className='form-group'>
                                <input 
                                type='text'
                                placeholder='Describe this book'
                                name='descrption'
                                className='form-control'
                                value={book.description}
                                onChange={onChange} 
                                />
                            </div>
                            {/* published date */}

                            <div className='form-group'>
                                <input 
                                type='date'
                                placeholder='published_date'
                                name='published_date'
                                className='form-control'
                                value={book.published_date}
                                onChange={onChange} 
                                />
                            </div>
                            {/* publisher */}

                            <div className='form-group'>
                                <input 
                                type='text'
                                placeholder='Publisher of this Book'
                                name='publisher'
                                className='form-control'
                                value={book.publisher}
                                onChange={onChange} 
                                />
                            </div>

                            <input 
                            type='submit'
                            className='btn btn-outline-warning btn-block mt-4'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CreateBook