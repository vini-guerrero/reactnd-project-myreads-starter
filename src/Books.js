import React from 'react';

const Books = (props) => {
        let { data, onMove } = props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${data.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={data.shelf} onChange={(e) => onMove(data, e.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">Remove</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{data.title}</div>
                    <div className="book-authors" >{data.authors}</div>
                </div>
            </li>
        )
}

export default Books;