import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'

function Blogs() {
    const projects = [
        {
            title: 'How to build your own logging service',
            description: "In this Blog, I talk about how we can build our own logging service with Step by Step demostration by building Logging Service.",
            content: "This a blog",
            tags: ['Networking', 'Logging', 'C#', 'Python'],
            date: "21 Feburary, 2022",
            author: "Amritpal Singh",
            id: 0,
        }];
    return (
        <div className='section' >
            <div className='section_divider' />
            <h2 className='section_title'>Blogs</h2>
            <div className='cards_container'>
                {
                    projects.map(({ id, title, description, tags, author, date }) => (
                        <div className='card_list' key={id}>
                            <div className='title_content'>
                                <h3 style={{ fontSize: "1.8rem" }}>{title}</h3>
                                <hr />
                            </div>
                            <p className='card_description'>{description}</p>
                            <div>
                                <div className='tag_title'>Tags</div>
                                <ul className='tag_list'>
                                    {tags.map((tag, index) => (
                                        <li className='tag' key={index}>{tag}</li>
                                    ))}
                                </ul>

                            </div>

                            <Link to={`/blogs/${id}`}><button className='blog_link'>Read</button></Link>
                            <ul className='blog_details'>
                                <li>Author: {author}</li>
                                <li>{date}</li>
                            </ul>
                        </div>
                    )
                    )
                }
            </div>
        </div >);
}

export default Blogs;
